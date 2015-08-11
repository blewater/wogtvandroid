(function () {
    'use strict';
}());

var appWoG = {

    CACHE_DUR: 86400000, // 24 * 3600 * 1000 (24 hours in millies)

    //---- Constructor
    init: function () {

        // Init Error Handling first
        var cloudloggererrorhandler = window.onerror;
        window.onerror = function myerrorhandler(errormsg, url, linenumber) {

            $('.busy').remove();

            var errstring = 'error: ';
            if (errormsg && errormsg.length) {
                errstring = errstring + errormsg;
            }
            if (url) {
                errstring = errstring + ', url: ' + url;
            }
            if (linenumber) {
                errstring = errstring + ', linenumber: ' + linenumber;
            }

            console.log(errstring);
            //alert(errstring);

            //call the cloud error handling service
            if (cloudloggererrorhandler) {
                cloudloggererrorhandler();
            }

        };
        this.isNative = false;
        this.netIsOn = true;
        this.bacon = window.Bacon;
        this.gapi = window.gapi;

        //Cordova deviceready init
        document.addEventListener('deviceready', function initDeviceReady() {
            // Pass this (appWoG) as the context to phonegapInit event handler
            appWoG.phonegapInit.call(appWoG);
        }, false);

        // Signal ready here to start loading yt Playlists
        syncInit.compTask();

        // Load main page html fragments as soon as possible
        this.loadHtmlFragment("navheader_m", this.addMNavHeaderFrag);
        if (this.netIsOn) {
            this.loadHtmlFragment("section_m", this.addMainListFrag);
        }

        // Load html templates async $.ajax({url: "http://m.wordofgod.gr/plist_templ.html", cache: false})
        this.plistsTempBcProp = this.getHtmlAsProp("plist_templ", true);
        this.videosListTempBcProp = this.getHtmlAsProp("vidlist_templ", true);

        this.vidNavFragBcProp = this.getHtmlAsProp("navheader_v", false);
        //-- Events

        //Go back to Top
        $('.top').on('singletap', function backToTop() {

            $('article.current').scrollTop(0);
        });

        $.subscribe('chui/navigate/enter', this.navEnter);
        $.subscribe('chui/navigateBack/leave', this.navBackLeave);

        this.setVideoTapPlayEvent(this.env);
    },
    /**
     * Load html fragment from Server and if it fails opt for the Local version instead
     * htmlFile: Html filename wout the .min.html extension
     * contentHandler: Content handler function
     */
    loadHtmlFragment: function (htmlFile, contentHandler) {
        htmlFile += '.min.html';
        this.bacon.fromPromise($.ajax({
            url: appWoGServer + htmlFile, cache: false
        }))
        .mapError(this.getLocalFile, htmlFile, contentHandler)
        .onValue(contentHandler);
    },
    /**
     * Loads an (html?) and processes it.
     * if the primary load promise fails from m.WordofGod.gr then opt in 
     * for the local file within the application apk etc. May be out of date 
     * but is guarranteed.
     * localFilename: local version of (html?) file.
     * contentHandler: Content handler function
     */
    getLocalFile: function (localFilename, contentHandler) {
        $.get(localFilename, function doneLocFrag(content) {
            contentHandler(content);
        });
        var msg = "File failed to load from m.WoG.gr. Opted for the local instead: " + localFilename;
        Rollbar.info(msg);
        console.log(msg);
    },
    /**
     * Load html template from Server and if it fails opt for the Local version instead
     * htmlFilename: Html filename wout the .min.html extension
     * isTempl: Whether we should objectify as a template
     * returns: objectified template as Bacon property
     */
    getHtmlAsProp: function (htmlFilename, isTempl) {
        htmlFilename += '.min.html';
        var that = this;
        return Bacon.fromPromise($.ajax({
            url: appWoGServer + htmlFilename, cache: false
        }))
                .flatMapError(function () {
                    return that.getLocalFileAsProm(htmlFilename);
                })
                .map(function (cont) {
                    // objectify if it is a template
                    return isTempl ? $.template(cont) : cont;
                })
                .toProperty();
    },
    /**
     * Loads an html file with a bacon promise.
     * This is only called if the primary load promise fails from m.WordofGod.g
     * This is the local file within the application apk etc. May be out of date 
     * but is guarranteed to load.
     * Logs this function.
     * localFilename: local template html filename.
     * returns Bacon promise stream of local template
     */
    getLocalFileAsProm: function (localFilename) {
        var msg = "File failed to load from m.WoG.gr. Opted for the local instead: " + localFilename;
        Rollbar.info(msg);
        console.log(msg);
        return Bacon.fromPromise($.get(localFilename));
    },
    /*
	 * Callback when nav header loads up.
	 * Add html & icon events
	 */
    addMNavHeaderFrag: function (html) {
        //Add icons
        $('#mainNav').append(html);

        //Update status
        appWoG.updNetIcon();

        // Attach icon events
        $('#hReload').off('tap').on('tap', function homeRefreshTap() {
            document.location = "index.min.html";
        });
        $('#homeSearch').off('tap').on('tap', function VidPgRefreshTap() {
            var so = $('.searchBar');
            if (so.length === 0) {
                $.UISearch({ id: 'mainSearchBox', articleId: '#playlists', placeholder: 'Αναζήτηση', results: 5 });
                $('#mainSearchBox').focus();
            } else {
                so.remove();
            }
        });
        $('.fa-bars').off('tap').on('tap', function backFromBarsPopOver() {
            var icon = this;
            $.UIPopover({
                title: 'Περί m.WordofGod.tv',
                trigger: icon,
                content: appWoG.barsPopoverCont,
                callback: function UIBarsPopoverCb() {
                    appWoG.menuPOEvHandler();
                }
            });

        });
        $('.fa-sort-alpha-asc').off('tap').on('tap', function backFromSortPopOver() {
            var icon = this;
            $.UIPopover({
                title: 'Ταξινόμηση ανά...',
                trigger: icon,
                content: appWoG.sortPopoverCont,
                callback: function UISortPopoverCb() {
                    var art = $('article.current').attr('id');
                    appWoG.sortPOEvHandler(art);
                }
            });

        });
    },
    /*
	 * Callback when nav header loads up.
	 * Add html & icon events
	 */
    addVNavHeaderFrag: function () {
        //Add icons
        var navHeader = $('#videosNav');
        if (navHeader.html().indexOf('table') === -1) {
            this.vidNavFragBcProp.onValue(function (navHtml) {
                navHeader.append(navHtml);

                //update status
                appWoG.updNetIcon();

                // add events
                $('#backToMain').off('tap').on('tap', function homeRefreshTap() {
                    $.UIGoBackToArticle('#playlists');
                });
                $('#vReload').off('tap').on('tap', function VidPgRefreshTap() {
                    if (appWoG.netIsOn) {
                        var selPlaylistId = $("#videosList").data('id');
                        appWoG.gapiLoadVideos(selPlaylistId);
                    } else {
                        document.location = "index.min.html";

                    }
                });
                $('.fa-bars').off('tap').on('tap', function backFromBarsPopOver() {
                    var icon = this;
                    $.UIPopover({
                        title: 'Περί m.WordofGod.tv',
                        trigger: icon,
                        content: appWoG.barsPopoverCont,
                        callback: function UIBarsPopoverCb() {
                            appWoG.menuPOEvHandler();
                        }
                    });
                });
            });
        } else {
            appWoG.updNetIcon();
        }
    },
    addMainListFrag: function (html) {
        $('#secPlaylists').prepend(html);

        //Give time for the UI to finish more urgent tasks...
        setTimeout(function () { $(".liveFlexText").fitText(1.1); }, 0);

        // Touch event for entering playlists
        appWoG.setTouchPlayLiveEvent();
        appWoG.setTouchPlaylistEvent();
    },

    //-- Properties

    //hard code to el for now
    lang: 'el',

    ytPlayerParams: '?autohide=1&autoplay=1&controls=1&showinfo=0&rel=0&modestbranding=1&&theme=dark&origin=http://' + location.host,
    cachedLiveLangYtUrl: {
        el: {
            vidID: null
        },
        en: {}
    },

    youtubeLangChannel: {
        el: "UCc3hweSOwmGb6hdQrPFc_cw", //"wordofgodgreece",
        en: "wordofgodenglish"
    },
    getYoutubeLangChannel: function () {

        // Recommended way to get a channel's listings by id
        return this.youtubeLangChannel[this.lang];
    },
    listsOrderby: {
        playlists: "date", //default
        videos: "published" //default
    },

    getListOrderby: function (list) { return this.listsOrderby[list]; },
    setListOrderby: function (list, newOrderby) { this.listsOrderby[list] = newOrderby; },

    /**
	  * Create the html only youtube url
	 **/
    getYTUrl: function (ytVideoId) {
        var ytUrl = '';
        if (ytVideoId !== void 0) {
            ytUrl = 'http://www.youtube.com/embed/' + ytVideoId + this.ytPlayerParams;
        }

        return ytUrl;
    },
    barsPopoverCont: "<ul class='list'><li data-opt='en'><h3>English</h3><h6>...under construction</h6></li><li data-opt='about'><i class='fa fa-info-circle fa-3x'></i><h3>About Word of God Mobile</h3></li></ul>",
    sortPopoverCont: "<ul class='list'><li class='comp' data-opt='date'><aside><i class='fa fa-3x fa-newspaper-o'></i></aside><div><h3>Πρόσφατες εγγραφές</h3></div><aside><h4>Φθίνουσα</h4><span class='nav'></span></aside></li><li class='comp' data-opt='rating'><aside><i class='fa fa-3x fa-heart-o'></i></aside><div><h3>Αξιολόγηση θεατών</h3></div><aside><h4>Φθίνουσα</h4><span class='nav'></span></aside></li><li class='comp' data-opt='viewCount'><aside><i class='fa fa-3x fa-sort-numeric-desc'></i></aside><div><h3>Αριθμός θέασης</h3></div><aside><h4>Φθίνουσα</h4><span class='nav'></span></aside></li></ul>",
    cachedPL: {
        ts: null,
        resp: null,
        orderBy: null
    },
    cachedVideos: {
        ts: null,
        resp: null,
        orderBy: null
    },

    //---- Events

    // Function for leaving navigateBack:
    sortPOEvHandler: function (list) {

        $('.popover').on('singletap', function (e) {

            if (appWoG.netIsOn) {
                var li, opt;
                if (e.target.nodeName === 'LI') {
                    opt = e.target.data('opt');

                } else {
                    li = $($(e.target).closest('li')[0]);
                    opt = li.data('opt');
                }

                appWoG.setListOrderby(list, opt);
                appWoG.gapiLoadPlaylists(opt);
            }

            $.UIPopoverClose();
        });
    },
    /**
     * Vert align element.
     * elemId: element string name css style with '#' in front.
     */
    vertAlign: function (elemId) {
        var new_margin = Math.ceil(($(window).height() * 0.8 - $(elemId).height()) / 2);
        $(elemId).css('margin-top', new_margin + 'px');
    },
    menuPOEvHandler: function () {
        $('.popover').on('tap', function (e) {
            var li, opt;
            if (e.target.nodeName === 'LI') {
                opt = e.target.data('opt');

            } else {
                li = $($(e.target).closest('li')[0]);
                opt = li.data('opt');
            }

            if (opt === 'about') {
                $.UISheet({ id: "abSheet", handle: false });

                var section = $('.sheet').find('section');

                if (section.html().indexOf('aboutDiv') === -1) {

                    section.append("<div id='aboutDiv' class='hcenter'><img src='css/images/WOG_icon_36x36.png' alt='WoG'><h6>version 1.0.508</h6><p>Τετάρτη 20 Μαίου 2015</p><h6>Το www.WordofGod.gr τώρα και στις κινητές συσκευές.</h6></div>");
                    
                    $('.sheet').on('tap', function () {
                        $.UIHideSheet();
                    });

                    $(window).on('resize', function () { appWoG.vertAlign('#aboutDiv'); });
                }

                $.UIShowSheet("#abSheet");

                // Close the popover:
                $.UIPopoverClose();

                // Finally resize about content
                appWoG.vertAlign('#aboutDiv');

            } else if (opt === 'exit') {

                if (appWoG.isNative) {
                    navigator.app.exitApp();
                }
            }

        });
    },

    navEnter: function (topic, id) {

        if (id === 'videos') {

            appWoG.addVNavHeaderFrag();
        }

    },
    navBackLeave: function (topic, id) {
        if (!this.isNative) {
            switch (id) {
                case 'ytIFrmArticle':
                    $("#video-iframe").attr("src", "");
            }
        }
    },
    updNetIcon: function () {
        this.netIsOn ? $('.fa-ban').removeClass('fa-ban') : $('.ban-icon').addClass('fa-ban');
    },
    showNoNetPopup: function (introPrompt, isLiveStream, positActionFunc) {
        var mainPrompt = 'Δεν έχετε δυκτυακή σύνδεση! Παρακαλώ συνδεθείτε και πατήστε Ok';

        $.UIPopup({
            id: "noNetPopup",
            title: 'Εκτός δυκτύου',
            message: introPrompt || isLiveStream ? mainPrompt : mainPrompt + ' τη θέαση του WordofGod Video.',
            cancelButton: 'ΑΡΓΟΤΕΡΑ',
            continueButton: 'OK ΣΥΝΔΕΘΗΚΑ',
            callback: positActionFunc
        });

    },
    checkConnection: function () {
        var networkState = navigator.connection.type;

        if (networkState !== Connection.NONE) {

            this.netIsOn = true;

        } else {
            this.netIsOn = false;
            this.showNoNetPopup(true, false, function rebootFunc() {
                document.location = "index.min.html";
            });
        }
        this.updNetIcon();

        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'No network connection';

        console.log('Connection type: ' + states[networkState]);
    },
    onOffline: function () {
        appWoG.netIsOn = false;
        appWoG.updNetIcon();
    },
    onOnline: function () {
        if (appWoG.getLiveYtVidID() === null) {
            //if it was offline and came back in reload app to ensure correct live id
            document.location = "index.min.html";
        }
        appWoG.netIsOn = true;
        appWoG.updNetIcon();
    },
    phonegapInit: function () {
        navigator.splashscreen.hide();

        this.checkConnection();

        document.addEventListener("offline", this.onOffline, false);
        document.addEventListener("online", this.onOnline, false);

        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function (message) {
                navigator.notification.alert(
					message,    // message
					null,       // callback
					"WoGTVm", // title
					'OK'        // buttonName
				);
            };
        }

        this.isNative = true;

        //alert("deviceReady received!, appWoG.isNative: " + appWoG.isNative);
    },

    showNoYtPopup: function (isLiveStream, ytID) {
        $.UIPopup({
            id: "noYtPopup",
            title: 'Η εφαρμογή YouTube δεν είναι εγκατεστημένη',
            message: 'Παρακαλώ εγκαταστήσετε την εφαρμογή YouTube από το Google playstore για τη θέαση του WordofGod Video.',
            cancelButton: 'ΑΡΓΟΤΕΡΑ',
            continueButton: 'ΟΚ ΤΗΝ ΕΓΚΑΤΕΣΤΗΣΑ',
            callback: function () {
                if (!isLiveStream) {
                    appWoG.phA_playYoutube(isLiveStream, ytID);
                }
            }
        });
    },
    /**
	  * Phonegap Android version of play youtube
	  */
    phA_playYoutube: function (isLiveStream, ytID) {
        //console.log('in phA_playYoutube(), ytID: ' + ytID + ', window.Youtube: ' + youtube + ', YouTube: ' + YouTube + ' is ' + (youtube === void 0 ? "Undef" : "Def"));
        //navigator.notification.alert('youtube: ' + youtube);


        if (ytID === void 0 || ytID === null) {

            // Null id. Trouble if in online mode
            
            if (isLiveStream) {

                Rollbar.info('Null live id: ' + ytID + ' in phA_playYoutube...rebooting');
                // Reboot
                document.location = "index.min.html";

            } else {
                Rollbar.info('Null id: ' + ytID + ' phA_playYoutube');

            }
            return;
        }

        if (this.netIsOn) {

            youtube.playVideo(ytID, function phA_playYoutubeSucc() { },
                function phA_playYoutubeErr(err) {

                    var errorMsg = 'window.plugins.youtube.playVideo() failed: (' + err + ') to play youtube URL: ' + ytID;

                    Rollbar.error('User has likely not installed youtube. Cannot play: ' + ytID, err);

                    if (err.indexOf('No Activity') > -1) {
                        //Youtube is not installed
                        appWoG.showNoYtPopup(isLiveStream, ytID);
                    }
                }
            );
        }
            // Offline error
        else {

            // Offline Error when pressed on live Event, reboot app to get the live event Id if user says they connected
            if (isLiveStream) {
                appWoG.showNoNetPopup(false, isLiveStream, function rebootFunc() {
                    document.location = "index.min.html";
                });
            } else {
                // Offline Error when pressed on a on demand Event, play the event if user says they connected
                appWoG.showNoNetPopup(false, isLiveStream, function replayFunc() {
                    appWoG.phA_playYoutube(isLiveStream, ytID);
                });
            }
        }
    },

    getYouTubeID: function (url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[7].length === 11) {
            return match[7];
        }
        return ('');
    },

    /**
	  * Show the busy indicator on the nan or other div
	  * Grayish in color
	  */
    setBusySvg: function (elemName) {

        var elem = $(elemName);
        elem.UIBusy({ color: '#444', size: 60 });
        elem.find('.busy').UICenter();

    },

    setTouchPlayLiveEvent: function () {
        var that = this;
        $('.liveFlexText').on('tap', function liveVideoDivTap(e) {
            if (that.netIsOn) {
                that.playLiveEvent();
            }

            e.preventDefault();
        });
    },


    // On Index any playlist "click", singletap event by delegate
    setTouchPlaylistEvent: function () {

        var that = this;
        $('#playlistsList').on("singletap", "li", function setSelectaPlaylistEventTap() {

            // declare & set ids of selected playlist
            var li = $(this);

            // playlist id
            var selPlaylistId = li.attr('id');
            $('#videosList').data('id', selPlaylistId);

            // title of playlist
            var title = li.data('title');
            $('#playListTitle').text(title);

            if (that.netIsOn) {

                that.gapiLoadVideos(selPlaylistId);

            } else {

                // offline error when pressed to load videos list
                appWoG.showNoNetPopup(true, false, function replayFunc() {
                    appWoG.gapiLoadVideos(selPlaylistId);
                });
            }
        });

    },

    // On any videos "click", tap event by delegate
    setVideoTapPlayEvent: function () {

        var that = this;
        $('#videosList').on("singletap", "div", function setPLVideoTapPlayEventTap(e) {

            e.preventDefault();
            e.stopPropagation();

            var ydiv = $(this);
            var ytTitle = ydiv.find('>').data('title');
            var ytID = ydiv.find('>').data('ytid');

            that.showYT(false, ytTitle, ytID);
        });
    },

    /**
     * Start video player
     */
    showYT: function (isLiveStream, ytTitle, ytID) {

        if (!this.isNative) {
            var urlYouTube = this.getYTUrl(ytID);

            $('#video-iframe').attr('src', urlYouTube);

            //console.debug ('view:' + urlYouTube);

            $('#videoTitle').text(ytTitle);

            $.UIGoToArticle('#ytIFrmArticle');

            //phonegap Youtube Vod
        } else {

            // Phonegap android youtube play
            this.phA_playYoutube(isLiveStream, ytID);
        }
    },
    /**
	  * Algorithmic response to live url
	  * 1. Get latest cached Youtube WordOfGod active live event (initially hard coded)
	  * 2. if not, Get from storage
	  */
    getLiveYtVidID: function () {

        var liveYtVidID = this.cachedLiveLangYtUrl[this.lang].vidID;

        return liveYtVidID;
    },

    setLiveYtUrl: function (ytID) {
        // Caching entry for current language
        if (ytID !== null) {
            this.cachedLiveLangYtUrl[this.lang].vidID = ytID;

            amplify.store(this.lang + this.liveYtIDKey, ytID);
        }
    },
    /**
	  * Display iframe and play the active live event
	  */
    playLiveEvent: function () {
        var liveYtVidID = this.getLiveYtVidID();

        if (liveYtVidID) {
            this.showYT(true, "Ζωντανή μετάδοση...", liveYtVidID);
        }
    },
    /**
     * Load first data upon module initialization
     * to be called from user of module
     */
    loadInit: function () {
        if (gapi.client.youtube) {
            this.gapiLoadLiveEvent();
            this.gapiLoadPlaylists(this.getListOrderby("playlists"));
        }
    },
    gapiLoadLiveEvent: function () {
        var that = this;
        var reqOptions = {
            channelId: this.getYoutubeLangChannel(),
            eventType: 'live',
            part: 'id',
            type: 'video',
            fields: 'items/id',
            maxResults: 1
        };
        this.gapi.client.youtube.search.list(reqOptions)
		.then(function gapiLoadLiveEventResp(response) {
		    var liveItems = response.result.items;
		    if (liveItems && liveItems[0] && liveItems[0].id && liveItems[0].id.videoId) {
		        that.setLiveYtUrl(liveItems[0].id.videoId);
		    }
		});
    },
    /*
	 * Process Index playlists gapi qry results with loaded html template
	 */
    procPlaylistsResp: function (pListTemp, response) {
        if (response && !('error' in response)) {
            var playlistsList = $("#playlistsList");
            var playlistData = response.result.items;
            playlistsList.empty();
            for (var i = 0; i < playlistData.length; ++i) {
                playlistsList.append(pListTemp(playlistData[i]));
            }
        } else if ('error' in response) {
            var errorData = JSON.stringify(response.error.data[0]);
            if (errorData) {
                var errorMsg = "gapiLoadPlaylists(), error: " + errorData;

                Rollbar.error(errorMsg, response.error);

                //throw errorMsg;
            }
        }
        $('.busy').remove();
    },
    gapiLoadPlaylists: function (sortVal) {

        this.setBusySvg('#mainNav');

        var that = this;

        // Check if exists cached value less than 24 hours
        if (!this.cachedPL.resp || !this.cachedPL.ts || !this.cachedPL.orderBy || this.cachedPL.orderBy !== sortVal || Date.now() - this.cachedPL.ts > this.CACHE_DUR) {

            this.gapi.client.youtube.search.list({
                channelId: this.getYoutubeLangChannel(),
                part: 'id,snippet',
                type: 'playlist',
                order: sortVal,
                maxResults: 50
            })
			.then(function (res) {
			    return res.result.items.map(function (item) {
			        return item.id.playlistId;
			    });
			})
			.then(function (plIds) {
			    return gapi.client.youtube.playlists.list({
			        id: plIds.join(','),
			        part: 'id,snippet,contentDetails',
			        type: 'playlist',
			        maxResults: 50
			    });
			})
			.then(function (resp) {
			    // Synchronize on playlists template + gapi playlists results;
			    that.plistsTempBcProp.onValue(function (plistsTemp) {
			        that.procPlaylistsResp(plistsTemp, resp);
			    });

			    // Cache results
			    that.cachedPL = { ts: new Date(), resp: resp, orderBy: sortVal };

			}, function (err) {
			    Rollbar.error(err.result);
			});

        } else {
            this.plistsTempBcProp.onValue(function (plistsTemp) {
                that.procPlaylistsResp(plistsTemp, that.cachedPL.resp);
            });
        }

    },
    gapiLoadVideos: function (userPlaylistId) {

        this.setBusySvg('#videosNav');

        var that = this;

        //Empty list if repopulating & clearing it
        var videoList = $("#videosList");
        if (videoList) {
            videoList.empty();
        }

        // Gapi get video id for pl 2. Get full detail for videos including stats views
        this.gapi.client.youtube.playlistItems.list({
            playlistId: userPlaylistId,
            part: 'snippet',
            maxResults: 50
        })
        .then(function (res) {
            return res.result.items.map(function (item) {
                return item.snippet.resourceId.videoId;
            });
        })
        .then(function (videoIds) {
            return this.gapi.client.youtube.videos.list({
                id: videoIds.join(','),
                part: 'id,snippet,statistics,contentDetails',
                maxResults: 50
            });
        })
        .then(function (resp) {
            // Synchronize on video template + gapi video list;
            that.videosListTempBcProp.onValue(function (vidListTempl) {
                that.procVideosExtraInfoResp(vidListTempl, resp);
            });
        }
        , function (err) {
            Rollbar.error(err.result);
        });
    },

    parseVideoTemp: function (parsedVidTemp, videoData, cntVideos) {

        /* get template for creating listview */
        var regxDescOmitFileName = /\n*FN\:\w+\.\w+\s*/g;

        /* render grid template with data */
        var row = 0, appendHtml = '';
        for (var i = 0; i < cntVideos; ++i) {

            videoData[i].description = videoData[i].snippet.description.replace(regxDescOmitFileName, "");
            videoData[i].duration = this.convFromIso8601Dur(videoData[i].contentDetails.duration);

            if (row === 0) {
                appendHtml += '<div class="ui-block-a">' + parsedVidTemp(videoData[i]) + '</div>';
                row++;
            }
            else {
                appendHtml += '<div class="ui-block-b">' + parsedVidTemp(videoData[i]) + '</div>';
                row = 0;
            }
        }
        //appendHtml += '</div>';

        return appendHtml;
    },

    /*
	 * Process gapi playlist video extra info Qry resuls with loaded template
	 */
    procVideosExtraInfoResp: function (vidListTemp, response) {
        if (response && !('error' in response)) {

            // render grid template with data
            var videoData = response.result.items;
            var cntVideos = videoData.length;
            if (cntVideos) {

                $("#videosList").append(appWoG.parseVideoTemp(vidListTemp, videoData, cntVideos));
            }

        } /*else if ('error' in response) {
			var errorData = JSON.stringify(response.error.data[0]);
			if (errorData) {
				var errorMsg = "procVideosExtraInfoResp(), error: " + errorData;

				Rollbar.error(errorMsg, response.error);

				//throw errorMsg;
			}
		} */
        $('.busy').remove();
    },
    /// Convert from Yt format and pad numbers
    convFromIso8601Dur: function (duration) {
        var a = duration.match(/\d+/g);
        var r = '';
        $.each(a, function convFromIso8601DurEach(idx, num) {
            if (idx !== 0) {
                r += ':' + ("0" + num).slice(-2);
            } else {
                r += ("0" + num).slice(-2);
            }
        });

        return r;
    }
};
