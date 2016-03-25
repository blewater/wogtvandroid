/*! jQuery v2.1.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.1",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+Math.random()}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)
},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=l.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,n.ajaxSettings),b):tc(n.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=n.ajaxSettings.xhr();a.ActiveXObject&&n(a).on("unload",function(){for(var a in Dc)Dc[a]()}),k.cors=!!Fc&&"withCredentials"in Fc,k.ajax=Fc=!!Fc,n.ajaxTransport(function(a){var b;return k.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Ic=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Jc})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Lc=a.jQuery,Mc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Mc),b&&a.jQuery===n&&(a.jQuery=Lc),n},typeof b===U&&(a.jQuery=a.$=n),n});

/*
    pO\
   6  /\
     /OO\
    /OOOO\
   /OOOOOO\
  (OOOOOOOO)
   \:~==~:/

ChocolateChip-UI
ChUI.js
Copyright 2015 Sourcebits www.sourcebits.com
License: MIT
Version: 3.8.4
*/
window.CHUIJSLIB;
if(window.jQuery) {
  window.CHUIJSLIB = window.jQuery;
} else if (window.$chocolatechipjs) {
  window.CHUIJSLIB = window.$chocolatechipjs;
}
(function($) {

  $.extend({
    ///////////////
    // Create Uuid:
    ///////////////
    UuidBit : 1,

    Uuid : function() {
      this.UuidBit++;
      return Date.now().toString(36) + this.UuidBit;
    },

    ///////////////////////////
    // Concat array of strings:
    ///////////////////////////
    concat : function ( args ) {
      return (args instanceof Array) ? args.join('') : [].slice.apply(arguments).join('');
    },
    ////////////////////////////
    // Version of each that uses
    // regular parameter order:
    ////////////////////////////
    forEach : function ( obj, callback, args ) {
      function isArraylike( obj ) {
        var length = obj.length,
          type = typeof obj;
        if ( type === "function" || obj === window ) {
          return false;
        }
        if ( obj.nodeType === 1 && length ) {
          return true;
        }
        return type === "array" || length === 0 ||
          typeof length === "number" && length > 0 && ( length - 1 ) in obj;
      } 
      var value,
      i = 0,
      length = obj.length,
      isArray = isArraylike( obj );
      if ( args ) {
        if ( isArray ) {
          for ( ; i < length; i++ ) {
            value = callback.apply( obj[ i ], args );
            if ( value === false ) {
              break;
            }
          }
        } else {
          for ( i in obj ) {
            value = callback.apply( obj[ i ], args );
            if ( value === false ) {
              break;
            }
          }
        }
      // A special, fast, case for the most common use of each
      } else {
        if ( isArray ) {
          for ( ; i < length; i++ ) {
            value = callback.call( obj[ i ], obj[ i ], i );
            if ( value === false ) {
              break;
            }
          }
        } else {
          for ( i in obj ) {
            value = callback.call( obj[ i ], obj[ i ], i );
            if ( value === false ) {
              break;
            }
          }
        }
      }
    }
  });

  $.fn.extend({
    
    ///////////////////////////////////
    // forEach method for jQuery to
    // preserve normal parameter order.
    ///////////////////////////////////
    forEach : function( callback, args ) {
      var $this = this;
      return $.forEach( $this, callback, args );
    },

    //////////////////////
    // Return element that 
    // matches selector:
    //////////////////////
    iz : function ( selector ) {
      if (window.jQuery) {
        var ret = $();
        this.forEach(function(ctx) {
          if ($(ctx).is(selector)) {
            ret.push(ctx);
          }
        });
        return ret;

      } else if (window.$chocolatechipjs) {
        return this.is(selector);
      }
    },
    ////////////////////////////////
    // Return array of unique items:
    ////////////////////////////////
    unique : function() {
      var ret = [];
      var sort = this.sort();
      sort.forEach(function(ctx, idx) {
        if (ret.indexOf(ctx) === -1) {
          ret.push(ctx);
        }
      });
      return ret.length ? ret : [];
    },
    //////////////////////////////
    // Return element that doesn't 
    // match selector:
    //////////////////////////////
    iznt : function ( selector ) {
      if (window.jQuery) {
        return this.not(selector);
      } else if (window.$chocolatechipjs) {
        return this.isnt(selector);
      }
    },
 
    ///////////////////////////////////
    // Return element whose descendants 
    // match selector:
    ///////////////////////////////////
    haz : function ( selector ) {
      return this.has(selector);
    },
    ///////////////////////////////////
    // Return element whose descendants 
    // don't match selector:
    ///////////////////////////////////
    haznt : function ( selector ) {
      if (window.jQuery) {
        var ret = $();
        this.forEach(function(ctx) {
          if (!$(ctx).has(selector)[0]) {
            ret.push(ctx);
          }
        });
        return ret;        
      } else if (window.$chocolatechipjs) {
        return this.hasnt(selector);
      }
    },
    //////////////////////////////////////
    // Return element that has class name:
    //////////////////////////////////////
    hazClass : function ( className ) {
      if (window.jQuery) {
        var ret = $();
        this.forEach(function(ctx) {
          if ($(ctx).hasClass(className)) {
            ret.push(ctx);
          }
        });
        return ret;
      } else if(window.$chocolatechipjs) {
        return this.hasClass(className);
      }
    },
    //////////////////////////////
    // Return element that doesn't 
    // have class name:
    //////////////////////////////
    hazntClass : function ( className ) {
      if (window.jQuery) {
        var ret = $();
        this.forEach(function(ctx) {
          if (!$(ctx).hasClass(className)) {
            ret.push(ctx);
          }
        });
        return ret;
      } else if (window.$chocolatechipjs) {
        var ret = [];
        this.forEach(function(ctx) {
          if (ctx.classList.contains(className)) {
            ret.push(ctx);
          }
        });
        return ret;
      }
    },
    /////////////////////////////////////
    // Return element that has attribute:
    /////////////////////////////////////
    hazAttr : function ( property ) {
      if (window.jQuery) {
        var ret = $();
        this.forEach(function(ctx){
          if ($(ctx).attr(property)) {
            ret.push(ctx);
          }
        });
        return ret;
      } else if (window.$chocolatechipjs) {
        var ret = [];

        return ret;
      }
    },
    //////////////////////////
    // Return element that 
    // doesn't have attribute:
    //////////////////////////
    hazntAttr : function ( property ) {
      if (window.jQuery) {
        var ret = $();
        this.forEach(function(ctx){
          if (!$(ctx).attr(property)) {
            ret.push(ctx);
          }
        });
        return ret;
      } else if (window.$chocolatechipjs) {
        var ret = [];
          if (!ctx.hasAttribute(property)){
            ret.push(ctx);
          }
        return ret;        
      }
    }
  });


  $.extend({
    eventStart : null,
    eventEnd : null,
    eventMove : null,
    eventCancel : null,
    // Define min-length for gesture detection:
    gestureLength : 30 
  });

  $(function() {
    //////////////////////////
    // Setup Event Variables:
    //////////////////////////
    // Pointer events for IE10 and WP8:
    if (window.navigator.pointerEnabled) {
      $.eventStart = 'pointerdown';
      $.eventEnd = 'pointerup';
      $.eventMove = 'pointermove';
      $.eventCancel = 'pointercancel';
    // Pointer events for IE10 and WP8:
    } else if (window.navigator.msPointerEnabled) {
      $.eventStart = 'MSPointerDown';
      $.eventEnd = 'MSPointerUp';
      $.eventMove = 'MSPointerMove';
      $.eventCancel = 'MSPointerCancel';
    // Touch events for iOS & Android:
    } else if ('ontouchstart' in window) {
      $.eventStart = 'touchstart';
      $.eventEnd = 'touchend';
      $.eventMove = 'touchmove';
      $.eventCancel = 'touchcancel';
    // Mouse events for desktop:
    } else {
      $.eventStart = 'mousedown';
      $.eventEnd = 'click';
      $.eventMove = 'mousemove';
      $.eventCancel = 'mouseout';
    }
  });


  $.extend({
    isiPhone : /iphone/img.test(navigator.userAgent),
    isiPad : /ipad/img.test(navigator.userAgent),
    isiPod : /ipod/img.test(navigator.userAgent),
    isiOS : /ip(hone|od|ad)/img.test(navigator.userAgent),
    isAndroid : (/android/img.test(navigator.userAgent) && !/trident/img.test(navigator.userAgent)),
    isWebOS : /webos/img.test(navigator.userAgent),
    isBlackberry : /blackberry/img.test(navigator.userAgent),
    isTouchEnabled : ('createTouch' in document),
    isOnline :  navigator.onLine,
    isStandalone : navigator.standalone,
    isiOS6 : navigator.userAgent.match(/OS 6/i),
    isiOS7 : navigator.userAgent.match(/OS 7/i),
    isWin : /trident/img.test(navigator.userAgent),
    isWinPhone : (/trident/img.test(navigator.userAgent) && /mobile/img.test(navigator.userAgent)),
    isIE10 : navigator.userAgent.match(/msie 10/i),
    isIE11 : (navigator.userAgent.match(/windows nt/i) && navigator.userAgent.match(/trident/i)),
    isIEEdge : (navigator.userAgent.match(/windows nt/i) && navigator.userAgent.match(/edge/i)),
    isWebkit : navigator.userAgent.match(/webkit/),
    isMobile : /mobile/img.test(navigator.userAgent),
    isDesktop : !(/mobile/img.test(navigator.userAgent)),
    isSafari : (!/Chrome/img.test(navigator.userAgent) && /Safari/img.test(navigator.userAgent) && !/android/img.test(navigator.userAgent)),
    isChrome : /Chrome/img.test(navigator.userAgent),
    isNativeAndroid : (/android/i.test(navigator.userAgent) && /webkit/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent)),
    isWideScreen : window.innerWidth >= 960 && (window.orientation === 90 || window.orentation === -90),
    isWideScreenPortrait : window.innerWidth >= 960 && (window.orientation !== 90 || window.orientation !== -90)
    });


  
  /////////////////////////////
  // Determine browser version:
  /////////////////////////////
  $.extend({
    browserVersion : function ( ) {
      var n = navigator.appName;
      var ua = navigator.userAgent;
      var temp;
      var m = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
      if (m && (temp = ua.match(/version\/([\.\d]+)/i))!== null) m[2]= temp[1];
      m = m ? [m[1], m[2]]: [n, navigator.appVersion, '-?'];
      return m[1];
    }
  });

  $(function() {
    ////////////////////////////////
    // Added classes for client side
    // os-specific styles:
    ////////////////////////////////
    $.body = $('body');
  
    if ((/android/img.test(navigator.userAgent)) && (/webkit/img.test(navigator.userAgent) ) && (!/Chrome/img.test(navigator.userAgent))) {
      $.body.addClass('isNativeAndroidBrowser');
    }
    if ($.isWin) {
      $.body.addClass('isWindows');
    } else if ($.isiOS) {
      $.body.addClass('isiOS');
    } else if ($.isAndroid) {
      $.body.addClass('isAndroid');
    }
    if ($.isSafari && parseInt($.browserVersion(), 10) === 6) {
      $.body.addClass('isSafari6');
    }
    if ($.isNativeAndroid) {
      $.body.addClass('isNativeAndroidBrowser');
    }
  });


  //////////////////////////////////////////////////////
  // Swipe Gestures for ChocolateChip-UI.
  // Includes mouse gestures for desktop compatibility.
  //////////////////////////////////////////////////////
  var touch = {};
  var touchTimeout;
  var swipeTimeout;
  var tapTimeout;
  var longTapDelay = 750;
  var singleTapDelay = 150;
  if ($.isAndroid) singleTapDelay = 200;
  var longTapTimeout;
  function parentIfText(node) {
    return 'tagName' in node ? node : node.parentNode;
  }
  function swipeDirection(x1, x2, y1, y2) {
    return Math.abs(x1 - x2) >=
    Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'left' : 'right') : (y1 - y2 > 0 ? 'up' : 'down');
  }
  function longTap() {
    longTapTimeout = null;
    if (touch.last) {
      try {
        if (touch && touch.el) {
          touch.el.trigger('longtap');
          touch = {};
        }
      } catch(err) { }
    }
  }
  function cancelLongTap() {
    if (longTapTimeout) clearTimeout(longTapTimeout);
    longTapTimeout = null;
  }
  function cancelAll() {
    if (touchTimeout) clearTimeout(touchTimeout);
    if (tapTimeout) clearTimeout(tapTimeout);
    if (swipeTimeout) clearTimeout(swipeTimeout);
    if (longTapTimeout) clearTimeout(longTapTimeout);
    touchTimeout = tapTimeout = swipeTimeout = longTapTimeout = null;
    touch = {};
  }
  $(function(){
    var now;
    var delta;
    var body = $(document.body);
    var twoTouches = false;
    body.on($.eventStart, function(e) {
      now = Date.now();
      delta = now - (touch.last || now);
      if (e.originalEvent) e = e.originalEvent;
  
      // Handle MSPointer Events:
      if (window.navigator.msPointerEnabled  || window.navigator.pointerEnabled) {
        if (window && window.jQuery && $ === window.jQuery) {
          if (e.originalEvent && !e.originalEvent.isPrimary) return;
        } else {
          if (!e.isPrimary) return;
        }
        e = e.originalEvent ? e.originalEvent : e;
        body.on('MSHoldVisual', function (e) {
          e.preventDefault();
        });
        touch.el = $(parentIfText(e.target));
        touchTimeout && clearTimeout(touchTimeout);
        touch.x1 = e.pageX;
        touch.y1 = e.pageY;
        twoTouches = false;
      } else {
        if ($.eventStart === 'mousedown') {
          touch.el = $(parentIfText(e.target));
          touchTimeout && clearTimeout(touchTimeout);
          touch.x1 = e.pageX;
          touch.y1 = e.pageY;
          twoTouches = false;
        } else {
          // User to detect two or more finger gestures:
          if (e.touches.length === 1) {
            touch.el = $(parentIfText(e.touches[0].target));
            touchTimeout && clearTimeout(touchTimeout);
            touch.x1 = e.touches[0].pageX;
            touch.y1 = e.touches[0].pageY;
            if (e.targetTouches.length === 2) {
              twoTouches = true;
            } else {
              twoTouches = false;
            }
          }
        }
      }
      if (delta > 0 && delta <= 250) {
        touch.isDoubleTap = true;
      }
      touch.last = now;
      longTapTimeout = setTimeout(longTap, longTapDelay);
    });
    body.on($.eventMove, function(e) {
      if (e.originalEvent) e = e.originalEvent;
      if (window.navigator.msPointerEnabled) {
        if (window && window.jQuery && $ === window.jQuery) {
          if (e.originalEvent && !e.originalEvent.isPrimary) return;
        } else {
          if (!e.isPrimary) return;
        }
        e = e.originalEvent ? e.originalEvent : e;
        cancelLongTap();
        touch.x2 = e.pageX;
        touch.y2 = e.pageY;
      } else {
        cancelLongTap();
        if ($.eventMove === 'mousemove') {
          touch.x2 = e.pageX;
          touch.y2 = e.pageY;
        } else {
          // One finger gesture:
          if (e.touches.length === 1) { 
            touch.x2 = e.touches[0].pageX;
            touch.y2 = e.touches[0].pageY;
          }
        }
      }
      if ($.isAndroid) {
        $.gestureLength = 50;
        if (!!touch.el) {
          // Swipe detection:
          if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > $.gestureLength) ||
        (touch.y2 && Math.abs(touch.y1 - touch.y2) > $.gestureLength))  {
            swipeTimeout = setTimeout(function() {
              e.preventDefault();
              if (touch && touch.el) {
                touch.el.trigger('swipe');
                touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
                touch = {};
              }
            }, 0);
          // Normal tap:
          } else if ('last' in touch) {
            // Delay by one tick so we can cancel the 'tap' event if 'scroll' fires:
            tapTimeout = setTimeout(function() {
            // Trigger universal 'tap' with the option to cancelTouch():
            if (touch && touch.el) {
              touch.el.trigger('tap');
            }
            // Trigger double tap immediately:
            if (touch && touch.isDoubleTap) {
              if (touch && touch.el) {
              touch.el.trigger('doubletap');
              touch = {};
              }
            } else {
              // Trigger single tap after singleTapDelay:
              touchTimeout = setTimeout(function(){
              touchTimeout = null;
              if (touch && touch.el) {
                touch.el.trigger('singletap');
                touch = {};
                return false;
              }
              }, singleTapDelay);
            }
            }, 0);
          }
        } else { return; }  
      }
    });
    body.on($.eventEnd, function(e) {
      if (window.navigator.msPointerEnabled) {
        if (window && window.jQuery && $ === window.jQuery) {
          if (e.originalEvent && !e.originalEvent.isPrimary) return;
        } else {
          if (!e.isPrimary) return;
        }
      }
      cancelLongTap();
      if (!!touch.el) {
        // Swipe detection:
        if ((touch.x2 && Math.abs(touch.x1 - touch.x2) > $.gestureLength) ||
        (touch.y2 && Math.abs(touch.y1 - touch.y2) > $.gestureLength))  {
          swipeTimeout = setTimeout(function() {
            if (touch && touch.el) {
              touch.el.trigger('swipe');
              touch.el.trigger('swipe' + (swipeDirection(touch.x1, touch.x2, touch.y1, touch.y2)));
              touch = {};
            }
          }, 0);
        // Normal tap:
        } else if ('last' in touch) {
          // Delay by one tick so we can cancel the 'tap' event if 'scroll' fires:
          tapTimeout = setTimeout(function() {
            // Trigger universal 'tap' with the option to cancelTouch():
            if (touch && touch.el) {
              touch.el.trigger('tap');
            }
            // Trigger double tap immediately:
            if (touch && touch.isDoubleTap) {
              if (touch && touch.el) {
                touch.el.trigger('doubletap');
                touch = {};
              }
            } else {
              // Trigger single tap after singleTapDelay:
              touchTimeout = setTimeout(function(){
                touchTimeout = null;
                if (touch && touch.el) {
                  touch.el.trigger('singletap');
                  touch = {};
                  return false;
                }
              }, singleTapDelay);
            }
          }, 0);
        }
      } else { return; }
    });
    body.on('touchcancel', cancelAll);
  });
  ['swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown', 'doubletap', 'tap', 'singletap', 'longtap'].forEach(function(method){ 
    // Add gesture events to ChocolateChipJS:
    $.fn.extend({
      method : function(callback){ 
        return this.on(method, callback);
      }
    });
  });


  /////////////////////////////////////////
  // Set classes for desktop compatibility:
  /////////////////////////////////////////
  $.extend({
    UIDesktopCompat : function ( ) {
      if ($.isDesktop && $.isSafari) {
        $('body').addClass('isiOS').addClass('isDesktopSafari isDesktop');
      } else if ($.isDesktop && $.isChrome) {
        $('body').addClass('isAndroid').addClass('isDesktopChrome isDesktop');
      }
    }
  });
  $(function() {
    $.UIDesktopCompat();
  });


  $(function() { 
    $.body = $('body');

    //////////////////////
    // Add the global nav:
    //////////////////////
    if (!$.body[0].classList.contains('splitlayout')) {
      $('body').prepend("<nav id='global-nav'></nav>");
    }

    /////////////////////////////////////////////////
    // Fix Split Layout to display properly on phone:
    /////////////////////////////////////////////////
    if ($.body[0].classList.contains('splitlayout')) {
      if (window.innerWidth < 768) {
        $('meta[name=viewport]').attr('content','width=device-width, initial-scale=0.45, maximum-scale=2, user-scalable=yes');
      }
    }

    /////////////////////////////////////////////////////////
    // Add class to nav when button on right.
    // This allows us to adjust the nav h1 for small screens.
    /////////////////////////////////////////////////////////
    $('h1').each(function(idx, ctx) {
      if (ctx.nextElementSibling && ctx.nextElementSibling.nodeName === 'A') {
        ctx.classList.add('buttonOnRight');
      }
    });

    //////////////////////////////////////////
    // Get any toolbars and adjust the bottom 
    // of their corresponding articles:
    //////////////////////////////////////////
    $('.toolbar').prev('article').addClass('has-toolbar');

    if ($.isiOS && $.isStandalone) {
      $.body[0].classList.add('isStandalone');
    }
  });


  /////////////////////////
  // Hide and show navbars:
  /////////////////////////
  $.extend({    
    UIHideNavBar : function () {
      $('nav').hide();
      $.body.addClass('hide-navbars');
    },

    UIShowNavBar : function () {
      $('nav').show();
      $.body.removeClass('hide-navbars');
    }
  });


  $.extend({
    subscriptions : {},

    // Topic: string defining topic: /some/topic
    // Data: a string, number, array or object.
    subscribe : function (topic, callback) {
      if (!$.subscriptions[topic]) {
        $.subscriptions[topic] = [];
      }
      var token = ($.Uuid());
      $.subscriptions[topic].push({
        token: token,
        callback: callback
      });
      return token;
    },

    unsubscribe : function ( token ) {
      setTimeout(function() {
        for (var m in $.subscriptions) {
          if ($.subscriptions[m]) {
              for (var i = 0, len = $.subscriptions[m].length; i < len; i++) {
                  if ($.subscriptions[m][i].token === token) {
                    $.subscriptions[m].splice(i, 1);
                    return token;
                  }
              }
          }
        }
        return false;
      });
    },

    publish : function ( topic, args ) {
      if (!$.subscriptions[topic]) {
        return false;
      }
      setTimeout(function () {
        var len = $.subscriptions[topic] ? $.subscriptions[topic].length : 0;
        while (len--) {
          $.subscriptions[topic][len].callback(topic, args);
        }
        return true;
      });
      return true;
   }
  });


  ////////////////////////////////////
  // Create custom navigationend event
  ////////////////////////////////////
  function triggerNavigationEvent(target) {
    var transition;
    var tansitionDuration;
    if ('transition' in document.body.style) {
      transition = 'transition-duration';
    } else if ('-webkit-transition' in document.body.style){
      transition = '-webkit-transition-duration';
    }
    function determineDurationType (duration) {
      if (/m/.test(duration)) {
        return parseFloat(duration); 
      } else if (/s/.test(duration)) {
        return parseFloat(duration) * 100;
      }
    }
    tansitionDuration = determineDurationType($('article').eq(0).css(transition));
    
    setTimeout(function() {
      $(target).trigger({type: 'navigationend'});
    }, tansitionDuration);
  }
  $.extend({
    ////////////////////////////////////////////////
    // Manage location.hash for client side routing:
    ////////////////////////////////////////////////
    UITrackHashNavigation : function ( url, delimiter ) {
      url = url || true;
      $.UISetHashOnUrl($.UINavigationHistory[$.UINavigationHistory.length-1], delimiter);
    },
    /////////////////////////////////////////////////////
    // Set the hash according to where the user is going:
    /////////////////////////////////////////////////////
    UISetHashOnUrl : function ( url, delimiter ) {
      delimiter = delimiter || '#/';
      var hash;
      if (/^#/.test(url)) {
        hash = delimiter + (url.split('#')[1]);
      } else {
        hash = delimiter + url;
      }
      if ($.isAndroid) {
        if (/#/.test(url)) {
          url = url.split('#')[1];
        }
        if (/\//.test(url)) {
          url = url.split('/')[1];
        }
        window.location.hash = '#/' + url;
      } else {
        window.history.replaceState('Object', 'Title', hash);
      }
    },
    //////////////////////////////////////
    // Navigate Back to Non-linear Article
    //////////////////////////////////////
    UIGoBackToArticle : function ( articleID ) {
      var historyIndex = $.UINavigationHistory.indexOf(articleID);
      var currentArticle = $('article.current');
      var destination = $(articleID);
      var currentToolbar;
      var destinationToolbar;      
      if ($.UINavigationHistory.length === 0) {
        destination = $('article:first-of-type');
        $.UINavigationHistory.push('#' + destination[0].id);
      }
      var prevArticles;
      if ($.UINavigationHistory.length > 1) {
        prevArticles = $.UINavigationHistory.splice(historyIndex+1);
      } else {
        prevArticles = $('article.previous');
      }
      $.publish('chui/navigateBack/leave', currentArticle[0].id);
      $.publish('chui/navigateBack/enter', destination[0].id);
      currentArticle[0].scrollTop = 0;
      destination[0].scrollTop = 0;
      if (prevArticles.length) {
        $.forEach(prevArticles, function(ctx) {
          $(ctx).removeClass('previous').addClass('next');
          $(ctx).prev().removeClass('previous').addClass('next');
        });
      }
      currentToolbar = currentArticle.next().hazClass('toolbar');
      destinationToolbar = destination.next().hazClass('toolbar');
      destination.removeClass('previous next').addClass('current');
      destination.prev().removeClass('previous next').addClass('current');
      destinationToolbar.removeClass('previous next').addClass('current');
      currentArticle.removeClass('current').addClass('next');
      currentArticle.prev().removeClass('current').addClass('next');
      currentToolbar.removeClass('current').addClass('next');
      $('.toolbar.previous').removeClass('previous').addClass('next');
      $.UISetHashOnUrl($.UINavigationHistory[$.UINavigationHistory.length-1]);
      triggerNavigationEvent(destination);
    },
    ////////////////////////////////////
    // Navigate Back to Previous Article
    ////////////////////////////////////
    UIGoBack : function () {
      var histLen = $.UINavigationHistory.length;
      var currentArticle = $('article.current');
      var destination = $($.UINavigationHistory[histLen-2]);
      var currentToolbar;
      var destinationToolbar;
      if (histLen === 0) {
        destination = $('article:first-of-type');
        $.UINavigationHistory.push('#' + destination[0].id);
      }
      $.publish('chui/navigateBack/leave', currentArticle[0].id);
      $.publish('chui/navigateBack/enter', destination[0].id);
      currentArticle[0].scrollTop = 0;
      destination[0].scrollTop = 0;
      currentToolbar = currentArticle.next().hazClass('toolbar');
      destinationToolbar = destination.next().hazClass('toolbar');
      destination.removeClass('previous').addClass('current');
      destination.prev().removeClass('previous').addClass('current');
      destinationToolbar.removeClass('previous').addClass('current');
      currentArticle.removeClass('current').addClass('next');
      currentArticle.prev().removeClass('current').addClass('next');
      currentToolbar.removeClass('current').addClass('next');
      $.UISetHashOnUrl($.UINavigationHistory[histLen-2]);
      if ($.UINavigationHistory.length === 1) return;
      $.UINavigationHistory.pop();
      triggerNavigationEvent(destination);
    },
    isNavigating : false,
  
    ///////////////////////////////
    // Navigate to Specific Article
    ///////////////////////////////
    UIGoToArticle : function ( destination ) {
      if ($.isNavigating) return;
      $.isNavigating = true;
      var current = $('article.current');
      var currentNav = current.prev();
      destination = $(destination); 
      var destinationID = '#' + destination[0].id;
      var destinationNav = destination.prev();
      var currentToolbar;
      var destinationToolbar;
      var navigationClass = 'next previous';
      $.publish('chui/navigate/leave', current[0].id);
      $.UINavigationHistory.push(destinationID);
      $.publish('chui/navigate/enter', destination[0].id);
      current[0].scrollTop = 0;
      destination[0].scrollTop = 0;
      currentToolbar = current.next().hazClass('toolbar');
      destinationToolbar = destination.next().hazClass('toolbar');
      current.removeClass('current').addClass('previous');
      currentNav.removeClass('current').addClass('previous');
      currentToolbar.removeClass('current').addClass('previous');
      destination.removeClass(navigationClass).addClass('current');
      destinationNav.removeClass(navigationClass).addClass('current');
      destinationToolbar.removeClass(navigationClass).addClass('current');
    
      $.UISetHashOnUrl(destination[0].id);
      setTimeout(function() {
        $.isNavigating = false;
      }, 500);
      triggerNavigationEvent(destination);
    }
  });
  ///////////////////
  // Init navigation:
  ///////////////////
  $(function() {
    //////////////////////////////////////////
    // Set first value for navigation history:
    //////////////////////////////////////////
    $.extend({
      UINavigationHistory : ["#" + $('article').eq(0).attr('id')]
    });
    ///////////////////////////////////////////////////////////
    // Make sure that navs and articles have navigation states:
    ///////////////////////////////////////////////////////////
    $('nav:not(#global-nav)').forEach(function(ctx, idx) {
      // Prevent if splitlayout for tablets:
      if ($('body')[0].classList.contains('splitlayout')) return;
      if (idx === 0) {
        ctx.classList.add('current');
      } else { 
        ctx.classList.add('next'); 
      }
    });
  
    $('article').forEach(function(ctx, idx) {
      // Prevent if splitlayout for tablets:
      if ($('body')[0].classList.contains('splitlayout')) return;
      if ($('body')[0].classList.contains('slide-out-app')) return;
      if (idx === 0) {
        ctx.classList.add('current');
      } else { 
        ctx.classList.add('next'); 
      }
    }); 
      ///////////////////////////
    // Initialize Back Buttons:
    ///////////////////////////
    $('body').on('singletap', '.back', function() {
      if (this.classList.contains('back')) {
        $.UIGoBack();
      }
    });
  
    ////////////////////////////////
    // Handle navigation list items:
    ////////////////////////////////
    $('body').on('singletap doubletap', 'li', function() {
      var $this = $(this);
      if ($.isNavigating) return;
      if (!this.hasAttribute('data-goto')) return;
      if (!this.getAttribute('data-goto')) return;
      if (!document.getElementById(this.getAttribute('data-goto'))) return;
      if ($(this).parent()[0].classList.contains('deletable')) return;
      $this.addClass('selected');
      var destinationHref = '#' + this.getAttribute('data-goto');
      $(destinationHref).addClass('navigable');
      setTimeout(function() {
        $this.removeClass('selected');
      }, 1000);
      var destination = $(destinationHref);
      if ($.isAndroid || $.isChrome) {
        setTimeout(function() {
          $.UIGoToArticle(destination);
        }, 200);
      } else {
        $.UIGoToArticle(destination);
      }
    });
    $('li[data-goto]').forEach(function(ctx) {
      $(ctx).closest('article').addClass('navigable');
      var navigable =  '#' + ctx.getAttribute('data-goto');
      $(navigable).addClass('navigable');
    });
  
    /////////////////////////////////////
    // Init navigation url hash tracking:
    /////////////////////////////////////
    // If there's more than one article:
    if ($('article').eq(1)[0]) {
      $.UISetHashOnUrl($('article').eq(0)[0].id);
    }
    /////////////////////////////////////////////////////////
    // Stop rubber banding when dragging down on nav:
    /////////////////////////////////////////////////////////
    $('nav').on($.eventStart, function(e) {
      e.preventDefault();
    });
  });


  $(function() {
    ///////////////////////////////////
    // Initialize singletap on buttons:
    ///////////////////////////////////
    $('body').on('singletap', 'button', function() {
      var $this = $(this);
      if ($this.parent('.segmented')[0] || $this.parent('.tabbar')[0]) return;
      if (this.classList.contains('slide-out-button') || this.classList.contains('back') || this.classList.contains('backTo')) return;
      $this.addClass('selected');
      setTimeout(function() {
        $this.removeClass('selected');
      }, 1000);
    });
  });


  $.fn.extend({
    /////////////////////////
    // Block Screen with Mask
    /////////////////////////
    UIBlock : function ( opacity ) {
      opacity = opacity ? " style='opacity:" + opacity + "'" : " style='opacity: .5;'";
      $(this).before("<div class='mask'" + opacity + "></div>");
      $('article.current').attr('aria-hidden',true);
      return this;
    },

    //////////////////////////
    // Remove Mask from Screen
    //////////////////////////
    UIUnblock : function ( ) {
      $('.mask').remove();
      $('article.current').removeAttr('aria-hidden');
      return this;
    }
  });


  $.fn.extend({
    //////////////////////////////
    // Center an Element on Screen
    //////////////////////////////
    UICenter : function ( position ) {
      var position = position;
      if (!this[0]) return;
      var $this = $(this);
      var parent = $this.parent();
      if (position) {
        $(this.css('position', position));
      } else if ($this.css('position') === 'absolute') {
        position = 'absolute';
      } else {
        position = 'relative';
      }
      var height, width, parentHeight, parentWidth;
      if (position === 'absolute') {
        height = $this[0].clientHeight;
        width = $this[0].clientWidth;
        parentHeight = parent[0].clientHeight;
        parentWidth = parent[0].clientWidth;
      } else {
        height = parseInt($this.css('height'),10);
        width = parseInt($this.css('width'),10);
        parentHeight = parseInt(parent.css('height'),10);
        parentWidth = parseInt(parent.css('width'),10);
        $(this).css({'margin-left': 'auto', 'margin-right': 'auto'});
      }
      var tmpTop, tmpLeft;
      if (parent[0].nodeName === 'body') {
        tmpTop = ((window.innerHeight /2) + window.pageYOffset) - height /2 + 'px';
        tmpLeft = ((window.innerWidth / 2) - (width / 2) + 'px');
      } else {
        tmpTop = (parentHeight /2) - (height /2) + 'px';
        tmpLeft = (parentWidth / 2) - (width / 2) + 'px';
      }
      if (position !== 'absolute') tmpLeft = 0;
      // if (parseInt(tmpLeft,10) <= 0) tmpLeft = '10px';
      $this.css({left: tmpLeft, top: tmpTop});
    }
  });


  $.fn.extend({
    ////////////////////////
    // Create Busy indicator
    ////////////////////////
    /*
      var options = {
        color: 'red',
        size: '80px',
        position: 'right'
      }
    */
    UIBusy : function ( options ) {
      var count = 1;
      options = options || {};
      var settings = {
        size: 43,
        color: '#000',
        position: false,
        duration: '2s'
      };
      $.extend(settings, options);
      var $this = this;
      var spinner;
      // For iOS:
      var iOSBusy = function() {
        var webkitAnim = {'-webkit-animation-duration': settings.duration};
        spinner = $('<span class="busy"></span>');
        $(spinner).css({'background-color': settings.color, 'height': settings.size + 'px', 'width': settings.size + 'px'});
        $(spinner).css(webkitAnim);
        $(spinner).attr('role','progressbar');
        if (settings.position) $(spinner).addClass(settings.position);
        $this.append(spinner);
        return this;
      };
      // For Android:
      var androidBusy = function() {
        settings.id = $.Uuid();
        var androidActivityIndicator = null;
        var position = settings.position ? (' ' + settings.position) : '';
        if ($.isNativeAndroid) {
          androidActivityIndicator = '<svg class="busy' + position + '" version="1.1" id="' + settings.id + '" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path fill="none" stroke="' + settings.color + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M74.2,65c2.7-4.4,4.3-9.5,4.3-15c0-15.7-12.8-28.5-28.5-28.5S21.5,34.3,21.5,50c0,5.5,1.6,10.6,4.3,15"/></g><polyline fill="none" stroke="' + settings.color + '" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="89.4,56.1 74.3,65 65.4,49.9 "/></svg>';

          $this.append(androidActivityIndicator);
          return;
        } else {
          androidActivityIndicator = '<svg id="'+ settings.id +'" class="busy' + position + '" x="0px" y="0px" viewBox="0 0 100 100"><circle stroke="url(#SVGID_1_)" cx="50" cy="50" r="28.5"/></svg>';
          $this.append(androidActivityIndicator);
          $this.addClass('hasActivityIndicator');
          if (settings.position) {
            $('#' + settings.id).addClass(settings.position);
          }
          if (options.color) {
            $('#' + settings.id).find('circle').css('stroke', options.color);
          }
        }
        $('#' + settings.id).css({'height': settings.size + 'px', 'width': settings.size + 'px'});
        return $('#' + settings.id);
      };
      // For Windows 8/WP8:
      var winBusy = function() {
        spinner = $('<progress class="busy"></progress>');
        $(spinner).css({ 'color': settings.color });
        $(spinner).attr('role','progressbar');
        $(spinner).addClass('win-ring');
        if (settings.position) $(spinner).addClass(settings.position);
        $this.append(spinner);
        return this;
      };
      // Create Busy control for appropriate OS:
      if ($.isWin) {
        winBusy(options);
      } else if ($.isAndroid || $.isChrome) {
        androidBusy(options);
      } else if ($.isiOS || $.isSafari) {
        iOSBusy(options);
      }
    }
  });


  $.extend({
    ///////////////
    // Create Popup
    ///////////////
    UIPopup : function( options ) {
      /*
      options {
        id: 'alertID',
        title: 'Alert',
        message: 'This is a message from me to you.',
        cancelButton: 'Cancel',
        continueButton: 'Go Ahead',
        callback: function() { // do nothing },
        empty: true
      }
      */
      if (!options) return;
      var settings = {};
      settings.id = $.Uuid();
      settings.content = true;
      $.extend(settings, options);

      var id = settings.id;
      var title = settings.title ? '<header><h1>' + settings.title + '</h1></header>' : '';
      var message = settings.message ? '<p role="note">' + options.message + '</p>' : '';
      var cancelButton = options.cancelButton ? '<button class="cancel" role="button">' + settings.cancelButton + '</button>' : '';
      var continueButton = settings.continueButton  ? '<button class="continue" role="button">' + settings.continueButton + '</button>' : '';
      var callback = settings.callback || $.noop;
      var panelOpen, panelClose, popup;
      if (settings.empty) {
        popup = $.concat('<div class="popup closed" role="alertdialog" id="', id, '"><div class="panel"></div></div>');
      } else {
        popup = $.concat('<div class="popup closed', '" role="alertdialog" id="', id, '"><div class="panel">', title, message, '</div><footer>', cancelButton, continueButton, '</footer>', panelClose, '</div>');
      }
    
      $('body').append(popup);
      if (callback && continueButton) {
        $('.popup').find('.continue').on($.eventStart, function() {
          var $this = $(this);
          if ($.isAndroid || $.isChrome) {
            $this.addClass('selected');
            setTimeout(function() {
              $this.removeClass('selected');
              $('.popup').UIPopupClose();
              callback.call(callback);
            }, 300);
          } else {
            $('.popup').UIPopupClose();
            callback.call(callback);
          }
        });
      }
    
      $.UICenterPopup();
      setTimeout(function() {
      	$('body').find('.popup').addClass('opened');
        $('body').find('.popup').removeClass('closed');
      }, 200);
      $('body').find('.popup').UIBlock('0.5');
      var events = $.eventStart + ' singletap ' + $.eventEnd;
      $('.mask').on(events, function(e) {
        e.stopPropagation();
      });
    },
    
    //////////////////////////////////////////
    // Center Popups When Orientation Changes:
    //////////////////////////////////////////
    UICenterPopup : function ( ) {
      var popup = $('.popup');
      if (!popup[0]) return;
      var tmpTop = ((window.innerHeight /2) + window.pageYOffset) - (popup[0].clientHeight /2) + 'px';
      var tmpLeft;
      if (window.innerWidth === 320) {
        tmpLeft = '10px';
      } else {
        tmpLeft = Math.floor((window.innerWidth - 318) /2) + 'px';
      }
      if ($.isWin) {
        popup.css({top: tmpTop}); 
      } else {
          popup.css({left: tmpLeft, top: tmpTop}); 
        }
    }
  });
  $.fn.extend({
    //////////////
    // Close Popup
    //////////////
    UIPopupClose : function ( ) {
      if (!this && !this.classList.contains('popup')) return;
      $(this).UIUnblock();
      $(this).remove();
    }
  });
  $(function() {
    //////////////////////////
    // Handle Closing Popups:
    //////////////////////////
    $('body').on($.eventStart, '.cancel', function() {
      var $this = $(this);
      if ($this.closest('.popup')[0]) {
        if ($.isAndroid || $.isChrome) {
          $this.addClass('selected');
          setTimeout(function() {
            $this.closest('.popup').UIPopupClose();
            $this.removeClass('selected');
          }, 300);
        } else {
          $this.closest('.popup').UIPopupClose();
        }
      }
    });
    /////////////////////////////////////////////////
    // Reposition popups on window resize:
    /////////////////////////////////////////////////
    $(window).on('resize', function() {
      $.UICenterPopup();
    });
  });


  $.extend({    
    /////////////////
    // Create Popover
    /////////////////
    /*
      id: myUniqueID,
      title: 'Great',
      callback: myCallback,
    */
    UIPopover : function ( options ) {
      options = options || {};
      var settings = {
        id: $.Uuid(),
        callback: $.noop,
        title: '',
      };
      $.extend(settings, options);
      if (options && options.content) {
        settings.content = options.content;
      } else {
        settings.content = '';
      }
      var header = '<header><h1>' + settings.title + '</h1></header>';
      var popover = '<div class="popover" id="' + settings.id + '">' + header + '<section></section></div>';
      var popoverID = '#' + settings.id;
      
      // Calculate position of popover relative to the button that opened it:
      var _calcPopPos = function (element) {
        var offset = $(element).offset();
        var left = offset.left;
        var calcLeft;
        var calcTop;
        var popover = $(popoverID);
        var popoverOffset = popover.offset();
        calcLeft = popoverOffset.left;
        calcTop = offset.top + $(element)[0].clientHeight;
        if ((popover.width() + offset.left) > window.innerWidth) {
          popover.css({
            'left': ((window.innerWidth - popover.width())-20) + 'px',
            'top': (calcTop - 30) + 'px'
          });
        } else {
          popover.css({'left': left + 'px', 'top': (calcTop - 30) + 'px'});
        }
      };

      if ($('.mask')[0]) {
        $.UIPopoverClose();
        $('body').UIUnblock();
        return;
      }
      $('body').append(popover);   
      if ($.isAndroid || $.isChrome) {
        setTimeout(function() {
          $(popoverID).addClass('opened'); 
        }, 50);
      } 
      if ($.isWin) {
        $(popoverID).addClass('open');
      }
      $(popoverID).data('triggerEl', settings.trigger);
      $(popoverID).find('section').append(settings.content);
      settings.callback.call(settings.callback, settings.trigger);
      _calcPopPos(settings.trigger);
      $('.popover').UIBlock('.5');
      
    }
  });
  $.extend({
    ///////////////////////////////////////
    // Align the Popover Before Showing it:
    ///////////////////////////////////////
    UIAlignPopover : function () {
      var popover = $('.popover');
      if (!popover.length) return;
      var triggerID = popover.data('triggerEl');
      var offset = $(triggerID).offset();
      var left = offset.left;
      if (($(popover).width() + offset.left) > window.innerWidth) {
        popover.css({
          'left': ((window.innerWidth - $(popover).width())-20) + 'px'
        });
      } else {
        popover.css({'left': left + 'px'});
      }
    }
  });
  $.extend({
    UIPopoverClose : function ( ) {
      $('body').UIUnblock();
      $('.popover').css('visibility','hidden');
      setTimeout(function() {
        $('.popover').remove();
      },10);
    }
  });
  $(function() {
    /////////////////////////////////////////////////
    // Reposition popovers on window resize:
    /////////////////////////////////////////////////
    $(window).on('resize', function() {
      $.UIAlignPopover();
    });
    var events = $.eventStart + ' singletap ' + $.eventEnd;
    $('body').on(events, '.mask', function(e) {
      if (!$('.popover')[0]) {
        if (e && e.nodeType === 1) return;
        e.stopPropogation();
      } else {
        $.UIPopoverClose();
      }
    });
  });


  $.fn.extend({
    ///////////////////////////////
    // Initialize Segmented Control
    ///////////////////////////////
    UISegmented : function ( options ) {
      /*
        var options = {
          selected: 0,
          callback: function() { alert('Boring!'); }
        }
      */
      if ($(this).hazClass('paging').length) return;
      var callback = (options && options.callback) ? options.callback : $.noop;
      var selected = (options && options.selected > 0) ? options.selected : 0;
      this.find('button').forEach(function(ctx, idx) {
        $(ctx).attr('role','radio');
        $(ctx).addClass('segment');
        if (idx === selected) {
          ctx.setAttribute('aria-checked', 'true');
          ctx.classList.add('selected');
        }
      });
      this.on('singletap', 'button', function(e) {
        var $this = $(this);
        if (this.parentNode.classList.contains('paging')) return;
        $this.siblings('button').removeClass('selected');
        $this.siblings('button').removeAttr('aria-checked');
        $this.addClass('selected');
        $this.attr('aria-checked', true);
        callback.call(this, e);
      });
    }
  });
  $.extend({ 
    ///////////////////////////
    // Create Segmented Control
    ///////////////////////////
    UICreateSegmented : function ( options ) {
      /* 
        options = {
          id : '#myId',
          className : 'special' || '',
          labels : ['first','second','third'],
          selected: 0
        }
      */
      var segmented;
      var id = (options && options.id) ? options.id : $.Uuid();
      var className = (options && options.className) ? options.className : '';
      var labels = (options && options.labels) ? options.labels : [];
      var selected = (options && options.selected) ? options.selected : 0;
      var _segmented = ['<div class="segmented'];
      if (className) _segmented.push(' ' + className);
      _segmented.push('">');
      labels.forEach(function(ctx, idx) {
        _segmented.push('<button role="radio" class="segment"');
        _segmented.push('"');
        _segmented.push('>');
        _segmented.push(ctx);
        _segmented.push('</button>');
      });
      _segmented.push('</div>');
      segmented = $(_segmented.join(''));
      segmented.attr('id', id);
      return segmented;
    }
  });


  $.fn.extend({
    ////////////////////////////////////////////
    // Allow Segmented Control to toggle panels
    ////////////////////////////////////////////
    UIPanelToggle : function ( panel, callback ) {
      var panels;
      var selected = 0;
      selected = this.children().hazClass('selected').index() || 0;
      if (panel instanceof Array) {
        panels = panel.children('div');
      } else if (typeof panel === 'string') {
        panels = $(panel).children('div');
      }
      panels.eq(selected).siblings().css({display: 'none'});
      if (callback) callback.apply(this, arguments);
      this.on($.eventEnd, 'button', function() {
        panels.eq($(this).index()).css({display:'block'})
          .siblings().css('display','none');
      });
    
      this.on('singletap', 'button', function() {
        var $this = $(this);
        if (this.parentNode.classList.contains('paging')) return;
        $this.siblings('button').removeClass('selected');
        $this.siblings('button').removeAttr('aria-checked');
        $this.addClass('selected');
        $this.attr('aria-checked', true);
      });
    }
  });


  $.extend({
    ///////////////////////
    // Setup Paging Control
    ///////////////////////
    UIPaging : function ( ) {
      var currentArticle = $('.segmented.paging').closest('nav').next();
      if ($('.segmented.paging').hazClass('horizontal').length) {
        currentArticle.addClass('horizontal');
      } else if ($('.segmented.paging').hazClass('vertical').length) {
        currentArticle.addClass('vertical');
      }
      
      currentArticle.children().eq(0).addClass('current');
      currentArticle.children().eq(0).siblings().addClass('next');
      var sections = function() {
        return currentArticle.children().length;
      };
      var pageBack = function($this) {
        if (sections() === 1) return;
        $this.next().removeClass('selected');
        $this.addClass('selected');
        var currentSection;
        currentSection = $('section.current');
        if (currentSection.index() === 0)  {
          currentSection.removeClass('current');
          currentArticle.children().eq(sections() - 1).addClass('current').removeClass('next');
          currentArticle.children().eq(sections() - 1).siblings().removeClass('next').addClass('previous');
        } else {
          currentSection.removeClass('current').addClass('next');
          currentSection.prev().removeClass('previous').addClass('current');
        }
        setTimeout(function() {
          $this.removeClass('selected');
        }, 250);
      };
      var pageForward = function ($this) {
        if (sections() === 1) return;
        $this.prev().removeClass('selected');
        $this.addClass('selected');
        var currentSection;
        if ($this[0].classList.contains('disabled')) return;
        currentSection = $('section.current');
        if (currentSection.index() === sections() - 1) {
          // start again!
          currentSection.removeClass('current');
          currentArticle.children().eq(0).addClass('current').removeClass('previous');
          currentArticle.children().eq(0).siblings().removeClass('previous').addClass('next');
        } else {
          currentSection.removeClass('current').addClass('previous');
          currentSection.next().removeClass('next').addClass('current');
        }
        setTimeout(function() {
          $this.removeClass('selected');
        }, 250);
      };
      $('.segmented.paging').on($.eventStart, 'button:first-of-type', function() {
        pageBack($(this));
      });
      $('.segmented.paging').on($.eventStart, 'button:last-of-type', function() {
        pageForward($(this));
      });
      // Handle swipe gestures for paging:
      if ($('article.paging.horizontal')[0]) {
        $('article.paging').on('swiperight', function() {
          pageBack($('button:first-of-type'));
        });
        $('article.paging').on('swipeleft', function() {
          pageForward($('button:last-of-type'));
        });
      }
      if ($('article.paging.vertical')[0]) {
        $('article.paging').on('swipeup', function() {
          pageBack($('button:first-of-type'));
        });
        $('article.paging').on('swipeudown', function() {
          pageForward($('button:last-of-type'));
        });
      }
    }
  });


  $.fn.extend({
    
    ////////////////////////////
    // Initialize Editable List,
    // allows moving items and
    // deleting them.
    ////////////////////////////
    UIEditList : function ( options ) {
      /*
        options = {
          editLabel : labelName,
          doneLabel : labelName,
          deleteLabel : labelName,
          callback : callback (Tapping "Done" fires this),
          deletable: false (no deletables),
          movable: false (no movables)
        }
      */
      var settings = {
        editLabel : 'Edit',
        doneLabel : 'Done',
        deleteLabel : 'Delete',
        callback : $.noop,
        deletable: true,
        movable: true
      };
      if (!options) {
        return;
      }
      $.extend(settings, options);

      if (!settings.deletable && !settings.movable) {
        return;
      }

      var transform = ($.isiOS || $.isSafari) ? transform: 'transform';
      var editLabel = settings.editLabel;
      var doneLabel = settings.doneLabel;
      var deleteLabel = settings.deleteLabel;
      var placement = settings.placement;
      var callback = settings.callback;

      var deleteButton;
      var editButton;
      var deletionIndicator;
      var button;
      var dispelDeletable = 'swiperight';
      var enableDeletable = 'swipeleft';
      var moveUpIndicator;
      var moveDownIndicator;
      var dir = $('html').attr('dir');
      dir = dir ? dir.toLowerCase() : '';
      if (dir === 'rtl') {
        dispelDeletable = 'swipeleft';
        enableDeletable = 'swiperight';
      }
      // Windows uses an icon for the delete button:
      if ($.isWin) deleteLabel = '';
      var height = $('li').eq(0)[0].clientHeight;

      if (settings.deletable) {
        deleteButton = $.concat('<button class="delete"><label>', deleteLabel, '</label></button');
        deletionIndicator = '<span class="deletion-indicator"></span>';
        $(this).addClass('deletable');
      }
      if (settings.movable) {
        var moveUpIndicator = "<span class='move-up'></span>";
        var moveDownIndicator = "<span class='move-down'></span>";
        $(this).addClass('editable');
      }
      editButton = $.concat('<button class="edit">', editLabel, '</button');
      if (!$(this).closest('article').prev().find('.edit')[0] && !$(this).closest('article').prev().find('.done')[0]) {
        $(this).closest('article').prev().append(editButton);
      }

      button = $(this).closest('article').prev().find('.edit');
      $(this).find('li').forEach(function(ctx) {
        if (!$(ctx).has('.deletion-indicator').length) {
          if (settings.deletable) {
            $(ctx).prepend(deletionIndicator);
          }
          if (settings.movable) {
            $(ctx).append(moveUpIndicator);
            $(ctx).append(moveDownIndicator);
          }
          if (settings.deletable) {
            $(ctx).append(deleteButton);
          }
        }
      });

      // Setup identifiers for list items.
      // These will help determine position & deletion.
      var listItemPosition = [];
      $(this).find('li').forEach(function(ctx, idx) {
        if (idx === 0) {
          $(ctx).attr('data-list-position', '0')
        } else {
          $(ctx).attr('data-list-position', idx)
        }
        listItemPosition.push(idx);
      });
      $(this).attr('data-list-items-position', listItemPosition.join(','));

      // Callback to setup indicator interactions:
      var setupDeletability = function(callback, list, button) {
        $(function() {
          button.on('singletap', function() {
            var $this = this;

            // When button is in "Edit" state:
            if (this.classList.contains('edit')) {
              setTimeout(function() {
                $this.classList.remove('edit');
                $this.classList.add('done');
                $($this).text(settings.doneLabel);
                $(list).addClass('showIndicators');
              });

            // When button is in "Done" state:
            } else if (this.classList.contains('done')) {
              // Execute callback if edit was performed:
              //========================================
              if ($(list).data('list-edit')) {
                callback.call(callback, list);
              }
              setTimeout(function() {
                $this.classList.remove('done');
                $this.classList.add('edit');
                $($this).text(settings.editLabel);
                $(list).removeClass('showIndicators');
                $(list).find('li').removeClass('selected');
              });     
              var movedItems = [];
              $(list).find('li').forEach(function(ctx, idx) {
                movedItems.push($(ctx).attr('data-list-position'));
              });  
              $(list).attr('data-list-items-position', movedItems.join(','));        
            }
          });

          // Handle deletion indicators:
          $(list).off('singletap', '.deletion-indicator');
          $(list).on('singletap', '.deletion-indicator', function() {
            if ($(this).parent('li').hazClass('selected').length) {
              $(this).parent('li').removeClass('selected');
              return;
            } else {
              $(this).parent('li').addClass('selected');
            }
          });
        
          // Handle swipe gestures:
          $(list).on(dispelDeletable, 'li', function() {
            // If no deletables, disable swipes:
            if (!settings.deletable) return;
            // Else reveal delete button:
            $(this).removeClass('selected');
          });
          
          $(list).on(enableDeletable, 'li', function() {
            // If no deletables, disable swipes:
            if (!settings.deletable) return;
            // Else reveal delete button:
            $(this).addClass('selected');
          });

          // Move list item up:
          $(list).on('singletap', '.move-up', function(e) {
            var item = $(this).closest('li');
            if ((window.$chocolatechipjs && item.is('li:first-child')[0]) || window.jQuery && item.is('li:first-child')) {
              return;
            } else {
              // Mark list as edited:
              $(list).data('list-edit', true);
              var item = $(this).closest('li');
              var prev = item.prev();
              // Clone the items to replace the
              // transitioned ones alter:
              var itemClone = item.clone();
              var prevClone = prev.clone();
              var height = item[0].offsetHeight;
              item.css({
                "-webkit-transform": "translate3d(0,-" + height + "px,0)",
                "transform": "translate3d(0,-" + height + "px,0)"
              });

              prev.css({
                "-webkit-transform": "translate3d(0," + height + "px,0)",
                "transform": "translate3d(0," + height + "px,0)"
              });              
              setTimeout(function() {
                if (window.$chocolatechipjs) {
                  $.replace(prevClone, item);
                  $.replace(itemClone, prev);
                } else {
                  item.replaceWith(prevClone)
                  prev.replaceWith(itemClone)
                }
              }, 250);
            }
          });

          // Move list item down:
          $(list).on('singletap', '.move-down', function(e) {
            var item = $(this).closest('li');
            var next = item.next();
            // Clone the items to replace the
            // transitioned ones alter:
            var itemClone = item.clone();
            var nextClone = next.clone();
            if ((window.$chocolatechipjs && item.is('li:last-child')[0]) || window.jQuery && item.is('li:last-child')) {
              return;
            } else {
              // Mark list as edited:
              $(list).data('list-edit', true);

              var height = item[0].offsetHeight;
              item.css({
                '-webkit-transform': 'translate3d(0,' + height + 'px,0)',
                transform: 'translate3d(0,' + height + 'px,0)'
              });
              next.css({
                "-webkit-transform": "translate3d(0,-" + height + "px,0)",
                "transform": "translate3d(0,-" + height + "px,0)"
              });
              setTimeout(function() {
                if (window.$chocolatechipjs) {
                   $.replace(nextClone, item);
                   $.replace(itemClone, next);
                } else {
                  item.replaceWith(nextClone)
                  next.replaceWith(itemClone)
                }
              }, 250);
            }
          });

          // Handle deletion of list item:
          $(list).on('singletap', '.delete', function() {
            var $this = this;
            // Mark list as edited:
            $(list).data('list-edit', true);
            var direction = '-1200%';
            if ($('html').attr('dir') === 'rtl') direction = '1000%';
            $(this).siblings().css({
              '-webkit-transform': 'translate3d(' + direction + ',0,0)', 
              '-webkit-transition': 'all 1s ease-out', 
              'transform': 'translate3d(' + direction + ',0,0)', 
              'transition': 'all 1s ease-out'
            });

            // Handle storing info about deleted items on the list itself:
            var deletedItems = $(list).attr('data-list-items-deleted');
            if (deletedItems === undefined) {
              deletedItems = [$(this).closest('li').attr('data-list-position')];
            } else {
              deletedItems = deletedItems.split(',');
              deletedItems.push($(this).closest('li').attr('data-list-position'));
            }
            $(list).attr('data-list-items-deleted', deletedItems.sort().join(','));

            setTimeout(function() {
              $($this).parent().remove();
            }, 500);
          });
        });    
      };
      // Initialize the editable list:
      return setupDeletability(settings.callback, $(this), button);
    }

  });


  $.fn.extend({
    /////////////////////////
    // Initialize Select List
    /////////////////////////
    /*
    // For default selection use zero-based integer:
    options = {
      name : name // used on radio buttons as group name, defaults to uuid.
      selected : integer,
      callback : callback
      // callback example:
      function () {
        // this is the selected list item:
        console.log($(this).text());
      }
    }
    */
    UISelectList : function (options) {
      var name = (options && options.name) ? options.name : $.Uuid();
      var list = this[0];
      list.classList.add('select');
      $(list).find('li').forEach(function(ctx, idx) {
        var value = ctx.getAttribute("data-select-value") !== null ? ctx.getAttribute("data-select-value") : "";
        ctx.setAttribute('role', 'radio');
        $(ctx).removeClass('selected').find('input').removeAttr('checked');
        if (options && options.selected === idx) {
          ctx.setAttribute('aria-checked', 'true');
          ctx.classList.add('selected');
          if (!$(ctx).find('input')[0]) {
            $(ctx).append('<input type="radio" checked="checked" name="' + name + '" value="' + value +'">');
          } else {
            $(ctx).find('input').prop('checked',true).attr('value', value);
          }
        } else {
          if (!$(ctx).find('input')[0]) {
            $(ctx).append('<input type="radio" name="' + name + '" value="' + value +'">');
          }
        }
      });
      $(list).on('singletap', 'li', function() {
        var item = this;
        $(item).siblings('li').removeClass('selected');
        $(item).siblings('li').removeAttr('aria-checked');
        $(item).siblings('li').find('input').removeAttr('checked');
        $(item).addClass('selected');
        item.setAttribute('aria-checked', true);
        $(item).find('input').prop('checked',true);
        if (options && options.callback) {
          options.callback.apply(this, arguments);
        }
      });
    }
  });


  $.extend({
    ///////////////////////////////////////////////
    // UISheet: Create an Overlay for Buttons, etc.
    ///////////////////////////////////////////////
    /*
      var options {
        id : 'starTrek',
        listClass :'enterprise',
        background: 'transparent',
        handle: false
      }
    */
    UISheet : function ( options ) {
      if (!options) var options = {};
      if (options.background) options.background =  $.concat(' style="background-color:', options.background, '" ');
      if (options.handle === false) options.handle = '';
      var settings = {};
      settings.id = $.Uuid();
      settings.listClass = '';
      settings.background = '';
      settings.handle = '<div class="handle"><span></span></div>';
      if (options) $.extend(settings, options);
      var sheet = $.concat('<div id="', settings.id, '" class="sheet', settings.listClass, '"', settings.background, '>', settings.handle, '<section class="scroller-vertical"></section></div>');
      $('body').append(sheet);
      $('.sheet .handle').on($.eventStart, function() {
        var $this = $(this);
        if ($.isAndroid || $.isChrome) {
          $this.addClass('selected');
          setTimeout(function() {
            $this.removeClass('selected');
            $.UIHideSheet();
          }, 500);
        } else {
          $.UIHideSheet();
        }
      });
    },
    UIShowSheet : function ( id ) {
      var sheet = id ? id : '.sheet';
      $('article.current').addClass('blurred');
      if ($.isAndroid || $.isChrome) {
        $(sheet).css('display','block');
        setTimeout(function() {
          $(sheet).addClass('opened');
        }, 20);
      } else {
        $(sheet).addClass('opened');
      }
    },
    UIHideSheet : function ( ) {
      $('.sheet').removeClass('opened');
      $('article.current').addClass('removeBlurSlow');
      setTimeout(function() {
        $('article').removeClass('blurred');
        $('article').removeClass('removeBlurSlow');
      },500);
    }
  });


  $.extend({
    ////////////////////////////////////////////////
    // Create Slideout with toggle button.
    // Use $.UISlideout.populate to polate slideout.
    // See widget-factor.js for details.
    ////////////////////////////////////////////////
    /* 
    var options = {
      position: position, 
      dynamic: false,
      callback: $.noop
    };
    */
    UISlideout : function ( options ) {
      var position, dynamic, callback = $.noop;
      if (options && options.position)  {
        position = options.position;
      } else {
        position = 'left';
      }
      if (options && options.dynamic) {
        dynamic = options.dynamic;
      } else {
        dynamic = false;
      }
      if (options && options.callback) {
        callback = options.callback;
      }
      var slideoutButton = $("<button class='slide-out-button'></button>");
      var slideOut = '<div class="slide-out"><section></section></div>';
      $('article').removeClass('next');
      $('article').removeClass('current');
      $('article').prev().removeClass('next');
      $('article').prev().removeClass('current');
      $('body').append(slideOut);
      $('body').addClass('slide-out-app');
      $('article:first-of-type').addClass('show');
      $('article:first-of-type').prev().addClass('show');
      $('#global-nav').append(slideoutButton);
      $('.slide-out-button').on($.eventStart, function() {
        $('.slide-out').toggleClass('open');
        $(this).toggleClass('focused');
      });
      if (!dynamic) {
        $('.slide-out').on('singletap', 'li', function() {
          var $this = $(this);
          $this.addClass('selected');
          setTimeout(function() {
            $this.removeClass('selected');
          }, 500);
          var whichArticle = '#' + $(this).attr('data-show-article');
          $.UINavigationHistory[0] = whichArticle;
          $.UISetHashOnUrl(whichArticle);
          $.publish('chui/navigate/leave', $('article.show')[0].id);
          $.publish('chui/navigate/enter', whichArticle);
          if ($.isAndroid || $.isChrome) {
            setTimeout(function() {
            $('.slide-out').removeClass('open');
            $('article').removeClass('show');
            $('article').prev().removeClass('show');
            $(whichArticle).addClass('show');
            $(whichArticle).prev().addClass('show');
            $('.slide-out-button').removeClass('focused');
            }, 400);
          } else {
            $('.slide-out').removeClass('open');
            $('article').removeClass('show');
            $('article').prev().removeClass('show');
            $(whichArticle).addClass('show');
            $(whichArticle).prev().addClass('show');
            $('.slide-out-button').removeClass('focused');
          }
        });
      } else {
        $('.slide-out').on('singletap', 'li', function() {
          if ($.isAndroid || $.isChrome) {
            setTimeout(function() {
              callback(this);
              $('.slide-out-button').removeClass('focused');
            }, 400);
          } else {
            callback(this);
            $('.slide-out-button').removeClass('focused');
          }
        });
      }
    }
  });
  $.extend($.UISlideout, {
    /////////////////////////////////////////////////////////////////
    // Method to populate a slideout with actionable items.
    // The argument is an array of objects consisting of a key/value.
    // The key will be the id of the article to be shown.
    // The value is the title for the list item.
    // [{music:'Music'},{docs:'Documents'},{recipes:'Recipes'}]
    /////////////////////////////////////////////////////////////////  
    populate: function( args ) {
      var slideout = $('.slide-out');
      if (!slideout[0]) return;
      if (!$.isArray(args)) {
        return;
      } else {
        slideout.find('section').append('<ul class="list"></ul>');
        var list = slideout.find('ul');
        args.forEach(function(ctx) {
          for (var key in ctx) {
            if (key === 'header') {
              list.append('<li class="slideout-header"><h2>'+ctx[key]+'</h2></li>');
            } else {
              list.append('<li data-show-article="' + key + '"><h3>' + ctx[key] + '</h3></li>');
            }
          }
        });
      }
    }
  });


  $.fn.extend({
    /////////////////
    // Create stepper
    /////////////////
    /*
      var options = {
        start: 0,
        end: 10,
        defaultValue: 3
      }
    */
    UIStepper : function (options) {
      if (!options) return [];
      if (!options.start) return [];
      if (!options.end) return [];
      var stepper = $(this);
      var start = options.start;
      var end = options.end;
      var defaultValue = options.defaultValue ? options.defaultValue : options.start;
      var increaseSymbol = '+';
      var decreaseSymbol = '-';
      if ($.isWin) {
         increaseSymbol = '';
         decreaseSymbol = '';
      }
      var decreaseButton = '<button class="decrease"><span>' + decreaseSymbol + '</span></button>';
      var label = '<label>' + defaultValue + '</label><input type="text" value="' + defaultValue + '">';
      var increaseButton = '<button class="increase"><span>' + increaseSymbol + '</span></button>';
      stepper.append(decreaseButton + label + increaseButton);
      stepper.data('ui-value', {start: start, end: end, defaultValue: defaultValue});
    
      var decreaseStepperValue = function() {
        var currentValue = stepper.find('input').val();
        var value = stepper.data('ui-value');
        var start = value.start;
        var newValue;
        if (currentValue <= start) {
          $(this).addClass('disabled');
        } else {
          newValue = Number(currentValue) - 1;
          stepper.find('button:last-of-type').removeClass('disabled');
          stepper.find('label').text(newValue);
          stepper.find('input')[0].value = newValue;
          if (currentValue === start) {
            $(this).addClass('disabled');
          }
        }
      };
    
      var increaseStepperValue = function() {
        var currentValue = stepper.find('input').val();
        var value = stepper.data('ui-value');
        var end = value.end;
        var newValue;
        if (currentValue >= end) {
          $(this).addClass('disabled');
        } else {
          newValue = Number(currentValue) + 1;
          stepper.find('button:first-of-type').removeClass('disabled');
          stepper.find('label').text(newValue);
          stepper.find('input')[0].value = newValue;
          if (currentValue === end) {
            $(this).addClass('disabled');
          }
        }
      };
      stepper.find('button:first-of-type').on('singletap', function() {
        decreaseStepperValue.call(this, stepper);
      });
      stepper.find('button:last-of-type').on('singletap', function() {
        increaseStepperValue.call(this, stepper);
      });
    }
  });
  $.extend({
    ///////////////////////////////////////////
    // Pass the id of the stepper to reset.
    // It's value will be reset to the default.
    ///////////////////////////////////////////
    // Pass it the id of the stepper:
    UIResetStepper : function ( stepper ) {
      var defaultValue = stepper.data('ui-value').defaultValue;
      stepper.find('label').html(defaultValue);
      stepper.find('input')[0].value = defaultValue;
    }
  });


  $.fn.extend({
    ////////////////////////////
    // Initialize Switch Control
    ////////////////////////////
    UISwitch : function ( ) {
      var hasThumb = false;
      // Abrstract swipe for left-to-right and right-to-left:
      var swipeOn = "swiperight";
      var swipeOff = "swipeleft"
      if (document.documentElement.dir === "rtl") {
        swipeOn = "swipeleft";
        swipeOff = "swiperight";
      }
      this.forEach(function(ctx, idx) {
        ctx.setAttribute('role','checkbox');
        if ($(ctx).data('ui-setup') === true) return;
        if (!ctx.querySelector('input')) {
          ctx.insertAdjacentHTML('afterBegin', '<input type="checkbox">');
        }
        if (ctx.classList.contains('on')) {
          ctx.querySelector('input').setAttribute('checked', 'checked');
        }
        if (ctx.querySelector('em')) hasThumb = true;
        if (!hasThumb) {
          ctx.insertAdjacentHTML('afterBegin', '<em></em>');
        }
        $(ctx).on('singletap', function() {
          var checkbox = ctx.querySelector('input');
          if (ctx.classList.contains('on')) {
            ctx.classList.remove('on');
            ctx.removeAttribute('aria-checked');
            checkbox.removeAttribute('checked');
          } else {
            ctx.classList.add('on');
            checkbox.setAttribute('checked', 'checked');
            ctx.setAttribute('aria-checked', true);
          }
        });
        $(ctx).on(swipeOn, function() {
          var checkbox = ctx.querySelector('input');
          if (ctx.classList.contains('on')) {
            ctx.classList.remove('on');
            ctx.removeAttribute('aria-checked');
            checkbox.removeAttribute('checked');
          }
        });
        $(ctx).on(swipeOff, function() {
          var checkbox = ctx.querySelector('input');
          if (!ctx.classList.contains('on')) {
            ctx.classList.add('on');
            checkbox.setAttribute('checked', 'checked');
            ctx.setAttribute('aria-checked', true);
          }
        });
        $(ctx).data('ui-setup', true);
      });
    }
  });
  $.extend({
    ////////////////////////
    // Create Switch Control
    ////////////////////////
    UICreateSwitch : function ( options ) {
      /* options = {
          id : '#myId',
          name: 'fruit.mango'
          state : 'on' || 'off' //(off is default),
          value : 'Mango' || '',
          checked: 'on' || '',
          style: 'traditional' || '',
          callback : callback
        }
      */
      var settings = {
        id: $.Uuid(),
        name: '',
        value: '',
        state: '',
        checked: '',
        style: ''
      };
      $.extend(settings, options);
      if (settings.state === 'off') settings.state = '';
      var _switch = $.concat('<span class="switch', " ", settings.style, " ", settings.state, 
        '" id="', settings.id, '"><em></em>','<input type="checkbox"',
        settings.name, settings.checked, ' value="', settings.value, '"></span>');
      return $(_switch);
    }
  });
  $(function() {
    //////////////////////////
    // Handle Existing Switches:
    //////////////////////////
    $('.switch').UISwitch();
  });


  document.addEventListener('touchstart', function (e) {
    var parent = e.target,
      i = 0;

    for (i = 0; i < 10; i += 1) {
      if (parent !== null) {
        if (parent.className !== undefined) {
          if (parent.className.match('navigable')) {
            if (parent.scrollTop === 0) {
              parent.scrollTop = 1;
            } else if ((parent.scrollTop + parent.offsetHeight) === parent.scrollHeight) {
              parent.scrollTop = parent.scrollTop - 1;
            }
          }
        }
        parent = parent.parentNode;
      }
    }
  });


  $.extend({
    ///////////////////////////////////////////
    // Creates a Tab Bar for Toggling Articles:
    ///////////////////////////////////////////
    UITabbar : function ( options ) {
      /*
      var options = {
        id: 'mySpecialTabbar',
        tabs: 4,
        labels: ["Refresh", "Add", "Info", "Downloads", "Favorite"],
        icons: ["refresh", "add", "info", "downloads", "favorite"],
        selected: 2
      }
      */
      if (!options) return;
      var settings = {
        id : $.Uuid(),
        selected : 0
      };
      $.extend(settings, options);
      $('body').addClass('hasTabBar');
      if ($.isiOS6) $('body').addClass('isiOS6');
      var tabbar = '<div class="tabbar" id="' + settings.id + '">';
      var icon = ($.isiOS || $.isSafari) ? '<span class="icon"></span>' : '';
      var articles = $('article');
      for (var i = 0; i < settings.tabs; i++) {
        tabbar += '<button class="' + settings.icons[i];
        if (settings.selected === i+1) {
          tabbar += ' selected';
        }
        tabbar += '">' + icon + '<label>' + settings.labels[i] + '</label></button>';
      }
      tabbar += '</div>';
      $('body').append(tabbar);

      //////////////////////////////////////////////////////
      // Add article id as history data attribute to button:
      //////////////////////////////////////////////////////
      $('#' + settings.id).find('button').forEach(function(ctx, idx){
        $(ctx).data('history', ['#' + articles.eq(idx)[0].id]);
      });
      $('nav').removeClass('current').addClass('next');
      $('#global-nav').removeClass('next');
      $('nav').eq(settings.selected).removeClass('next').addClass('current');
      $('article').removeClass('current').addClass('next');
      $('article').eq(settings.selected-1).removeClass('next').addClass('current');

      // Setup events on tabs:
      var tabButtonTap = 'singletap';
      if ($.isAndroid) {
        tabButtonTap = $.eventStart;
      }
      $('.tabbar').on(tabButtonTap, 'button', function() {
        var $this = this;
        var index;
        var id;
        $.publish('chui/navigate/leave', $('article.current')[0].id);

        //////////////////////////////////////////////////
        // Set the data attribute for the current history:
        //////////////////////////////////////////////////

        $this.classList.add('selected');
        $($this).siblings('button').removeClass('selected');
        index = $(this).index();
        $('article.previous').removeClass('previous').addClass('next');
        $('nav.previous').removeClass('previous').addClass('next');

        /////////////////////////////////////////////////////////////////
        // Update the history array with the current tabs stored history:
        /////////////////////////////////////////////////////////////////
        var history = $(this).data('history');

        ///////////////////////////////////////////////
        // If the history array has more than one item, 
        // we know that it is a navigation link.
        ///////////////////////////////////////////////
        if (history.length > 1) {
          $('article.current').removeClass('current').addClass('next');
          $('nav.current').removeClass('current').addClass('next');

          /////////////////////////////////////////////////
          // Set saved state of navigation list to current:
          /////////////////////////////////////////////////
          $(history[history.length-1]).removeClass('next').addClass('current');
          $(history[history.length-1]).prev().removeClass('next').addClass('current');

          ////////////////////////////////////////////////////
          // Set state for earlier screens of navigation list:
          ////////////////////////////////////////////////////
          var prevScreens = history.length-1;
          for (var i = 0; i < prevScreens; i++) {
            $(history[i]).removeClass('next').addClass('previous');
            $(history[i]).prev().removeClass('next').addClass('previous');
          }

        ////////////////////////////////////////////////
        // Otherwise, since the array has only one item, 
        // we are dealing with a single tabbar panel.
        ////////////////////////////////////////////////
        } else {
          $('article.current').removeClass('current').addClass('next');
          $('nav.current').removeClass('current').addClass('next');
          $('article').eq(index).removeClass('next').addClass('current');
          $('nav').eq(index+1).removeClass('next').addClass('current');
        }

        id = $('article').eq(index)[0].id;
        $.publish('chui/navigate/enter', id);

        // Set the chosen tab article's scroll to top:
        //============================================
        $('article').forEach(function(ctx) {
          if (window.jQuery) {
            $(ctx).scrollTop(0);
          } else if (window.$chocolatechipjs) {
            ctx.scrollTop = 0;
          }
        });
        $.UISetHashOnUrl('#'+id);
        $.UINavigationHistory = $(this).data('history');
      });
    }
  });


  $.extend({
  /////////////////////////////
  // Templating:
  /////////////////////////////
    templates : {},
   
    template : function ( tmpl, variable ) {
      var regex;
      variable = variable || 'data';
      regex = /\[\[=([\s\S]+?)\]\]/g;
      var template =  new Function(variable, 
        "var p=[];" + "p.push('" + tmpl
        .replace(/[\r\t\n]/g, " ")
        .split("'").join("\\'")
        .replace(regex,"',$1,'")
        .split('[[').join("');")
        .split(']]').join("p.push('") + "');" +
        "return p.join('');");
      return template;
    }
  });


  /////////////////////////
  // Create a search input:
  /////////////////////////
  /*
    $.UISearch({
      articleId: '#products',
      id: 'productSearch',
      placeholder: 'Find a product',
      results: 5
    })
  */
  $.extend({
    UISearch : function(options) {
      var article = options && options.articleId || $('article').eq(0);
      var searchID = options && options.id || $.Uuid();
      var placeholder = options && options.placeholder || 'search';
      var results = options && options.results || 1;
      var widget = '<div class="searchBar"><input placeholder="' + placeholder +'" type="search" results="' + results + '" id="'+ searchID + '"></div>';
      $(article).find('section').prepend(widget);
      if ($.isWin) {
        $(article).prev().append(widget);
        $('#' + searchID).parent().append('<span class="searchGlyph">&#xe11A;</span>');
      }
    }
  });


  //////////////////////////////////
  // Initialize a swipeable carousel:
  //////////////////////////////////
  $(function() {
    var UICarousel = (function () {
      var discoverVendorStyle = document.createElement('div').style,
        vendor = (function () {
          var vendors = 't,webkitT'.split(',');
          var l = vendors.length;
          var t;
          for ( var i = 0 ; i < l; i++ ) {
          t = vendors[i] + 'ransform';
            if ( t in discoverVendorStyle ) {
              return vendors[i].substr(0, vendors[i].length - 1);
            }
          }
          return false;
        })();
      var cssVendor = vendor ? '-' + vendor.toLowerCase() + '-' : '';
      var transform = prefixStyle('transform');
      var transitionDuration = prefixStyle('transitionDuration');
      var hasTouch = 'ontouchstart' in window;
      if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) hasTouch = false;
      var startEvent = $.eventStart;
      var moveEvent = $.eventMove;
      var endEvent = $.eventEnd;
      var cancelEvent = $.eventCancel;
      var transitionEndEvent = (function () {
        if ( vendor === false ) return false;
        var transitionEnd = {
          '': 'transitionend',
          'webkit': 'webkitTransitionEnd'
          };
        return transitionEnd[vendor];
      })();
        
      var UICarousel = function ( options ) {
        if (!options) return;
        var ul, li, className;
        this.carouselContainer = typeof options.target === 'string' ? document.querySelector(options.target) : options.target;
        this.options = {
          panels: options.panels || 3,
          snapThreshold: null,
          loop: options.loop || true
        };
        // Adjustment for RTL carousels:
        if ($.isRTL) {
          options.loop = true;
        }
        // Include user's options:
        for (var i in options) this.options[i] = options[i];
        this.carouselContainer.style.overflow = 'hidden';
        this.carouselContainer.style.position = 'relative';
        this.carouselPanels = [];
        ul = document.createElement('ul');
        ul.className = 'carousel-track';
        ul.style.cssText = 'position:relative;top:0;height:100%;width:100%;' + cssVendor + 'transition-duration:0;' + cssVendor + 'transform:translateZ(0);' + cssVendor + 'transition-timing-function:ease-out';
        this.carouselContainer.appendChild(ul);
        this.track = ul;
        this.refreshSize();
        var whichPanelIndex;
        for (var j = -1; j < 2; j++) {
          li = document.createElement('li');
          li.id = 'carousel-panel-' + (j + 1);
          li.style.cssText = cssVendor + 'transform:translateZ(0);position:absolute;top:0;height:100%;width:100%;left:' + j * 100 + '%';
          whichPanelIndex = j === -1 ? this.options.panels - 1 : j;
          $(li).data('upcomingPanelIndex', whichPanelIndex);
          if (!this.options.loop && j === -1) li.style.visibility = 'hidden';
          this.track.appendChild(li);
          this.carouselPanels.push(li);
        }
        className = this.carouselPanels[1].className;
        this.carouselPanels[1].className = !className ? 'carousel-panel-active' : className + ' carousel-panel-active';
        this.carouselContainer.addEventListener(startEvent, this, false);
        this.carouselContainer.addEventListener(moveEvent, this, false);
        this.carouselContainer.addEventListener(endEvent, this, false);
        this.track.addEventListener(transitionEndEvent, this, false);
        var pagination;
        if (options.pagination) {
          pagination = document.createElement('ul');
          pagination.className = 'pagination';
          for (var k = 0; k < this.options.panels; k++) {
            li = document.createElement('li');
            if (k === 0) {
              li.className = 'selected';
            }
            pagination.appendChild(li);
          }
          if (window.$chocolatechipjs) {
            this.carouselContainer.insertAdjacentElement('afterEnd', pagination);
          } else {
            $(this.carouselContainer).after(pagination);
          }
        }
      };
      UICarousel.prototype = {
        currentPanel: 1,
        x: 0,
        panel: 0,
        customEvents: [],
        
        onSlide: function (fn) {
          this.carouselContainer.addEventListener('carousel-panel-move', fn, false);
          this.customEvents.push(['move', fn]);
        },
        destroy: function () {
          while ( this.customEvents.length ) {
            this.carouselContainer.removeEventListener('carousel-panel-' + this.customEvents[0][0], this.customEvents[0][1], false);
            this.customEvents.shift();
          }
          // Remove event listeners:
          this.carouselContainer.removeEventListener(startEvent, this, false);
          this.carouselContainer.removeEventListener(moveEvent, this, false);
          this.carouselContainer.removeEventListener(endEvent, this, false);
          this.track.removeEventListener(transitionEndEvent, this, false);
        },
        refreshSize: function () {
          this.carouselContainerWidth = this.carouselContainer.clientWidth;
          this.carouselContainerHeight = this.carouselContainer.clientHeight;
          this.panelWidth = this.carouselContainerWidth;
          this.maxX = -this.options.panels * this.panelWidth + this.carouselContainerWidth;
          this.snapThreshold = this.options.snapThreshold === null ?
            Math.round(this.panelWidth * 0.15) :
            /%/.test(this.options.snapThreshold) ?
              Math.round(this.panelWidth * this.options.snapThreshold.replace('%', '') / 100) :
              this.options.snapThreshold;
        },
        
        updatePanelCount: function (n) {
          this.options.panels = n;
          this.maxX = -this.options.panels * this.panelWidth + this.carouselContainerWidth;
        },
        
        goToPanel: function (p) {
          this.carouselPanels[this.currentPanel].className = this.carouselPanels[this.currentPanel].className.replace(/(^|\s)carousel-panel-active(\s|$)/, '');
          p = p < 0 ? 0 : p > this.options.panels-1 ? this.options.panels - 1 : p;
          console.log('p: ' , p);
          this.panel = p;
          this.track.style[transitionDuration] = '0s';
          this.getPosition(-p * this.panelWidth);
          this.currentPanel = (this.panel + 1) - Math.floor((this.panel + 1) / 3) * 3;
          this.carouselPanels[this.currentPanel].className = this.carouselPanels[this.currentPanel].className + ' carousel-panel-active';
          if (this.currentPanel === 0) {
            this.carouselPanels[2].style.left = this.panel * 100 - 100 + '%';
            this.carouselPanels[0].style.left = this.panel * 100 + '%';
            this.carouselPanels[1].style.left = this.panel * 100 + 100 + '%';
            $(this.carouselPanels[2]).data('upcomingPanelIndex', this.panel === 0 ? this.options.panels - 1 : this.panel - 1);
            $(this.carouselPanels[0]).data('upcomingPanelIndex', this.panel);
            $(this.carouselPanels[1]).data('upcomingPanelIndex', this.panel === this.options.panels - 1 ? 0 : this.panel + 1);
          } else if (this.currentPanel === 1) {
            this.carouselPanels[0].style.left = this.panel * 100 - 100 + '%';
            this.carouselPanels[1].style.left = this.panel * 100 + '%';
            this.carouselPanels[2].style.left = this.panel * 100 + 100 + '%';
            $(this.carouselPanels[0]).data('upcomingPanelIndex', this.panel === 0 ? this.options.panels - 1 : this.panel - 1);
            $(this.carouselPanels[1]).data('upcomingPanelIndex', this.panel);
            $(this.carouselPanels[2]).data('upcomingPanelIndex', this.panel === this.options.panels - 1 ? 0 : this.panel + 1);
          } else {
            this.carouselPanels[1].style.left = this.panel * 100 - 100 + '%';
            this.carouselPanels[2].style.left = this.panel * 100 + '%';
            this.carouselPanels[0].style.left = this.panel * 100 + 100 + '%';
            $(this.carouselPanels[1]).data('upcomingPanelIndex', this.panel === 0 ? this.options.panels - 1 : this.panel - 1);
            $(this.carouselPanels[2]).data('upcomingPanelIndex', this.panel);
            $(this.carouselPanels[0]).data('upcomingPanelIndex', this.panel === this.options.panels - 1 ? 0 : this.panel + 1);
          }
          this.slide();
        },
        handleEvent: function (e) {
          switch (e.type) {
            case startEvent:
              this.start(e);
              break;
            case moveEvent:
              this.move(e);
              break;
            case cancelEvent:
            case endEvent:
              this.end(e);
              break;
          }
        },
        getPosition: function (x) {
          this.x = x;
          this.track.style[transform] = 'translate(' + x + 'px,0) translateZ(0)';
        },
        resize: function () {
          this.refreshSize();
          this.track.style[transitionDuration] = '0s';
          this.getPosition(-this.panel * this.panelWidth);
        },
        start: function (e) {
          if (this.initiated) return;
          var point = hasTouch ? e.touches[0] : e;
          this.initiated = true;
          this.moved = false;
          this.thresholdExceeded = false;
          this.startX = point.pageX;
          this.startY = point.pageY;
          this.pointX = point.pageX;
          this.pointY = point.pageY;
          this.stepsX = 0;
          this.stepsY = 0;
          this.directionX = 0;
          this.directionLocked = false;
          this.track.style[transitionDuration] = '0s';
          this.event('touchstart');
        },
        
        move: function (e) {
          if (!this.initiated) return;
          var point = hasTouch ? e.touches[0] : e;
          var deltaX = point.pageX - this.pointX;
          var deltaY = point.pageY - this.pointY;
          var newX = this.x + deltaX;
          var dist = Math.abs(point.pageX - this.startX);
          this.moved = true;
          this.pointX = point.pageX;
          this.pointY = point.pageY;
          this.directionX = deltaX > 0 ? 1 : deltaX < 0 ? -1 : 0;
          this.stepsX += Math.abs(deltaX);
          this.stepsY += Math.abs(deltaY);
          // Use buffer to calculate direction of swipe:
          if (this.stepsX < 10 && this.stepsY < 10) {
            return;
          }
          // If scrolling vertically, cancel:
          if (!this.directionLocked && this.stepsY > this.stepsX) {
            this.initiated = false;
            return;
          }
          e.preventDefault();
          this.directionLocked = true;
          if (!this.options.loop && (newX > 0 || newX < this.maxX)) {
            newX = this.x + (deltaX / 2);
          }
          this.getPosition(newX);
        },
        
        end: function (e) {
          if (!this.initiated) return;
          var point = hasTouch ? e.changedTouches[0] : e;
          var dist = Math.abs(point.pageX - this.startX);
          this.initiated = false;
          if (!this.moved) return;
          if (!this.options.loop && (this.x > 0 || this.x < this.maxX)) {
            dist = 0;
          }
          // Check if exceeded snap threshold:
          if (dist < this.snapThreshold) {
            this.track.style[transitionDuration] = Math.floor(300 * dist / this.snapThreshold) + 'ms';
            this.getPosition(-this.panel * this.panelWidth);
            return;
          }
          this.checkPosition();
        },
        
        checkPosition: function () {
          var panelMove;
          var pageFlipIndex;
          var className;
          this.carouselPanels[this.currentPanel].className = '';
          // Slide the panel:
          if (this.directionX > 0) {
            this.panel = -Math.ceil(this.x / this.panelWidth);
            this.currentPanel = (this.panel + 1) - Math.floor((this.panel + 1) / 3) * 3;
            panelMove = this.currentPanel - 1;
            panelMove = panelMove < 0 ? 2 : panelMove;
            this.carouselPanels[panelMove].style.left = this.panel * 100 - 100 + '%';
            pageFlipIndex = this.panel - 1;
          } else {
            this.panel = -Math.floor(this.x / this.panelWidth);
            this.currentPanel = (this.panel + 1) - Math.floor((this.panel + 1) / 3) * 3;
            panelMove = this.currentPanel + 1;
            panelMove = panelMove > 2 ? 0 : panelMove;
            this.carouselPanels[panelMove].style.left = this.panel * 100 + 100 + '%';
            pageFlipIndex = this.panel + 1;
          }
          // Add active class to current panel:
          className = this.carouselPanels[this.currentPanel].className;
          /(^|\s)carousel-panel-active(\s|$)/.test(className) || (this.carouselPanels[this.currentPanel].className = !className ? 'carousel-panel-active' : className + ' carousel-panel-active');
          className = this.carouselPanels[panelMove].className;
          pageFlipIndex = pageFlipIndex - Math.floor(pageFlipIndex / this.options.panels) * this.options.panels;
          $(this.carouselPanels[panelMove]).data('upcomingPanelIndex', pageFlipIndex);
          // Index to be loaded in the newly moved panel:
          var newX = -this.panel * this.panelWidth;
          this.track.style[transitionDuration] = Math.floor(500 * Math.abs(this.x - newX) / this.panelWidth) + 'ms';
          // Hide the next panel if looping disabled:
          if (!this.options.loop) {
            this.carouselPanels[panelMove].style.visibility = newX === 0 || newX === this.maxX ? 'hidden' : '';
          }
          if (this.x === newX) {
            this.slide();
          } else {
            this.getPosition(newX);
            this.slide();
          }
        },
        
        slide: function () {
          this.event('move');
        },
        event: function (type) {
          var ev = document.createEvent("Event");
          ev.initEvent('carousel-panel-' + type, true, true);
          this.carouselContainer.dispatchEvent(ev);
        }
      };
      function prefixStyle (style) {
        if ( vendor === '' ) return style;
        style = style.charAt(0).toUpperCase() + style.substr(1);
        return vendor + style;
      }
      return UICarousel;
    })();
    /*
      options = {
        target : (container of carousel),
        panels: (array of content for panels),
        loop: true/false
      }
    */
    $.extend({
      UISetupCarousel : function ( options ) {
        // Method to adjust panel content for RTL:
        function reverseList ( array ) {
          var a = array.shift(0);
          array.reverse();
          array.unshift(a);
          return array;
        }
        if (!options) return;
        options.loop = options.loop || false;
        var carousel = new UICarousel({
          target: options.target,
          panels: options.panels.length,
          loop: options.loop,
          pagination: options.pagination
        });
        $(options.target).data('carousel', carousel);
        // Reverse array of data if RTL:
        if ($.isRTL) options.panels = reverseList(options.panels);
        var panel;
        // Load initial data:
        for (var i = 0; i < 3; i++) {
          panel = (i === 0) ? options.panels.length - 1 : i - 1;
          carousel.carouselPanels[i].innerHTML = options.panels[Number(panel)];
        }
        var index = 0;
        var pagination = $(options.target).next('ul.pagination');
        carousel.onSlide(function () {
          for (var i = 0; i < 3; i++) {
            var upcoming = $(carousel.carouselPanels[i]).data('upcomingPanelIndex');
            carousel.carouselPanels[i].innerHTML = options.panels[Number(upcoming)];
          }
          index = $('.carousel-panel-active').data('upcomingPanelIndex');
          pagination.find('li').removeClass('selected');
          // Handle pagination differently if RTL:
          if ($.isRTL) {
            pagination.find('li').removeClass('selected');
            if (index < 1) {
              pagination.find('li').eq(0).addClass('selected');
            } else {
              pagination.find('li').eq(options.panels.length - index).addClass('selected');
            }
          } else {
            pagination.find('li').eq(index).addClass('selected');
          }
        }); 
        $(options.target).on('mousedown', 'img', function() {return false;});
        var width = $(options.target).css('width');
        pagination.css('width', width);
        pagination.on('click', 'li', function() {
          $(this).siblings('li').removeClass('selected');
          $(this).addClass('selected');
          var goto = 0;
          // Handle pagination differently if RTL:
          if ($.isRTL) {
            var reverse = $(this).parent().children('li').length;
            if ($(this).index() === 0) {
              carousel.goToPanel(0);
            } else {
              goto = reverse - $(this).index();
              carousel.goToPanel(goto);
            }
            $(this).siblings('li').removeClass('selected');
            $(this).addClass('selected');
          } else {
            if ($(this).index() === 0) {
              carousel.goToPanel(0);
            } else {
              carousel.goToPanel($(this).index()); 
            }          
          }
        });
      }
    });
  });


  $.fn.extend({
    UIRange : function () {
      if ($.isWin) return;
      if (this[0].nodeName !== 'INPUT') return;
      var input = $(this);    
      var newPlace;  
      var width = input.width();
      var newPoint = (input.val() - input.attr("min")) / (input.attr("max") - input.attr("min"));
      var offset = -1.3;
      if (newPoint < 0) { 
        newPlace = 0; 
      } else if (newPoint > 1) { 
        newPlace = width; 
      } else { 
        newPlace = width * newPoint + offset; offset -= newPoint; 
      }
      if ($.isAndroid || $.isChrome) input.css({'background-size': Math.round(newPlace) + 'px 3px, 100% 2px'});
      else input.css({'background-size': Math.round(newPlace) + 'px 10px'});         
    }
  });
  $(function() {
    $('input[type=range]').forEach(function(ctx) {
      $(ctx).UIRange();
    });
    $('body').on('input', 'input[type=range]', function() {
      $(this).UIRange();
    });
  });


  // Widget to enable styled select boxes (pickers):
  $.extend({
    UISelectBox: function() {
      var showSelectBox = function (element) {
          var event;
          event = document.createEvent('MouseEvents');
          event.initMouseEvent('mousedown', true, true, window);
          element.dispatchEvent(event);
      };
      if (!$.isDesktop && $.isiOS) {
        $('.select-box-label').forEach(function(ctx) {
          var label = $(ctx);
          var select = label.prev();
          if (!select[0].id) {
            select.attr('id', $.Uuid());
          }
          select.trigger('singletap');
          label.text(select.val());
          label.attr('for', select.attr('id'));
        });
        $('.select-box select').on('change', function() {
          $(this).next().text($(this).val());
        });
      } else if (!$.isDesktop) {
        var showDropdown = function (element) {
            var event;
            event = document.createEvent('MouseEvents');
            event.initMouseEvent('mousedown', true, true, window);
            element.dispatchEvent(event);
        };
        if (!$.isDesktop) {
          $('.select-box-label').forEach(function(ctx) {
            if (!ctx.id) {
              $(ctx).prev().attr('id', $.Uuid());
            }
            var val = $(ctx).siblings('select').val();
            $(ctx).text(val);
          });
          $('.select-box select').on('change', function() {
            var val = $(this).find("option:selected").text();
            var $this = $(this);
            $this.next('label').text($(this).val());
            $this.siblings('label').text(val);
          });
          $('body').on('singletap', '.select-box-label', function() {
            showDropdown($('select')[0]);
          });
        } 
      }
    }
  });
  $(function() {
    $.UISelectBox();
  });


  //////////////////////////////////////////
  // Plugin to setup automatic data binding:
  //////////////////////////////////////////
  $.extend($, {
    UIBindData : function (controller) {
      var controllers;
      // If user provides controller,
      // only bind to that one:
      if (controller) {
        controllers = $('[data-controller=' + controller +']');
      // Otherwise get all controllers:
      } else {
        controllers = $('[data-controller]');
      }
      var broadcasts = [];

      // Define function to create broadcasts:
      //======================================
      var createBroadcaster = function(controller) {
        var broadcast = 'data-binding-' + $(controller).attr('data-controller');
        broadcasts.push(broadcast);
      };

      // Loop controllers, create broadcasts,
      // subscribe models to broadcasts:
      //=====================================
      controllers.forEach(function(ctx, idx) {
        var model = $(ctx).attr('data-controller');
        createBroadcaster(ctx);
        // Subscribe and update elements with data:
        $.subscribe(broadcasts[idx], function(event, value) {
          var element = '[data-model=' + model + ']';
          $(element).text(value);
        });
      });

      // Bind events to controllers to publish broadcasts:
      //==================================================
      $('body').on('input change', '[data-controller]', function(event) {
        var broadcast = 'data-binding-' + $(this).attr('data-controller');
        $.publish(broadcast, $(this).val());
      });
    },

    //////////////////////////////////////
    // Unbind a specific controller/model:
    //////////////////////////////////////
    UIUnBindData : function (controller) {
      delete $.subscriptions['data-binding-' + controller];
    }
  });

})(window.CHUIJSLIB);
(function () {
    var Bacon, BufferingSource, Bus, CompositeUnsubscribe, ConsumingSource, Desc, Dispatcher, End, Error, Event, EventStream, Exception, Initial, Next, None, Observable, Property, PropertyDispatcher, Some, Source, UpdateBarrier, _, addPropertyInitValueToStream, assert, assertArray, assertEventStream, assertFunction, assertNoArguments, assertObservable, assertString, cloneArray, constantToFunction, containsDuplicateDeps, convertArgsToFunction, describe, endEvent, eventIdCounter, eventMethods, findDeps, findHandlerMethods, flatMap_, former, idCounter, initialEvent, isArray, isFieldKey, isObservable, latter, liftCallback, makeFunction, makeFunctionArgs, makeFunction_, makeObservable, makeSpawner, nextEvent, nop, partiallyApplied, recursionDepth, ref, registerObs, spys, toCombinator, toEvent, toFieldExtractor, toFieldKey, toOption, toSimpleExtractor, valueAndEnd, withDescription, withMethodCallSupport,
      hasProp = {}.hasOwnProperty,
      extend = function (child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
      slice = [].slice,
      bind = function (fn, me) { return function () { return fn.apply(me, arguments); }; };

    Bacon = {
        toString: function () {
            return "Bacon";
        }
    };

    Bacon.version = '0.7.53';

    Exception = (typeof global !== "undefined" && global !== null ? global : this).Error;

    nop = function () { };

    latter = function (_, x) {
        return x;
    };

    former = function (x, _) {
        return x;
    };

    cloneArray = function (xs) {
        return xs.slice(0);
    };

    assert = function (message, condition) {
        if (!condition) {
            throw new Exception(message);
        }
    };

    assertEventStream = function (event) {
        if (!(event instanceof EventStream)) {
            throw new Exception("not an EventStream : " + event);
        }
    };

    assertObservable = function (event) {
        if (!(event instanceof Observable)) {
            throw new Exception("not an Observable : " + event);
        }
    };

    assertFunction = function (f) {
        return assert("not a function : " + f, _.isFunction(f));
    };

    isArray = function (xs) {
        return xs instanceof Array;
    };

    isObservable = function (x) {
        return x instanceof Observable;
    };

    assertArray = function (xs) {
        if (!isArray(xs)) {
            throw new Exception("not an array : " + xs);
        }
    };

    assertNoArguments = function (args) {
        return assert("no arguments supported", args.length === 0);
    };

    assertString = function (x) {
        if (typeof x !== "string") {
            throw new Exception("not a string : " + x);
        }
    };

    _ = {
        indexOf: Array.prototype.indexOf ? function (xs, x) {
            return xs.indexOf(x);
        } : function (xs, x) {
            var i, j, len1, y;
            for (i = j = 0, len1 = xs.length; j < len1; i = ++j) {
                y = xs[i];
                if (x === y) {
                    return i;
                }
            }
            return -1;
        },
        indexWhere: function (xs, f) {
            var i, j, len1, y;
            for (i = j = 0, len1 = xs.length; j < len1; i = ++j) {
                y = xs[i];
                if (f(y)) {
                    return i;
                }
            }
            return -1;
        },
        head: function (xs) {
            return xs[0];
        },
        always: function (x) {
            return function () {
                return x;
            };
        },
        negate: function (f) {
            return function (x) {
                return !f(x);
            };
        },
        empty: function (xs) {
            return xs.length === 0;
        },
        tail: function (xs) {
            return xs.slice(1, xs.length);
        },
        filter: function (f, xs) {
            var filtered, j, len1, x;
            filtered = [];
            for (j = 0, len1 = xs.length; j < len1; j++) {
                x = xs[j];
                if (f(x)) {
                    filtered.push(x);
                }
            }
            return filtered;
        },
        map: function (f, xs) {
            var j, len1, results, x;
            results = [];
            for (j = 0, len1 = xs.length; j < len1; j++) {
                x = xs[j];
                results.push(f(x));
            }
            return results;
        },
        each: function (xs, f) {
            var key, value;
            for (key in xs) {
                value = xs[key];
                f(key, value);
            }
            return void 0;
        },
        toArray: function (xs) {
            if (isArray(xs)) {
                return xs;
            } else {
                return [xs];
            }
        },
        contains: function (xs, x) {
            return _.indexOf(xs, x) !== -1;
        },
        id: function (x) {
            return x;
        },
        last: function (xs) {
            return xs[xs.length - 1];
        },
        all: function (xs, f) {
            var j, len1, x;
            if (f == null) {
                f = _.id;
            }
            for (j = 0, len1 = xs.length; j < len1; j++) {
                x = xs[j];
                if (!f(x)) {
                    return false;
                }
            }
            return true;
        },
        any: function (xs, f) {
            var j, len1, x;
            if (f == null) {
                f = _.id;
            }
            for (j = 0, len1 = xs.length; j < len1; j++) {
                x = xs[j];
                if (f(x)) {
                    return true;
                }
            }
            return false;
        },
        without: function (x, xs) {
            return _.filter((function (y) {
                return y !== x;
            }), xs);
        },
        remove: function (x, xs) {
            var i;
            i = _.indexOf(xs, x);
            if (i >= 0) {
                return xs.splice(i, 1);
            }
        },
        fold: function (xs, seed, f) {
            var j, len1, x;
            for (j = 0, len1 = xs.length; j < len1; j++) {
                x = xs[j];
                seed = f(seed, x);
            }
            return seed;
        },
        flatMap: function (f, xs) {
            return _.fold(xs, [], (function (ys, x) {
                return ys.concat(f(x));
            }));
        },
        cached: function (f) {
            var value;
            value = None;
            return function () {
                if (value === None) {
                    value = f();
                    f = void 0;
                }
                return value;
            };
        },
        isFunction: function (f) {
            return typeof f === "function";
        },
        toString: function (obj) {
            var ex, internals, key, value;
            try {
                recursionDepth++;
                if (obj == null) {
                    return "undefined";
                } else if (_.isFunction(obj)) {
                    return "function";
                } else if (isArray(obj)) {
                    if (recursionDepth > 5) {
                        return "[..]";
                    }
                    return "[" + _.map(_.toString, obj).toString() + "]";
                } else if (((obj != null ? obj.toString : void 0) != null) && obj.toString !== Object.prototype.toString) {
                    return obj.toString();
                } else if (typeof obj === "object") {
                    if (recursionDepth > 5) {
                        return "{..}";
                    }
                    internals = (function () {
                        var results;
                        results = [];
                        for (key in obj) {
                            if (!hasProp.call(obj, key)) continue;
                            value = (function () {
                                try {
                                    return obj[key];
                                } catch (_error) {
                                    ex = _error;
                                    return ex;
                                }
                            })();
                            results.push(_.toString(key) + ":" + _.toString(value));
                        }
                        return results;
                    })();
                    return "{" + internals + "}";
                } else {
                    return obj;
                }
            } finally {
                recursionDepth--;
            }
        }
    };

    recursionDepth = 0;

    Bacon._ = _;

    UpdateBarrier = Bacon.UpdateBarrier = (function () {
        var afterTransaction, afters, aftersIndex, currentEventId, flush, flushDepsOf, flushWaiters, hasWaiters, inTransaction, rootEvent, waiterObs, waiters, whenDoneWith, wrappedSubscribe;
        rootEvent = void 0;
        waiterObs = [];
        waiters = {};
        afters = [];
        aftersIndex = 0;
        afterTransaction = function (f) {
            if (rootEvent) {
                return afters.push(f);
            } else {
                return f();
            }
        };
        whenDoneWith = function (obs, f) {
            var obsWaiters;
            if (rootEvent) {
                obsWaiters = waiters[obs.id];
                if (obsWaiters == null) {
                    obsWaiters = waiters[obs.id] = [f];
                    return waiterObs.push(obs);
                } else {
                    return obsWaiters.push(f);
                }
            } else {
                return f();
            }
        };
        flush = function () {
            while (waiterObs.length > 0) {
                flushWaiters(0);
            }
            return void 0;
        };
        flushWaiters = function (index) {
            var f, j, len1, obs, obsId, obsWaiters;
            obs = waiterObs[index];
            obsId = obs.id;
            obsWaiters = waiters[obsId];
            waiterObs.splice(index, 1);
            delete waiters[obsId];
            flushDepsOf(obs);
            for (j = 0, len1 = obsWaiters.length; j < len1; j++) {
                f = obsWaiters[j];
                f();
            }
            return void 0;
        };
        flushDepsOf = function (obs) {
            var dep, deps, index, j, len1;
            deps = obs.internalDeps();
            for (j = 0, len1 = deps.length; j < len1; j++) {
                dep = deps[j];
                flushDepsOf(dep);
                if (waiters[dep.id]) {
                    index = _.indexOf(waiterObs, dep);
                    flushWaiters(index);
                }
            }
            return void 0;
        };
        inTransaction = function (event, context, f, args) {
            var after, result;
            if (rootEvent) {
                return f.apply(context, args);
            } else {
                rootEvent = event;
                try {
                    result = f.apply(context, args);
                    flush();
                } finally {
                    rootEvent = void 0;
                    while (aftersIndex < afters.length) {
                        after = afters[aftersIndex];
                        aftersIndex++;
                        after();
                    }
                    aftersIndex = 0;
                    afters = [];
                }
                return result;
            }
        };
        currentEventId = function () {
            if (rootEvent) {
                return rootEvent.id;
            } else {
                return void 0;
            }
        };
        wrappedSubscribe = function (obs, sink) {
            var doUnsub, shouldUnsub, unsub, unsubd;
            unsubd = false;
            shouldUnsub = false;
            doUnsub = function () {
                return shouldUnsub = true;
            };
            unsub = function () {
                unsubd = true;
                return doUnsub();
            };
            doUnsub = obs.dispatcher.subscribe(function (event) {
                return afterTransaction(function () {
                    var reply;
                    if (!unsubd) {
                        reply = sink(event);
                        if (reply === Bacon.noMore) {
                            return unsub();
                        }
                    }
                });
            });
            if (shouldUnsub) {
                doUnsub();
            }
            return unsub;
        };
        hasWaiters = function () {
            return waiterObs.length > 0;
        };
        return {
            whenDoneWith: whenDoneWith,
            hasWaiters: hasWaiters,
            inTransaction: inTransaction,
            currentEventId: currentEventId,
            wrappedSubscribe: wrappedSubscribe,
            afterTransaction: afterTransaction
        };
    })();

    Source = (function () {
        function Source(obs1, sync, lazy1) {
            this.obs = obs1;
            this.sync = sync;
            this.lazy = lazy1 != null ? lazy1 : false;
            this.queue = [];
        }

        Source.prototype.subscribe = function (sink) {
            return this.obs.dispatcher.subscribe(sink);
        };

        Source.prototype.toString = function () {
            return this.obs.toString();
        };

        Source.prototype.markEnded = function () {
            return this.ended = true;
        };

        Source.prototype.consume = function () {
            if (this.lazy) {
                return {
                    value: _.always(this.queue[0])
                };
            } else {
                return this.queue[0];
            }
        };

        Source.prototype.push = function (x) {
            return this.queue = [x];
        };

        Source.prototype.mayHave = function () {
            return true;
        };

        Source.prototype.hasAtLeast = function () {
            return this.queue.length;
        };

        Source.prototype.flatten = true;

        return Source;

    })();

    ConsumingSource = (function (superClass) {
        extend(ConsumingSource, superClass);

        function ConsumingSource() {
            return ConsumingSource.__super__.constructor.apply(this, arguments);
        }

        ConsumingSource.prototype.consume = function () {
            return this.queue.shift();
        };

        ConsumingSource.prototype.push = function (x) {
            return this.queue.push(x);
        };

        ConsumingSource.prototype.mayHave = function (c) {
            return !this.ended || this.queue.length >= c;
        };

        ConsumingSource.prototype.hasAtLeast = function (c) {
            return this.queue.length >= c;
        };

        ConsumingSource.prototype.flatten = false;

        return ConsumingSource;

    })(Source);

    BufferingSource = (function (superClass) {
        extend(BufferingSource, superClass);

        function BufferingSource(obs) {
            BufferingSource.__super__.constructor.call(this, obs, true);
        }

        BufferingSource.prototype.consume = function () {
            var values;
            values = this.queue;
            this.queue = [];
            return {
                value: function () {
                    return values;
                }
            };
        };

        BufferingSource.prototype.push = function (x) {
            return this.queue.push(x.value());
        };

        BufferingSource.prototype.hasAtLeast = function () {
            return true;
        };

        return BufferingSource;

    })(Source);

    Source.isTrigger = function (s) {
        if (s instanceof Source) {
            return s.sync;
        } else {
            return s instanceof EventStream;
        }
    };

    Source.fromObservable = function (s) {
        if (s instanceof Source) {
            return s;
        } else if (s instanceof Property) {
            return new Source(s, false);
        } else {
            return new ConsumingSource(s, true);
        }
    };

    Desc = (function () {
        function Desc(context1, method1, args1) {
            this.context = context1;
            this.method = method1;
            this.args = args1;
            this.cached = void 0;
        }

        Desc.prototype.deps = function () {
            return this.cached || (this.cached = findDeps([this.context].concat(this.args)));
        };

        Desc.prototype.apply = function (obs) {
            obs.desc = this;
            return obs;
        };

        Desc.prototype.toString = function () {
            return _.toString(this.context) + "." + _.toString(this.method) + "(" + _.map(_.toString, this.args) + ")";
        };

        return Desc;

    })();

    describe = function () {
        var args, context, method;
        context = arguments[0], method = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
        if ((context || method) instanceof Desc) {
            return context || method;
        } else {
            return new Desc(context, method, args);
        }
    };

    withDescription = function () {
        var desc, j, obs;
        desc = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), obs = arguments[j++];
        return describe.apply(null, desc).apply(obs);
    };

    findDeps = function (x) {
        if (isArray(x)) {
            return _.flatMap(findDeps, x);
        } else if (isObservable(x)) {
            return [x];
        } else if (x instanceof Source) {
            return [x.obs];
        } else {
            return [];
        }
    };

    withMethodCallSupport = function (wrapped) {
        return function () {
            var args, context, f, methodName;
            f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            if (typeof f === "object" && args.length) {
                context = f;
                methodName = args[0];
                f = function () {
                    return context[methodName].apply(context, arguments);
                };
                args = args.slice(1);
            }
            return wrapped.apply(null, [f].concat(slice.call(args)));
        };
    };

    makeFunctionArgs = function (args) {
        args = Array.prototype.slice.call(args);
        return makeFunction_.apply(null, args);
    };

    partiallyApplied = function (f, applied) {
        return function () {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return f.apply(null, applied.concat(args));
        };
    };

    toSimpleExtractor = function (args) {
        return function (key) {
            return function (value) {
                var fieldValue;
                if (value == null) {
                    return void 0;
                } else {
                    fieldValue = value[key];
                    if (_.isFunction(fieldValue)) {
                        return fieldValue.apply(value, args);
                    } else {
                        return fieldValue;
                    }
                }
            };
        };
    };

    toFieldExtractor = function (f, args) {
        var partFuncs, parts;
        parts = f.slice(1).split(".");
        partFuncs = _.map(toSimpleExtractor(args), parts);
        return function (value) {
            var j, len1;
            for (j = 0, len1 = partFuncs.length; j < len1; j++) {
                f = partFuncs[j];
                value = f(value);
            }
            return value;
        };
    };

    isFieldKey = function (f) {
        return (typeof f === "string") && f.length > 1 && f.charAt(0) === ".";
    };

    makeFunction_ = withMethodCallSupport(function () {
        var args, f;
        f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (_.isFunction(f)) {
            if (args.length) {
                return partiallyApplied(f, args);
            } else {
                return f;
            }
        } else if (isFieldKey(f)) {
            return toFieldExtractor(f, args);
        } else {
            return _.always(f);
        }
    });

    makeFunction = function (f, args) {
        return makeFunction_.apply(null, [f].concat(slice.call(args)));
    };

    convertArgsToFunction = function (obs, f, args, method) {
        var sampled;
        if (f instanceof Property) {
            sampled = f.sampledBy(obs, function (p, s) {
                return [p, s];
            });
            return method.call(sampled, function (arg) {
                var p, s;
                p = arg[0], s = arg[1];
                return p;
            }).map(function (arg) {
                var p, s;
                p = arg[0], s = arg[1];
                return s;
            });
        } else {
            f = makeFunction(f, args);
            return method.call(obs, f);
        }
    };

    toCombinator = function (f) {
        var key;
        if (_.isFunction(f)) {
            return f;
        } else if (isFieldKey(f)) {
            key = toFieldKey(f);
            return function (left, right) {
                return left[key](right);
            };
        } else {
            throw new Exception("not a function or a field key: " + f);
        }
    };

    toFieldKey = function (f) {
        return f.slice(1);
    };

    Some = (function () {
        function Some(value1) {
            this.value = value1;
        }

        Some.prototype.getOrElse = function () {
            return this.value;
        };

        Some.prototype.get = function () {
            return this.value;
        };

        Some.prototype.filter = function (f) {
            if (f(this.value)) {
                return new Some(this.value);
            } else {
                return None;
            }
        };

        Some.prototype.map = function (f) {
            return new Some(f(this.value));
        };

        Some.prototype.forEach = function (f) {
            return f(this.value);
        };

        Some.prototype.isDefined = true;

        Some.prototype.toArray = function () {
            return [this.value];
        };

        Some.prototype.inspect = function () {
            return "Some(" + this.value + ")";
        };

        Some.prototype.toString = function () {
            return this.inspect();
        };

        return Some;

    })();

    None = {
        getOrElse: function (value) {
            return value;
        },
        filter: function () {
            return None;
        },
        map: function () {
            return None;
        },
        forEach: function () { },
        isDefined: false,
        toArray: function () {
            return [];
        },
        inspect: function () {
            return "None";
        },
        toString: function () {
            return this.inspect();
        }
    };

    toOption = function (v) {
        if (v instanceof Some || v === None) {
            return v;
        } else {
            return new Some(v);
        }
    };

    Bacon.noMore = ["<no-more>"];

    Bacon.more = ["<more>"];

    eventIdCounter = 0;

    Event = (function () {
        function Event() {
            this.id = ++eventIdCounter;
        }

        Event.prototype.isEvent = function () {
            return true;
        };

        Event.prototype.isEnd = function () {
            return false;
        };

        Event.prototype.isInitial = function () {
            return false;
        };

        Event.prototype.isNext = function () {
            return false;
        };

        Event.prototype.isError = function () {
            return false;
        };

        Event.prototype.hasValue = function () {
            return false;
        };

        Event.prototype.filter = function () {
            return true;
        };

        Event.prototype.inspect = function () {
            return this.toString();
        };

        Event.prototype.log = function () {
            return this.toString();
        };

        return Event;

    })();

    Next = (function (superClass) {
        extend(Next, superClass);

        function Next(valueF, eager) {
            Next.__super__.constructor.call(this);
            if (!eager && _.isFunction(valueF) || valueF instanceof Next) {
                this.valueF = valueF;
                this.valueInternal = void 0;
            } else {
                this.valueF = void 0;
                this.valueInternal = valueF;
            }
        }

        Next.prototype.isNext = function () {
            return true;
        };

        Next.prototype.hasValue = function () {
            return true;
        };

        Next.prototype.value = function () {
            if (this.valueF instanceof Next) {
                this.valueInternal = this.valueF.value();
                this.valueF = void 0;
            } else if (this.valueF) {
                this.valueInternal = this.valueF();
                this.valueF = void 0;
            }
            return this.valueInternal;
        };

        Next.prototype.fmap = function (f) {
            var event, value;
            if (this.valueInternal) {
                value = this.valueInternal;
                return this.apply(function () {
                    return f(value);
                });
            } else {
                event = this;
                return this.apply(function () {
                    return f(event.value());
                });
            }
        };

        Next.prototype.apply = function (value) {
            return new Next(value);
        };

        Next.prototype.filter = function (f) {
            return f(this.value());
        };

        Next.prototype.toString = function () {
            return _.toString(this.value());
        };

        Next.prototype.log = function () {
            return this.value();
        };

        return Next;

    })(Event);

    Initial = (function (superClass) {
        extend(Initial, superClass);

        function Initial() {
            return Initial.__super__.constructor.apply(this, arguments);
        }

        Initial.prototype.isInitial = function () {
            return true;
        };

        Initial.prototype.isNext = function () {
            return false;
        };

        Initial.prototype.apply = function (value) {
            return new Initial(value);
        };

        Initial.prototype.toNext = function () {
            return new Next(this);
        };

        return Initial;

    })(Next);

    End = (function (superClass) {
        extend(End, superClass);

        function End() {
            return End.__super__.constructor.apply(this, arguments);
        }

        End.prototype.isEnd = function () {
            return true;
        };

        End.prototype.fmap = function () {
            return this;
        };

        End.prototype.apply = function () {
            return this;
        };

        End.prototype.toString = function () {
            return "<end>";
        };

        return End;

    })(Event);

    Error = (function (superClass) {
        extend(Error, superClass);

        function Error(error1) {
            this.error = error1;
        }

        Error.prototype.isError = function () {
            return true;
        };

        Error.prototype.fmap = function () {
            return this;
        };

        Error.prototype.apply = function () {
            return this;
        };

        Error.prototype.toString = function () {
            return "<error> " + _.toString(this.error);
        };

        return Error;

    })(Event);

    Bacon.Event = Event;

    Bacon.Initial = Initial;

    Bacon.Next = Next;

    Bacon.End = End;

    Bacon.Error = Error;

    initialEvent = function (value) {
        return new Initial(value, true);
    };

    nextEvent = function (value) {
        return new Next(value, true);
    };

    endEvent = function () {
        return new End();
    };

    toEvent = function (x) {
        if (x instanceof Event) {
            return x;
        } else {
            return nextEvent(x);
        }
    };

    idCounter = 0;

    registerObs = function () { };

    Observable = (function () {
        function Observable(desc) {
            this.id = ++idCounter;
            withDescription(desc, this);
            this.initialDesc = this.desc;
        }

        Observable.prototype.subscribe = function (sink) {
            return UpdateBarrier.wrappedSubscribe(this, sink);
        };

        Observable.prototype.subscribeInternal = function (sink) {
            return this.dispatcher.subscribe(sink);
        };

        Observable.prototype.onValue = function () {
            var f;
            f = makeFunctionArgs(arguments);
            return this.subscribe(function (event) {
                if (event.hasValue()) {
                    return f(event.value());
                }
            });
        };

        Observable.prototype.onValues = function (f) {
            return this.onValue(function (args) {
                return f.apply(null, args);
            });
        };

        Observable.prototype.onError = function () {
            var f;
            f = makeFunctionArgs(arguments);
            return this.subscribe(function (event) {
                if (event.isError()) {
                    return f(event.error);
                }
            });
        };

        Observable.prototype.onEnd = function () {
            var f;
            f = makeFunctionArgs(arguments);
            return this.subscribe(function (event) {
                if (event.isEnd()) {
                    return f();
                }
            });
        };

        Observable.prototype.name = function (name) {
            this._name = name;
            return this;
        };

        Observable.prototype.withDescription = function () {
            return describe.apply(null, arguments).apply(this);
        };

        Observable.prototype.toString = function () {
            if (this._name) {
                return this._name;
            } else {
                return this.desc.toString();
            }
        };

        Observable.prototype.internalDeps = function () {
            return this.initialDesc.deps();
        };

        return Observable;

    })();

    Observable.prototype.assign = Observable.prototype.onValue;

    Observable.prototype.forEach = Observable.prototype.onValue;

    Observable.prototype.inspect = Observable.prototype.toString;

    Bacon.Observable = Observable;

    CompositeUnsubscribe = (function () {
        function CompositeUnsubscribe(ss) {
            var j, len1, s;
            if (ss == null) {
                ss = [];
            }
            this.unsubscribe = bind(this.unsubscribe, this);
            this.unsubscribed = false;
            this.subscriptions = [];
            this.starting = [];
            for (j = 0, len1 = ss.length; j < len1; j++) {
                s = ss[j];
                this.add(s);
            }
        }

        CompositeUnsubscribe.prototype.add = function (subscription) {
            var ended, unsub, unsubMe;
            if (this.unsubscribed) {
                return;
            }
            ended = false;
            unsub = nop;
            this.starting.push(subscription);
            unsubMe = (function (_this) {
                return function () {
                    if (_this.unsubscribed) {
                        return;
                    }
                    ended = true;
                    _this.remove(unsub);
                    return _.remove(subscription, _this.starting);
                };
            })(this);
            unsub = subscription(this.unsubscribe, unsubMe);
            if (!(this.unsubscribed || ended)) {
                this.subscriptions.push(unsub);
            } else {
                unsub();
            }
            _.remove(subscription, this.starting);
            return unsub;
        };

        CompositeUnsubscribe.prototype.remove = function (unsub) {
            if (this.unsubscribed) {
                return;
            }
            if ((_.remove(unsub, this.subscriptions)) !== void 0) {
                return unsub();
            }
        };

        CompositeUnsubscribe.prototype.unsubscribe = function () {
            var j, len1, ref, s;
            if (this.unsubscribed) {
                return;
            }
            this.unsubscribed = true;
            ref = this.subscriptions;
            for (j = 0, len1 = ref.length; j < len1; j++) {
                s = ref[j];
                s();
            }
            this.subscriptions = [];
            return this.starting = [];
        };

        CompositeUnsubscribe.prototype.count = function () {
            if (this.unsubscribed) {
                return 0;
            }
            return this.subscriptions.length + this.starting.length;
        };

        CompositeUnsubscribe.prototype.empty = function () {
            return this.count() === 0;
        };

        return CompositeUnsubscribe;

    })();

    Bacon.CompositeUnsubscribe = CompositeUnsubscribe;

    Dispatcher = (function () {
        function Dispatcher(_subscribe, _handleEvent) {
            this._subscribe = _subscribe;
            this._handleEvent = _handleEvent;
            this.subscribe = bind(this.subscribe, this);
            this.handleEvent = bind(this.handleEvent, this);
            this.subscriptions = [];
            this.queue = [];
            this.pushing = false;
            this.ended = false;
            this.prevError = void 0;
            this.unsubSrc = void 0;
        }

        Dispatcher.prototype.hasSubscribers = function () {
            return this.subscriptions.length > 0;
        };

        Dispatcher.prototype.removeSub = function (subscription) {
            return this.subscriptions = _.without(subscription, this.subscriptions);
        };

        Dispatcher.prototype.push = function (event) {
            if (event.isEnd()) {
                this.ended = true;
            }
            return UpdateBarrier.inTransaction(event, this, this.pushIt, [event]);
        };

        Dispatcher.prototype.pushToSubscriptions = function (event) {
            var e, j, len1, reply, sub, tmp;
            try {
                tmp = this.subscriptions;
                for (j = 0, len1 = tmp.length; j < len1; j++) {
                    sub = tmp[j];
                    reply = sub.sink(event);
                    if (reply === Bacon.noMore || event.isEnd()) {
                        this.removeSub(sub);
                    }
                }
                return true;
            } catch (_error) {
                e = _error;
                this.pushing = false;
                this.queue = [];
                throw e;
            }
        };

        Dispatcher.prototype.pushIt = function (event) {
            if (!this.pushing) {
                if (event === this.prevError) {
                    return;
                }
                if (event.isError()) {
                    this.prevError = event;
                }
                this.pushing = true;
                this.pushToSubscriptions(event);
                this.pushing = false;
                while (this.queue.length) {
                    event = this.queue.shift();
                    this.push(event);
                }
                if (this.hasSubscribers()) {
                    return Bacon.more;
                } else {
                    this.unsubscribeFromSource();
                    return Bacon.noMore;
                }
            } else {
                this.queue.push(event);
                return Bacon.more;
            }
        };

        Dispatcher.prototype.handleEvent = function (event) {
            if (this._handleEvent) {
                return this._handleEvent(event);
            } else {
                return this.push(event);
            }
        };

        Dispatcher.prototype.unsubscribeFromSource = function () {
            if (this.unsubSrc) {
                this.unsubSrc();
            }
            return this.unsubSrc = void 0;
        };

        Dispatcher.prototype.subscribe = function (sink) {
            var subscription;
            if (this.ended) {
                sink(endEvent());
                return nop;
            } else {
                assertFunction(sink);
                subscription = {
                    sink: sink
                };
                this.subscriptions.push(subscription);
                if (this.subscriptions.length === 1) {
                    this.unsubSrc = this._subscribe(this.handleEvent);
                    assertFunction(this.unsubSrc);
                }
                return (function (_this) {
                    return function () {
                        _this.removeSub(subscription);
                        if (!_this.hasSubscribers()) {
                            return _this.unsubscribeFromSource();
                        }
                    };
                })(this);
            }
        };

        return Dispatcher;

    })();

    EventStream = (function (superClass) {
        extend(EventStream, superClass);

        function EventStream(desc, subscribe, handler) {
            if (_.isFunction(desc)) {
                handler = subscribe;
                subscribe = desc;
                desc = [];
            }
            EventStream.__super__.constructor.call(this, desc);
            assertFunction(subscribe);
            this.dispatcher = new Dispatcher(subscribe, handler);
            registerObs(this);
        }

        EventStream.prototype.toProperty = function (initValue_) {
            var disp, initValue;
            initValue = arguments.length === 0 ? None : toOption(function () {
                return initValue_;
            });
            disp = this.dispatcher;
            return new Property(describe(this, "toProperty", initValue_), function (sink) {
                var initSent, reply, sendInit, unsub;
                initSent = false;
                unsub = nop;
                reply = Bacon.more;
                sendInit = function () {
                    if (!initSent) {
                        return initValue.forEach(function (value) {
                            initSent = true;
                            reply = sink(new Initial(value));
                            if (reply === Bacon.noMore) {
                                unsub();
                                return unsub = nop;
                            }
                        });
                    }
                };
                unsub = disp.subscribe(function (event) {
                    if (event.hasValue()) {
                        if (initSent && event.isInitial()) {
                            return Bacon.more;
                        } else {
                            if (!event.isInitial()) {
                                sendInit();
                            }
                            initSent = true;
                            initValue = new Some(event);
                            return sink(event);
                        }
                    } else {
                        if (event.isEnd()) {
                            reply = sendInit();
                        }
                        if (reply !== Bacon.noMore) {
                            return sink(event);
                        }
                    }
                });
                sendInit();
                return unsub;
            });
        };

        EventStream.prototype.toEventStream = function () {
            return this;
        };

        EventStream.prototype.withHandler = function (handler) {
            return new EventStream(describe(this, "withHandler", handler), this.dispatcher.subscribe, handler);
        };

        return EventStream;

    })(Observable);

    Bacon.EventStream = EventStream;

    Bacon.never = function () {
        return new EventStream(describe(Bacon, "never"), function (sink) {
            sink(endEvent());
            return nop;
        });
    };

    Bacon.when = function () {
        var f, i, index, ix, j, k, len, len1, len2, needsBarrier, pat, patSources, pats, patterns, ref, resultStream, s, sources, triggerFound, usage;
        if (arguments.length === 0) {
            return Bacon.never();
        }
        len = arguments.length;
        usage = "when: expecting arguments in the form (Observable+,function)+";
        assert(usage, len % 2 === 0);
        sources = [];
        pats = [];
        i = 0;
        patterns = [];
        while (i < len) {
            patterns[i] = arguments[i];
            patterns[i + 1] = arguments[i + 1];
            patSources = _.toArray(arguments[i]);
            f = constantToFunction(arguments[i + 1]);
            pat = {
                f: f,
                ixs: []
            };
            triggerFound = false;
            for (j = 0, len1 = patSources.length; j < len1; j++) {
                s = patSources[j];
                index = _.indexOf(sources, s);
                if (!triggerFound) {
                    triggerFound = Source.isTrigger(s);
                }
                if (index < 0) {
                    sources.push(s);
                    index = sources.length - 1;
                }
                ref = pat.ixs;
                for (k = 0, len2 = ref.length; k < len2; k++) {
                    ix = ref[k];
                    if (ix.index === index) {
                        ix.count++;
                    }
                }
                pat.ixs.push({
                    index: index,
                    count: 1
                });
            }
            assert("At least one EventStream required", triggerFound || (!patSources.length));
            if (patSources.length > 0) {
                pats.push(pat);
            }
            i = i + 2;
        }
        if (!sources.length) {
            return Bacon.never();
        }
        sources = _.map(Source.fromObservable, sources);
        needsBarrier = (_.any(sources, function (s) {
            return s.flatten;
        })) && (containsDuplicateDeps(_.map((function (s) {
            return s.obs;
        }), sources)));
        return resultStream = new EventStream(describe.apply(null, [Bacon, "when"].concat(slice.call(patterns))), function (sink) {
            var cannotMatch, cannotSync, ends, match, nonFlattened, part, triggers;
            triggers = [];
            ends = false;
            match = function (p) {
                var l, len3, ref1;
                ref1 = p.ixs;
                for (l = 0, len3 = ref1.length; l < len3; l++) {
                    i = ref1[l];
                    if (!sources[i.index].hasAtLeast(i.count)) {
                        return false;
                    }
                }
                return true;
            };
            cannotSync = function (source) {
                return !source.sync || source.ended;
            };
            cannotMatch = function (p) {
                var l, len3, ref1;
                ref1 = p.ixs;
                for (l = 0, len3 = ref1.length; l < len3; l++) {
                    i = ref1[l];
                    if (!sources[i.index].mayHave(i.count)) {
                        return true;
                    }
                }
            };
            nonFlattened = function (trigger) {
                return !trigger.source.flatten;
            };
            part = function (source) {
                return function (unsubAll) {
                    var flush, flushLater, flushWhileTriggers;
                    flushLater = function () {
                        return UpdateBarrier.whenDoneWith(resultStream, flush);
                    };
                    flushWhileTriggers = function () {
                        var events, l, len3, p, reply, trigger;
                        if (triggers.length > 0) {
                            reply = Bacon.more;
                            trigger = triggers.pop();
                            for (l = 0, len3 = pats.length; l < len3; l++) {
                                p = pats[l];
                                if (match(p)) {
                                    events = (function () {
                                        var len4, m, ref1, results;
                                        ref1 = p.ixs;
                                        results = [];
                                        for (m = 0, len4 = ref1.length; m < len4; m++) {
                                            i = ref1[m];
                                            results.push(sources[i.index].consume());
                                        }
                                        return results;
                                    })();
                                    reply = sink(trigger.e.apply(function () {
                                        var event, values;
                                        values = (function () {
                                            var len4, m, results;
                                            results = [];
                                            for (m = 0, len4 = events.length; m < len4; m++) {
                                                event = events[m];
                                                results.push(event.value());
                                            }
                                            return results;
                                        })();
                                        return p.f.apply(p, values);
                                    }));
                                    if (triggers.length) {
                                        triggers = _.filter(nonFlattened, triggers);
                                    }
                                    if (reply === Bacon.noMore) {
                                        return reply;
                                    } else {
                                        return flushWhileTriggers();
                                    }
                                }
                            }
                        } else {
                            return Bacon.more;
                        }
                    };
                    flush = function () {
                        var reply;
                        reply = flushWhileTriggers();
                        if (ends) {
                            ends = false;
                            if (_.all(sources, cannotSync) || _.all(pats, cannotMatch)) {
                                reply = Bacon.noMore;
                                sink(endEvent());
                            }
                        }
                        if (reply === Bacon.noMore) {
                            unsubAll();
                        }
                        return reply;
                    };
                    return source.subscribe(function (e) {
                        var reply;
                        if (e.isEnd()) {
                            ends = true;
                            source.markEnded();
                            flushLater();
                        } else if (e.isError()) {
                            reply = sink(e);
                        } else {
                            source.push(e);
                            if (source.sync) {
                                triggers.push({
                                    source: source,
                                    e: e
                                });
                                if (needsBarrier || UpdateBarrier.hasWaiters()) {
                                    flushLater();
                                } else {
                                    flush();
                                }
                            }
                        }
                        if (reply === Bacon.noMore) {
                            unsubAll();
                        }
                        return reply || Bacon.more;
                    });
                };
            };
            return new Bacon.CompositeUnsubscribe((function () {
                var l, len3, results;
                results = [];
                for (l = 0, len3 = sources.length; l < len3; l++) {
                    s = sources[l];
                    results.push(part(s));
                }
                return results;
            })()).unsubscribe;
        });
    };

    containsDuplicateDeps = function (observables, state) {
        var checkObservable;
        if (state == null) {
            state = [];
        }
        checkObservable = function (obs) {
            var deps;
            if (_.contains(state, obs)) {
                return true;
            } else {
                deps = obs.internalDeps();
                if (deps.length) {
                    state.push(obs);
                    return _.any(deps, checkObservable);
                } else {
                    state.push(obs);
                    return false;
                }
            }
        };
        return _.any(observables, checkObservable);
    };

    constantToFunction = function (f) {
        if (_.isFunction(f)) {
            return f;
        } else {
            return _.always(f);
        }
    };

    Bacon.groupSimultaneous = function () {
        var s, sources, streams;
        streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        if (streams.length === 1 && isArray(streams[0])) {
            streams = streams[0];
        }
        sources = (function () {
            var j, len1, results;
            results = [];
            for (j = 0, len1 = streams.length; j < len1; j++) {
                s = streams[j];
                results.push(new BufferingSource(s));
            }
            return results;
        })();
        return withDescription.apply(null, [Bacon, "groupSimultaneous"].concat(slice.call(streams), [Bacon.when(sources, (function () {
            var xs;
            xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return xs;
        }))]));
    };

    PropertyDispatcher = (function (superClass) {
        extend(PropertyDispatcher, superClass);

        function PropertyDispatcher(property1, subscribe, handleEvent) {
            this.property = property1;
            this.subscribe = bind(this.subscribe, this);
            PropertyDispatcher.__super__.constructor.call(this, subscribe, handleEvent);
            this.current = None;
            this.currentValueRootId = void 0;
            this.propertyEnded = false;
        }

        PropertyDispatcher.prototype.push = function (event) {
            if (event.isEnd()) {
                this.propertyEnded = true;
            }
            if (event.hasValue()) {
                this.current = new Some(event);
                this.currentValueRootId = UpdateBarrier.currentEventId();
            }
            return PropertyDispatcher.__super__.push.call(this, event);
        };

        PropertyDispatcher.prototype.maybeSubSource = function (sink, reply) {
            if (reply === Bacon.noMore) {
                return nop;
            } else if (this.propertyEnded) {
                sink(endEvent());
                return nop;
            } else {
                return Dispatcher.prototype.subscribe.call(this, sink);
            }
        };

        PropertyDispatcher.prototype.subscribe = function (sink) {
            var dispatchingId, initSent, reply, valId;
            initSent = false;
            reply = Bacon.more;
            if (this.current.isDefined && (this.hasSubscribers() || this.propertyEnded)) {
                dispatchingId = UpdateBarrier.currentEventId();
                valId = this.currentValueRootId;
                if (!this.propertyEnded && valId && dispatchingId && dispatchingId !== valId) {
                    UpdateBarrier.whenDoneWith(this.property, (function (_this) {
                        return function () {
                            if (_this.currentValueRootId === valId) {
                                return sink(initialEvent(_this.current.get().value()));
                            }
                        };
                    })(this));
                    return this.maybeSubSource(sink, reply);
                } else {
                    UpdateBarrier.inTransaction(void 0, this, (function () {
                        return reply = sink(initialEvent(this.current.get().value()));
                    }), []);
                    return this.maybeSubSource(sink, reply);
                }
            } else {
                return this.maybeSubSource(sink, reply);
            }
        };

        return PropertyDispatcher;

    })(Dispatcher);

    Property = (function (superClass) {
        extend(Property, superClass);

        function Property(desc, subscribe, handler) {
            if (_.isFunction(desc)) {
                handler = subscribe;
                subscribe = desc;
                desc = [];
            }
            Property.__super__.constructor.call(this, desc);
            assertFunction(subscribe);
            this.dispatcher = new PropertyDispatcher(this, subscribe, handler);
            registerObs(this);
        }

        Property.prototype.changes = function () {
            return new EventStream(describe(this, "changes"), (function (_this) {
                return function (sink) {
                    return _this.dispatcher.subscribe(function (event) {
                        if (!event.isInitial()) {
                            return sink(event);
                        }
                    });
                };
            })(this));
        };

        Property.prototype.withHandler = function (handler) {
            return new Property(describe(this, "withHandler", handler), this.dispatcher.subscribe, handler);
        };

        Property.prototype.toProperty = function () {
            assertNoArguments(arguments);
            return this;
        };

        Property.prototype.toEventStream = function () {
            return new EventStream(describe(this, "toEventStream"), (function (_this) {
                return function (sink) {
                    return _this.dispatcher.subscribe(function (event) {
                        if (event.isInitial()) {
                            event = event.toNext();
                        }
                        return sink(event);
                    });
                };
            })(this));
        };

        return Property;

    })(Observable);

    Bacon.Property = Property;

    Bacon.constant = function (value) {
        return new Property(describe(Bacon, "constant", value), function (sink) {
            sink(initialEvent(value));
            sink(endEvent());
            return nop;
        });
    };

    Bacon.fromBinder = function (binder, eventTransformer) {
        if (eventTransformer == null) {
            eventTransformer = _.id;
        }
        return new EventStream(describe(Bacon, "fromBinder", binder, eventTransformer), function (sink) {
            var shouldUnbind, unbind, unbinder, unbound;
            unbound = false;
            shouldUnbind = false;
            unbind = function () {
                if (!unbound) {
                    if (typeof unbinder !== "undefined" && unbinder !== null) {
                        unbinder();
                        return unbound = true;
                    } else {
                        return shouldUnbind = true;
                    }
                }
            };
            unbinder = binder(function () {
                var args, event, j, len1, reply, value;
                args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                value = eventTransformer.apply(this, args);
                if (!(isArray(value) && _.last(value) instanceof Event)) {
                    value = [value];
                }
                reply = Bacon.more;
                for (j = 0, len1 = value.length; j < len1; j++) {
                    event = value[j];
                    reply = sink(event = toEvent(event));
                    if (reply === Bacon.noMore || event.isEnd()) {
                        unbind();
                        return reply;
                    }
                }
                return reply;
            });
            if (shouldUnbind) {
                unbind();
            }
            return unbind;
        });
    };

    eventMethods = [["addEventListener", "removeEventListener"], ["addListener", "removeListener"], ["on", "off"], ["bind", "unbind"]];

    findHandlerMethods = function (target) {
        var j, len1, methodPair, pair;
        for (j = 0, len1 = eventMethods.length; j < len1; j++) {
            pair = eventMethods[j];
            methodPair = [target[pair[0]], target[pair[1]]];
            if (methodPair[0] && methodPair[1]) {
                return methodPair;
            }
        }
        throw new Error("No suitable event methods in " + target);
    };

    Bacon.fromEventTarget = function (target, eventName, eventTransformer) {
        var ref, sub, unsub;
        ref = findHandlerMethods(target), sub = ref[0], unsub = ref[1];
        return withDescription(Bacon, "fromEvent", target, eventName, Bacon.fromBinder(function (handler) {
            sub.call(target, eventName, handler);
            return function () {
                return unsub.call(target, eventName, handler);
            };
        }, eventTransformer));
    };

    Bacon.fromEvent = Bacon.fromEventTarget;

    Bacon.Observable.prototype.map = function () {
        var args, p;
        p = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        return convertArgsToFunction(this, p, args, function (f) {
            return withDescription(this, "map", f, this.withHandler(function (event) {
                return this.push(event.fmap(f));
            }));
        });
    };

    Bacon.combineAsArray = function () {
        var index, j, len1, s, sources, stream, streams;
        streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        if (streams.length === 1 && isArray(streams[0])) {
            streams = streams[0];
        }
        for (index = j = 0, len1 = streams.length; j < len1; index = ++j) {
            stream = streams[index];
            if (!(isObservable(stream))) {
                streams[index] = Bacon.constant(stream);
            }
        }
        if (streams.length) {
            sources = (function () {
                var k, len2, results;
                results = [];
                for (k = 0, len2 = streams.length; k < len2; k++) {
                    s = streams[k];
                    results.push(new Source(s, true));
                }
                return results;
            })();
            return withDescription.apply(null, [Bacon, "combineAsArray"].concat(slice.call(streams), [Bacon.when(sources, (function () {
                var xs;
                xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                return xs;
            })).toProperty()]));
        } else {
            return Bacon.constant([]);
        }
    };

    Bacon.onValues = function () {
        var f, j, streams;
        streams = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), f = arguments[j++];
        return Bacon.combineAsArray(streams).onValues(f);
    };

    Bacon.combineWith = function () {
        var f, streams;
        f = arguments[0], streams = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        return withDescription.apply(null, [Bacon, "combineWith", f].concat(slice.call(streams), [Bacon.combineAsArray(streams).map(function (values) {
            return f.apply(null, values);
        })]));
    };

    Bacon.combineTemplate = function (template) {
        var applyStreamValue, combinator, compile, compileTemplate, constantValue, current, funcs, mkContext, setValue, streams;
        funcs = [];
        streams = [];
        current = function (ctxStack) {
            return ctxStack[ctxStack.length - 1];
        };
        setValue = function (ctxStack, key, value) {
            return current(ctxStack)[key] = value;
        };
        applyStreamValue = function (key, index) {
            return function (ctxStack, values) {
                return setValue(ctxStack, key, values[index]);
            };
        };
        constantValue = function (key, value) {
            return function (ctxStack) {
                return setValue(ctxStack, key, value);
            };
        };
        mkContext = function (template) {
            if (isArray(template)) {
                return [];
            } else {
                return {};
            }
        };
        compile = function (key, value) {
            var popContext, pushContext;
            if (isObservable(value)) {
                streams.push(value);
                return funcs.push(applyStreamValue(key, streams.length - 1));
            } else if (value === Object(value) && typeof value !== "function" && !(value instanceof RegExp) && !(value instanceof Date)) {
                pushContext = function (key) {
                    return function (ctxStack) {
                        var newContext;
                        newContext = mkContext(value);
                        setValue(ctxStack, key, newContext);
                        return ctxStack.push(newContext);
                    };
                };
                popContext = function (ctxStack) {
                    return ctxStack.pop();
                };
                funcs.push(pushContext(key));
                compileTemplate(value);
                return funcs.push(popContext);
            } else {
                return funcs.push(constantValue(key, value));
            }
        };
        compileTemplate = function (template) {
            return _.each(template, compile);
        };
        compileTemplate(template);
        combinator = function (values) {
            var ctxStack, f, j, len1, rootContext;
            rootContext = mkContext(template);
            ctxStack = [rootContext];
            for (j = 0, len1 = funcs.length; j < len1; j++) {
                f = funcs[j];
                f(ctxStack, values);
            }
            return rootContext;
        };
        return withDescription(Bacon, "combineTemplate", template, Bacon.combineAsArray(streams).map(combinator));
    };

    Bacon.Observable.prototype.combine = function (other, f) {
        var combinator;
        combinator = toCombinator(f);
        return withDescription(this, "combine", other, f, Bacon.combineAsArray(this, other).map(function (values) {
            return combinator(values[0], values[1]);
        }));
    };

    Bacon.Observable.prototype.decode = function (cases) {
        return withDescription(this, "decode", cases, this.combine(Bacon.combineTemplate(cases), function (key, values) {
            return values[key];
        }));
    };

    Bacon.Observable.prototype.withStateMachine = function (initState, f) {
        var state;
        state = initState;
        return withDescription(this, "withStateMachine", initState, f, this.withHandler(function (event) {
            var fromF, j, len1, newState, output, outputs, reply;
            fromF = f(state, event);
            newState = fromF[0], outputs = fromF[1];
            state = newState;
            reply = Bacon.more;
            for (j = 0, len1 = outputs.length; j < len1; j++) {
                output = outputs[j];
                reply = this.push(output);
                if (reply === Bacon.noMore) {
                    return reply;
                }
            }
            return reply;
        }));
    };

    Bacon.Observable.prototype.skipDuplicates = function (isEqual) {
        if (isEqual == null) {
            isEqual = function (a, b) {
                return a === b;
            };
        }
        return withDescription(this, "skipDuplicates", this.withStateMachine(None, function (prev, event) {
            if (!event.hasValue()) {
                return [prev, [event]];
            } else if (event.isInitial() || prev === None || !isEqual(prev.get(), event.value())) {
                return [new Some(event.value()), [event]];
            } else {
                return [prev, []];
            }
        }));
    };

    Bacon.Observable.prototype.awaiting = function (other) {
        return withDescription(this, "awaiting", other, Bacon.groupSimultaneous(this, other).map(function (arg) {
            var myValues, otherValues;
            myValues = arg[0], otherValues = arg[1];
            return otherValues.length === 0;
        }).toProperty(false).skipDuplicates());
    };

    Bacon.Observable.prototype.not = function () {
        return withDescription(this, "not", this.map(function (x) {
            return !x;
        }));
    };

    Bacon.Property.prototype.and = function (other) {
        return withDescription(this, "and", other, this.combine(other, function (x, y) {
            return x && y;
        }));
    };

    Bacon.Property.prototype.or = function (other) {
        return withDescription(this, "or", other, this.combine(other, function (x, y) {
            return x || y;
        }));
    };

    Bacon.scheduler = {
        setTimeout: function (f, d) {
            return setTimeout(f, d);
        },
        setInterval: function (f, i) {
            return setInterval(f, i);
        },
        clearInterval: function (id) {
            return clearInterval(id);
        },
        clearTimeout: function (id) {
            return clearTimeout(id);
        },
        now: function () {
            return new Date().getTime();
        }
    };

    Bacon.EventStream.prototype.bufferWithTime = function (delay) {
        return withDescription(this, "bufferWithTime", delay, this.bufferWithTimeOrCount(delay, Number.MAX_VALUE));
    };

    Bacon.EventStream.prototype.bufferWithCount = function (count) {
        return withDescription(this, "bufferWithCount", count, this.bufferWithTimeOrCount(void 0, count));
    };

    Bacon.EventStream.prototype.bufferWithTimeOrCount = function (delay, count) {
        var flushOrSchedule;
        flushOrSchedule = function (buffer) {
            if (buffer.values.length === count) {
                return buffer.flush();
            } else if (delay !== void 0) {
                return buffer.schedule();
            }
        };
        return withDescription(this, "bufferWithTimeOrCount", delay, count, this.buffer(delay, flushOrSchedule, flushOrSchedule));
    };

    Bacon.EventStream.prototype.buffer = function (delay, onInput, onFlush) {
        var buffer, delayMs, reply;
        if (onInput == null) {
            onInput = nop;
        }
        if (onFlush == null) {
            onFlush = nop;
        }
        buffer = {
            scheduled: null,
            end: void 0,
            values: [],
            flush: function () {
                var reply;
                if (this.scheduled) {
                    Bacon.scheduler.clearTimeout(this.scheduled);
                    this.scheduled = null;
                }
                if (this.values.length > 0) {
                    reply = this.push(nextEvent(this.values));
                    this.values = [];
                    if (this.end != null) {
                        return this.push(this.end);
                    } else if (reply !== Bacon.noMore) {
                        return onFlush(this);
                    }
                } else {
                    if (this.end != null) {
                        return this.push(this.end);
                    }
                }
            },
            schedule: function () {
                if (!this.scheduled) {
                    return this.scheduled = delay((function (_this) {
                        return function () {
                            return _this.flush();
                        };
                    })(this));
                }
            }
        };
        reply = Bacon.more;
        if (!_.isFunction(delay)) {
            delayMs = delay;
            delay = function (f) {
                return Bacon.scheduler.setTimeout(f, delayMs);
            };
        }
        return withDescription(this, "buffer", this.withHandler(function (event) {
            buffer.push = (function (_this) {
                return function (event) {
                    return _this.push(event);
                };
            })(this);
            if (event.isError()) {
                reply = this.push(event);
            } else if (event.isEnd()) {
                buffer.end = event;
                if (!buffer.scheduled) {
                    buffer.flush();
                }
            } else {
                buffer.values.push(event.value());
                onInput(buffer);
            }
            return reply;
        }));
    };

    Bacon.Observable.prototype.filter = function () {
        var args, f;
        f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        return convertArgsToFunction(this, f, args, function (f) {
            return withDescription(this, "filter", f, this.withHandler(function (event) {
                if (event.filter(f)) {
                    return this.push(event);
                } else {
                    return Bacon.more;
                }
            }));
        });
    };

    Bacon.once = function (value) {
        return new EventStream(describe(Bacon, "once", value), function (sink) {
            sink(toEvent(value));
            sink(endEvent());
            return nop;
        });
    };

    Bacon.EventStream.prototype.concat = function (right) {
        var left;
        left = this;
        return new EventStream(describe(left, "concat", right), function (sink) {
            var unsubLeft, unsubRight;
            unsubRight = nop;
            unsubLeft = left.dispatcher.subscribe(function (e) {
                if (e.isEnd()) {
                    return unsubRight = right.dispatcher.subscribe(sink);
                } else {
                    return sink(e);
                }
            });
            return function () {
                unsubLeft();
                return unsubRight();
            };
        });
    };

    Bacon.Observable.prototype.flatMap = function () {
        return flatMap_(this, makeSpawner(arguments));
    };

    Bacon.Observable.prototype.flatMapFirst = function () {
        return flatMap_(this, makeSpawner(arguments), true);
    };

    flatMap_ = function (root, f, firstOnly, limit) {
        var childDeps, result, rootDep;
        rootDep = [root];
        childDeps = [];
        result = new EventStream(describe(root, "flatMap" + (firstOnly ? "First" : ""), f), function (sink) {
            var checkEnd, checkQueue, composite, queue, spawn;
            composite = new CompositeUnsubscribe();
            queue = [];
            spawn = function (event) {
                var child;
                child = makeObservable(f(event.value()));
                childDeps.push(child);
                return composite.add(function (unsubAll, unsubMe) {
                    return child.dispatcher.subscribe(function (event) {
                        var reply;
                        if (event.isEnd()) {
                            _.remove(child, childDeps);
                            checkQueue();
                            checkEnd(unsubMe);
                            return Bacon.noMore;
                        } else {
                            if (event instanceof Initial) {
                                event = event.toNext();
                            }
                            reply = sink(event);
                            if (reply === Bacon.noMore) {
                                unsubAll();
                            }
                            return reply;
                        }
                    });
                });
            };
            checkQueue = function () {
                var event;
                event = queue.shift();
                if (event) {
                    return spawn(event);
                }
            };
            checkEnd = function (unsub) {
                unsub();
                if (composite.empty()) {
                    return sink(endEvent());
                }
            };
            composite.add(function (__, unsubRoot) {
                return root.dispatcher.subscribe(function (event) {
                    if (event.isEnd()) {
                        return checkEnd(unsubRoot);
                    } else if (event.isError()) {
                        return sink(event);
                    } else if (firstOnly && composite.count() > 1) {
                        return Bacon.more;
                    } else {
                        if (composite.unsubscribed) {
                            return Bacon.noMore;
                        }
                        if (limit && composite.count() > limit) {
                            return queue.push(event);
                        } else {
                            return spawn(event);
                        }
                    }
                });
            });
            return composite.unsubscribe;
        });
        result.internalDeps = function () {
            if (childDeps.length) {
                return rootDep.concat(childDeps);
            } else {
                return rootDep;
            }
        };
        return result;
    };

    makeSpawner = function (args) {
        if (args.length === 1 && isObservable(args[0])) {
            return _.always(args[0]);
        } else {
            return makeFunctionArgs(args);
        }
    };

    makeObservable = function (x) {
        if (isObservable(x)) {
            return x;
        } else {
            return Bacon.once(x);
        }
    };

    Bacon.Observable.prototype.flatMapWithConcurrencyLimit = function () {
        var args, limit;
        limit = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        return withDescription.apply(null, [this, "flatMapWithConcurrencyLimit", limit].concat(slice.call(args), [flatMap_(this, makeSpawner(args), false, limit)]));
    };

    Bacon.Observable.prototype.flatMapConcat = function () {
        return withDescription.apply(null, [this, "flatMapConcat"].concat(slice.call(arguments), [this.flatMapWithConcurrencyLimit.apply(this, [1].concat(slice.call(arguments)))]));
    };

    addPropertyInitValueToStream = function (property, stream) {
        var justInitValue;
        justInitValue = new EventStream(describe(property, "justInitValue"), function (sink) {
            var unsub, value;
            value = void 0;
            unsub = property.dispatcher.subscribe(function (event) {
                if (!event.isEnd()) {
                    value = event;
                }
                return Bacon.noMore;
            });
            UpdateBarrier.whenDoneWith(justInitValue, function () {
                if (value != null) {
                    sink(value);
                }
                return sink(endEvent());
            });
            return unsub;
        });
        return justInitValue.concat(stream).toProperty();
    };

    Bacon.Observable.prototype.mapEnd = function () {
        var f;
        f = makeFunctionArgs(arguments);
        return withDescription(this, "mapEnd", f, this.withHandler(function (event) {
            if (event.isEnd()) {
                this.push(nextEvent(f(event)));
                this.push(endEvent());
                return Bacon.noMore;
            } else {
                return this.push(event);
            }
        }));
    };

    Bacon.Observable.prototype.skipErrors = function () {
        return withDescription(this, "skipErrors", this.withHandler(function (event) {
            if (event.isError()) {
                return Bacon.more;
            } else {
                return this.push(event);
            }
        }));
    };

    Bacon.EventStream.prototype.takeUntil = function (stopper) {
        var endMarker;
        endMarker = {};
        return withDescription(this, "takeUntil", stopper, Bacon.groupSimultaneous(this.mapEnd(endMarker), stopper.skipErrors()).withHandler(function (event) {
            var data, j, len1, ref, reply, value;
            if (!event.hasValue()) {
                return this.push(event);
            } else {
                ref = event.value(), data = ref[0], stopper = ref[1];
                if (stopper.length) {
                    return this.push(endEvent());
                } else {
                    reply = Bacon.more;
                    for (j = 0, len1 = data.length; j < len1; j++) {
                        value = data[j];
                        if (value === endMarker) {
                            reply = this.push(endEvent());
                        } else {
                            reply = this.push(nextEvent(value));
                        }
                    }
                    return reply;
                }
            }
        }));
    };

    Bacon.Property.prototype.takeUntil = function (stopper) {
        var changes;
        changes = this.changes().takeUntil(stopper);
        return withDescription(this, "takeUntil", stopper, addPropertyInitValueToStream(this, changes));
    };

    Bacon.Observable.prototype.flatMapLatest = function () {
        var f, stream;
        f = makeSpawner(arguments);
        stream = this.toEventStream();
        return withDescription(this, "flatMapLatest", f, stream.flatMap(function (value) {
            return makeObservable(f(value)).takeUntil(stream);
        }));
    };

    Bacon.fromPoll = function (delay, poll) {
        return withDescription(Bacon, "fromPoll", delay, poll, Bacon.fromBinder((function (handler) {
            var id;
            id = Bacon.scheduler.setInterval(handler, delay);
            return function () {
                return Bacon.scheduler.clearInterval(id);
            };
        }), poll));
    };

    Bacon.later = function (delay, value) {
        return withDescription(Bacon, "later", delay, value, Bacon.fromBinder(function (sink) {
            var id, sender;
            sender = function () {
                return sink([value, endEvent()]);
            };
            id = Bacon.scheduler.setTimeout(sender, delay);
            return function () {
                return Bacon.scheduler.clearTimeout(id);
            };
        }));
    };

    Bacon.sequentially = function (delay, values) {
        var index;
        index = 0;
        return withDescription(Bacon, "sequentially", delay, values, Bacon.fromPoll(delay, function () {
            var value;
            value = values[index++];
            if (index < values.length) {
                return value;
            } else if (index === values.length) {
                return [value, endEvent()];
            } else {
                return endEvent();
            }
        }));
    };

    Bacon.repeatedly = function (delay, values) {
        var index;
        index = 0;
        return withDescription(Bacon, "repeatedly", delay, values, Bacon.fromPoll(delay, function () {
            return values[index++ % values.length];
        }));
    };

    Bacon.interval = function (delay, value) {
        if (value == null) {
            value = {};
        }
        return withDescription(Bacon, "interval", delay, value, Bacon.fromPoll(delay, function () {
            return nextEvent(value);
        }));
    };

    Bacon.EventStream.prototype.delay = function (delay) {
        return withDescription(this, "delay", delay, this.flatMap(function (value) {
            return Bacon.later(delay, value);
        }));
    };

    Bacon.Property.prototype.delay = function (delay) {
        return this.delayChanges("delay", delay, function (changes) {
            return changes.delay(delay);
        });
    };

    Bacon.Property.prototype.delayChanges = function () {
        var desc, f, j;
        desc = 2 <= arguments.length ? slice.call(arguments, 0, j = arguments.length - 1) : (j = 0, []), f = arguments[j++];
        return withDescription.apply(null, [this].concat(slice.call(desc), [addPropertyInitValueToStream(this, f(this.changes()))]));
    };

    Bacon.Observable.prototype.bufferingThrottle = function (minimumInterval) {
        return withDescription(this, "bufferingThrottle", minimumInterval, this.flatMapConcat(function (x) {
            return Bacon.once(x).concat(Bacon.later(minimumInterval).filter(false));
        }));
    };

    Bacon.Property.prototype.bufferingThrottle = function () {
        return Bacon.Observable.prototype.bufferingThrottle.apply(this, arguments).toProperty();
    };

    Bus = (function (superClass) {
        extend(Bus, superClass);

        function Bus() {
            this.guardedSink = bind(this.guardedSink, this);
            this.subscribeAll = bind(this.subscribeAll, this);
            this.unsubAll = bind(this.unsubAll, this);
            this.sink = void 0;
            this.subscriptions = [];
            this.ended = false;
            Bus.__super__.constructor.call(this, describe(Bacon, "Bus"), this.subscribeAll);
        }

        Bus.prototype.unsubAll = function () {
            var j, len1, ref, sub;
            ref = this.subscriptions;
            for (j = 0, len1 = ref.length; j < len1; j++) {
                sub = ref[j];
                if (typeof sub.unsub === "function") {
                    sub.unsub();
                }
            }
            return void 0;
        };

        Bus.prototype.subscribeAll = function (newSink) {
            var j, len1, ref, subscription;
            this.sink = newSink;
            ref = cloneArray(this.subscriptions);
            for (j = 0, len1 = ref.length; j < len1; j++) {
                subscription = ref[j];
                this.subscribeInput(subscription);
            }
            return this.unsubAll;
        };

        Bus.prototype.guardedSink = function (input) {
            return (function (_this) {
                return function (event) {
                    if (event.isEnd()) {
                        _this.unsubscribeInput(input);
                        return Bacon.noMore;
                    } else {
                        return _this.sink(event);
                    }
                };
            })(this);
        };

        Bus.prototype.subscribeInput = function (subscription) {
            return subscription.unsub = subscription.input.dispatcher.subscribe(this.guardedSink(subscription.input));
        };

        Bus.prototype.unsubscribeInput = function (input) {
            var i, j, len1, ref, sub;
            ref = this.subscriptions;
            for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
                sub = ref[i];
                if (sub.input === input) {
                    if (typeof sub.unsub === "function") {
                        sub.unsub();
                    }
                    this.subscriptions.splice(i, 1);
                    return;
                }
            }
        };

        Bus.prototype.plug = function (input) {
            var sub;
            assertObservable(input);
            if (this.ended) {
                return;
            }
            sub = {
                input: input
            };
            this.subscriptions.push(sub);
            if ((this.sink != null)) {
                this.subscribeInput(sub);
            }
            return (function (_this) {
                return function () {
                    return _this.unsubscribeInput(input);
                };
            })(this);
        };

        Bus.prototype.end = function () {
            this.ended = true;
            this.unsubAll();
            return typeof this.sink === "function" ? this.sink(endEvent()) : void 0;
        };

        Bus.prototype.push = function (value) {
            return typeof this.sink === "function" ? this.sink(nextEvent(value)) : void 0;
        };

        Bus.prototype.error = function (error) {
            return typeof this.sink === "function" ? this.sink(new Error(error)) : void 0;
        };

        return Bus;

    })(EventStream);

    Bacon.Bus = Bus;

    liftCallback = function (desc, wrapped) {
        return withMethodCallSupport(function () {
            var args, f, stream;
            f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
            stream = partiallyApplied(wrapped, [
              function (values, callback) {
                  return f.apply(null, slice.call(values).concat([callback]));
              }
            ]);
            return withDescription.apply(null, [Bacon, desc, f].concat(slice.call(args), [Bacon.combineAsArray(args).flatMap(stream)]));
        });
    };

    Bacon.fromCallback = liftCallback("fromCallback", function () {
        var args, f;
        f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        return Bacon.fromBinder(function (handler) {
            makeFunction(f, args)(handler);
            return nop;
        }, (function (value) {
            return [value, endEvent()];
        }));
    });

    Bacon.fromNodeCallback = liftCallback("fromNodeCallback", function () {
        var args, f;
        f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        return Bacon.fromBinder(function (handler) {
            makeFunction(f, args)(handler);
            return nop;
        }, function (error, value) {
            if (error) {
                return [new Error(error), endEvent()];
            }
            return [value, endEvent()];
        });
    });

    Bacon.EventStream.prototype.debounce = function (delay) {
        return withDescription(this, "debounce", delay, this.flatMapLatest(function (value) {
            return Bacon.later(delay, value);
        }));
    };

    Bacon.Property.prototype.debounce = function (delay) {
        return this.delayChanges("debounce", delay, function (changes) {
            return changes.debounce(delay);
        });
    };

    Bacon.EventStream.prototype.debounceImmediate = function (delay) {
        return withDescription(this, "debounceImmediate", delay, this.flatMapFirst(function (value) {
            return Bacon.once(value).concat(Bacon.later(delay).filter(false));
        }));
    };

    Bacon.Observable.prototype.scan = function (seed, f) {
        var acc, resultProperty, subscribe;
        f = toCombinator(f);
        acc = toOption(seed);
        subscribe = (function (_this) {
            return function (sink) {
                var initSent, reply, sendInit, unsub;
                initSent = false;
                unsub = nop;
                reply = Bacon.more;
                sendInit = function () {
                    if (!initSent) {
                        return acc.forEach(function (value) {
                            initSent = true;
                            reply = sink(new Initial(function () {
                                return value;
                            }));
                            if (reply === Bacon.noMore) {
                                unsub();
                                return unsub = nop;
                            }
                        });
                    }
                };
                unsub = _this.dispatcher.subscribe(function (event) {
                    var next, prev;
                    if (event.hasValue()) {
                        if (initSent && event.isInitial()) {
                            return Bacon.more;
                        } else {
                            if (!event.isInitial()) {
                                sendInit();
                            }
                            initSent = true;
                            prev = acc.getOrElse(void 0);
                            next = f(prev, event.value());
                            acc = new Some(next);
                            return sink(event.apply(function () {
                                return next;
                            }));
                        }
                    } else {
                        if (event.isEnd()) {
                            reply = sendInit();
                        }
                        if (reply !== Bacon.noMore) {
                            return sink(event);
                        }
                    }
                });
                UpdateBarrier.whenDoneWith(resultProperty, sendInit);
                return unsub;
            };
        })(this);
        return resultProperty = new Property(describe(this, "scan", seed, f), subscribe);
    };

    Bacon.Observable.prototype.diff = function (start, f) {
        f = toCombinator(f);
        return withDescription(this, "diff", start, f, this.scan([start], function (prevTuple, next) {
            return [next, f(prevTuple[0], next)];
        }).filter(function (tuple) {
            return tuple.length === 2;
        }).map(function (tuple) {
            return tuple[1];
        }));
    };

    Bacon.Observable.prototype.doAction = function () {
        var f;
        f = makeFunctionArgs(arguments);
        return withDescription(this, "doAction", f, this.withHandler(function (event) {
            if (event.hasValue()) {
                f(event.value());
            }
            return this.push(event);
        }));
    };

    Bacon.Observable.prototype.endOnError = function () {
        var args, f;
        f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (f == null) {
            f = true;
        }
        return convertArgsToFunction(this, f, args, function (f) {
            return withDescription(this, "endOnError", this.withHandler(function (event) {
                if (event.isError() && f(event.error)) {
                    this.push(event);
                    return this.push(endEvent());
                } else {
                    return this.push(event);
                }
            }));
        });
    };

    Observable.prototype.errors = function () {
        return withDescription(this, "errors", this.filter(function () {
            return false;
        }));
    };

    valueAndEnd = (function (value) {
        return [value, endEvent()];
    });

    Bacon.fromPromise = function (promise, abort) {
        return withDescription(Bacon, "fromPromise", promise, Bacon.fromBinder(function (handler) {
            var ref;
            if ((ref = promise.then(handler, function (e) {
              return handler(new Error(e));
            })) != null) {
                if (typeof ref.done === "function") {
                    ref.done();
                }
            }
            return function () {
                if (abort) {
                    return typeof promise.abort === "function" ? promise.abort() : void 0;
                }
            };
        }, valueAndEnd));
    };

    Bacon.Observable.prototype.mapError = function () {
        var f;
        f = makeFunctionArgs(arguments);
        return withDescription(this, "mapError", f, this.withHandler(function (event) {
            if (event.isError()) {
                return this.push(nextEvent(f(event.error)));
            } else {
                return this.push(event);
            }
        }));
    };

    Bacon.Observable.prototype.flatMapError = function (fn) {
        return withDescription(this, "flatMapError", fn, this.mapError(function (err) {
            return new Error(err);
        }).flatMap(function (x) {
            if (x instanceof Error) {
                return fn(x.error);
            } else {
                return Bacon.once(x);
            }
        }));
    };

    Bacon.EventStream.prototype.sampledBy = function (sampler, combinator) {
        return withDescription(this, "sampledBy", sampler, combinator, this.toProperty().sampledBy(sampler, combinator));
    };

    Bacon.Property.prototype.sampledBy = function (sampler, combinator) {
        var lazy, result, samplerSource, stream, thisSource;
        if (combinator != null) {
            combinator = toCombinator(combinator);
        } else {
            lazy = true;
            combinator = function (f) {
                return f.value();
            };
        }
        thisSource = new Source(this, false, lazy);
        samplerSource = new Source(sampler, true, lazy);
        stream = Bacon.when([thisSource, samplerSource], combinator);
        result = sampler instanceof Property ? stream.toProperty() : stream;
        return withDescription(this, "sampledBy", sampler, combinator, result);
    };

    Bacon.Property.prototype.sample = function (interval) {
        return withDescription(this, "sample", interval, this.sampledBy(Bacon.interval(interval, {})));
    };

    Bacon.Observable.prototype.map = function () {
        var args, p;
        p = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (p instanceof Property) {
            return p.sampledBy(this, former);
        } else {
            return convertArgsToFunction(this, p, args, function (f) {
                return withDescription(this, "map", f, this.withHandler(function (event) {
                    return this.push(event.fmap(f));
                }));
            });
        }
    };

    Bacon.Observable.prototype.fold = function (seed, f) {
        return withDescription(this, "fold", seed, f, this.scan(seed, f).sampledBy(this.filter(false).mapEnd().toProperty()));
    };

    Observable.prototype.reduce = Observable.prototype.fold;

    Bacon.EventStream.prototype.merge = function (right) {
        var left;
        assertEventStream(right);
        left = this;
        return withDescription(left, "merge", right, Bacon.mergeAll(this, right));
    };

    Bacon.mergeAll = function () {
        var streams;
        streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        if (isArray(streams[0])) {
            streams = streams[0];
        }
        if (streams.length) {
            return new EventStream(describe.apply(null, [Bacon, "mergeAll"].concat(slice.call(streams))), function (sink) {
                var ends, sinks, smartSink;
                ends = 0;
                smartSink = function (obs) {
                    return function (unsubBoth) {
                        return obs.dispatcher.subscribe(function (event) {
                            var reply;
                            if (event.isEnd()) {
                                ends++;
                                if (ends === streams.length) {
                                    return sink(endEvent());
                                } else {
                                    return Bacon.more;
                                }
                            } else {
                                reply = sink(event);
                                if (reply === Bacon.noMore) {
                                    unsubBoth();
                                }
                                return reply;
                            }
                        });
                    };
                };
                sinks = _.map(smartSink, streams);
                return new Bacon.CompositeUnsubscribe(sinks).unsubscribe;
            });
        } else {
            return Bacon.never();
        }
    };

    Bacon.Observable.prototype.take = function (count) {
        if (count <= 0) {
            return Bacon.never();
        }
        return withDescription(this, "take", count, this.withHandler(function (event) {
            if (!event.hasValue()) {
                return this.push(event);
            } else {
                count--;
                if (count > 0) {
                    return this.push(event);
                } else {
                    if (count === 0) {
                        this.push(event);
                    }
                    this.push(endEvent());
                    return Bacon.noMore;
                }
            }
        }));
    };

    Bacon.fromArray = function (values) {
        var i;
        assertArray(values);
        if (!values.length) {
            return withDescription(Bacon, "fromArray", values, Bacon.never());
        } else {
            i = 0;
            return new EventStream(describe(Bacon, "fromArray", values), function (sink) {
                var push, reply, unsubd;
                unsubd = false;
                reply = Bacon.more;
                push = function () {
                    var value;
                    if ((reply !== Bacon.noMore) && !unsubd) {
                        value = values[i++];
                        reply = sink(toEvent(value));
                        if (reply !== Bacon.noMore) {
                            if (i === values.length) {
                                return sink(endEvent());
                            } else {
                                return UpdateBarrier.afterTransaction(push);
                            }
                        }
                    }
                };
                push();
                return function () {
                    return unsubd = true;
                };
            });
        }
    };

    Bacon.EventStream.prototype.holdWhen = function (valve) {
        var putToHold, releaseHold, valve_;
        valve_ = valve.startWith(false);
        releaseHold = valve_.filter(function (x) {
            return !x;
        });
        putToHold = valve_.filter(_.id);
        return withDescription(this, "holdWhen", valve, this.filter(false).merge(valve_.flatMapConcat((function (_this) {
            return function (shouldHold) {
                if (!shouldHold) {
                    return _this.takeUntil(putToHold);
                } else {
                    return _this.scan([], (function (xs, x) {
                        return xs.concat([x]);
                    })).sampledBy(releaseHold).take(1).flatMap(Bacon.fromArray);
                }
            };
        })(this))));
    };

    Bacon.$ = {};

    Bacon.$.asEventStream = function (eventName, selector, eventTransformer) {
        var ref;
        if (_.isFunction(selector)) {
            ref = [selector, void 0], eventTransformer = ref[0], selector = ref[1];
        }
        return withDescription(this.selector || this, "asEventStream", eventName, Bacon.fromBinder((function (_this) {
            return function (handler) {
                _this.on(eventName, selector, handler);
                return function () {
                    return _this.off(eventName, selector, handler);
                };
            };
        })(this), eventTransformer));
    };

    if ((ref = typeof jQuery !== "undefined" && jQuery !== null ? jQuery : typeof Zepto !== "undefined" && Zepto !== null ? Zepto : void 0) != null) {
        ref.fn.asEventStream = Bacon.$.asEventStream;
    }

    Bacon.Observable.prototype.log = function () {
        var args;
        args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        this.subscribe(function (event) {
            return typeof console !== "undefined" && console !== null ? typeof console.log === "function" ? console.log.apply(console, slice.call(args).concat([event.log()])) : void 0 : void 0;
        });
        return this;
    };

    Bacon.repeat = function (generator) {
        var index;
        index = 0;
        return Bacon.fromBinder(function (sink) {
            var flag, handleEvent, reply, subscribeNext, unsub;
            flag = false;
            reply = Bacon.more;
            unsub = function () { };
            handleEvent = function (event) {
                if (event.isEnd()) {
                    if (!flag) {
                        return flag = true;
                    } else {
                        return subscribeNext();
                    }
                } else {
                    return reply = sink(event);
                }
            };
            subscribeNext = function () {
                var next;
                flag = true;
                while (flag && reply !== Bacon.noMore) {
                    next = generator(index++);
                    flag = false;
                    if (next) {
                        unsub = next.subscribeInternal(handleEvent);
                    } else {
                        sink(endEvent());
                    }
                }
                return flag = true;
            };
            subscribeNext();
            return function () {
                return unsub();
            };
        });
    };

    Bacon.retry = function (options) {
        var delay, error, finished, isRetryable, maxRetries, retries, source;
        if (!_.isFunction(options.source)) {
            throw new Exception("'source' option has to be a function");
        }
        source = options.source;
        retries = options.retries || 0;
        maxRetries = options.maxRetries || retries;
        delay = options.delay || function () {
            return 0;
        };
        isRetryable = options.isRetryable || function () {
            return true;
        };
        finished = false;
        error = null;
        return withDescription(Bacon, "retry", options, Bacon.repeat(function () {
            var context, pause, valueStream;
            if (finished) {
                return null;
            } else {
                valueStream = function () {
                    return source().endOnError().withHandler(function (event) {
                        if (event.isError()) {
                            error = event;
                            if (isRetryable(error.error) && retries > 0) {

                            } else {
                                finished = true;
                                return this.push(event);
                            }
                        } else {
                            if (event.hasValue()) {
                                error = null;
                                finished = true;
                            }
                            return this.push(event);
                        }
                    });
                };
                if (error) {
                    context = {
                        error: error.error,
                        retriesDone: maxRetries - retries
                    };
                    pause = Bacon.later(delay(context)).filter(false);
                    retries = retries - 1;
                    return pause.concat(Bacon.once().flatMap(valueStream));
                } else {
                    return valueStream();
                }
            }
        }));
    };

    Bacon.Observable.prototype.skip = function (count) {
        return withDescription(this, "skip", count, this.withHandler(function (event) {
            if (!event.hasValue()) {
                return this.push(event);
            } else if (count > 0) {
                count--;
                return Bacon.more;
            } else {
                return this.push(event);
            }
        }));
    };

    Bacon.EventStream.prototype.skipUntil = function (starter) {
        var started;
        started = starter.take(1).map(true).toProperty(false);
        return withDescription(this, "skipUntil", starter, this.filter(started));
    };

    Bacon.EventStream.prototype.skipWhile = function () {
        var args, f, ok;
        f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        ok = false;
        return convertArgsToFunction(this, f, args, function (f) {
            return withDescription(this, "skipWhile", f, this.withHandler(function (event) {
                if (ok || !event.hasValue() || !f(event.value())) {
                    if (event.hasValue()) {
                        ok = true;
                    }
                    return this.push(event);
                } else {
                    return Bacon.more;
                }
            }));
        });
    };

    Bacon.Observable.prototype.slidingWindow = function (n, minValues) {
        if (minValues == null) {
            minValues = 0;
        }
        return withDescription(this, "slidingWindow", n, minValues, this.scan([], (function (window, value) {
            return window.concat([value]).slice(-n);
        })).filter((function (values) {
            return values.length >= minValues;
        })));
    };

    Bacon.spy = function (spy) {
        return spys.push(spy);
    };

    spys = [];

    registerObs = function (obs) {
        var j, len1, spy;
        if (spys.length) {
            if (!registerObs.running) {
                try {
                    registerObs.running = true;
                    for (j = 0, len1 = spys.length; j < len1; j++) {
                        spy = spys[j];
                        spy(obs);
                    }
                } finally {
                    delete registerObs.running;
                }
            }
        }
        return void 0;
    };

    Bacon.Property.prototype.startWith = function (seed) {
        return withDescription(this, "startWith", seed, this.scan(seed, function (prev, next) {
            return next;
        }));
    };

    Bacon.EventStream.prototype.startWith = function (seed) {
        return withDescription(this, "startWith", seed, Bacon.once(seed).concat(this));
    };

    Bacon.Observable.prototype.takeWhile = function () {
        var args, f;
        f = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        return convertArgsToFunction(this, f, args, function (f) {
            return withDescription(this, "takeWhile", f, this.withHandler(function (event) {
                if (event.filter(f)) {
                    return this.push(event);
                } else {
                    this.push(endEvent());
                    return Bacon.noMore;
                }
            }));
        });
    };

    Bacon.update = function () {
        var i, initial, lateBindFirst, patterns;
        initial = arguments[0], patterns = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        lateBindFirst = function (f) {
            return function () {
                var args;
                args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
                return function (i) {
                    return f.apply(null, [i].concat(args));
                };
            };
        };
        i = patterns.length - 1;
        while (i > 0) {
            if (!(patterns[i] instanceof Function)) {
                patterns[i] = (function (x) {
                    return function () {
                        return x;
                    };
                })(patterns[i]);
            }
            patterns[i] = lateBindFirst(patterns[i]);
            i = i - 2;
        }
        return withDescription.apply(null, [Bacon, "update", initial].concat(slice.call(patterns), [Bacon.when.apply(Bacon, patterns).scan(initial, (function (x, f) {
            return f(x);
        }))]));
    };

    Bacon.zipAsArray = function () {
        var streams;
        streams = 1 <= arguments.length ? slice.call(arguments, 0) : [];
        if (isArray(streams[0])) {
            streams = streams[0];
        }
        return withDescription.apply(null, [Bacon, "zipAsArray"].concat(slice.call(streams), [Bacon.zipWith(streams, function () {
            var xs;
            xs = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return xs;
        })]));
    };

    Bacon.zipWith = function () {
        var f, ref1, streams;
        f = arguments[0], streams = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        if (!_.isFunction(f)) {
            ref1 = [f, streams[0]], streams = ref1[0], f = ref1[1];
        }
        streams = _.map((function (s) {
            return s.toEventStream();
        }), streams);
        return withDescription.apply(null, [Bacon, "zipWith", f].concat(slice.call(streams), [Bacon.when(streams, f)]));
    };

    Bacon.Observable.prototype.zip = function (other, f) {
        if (f == null) {
            f = Array;
        }
        return withDescription(this, "zip", other, Bacon.zipWith([this, other], f));
    };



    Bacon.Observable.prototype.first = function () {
        return withDescription(this, "first", this.take(1));
    };

    Bacon.Observable.prototype.last = function () {
        var lastEvent;

        return withDescription(this, "last", this.withHandler(function (event) {
            if (event.isEnd()) {
                if (lastEvent) {
                    this.push(lastEvent);
                }
                this.push(endEvent());
                return Bacon.noMore;
            } else {
                lastEvent = event;
            }
        }));
    };

    Bacon.EventStream.prototype.throttle = function (delay) {
        return withDescription(this, "throttle", delay, this.bufferWithTime(delay).map(function (values) {
            return values[values.length - 1];
        }));
    };

    Bacon.Property.prototype.throttle = function (delay) {
        return this.delayChanges("throttle", delay, function (changes) {
            return changes.throttle(delay);
        });
    };

    Observable.prototype.firstToPromise = function (PromiseCtr) {
        var _this = this;

        if (typeof PromiseCtr !== "function") {
            if (typeof Promise === "function") {
                PromiseCtr = Promise;
            } else {
                throw new Exception("There isn't default Promise, use shim or parameter");
            }
        }

        return new PromiseCtr(function (resolve, reject) {
            return _this.subscribe(function (event) {
                if (event.hasValue()) {
                    resolve(event.value());
                }
                if (event.isError()) {
                    reject(event.error);
                }

                return Bacon.noMore;
            });
        });
    };

    Observable.prototype.toPromise = function (PromiseCtr) {
        return this.last().firstToPromise(PromiseCtr);
    };

    if ((typeof define !== "undefined" && define !== null) && (define.amd != null)) {
        define([], function () {
            return Bacon;
        });
        this.Bacon = Bacon;
    } else if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
        module.exports = Bacon;
        Bacon.Bacon = Bacon;
    } else {
        this.Bacon = Bacon;
    }

}).call(this);
/*global jQuery */
/*!
* FitText.js 1.2
*
* Copyright 2011, Dave Rupert http://daverupert.com
* Released under the WTFPL license
* http://sam.zoy.org/wtfpl/
*
* Date: Thu May 05 14:23:00 2011 -0600
*/

(function( $ ){

  $.fn.fitText = function( kompressor, options ) {

    // Setup options
    var compressor = kompressor || 1,
        settings = $.extend({
          'minFontSize' : Number.NEGATIVE_INFINITY,
          'maxFontSize' : Number.POSITIVE_INFINITY
        }, options);

    return this.each(function(){

      // Store the object
      var $this = $(this);

      // Resizer() resizes items based on the object width divided by the compressor * 10
      var resizer = function () {
        $this.css('font-size', Math.max(Math.min($this.width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      };

      // Call once to set.
      resizer();

      // Call on resize. Opera debounces their resize by default.
      $(window).on('resize.fittext orientationchange.fittext', resizer);

    });

  };

})( jQuery );

/*!
 * Amplify Store - Persistent Client-Side Storage 1.1.2
 *
 * Copyright 2011 - 2013 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 *
 * http://amplifyjs.com
 */
(function(e,t){function i(e,i){n.addType(e,function(s,o,u){var a,f,l,c,h=o,p=(new Date).getTime();if(!s){h={},c=[],l=0;try{s=i.length;while(s=i.key(l++))r.test(s)&&(f=JSON.parse(i.getItem(s)),f.expires&&f.expires<=p?c.push(s):h[s.replace(r,"")]=f.data);while(s=c.pop())i.removeItem(s)}catch(d){}return h}s="__amplify__"+s;if(o===t){a=i.getItem(s),f=a?JSON.parse(a):{expires:-1};if(!(f.expires&&f.expires<=p))return f.data;i.removeItem(s)}else if(o===null)i.removeItem(s);else{f=JSON.stringify({data:o,expires:u.expires?p+u.expires:null});try{i.setItem(s,f)}catch(d){n[e]();try{i.setItem(s,f)}catch(d){throw n.error()}}}return h})}var n=e.store=function(e,t,r){var i=n.type;return r&&r.type&&r.type in n.types&&(i=r.type),n.types[i](e,t,r||{})};n.types={},n.type=null,n.addType=function(e,t){n.type||(n.type=e),n.types[e]=t,n[e]=function(t,r,i){return i=i||{},i.type=e,n(t,r,i)}},n.error=function(){return"amplify.store quota exceeded"};var r=/^__amplify__/;for(var s in{localStorage:1,sessionStorage:1})try{window[s].setItem("__amplify__","x"),window[s].removeItem("__amplify__"),i(s,window[s])}catch(o){}if(!n.types.localStorage&&window.globalStorage)try{i("globalStorage",window.globalStorage[window.location.hostname]),n.type==="sessionStorage"&&(n.type="globalStorage")}catch(o){}(function(){if(n.types.localStorage)return;var e=document.createElement("div"),r="amplify";e.style.display="none",document.getElementsByTagName("head")[0].appendChild(e);try{e.addBehavior("#default#userdata"),e.load(r)}catch(i){e.parentNode.removeChild(e);return}n.addType("userData",function(i,s,o){e.load(r);var u,a,f,l,c,h=s,p=(new Date).getTime();if(!i){h={},c=[],l=0;while(u=e.XMLDocument.documentElement.attributes[l++])a=JSON.parse(u.value),a.expires&&a.expires<=p?c.push(u.name):h[u.name]=a.data;while(i=c.pop())e.removeAttribute(i);return e.save(r),h}i=i.replace(/[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-"),i=i.replace(/^-/,"_-");if(s===t){u=e.getAttribute(i),a=u?JSON.parse(u):{expires:-1};if(!(a.expires&&a.expires<=p))return a.data;e.removeAttribute(i)}else s===null?e.removeAttribute(i):(f=e.getAttribute(i),a=JSON.stringify({data:s,expires:o.expires?p+o.expires:null}),e.setAttribute(i,a));try{e.save(r)}catch(d){f===null?e.removeAttribute(i):e.setAttribute(i,f),n.userData();try{e.setAttribute(i,a),e.save(r)}catch(d){throw f===null?e.removeAttribute(i):e.setAttribute(i,f),n.error()}}return h})})(),function(){function i(e){return e===t?t:JSON.parse(JSON.stringify(e))}var e={},r={};n.addType("memory",function(n,s,o){return n?s===t?i(e[n]):(r[n]&&(clearTimeout(r[n]),delete r[n]),s===null?(delete e[n],null):(e[n]=s,o.expires&&(r[n]=setTimeout(function(){delete e[n],delete r[n]},o.expires)),s)):i(e)})}()})(this.amplify=this.amplify||{})
var appWoG = {
    CACHE_DUR: 86400000, // 24 * 3600 * 1000 (24 hours in millies)

    //---- Constructor
    init: function() {

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
    loadHtmlFragment: function(htmlFile, contentHandler) {
        htmlFile += '.min.html';
        this.bacon.fromPromise($.ajax({
                url: appWoGServer + htmlFile,
                cache: false
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
    getLocalFile: function(localFilename, contentHandler) {
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
    getHtmlAsProp: function(htmlFilename, isTempl) {
        htmlFilename += '.min.html';
        var that = this;
        return Bacon.fromPromise($.ajax({
                url: appWoGServer + htmlFilename,
                cache: false
            }))
            .flatMapError(function() {
                return that.getLocalFileAsProm(htmlFilename);
            })
            .map(function(cont) {
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
    getLocalFileAsProm: function(localFilename) {
        var msg = "File failed to load from m.WoG.gr. Opted for the local instead: " + localFilename;
        Rollbar.info(msg);
        console.log(msg);
        return Bacon.fromPromise($.get(localFilename));
    },
    /*
	 * Callback when nav header loads up.
	 * Add html & icon events
	 */
    addMNavHeaderFrag: function(html) {
        //Add icons
        $('#mainNav').append(html);

        //Update status
        appWoG.updNetIcon();

        // Attach icon events
        $('#hReload').off('singletap').on('singletap', function homeRefreshTap() {
            document.location = "index.html";
        });
        $('#homeSearch').off('singletap').on('singletap', function VidPgRefreshTap() {
            var so = $('.searchBar');
            if (so.length === 0) {
                $.UISearch({ id: 'mainSearchBox', articleId: '#playlists', placeholder: 'Αναζήτηση', results: 5 });
                $('#mainSearchBox').focus();
            } else {
                so.remove();
            }
        });
        $('.fa-bars').off('singletap').on('singletap', function backFromBarsPopOver() {
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
        $('.fa-sort-alpha-asc').off('singletap').on('singletap', function backFromSortPopOver() {
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
    addVNavHeaderFrag: function() {
        //Add icons
        var navHeader = $('#videosNav');
        if (navHeader.html().indexOf('table') === -1) {
            this.vidNavFragBcProp.onValue(function(navHtml) {
                navHeader.append(navHtml);

                //update status
                appWoG.updNetIcon();

                // add events
                $('#backToMain').off('singletap').on('singletap', function homeRefreshTap() {
                    $.UIGoBackToArticle('#playlists');
                });
                $('#vReload').off('singletap').on('singletap', function VidPgRefreshTap() {
                    if (appWoG.netIsOn) {
                        var selPlaylistId = $("#videosList").data('id');
                        appWoG.gapiLoadVideos(selPlaylistId);
                    } else {
                        document.location = "index.html";

                    }
                });
                $('.fa-bars').off('singletap').on('singletap', function backFromBarsPopOver() {
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
    addMainListFrag: function(html) {
        $('#secPlaylists').prepend(html);

        //Give time for the UI to finish more urgent tasks...
        setTimeout(function() { $(".liveFlexText").fitText(1.1); }, 0);

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
    getYoutubeLangChannel: function() {

        // Recommended way to get a channel's listings by id
        return this.youtubeLangChannel[this.lang];
    },
    listsOrderby: {
        playlists: "date", //default
        videos: "published" //default
    },

    getListOrderby: function(list) { return this.listsOrderby[list]; },
    setListOrderby: function(list, newOrderby) { this.listsOrderby[list] = newOrderby; },

    /**
	  * Create the html only youtube url
	 **/
    getYTUrl: function(ytVideoId) {
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
    sortPOEvHandler: function(list) {

        $('.popover').on('singletap', function(e) {

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
    vertAlign: function(elemId) {
        var new_margin = Math.ceil(($(window).height() * 0.8 - $(elemId).height()) / 2);
        $(elemId).css('margin-top', new_margin + 'px');
    },
    menuPOEvHandler: function() {
        $('.popover').on('singletap', function(e) {
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

                    $('.sheet').on('singletap', function() {
                        $.UIHideSheet();
                    });

                    $(window).on('resize', function() { appWoG.vertAlign('#aboutDiv'); });
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

    navEnter: function(topic, id) {

        if (id === 'videos') {

            appWoG.addVNavHeaderFrag();
        }

    },
    navBackLeave: function(topic, id) {
        if (!this.isNative) {
            switch (id) {
            case 'ytIFrmArticle':
                $("#video-iframe").attr("src", "");
            }
        }
    },
    updNetIcon: function() {
        this.netIsOn ? $('.fa-ban').removeClass('fa-ban') : $('.ban-icon').addClass('fa-ban');
    },
    showNoNetPopup: function(introPrompt, isLiveStream, positActionFunc) {
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
    checkConnection: function() {
        var networkState = navigator.connection.type;

        if (networkState !== Connection.NONE) {

            this.netIsOn = true;

        } else {
            this.netIsOn = false;
            this.showNoNetPopup(true, false, function rebootFunc() {
                document.location = "index.html";
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
    onOffline: function() {
        appWoG.netIsOn = false;
        appWoG.updNetIcon();
    },
    onOnline: function() {
        if (appWoG.getLiveYtVidID() === null) {
            //if it was offline and came back in reload app to ensure correct live id
            document.location = "index.html";
        }
        appWoG.netIsOn = true;
        appWoG.updNetIcon();
    },
    phonegapInit: function() {
        navigator.splashscreen.hide();

        this.checkConnection();

        document.addEventListener("offline", this.onOffline, false);
        document.addEventListener("online", this.onOnline, false);

        if (navigator.notification) { // Override default HTML alert with native dialog
            window.alert = function(message) {
                navigator.notification.alert(
                    message, // message
                    null, // callback
                    "WoGTVm", // title
                    'OK' // buttonName
                );
            };
        }

        this.isNative = true;

        //alert("deviceReady received!, appWoG.isNative: " + appWoG.isNative);
    },

    showNoYtPopup: function(isLiveStream, ytID) {
        $.UIPopup({
            id: "noYtPopup",
            title: 'Η εφαρμογή YouTube δεν είναι εγκατεστημένη',
            message: 'Παρακαλώ εγκαταστήσετε την εφαρμογή YouTube από το Google playstore για τη θέαση του WordofGod Video.',
            cancelButton: 'ΑΡΓΟΤΕΡΑ',
            continueButton: 'ΟΚ ΤΗΝ ΕΓΚΑΤΕΣΤΗΣΑ',
            callback: function() {
                if (!isLiveStream) {
                    appWoG.phA_playYoutube(isLiveStream, ytID);
                }
            }
        });
    },
    /**
	  * Phonegap Android version of play youtube
	  */
    phA_playYoutube: function(isLiveStream, ytID) {
        //console.log('in phA_playYoutube(), ytID: ' + ytID + ', window.Youtube: ' + youtube + ', YouTube: ' + YouTube + ' is ' + (youtube === void 0 ? "Undef" : "Def"));
        //navigator.notification.alert('youtube: ' + youtube);


        if (ytID === void 0 || ytID === null) {

            // Null id. Trouble if in online mode

            if (isLiveStream) {

                Rollbar.info('Null live id: ' + ytID + ' in phA_playYoutube...rebooting');
                // Reboot
                document.location = "index.html";

            } else {
                Rollbar.info('Null id: ' + ytID + ' phA_playYoutube');

            }
            return;
        }

        if (this.netIsOn) {

            youtube.playVideo(ytID, function phA_playYoutubeSucc() {},
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
                    document.location = "index.html";
                });
            } else {
                // Offline Error when pressed on a on demand Event, play the event if user says they connected
                appWoG.showNoNetPopup(false, isLiveStream, function replayFunc() {
                    appWoG.phA_playYoutube(isLiveStream, ytID);
                });
            }
        }
    },

    getYouTubeID: function(url) {
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
    setBusySvg: function(elemName) {

        var elem = $(elemName);
        elem.UIBusy({ color: '#444', size: 60 });
        elem.find('.busy').UICenter();

    },

    setTouchPlayLiveEvent: function() {
        var that = this;
        $('.liveFlexText').on('singletap', function liveVideoDivTap(e) {
            if (that.netIsOn) {
                that.playLiveEvent();
            }

            e.preventDefault();
        });
    },


    // On Index any playlist "click", singletap event by delegate
    setTouchPlaylistEvent: function() {

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
    setVideoTapPlayEvent: function() {

        var that = this;
        $('#videosList').on("singletap", "div", function setPLVideoTapPlayEventTap(e) {

            e.preventDefault();
            e.stopPropagation();

            var ydiv = $(this);
            var ytTitle = ydiv.find(' > ').data('title');
            var ytID = ydiv.find(' > ').data('ytid');

            that.showYT(false, ytTitle, ytID);
        });
    },

    /**
     * Start video player
     */
    showYT: function(isLiveStream, ytTitle, ytID) {

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
    getLiveYtVidID: function() {

        var liveYtVidID = this.cachedLiveLangYtUrl[this.lang].vidID;

        return liveYtVidID;
    },

    setLiveYtUrl: function(ytID) {
        // Caching entry for current language
        if (ytID !== null) {
            this.cachedLiveLangYtUrl[this.lang].vidID = ytID;

            amplify.store(this.lang + this.liveYtIDKey, ytID);
        }
    },
    /**
	  * Display iframe and play the active live event
	  */
    playLiveEvent: function() {
        var liveYtVidID = this.getLiveYtVidID();

        if (liveYtVidID) {
            this.showYT(true, "Ζωντανή μετάδοση...", liveYtVidID);
        }
    },
    /**
     * Load first data upon module initialization
     * to be called from user of module
     */
    loadInit: function() {
        if (gapi.client.youtube) {
            this.gapiLoadLiveEvent();
            this.gapiLoadPlaylists(this.getListOrderby("playlists"));
        }
    },
    gapiLoadLiveEvent: function() {
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
    procPlaylistsResp: function(pListTemp, response) {
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
    gapiLoadPlaylists: function(sortVal) {

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
                .then(function(res) {
                    return res.result.items.map(function(item) {
                        return item.id.playlistId;
                    });
                })
                .then(function(plIds) {
                    return gapi.client.youtube.playlists.list({
                        id: plIds.join(','),
                        part: 'id,snippet,contentDetails',
                        type: 'playlist',
                        maxResults: 50
                    });
                })
                .then(function(resp) {
                    // Synchronize on playlists template + gapi playlists results;
                    that.plistsTempBcProp.onValue(function(plistsTemp) {
                        that.procPlaylistsResp(plistsTemp, resp);
                    });

                    // Cache results
                    that.cachedPL = { ts: new Date(), resp: resp, orderBy: sortVal };

                }, function(err) {
                    Rollbar.error(err.result);
                });

        } else {
            this.plistsTempBcProp.onValue(function(plistsTemp) {
                that.procPlaylistsResp(plistsTemp, that.cachedPL.resp);
            });
        }

    },
    gapiLoadVideos: function(userPlaylistId) {

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
            .then(function(res) {
                return res.result.items.map(function(item) {
                    return item.snippet.resourceId.videoId;
                });
            })
            .then(function(videoIds) {
                return this.gapi.client.youtube.videos.list({
                    id: videoIds.join(','),
                    part: 'id,snippet,statistics,contentDetails',
                    maxResults: 50
                });
            })
            .then(function(resp) {
                // Synchronize on video template + gapi video list;
                that.videosListTempBcProp.onValue(function(vidListTempl) {
                    that.procVideosExtraInfoResp(vidListTempl, resp);
                });
            }, function(err) {
                Rollbar.error(err.result);
            });
    },

    parseVideoTemp: function(parsedVidTemp, videoData, cntVideos) {

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
            } else {
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
    procVideosExtraInfoResp: function(vidListTemp, response) {
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
    convFromIso8601Dur: function(duration) {
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
