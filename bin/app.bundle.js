/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	// import '../node_modules/paper/dist/paper-full.js';
	// import paper from '../node_modules/paper/dist/paper-full.js';
	// import 'paper';

	__webpack_require__(3);

	var _paint = __webpack_require__(300);

	var _paint2 = _interopRequireDefault(_paint);

	var _connect = __webpack_require__(307);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	new _paint2.default({
		'canvas': $("#paintingCanvas"),
		'toolbar': $('#paintingToolbar'),
		'menu': $('#paintingMenu')
	});

	// var peer = new Peer({key: 'h4vvvnumco50cnmi'});

	// console.log(peer);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v3.1.1 | (c) jQuery Foundation | jquery.org/license */
	!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.1.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=r.isArray(d)))?(e?(e=!1,f=c&&r.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext,B=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,C=/^.[^:#\[\.,]*$/;function D(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):C.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(D(this,a||[],!1))},not:function(a){return this.pushStack(D(this,a||[],!0))},is:function(a){return!!D(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var E,F=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,G=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||E,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:F.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),B.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};G.prototype=r.fn,E=r(d);var H=/^(?:parents|prev(?:Until|All))/,I={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function J(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return J(a,"nextSibling")},prev:function(a){return J(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return a.contentDocument||r.merge([],a.childNodes)}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(I[a]||r.uniqueSort(e),H.test(a)&&e.reverse()),this.pushStack(e)}});var K=/[^\x20\t\r\n\f]+/g;function L(a){var b={};return r.each(a.match(K)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?L(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function M(a){return a}function N(a){throw a}function O(a,b,c){var d;try{a&&r.isFunction(d=a.promise)?d.call(a).done(b).fail(c):a&&r.isFunction(d=a.then)?d.call(a,b,c):b.call(void 0,a)}catch(a){c.call(void 0,a)}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,M,e),g(f,c,N,e)):(f++,j.call(a,g(f,c,M,e),g(f,c,N,e),g(f,c,M,c.notifyWith))):(d!==M&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==N&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:M,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:M)),c[2][3].add(g(0,a,r.isFunction(d)?d:N))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(O(a,g.done(h(c)).resolve,g.reject),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)O(e[c],h(c),g.reject);return g.promise()}});var P=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&P.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var Q=r.Deferred();r.fn.ready=function(a){return Q.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,holdReady:function(a){a?r.readyWait++:r.ready(!0)},ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||Q.resolveWith(d,[r]))}}),r.ready.then=Q.then;function R(){d.removeEventListener("DOMContentLoaded",R),
	a.removeEventListener("load",R),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",R),a.addEventListener("load",R));var S=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)S(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},T=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function U(){this.expando=r.expando+U.uid++}U.uid=1,U.prototype={cache:function(a){var b=a[this.expando];return b||(b={},T(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){r.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(K)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var V=new U,W=new U,X=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Y=/[A-Z]/g;function Z(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:X.test(a)?JSON.parse(a):a)}function $(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Y,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=Z(c)}catch(e){}W.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return W.hasData(a)||V.hasData(a)},data:function(a,b,c){return W.access(a,b,c)},removeData:function(a,b){W.remove(a,b)},_data:function(a,b,c){return V.access(a,b,c)},_removeData:function(a,b){V.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=W.get(f),1===f.nodeType&&!V.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),$(f,d,e[d])));V.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){W.set(this,a)}):S(this,function(b){var c;if(f&&void 0===b){if(c=W.get(f,a),void 0!==c)return c;if(c=$(f,a),void 0!==c)return c}else this.each(function(){W.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){W.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=V.get(a,b),c&&(!d||r.isArray(c)?d=V.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return V.get(a,c)||V.access(a,c,{empty:r.Callbacks("once memory").add(function(){V.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=V.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var _=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,aa=new RegExp("^(?:([+-])=|)("+_+")([a-z%]*)$","i"),ba=["Top","Right","Bottom","Left"],ca=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function ea(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&aa.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var fa={};function ga(a){var b,c=a.ownerDocument,d=a.nodeName,e=fa[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),fa[d]=e,e)}function ha(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=V.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&ca(d)&&(e[f]=ga(d))):"none"!==c&&(e[f]="none",V.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ha(this,!0)},hide:function(){return ha(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){ca(this)?r(this).show():r(this).hide()})}});var ia=/^(?:checkbox|radio)$/i,ja=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,ka=/^$|\/(?:java|ecma)script/i,la={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};la.optgroup=la.option,la.tbody=la.tfoot=la.colgroup=la.caption=la.thead,la.th=la.td;function ma(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&r.nodeName(a,b)?r.merge([a],c):c}function na(a,b){for(var c=0,d=a.length;c<d;c++)V.set(a[c],"globalEval",!b||V.get(b[c],"globalEval"))}var oa=/<|&#?\w+;/;function pa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(oa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ja.exec(f)||["",""])[1].toLowerCase(),i=la[h]||la._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=ma(l.appendChild(f),"script"),j&&na(g),c){k=0;while(f=g[k++])ka.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var qa=d.documentElement,ra=/^key/,sa=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ta=/^([^.]*)(?:\.(.+)|)/;function ua(){return!0}function va(){return!1}function wa(){try{return d.activeElement}catch(a){}}function xa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)xa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=va;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(qa,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(K)||[""],j=b.length;while(j--)h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=V.hasData(a)&&V.get(a);if(q&&(i=q.events)){b=(b||"").match(K)||[""],j=b.length;while(j--)if(h=ta.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&V.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(V.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==wa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===wa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&r.nodeName(this,"input"))return this.click(),!1},_default:function(a){return r.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ua:va,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:va,isPropagationStopped:va,isImmediatePropagationStopped:va,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ua,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ua,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ua,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&ra.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&sa.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return xa(this,a,b,c,d)},one:function(a,b,c,d){return xa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=va),this.each(function(){r.event.remove(this,a,c,b)})}});var ya=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,za=/<script|<style|<link/i,Aa=/checked\s*(?:[^=]|=\s*.checked.)/i,Ba=/^true\/(.*)/,Ca=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Da(a,b){return r.nodeName(a,"table")&&r.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a:a}function Ea(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Fa(a){var b=Ba.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ga(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(V.hasData(a)&&(f=V.access(a),g=V.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}W.hasData(a)&&(h=W.access(a),i=r.extend({},h),W.set(b,i))}}function Ha(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ia.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ia(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Aa.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ia(f,b,c,d)});if(m&&(e=pa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(ma(e,"script"),Ea),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,ma(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Fa),l=0;l<i;l++)j=h[l],ka.test(j.type||"")&&!V.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Ca,""),k))}return a}function Ja(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(ma(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&na(ma(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(ya,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=ma(h),f=ma(a),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);if(b)if(c)for(f=f||ma(a),g=g||ma(h),d=0,e=f.length;d<e;d++)Ga(f[d],g[d]);else Ga(a,h);return g=ma(h,"script"),g.length>0&&na(g,!i&&ma(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(T(c)){if(b=c[V.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[V.expando]=void 0}c[W.expando]&&(c[W.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ja(this,a,!0)},remove:function(a){return Ja(this,a)},text:function(a){return S(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.appendChild(a)}})},prepend:function(){return Ia(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Da(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ia(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(ma(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return S(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!za.test(a)&&!la[(ja.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(ma(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ia(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(ma(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var Ka=/^margin/,La=new RegExp("^("+_+")(?!px)[a-z%]+$","i"),Ma=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",qa.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,qa.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Na(a,b,c){var d,e,f,g,h=a.style;return c=c||Ma(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&La.test(g)&&Ka.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Oa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Pa=/^(none|table(?!-c[ea]).+)/,Qa={position:"absolute",visibility:"hidden",display:"block"},Ra={letterSpacing:"0",fontWeight:"400"},Sa=["Webkit","Moz","ms"],Ta=d.createElement("div").style;function Ua(a){if(a in Ta)return a;var b=a[0].toUpperCase()+a.slice(1),c=Sa.length;while(c--)if(a=Sa[c]+b,a in Ta)return a}function Va(a,b,c){var d=aa.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Wa(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ba[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ba[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ba[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ba[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ba[f]+"Width",!0,e)));return g}function Xa(a,b,c){var d,e=!0,f=Ma(a),g="border-box"===r.css(a,"boxSizing",!1,f);if(a.getClientRects().length&&(d=a.getBoundingClientRect()[b]),d<=0||null==d){if(d=Na(a,b,f),(d<0||null==d)&&(d=a.style[b]),La.test(d))return d;e=g&&(o.boxSizingReliable()||d===a.style[b]),d=parseFloat(d)||0}return d+Wa(a,b,c||(g?"border":"content"),e,f)+"px"}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Na(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=a.style;return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=aa.exec(c))&&e[1]&&(c=ea(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b);return b=r.cssProps[h]||(r.cssProps[h]=Ua(h)||h),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Na(a,b,d)),"normal"===e&&b in Ra&&(e=Ra[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Pa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?Xa(a,b,d):da(a,Qa,function(){return Xa(a,b,d)})},set:function(a,c,d){var e,f=d&&Ma(a),g=d&&Wa(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=aa.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Va(a,c,g)}}}),r.cssHooks.marginLeft=Oa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Na(a,"marginLeft"))||a.getBoundingClientRect().left-da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ba[d]+b]=f[d]||f[d-2]||f[0];return e}},Ka.test(a)||(r.cssHooks[a+b].set=Va)}),r.fn.extend({css:function(a,b){return S(this,function(a,b,c){var d,e,f={},g=0;if(r.isArray(b)){for(d=Ma(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function Ya(a,b,c,d,e){return new Ya.prototype.init(a,b,c,d,e)}r.Tween=Ya,Ya.prototype={constructor:Ya,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=Ya.propHooks[this.prop];return a&&a.get?a.get(this):Ya.propHooks._default.get(this)},run:function(a){var b,c=Ya.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ya.propHooks._default.set(this),this}},Ya.prototype.init.prototype=Ya.prototype,Ya.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},Ya.propHooks.scrollTop=Ya.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=Ya.prototype.init,r.fx.step={};var Za,$a,_a=/^(?:toggle|show|hide)$/,ab=/queueHooks$/;function bb(){$a&&(a.requestAnimationFrame(bb),r.fx.tick())}function cb(){return a.setTimeout(function(){Za=void 0}),Za=r.now()}function db(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ba[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function eb(a,b,c){for(var d,e=(hb.tweeners[b]||[]).concat(hb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function fb(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&ca(a),q=V.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],_a.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=V.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ha([a],!0),j=a.style.display||j,k=r.css(a,"display"),ha([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=V.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ha([a],!0),m.done(function(){p||ha([a]),V.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=eb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function gb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],r.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function hb(a,b,c){var d,e,f=0,g=hb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Za||cb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:Za||cb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(gb(k,j.opts.specialEasing);f<g;f++)if(d=hb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,eb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}r.Animation=r.extend(hb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return ea(c.elem,a,aa.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(K);for(var c,d=0,e=a.length;d<e;d++)c=a[d],hb.tweeners[c]=hb.tweeners[c]||[],hb.tweeners[c].unshift(b)},prefilters:[fb],prefilter:function(a,b){b?hb.prefilters.unshift(a):hb.prefilters.push(a)}}),r.speed=function(a,b,c){var e=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off||d.hidden?e.duration=0:"number"!=typeof e.duration&&(e.duration in r.fx.speeds?e.duration=r.fx.speeds[e.duration]:e.duration=r.fx.speeds._default),null!=e.queue&&e.queue!==!0||(e.queue="fx"),e.old=e.complete,e.complete=function(){r.isFunction(e.old)&&e.old.call(this),e.queue&&r.dequeue(this,e.queue)},e},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(ca).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=hb(this,r.extend({},a),f);(e||V.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=V.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=V.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(db(b,!0),a,d,e)}}),r.each({slideDown:db("show"),slideUp:db("hide"),slideToggle:db("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(Za=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),Za=void 0},r.fx.timer=function(a){r.timers.push(a),a()?r.fx.start():r.timers.pop()},r.fx.interval=13,r.fx.start=function(){$a||($a=a.requestAnimationFrame?a.requestAnimationFrame(bb):a.setInterval(r.fx.tick,r.fx.interval))},r.fx.stop=function(){a.cancelAnimationFrame?a.cancelAnimationFrame($a):a.clearInterval($a),$a=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var ib,jb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return S(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?ib:void 0)),
	void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&r.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(K);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),ib={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=jb[b]||r.find.attr;jb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=jb[g],jb[g]=e,e=null!=c(a,b,d)?g:null,jb[g]=f),e}});var kb=/^(?:input|select|textarea|button)$/i,lb=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return S(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):kb.test(a.nodeName)||lb.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function mb(a){var b=a.match(K)||[];return b.join(" ")}function nb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,nb(this)))});if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,nb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(K)||[];while(c=this[i++])if(e=nb(c),d=1===c.nodeType&&" "+mb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=mb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,nb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(K)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=nb(this),b&&V.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":V.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+mb(nb(c))+" ").indexOf(b)>-1)return!0;return!1}});var ob=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":r.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ob,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:mb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!r.nodeName(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(r.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var pb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!pb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,pb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(V.get(h,"events")||{})[b.type]&&V.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&T(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!T(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=V.access(d,b);e||d.addEventListener(a,c,!0),V.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=V.access(d,b)-1;e?V.access(d,b,e):(d.removeEventListener(a,c,!0),V.remove(d,b))}}});var qb=a.location,rb=r.now(),sb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var tb=/\[\]$/,ub=/\r?\n/g,vb=/^(?:submit|button|image|reset|file)$/i,wb=/^(?:input|select|textarea|keygen)/i;function xb(a,b,c,d){var e;if(r.isArray(b))r.each(b,function(b,e){c||tb.test(a)?d(a,e):xb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)xb(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(r.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)xb(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&wb.test(this.nodeName)&&!vb.test(a)&&(this.checked||!ia.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:r.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(ub,"\r\n")}}):{name:b.name,value:c.replace(ub,"\r\n")}}).get()}});var yb=/%20/g,zb=/#.*$/,Ab=/([?&])_=[^&]*/,Bb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Cb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Db=/^(?:GET|HEAD)$/,Eb=/^\/\//,Fb={},Gb={},Hb="*/".concat("*"),Ib=d.createElement("a");Ib.href=qb.href;function Jb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(K)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Kb(a,b,c,d){var e={},f=a===Gb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Lb(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Mb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Nb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qb.href,type:"GET",isLocal:Cb.test(qb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Hb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Lb(Lb(a,r.ajaxSettings),b):Lb(r.ajaxSettings,a)},ajaxPrefilter:Jb(Fb),ajaxTransport:Jb(Gb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Bb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||qb.href)+"").replace(Eb,qb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(K)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Ib.protocol+"//"+Ib.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Kb(Fb,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Db.test(o.type),f=o.url.replace(zb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(yb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(sb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Ab,"$1"),n=(sb.test(f)?"&":"?")+"_="+rb++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Hb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Kb(Gb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Mb(o,y,d)),v=Nb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Ob={0:200,1223:204},Pb=r.ajaxSettings.xhr();o.cors=!!Pb&&"withCredentials"in Pb,o.ajax=Pb=!!Pb,r.ajaxTransport(function(b){var c,d;if(o.cors||Pb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Ob[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Qb=[],Rb=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Qb.pop()||r.expando+"_"+rb++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Rb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Rb.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Rb,"$1"+e):b.jsonp!==!1&&(b.url+=(sb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Qb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=B.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=pa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=mb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length};function Sb(a){return r.isWindow(a)?a:9===a.nodeType&&a.defaultView}r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),d.width||d.height?(e=f.ownerDocument,c=Sb(e),b=e.documentElement,{top:d.top+c.pageYOffset-b.clientTop,left:d.left+c.pageXOffset-b.clientLeft}):d):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),r.nodeName(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||qa})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return S(this,function(a,d,e){var f=Sb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Oa(o.pixelPosition,function(a,c){if(c)return c=Na(a,b),La.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return S(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.parseJSON=JSON.parse,"function"=="function"&&__webpack_require__(2)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return r}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Tb=a.jQuery,Ub=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Ub),b&&a.jQuery===r&&(a.jQuery=Tb),r},b||(a.jQuery=a.$=r),r});


/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";

	__webpack_require__(4);

	__webpack_require__(295);

	__webpack_require__(297);

	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

	var DEFINE_PROPERTY = "defineProperty";
	function define(O, key, value) {
	  O[key] || Object[DEFINE_PROPERTY](O, key, {
	    writable: true,
	    configurable: true,
	    value: value
	  });
	}

	define(String.prototype, "padLeft", "".padStart);
	define(String.prototype, "padRight", "".padEnd);

	"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
	  [][key] && define(Array, key, Function.call.bind([][key]));
	});
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(5);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(59);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(64);
	__webpack_require__(65);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(69);
	__webpack_require__(70);
	__webpack_require__(72);
	__webpack_require__(74);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(81);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(87);
	__webpack_require__(89);
	__webpack_require__(91);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(99);
	__webpack_require__(100);
	__webpack_require__(101);
	__webpack_require__(102);
	__webpack_require__(103);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(107);
	__webpack_require__(108);
	__webpack_require__(109);
	__webpack_require__(111);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(115);
	__webpack_require__(116);
	__webpack_require__(117);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(120);
	__webpack_require__(121);
	__webpack_require__(122);
	__webpack_require__(123);
	__webpack_require__(124);
	__webpack_require__(125);
	__webpack_require__(126);
	__webpack_require__(127);
	__webpack_require__(128);
	__webpack_require__(133);
	__webpack_require__(134);
	__webpack_require__(138);
	__webpack_require__(139);
	__webpack_require__(140);
	__webpack_require__(141);
	__webpack_require__(143);
	__webpack_require__(144);
	__webpack_require__(145);
	__webpack_require__(146);
	__webpack_require__(147);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(150);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(177);
	__webpack_require__(178);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(181);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(185);
	__webpack_require__(186);
	__webpack_require__(189);
	__webpack_require__(191);
	__webpack_require__(192);
	__webpack_require__(193);
	__webpack_require__(195);
	__webpack_require__(197);
	__webpack_require__(199);
	__webpack_require__(200);
	__webpack_require__(201);
	__webpack_require__(203);
	__webpack_require__(204);
	__webpack_require__(205);
	__webpack_require__(206);
	__webpack_require__(213);
	__webpack_require__(216);
	__webpack_require__(217);
	__webpack_require__(219);
	__webpack_require__(220);
	__webpack_require__(223);
	__webpack_require__(224);
	__webpack_require__(226);
	__webpack_require__(227);
	__webpack_require__(228);
	__webpack_require__(229);
	__webpack_require__(230);
	__webpack_require__(231);
	__webpack_require__(232);
	__webpack_require__(233);
	__webpack_require__(234);
	__webpack_require__(235);
	__webpack_require__(236);
	__webpack_require__(237);
	__webpack_require__(238);
	__webpack_require__(239);
	__webpack_require__(240);
	__webpack_require__(241);
	__webpack_require__(242);
	__webpack_require__(243);
	__webpack_require__(244);
	__webpack_require__(246);
	__webpack_require__(247);
	__webpack_require__(248);
	__webpack_require__(249);
	__webpack_require__(250);
	__webpack_require__(251);
	__webpack_require__(253);
	__webpack_require__(254);
	__webpack_require__(255);
	__webpack_require__(256);
	__webpack_require__(257);
	__webpack_require__(258);
	__webpack_require__(259);
	__webpack_require__(260);
	__webpack_require__(262);
	__webpack_require__(263);
	__webpack_require__(265);
	__webpack_require__(266);
	__webpack_require__(267);
	__webpack_require__(268);
	__webpack_require__(271);
	__webpack_require__(272);
	__webpack_require__(273);
	__webpack_require__(274);
	__webpack_require__(275);
	__webpack_require__(276);
	__webpack_require__(277);
	__webpack_require__(278);
	__webpack_require__(280);
	__webpack_require__(281);
	__webpack_require__(282);
	__webpack_require__(283);
	__webpack_require__(284);
	__webpack_require__(285);
	__webpack_require__(286);
	__webpack_require__(287);
	__webpack_require__(288);
	__webpack_require__(289);
	__webpack_require__(290);
	__webpack_require__(293);
	__webpack_require__(294);
	module.exports = __webpack_require__(11);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var global         = __webpack_require__(6)
	  , has            = __webpack_require__(7)
	  , DESCRIPTORS    = __webpack_require__(8)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(20)
	  , META           = __webpack_require__(24).KEY
	  , $fails         = __webpack_require__(9)
	  , shared         = __webpack_require__(25)
	  , setToStringTag = __webpack_require__(26)
	  , uid            = __webpack_require__(21)
	  , wks            = __webpack_require__(27)
	  , wksExt         = __webpack_require__(28)
	  , wksDefine      = __webpack_require__(29)
	  , keyOf          = __webpack_require__(31)
	  , enumKeys       = __webpack_require__(44)
	  , isArray        = __webpack_require__(47)
	  , anObject       = __webpack_require__(14)
	  , toIObject      = __webpack_require__(34)
	  , toPrimitive    = __webpack_require__(18)
	  , createDesc     = __webpack_require__(19)
	  , _create        = __webpack_require__(48)
	  , gOPNExt        = __webpack_require__(51)
	  , $GOPD          = __webpack_require__(53)
	  , $DP            = __webpack_require__(13)
	  , $keys          = __webpack_require__(32)
	  , gOPD           = $GOPD.f
	  , dP             = $DP.f
	  , gOPN           = gOPNExt.f
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , PROTOTYPE      = 'prototype'
	  , HIDDEN         = wks('_hidden')
	  , TO_PRIMITIVE   = wks('toPrimitive')
	  , isEnum         = {}.propertyIsEnumerable
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , OPSymbols      = shared('op-symbols')
	  , ObjectProto    = Object[PROTOTYPE]
	  , USE_NATIVE     = typeof $Symbol == 'function'
	  , QObject        = global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(dP({}, 'a', {
	    get: function(){ return dP(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = gOPD(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  dP(it, key, D);
	  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
	} : dP;

	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
	  return typeof it == 'symbol';
	} : function(it){
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D){
	  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
	  anObject(it);
	  key = toPrimitive(key, true);
	  anObject(D);
	  if(has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return dP(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key = toPrimitive(key, true));
	  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  it  = toIObject(it);
	  key = toPrimitive(key, true);
	  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
	  var D = gOPD(it, key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = gOPN(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var IS_OP  = it === ObjectProto
	    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i){
	    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if(!USE_NATIVE){
	  $Symbol = function Symbol(){
	    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
	    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function(value){
	      if(this === ObjectProto)$set.call(OPSymbols, value);
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    };
	    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
	    return wrap(tag);
	  };
	  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
	    return this._k;
	  });

	  $GOPD.f = $getOwnPropertyDescriptor;
	  $DP.f   = $defineProperty;
	  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
	  __webpack_require__(46).f  = $propertyIsEnumerable;
	  __webpack_require__(45).f = $getOwnPropertySymbols;

	  if(DESCRIPTORS && !__webpack_require__(30)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  wksExt.f = function(name){
	    return wrap(wks(name));
	  }
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

	for(var symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

	for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

	$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    if(isSymbol(key))return keyOf(SymbolRegistry, key);
	    throw TypeError(key + ' is not a symbol!');
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	});

	$export($export.S + $export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it){
	    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	    var args = [it]
	      , i    = 1
	      , replacer, $replacer;
	    while(arguments.length > i)args.push(arguments[i++]);
	    replacer = args[1];
	    if(typeof replacer == 'function')$replacer = replacer;
	    if($replacer || !isArray(replacer))replacer = function(key, value){
	      if($replacer)value = $replacer.call(this, key, value);
	      if(!isSymbol(value))return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(9)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(11)
	  , hide      = __webpack_require__(12)
	  , redefine  = __webpack_require__(20)
	  , ctx       = __webpack_require__(22)
	  , PROTOTYPE = 'prototype';

	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target)redefine(target, key, out, type & $export.U);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 11 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13)
	  , createDesc = __webpack_require__(19);
	module.exports = __webpack_require__(8) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(14)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , toPrimitive    = __webpack_require__(18)
	  , dP             = Object.defineProperty;

	exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(8) && !__webpack_require__(9)(function(){
	  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(15);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(12)
	  , has       = __webpack_require__(7)
	  , SRC       = __webpack_require__(21)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);

	__webpack_require__(11).inspectSource = function(it){
	  return $toString.call(it);
	};

	(module.exports = function(O, key, val, safe){
	  var isFunction = typeof val == 'function';
	  if(isFunction)has(val, 'name') || hide(val, 'name', key);
	  if(O[key] === val)return;
	  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe){
	      delete O[key];
	      hide(O, key, val);
	    } else {
	      if(O[key])O[key] = val;
	      else hide(O, key, val);
	    }
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 21 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(23);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 23 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var META     = __webpack_require__(21)('meta')
	  , isObject = __webpack_require__(15)
	  , has      = __webpack_require__(7)
	  , setDesc  = __webpack_require__(13).f
	  , id       = 0;
	var isExtensible = Object.isExtensible || function(){
	  return true;
	};
	var FREEZE = !__webpack_require__(9)(function(){
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function(it){
	  setDesc(it, META, {value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  }});
	};
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add metadata
	    if(!create)return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function(it, create){
	  if(!has(it, META)){
	    // can't set metadata to uncaught frozen object
	    if(!isExtensible(it))return true;
	    // not necessary to add metadata
	    if(!create)return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function(it){
	  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY:      META,
	  NEED:     false,
	  fastKey:  fastKey,
	  getWeak:  getWeak,
	  onFreeze: onFreeze
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(13).f
	  , has = __webpack_require__(7)
	  , TAG = __webpack_require__(27)('toStringTag');

	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(25)('wks')
	  , uid        = __webpack_require__(21)
	  , Symbol     = __webpack_require__(6).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};

	$exports.store = store;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	exports.f = __webpack_require__(27);

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var global         = __webpack_require__(6)
	  , core           = __webpack_require__(11)
	  , LIBRARY        = __webpack_require__(30)
	  , wksExt         = __webpack_require__(28)
	  , defineProperty = __webpack_require__(13).f;
	module.exports = function(name){
	  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
	  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
	};

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(32)
	  , toIObject = __webpack_require__(34);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(33)
	  , enumBugKeys = __webpack_require__(43);

	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(7)
	  , toIObject    = __webpack_require__(34)
	  , arrayIndexOf = __webpack_require__(38)(false)
	  , IE_PROTO     = __webpack_require__(42)('IE_PROTO');

	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(35)
	  , defined = __webpack_require__(37);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(36);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 36 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 37 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(34)
	  , toLength  = __webpack_require__(39)
	  , toIndex   = __webpack_require__(41);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(40)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 40 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(25)('keys')
	  , uid    = __webpack_require__(21);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 43 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var getKeys = __webpack_require__(32)
	  , gOPS    = __webpack_require__(45)
	  , pIE     = __webpack_require__(46);
	module.exports = function(it){
	  var result     = getKeys(it)
	    , getSymbols = gOPS.f;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = pIE.f
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
	  } return result;
	};

/***/ },
/* 45 */
/***/ function(module, exports) {

	exports.f = Object.getOwnPropertySymbols;

/***/ },
/* 46 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(36);
	module.exports = Array.isArray || function isArray(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(14)
	  , dPs         = __webpack_require__(49)
	  , enumBugKeys = __webpack_require__(43)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(17)('iframe')
	    , i      = enumBugKeys.length
	    , lt     = '<'
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(50).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};

	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(13)
	  , anObject = __webpack_require__(14)
	  , getKeys  = __webpack_require__(32);

	module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(34)
	  , gOPN      = __webpack_require__(52).f
	  , toString  = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function(it){
	  try {
	    return gOPN(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};

	module.exports.f = function getOwnPropertyNames(it){
	  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
	};


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	var $keys      = __webpack_require__(33)
	  , hiddenKeys = __webpack_require__(43).concat('length', 'prototype');

	exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
	  return $keys(O, hiddenKeys);
	};

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(46)
	  , createDesc     = __webpack_require__(19)
	  , toIObject      = __webpack_require__(34)
	  , toPrimitive    = __webpack_require__(18)
	  , has            = __webpack_require__(7)
	  , IE8_DOM_DEFINE = __webpack_require__(16)
	  , gOPD           = Object.getOwnPropertyDescriptor;

	exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	$export($export.S, 'Object', {create: __webpack_require__(48)});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperty: __webpack_require__(13).f});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	$export($export.S + $export.F * !__webpack_require__(8), 'Object', {defineProperties: __webpack_require__(49)});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject                 = __webpack_require__(34)
	  , $getOwnPropertyDescriptor = __webpack_require__(53).f;

	__webpack_require__(58)('getOwnPropertyDescriptor', function(){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(10)
	  , core    = __webpack_require__(11)
	  , fails   = __webpack_require__(9);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject        = __webpack_require__(60)
	  , $getPrototypeOf = __webpack_require__(61);

	__webpack_require__(58)('getPrototypeOf', function(){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(37);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(7)
	  , toObject    = __webpack_require__(60)
	  , IE_PROTO    = __webpack_require__(42)('IE_PROTO')
	  , ObjectProto = Object.prototype;

	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(60)
	  , $keys    = __webpack_require__(32);

	__webpack_require__(58)('keys', function(){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(58)('getOwnPropertyNames', function(){
	  return __webpack_require__(51).f;
	});

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(15)
	  , meta     = __webpack_require__(24).onFreeze;

	__webpack_require__(58)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
	  };
	});

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(15)
	  , meta     = __webpack_require__(24).onFreeze;

	__webpack_require__(58)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(meta(it)) : it;
	  };
	});

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(15)
	  , meta     = __webpack_require__(24).onFreeze;

	__webpack_require__(58)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
	  };
	});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(15);

	__webpack_require__(58)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(15);

	__webpack_require__(58)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(15);

	__webpack_require__(58)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(10);

	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(71)});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.2.1 Object.assign(target, source, ...)
	var getKeys  = __webpack_require__(32)
	  , gOPS     = __webpack_require__(45)
	  , pIE      = __webpack_require__(46)
	  , toObject = __webpack_require__(60)
	  , IObject  = __webpack_require__(35)
	  , $assign  = Object.assign;

	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = !$assign || __webpack_require__(9)(function(){
	  var A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , aLen  = arguments.length
	    , index = 1
	    , getSymbols = gOPS.f
	    , isEnum     = pIE.f;
	  while(aLen > index){
	    var S      = IObject(arguments[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  } return T;
	} : $assign;

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(10);
	$export($export.S, 'Object', {is: __webpack_require__(73)});

/***/ },
/* 73 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(10);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(75).set});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(15)
	  , anObject = __webpack_require__(14);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(22)(Function.call, __webpack_require__(53).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(77)
	  , test    = {};
	test[__webpack_require__(27)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(20)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(36)
	  , TAG = __webpack_require__(27)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};

	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	var $export = __webpack_require__(10);

	$export($export.P, 'Function', {bind: __webpack_require__(79)});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var aFunction  = __webpack_require__(23)
	  , isObject   = __webpack_require__(15)
	  , invoke     = __webpack_require__(80)
	  , arraySlice = [].slice
	  , factories  = {};

	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	module.exports = Function.bind || function bind(that /*, args... */){
	  var fn       = aFunction(this)
	    , partArgs = arraySlice.call(arguments, 1);
	  var bound = function(/* args... */){
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	  };
	  if(isObject(fn.prototype))bound.prototype = fn.prototype;
	  return bound;
	};

/***/ },
/* 80 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(13).f
	  , createDesc = __webpack_require__(19)
	  , has        = __webpack_require__(7)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';

	var isExtensible = Object.isExtensible || function(){
	  return true;
	};

	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(8) && dP(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    try {
	      var that = this
	        , name = ('' + that).match(nameRE)[1];
	      has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
	      return name;
	    } catch(e){
	      return '';
	    }
	  }
	});

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var isObject       = __webpack_require__(15)
	  , getPrototypeOf = __webpack_require__(61)
	  , HAS_INSTANCE   = __webpack_require__(27)('hasInstance')
	  , FunctionProto  = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))__webpack_require__(13).f(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(10)
	  , $parseInt = __webpack_require__(84);
	// 18.2.5 parseInt(string, radix)
	$export($export.G + $export.F * (parseInt != $parseInt), {parseInt: $parseInt});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var $parseInt = __webpack_require__(6).parseInt
	  , $trim     = __webpack_require__(85).trim
	  , ws        = __webpack_require__(86)
	  , hex       = /^[\-+]?0[xX]/;

	module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix){
	  var string = $trim(String(str), 3);
	  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
	} : $parseInt;

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	  , defined = __webpack_require__(37)
	  , fails   = __webpack_require__(9)
	  , spaces  = __webpack_require__(86)
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');

	var exporter = function(KEY, exec, ALIAS){
	  var exp   = {};
	  var FORCE = fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
	  if(ALIAS)exp[ALIAS] = fn;
	  $export($export.P + $export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};

	module.exports = exporter;

/***/ },
/* 86 */
/***/ function(module, exports) {

	module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(10)
	  , $parseFloat = __webpack_require__(88);
	// 18.2.4 parseFloat(string)
	$export($export.G + $export.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var $parseFloat = __webpack_require__(6).parseFloat
	  , $trim       = __webpack_require__(85).trim;

	module.exports = 1 / $parseFloat(__webpack_require__(86) + '-0') !== -Infinity ? function parseFloat(str){
	  var string = $trim(String(str), 3)
	    , result = $parseFloat(string);
	  return result === 0 && string.charAt(0) == '-' ? -0 : result;
	} : $parseFloat;

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(6)
	  , has               = __webpack_require__(7)
	  , cof               = __webpack_require__(36)
	  , inheritIfRequired = __webpack_require__(90)
	  , toPrimitive       = __webpack_require__(18)
	  , fails             = __webpack_require__(9)
	  , gOPN              = __webpack_require__(52).f
	  , gOPD              = __webpack_require__(53).f
	  , dP                = __webpack_require__(13).f
	  , $trim             = __webpack_require__(85).trim
	  , NUMBER            = 'Number'
	  , $Number           = global[NUMBER]
	  , Base              = $Number
	  , proto             = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF        = cof(__webpack_require__(48)(proto)) == NUMBER
	  , TRIM              = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for(var keys = __webpack_require__(8) ? gOPN(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j = 0, key; keys.length > j; j++){
	    if(has(Base, key = keys[j]) && !has($Number, key)){
	      dP($Number, key, gOPD(Base, key));
	    }
	  }
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(20)(global, NUMBER, $Number);
	}

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var isObject       = __webpack_require__(15)
	  , setPrototypeOf = __webpack_require__(75).set;
	module.exports = function(that, target, C){
	  var P, S = target.constructor;
	  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
	    setPrototypeOf(that, P);
	  } return that;
	};

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(10)
	  , toInteger    = __webpack_require__(40)
	  , aNumberValue = __webpack_require__(92)
	  , repeat       = __webpack_require__(93)
	  , $toFixed     = 1..toFixed
	  , floor        = Math.floor
	  , data         = [0, 0, 0, 0, 0, 0]
	  , ERROR        = 'Number.toFixed: incorrect invocation!'
	  , ZERO         = '0';

	var multiply = function(n, c){
	  var i  = -1
	    , c2 = c;
	  while(++i < 6){
	    c2 += n * data[i];
	    data[i] = c2 % 1e7;
	    c2 = floor(c2 / 1e7);
	  }
	};
	var divide = function(n){
	  var i = 6
	    , c = 0;
	  while(--i >= 0){
	    c += data[i];
	    data[i] = floor(c / n);
	    c = (c % n) * 1e7;
	  }
	};
	var numToString = function(){
	  var i = 6
	    , s = '';
	  while(--i >= 0){
	    if(s !== '' || i === 0 || data[i] !== 0){
	      var t = String(data[i]);
	      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
	    }
	  } return s;
	};
	var pow = function(x, n, acc){
	  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
	};
	var log = function(x){
	  var n  = 0
	    , x2 = x;
	  while(x2 >= 4096){
	    n += 12;
	    x2 /= 4096;
	  }
	  while(x2 >= 2){
	    n  += 1;
	    x2 /= 2;
	  } return n;
	};

	$export($export.P + $export.F * (!!$toFixed && (
	  0.00008.toFixed(3) !== '0.000' ||
	  0.9.toFixed(0) !== '1' ||
	  1.255.toFixed(2) !== '1.25' ||
	  1000000000000000128..toFixed(0) !== '1000000000000000128'
	) || !__webpack_require__(9)(function(){
	  // V8 ~ Android 4.3-
	  $toFixed.call({});
	})), 'Number', {
	  toFixed: function toFixed(fractionDigits){
	    var x = aNumberValue(this, ERROR)
	      , f = toInteger(fractionDigits)
	      , s = ''
	      , m = ZERO
	      , e, z, j, k;
	    if(f < 0 || f > 20)throw RangeError(ERROR);
	    if(x != x)return 'NaN';
	    if(x <= -1e21 || x >= 1e21)return String(x);
	    if(x < 0){
	      s = '-';
	      x = -x;
	    }
	    if(x > 1e-21){
	      e = log(x * pow(2, 69, 1)) - 69;
	      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
	      z *= 0x10000000000000;
	      e = 52 - e;
	      if(e > 0){
	        multiply(0, z);
	        j = f;
	        while(j >= 7){
	          multiply(1e7, 0);
	          j -= 7;
	        }
	        multiply(pow(10, j, 1), 0);
	        j = e - 1;
	        while(j >= 23){
	          divide(1 << 23);
	          j -= 23;
	        }
	        divide(1 << j);
	        multiply(1, 1);
	        divide(2);
	        m = numToString();
	      } else {
	        multiply(0, z);
	        multiply(1 << -e, 0);
	        m = numToString() + repeat.call(ZERO, f);
	      }
	    }
	    if(f > 0){
	      k = m.length;
	      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
	    } else {
	      m = s + m;
	    } return m;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var cof = __webpack_require__(36);
	module.exports = function(it, msg){
	  if(typeof it != 'number' && cof(it) != 'Number')throw TypeError(msg);
	  return +it;
	};

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(40)
	  , defined   = __webpack_require__(37);

	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(10)
	  , $fails       = __webpack_require__(9)
	  , aNumberValue = __webpack_require__(92)
	  , $toPrecision = 1..toPrecision;

	$export($export.P + $export.F * ($fails(function(){
	  // IE7-
	  return $toPrecision.call(1, undefined) !== '1';
	}) || !$fails(function(){
	  // V8 ~ Android 4.3-
	  $toPrecision.call({});
	})), 'Number', {
	  toPrecision: function toPrecision(precision){
	    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
	    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(10)
	  , _isFinite = __webpack_require__(6).isFinite;

	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {isInteger: __webpack_require__(98)});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(15)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(10)
	  , isInteger = __webpack_require__(98)
	  , abs       = Math.abs;

	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(10);

	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var $export     = __webpack_require__(10)
	  , $parseFloat = __webpack_require__(88);
	// 20.1.2.12 Number.parseFloat(string)
	$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {parseFloat: $parseFloat});

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(10)
	  , $parseInt = __webpack_require__(84);
	// 20.1.2.13 Number.parseInt(string, radix)
	$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {parseInt: $parseInt});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(10)
	  , log1p   = __webpack_require__(106)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;

	$export($export.S + $export.F * !($acosh
	  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
	  && Math.floor($acosh(Number.MAX_VALUE)) == 710
	  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
	  && $acosh(Infinity) == Infinity
	), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(10)
	  , $asinh  = Math.asinh;

	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}

	// Tor Browser bug: Math.asinh(0) -> -0 
	$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(10)
	  , $atanh  = Math.atanh;

	// Tor Browser bug: Math.atanh(-0) -> 0 
	$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(10)
	  , sign    = __webpack_require__(110);

	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(10)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(10)
	  , $expm1  = __webpack_require__(114);

	$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

/***/ },
/* 114 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	var $expm1 = Math.expm1;
	module.exports = (!$expm1
	  // Old FF bug
	  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
	  // Tor Browser bug
	  || $expm1(-2e-17) != -2e-17
	) ? function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	} : $expm1;

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(10)
	  , sign      = __webpack_require__(110)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);

	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};


	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(10)
	  , abs     = Math.abs;

	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum  = 0
	      , i    = 0
	      , aLen = arguments.length
	      , larg = 0
	      , arg, div;
	    while(i < aLen){
	      arg = abs(arguments[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(10)
	  , $imul   = Math.imul;

	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(9)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {log1p: __webpack_require__(106)});

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {sign: __webpack_require__(110)});

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(10)
	  , expm1   = __webpack_require__(114)
	  , exp     = Math.exp;

	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(9)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(10)
	  , expm1   = __webpack_require__(114)
	  , exp     = Math.exp;

	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(10)
	  , toIndex        = __webpack_require__(41)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;

	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res  = []
	      , aLen = arguments.length
	      , i    = 0
	      , code;
	    while(aLen > i){
	      code = +arguments[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(10)
	  , toIObject = __webpack_require__(34)
	  , toLength  = __webpack_require__(39);

	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl  = toIObject(callSite.raw)
	      , len  = toLength(tpl.length)
	      , aLen = arguments.length
	      , res  = []
	      , i    = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < aLen)res.push(String(arguments[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(85)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(129)(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(130)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(40)
	  , defined   = __webpack_require__(37);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(30)
	  , $export        = __webpack_require__(10)
	  , redefine       = __webpack_require__(20)
	  , hide           = __webpack_require__(12)
	  , has            = __webpack_require__(7)
	  , Iterators      = __webpack_require__(131)
	  , $iterCreate    = __webpack_require__(132)
	  , setToStringTag = __webpack_require__(26)
	  , getPrototypeOf = __webpack_require__(61)
	  , ITERATOR       = __webpack_require__(27)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';

	var returnThis = function(){ return this; };

	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(48)
	  , descriptor     = __webpack_require__(19)
	  , setToStringTag = __webpack_require__(26)
	  , IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(12)(IteratorPrototype, __webpack_require__(27)('iterator'), function(){ return this; });

	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $at     = __webpack_require__(129)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(10)
	  , toLength  = __webpack_require__(39)
	  , context   = __webpack_require__(135)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];

	$export($export.P + $export.F * __webpack_require__(137)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , endPosition = arguments.length > 1 ? arguments[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(136)
	  , defined  = __webpack_require__(37);

	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(15)
	  , cof      = __webpack_require__(36)
	  , MATCH    = __webpack_require__(27)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(27)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(10)
	  , context  = __webpack_require__(135)
	  , INCLUDES = 'includes';

	$export($export.P + $export.F * __webpack_require__(137)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);

	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(93)
	});

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(10)
	  , toLength    = __webpack_require__(39)
	  , context     = __webpack_require__(135)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];

	$export($export.P + $export.F * __webpack_require__(137)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.2 String.prototype.anchor(name)
	__webpack_require__(142)('anchor', function(createHTML){
	  return function anchor(name){
	    return createHTML(this, 'a', 'name', name);
	  }
	});

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	  , fails   = __webpack_require__(9)
	  , defined = __webpack_require__(37)
	  , quot    = /"/g;
	// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
	var createHTML = function(string, tag, attribute, value) {
	  var S  = String(defined(string))
	    , p1 = '<' + tag;
	  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
	  return p1 + '>' + S + '</' + tag + '>';
	};
	module.exports = function(NAME, exec){
	  var O = {};
	  O[NAME] = exec(createHTML);
	  $export($export.P + $export.F * fails(function(){
	    var test = ''[NAME]('"');
	    return test !== test.toLowerCase() || test.split('"').length > 3;
	  }), 'String', O);
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.3 String.prototype.big()
	__webpack_require__(142)('big', function(createHTML){
	  return function big(){
	    return createHTML(this, 'big', '', '');
	  }
	});

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.4 String.prototype.blink()
	__webpack_require__(142)('blink', function(createHTML){
	  return function blink(){
	    return createHTML(this, 'blink', '', '');
	  }
	});

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.5 String.prototype.bold()
	__webpack_require__(142)('bold', function(createHTML){
	  return function bold(){
	    return createHTML(this, 'b', '', '');
	  }
	});

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.6 String.prototype.fixed()
	__webpack_require__(142)('fixed', function(createHTML){
	  return function fixed(){
	    return createHTML(this, 'tt', '', '');
	  }
	});

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.7 String.prototype.fontcolor(color)
	__webpack_require__(142)('fontcolor', function(createHTML){
	  return function fontcolor(color){
	    return createHTML(this, 'font', 'color', color);
	  }
	});

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.8 String.prototype.fontsize(size)
	__webpack_require__(142)('fontsize', function(createHTML){
	  return function fontsize(size){
	    return createHTML(this, 'font', 'size', size);
	  }
	});

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.9 String.prototype.italics()
	__webpack_require__(142)('italics', function(createHTML){
	  return function italics(){
	    return createHTML(this, 'i', '', '');
	  }
	});

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.10 String.prototype.link(url)
	__webpack_require__(142)('link', function(createHTML){
	  return function link(url){
	    return createHTML(this, 'a', 'href', url);
	  }
	});

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.11 String.prototype.small()
	__webpack_require__(142)('small', function(createHTML){
	  return function small(){
	    return createHTML(this, 'small', '', '');
	  }
	});

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.12 String.prototype.strike()
	__webpack_require__(142)('strike', function(createHTML){
	  return function strike(){
	    return createHTML(this, 'strike', '', '');
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.13 String.prototype.sub()
	__webpack_require__(142)('sub', function(createHTML){
	  return function sub(){
	    return createHTML(this, 'sub', '', '');
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// B.2.3.14 String.prototype.sup()
	__webpack_require__(142)('sup', function(createHTML){
	  return function sup(){
	    return createHTML(this, 'sup', '', '');
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 20.3.3.1 / 15.9.4.4 Date.now()
	var $export = __webpack_require__(10);

	$export($export.S, 'Date', {now: function(){ return new Date().getTime(); }});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export     = __webpack_require__(10)
	  , toObject    = __webpack_require__(60)
	  , toPrimitive = __webpack_require__(18);

	$export($export.P + $export.F * __webpack_require__(9)(function(){
	  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
	}), 'Date', {
	  toJSON: function toJSON(key){
	    var O  = toObject(this)
	      , pv = toPrimitive(O);
	    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	var $export = __webpack_require__(10)
	  , fails   = __webpack_require__(9)
	  , getTime = Date.prototype.getTime;

	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};

	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var DateProto    = Date.prototype
	  , INVALID_DATE = 'Invalid Date'
	  , TO_STRING    = 'toString'
	  , $toString    = DateProto[TO_STRING]
	  , getTime      = DateProto.getTime;
	if(new Date(NaN) + '' != INVALID_DATE){
	  __webpack_require__(20)(DateProto, TO_STRING, function toString(){
	    var value = getTime.call(this);
	    return value === value ? $toString.call(this) : INVALID_DATE;
	  });
	}

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var TO_PRIMITIVE = __webpack_require__(27)('toPrimitive')
	  , proto        = Date.prototype;

	if(!(TO_PRIMITIVE in proto))__webpack_require__(12)(proto, TO_PRIMITIVE, __webpack_require__(160));

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var anObject    = __webpack_require__(14)
	  , toPrimitive = __webpack_require__(18)
	  , NUMBER      = 'number';

	module.exports = function(hint){
	  if(hint !== 'string' && hint !== NUMBER && hint !== 'default')throw TypeError('Incorrect hint');
	  return toPrimitive(anObject(this), hint != NUMBER);
	};

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	var $export = __webpack_require__(10);

	$export($export.S, 'Array', {isArray: __webpack_require__(47)});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx            = __webpack_require__(22)
	  , $export        = __webpack_require__(10)
	  , toObject       = __webpack_require__(60)
	  , call           = __webpack_require__(163)
	  , isArrayIter    = __webpack_require__(164)
	  , toLength       = __webpack_require__(39)
	  , createProperty = __webpack_require__(165)
	  , getIterFn      = __webpack_require__(166);

	$export($export.S + $export.F * !__webpack_require__(167)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(14);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(131)
	  , ITERATOR   = __webpack_require__(27)('iterator')
	  , ArrayProto = Array.prototype;

	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $defineProperty = __webpack_require__(13)
	  , createDesc      = __webpack_require__(19);

	module.exports = function(object, index, value){
	  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
	  else object[index] = value;
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(77)
	  , ITERATOR  = __webpack_require__(27)('iterator')
	  , Iterators = __webpack_require__(131);
	module.exports = __webpack_require__(11).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(27)('iterator')
	  , SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }

	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export        = __webpack_require__(10)
	  , createProperty = __webpack_require__(165);

	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(9)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , aLen   = arguments.length
	      , result = new (typeof this == 'function' ? this : Array)(aLen);
	    while(aLen > index)createProperty(result, index, arguments[index++]);
	    result.length = aLen;
	    return result;
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.13 Array.prototype.join(separator)
	var $export   = __webpack_require__(10)
	  , toIObject = __webpack_require__(34)
	  , arrayJoin = [].join;

	// fallback for not array-like strings
	$export($export.P + $export.F * (__webpack_require__(35) != Object || !__webpack_require__(170)(arrayJoin)), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var fails = __webpack_require__(9);

	module.exports = function(method, arg){
	  return !!method && fails(function(){
	    arg ? method.call(null, function(){}, 1) : method.call(null);
	  });
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export    = __webpack_require__(10)
	  , html       = __webpack_require__(50)
	  , cof        = __webpack_require__(36)
	  , toIndex    = __webpack_require__(41)
	  , toLength   = __webpack_require__(39)
	  , arraySlice = [].slice;

	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * __webpack_require__(9)(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function slice(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(10)
	  , aFunction = __webpack_require__(23)
	  , toObject  = __webpack_require__(60)
	  , fails     = __webpack_require__(9)
	  , $sort     = [].sort
	  , test      = [1, 2, 3];

	$export($export.P + $export.F * (fails(function(){
	  // IE8-
	  test.sort(undefined);
	}) || !fails(function(){
	  // V8 bug
	  test.sort(null);
	  // Old WebKit
	}) || !__webpack_require__(170)($sort)), 'Array', {
	  // 22.1.3.25 Array.prototype.sort(comparefn)
	  sort: function sort(comparefn){
	    return comparefn === undefined
	      ? $sort.call(toObject(this))
	      : $sort.call(toObject(this), aFunction(comparefn));
	  }
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export  = __webpack_require__(10)
	  , $forEach = __webpack_require__(174)(0)
	  , STRICT   = __webpack_require__(170)([].forEach, true);

	$export($export.P + $export.F * !STRICT, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: function forEach(callbackfn /* , thisArg */){
	    return $forEach(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(22)
	  , IObject  = __webpack_require__(35)
	  , toObject = __webpack_require__(60)
	  , toLength = __webpack_require__(39)
	  , asc      = __webpack_require__(175);
	module.exports = function(TYPE, $create){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
	    , create        = $create || asc;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var speciesConstructor = __webpack_require__(176);

	module.exports = function(original, length){
	  return new (speciesConstructor(original))(length);
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(15)
	  , isArray  = __webpack_require__(47)
	  , SPECIES  = __webpack_require__(27)('species');

	module.exports = function(original){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $map    = __webpack_require__(174)(1);

	$export($export.P + $export.F * !__webpack_require__(170)([].map, true), 'Array', {
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: function map(callbackfn /* , thisArg */){
	    return $map(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $filter = __webpack_require__(174)(2);

	$export($export.P + $export.F * !__webpack_require__(170)([].filter, true), 'Array', {
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: function filter(callbackfn /* , thisArg */){
	    return $filter(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $some   = __webpack_require__(174)(3);

	$export($export.P + $export.F * !__webpack_require__(170)([].some, true), 'Array', {
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: function some(callbackfn /* , thisArg */){
	    return $some(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $every  = __webpack_require__(174)(4);

	$export($export.P + $export.F * !__webpack_require__(170)([].every, true), 'Array', {
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: function every(callbackfn /* , thisArg */){
	    return $every(this, callbackfn, arguments[1]);
	  }
	});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $reduce = __webpack_require__(182);

	$export($export.P + $export.F * !__webpack_require__(170)([].reduce, true), 'Array', {
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: function reduce(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
	  }
	});

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var aFunction = __webpack_require__(23)
	  , toObject  = __webpack_require__(60)
	  , IObject   = __webpack_require__(35)
	  , toLength  = __webpack_require__(39);

	module.exports = function(that, callbackfn, aLen, memo, isRight){
	  aFunction(callbackfn);
	  var O      = toObject(that)
	    , self   = IObject(O)
	    , length = toLength(O.length)
	    , index  = isRight ? length - 1 : 0
	    , i      = isRight ? -1 : 1;
	  if(aLen < 2)for(;;){
	    if(index in self){
	      memo = self[index];
	      index += i;
	      break;
	    }
	    index += i;
	    if(isRight ? index < 0 : length <= index){
	      throw TypeError('Reduce of empty array with no initial value');
	    }
	  }
	  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
	    memo = callbackfn(memo, self[index], index, O);
	  }
	  return memo;
	};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(10)
	  , $reduce = __webpack_require__(182);

	$export($export.P + $export.F * !__webpack_require__(170)([].reduceRight, true), 'Array', {
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: function reduceRight(callbackfn /* , initialValue */){
	    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
	  }
	});

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(10)
	  , $indexOf      = __webpack_require__(38)(false)
	  , $native       = [].indexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
	    return NEGATIVE_ZERO
	      // convert -0 to +0
	      ? $native.apply(this, arguments) || 0
	      : $indexOf(this, searchElement, arguments[1]);
	  }
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export       = __webpack_require__(10)
	  , toIObject     = __webpack_require__(34)
	  , toInteger     = __webpack_require__(40)
	  , toLength      = __webpack_require__(39)
	  , $native       = [].lastIndexOf
	  , NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

	$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(170)($native)), 'Array', {
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
	    // convert -0 to +0
	    if(NEGATIVE_ZERO)return $native.apply(this, arguments) || 0;
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(arguments[1]));
	    if(index < 0)index = length + index;
	    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
	    return -1;
	  }
	});

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(10);

	$export($export.P, 'Array', {copyWithin: __webpack_require__(187)});

	__webpack_require__(188)('copyWithin');

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(60)
	  , toIndex  = __webpack_require__(41)
	  , toLength = __webpack_require__(39);

	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , end   = arguments.length > 2 ? arguments[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(27)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(12)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(10);

	$export($export.P, 'Array', {fill: __webpack_require__(190)});

	__webpack_require__(188)('fill');

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(60)
	  , toIndex  = __webpack_require__(41)
	  , toLength = __webpack_require__(39);
	module.exports = function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , aLen   = arguments.length
	    , index  = toIndex(aLen > 1 ? arguments[1] : undefined, length)
	    , end    = aLen > 2 ? arguments[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(10)
	  , $find   = __webpack_require__(174)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(188)(KEY);

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(10)
	  , $find   = __webpack_require__(174)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(188)(KEY);

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(194)('Array');

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , dP          = __webpack_require__(13)
	  , DESCRIPTORS = __webpack_require__(8)
	  , SPECIES     = __webpack_require__(27)('species');

	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(188)
	  , step             = __webpack_require__(196)
	  , Iterators        = __webpack_require__(131)
	  , toIObject        = __webpack_require__(34);

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(130)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;

	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 196 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var global            = __webpack_require__(6)
	  , inheritIfRequired = __webpack_require__(90)
	  , dP                = __webpack_require__(13).f
	  , gOPN              = __webpack_require__(52).f
	  , isRegExp          = __webpack_require__(136)
	  , $flags            = __webpack_require__(198)
	  , $RegExp           = global.RegExp
	  , Base              = $RegExp
	  , proto             = $RegExp.prototype
	  , re1               = /a/g
	  , re2               = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW       = new $RegExp(re1) !== re1;

	if(__webpack_require__(8) && (!CORRECT_NEW || __webpack_require__(9)(function(){
	  re2[__webpack_require__(27)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var tiRE = this instanceof $RegExp
	      , piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
	      : inheritIfRequired(CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
	      , tiRE ? this : proto, $RegExp);
	  };
	  var proxy = function(key){
	    key in $RegExp || dP($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  };
	  for(var keys = gOPN(Base), i = 0; keys.length > i; )proxy(keys[i++]);
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(20)(global, 'RegExp', $RegExp);
	}

	__webpack_require__(194)('RegExp');

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(14);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	__webpack_require__(200);
	var anObject    = __webpack_require__(14)
	  , $flags      = __webpack_require__(198)
	  , DESCRIPTORS = __webpack_require__(8)
	  , TO_STRING   = 'toString'
	  , $toString   = /./[TO_STRING];

	var define = function(fn){
	  __webpack_require__(20)(RegExp.prototype, TO_STRING, fn, true);
	};

	// 21.2.5.14 RegExp.prototype.toString()
	if(__webpack_require__(9)(function(){ return $toString.call({source: 'a', flags: 'b'}) != '/a/b'; })){
	  define(function toString(){
	    var R = anObject(this);
	    return '/'.concat(R.source, '/',
	      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
	  });
	// FF44- RegExp#toString has a wrong name
	} else if($toString.name != TO_STRING){
	  define(function toString(){
	    return $toString.call(this);
	  });
	}

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	if(__webpack_require__(8) && /./g.flags != 'g')__webpack_require__(13).f(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(198)
	});

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(202)('match', 1, function(defined, MATCH, $match){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return [function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  }, $match];
	});

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(12)
	  , redefine = __webpack_require__(20)
	  , fails    = __webpack_require__(9)
	  , defined  = __webpack_require__(37)
	  , wks      = __webpack_require__(27);

	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , fns      = exec(defined, SYMBOL, ''[KEY])
	    , strfn    = fns[0]
	    , rxfn     = fns[1];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, strfn);
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return rxfn.call(string, this); }
	    );
	  }
	};

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(202)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(202)('search', 1, function(defined, SEARCH, $search){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(202)('split', 2, function(defined, SPLIT, $split){
	  'use strict';
	  var isRegExp   = __webpack_require__(136)
	    , _split     = $split
	    , $push      = [].push
	    , $SPLIT     = 'split'
	    , LENGTH     = 'length'
	    , LAST_INDEX = 'lastIndex';
	  if(
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ){
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function(separator, limit){
	      var string = String(this);
	      if(separator === undefined && limit === 0)return [];
	      // If `separator` is not a regex, use native split
	      if(!isRegExp(separator))return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while(match = separatorCopy.exec(string)){
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if(lastIndex > lastLastIndex){
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
	            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
	          });
	          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if(output[LENGTH] >= splitLimit)break;
	        }
	        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if(lastLastIndex === string[LENGTH]){
	        if(lastLength || !separatorCopy.test(''))output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
	    $split = function(separator, limit){
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit){
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(30)
	  , global             = __webpack_require__(6)
	  , ctx                = __webpack_require__(22)
	  , classof            = __webpack_require__(77)
	  , $export            = __webpack_require__(10)
	  , isObject           = __webpack_require__(15)
	  , aFunction          = __webpack_require__(23)
	  , anInstance         = __webpack_require__(207)
	  , forOf              = __webpack_require__(208)
	  , speciesConstructor = __webpack_require__(209)
	  , task               = __webpack_require__(210).set
	  , microtask          = __webpack_require__(211)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;

	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(27)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();

	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};

	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(212)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}

	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(26)($Promise, PROMISE);
	__webpack_require__(194)(PROMISE);
	Wrapper = __webpack_require__(11)[PROMISE];

	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(167)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 207 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(22)
	  , call        = __webpack_require__(163)
	  , isArrayIter = __webpack_require__(164)
	  , anObject    = __webpack_require__(14)
	  , toLength    = __webpack_require__(39)
	  , getIterFn   = __webpack_require__(166)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(14)
	  , aFunction = __webpack_require__(23)
	  , SPECIES   = __webpack_require__(27)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(22)
	  , invoke             = __webpack_require__(80)
	  , html               = __webpack_require__(50)
	  , cel                = __webpack_require__(17)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(36)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(210).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(36)(process) == 'process';

	module.exports = function(){
	  var head, last, notify;

	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };

	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }

	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(20);
	module.exports = function(target, src, safe){
	  for(var key in src)redefine(target, key, src[key], safe);
	  return target;
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(214);

	// 23.1 Map Objects
	module.exports = __webpack_require__(215)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var dP          = __webpack_require__(13).f
	  , create      = __webpack_require__(48)
	  , redefineAll = __webpack_require__(212)
	  , ctx         = __webpack_require__(22)
	  , anInstance  = __webpack_require__(207)
	  , defined     = __webpack_require__(37)
	  , forOf       = __webpack_require__(208)
	  , $iterDefine = __webpack_require__(130)
	  , step        = __webpack_require__(196)
	  , setSpecies  = __webpack_require__(194)
	  , DESCRIPTORS = __webpack_require__(8)
	  , fastKey     = __webpack_require__(24).fastKey
	  , SIZE        = DESCRIPTORS ? '_s' : 'size';

	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = create(null); // index
	      that._f = undefined;    // first entry
	      that._l = undefined;    // last entry
	      that[SIZE] = 0;         // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        anInstance(this, C, 'forEach');
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)dP(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global            = __webpack_require__(6)
	  , $export           = __webpack_require__(10)
	  , redefine          = __webpack_require__(20)
	  , redefineAll       = __webpack_require__(212)
	  , meta              = __webpack_require__(24)
	  , forOf             = __webpack_require__(208)
	  , anInstance        = __webpack_require__(207)
	  , isObject          = __webpack_require__(15)
	  , fails             = __webpack_require__(9)
	  , $iterDetect       = __webpack_require__(167)
	  , setToStringTag    = __webpack_require__(26)
	  , inheritIfRequired = __webpack_require__(90);

	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	    meta.NEED = true;
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO = !IS_WEAK && fails(function(){
	        // V8 ~ Chromium 42- fails only with 5+ elements
	        var $instance = new C()
	          , index     = 5;
	        while(index--)$instance[ADDER](index, index);
	        return !$instance.has(-0);
	      });
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        anInstance(target, C, NAME);
	        var that = inheritIfRequired(new Base, target, C);
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }

	  setToStringTag(C, NAME);

	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);

	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

	  return C;
	};

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(214);

	// 23.2 Set Objects
	module.exports = __webpack_require__(215)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var each         = __webpack_require__(174)(0)
	  , redefine     = __webpack_require__(20)
	  , meta         = __webpack_require__(24)
	  , assign       = __webpack_require__(71)
	  , weak         = __webpack_require__(218)
	  , isObject     = __webpack_require__(15)
	  , getWeak      = meta.getWeak
	  , isExtensible = Object.isExtensible
	  , uncaughtFrozenStore = weak.ufstore
	  , tmp          = {}
	  , InternalMap;

	var wrapper = function(get){
	  return function WeakMap(){
	    return get(this, arguments.length > 0 ? arguments[0] : undefined);
	  };
	};

	var methods = {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      var data = getWeak(key);
	      if(data === true)return uncaughtFrozenStore(this).get(key);
	      return data ? data[this._i] : undefined;
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	};

	// 23.3 WeakMap Objects
	var $WeakMap = module.exports = __webpack_require__(215)('WeakMap', wrapper, methods, weak, true, true);

	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  InternalMap = weak.getConstructor(wrapper);
	  assign(InternalMap.prototype, methods);
	  meta.NEED = true;
	  each(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on internal weakmap shim
	      if(isObject(a) && !isExtensible(a)){
	        if(!this._f)this._f = new InternalMap;
	        var result = this._f[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var redefineAll       = __webpack_require__(212)
	  , getWeak           = __webpack_require__(24).getWeak
	  , anObject          = __webpack_require__(14)
	  , isObject          = __webpack_require__(15)
	  , anInstance        = __webpack_require__(207)
	  , forOf             = __webpack_require__(208)
	  , createArrayMethod = __webpack_require__(174)
	  , $has              = __webpack_require__(7)
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;

	// fallback for uncaught frozen keys
	var uncaughtFrozenStore = function(that){
	  return that._l || (that._l = new UncaughtFrozenStore);
	};
	var UncaughtFrozenStore = function(){
	  this.a = [];
	};
	var findUncaughtFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	UncaughtFrozenStore.prototype = {
	  get: function(key){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findUncaughtFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findUncaughtFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};

	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      anInstance(that, C, NAME, '_i');
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for uncaught frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
	        return data && $has(data, this._i) && delete data[this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        var data = getWeak(key);
	        if(data === true)return uncaughtFrozenStore(this).has(key);
	        return data && $has(data, this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var data = getWeak(anObject(key), true);
	    if(data === true)uncaughtFrozenStore(that).set(key, value);
	    else data[that._i] = value;
	    return that;
	  },
	  ufstore: uncaughtFrozenStore
	};

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(218);

	// 23.4 WeakSet Objects
	__webpack_require__(215)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export      = __webpack_require__(10)
	  , $typed       = __webpack_require__(221)
	  , buffer       = __webpack_require__(222)
	  , anObject     = __webpack_require__(14)
	  , toIndex      = __webpack_require__(41)
	  , toLength     = __webpack_require__(39)
	  , isObject     = __webpack_require__(15)
	  , ArrayBuffer  = __webpack_require__(6).ArrayBuffer
	  , speciesConstructor = __webpack_require__(209)
	  , $ArrayBuffer = buffer.ArrayBuffer
	  , $DataView    = buffer.DataView
	  , $isView      = $typed.ABV && ArrayBuffer.isView
	  , $slice       = $ArrayBuffer.prototype.slice
	  , VIEW         = $typed.VIEW
	  , ARRAY_BUFFER = 'ArrayBuffer';

	$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

	$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
	  // 24.1.3.1 ArrayBuffer.isView(arg)
	  isView: function isView(it){
	    return $isView && $isView(it) || isObject(it) && VIEW in it;
	  }
	});

	$export($export.P + $export.U + $export.F * __webpack_require__(9)(function(){
	  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
	}), ARRAY_BUFFER, {
	  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
	  slice: function slice(start, end){
	    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
	    var len    = anObject(this).byteLength
	      , first  = toIndex(start, len)
	      , final  = toIndex(end === undefined ? len : end, len)
	      , result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first))
	      , viewS  = new $DataView(this)
	      , viewT  = new $DataView(result)
	      , index  = 0;
	    while(first < final){
	      viewT.setUint8(index++, viewS.getUint8(first++));
	    } return result;
	  }
	});

	__webpack_require__(194)(ARRAY_BUFFER);

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , hide   = __webpack_require__(12)
	  , uid    = __webpack_require__(21)
	  , TYPED  = uid('typed_array')
	  , VIEW   = uid('view')
	  , ABV    = !!(global.ArrayBuffer && global.DataView)
	  , CONSTR = ABV
	  , i = 0, l = 9, Typed;

	var TypedArrayConstructors = (
	  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
	).split(',');

	while(i < l){
	  if(Typed = global[TypedArrayConstructors[i++]]){
	    hide(Typed.prototype, TYPED, true);
	    hide(Typed.prototype, VIEW, true);
	  } else CONSTR = false;
	}

	module.exports = {
	  ABV:    ABV,
	  CONSTR: CONSTR,
	  TYPED:  TYPED,
	  VIEW:   VIEW
	};

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , DESCRIPTORS    = __webpack_require__(8)
	  , LIBRARY        = __webpack_require__(30)
	  , $typed         = __webpack_require__(221)
	  , hide           = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(212)
	  , fails          = __webpack_require__(9)
	  , anInstance     = __webpack_require__(207)
	  , toInteger      = __webpack_require__(40)
	  , toLength       = __webpack_require__(39)
	  , gOPN           = __webpack_require__(52).f
	  , dP             = __webpack_require__(13).f
	  , arrayFill      = __webpack_require__(190)
	  , setToStringTag = __webpack_require__(26)
	  , ARRAY_BUFFER   = 'ArrayBuffer'
	  , DATA_VIEW      = 'DataView'
	  , PROTOTYPE      = 'prototype'
	  , WRONG_LENGTH   = 'Wrong length!'
	  , WRONG_INDEX    = 'Wrong index!'
	  , $ArrayBuffer   = global[ARRAY_BUFFER]
	  , $DataView      = global[DATA_VIEW]
	  , Math           = global.Math
	  , RangeError     = global.RangeError
	  , Infinity       = global.Infinity
	  , BaseBuffer     = $ArrayBuffer
	  , abs            = Math.abs
	  , pow            = Math.pow
	  , floor          = Math.floor
	  , log            = Math.log
	  , LN2            = Math.LN2
	  , BUFFER         = 'buffer'
	  , BYTE_LENGTH    = 'byteLength'
	  , BYTE_OFFSET    = 'byteOffset'
	  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
	  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
	  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

	// IEEE754 conversions based on https://github.com/feross/ieee754
	var packIEEE754 = function(value, mLen, nBytes){
	  var buffer = Array(nBytes)
	    , eLen   = nBytes * 8 - mLen - 1
	    , eMax   = (1 << eLen) - 1
	    , eBias  = eMax >> 1
	    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
	    , i      = 0
	    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
	    , e, m, c;
	  value = abs(value)
	  if(value != value || value === Infinity){
	    m = value != value ? 1 : 0;
	    e = eMax;
	  } else {
	    e = floor(log(value) / LN2);
	    if(value * (c = pow(2, -e)) < 1){
	      e--;
	      c *= 2;
	    }
	    if(e + eBias >= 1){
	      value += rt / c;
	    } else {
	      value += rt * pow(2, 1 - eBias);
	    }
	    if(value * c >= 2){
	      e++;
	      c /= 2;
	    }
	    if(e + eBias >= eMax){
	      m = 0;
	      e = eMax;
	    } else if(e + eBias >= 1){
	      m = (value * c - 1) * pow(2, mLen);
	      e = e + eBias;
	    } else {
	      m = value * pow(2, eBias - 1) * pow(2, mLen);
	      e = 0;
	    }
	  }
	  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
	  e = e << mLen | m;
	  eLen += mLen;
	  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
	  buffer[--i] |= s * 128;
	  return buffer;
	};
	var unpackIEEE754 = function(buffer, mLen, nBytes){
	  var eLen  = nBytes * 8 - mLen - 1
	    , eMax  = (1 << eLen) - 1
	    , eBias = eMax >> 1
	    , nBits = eLen - 7
	    , i     = nBytes - 1
	    , s     = buffer[i--]
	    , e     = s & 127
	    , m;
	  s >>= 7;
	  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
	  m = e & (1 << -nBits) - 1;
	  e >>= -nBits;
	  nBits += mLen;
	  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
	  if(e === 0){
	    e = 1 - eBias;
	  } else if(e === eMax){
	    return m ? NaN : s ? -Infinity : Infinity;
	  } else {
	    m = m + pow(2, mLen);
	    e = e - eBias;
	  } return (s ? -1 : 1) * m * pow(2, e - mLen);
	};

	var unpackI32 = function(bytes){
	  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
	};
	var packI8 = function(it){
	  return [it & 0xff];
	};
	var packI16 = function(it){
	  return [it & 0xff, it >> 8 & 0xff];
	};
	var packI32 = function(it){
	  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
	};
	var packF64 = function(it){
	  return packIEEE754(it, 52, 8);
	};
	var packF32 = function(it){
	  return packIEEE754(it, 23, 4);
	};

	var addGetter = function(C, key, internal){
	  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
	};

	var get = function(view, bytes, index, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = store.slice(start, start + bytes);
	  return isLittleEndian ? pack : pack.reverse();
	};
	var set = function(view, bytes, index, conversion, value, isLittleEndian){
	  var numIndex = +index
	    , intIndex = toInteger(numIndex);
	  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
	  var store = view[$BUFFER]._b
	    , start = intIndex + view[$OFFSET]
	    , pack  = conversion(+value);
	  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
	};

	var validateArrayBufferArguments = function(that, length){
	  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
	  var numberLength = +length
	    , byteLength   = toLength(numberLength);
	  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
	  return byteLength;
	};

	if(!$typed.ABV){
	  $ArrayBuffer = function ArrayBuffer(length){
	    var byteLength = validateArrayBufferArguments(this, length);
	    this._b       = arrayFill.call(Array(byteLength), 0);
	    this[$LENGTH] = byteLength;
	  };

	  $DataView = function DataView(buffer, byteOffset, byteLength){
	    anInstance(this, $DataView, DATA_VIEW);
	    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
	    var bufferLength = buffer[$LENGTH]
	      , offset       = toInteger(byteOffset);
	    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
	    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
	    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
	    this[$BUFFER] = buffer;
	    this[$OFFSET] = offset;
	    this[$LENGTH] = byteLength;
	  };

	  if(DESCRIPTORS){
	    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
	    addGetter($DataView, BUFFER, '_b');
	    addGetter($DataView, BYTE_LENGTH, '_l');
	    addGetter($DataView, BYTE_OFFSET, '_o');
	  }

	  redefineAll($DataView[PROTOTYPE], {
	    getInt8: function getInt8(byteOffset){
	      return get(this, 1, byteOffset)[0] << 24 >> 24;
	    },
	    getUint8: function getUint8(byteOffset){
	      return get(this, 1, byteOffset)[0];
	    },
	    getInt16: function getInt16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
	    },
	    getUint16: function getUint16(byteOffset /*, littleEndian */){
	      var bytes = get(this, 2, byteOffset, arguments[1]);
	      return bytes[1] << 8 | bytes[0];
	    },
	    getInt32: function getInt32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1]));
	    },
	    getUint32: function getUint32(byteOffset /*, littleEndian */){
	      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
	    },
	    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
	    },
	    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
	      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
	    },
	    setInt8: function setInt8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      set(this, 1, byteOffset, packI8, value);
	    },
	    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
	      set(this, 2, byteOffset, packI16, value, arguments[2]);
	    },
	    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packI32, value, arguments[2]);
	    },
	    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
	      set(this, 4, byteOffset, packF32, value, arguments[2]);
	    },
	    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
	      set(this, 8, byteOffset, packF64, value, arguments[2]);
	    }
	  });
	} else {
	  if(!fails(function(){
	    new $ArrayBuffer;     // eslint-disable-line no-new
	  }) || !fails(function(){
	    new $ArrayBuffer(.5); // eslint-disable-line no-new
	  })){
	    $ArrayBuffer = function ArrayBuffer(length){
	      return new BaseBuffer(validateArrayBufferArguments(this, length));
	    };
	    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
	    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
	      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
	    };
	    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
	  }
	  // iOS Safari 7.x bug
	  var view = new $DataView(new $ArrayBuffer(2))
	    , $setInt8 = $DataView[PROTOTYPE].setInt8;
	  view.setInt8(0, 2147483648);
	  view.setInt8(1, 2147483649);
	  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
	    setInt8: function setInt8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    },
	    setUint8: function setUint8(byteOffset, value){
	      $setInt8.call(this, byteOffset, value << 24 >> 24);
	    }
	  }, true);
	}
	setToStringTag($ArrayBuffer, ARRAY_BUFFER);
	setToStringTag($DataView, DATA_VIEW);
	hide($DataView[PROTOTYPE], $typed.VIEW, true);
	exports[ARRAY_BUFFER] = $ArrayBuffer;
	exports[DATA_VIEW] = $DataView;

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10);
	$export($export.G + $export.W + $export.F * !__webpack_require__(221).ABV, {
	  DataView: __webpack_require__(222).DataView
	});

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Int8', 1, function(init){
	  return function Int8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	if(__webpack_require__(8)){
	  var LIBRARY             = __webpack_require__(30)
	    , global              = __webpack_require__(6)
	    , fails               = __webpack_require__(9)
	    , $export             = __webpack_require__(10)
	    , $typed              = __webpack_require__(221)
	    , $buffer             = __webpack_require__(222)
	    , ctx                 = __webpack_require__(22)
	    , anInstance          = __webpack_require__(207)
	    , propertyDesc        = __webpack_require__(19)
	    , hide                = __webpack_require__(12)
	    , redefineAll         = __webpack_require__(212)
	    , toInteger           = __webpack_require__(40)
	    , toLength            = __webpack_require__(39)
	    , toIndex             = __webpack_require__(41)
	    , toPrimitive         = __webpack_require__(18)
	    , has                 = __webpack_require__(7)
	    , same                = __webpack_require__(73)
	    , classof             = __webpack_require__(77)
	    , isObject            = __webpack_require__(15)
	    , toObject            = __webpack_require__(60)
	    , isArrayIter         = __webpack_require__(164)
	    , create              = __webpack_require__(48)
	    , getPrototypeOf      = __webpack_require__(61)
	    , gOPN                = __webpack_require__(52).f
	    , getIterFn           = __webpack_require__(166)
	    , uid                 = __webpack_require__(21)
	    , wks                 = __webpack_require__(27)
	    , createArrayMethod   = __webpack_require__(174)
	    , createArrayIncludes = __webpack_require__(38)
	    , speciesConstructor  = __webpack_require__(209)
	    , ArrayIterators      = __webpack_require__(195)
	    , Iterators           = __webpack_require__(131)
	    , $iterDetect         = __webpack_require__(167)
	    , setSpecies          = __webpack_require__(194)
	    , arrayFill           = __webpack_require__(190)
	    , arrayCopyWithin     = __webpack_require__(187)
	    , $DP                 = __webpack_require__(13)
	    , $GOPD               = __webpack_require__(53)
	    , dP                  = $DP.f
	    , gOPD                = $GOPD.f
	    , RangeError          = global.RangeError
	    , TypeError           = global.TypeError
	    , Uint8Array          = global.Uint8Array
	    , ARRAY_BUFFER        = 'ArrayBuffer'
	    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
	    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
	    , PROTOTYPE           = 'prototype'
	    , ArrayProto          = Array[PROTOTYPE]
	    , $ArrayBuffer        = $buffer.ArrayBuffer
	    , $DataView           = $buffer.DataView
	    , arrayForEach        = createArrayMethod(0)
	    , arrayFilter         = createArrayMethod(2)
	    , arraySome           = createArrayMethod(3)
	    , arrayEvery          = createArrayMethod(4)
	    , arrayFind           = createArrayMethod(5)
	    , arrayFindIndex      = createArrayMethod(6)
	    , arrayIncludes       = createArrayIncludes(true)
	    , arrayIndexOf        = createArrayIncludes(false)
	    , arrayValues         = ArrayIterators.values
	    , arrayKeys           = ArrayIterators.keys
	    , arrayEntries        = ArrayIterators.entries
	    , arrayLastIndexOf    = ArrayProto.lastIndexOf
	    , arrayReduce         = ArrayProto.reduce
	    , arrayReduceRight    = ArrayProto.reduceRight
	    , arrayJoin           = ArrayProto.join
	    , arraySort           = ArrayProto.sort
	    , arraySlice          = ArrayProto.slice
	    , arrayToString       = ArrayProto.toString
	    , arrayToLocaleString = ArrayProto.toLocaleString
	    , ITERATOR            = wks('iterator')
	    , TAG                 = wks('toStringTag')
	    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
	    , DEF_CONSTRUCTOR     = uid('def_constructor')
	    , ALL_CONSTRUCTORS    = $typed.CONSTR
	    , TYPED_ARRAY         = $typed.TYPED
	    , VIEW                = $typed.VIEW
	    , WRONG_LENGTH        = 'Wrong length!';

	  var $map = createArrayMethod(1, function(O, length){
	    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
	  });

	  var LITTLE_ENDIAN = fails(function(){
	    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
	  });

	  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
	    new Uint8Array(1).set({});
	  });

	  var strictToLength = function(it, SAME){
	    if(it === undefined)throw TypeError(WRONG_LENGTH);
	    var number = +it
	      , length = toLength(it);
	    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
	    return length;
	  };

	  var toOffset = function(it, BYTES){
	    var offset = toInteger(it);
	    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
	    return offset;
	  };

	  var validate = function(it){
	    if(isObject(it) && TYPED_ARRAY in it)return it;
	    throw TypeError(it + ' is not a typed array!');
	  };

	  var allocate = function(C, length){
	    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
	      throw TypeError('It is not a typed array constructor!');
	    } return new C(length);
	  };

	  var speciesFromList = function(O, list){
	    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
	  };

	  var fromList = function(C, list){
	    var index  = 0
	      , length = list.length
	      , result = allocate(C, length);
	    while(length > index)result[index] = list[index++];
	    return result;
	  };

	  var addGetter = function(it, key, internal){
	    dP(it, key, {get: function(){ return this._d[internal]; }});
	  };

	  var $from = function from(source /*, mapfn, thisArg */){
	    var O       = toObject(source)
	      , aLen    = arguments.length
	      , mapfn   = aLen > 1 ? arguments[1] : undefined
	      , mapping = mapfn !== undefined
	      , iterFn  = getIterFn(O)
	      , i, length, values, result, step, iterator;
	    if(iterFn != undefined && !isArrayIter(iterFn)){
	      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
	        values.push(step.value);
	      } O = values;
	    }
	    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
	    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
	      result[i] = mapping ? mapfn(O[i], i) : O[i];
	    }
	    return result;
	  };

	  var $of = function of(/*...items*/){
	    var index  = 0
	      , length = arguments.length
	      , result = allocate(this, length);
	    while(length > index)result[index] = arguments[index++];
	    return result;
	  };

	  // iOS Safari 6.x fails here
	  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

	  var $toLocaleString = function toLocaleString(){
	    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
	  };

	  var proto = {
	    copyWithin: function copyWithin(target, start /*, end */){
	      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
	    },
	    every: function every(callbackfn /*, thisArg */){
	      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
	      return arrayFill.apply(validate(this), arguments);
	    },
	    filter: function filter(callbackfn /*, thisArg */){
	      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
	        arguments.length > 1 ? arguments[1] : undefined));
	    },
	    find: function find(predicate /*, thisArg */){
	      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    findIndex: function findIndex(predicate /*, thisArg */){
	      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    forEach: function forEach(callbackfn /*, thisArg */){
	      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    indexOf: function indexOf(searchElement /*, fromIndex */){
	      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    includes: function includes(searchElement /*, fromIndex */){
	      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    join: function join(separator){ // eslint-disable-line no-unused-vars
	      return arrayJoin.apply(validate(this), arguments);
	    },
	    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
	      return arrayLastIndexOf.apply(validate(this), arguments);
	    },
	    map: function map(mapfn /*, thisArg */){
	      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduce.apply(validate(this), arguments);
	    },
	    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
	      return arrayReduceRight.apply(validate(this), arguments);
	    },
	    reverse: function reverse(){
	      var that   = this
	        , length = validate(that).length
	        , middle = Math.floor(length / 2)
	        , index  = 0
	        , value;
	      while(index < middle){
	        value         = that[index];
	        that[index++] = that[--length];
	        that[length]  = value;
	      } return that;
	    },
	    some: function some(callbackfn /*, thisArg */){
	      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	    },
	    sort: function sort(comparefn){
	      return arraySort.call(validate(this), comparefn);
	    },
	    subarray: function subarray(begin, end){
	      var O      = validate(this)
	        , length = O.length
	        , $begin = toIndex(begin, length);
	      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
	        O.buffer,
	        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
	        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
	      );
	    }
	  };

	  var $slice = function slice(start, end){
	    return speciesFromList(this, arraySlice.call(validate(this), start, end));
	  };

	  var $set = function set(arrayLike /*, offset */){
	    validate(this);
	    var offset = toOffset(arguments[1], 1)
	      , length = this.length
	      , src    = toObject(arrayLike)
	      , len    = toLength(src.length)
	      , index  = 0;
	    if(len + offset > length)throw RangeError(WRONG_LENGTH);
	    while(index < len)this[offset + index] = src[index++];
	  };

	  var $iterators = {
	    entries: function entries(){
	      return arrayEntries.call(validate(this));
	    },
	    keys: function keys(){
	      return arrayKeys.call(validate(this));
	    },
	    values: function values(){
	      return arrayValues.call(validate(this));
	    }
	  };

	  var isTAIndex = function(target, key){
	    return isObject(target)
	      && target[TYPED_ARRAY]
	      && typeof key != 'symbol'
	      && key in target
	      && String(+key) == String(key);
	  };
	  var $getDesc = function getOwnPropertyDescriptor(target, key){
	    return isTAIndex(target, key = toPrimitive(key, true))
	      ? propertyDesc(2, target[key])
	      : gOPD(target, key);
	  };
	  var $setDesc = function defineProperty(target, key, desc){
	    if(isTAIndex(target, key = toPrimitive(key, true))
	      && isObject(desc)
	      && has(desc, 'value')
	      && !has(desc, 'get')
	      && !has(desc, 'set')
	      // TODO: add validation descriptor w/o calling accessors
	      && !desc.configurable
	      && (!has(desc, 'writable') || desc.writable)
	      && (!has(desc, 'enumerable') || desc.enumerable)
	    ){
	      target[key] = desc.value;
	      return target;
	    } else return dP(target, key, desc);
	  };

	  if(!ALL_CONSTRUCTORS){
	    $GOPD.f = $getDesc;
	    $DP.f   = $setDesc;
	  }

	  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
	    getOwnPropertyDescriptor: $getDesc,
	    defineProperty:           $setDesc
	  });

	  if(fails(function(){ arrayToString.call({}); })){
	    arrayToString = arrayToLocaleString = function toString(){
	      return arrayJoin.call(this);
	    }
	  }

	  var $TypedArrayPrototype$ = redefineAll({}, proto);
	  redefineAll($TypedArrayPrototype$, $iterators);
	  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
	  redefineAll($TypedArrayPrototype$, {
	    slice:          $slice,
	    set:            $set,
	    constructor:    function(){ /* noop */ },
	    toString:       arrayToString,
	    toLocaleString: $toLocaleString
	  });
	  addGetter($TypedArrayPrototype$, 'buffer', 'b');
	  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
	  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
	  addGetter($TypedArrayPrototype$, 'length', 'e');
	  dP($TypedArrayPrototype$, TAG, {
	    get: function(){ return this[TYPED_ARRAY]; }
	  });

	  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
	    CLAMPED = !!CLAMPED;
	    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
	      , ISNT_UINT8 = NAME != 'Uint8Array'
	      , GETTER     = 'get' + KEY
	      , SETTER     = 'set' + KEY
	      , TypedArray = global[NAME]
	      , Base       = TypedArray || {}
	      , TAC        = TypedArray && getPrototypeOf(TypedArray)
	      , FORCED     = !TypedArray || !$typed.ABV
	      , O          = {}
	      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
	    var getter = function(that, index){
	      var data = that._d;
	      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
	    };
	    var setter = function(that, index, value){
	      var data = that._d;
	      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
	      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
	    };
	    var addElement = function(that, index){
	      dP(that, index, {
	        get: function(){
	          return getter(this, index);
	        },
	        set: function(value){
	          return setter(this, index, value);
	        },
	        enumerable: true
	      });
	    };
	    if(FORCED){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME, '_d');
	        var index  = 0
	          , offset = 0
	          , buffer, byteLength, length, klass;
	        if(!isObject(data)){
	          length     = strictToLength(data, true)
	          byteLength = length * BYTES;
	          buffer     = new $ArrayBuffer(byteLength);
	        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          buffer = data;
	          offset = toOffset($offset, BYTES);
	          var $len = data.byteLength;
	          if($length === undefined){
	            if($len % BYTES)throw RangeError(WRONG_LENGTH);
	            byteLength = $len - offset;
	            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
	          } else {
	            byteLength = toLength($length) * BYTES;
	            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
	          }
	          length = byteLength / BYTES;
	        } else if(TYPED_ARRAY in data){
	          return fromList(TypedArray, data);
	        } else {
	          return $from.call(TypedArray, data);
	        }
	        hide(that, '_d', {
	          b: buffer,
	          o: offset,
	          l: byteLength,
	          e: length,
	          v: new $DataView(buffer)
	        });
	        while(index < length)addElement(that, index++);
	      });
	      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
	      hide(TypedArrayPrototype, 'constructor', TypedArray);
	    } else if(!$iterDetect(function(iter){
	      // V8 works with iterators, but fails in many other cases
	      // https://code.google.com/p/v8/issues/detail?id=4552
	      new TypedArray(null); // eslint-disable-line no-new
	      new TypedArray(iter); // eslint-disable-line no-new
	    }, true)){
	      TypedArray = wrapper(function(that, data, $offset, $length){
	        anInstance(that, TypedArray, NAME);
	        var klass;
	        // `ws` module bug, temporarily remove validation length for Uint8Array
	        // https://github.com/websockets/ws/pull/645
	        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
	        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
	          return $length !== undefined
	            ? new Base(data, toOffset($offset, BYTES), $length)
	            : $offset !== undefined
	              ? new Base(data, toOffset($offset, BYTES))
	              : new Base(data);
	        }
	        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
	        return $from.call(TypedArray, data);
	      });
	      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
	        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
	      });
	      TypedArray[PROTOTYPE] = TypedArrayPrototype;
	      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
	    }
	    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
	      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
	      , $iterator         = $iterators.values;
	    hide(TypedArray, TYPED_CONSTRUCTOR, true);
	    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
	    hide(TypedArrayPrototype, VIEW, true);
	    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

	    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
	      dP(TypedArrayPrototype, TAG, {
	        get: function(){ return NAME; }
	      });
	    }

	    O[NAME] = TypedArray;

	    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

	    $export($export.S, NAME, {
	      BYTES_PER_ELEMENT: BYTES,
	      from: $from,
	      of: $of
	    });

	    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

	    $export($export.P, NAME, proto);

	    setSpecies(NAME);

	    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

	    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

	    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

	    $export($export.P + $export.F * fails(function(){
	      new TypedArray(1).slice();
	    }), NAME, {slice: $slice});

	    $export($export.P + $export.F * (fails(function(){
	      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
	    }) || !fails(function(){
	      TypedArrayPrototype.toLocaleString.call([1, 2]);
	    })), NAME, {toLocaleString: $toLocaleString});

	    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
	    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
	  };
	} else module.exports = function(){ /* empty */ };

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Uint8', 1, function(init){
	  return function Uint8Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Uint8', 1, function(init){
	  return function Uint8ClampedArray(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	}, true);

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Int16', 2, function(init){
	  return function Int16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Uint16', 2, function(init){
	  return function Uint16Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Int32', 4, function(init){
	  return function Int32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Uint32', 4, function(init){
	  return function Uint32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Float32', 4, function(init){
	  return function Float32Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(225)('Float64', 8, function(init){
	  return function Float64Array(data, byteOffset, length){
	    return init(this, data, byteOffset, length);
	  };
	});

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export   = __webpack_require__(10)
	  , aFunction = __webpack_require__(23)
	  , anObject  = __webpack_require__(14)
	  , rApply    = (__webpack_require__(6).Reflect || {}).apply
	  , fApply    = Function.apply;
	// MS Edge argumentsList argument is optional
	$export($export.S + $export.F * !__webpack_require__(9)(function(){
	  rApply(function(){});
	}), 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    var T = aFunction(target)
	      , L = anObject(argumentsList);
	    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
	  }
	});

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $export    = __webpack_require__(10)
	  , create     = __webpack_require__(48)
	  , aFunction  = __webpack_require__(23)
	  , anObject   = __webpack_require__(14)
	  , isObject   = __webpack_require__(15)
	  , fails      = __webpack_require__(9)
	  , bind       = __webpack_require__(79)
	  , rConstruct = (__webpack_require__(6).Reflect || {}).construct;

	// MS Edge supports only 2 arguments and argumentsList argument is optional
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	var NEW_TARGET_BUG = fails(function(){
	  function F(){}
	  return !(rConstruct(function(){}, [], F) instanceof F);
	});
	var ARGS_BUG = !fails(function(){
	  rConstruct(function(){});
	});

	$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    anObject(args);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      switch(args.length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var dP          = __webpack_require__(13)
	  , $export     = __webpack_require__(10)
	  , anObject    = __webpack_require__(14)
	  , toPrimitive = __webpack_require__(18);

	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(9)(function(){
	  Reflect.defineProperty(dP.f({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    propertyKey = toPrimitive(propertyKey, true);
	    anObject(attributes);
	    try {
	      dP.f(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(10)
	  , gOPD     = __webpack_require__(53).f
	  , anObject = __webpack_require__(14);

	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = gOPD(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(10)
	  , anObject = __webpack_require__(14);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(132)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});

	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var gOPD           = __webpack_require__(53)
	  , getPrototypeOf = __webpack_require__(61)
	  , has            = __webpack_require__(7)
	  , $export        = __webpack_require__(10)
	  , isObject       = __webpack_require__(15)
	  , anObject       = __webpack_require__(14);

	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = gOPD.f(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
	}

	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var gOPD     = __webpack_require__(53)
	  , $export  = __webpack_require__(10)
	  , anObject = __webpack_require__(14);

	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return gOPD.f(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(10)
	  , getProto = __webpack_require__(61)
	  , anObject = __webpack_require__(14);

	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(10);

	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(10)
	  , anObject      = __webpack_require__(14)
	  , $isExtensible = Object.isExtensible;

	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(10);

	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(245)});

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var gOPN     = __webpack_require__(52)
	  , gOPS     = __webpack_require__(45)
	  , anObject = __webpack_require__(14)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = gOPN.f(anObject(it))
	    , getSymbols = gOPS.f;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(10)
	  , anObject           = __webpack_require__(14)
	  , $preventExtensions = Object.preventExtensions;

	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var dP             = __webpack_require__(13)
	  , gOPD           = __webpack_require__(53)
	  , getPrototypeOf = __webpack_require__(61)
	  , has            = __webpack_require__(7)
	  , $export        = __webpack_require__(10)
	  , createDesc     = __webpack_require__(19)
	  , anObject       = __webpack_require__(14)
	  , isObject       = __webpack_require__(15);

	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = gOPD.f(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = getPrototypeOf(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    dP.f(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}

	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(10)
	  , setProto = __webpack_require__(75);

	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/Array.prototype.includes
	var $export   = __webpack_require__(10)
	  , $includes = __webpack_require__(38)(true);

	$export($export.P, 'Array', {
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

	__webpack_require__(188)('includes');

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(10)
	  , $at     = __webpack_require__(129)(true);

	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(10)
	  , $pad    = __webpack_require__(252);

	$export($export.P, 'String', {
	  padStart: function padStart(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-string-pad-start-end
	var toLength = __webpack_require__(39)
	  , repeat   = __webpack_require__(93)
	  , defined  = __webpack_require__(37);

	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength || fillStr == '')return S;
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/tc39/proposal-string-pad-start-end
	var $export = __webpack_require__(10)
	  , $pad    = __webpack_require__(252);

	$export($export.P, 'String', {
	  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(85)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	}, 'trimStart');

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(85)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	}, 'trimEnd');

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://tc39.github.io/String.prototype.matchAll/
	var $export     = __webpack_require__(10)
	  , defined     = __webpack_require__(37)
	  , toLength    = __webpack_require__(39)
	  , isRegExp    = __webpack_require__(136)
	  , getFlags    = __webpack_require__(198)
	  , RegExpProto = RegExp.prototype;

	var $RegExpStringIterator = function(regexp, string){
	  this._r = regexp;
	  this._s = string;
	};

	__webpack_require__(132)($RegExpStringIterator, 'RegExp String', function next(){
	  var match = this._r.exec(this._s);
	  return {value: match, done: match === null};
	});

	$export($export.P, 'String', {
	  matchAll: function matchAll(regexp){
	    defined(this);
	    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
	    var S     = String(this)
	      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
	      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
	    rx.lastIndex = toLength(regexp.lastIndex);
	    return new $RegExpStringIterator(rx, S);
	  }
	});

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(29)('asyncIterator');

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(29)('observable');

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-getownpropertydescriptors
	var $export        = __webpack_require__(10)
	  , ownKeys        = __webpack_require__(245)
	  , toIObject      = __webpack_require__(34)
	  , gOPD           = __webpack_require__(53)
	  , createProperty = __webpack_require__(165);

	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , getDesc = gOPD.f
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key;
	    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
	    return result;
	  }
	});

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export = __webpack_require__(10)
	  , $values = __webpack_require__(261)(false);

	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var getKeys   = __webpack_require__(32)
	  , toIObject = __webpack_require__(34)
	  , isEnum    = __webpack_require__(46).f;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/tc39/proposal-object-values-entries
	var $export  = __webpack_require__(10)
	  , $entries = __webpack_require__(261)(true);

	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(10)
	  , toObject        = __webpack_require__(60)
	  , aFunction       = __webpack_require__(23)
	  , $defineProperty = __webpack_require__(13);

	// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
	__webpack_require__(8) && $export($export.P + __webpack_require__(264), 'Object', {
	  __defineGetter__: function __defineGetter__(P, getter){
	    $defineProperty.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	// Forced replacement prototype accessors methods
	module.exports = __webpack_require__(30)|| !__webpack_require__(9)(function(){
	  var K = Math.random();
	  // In FF throws only define methods
	  __defineSetter__.call(null, K, function(){ /* empty */});
	  delete __webpack_require__(6)[K];
	});

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export         = __webpack_require__(10)
	  , toObject        = __webpack_require__(60)
	  , aFunction       = __webpack_require__(23)
	  , $defineProperty = __webpack_require__(13);

	// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
	__webpack_require__(8) && $export($export.P + __webpack_require__(264), 'Object', {
	  __defineSetter__: function __defineSetter__(P, setter){
	    $defineProperty.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
	  }
	});

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(10)
	  , toObject                 = __webpack_require__(60)
	  , toPrimitive              = __webpack_require__(18)
	  , getPrototypeOf           = __webpack_require__(61)
	  , getOwnPropertyDescriptor = __webpack_require__(53).f;

	// B.2.2.4 Object.prototype.__lookupGetter__(P)
	__webpack_require__(8) && $export($export.P + __webpack_require__(264), 'Object', {
	  __lookupGetter__: function __lookupGetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.get;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export                  = __webpack_require__(10)
	  , toObject                 = __webpack_require__(60)
	  , toPrimitive              = __webpack_require__(18)
	  , getPrototypeOf           = __webpack_require__(61)
	  , getOwnPropertyDescriptor = __webpack_require__(53).f;

	// B.2.2.5 Object.prototype.__lookupSetter__(P)
	__webpack_require__(8) && $export($export.P + __webpack_require__(264), 'Object', {
	  __lookupSetter__: function __lookupSetter__(P){
	    var O = toObject(this)
	      , K = toPrimitive(P, true)
	      , D;
	    do {
	      if(D = getOwnPropertyDescriptor(O, K))return D.set;
	    } while(O = getPrototypeOf(O));
	  }
	});

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(10);

	$export($export.P + $export.R, 'Map', {toJSON: __webpack_require__(269)('Map')});

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var classof = __webpack_require__(77)
	  , from    = __webpack_require__(270);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    return from(this);
	  };
	};

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var forOf = __webpack_require__(208);

	module.exports = function(iter, ITERATOR){
	  var result = [];
	  forOf(iter, false, result.push, result, ITERATOR);
	  return result;
	};


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(10);

	$export($export.P + $export.R, 'Set', {toJSON: __webpack_require__(269)('Set')});

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-global
	var $export = __webpack_require__(10);

	$export($export.S, 'System', {global: __webpack_require__(6)});

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-is-error
	var $export = __webpack_require__(10)
	  , cof     = __webpack_require__(36);

	$export($export.S, 'Error', {
	  isError: function isError(it){
	    return cof(it) === 'Error';
	  }
	});

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  iaddh: function iaddh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
	  }
	});

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  isubh: function isubh(x0, x1, y0, y1){
	    var $x0 = x0 >>> 0
	      , $x1 = x1 >>> 0
	      , $y0 = y0 >>> 0;
	    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
	  }
	});

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  imulh: function imulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >> 16
	      , v1 = $v >> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
	  }
	});

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
	var $export = __webpack_require__(10);

	$export($export.S, 'Math', {
	  umulh: function umulh(u, v){
	    var UINT16 = 0xffff
	      , $u = +u
	      , $v = +v
	      , u0 = $u & UINT16
	      , v0 = $v & UINT16
	      , u1 = $u >>> 16
	      , v1 = $v >>> 16
	      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
	    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
	  }
	});

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(279)
	  , anObject                  = __webpack_require__(14)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
	  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
	}});

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	var Map     = __webpack_require__(213)
	  , $export = __webpack_require__(10)
	  , shared  = __webpack_require__(25)('metadata')
	  , store   = shared.store || (shared.store = new (__webpack_require__(217)));

	var getOrCreateMetadataMap = function(target, targetKey, create){
	  var targetMetadata = store.get(target);
	  if(!targetMetadata){
	    if(!create)return undefined;
	    store.set(target, targetMetadata = new Map);
	  }
	  var keyMetadata = targetMetadata.get(targetKey);
	  if(!keyMetadata){
	    if(!create)return undefined;
	    targetMetadata.set(targetKey, keyMetadata = new Map);
	  } return keyMetadata;
	};
	var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
	};
	var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
	  var metadataMap = getOrCreateMetadataMap(O, P, false);
	  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
	};
	var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P){
	  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
	};
	var ordinaryOwnMetadataKeys = function(target, targetKey){
	  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
	    , keys        = [];
	  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
	  return keys;
	};
	var toMetaKey = function(it){
	  return it === undefined || typeof it == 'symbol' ? it : String(it);
	};
	var exp = function(O){
	  $export($export.S, 'Reflect', O);
	};

	module.exports = {
	  store: store,
	  map: getOrCreateMetadataMap,
	  has: ordinaryHasOwnMetadata,
	  get: ordinaryGetOwnMetadata,
	  set: ordinaryDefineOwnMetadata,
	  keys: ordinaryOwnMetadataKeys,
	  key: toMetaKey,
	  exp: exp
	};

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(279)
	  , anObject               = __webpack_require__(14)
	  , toMetaKey              = metadata.key
	  , getOrCreateMetadataMap = metadata.map
	  , store                  = metadata.store;

	metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
	  var targetKey   = arguments.length < 3 ? undefined : toMetaKey(arguments[2])
	    , metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
	  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
	  if(metadataMap.size)return true;
	  var targetMetadata = store.get(target);
	  targetMetadata['delete'](targetKey);
	  return !!targetMetadata.size || store['delete'](target);
	}});

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(279)
	  , anObject               = __webpack_require__(14)
	  , getPrototypeOf         = __webpack_require__(61)
	  , ordinaryHasOwnMetadata = metadata.has
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	var ordinaryGetMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return ordinaryGetOwnMetadata(MetadataKey, O, P);
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
	};

	metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 282 */
/***/ function(module, exports, __webpack_require__) {

	var Set                     = __webpack_require__(216)
	  , from                    = __webpack_require__(270)
	  , metadata                = __webpack_require__(279)
	  , anObject                = __webpack_require__(14)
	  , getPrototypeOf          = __webpack_require__(61)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	var ordinaryMetadataKeys = function(O, P){
	  var oKeys  = ordinaryOwnMetadataKeys(O, P)
	    , parent = getPrototypeOf(O);
	  if(parent === null)return oKeys;
	  var pKeys  = ordinaryMetadataKeys(parent, P);
	  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
	};

	metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
	  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(279)
	  , anObject               = __webpack_require__(14)
	  , ordinaryGetOwnMetadata = metadata.get
	  , toMetaKey              = metadata.key;

	metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                = __webpack_require__(279)
	  , anObject                = __webpack_require__(14)
	  , ordinaryOwnMetadataKeys = metadata.keys
	  , toMetaKey               = metadata.key;

	metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
	  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
	}});

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(279)
	  , anObject               = __webpack_require__(14)
	  , getPrototypeOf         = __webpack_require__(61)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	var ordinaryHasMetadata = function(MetadataKey, O, P){
	  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
	  if(hasOwn)return true;
	  var parent = getPrototypeOf(O);
	  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
	};

	metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	var metadata               = __webpack_require__(279)
	  , anObject               = __webpack_require__(14)
	  , ordinaryHasOwnMetadata = metadata.has
	  , toMetaKey              = metadata.key;

	metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
	  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
	    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
	}});

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	var metadata                  = __webpack_require__(279)
	  , anObject                  = __webpack_require__(14)
	  , aFunction                 = __webpack_require__(23)
	  , toMetaKey                 = metadata.key
	  , ordinaryDefineOwnMetadata = metadata.set;

	metadata.exp({metadata: function metadata(metadataKey, metadataValue){
	  return function decorator(target, targetKey){
	    ordinaryDefineOwnMetadata(
	      metadataKey, metadataValue,
	      (targetKey !== undefined ? anObject : aFunction)(target),
	      toMetaKey(targetKey)
	    );
	  };
	}});

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
	var $export   = __webpack_require__(10)
	  , microtask = __webpack_require__(211)()
	  , process   = __webpack_require__(6).process
	  , isNode    = __webpack_require__(36)(process) == 'process';

	$export($export.G, {
	  asap: function asap(fn){
	    var domain = isNode && process.domain;
	    microtask(domain ? domain.bind(fn) : fn);
	  }
	});

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/zenparsing/es-observable
	var $export     = __webpack_require__(10)
	  , global      = __webpack_require__(6)
	  , core        = __webpack_require__(11)
	  , microtask   = __webpack_require__(211)()
	  , OBSERVABLE  = __webpack_require__(27)('observable')
	  , aFunction   = __webpack_require__(23)
	  , anObject    = __webpack_require__(14)
	  , anInstance  = __webpack_require__(207)
	  , redefineAll = __webpack_require__(212)
	  , hide        = __webpack_require__(12)
	  , forOf       = __webpack_require__(208)
	  , RETURN      = forOf.RETURN;

	var getMethod = function(fn){
	  return fn == null ? undefined : aFunction(fn);
	};

	var cleanupSubscription = function(subscription){
	  var cleanup = subscription._c;
	  if(cleanup){
	    subscription._c = undefined;
	    cleanup();
	  }
	};

	var subscriptionClosed = function(subscription){
	  return subscription._o === undefined;
	};

	var closeSubscription = function(subscription){
	  if(!subscriptionClosed(subscription)){
	    subscription._o = undefined;
	    cleanupSubscription(subscription);
	  }
	};

	var Subscription = function(observer, subscriber){
	  anObject(observer);
	  this._c = undefined;
	  this._o = observer;
	  observer = new SubscriptionObserver(this);
	  try {
	    var cleanup      = subscriber(observer)
	      , subscription = cleanup;
	    if(cleanup != null){
	      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
	      else aFunction(cleanup);
	      this._c = cleanup;
	    }
	  } catch(e){
	    observer.error(e);
	    return;
	  } if(subscriptionClosed(this))cleanupSubscription(this);
	};

	Subscription.prototype = redefineAll({}, {
	  unsubscribe: function unsubscribe(){ closeSubscription(this); }
	});

	var SubscriptionObserver = function(subscription){
	  this._s = subscription;
	};

	SubscriptionObserver.prototype = redefineAll({}, {
	  next: function next(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      try {
	        var m = getMethod(observer.next);
	        if(m)return m.call(observer, value);
	      } catch(e){
	        try {
	          closeSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      }
	    }
	  },
	  error: function error(value){
	    var subscription = this._s;
	    if(subscriptionClosed(subscription))throw value;
	    var observer = subscription._o;
	    subscription._o = undefined;
	    try {
	      var m = getMethod(observer.error);
	      if(!m)throw value;
	      value = m.call(observer, value);
	    } catch(e){
	      try {
	        cleanupSubscription(subscription);
	      } finally {
	        throw e;
	      }
	    } cleanupSubscription(subscription);
	    return value;
	  },
	  complete: function complete(value){
	    var subscription = this._s;
	    if(!subscriptionClosed(subscription)){
	      var observer = subscription._o;
	      subscription._o = undefined;
	      try {
	        var m = getMethod(observer.complete);
	        value = m ? m.call(observer, value) : undefined;
	      } catch(e){
	        try {
	          cleanupSubscription(subscription);
	        } finally {
	          throw e;
	        }
	      } cleanupSubscription(subscription);
	      return value;
	    }
	  }
	});

	var $Observable = function Observable(subscriber){
	  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
	};

	redefineAll($Observable.prototype, {
	  subscribe: function subscribe(observer){
	    return new Subscription(observer, this._f);
	  },
	  forEach: function forEach(fn){
	    var that = this;
	    return new (core.Promise || global.Promise)(function(resolve, reject){
	      aFunction(fn);
	      var subscription = that.subscribe({
	        next : function(value){
	          try {
	            return fn(value);
	          } catch(e){
	            reject(e);
	            subscription.unsubscribe();
	          }
	        },
	        error: reject,
	        complete: resolve
	      });
	    });
	  }
	});

	redefineAll($Observable, {
	  from: function from(x){
	    var C = typeof this === 'function' ? this : $Observable;
	    var method = getMethod(anObject(x)[OBSERVABLE]);
	    if(method){
	      var observable = anObject(method.call(x));
	      return observable.constructor === C ? observable : new C(function(observer){
	        return observable.subscribe(observer);
	      });
	    }
	    return new C(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          try {
	            if(forOf(x, false, function(it){
	              observer.next(it);
	              if(done)return RETURN;
	            }) === RETURN)return;
	          } catch(e){
	            if(done)throw e;
	            observer.error(e);
	            return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  },
	  of: function of(){
	    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
	    return new (typeof this === 'function' ? this : $Observable)(function(observer){
	      var done = false;
	      microtask(function(){
	        if(!done){
	          for(var i = 0; i < items.length; ++i){
	            observer.next(items[i]);
	            if(done)return;
	          } observer.complete();
	        }
	      });
	      return function(){ done = true; };
	    });
	  }
	});

	hide($Observable.prototype, OBSERVABLE, function(){ return this; });

	$export($export.G, {Observable: $Observable});

	__webpack_require__(194)('Observable');

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(10)
	  , invoke     = __webpack_require__(80)
	  , partial    = __webpack_require__(291)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(292)
	  , invoke    = __webpack_require__(80)
	  , aFunction = __webpack_require__(23);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that = this
	      , aLen = arguments.length
	      , j = 0, k = 0, args;
	    if(!holder && !aLen)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
	    while(aLen > k)args.push(arguments[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(10)
	  , $task   = __webpack_require__(210);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	var $iterators    = __webpack_require__(195)
	  , redefine      = __webpack_require__(20)
	  , global        = __webpack_require__(6)
	  , hide          = __webpack_require__(12)
	  , Iterators     = __webpack_require__(131)
	  , wks           = __webpack_require__(27)
	  , ITERATOR      = wks('iterator')
	  , TO_STRING_TAG = wks('toStringTag')
	  , ArrayValues   = Iterators.Array;

	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype
	    , key;
	  if(proto){
	    if(!proto[ITERATOR])hide(proto, ITERATOR, ArrayValues);
	    if(!proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	    Iterators[NAME] = ArrayValues;
	    for(key in $iterators)if(!proto[key])redefine(proto, key, $iterators[key], true);
	  }
	}

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */

	!(function(global) {
	  "use strict";

	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };

	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value instanceof AwaitArgument) {
	          return Promise.resolve(value.arg).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;

	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }

	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }

	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );

	          if (record.type === "throw") {
	            context.delegate = null;

	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }

	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;

	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }

	          context.delegate = null;
	        }

	        if (method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = arg;

	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }

	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }

	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          var info = {
	            value: record.arg,
	            done: context.done
	          };

	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp[toStringTagSymbol] = "Generator";

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }

	      return ContinueSentinel;
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(296)))

/***/ },
/* 296 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(298);
	module.exports = __webpack_require__(11).RegExp.escape;

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(10)
	  , $re     = __webpack_require__(299)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 299 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(paper) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	// import $ from 'jquery';
	// import paper from '../node_modules/paper/dist/paper-full.js';
	// require('paper/dist/paper-full');


	__webpack_require__(3);

	var _toolbar = __webpack_require__(304);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _menu = __webpack_require__(311);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Paint = function () {
		function Paint(elems) {
			var _this = this;

			_classCallCheck(this, Paint);

			if (window.File && window.FileReader && window.FileList && window.Blob) {
				// Great success! All the File APIs are supported.
			} else {
				alert('The File APIs are not fully supported in this browser.');
			}

			paper.setup(elems['canvas'][0]);
			this._toolbar = new _toolbar2.default(elems);
			this._menu = new _menu2.default(elems);

			elems['canvas'].on('dragover', function (event) {
				return _this.handleDragOver(event);
			});
			elems['canvas'].on('drop', function (event) {
				return _this.handleDrop(event);
			});

			console.log(paper);
		}

		_createClass(Paint, [{
			key: 'handleDragOver',
			value: function handleDragOver(event) {
				event.stopPropagation();
				event.preventDefault();
				event.originalEvent.dataTransfer.dropEffect = 'copy';
			}
		}, {
			key: 'handleDrop',
			value: function handleDrop(event) {
				event.stopPropagation();
				event.preventDefault();
				var images = event.originalEvent.dataTransfer.files; // FileList object

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var f = _step.value;

						var reader = new FileReader();
						reader.onload = function (event) {
							var raster = new paper.Raster({
								source: event.target.result,
								position: paper.view.center
							});
						};
						// Read in the image file as a data URL.
						reader.readAsDataURL(f);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}]);

		return Paint;
	}();

	exports.default = Paint;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {/*!
	 * Paper.js v0.10.2 - The Swiss Army Knife of Vector Graphics Scripting.
	 * http://paperjs.org/
	 *
	 * Copyright (c) 2011 - 2016, Juerg Lehni & Jonathan Puckey
	 * http://scratchdisk.com/ & http://jonathanpuckey.com/
	 *
	 * Distributed under the MIT license. See LICENSE file for details.
	 *
	 * All rights reserved.
	 *
	 * Date: Sat Jul 9 20:14:37 2016 +0200
	 *
	 ***
	 *
	 * Straps.js - Class inheritance library with support for bean-style accessors
	 *
	 * Copyright (c) 2006 - 2016 Juerg Lehni
	 * http://scratchdisk.com/
	 *
	 * Distributed under the MIT license.
	 *
	 ***
	 *
	 * Acorn.js
	 * http://marijnhaverbeke.nl/acorn/
	 *
	 * Acorn is a tiny, fast JavaScript parser written in JavaScript,
	 * created by Marijn Haverbeke and released under an MIT license.
	 *
	 */

	var paper = function(self, undefined) {

	var window = self ? self.window : __webpack_require__(302),
		document = window && window.document;

	self = self || window;

	var Base = new function() {
		var hidden = /^(statics|enumerable|beans|preserve)$/,

			forEach = [].forEach || function(iter, bind) {
				for (var i = 0, l = this.length; i < l; i++)
					iter.call(bind, this[i], i, this);
			},

			forIn = function(iter, bind) {
				for (var i in this)
					if (this.hasOwnProperty(i))
						iter.call(bind, this[i], i, this);
			},

			create = Object.create || function(proto) {
				return { __proto__: proto };
			},

			describe = Object.getOwnPropertyDescriptor || function(obj, name) {
				var get = obj.__lookupGetter__ && obj.__lookupGetter__(name);
				return get
						? { get: get, set: obj.__lookupSetter__(name),
							enumerable: true, configurable: true }
						: obj.hasOwnProperty(name)
							? { value: obj[name], enumerable: true,
								configurable: true, writable: true }
							: null;
			},

			_define = Object.defineProperty || function(obj, name, desc) {
				if ((desc.get || desc.set) && obj.__defineGetter__) {
					if (desc.get)
						obj.__defineGetter__(name, desc.get);
					if (desc.set)
						obj.__defineSetter__(name, desc.set);
				} else {
					obj[name] = desc.value;
				}
				return obj;
			},

			define = function(obj, name, desc) {
				delete obj[name];
				return _define(obj, name, desc);
			};

		function inject(dest, src, enumerable, beans, preserve) {
			var beansNames = {};

			function field(name, val) {
				val = val || (val = describe(src, name))
						&& (val.get ? val : val.value);
				if (typeof val === 'string' && val[0] === '#')
					val = dest[val.substring(1)] || val;
				var isFunc = typeof val === 'function',
					res = val,
					prev = preserve || isFunc && !val.base
							? (val && val.get ? name in dest : dest[name])
							: null,
					bean;
				if (!preserve || !prev) {
					if (isFunc && prev)
						val.base = prev;
					if (isFunc && beans !== false
							&& (bean = name.match(/^([gs]et|is)(([A-Z])(.*))$/)))
						beansNames[bean[3].toLowerCase() + bean[4]] = bean[2];
					if (!res || isFunc || !res.get || typeof res.get !== 'function'
							|| !Base.isPlainObject(res))
						res = { value: res, writable: true };
					if ((describe(dest, name)
							|| { configurable: true }).configurable) {
						res.configurable = true;
						res.enumerable = enumerable;
					}
					define(dest, name, res);
				}
			}
			if (src) {
				for (var name in src) {
					if (src.hasOwnProperty(name) && !hidden.test(name))
						field(name);
				}
				for (var name in beansNames) {
					var part = beansNames[name],
						set = dest['set' + part],
						get = dest['get' + part] || set && dest['is' + part];
					if (get && (beans === true || get.length === 0))
						field(name, { get: get, set: set });
				}
			}
			return dest;
		}

		function each(obj, iter, bind) {
			if (obj)
				('length' in obj && !obj.getLength
						&& typeof obj.length === 'number'
					? forEach
					: forIn).call(obj, iter, bind = bind || obj);
			return bind;
		}

		function set(obj, args, start) {
			for (var i = start, l = args.length; i < l; i++) {
				var props = args[i];
				for (var key in props)
					if (props.hasOwnProperty(key))
						obj[key] = props[key];
			}
			return obj;
		}

		return inject(function Base() {
			set(this, arguments, 0);
		}, {
			inject: function(src) {
				if (src) {
					var statics = src.statics === true ? src : src.statics,
						beans = src.beans,
						preserve = src.preserve;
					if (statics !== src)
						inject(this.prototype, src, src.enumerable, beans, preserve);
					inject(this, statics, true, beans, preserve);
				}
				for (var i = 1, l = arguments.length; i < l; i++)
					this.inject(arguments[i]);
				return this;
			},

			extend: function() {
				var base = this,
					ctor,
					proto;
				for (var i = 0, obj, l = arguments.length;
						i < l && !(ctor && proto); i++) {
					obj = arguments[i];
					ctor = ctor || obj.initialize;
					proto = proto || obj.prototype;
				}
				ctor = ctor || function() {
					base.apply(this, arguments);
				};
				proto = ctor.prototype = proto || create(this.prototype);
				define(proto, 'constructor',
						{ value: ctor, writable: true, configurable: true });
				inject(ctor, this, true);
				if (arguments.length)
					this.inject.apply(ctor, arguments);
				ctor.base = base;
				return ctor;
			}
		}, true).inject({
			inject: function() {
				for (var i = 0, l = arguments.length; i < l; i++) {
					var src = arguments[i];
					if (src)
						inject(this, src, src.enumerable, src.beans, src.preserve);
				}
				return this;
			},

			extend: function() {
				var res = create(this);
				return res.inject.apply(res, arguments);
			},

			each: function(iter, bind) {
				return each(this, iter, bind);
			},

			set: function() {
				return set(this, arguments, 0);
			},

			clone: function() {
				return new this.constructor(this);
			},

			statics: {
				each: each,
				create: create,
				define: define,
				describe: describe,

				set: function(obj) {
					return set(obj, arguments, 1);
				},

				clone: function(obj) {
					return set(new obj.constructor(), arguments, 0);
				},

				isPlainObject: function(obj) {
					var ctor = obj != null && obj.constructor;
					return ctor && (ctor === Object || ctor === Base
							|| ctor.name === 'Object');
				},

				pick: function(a, b) {
					return a !== undefined ? a : b;
				}
			}
		});
	};

	if (true)
		module.exports = Base;

	Base.inject({
		toString: function() {
			return this._id != null
				?  (this._class || 'Object') + (this._name
					? " '" + this._name + "'"
					: ' @' + this._id)
				: '{ ' + Base.each(this, function(value, key) {
					if (!/^_/.test(key)) {
						var type = typeof value;
						this.push(key + ': ' + (type === 'number'
								? Formatter.instance.number(value)
								: type === 'string' ? "'" + value + "'" : value));
					}
				}, []).join(', ') + ' }';
		},

		getClassName: function() {
			return this._class || '';
		},

		importJSON: function(json) {
			return Base.importJSON(json, this);
		},

		exportJSON: function(options) {
			return Base.exportJSON(this, options);
		},

		toJSON: function() {
			return Base.serialize(this);
		},

		_set: function(props) {
			if (props && Base.isPlainObject(props))
				return Base.filter(this, props);
		},

		statics: {

			exports: {
				enumerable: true
			},

			extend: function extend() {
				var res = extend.base.apply(this, arguments),
					name = res.prototype._class;
				if (name && !Base.exports[name])
					Base.exports[name] = res;
				return res;
			},

			equals: function(obj1, obj2) {
				if (obj1 === obj2)
					return true;
				if (obj1 && obj1.equals)
					return obj1.equals(obj2);
				if (obj2 && obj2.equals)
					return obj2.equals(obj1);
				if (obj1 && obj2
						&& typeof obj1 === 'object' && typeof obj2 === 'object') {
					if (Array.isArray(obj1) && Array.isArray(obj2)) {
						var length = obj1.length;
						if (length !== obj2.length)
							return false;
						while (length--) {
							if (!Base.equals(obj1[length], obj2[length]))
								return false;
						}
					} else {
						var keys = Object.keys(obj1),
							length = keys.length;
						if (length !== Object.keys(obj2).length)
							return false;
						while (length--) {
							var key = keys[length];
							if (!(obj2.hasOwnProperty(key)
									&& Base.equals(obj1[key], obj2[key])))
								return false;
						}
					}
					return true;
				}
				return false;
			},

			read: function(list, start, options, length) {
				if (this === Base) {
					var value = this.peek(list, start);
					list.__index++;
					return value;
				}
				var proto = this.prototype,
					readIndex = proto._readIndex,
					index = start || readIndex && list.__index || 0;
				if (!length)
					length = list.length - index;
				var obj = list[index];
				if (obj instanceof this
					|| options && options.readNull && obj == null && length <= 1) {
					if (readIndex)
						list.__index = index + 1;
					return obj && options && options.clone ? obj.clone() : obj;
				}
				obj = Base.create(this.prototype);
				if (readIndex)
					obj.__read = true;
				obj = obj.initialize.apply(obj, index > 0 || length < list.length
					? Array.prototype.slice.call(list, index, index + length)
					: list) || obj;
				if (readIndex) {
					list.__index = index + obj.__read;
					obj.__read = undefined;
				}
				return obj;
			},

			peek: function(list, start) {
				return list[list.__index = start || list.__index || 0];
			},

			remain: function(list) {
				return list.length - (list.__index || 0);
			},

			readAll: function(list, start, options) {
				var res = [],
					entry;
				for (var i = start || 0, l = list.length; i < l; i++) {
					res.push(Array.isArray(entry = list[i])
							? this.read(entry, 0, options)
							: this.read(list, i, options, 1));
				}
				return res;
			},

			readNamed: function(list, name, start, options, length) {
				var value = this.getNamed(list, name),
					hasObject = value !== undefined;
				if (hasObject) {
					var filtered = list._filtered;
					if (!filtered) {
						filtered = list._filtered = Base.create(list[0]);
						filtered._filtering = list[0];
					}
					filtered[name] = undefined;
				}
				return this.read(hasObject ? [value] : list, start, options, length);
			},

			getNamed: function(list, name) {
				var arg = list[0];
				if (list._hasObject === undefined)
					list._hasObject = list.length === 1 && Base.isPlainObject(arg);
				if (list._hasObject)
					return name ? arg[name] : list._filtered || arg;
			},

			hasNamed: function(list, name) {
				return !!this.getNamed(list, name);
			},

			filter: function(dest, source, exclude) {
				var keys = Object.keys(source._filtering || source);
				for (var i = 0, l = keys.length; i < l; i++) {
					var key = keys[i];
					if (!(exclude && exclude[key])) {
						var value = source[key];
						if (value !== undefined)
							dest[key] = value;
					}
				}
				return dest;
			},

			isPlainValue: function(obj, asString) {
				return this.isPlainObject(obj) || Array.isArray(obj)
						|| asString && typeof obj === 'string';
			},

			serialize: function(obj, options, compact, dictionary) {
				options = options || {};

				var isRoot = !dictionary,
					res;
				if (isRoot) {
					options.formatter = new Formatter(options.precision);
					dictionary = {
						length: 0,
						definitions: {},
						references: {},
						add: function(item, create) {
							var id = '#' + item._id,
								ref = this.references[id];
							if (!ref) {
								this.length++;
								var res = create.call(item),
									name = item._class;
								if (name && res[0] !== name)
									res.unshift(name);
								this.definitions[id] = res;
								ref = this.references[id] = [id];
							}
							return ref;
						}
					};
				}
				if (obj && obj._serialize) {
					res = obj._serialize(options, dictionary);
					var name = obj._class;
					if (name && !obj._compactSerialize && (isRoot || !compact)
							&& res[0] !== name) {
						res.unshift(name);
					}
				} else if (Array.isArray(obj)) {
					res = [];
					for (var i = 0, l = obj.length; i < l; i++)
						res[i] = Base.serialize(obj[i], options, compact,
								dictionary);
				} else if (Base.isPlainObject(obj)) {
					res = {};
					var keys = Object.keys(obj);
					for (var i = 0, l = keys.length; i < l; i++) {
						var key = keys[i];
						res[key] = Base.serialize(obj[key], options, compact,
								dictionary);
					}
				} else if (typeof obj === 'number') {
					res = options.formatter.number(obj, options.precision);
				} else {
					res = obj;
				}
				return isRoot && dictionary.length > 0
						? [['dictionary', dictionary.definitions], res]
						: res;
			},

			deserialize: function(json, create, _data, _setDictionary, _isRoot) {
				var res = json,
					isFirst = !_data,
					hasDictionary = isFirst && json && json.length
						&& json[0][0] === 'dictionary';
				_data = _data || {};
				if (Array.isArray(json)) {
					var type = json[0],
						isDictionary = type === 'dictionary';
					if (json.length == 1 && /^#/.test(type)) {
						return _data.dictionary[type];
					}
					type = Base.exports[type];
					res = [];
					for (var i = type ? 1 : 0, l = json.length; i < l; i++) {
						res.push(Base.deserialize(json[i], create, _data,
								isDictionary, hasDictionary));
					}
					if (type) {
						var args = res;
						if (create) {
							res = create(type, args, isFirst || _isRoot);
						} else {
							res = Base.create(type.prototype);
							type.apply(res, args);
						}
					}
				} else if (Base.isPlainObject(json)) {
					res = {};
					if (_setDictionary)
						_data.dictionary = res;
					for (var key in json)
						res[key] = Base.deserialize(json[key], create, _data);
				}
				return hasDictionary ? res[1] : res;
			},

			exportJSON: function(obj, options) {
				var json = Base.serialize(obj, options);
				return options && options.asString === false
						? json
						: JSON.stringify(json);
			},

			importJSON: function(json, target) {
				return Base.deserialize(
						typeof json === 'string' ? JSON.parse(json) : json,
						function(ctor, args, isRoot) {
							var useTarget = isRoot && target
									&& target.constructor === ctor,
								obj = useTarget ? target
									: Base.create(ctor.prototype);
							if (args.length === 1 && obj instanceof Item
									&& (useTarget || !(obj instanceof Layer))) {
								var arg = args[0];
								if (Base.isPlainObject(arg))
									arg.insert = false;
							}
							(useTarget ? obj._set : ctor).apply(obj, args);
							if (useTarget)
								target = null;
							return obj;
						});
			},

			splice: function(list, items, index, remove) {
				var amount = items && items.length,
					append = index === undefined;
				index = append ? list.length : index;
				if (index > list.length)
					index = list.length;
				for (var i = 0; i < amount; i++)
					items[i]._index = index + i;
				if (append) {
					list.push.apply(list, items);
					return [];
				} else {
					var args = [index, remove];
					if (items)
						args.push.apply(args, items);
					var removed = list.splice.apply(list, args);
					for (var i = 0, l = removed.length; i < l; i++)
						removed[i]._index = undefined;
					for (var i = index + amount, l = list.length; i < l; i++)
						list[i]._index = i;
					return removed;
				}
			},

			capitalize: function(str) {
				return str.replace(/\b[a-z]/g, function(match) {
					return match.toUpperCase();
				});
			},

			camelize: function(str) {
				return str.replace(/-(.)/g, function(all, chr) {
					return chr.toUpperCase();
				});
			},

			hyphenate: function(str) {
				return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
			}
		}
	});

	var Emitter = {
		on: function(type, func) {
			if (typeof type !== 'string') {
				Base.each(type, function(value, key) {
					this.on(key, value);
				}, this);
			} else {
				var types = this._eventTypes,
					entry = types && types[type],
					handlers = this._callbacks = this._callbacks || {};
				handlers = handlers[type] = handlers[type] || [];
				if (handlers.indexOf(func) === -1) {
					handlers.push(func);
					if (entry && entry.install && handlers.length === 1)
						entry.install.call(this, type);
				}
			}
			return this;
		},

		off: function(type, func) {
			if (typeof type !== 'string') {
				Base.each(type, function(value, key) {
					this.off(key, value);
				}, this);
				return;
			}
			var types = this._eventTypes,
				entry = types && types[type],
				handlers = this._callbacks && this._callbacks[type],
				index;
			if (handlers) {
				if (!func || (index = handlers.indexOf(func)) !== -1
						&& handlers.length === 1) {
					if (entry && entry.uninstall)
						entry.uninstall.call(this, type);
					delete this._callbacks[type];
				} else if (index !== -1) {
					handlers.splice(index, 1);
				}
			}
			return this;
		},

		once: function(type, func) {
			return this.on(type, function() {
				func.apply(this, arguments);
				this.off(type, func);
			});
		},

		emit: function(type, event) {
			var handlers = this._callbacks && this._callbacks[type];
			if (!handlers)
				return false;
			var args = [].slice.call(arguments, 1),
				setTarget = event && event.target && !event.currentTarget;
			handlers = handlers.slice();
			if (setTarget)
				event.currentTarget = this;
			for (var i = 0, l = handlers.length; i < l; i++) {
				if (handlers[i].apply(this, args) === false) {
					if (event && event.stop)
						event.stop();
					break;
			   }
			}
			if (setTarget)
				delete event.currentTarget;
			return true;
		},

		responds: function(type) {
			return !!(this._callbacks && this._callbacks[type]);
		},

		attach: '#on',
		detach: '#off',
		fire: '#emit',

		_installEvents: function(install) {
			var types = this._eventTypes,
				handlers = this._callbacks,
				key = install ? 'install' : 'uninstall';
			if (types) {
				for (var type in handlers) {
					if (handlers[type].length > 0) {
						var entry = types[type],
							func = entry && entry[key];
						if (func)
							func.call(this, type);
					}
			}
			}
		},

		statics: {
			inject: function inject(src) {
				var events = src._events;
				if (events) {
					var types = {};
					Base.each(events, function(entry, key) {
						var isString = typeof entry === 'string',
							name = isString ? entry : key,
							part = Base.capitalize(name),
							type = name.substring(2).toLowerCase();
						types[type] = isString ? {} : entry;
						name = '_' + name;
						src['get' + part] = function() {
							return this[name];
						};
						src['set' + part] = function(func) {
							var prev = this[name];
							if (prev)
								this.off(type, prev);
							if (func)
								this.on(type, func);
							this[name] = func;
						};
					});
					src._eventTypes = types;
				}
				return inject.base.apply(this, arguments);
			}
		}
	};

	var PaperScope = Base.extend({
		_class: 'PaperScope',

		initialize: function PaperScope() {
			paper = this;
			this.settings = new Base({
				applyMatrix: true,
				insertItems: true,
				handleSize: 4,
				hitTolerance: 0
			});
			this.project = null;
			this.projects = [];
			this.tools = [];
			this.palettes = [];
			this._id = PaperScope._id++;
			PaperScope._scopes[this._id] = this;
			var proto = PaperScope.prototype;
			if (!this.support) {
				var ctx = CanvasProvider.getContext(1, 1) || {};
				proto.support = {
					nativeDash: 'setLineDash' in ctx || 'mozDash' in ctx,
					nativeBlendModes: BlendMode.nativeModes
				};
				CanvasProvider.release(ctx);
			}
			if (!this.agent) {
				var user = self.navigator.userAgent.toLowerCase(),
					os = (/(darwin|win|mac|linux|freebsd|sunos)/.exec(user)||[])[0],
					platform = os === 'darwin' ? 'mac' : os,
					agent = proto.agent = proto.browser = { platform: platform };
				if (platform)
					agent[platform] = true;
				user.replace(
					/(opera|chrome|safari|webkit|firefox|msie|trident|atom|node)\/?\s*([.\d]+)(?:.*version\/([.\d]+))?(?:.*rv\:v?([.\d]+))?/g,
					function(all, n, v1, v2, rv) {
						if (!agent.chrome) {
							var v = n === 'opera' ? v2 :
									/^(node|trident)$/.test(n) ? rv : v1;
							agent.version = v;
							agent.versionNumber = parseFloat(v);
							n = n === 'trident' ? 'msie' : n;
							agent.name = n;
							agent[n] = true;
						}
					}
				);
				if (agent.chrome)
					delete agent.webkit;
				if (agent.atom)
					delete agent.chrome;
			}
		},

		version: "0.10.2",

		getView: function() {
			var project = this.project;
			return project && project._view;
		},

		getPaper: function() {
			return this;
		},

		execute: function(code, options) {
			paper.PaperScript.execute(code, this, options);
			View.updateFocus();
		},

		install: function(scope) {
			var that = this;
			Base.each(['project', 'view', 'tool'], function(key) {
				Base.define(scope, key, {
					configurable: true,
					get: function() {
						return that[key];
					}
				});
			});
			for (var key in this)
				if (!/^_/.test(key) && this[key])
					scope[key] = this[key];
		},

		setup: function(element) {
			paper = this;
			this.project = new Project(element);
			return this;
		},

		createCanvas: function(width, height) {
			return CanvasProvider.getCanvas(width, height);
		},

		activate: function() {
			paper = this;
		},

		clear: function() {
			var projects = this.projects,
				tools = this.tools,
				palettes = this.palettes;
			for (var i = projects.length - 1; i >= 0; i--)
				projects[i].remove();
			for (var i = tools.length - 1; i >= 0; i--)
				tools[i].remove();
			for (var i = palettes.length - 1; i >= 0; i--)
				palettes[i].remove();
		},

		remove: function() {
			this.clear();
			delete PaperScope._scopes[this._id];
		},

		statics: new function() {
			function handleAttribute(name) {
				name += 'Attribute';
				return function(el, attr) {
					return el[name](attr) || el[name]('data-paper-' + attr);
				};
			}

			return {
				_scopes: {},
				_id: 0,

				get: function(id) {
					return this._scopes[id] || null;
				},

				getAttribute: handleAttribute('get'),
				hasAttribute: handleAttribute('has')
			};
		}
	});

	var PaperScopeItem = Base.extend(Emitter, {

		initialize: function(activate) {
			this._scope = paper;
			this._index = this._scope[this._list].push(this) - 1;
			if (activate || !this._scope[this._reference])
				this.activate();
		},

		activate: function() {
			if (!this._scope)
				return false;
			var prev = this._scope[this._reference];
			if (prev && prev !== this)
				prev.emit('deactivate');
			this._scope[this._reference] = this;
			this.emit('activate', prev);
			return true;
		},

		isActive: function() {
			return this._scope[this._reference] === this;
		},

		remove: function() {
			if (this._index == null)
				return false;
			Base.splice(this._scope[this._list], null, this._index, 1);
			if (this._scope[this._reference] == this)
				this._scope[this._reference] = null;
			this._scope = null;
			return true;
		},

		getView: function() {
			return this._scope.getView();
		}
	});

	var Formatter = Base.extend({
		initialize: function(precision) {
			this.precision = Base.pick(precision, 5);
			this.multiplier = Math.pow(10, this.precision);
		},

		number: function(val) {
			return this.precision < 16
					? Math.round(val * this.multiplier) / this.multiplier : val;
		},

		pair: function(val1, val2, separator) {
			return this.number(val1) + (separator || ',') + this.number(val2);
		},

		point: function(val, separator) {
			return this.number(val.x) + (separator || ',') + this.number(val.y);
		},

		size: function(val, separator) {
			return this.number(val.width) + (separator || ',')
					+ this.number(val.height);
		},

		rectangle: function(val, separator) {
			return this.point(val, separator) + (separator || ',')
					+ this.size(val, separator);
		}
	});

	Formatter.instance = new Formatter();

	var Numerical = new function() {

		var abscissas = [
			[  0.5773502691896257645091488],
			[0,0.7745966692414833770358531],
			[  0.3399810435848562648026658,0.8611363115940525752239465],
			[0,0.5384693101056830910363144,0.9061798459386639927976269],
			[  0.2386191860831969086305017,0.6612093864662645136613996,0.9324695142031520278123016],
			[0,0.4058451513773971669066064,0.7415311855993944398638648,0.9491079123427585245261897],
			[  0.1834346424956498049394761,0.5255324099163289858177390,0.7966664774136267395915539,0.9602898564975362316835609],
			[0,0.3242534234038089290385380,0.6133714327005903973087020,0.8360311073266357942994298,0.9681602395076260898355762],
			[  0.1488743389816312108848260,0.4333953941292471907992659,0.6794095682990244062343274,0.8650633666889845107320967,0.9739065285171717200779640],
			[0,0.2695431559523449723315320,0.5190961292068118159257257,0.7301520055740493240934163,0.8870625997680952990751578,0.9782286581460569928039380],
			[  0.1252334085114689154724414,0.3678314989981801937526915,0.5873179542866174472967024,0.7699026741943046870368938,0.9041172563704748566784659,0.9815606342467192506905491],
			[0,0.2304583159551347940655281,0.4484927510364468528779129,0.6423493394403402206439846,0.8015780907333099127942065,0.9175983992229779652065478,0.9841830547185881494728294],
			[  0.1080549487073436620662447,0.3191123689278897604356718,0.5152486363581540919652907,0.6872929048116854701480198,0.8272013150697649931897947,0.9284348836635735173363911,0.9862838086968123388415973],
			[0,0.2011940939974345223006283,0.3941513470775633698972074,0.5709721726085388475372267,0.7244177313601700474161861,0.8482065834104272162006483,0.9372733924007059043077589,0.9879925180204854284895657],
			[  0.0950125098376374401853193,0.2816035507792589132304605,0.4580167776572273863424194,0.6178762444026437484466718,0.7554044083550030338951012,0.8656312023878317438804679,0.9445750230732325760779884,0.9894009349916499325961542]
		];

		var weights = [
			[1],
			[0.8888888888888888888888889,0.5555555555555555555555556],
			[0.6521451548625461426269361,0.3478548451374538573730639],
			[0.5688888888888888888888889,0.4786286704993664680412915,0.2369268850561890875142640],
			[0.4679139345726910473898703,0.3607615730481386075698335,0.1713244923791703450402961],
			[0.4179591836734693877551020,0.3818300505051189449503698,0.2797053914892766679014678,0.1294849661688696932706114],
			[0.3626837833783619829651504,0.3137066458778872873379622,0.2223810344533744705443560,0.1012285362903762591525314],
			[0.3302393550012597631645251,0.3123470770400028400686304,0.2606106964029354623187429,0.1806481606948574040584720,0.0812743883615744119718922],
			[0.2955242247147528701738930,0.2692667193099963550912269,0.2190863625159820439955349,0.1494513491505805931457763,0.0666713443086881375935688],
			[0.2729250867779006307144835,0.2628045445102466621806889,0.2331937645919904799185237,0.1862902109277342514260976,0.1255803694649046246346943,0.0556685671161736664827537],
			[0.2491470458134027850005624,0.2334925365383548087608499,0.2031674267230659217490645,0.1600783285433462263346525,0.1069393259953184309602547,0.0471753363865118271946160],
			[0.2325515532308739101945895,0.2262831802628972384120902,0.2078160475368885023125232,0.1781459807619457382800467,0.1388735102197872384636018,0.0921214998377284479144218,0.0404840047653158795200216],
			[0.2152638534631577901958764,0.2051984637212956039659241,0.1855383974779378137417166,0.1572031671581935345696019,0.1215185706879031846894148,0.0801580871597602098056333,0.0351194603317518630318329],
			[0.2025782419255612728806202,0.1984314853271115764561183,0.1861610000155622110268006,0.1662692058169939335532009,0.1395706779261543144478048,0.1071592204671719350118695,0.0703660474881081247092674,0.0307532419961172683546284],
			[0.1894506104550684962853967,0.1826034150449235888667637,0.1691565193950025381893121,0.1495959888165767320815017,0.1246289712555338720524763,0.0951585116824927848099251,0.0622535239386478928628438,0.0271524594117540948517806]
		];

		var abs = Math.abs,
			sqrt = Math.sqrt,
			pow = Math.pow,
			log2 = Math.log2 || function(x) {
				return Math.log(x) * Math.LOG2E;
			},
			EPSILON = 1e-12,
			MACHINE_EPSILON = 1.12e-16;

		function clamp(value, min, max) {
			return value < min ? min : value > max ? max : value;
		}

		function getDiscriminant(a, b, c) {
			function split(v) {
				var x = v * 134217729,
					y = v - x,
					hi = y + x,
					lo = v - hi;
				return [hi, lo];
			}

			var D = b * b - a * c,
				E = b * b + a * c;
			if (abs(D) * 3 < E) {
				var ad = split(a),
					bd = split(b),
					cd = split(c),
					p = b * b,
					dp = (bd[0] * bd[0] - p + 2 * bd[0] * bd[1]) + bd[1] * bd[1],
					q = a * c,
					dq = (ad[0] * cd[0] - q + ad[0] * cd[1] + ad[1] * cd[0])
							+ ad[1] * cd[1];
				D = (p - q) + (dp - dq);
			}
			return D;
		}

		function getNormalizationFactor() {
			var norm = Math.max.apply(Math, arguments);
			return norm && (norm < 1e-8 || norm > 1e8)
					? pow(2, -Math.round(log2(norm)))
					: 0;
		}

		return {
			TOLERANCE: 1e-6,
			EPSILON: EPSILON,
			MACHINE_EPSILON: MACHINE_EPSILON,
			CURVETIME_EPSILON: 4e-7,
			GEOMETRIC_EPSILON: 2e-7,
			WINDING_EPSILON: 2e-7,
			TRIGONOMETRIC_EPSILON: 1e-7,
			CLIPPING_EPSILON: 1e-9,
			KAPPA: 4 * (sqrt(2) - 1) / 3,

			isZero: function(val) {
				return val >= -EPSILON && val <= EPSILON;
			},

			clamp: clamp,

			integrate: function(f, a, b, n) {
				var x = abscissas[n - 2],
					w = weights[n - 2],
					A = (b - a) * 0.5,
					B = A + a,
					i = 0,
					m = (n + 1) >> 1,
					sum = n & 1 ? w[i++] * f(B) : 0;
				while (i < m) {
					var Ax = A * x[i];
					sum += w[i++] * (f(B + Ax) + f(B - Ax));
				}
				return A * sum;
			},

			findRoot: function(f, df, x, a, b, n, tolerance) {
				for (var i = 0; i < n; i++) {
					var fx = f(x),
						dx = fx / df(x),
						nx = x - dx;
					if (abs(dx) < tolerance)
						return nx;
					if (fx > 0) {
						b = x;
						x = nx <= a ? (a + b) * 0.5 : nx;
					} else {
						a = x;
						x = nx >= b ? (a + b) * 0.5 : nx;
					}
				}
				return x;
			},

			solveQuadratic: function(a, b, c, roots, min, max) {
				var x1, x2 = Infinity;
				if (abs(a) < EPSILON) {
					if (abs(b) < EPSILON)
						return abs(c) < EPSILON ? -1 : 0;
					x1 = -c / b;
				} else {
					b *= -0.5;
					var D = getDiscriminant(a, b, c);
					if (D && abs(D) < MACHINE_EPSILON) {
						var f = getNormalizationFactor(abs(a), abs(b), abs(c));
						if (f) {
							a *= f;
							b *= f;
							c *= f;
							D = getDiscriminant(a, b, c);
						}
					}
					if (D >= -MACHINE_EPSILON) {
						var Q = D < 0 ? 0 : sqrt(D),
							R = b + (b < 0 ? -Q : Q);
						if (R === 0) {
							x1 = c / a;
							x2 = -x1;
						} else {
							x1 = R / a;
							x2 = c / R;
						}
					}
				}
				var count = 0,
					boundless = min == null,
					minB = min - EPSILON,
					maxB = max + EPSILON;
				if (isFinite(x1) && (boundless || x1 > minB && x1 < maxB))
					roots[count++] = boundless ? x1 : clamp(x1, min, max);
				if (x2 !== x1
						&& isFinite(x2) && (boundless || x2 > minB && x2 < maxB))
					roots[count++] = boundless ? x2 : clamp(x2, min, max);
				return count;
			},

			solveCubic: function(a, b, c, d, roots, min, max) {
				var f = getNormalizationFactor(abs(a), abs(b), abs(c), abs(d)),
					x, b1, c2, qd, q;
				if (f) {
					a *= f;
					b *= f;
					c *= f;
					d *= f;
				}

				function evaluate(x0) {
					x = x0;
					var tmp = a * x;
					b1 = tmp + b;
					c2 = b1 * x + c;
					qd = (tmp + b1) * x + c2;
					q = c2 * x + d;
				}

				if (abs(a) < EPSILON) {
					a = b;
					b1 = c;
					c2 = d;
					x = Infinity;
				} else if (abs(d) < EPSILON) {
					b1 = b;
					c2 = c;
					x = 0;
				} else {
					evaluate(-(b / a) / 3);
					var t = q / a,
						r = pow(abs(t), 1/3),
						s = t < 0 ? -1 : 1,
						td = -qd / a,
						rd = td > 0 ? 1.324717957244746 * Math.max(r, sqrt(td)) : r,
						x0 = x - s * rd;
					if (x0 !== x) {
						do {
							evaluate(x0);
							x0 = qd === 0 ? x : x - q / qd / (1 + MACHINE_EPSILON);
						} while (s * x0 > s * x);
						if (abs(a) * x * x > abs(d / x)) {
							c2 = -d / x;
							b1 = (c2 - c) / x;
						}
					}
				}
				var count = Numerical.solveQuadratic(a, b1, c2, roots, min, max),
					boundless = min == null;
				if (isFinite(x) && (count === 0
						|| count > 0 && x !== roots[0] && x !== roots[1])
						&& (boundless || x > min - EPSILON && x < max + EPSILON))
					roots[count++] = boundless ? x : clamp(x, min, max);
				return count;
			}
		};
	};

	var UID = {
		_id: 1,
		_pools: {},

		get: function(name) {
			if (name) {
				var pool = this._pools[name];
				if (!pool)
					pool = this._pools[name] = { _id: 1 };
				return pool._id++;
			} else {
				return this._id++;
			}
		}
	};

	var Point = Base.extend({
		_class: 'Point',
		_readIndex: true,

		initialize: function Point(arg0, arg1) {
			var type = typeof arg0;
			if (type === 'number') {
				var hasY = typeof arg1 === 'number';
				this.x = arg0;
				this.y = hasY ? arg1 : arg0;
				if (this.__read)
					this.__read = hasY ? 2 : 1;
			} else if (type === 'undefined' || arg0 === null) {
				this.x = this.y = 0;
				if (this.__read)
					this.__read = arg0 === null ? 1 : 0;
			} else {
				var obj = type === 'string' ? arg0.split(/[\s,]+/) || [] : arg0;
				if (Array.isArray(obj)) {
					this.x = obj[0];
					this.y = obj.length > 1 ? obj[1] : obj[0];
				} else if ('x' in obj) {
					this.x = obj.x;
					this.y = obj.y;
				} else if ('width' in obj) {
					this.x = obj.width;
					this.y = obj.height;
				} else if ('angle' in obj) {
					this.x = obj.length;
					this.y = 0;
					this.setAngle(obj.angle);
				} else {
					this.x = this.y = 0;
					if (this.__read)
						this.__read = 0;
				}
				if (this.__read)
					this.__read = 1;
			}
		},

		set: function(x, y) {
			this.x = x;
			this.y = y;
			return this;
		},

		equals: function(point) {
			return this === point || point
					&& (this.x === point.x && this.y === point.y
						|| Array.isArray(point)
							&& this.x === point[0] && this.y === point[1])
					|| false;
		},

		clone: function() {
			return new Point(this.x, this.y);
		},

		toString: function() {
			var f = Formatter.instance;
			return '{ x: ' + f.number(this.x) + ', y: ' + f.number(this.y) + ' }';
		},

		_serialize: function(options) {
			var f = options.formatter;
			return [f.number(this.x), f.number(this.y)];
		},

		getLength: function() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		},

		setLength: function(length) {
			if (this.isZero()) {
				var angle = this._angle || 0;
				this.set(
					Math.cos(angle) * length,
					Math.sin(angle) * length
				);
			} else {
				var scale = length / this.getLength();
				if (Numerical.isZero(scale))
					this.getAngle();
				this.set(
					this.x * scale,
					this.y * scale
				);
			}
		},
		getAngle: function() {
			return this.getAngleInRadians.apply(this, arguments) * 180 / Math.PI;
		},

		setAngle: function(angle) {
			this.setAngleInRadians.call(this, angle * Math.PI / 180);
		},

		getAngleInDegrees: '#getAngle',
		setAngleInDegrees: '#setAngle',

		getAngleInRadians: function() {
			if (!arguments.length) {
				return this.isZero()
						? this._angle || 0
						: this._angle = Math.atan2(this.y, this.x);
			} else {
				var point = Point.read(arguments),
					div = this.getLength() * point.getLength();
				if (Numerical.isZero(div)) {
					return NaN;
				} else {
					var a = this.dot(point) / div;
					return Math.acos(a < -1 ? -1 : a > 1 ? 1 : a);
				}
			}
		},

		setAngleInRadians: function(angle) {
			this._angle = angle;
			if (!this.isZero()) {
				var length = this.getLength();
				this.set(
					Math.cos(angle) * length,
					Math.sin(angle) * length
				);
			}
		},

		getQuadrant: function() {
			return this.x >= 0 ? this.y >= 0 ? 1 : 4 : this.y >= 0 ? 2 : 3;
		}
	}, {
		beans: false,

		getDirectedAngle: function() {
			var point = Point.read(arguments);
			return Math.atan2(this.cross(point), this.dot(point)) * 180 / Math.PI;
		},

		getDistance: function() {
			var point = Point.read(arguments),
				x = point.x - this.x,
				y = point.y - this.y,
				d = x * x + y * y,
				squared = Base.read(arguments);
			return squared ? d : Math.sqrt(d);
		},

		normalize: function(length) {
			if (length === undefined)
				length = 1;
			var current = this.getLength(),
				scale = current !== 0 ? length / current : 0,
				point = new Point(this.x * scale, this.y * scale);
			if (scale >= 0)
				point._angle = this._angle;
			return point;
		},

		rotate: function(angle, center) {
			if (angle === 0)
				return this.clone();
			angle = angle * Math.PI / 180;
			var point = center ? this.subtract(center) : this,
				sin = Math.sin(angle),
				cos = Math.cos(angle);
			point = new Point(
				point.x * cos - point.y * sin,
				point.x * sin + point.y * cos
			);
			return center ? point.add(center) : point;
		},

		transform: function(matrix) {
			return matrix ? matrix._transformPoint(this) : this;
		},

		add: function() {
			var point = Point.read(arguments);
			return new Point(this.x + point.x, this.y + point.y);
		},

		subtract: function() {
			var point = Point.read(arguments);
			return new Point(this.x - point.x, this.y - point.y);
		},

		multiply: function() {
			var point = Point.read(arguments);
			return new Point(this.x * point.x, this.y * point.y);
		},

		divide: function() {
			var point = Point.read(arguments);
			return new Point(this.x / point.x, this.y / point.y);
		},

		modulo: function() {
			var point = Point.read(arguments);
			return new Point(this.x % point.x, this.y % point.y);
		},

		negate: function() {
			return new Point(-this.x, -this.y);
		},

		isInside: function() {
			return Rectangle.read(arguments).contains(this);
		},

		isClose: function() {
			var point = Point.read(arguments),
				tolerance = Base.read(arguments);
			return this.getDistance(point) <= tolerance;
		},

		isCollinear: function() {
			var point = Point.read(arguments);
			return Point.isCollinear(this.x, this.y, point.x, point.y);
		},

		isColinear: '#isCollinear',

		isOrthogonal: function() {
			var point = Point.read(arguments);
			return Point.isOrthogonal(this.x, this.y, point.x, point.y);
		},

		isZero: function() {
			return Numerical.isZero(this.x) && Numerical.isZero(this.y);
		},

		isNaN: function() {
			return isNaN(this.x) || isNaN(this.y);
		},

		dot: function() {
			var point = Point.read(arguments);
			return this.x * point.x + this.y * point.y;
		},

		cross: function() {
			var point = Point.read(arguments);
			return this.x * point.y - this.y * point.x;
		},

		project: function() {
			var point = Point.read(arguments),
				scale = point.isZero() ? 0 : this.dot(point) / point.dot(point);
			return new Point(
				point.x * scale,
				point.y * scale
			);
		},

		statics: {
			min: function() {
				var point1 = Point.read(arguments),
					point2 = Point.read(arguments);
				return new Point(
					Math.min(point1.x, point2.x),
					Math.min(point1.y, point2.y)
				);
			},

			max: function() {
				var point1 = Point.read(arguments),
					point2 = Point.read(arguments);
				return new Point(
					Math.max(point1.x, point2.x),
					Math.max(point1.y, point2.y)
				);
			},

			random: function() {
				return new Point(Math.random(), Math.random());
			},

			isCollinear: function(x1, y1, x2, y2) {
				return Math.abs(x1 * y2 - y1 * x2)
						<= Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2))
							* 1e-7;
			},

			isOrthogonal: function(x1, y1, x2, y2) {
				return Math.abs(x1 * x2 + y1 * y2)
						<= Math.sqrt((x1 * x1 + y1 * y1) * (x2 * x2 + y2 * y2))
							* 1e-7;
			}
		}
	}, Base.each(['round', 'ceil', 'floor', 'abs'], function(key) {
		var op = Math[key];
		this[key] = function() {
			return new Point(op(this.x), op(this.y));
		};
	}, {}));

	var LinkedPoint = Point.extend({
		initialize: function Point(x, y, owner, setter) {
			this._x = x;
			this._y = y;
			this._owner = owner;
			this._setter = setter;
		},

		set: function(x, y, _dontNotify) {
			this._x = x;
			this._y = y;
			if (!_dontNotify)
				this._owner[this._setter](this);
			return this;
		},

		getX: function() {
			return this._x;
		},

		setX: function(x) {
			this._x = x;
			this._owner[this._setter](this);
		},

		getY: function() {
			return this._y;
		},

		setY: function(y) {
			this._y = y;
			this._owner[this._setter](this);
		},

		isSelected: function() {
			return !!(this._owner._selection & this._getSelection());
		},

		setSelected: function(selected) {
			this._owner.changeSelection(this._getSelection(), selected);
		},

		_getSelection: function() {
			return this._setter === 'setPosition' ? 4 : 0;
		}
	});

	var Size = Base.extend({
		_class: 'Size',
		_readIndex: true,

		initialize: function Size(arg0, arg1) {
			var type = typeof arg0;
			if (type === 'number') {
				var hasHeight = typeof arg1 === 'number';
				this.width = arg0;
				this.height = hasHeight ? arg1 : arg0;
				if (this.__read)
					this.__read = hasHeight ? 2 : 1;
			} else if (type === 'undefined' || arg0 === null) {
				this.width = this.height = 0;
				if (this.__read)
					this.__read = arg0 === null ? 1 : 0;
			} else {
				var obj = type === 'string' ? arg0.split(/[\s,]+/) || [] : arg0;
				if (Array.isArray(obj)) {
					this.width = obj[0];
					this.height = obj.length > 1 ? obj[1] : obj[0];
				} else if ('width' in obj) {
					this.width = obj.width;
					this.height = obj.height;
				} else if ('x' in obj) {
					this.width = obj.x;
					this.height = obj.y;
				} else {
					this.width = this.height = 0;
					if (this.__read)
						this.__read = 0;
				}
				if (this.__read)
					this.__read = 1;
			}
		},

		set: function(width, height) {
			this.width = width;
			this.height = height;
			return this;
		},

		equals: function(size) {
			return size === this || size && (this.width === size.width
					&& this.height === size.height
					|| Array.isArray(size) && this.width === size[0]
						&& this.height === size[1]) || false;
		},

		clone: function() {
			return new Size(this.width, this.height);
		},

		toString: function() {
			var f = Formatter.instance;
			return '{ width: ' + f.number(this.width)
					+ ', height: ' + f.number(this.height) + ' }';
		},

		_serialize: function(options) {
			var f = options.formatter;
			return [f.number(this.width),
					f.number(this.height)];
		},

		add: function() {
			var size = Size.read(arguments);
			return new Size(this.width + size.width, this.height + size.height);
		},

		subtract: function() {
			var size = Size.read(arguments);
			return new Size(this.width - size.width, this.height - size.height);
		},

		multiply: function() {
			var size = Size.read(arguments);
			return new Size(this.width * size.width, this.height * size.height);
		},

		divide: function() {
			var size = Size.read(arguments);
			return new Size(this.width / size.width, this.height / size.height);
		},

		modulo: function() {
			var size = Size.read(arguments);
			return new Size(this.width % size.width, this.height % size.height);
		},

		negate: function() {
			return new Size(-this.width, -this.height);
		},

		isZero: function() {
			return Numerical.isZero(this.width) && Numerical.isZero(this.height);
		},

		isNaN: function() {
			return isNaN(this.width) || isNaN(this.height);
		},

		statics: {
			min: function(size1, size2) {
				return new Size(
					Math.min(size1.width, size2.width),
					Math.min(size1.height, size2.height));
			},

			max: function(size1, size2) {
				return new Size(
					Math.max(size1.width, size2.width),
					Math.max(size1.height, size2.height));
			},

			random: function() {
				return new Size(Math.random(), Math.random());
			}
		}
	}, Base.each(['round', 'ceil', 'floor', 'abs'], function(key) {
		var op = Math[key];
		this[key] = function() {
			return new Size(op(this.width), op(this.height));
		};
	}, {}));

	var LinkedSize = Size.extend({
		initialize: function Size(width, height, owner, setter) {
			this._width = width;
			this._height = height;
			this._owner = owner;
			this._setter = setter;
		},

		set: function(width, height, _dontNotify) {
			this._width = width;
			this._height = height;
			if (!_dontNotify)
				this._owner[this._setter](this);
			return this;
		},

		getWidth: function() {
			return this._width;
		},

		setWidth: function(width) {
			this._width = width;
			this._owner[this._setter](this);
		},

		getHeight: function() {
			return this._height;
		},

		setHeight: function(height) {
			this._height = height;
			this._owner[this._setter](this);
		}
	});

	var Rectangle = Base.extend({
		_class: 'Rectangle',
		_readIndex: true,
		beans: true,

		initialize: function Rectangle(arg0, arg1, arg2, arg3) {
			var type = typeof arg0,
				read = 0;
			if (type === 'number') {
				this.x = arg0;
				this.y = arg1;
				this.width = arg2;
				this.height = arg3;
				read = 4;
			} else if (type === 'undefined' || arg0 === null) {
				this.x = this.y = this.width = this.height = 0;
				read = arg0 === null ? 1 : 0;
			} else if (arguments.length === 1) {
				if (Array.isArray(arg0)) {
					this.x = arg0[0];
					this.y = arg0[1];
					this.width = arg0[2];
					this.height = arg0[3];
					read = 1;
				} else if (arg0.x !== undefined || arg0.width !== undefined) {
					this.x = arg0.x || 0;
					this.y = arg0.y || 0;
					this.width = arg0.width || 0;
					this.height = arg0.height || 0;
					read = 1;
				} else if (arg0.from === undefined && arg0.to === undefined) {
					this.x = this.y = this.width = this.height = 0;
					this._set(arg0);
					read = 1;
				}
			}
			if (!read) {
				var point = Point.readNamed(arguments, 'from'),
					next = Base.peek(arguments);
				this.x = point.x;
				this.y = point.y;
				if (next && next.x !== undefined || Base.hasNamed(arguments, 'to')) {
					var to = Point.readNamed(arguments, 'to');
					this.width = to.x - point.x;
					this.height = to.y - point.y;
					if (this.width < 0) {
						this.x = to.x;
						this.width = -this.width;
					}
					if (this.height < 0) {
						this.y = to.y;
						this.height = -this.height;
					}
				} else {
					var size = Size.read(arguments);
					this.width = size.width;
					this.height = size.height;
				}
				read = arguments.__index;
			}
			if (this.__read)
				this.__read = read;
		},

		set: function(x, y, width, height) {
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			return this;
		},

		clone: function() {
			return new Rectangle(this.x, this.y, this.width, this.height);
		},

		equals: function(rect) {
			var rt = Base.isPlainValue(rect)
					? Rectangle.read(arguments)
					: rect;
			return rt === this
					|| rt && this.x === rt.x && this.y === rt.y
						&& this.width === rt.width && this.height === rt.height
					|| false;
		},

		toString: function() {
			var f = Formatter.instance;
			return '{ x: ' + f.number(this.x)
					+ ', y: ' + f.number(this.y)
					+ ', width: ' + f.number(this.width)
					+ ', height: ' + f.number(this.height)
					+ ' }';
		},

		_serialize: function(options) {
			var f = options.formatter;
			return [f.number(this.x),
					f.number(this.y),
					f.number(this.width),
					f.number(this.height)];
		},

		getPoint: function(_dontLink) {
			var ctor = _dontLink ? Point : LinkedPoint;
			return new ctor(this.x, this.y, this, 'setPoint');
		},

		setPoint: function() {
			var point = Point.read(arguments);
			this.x = point.x;
			this.y = point.y;
		},

		getSize: function(_dontLink) {
			var ctor = _dontLink ? Size : LinkedSize;
			return new ctor(this.width, this.height, this, 'setSize');
		},

		setSize: function() {
			var size = Size.read(arguments);
			if (this._fixX)
				this.x += (this.width - size.width) * this._fixX;
			if (this._fixY)
				this.y += (this.height - size.height) * this._fixY;
			this.width = size.width;
			this.height = size.height;
			this._fixW = 1;
			this._fixH = 1;
		},

		getLeft: function() {
			return this.x;
		},

		setLeft: function(left) {
			if (!this._fixW)
				this.width -= left - this.x;
			this.x = left;
			this._fixX = 0;
		},

		getTop: function() {
			return this.y;
		},

		setTop: function(top) {
			if (!this._fixH)
				this.height -= top - this.y;
			this.y = top;
			this._fixY = 0;
		},

		getRight: function() {
			return this.x + this.width;
		},

		setRight: function(right) {
			if (this._fixX !== undefined && this._fixX !== 1)
				this._fixW = 0;
			if (this._fixW)
				this.x = right - this.width;
			else
				this.width = right - this.x;
			this._fixX = 1;
		},

		getBottom: function() {
			return this.y + this.height;
		},

		setBottom: function(bottom) {
			if (this._fixY !== undefined && this._fixY !== 1)
				this._fixH = 0;
			if (this._fixH)
				this.y = bottom - this.height;
			else
				this.height = bottom - this.y;
			this._fixY = 1;
		},

		getCenterX: function() {
			return this.x + this.width * 0.5;
		},

		setCenterX: function(x) {
			this.x = x - this.width * 0.5;
			this._fixX = 0.5;
		},

		getCenterY: function() {
			return this.y + this.height * 0.5;
		},

		setCenterY: function(y) {
			this.y = y - this.height * 0.5;
			this._fixY = 0.5;
		},

		getCenter: function(_dontLink) {
			var ctor = _dontLink ? Point : LinkedPoint;
			return new ctor(this.getCenterX(), this.getCenterY(), this, 'setCenter');
		},

		setCenter: function() {
			var point = Point.read(arguments);
			this.setCenterX(point.x);
			this.setCenterY(point.y);
			return this;
		},

		getArea: function() {
			return this.width * this.height;
		},

		isEmpty: function() {
			return this.width === 0 || this.height === 0;
		},

		contains: function(arg) {
			return arg && arg.width !== undefined
					|| (Array.isArray(arg) ? arg : arguments).length === 4
					? this._containsRectangle(Rectangle.read(arguments))
					: this._containsPoint(Point.read(arguments));
		},

		_containsPoint: function(point) {
			var x = point.x,
				y = point.y;
			return x >= this.x && y >= this.y
					&& x <= this.x + this.width
					&& y <= this.y + this.height;
		},

		_containsRectangle: function(rect) {
			var x = rect.x,
				y = rect.y;
			return x >= this.x && y >= this.y
					&& x + rect.width <= this.x + this.width
					&& y + rect.height <= this.y + this.height;
		},

		intersects: function() {
			var rect = Rectangle.read(arguments);
			return rect.x + rect.width > this.x
					&& rect.y + rect.height > this.y
					&& rect.x < this.x + this.width
					&& rect.y < this.y + this.height;
		},

		touches: function() {
			var rect = Rectangle.read(arguments);
			return rect.x + rect.width >= this.x
					&& rect.y + rect.height >= this.y
					&& rect.x <= this.x + this.width
					&& rect.y <= this.y + this.height;
		},

		intersect: function() {
			var rect = Rectangle.read(arguments),
				x1 = Math.max(this.x, rect.x),
				y1 = Math.max(this.y, rect.y),
				x2 = Math.min(this.x + this.width, rect.x + rect.width),
				y2 = Math.min(this.y + this.height, rect.y + rect.height);
			return new Rectangle(x1, y1, x2 - x1, y2 - y1);
		},

		unite: function() {
			var rect = Rectangle.read(arguments),
				x1 = Math.min(this.x, rect.x),
				y1 = Math.min(this.y, rect.y),
				x2 = Math.max(this.x + this.width, rect.x + rect.width),
				y2 = Math.max(this.y + this.height, rect.y + rect.height);
			return new Rectangle(x1, y1, x2 - x1, y2 - y1);
		},

		include: function() {
			var point = Point.read(arguments);
			var x1 = Math.min(this.x, point.x),
				y1 = Math.min(this.y, point.y),
				x2 = Math.max(this.x + this.width, point.x),
				y2 = Math.max(this.y + this.height, point.y);
			return new Rectangle(x1, y1, x2 - x1, y2 - y1);
		},

		expand: function() {
			var amount = Size.read(arguments),
				hor = amount.width,
				ver = amount.height;
			return new Rectangle(this.x - hor / 2, this.y - ver / 2,
					this.width + hor, this.height + ver);
		},

		scale: function(hor, ver) {
			return this.expand(this.width * hor - this.width,
					this.height * (ver === undefined ? hor : ver) - this.height);
		}
	}, Base.each([
			['Top', 'Left'], ['Top', 'Right'],
			['Bottom', 'Left'], ['Bottom', 'Right'],
			['Left', 'Center'], ['Top', 'Center'],
			['Right', 'Center'], ['Bottom', 'Center']
		],
		function(parts, index) {
			var part = parts.join(''),
				xFirst = /^[RL]/.test(part);
			if (index >= 4)
				parts[1] += xFirst ? 'Y' : 'X';
			var x = parts[xFirst ? 0 : 1],
				y = parts[xFirst ? 1 : 0],
				getX = 'get' + x,
				getY = 'get' + y,
				setX = 'set' + x,
				setY = 'set' + y,
				get = 'get' + part,
				set = 'set' + part;
			this[get] = function(_dontLink) {
				var ctor = _dontLink ? Point : LinkedPoint;
				return new ctor(this[getX](), this[getY](), this, set);
			};
			this[set] = function() {
				var point = Point.read(arguments);
				this[setX](point.x);
				this[setY](point.y);
			};
		}, {
			beans: true
		}
	));

	var LinkedRectangle = Rectangle.extend({
		initialize: function Rectangle(x, y, width, height, owner, setter) {
			this.set(x, y, width, height, true);
			this._owner = owner;
			this._setter = setter;
		},

		set: function(x, y, width, height, _dontNotify) {
			this._x = x;
			this._y = y;
			this._width = width;
			this._height = height;
			if (!_dontNotify)
				this._owner[this._setter](this);
			return this;
		}
	},
	new function() {
		var proto = Rectangle.prototype;

		return Base.each(['x', 'y', 'width', 'height'], function(key) {
			var part = Base.capitalize(key),
				internal = '_' + key;
			this['get' + part] = function() {
				return this[internal];
			};

			this['set' + part] = function(value) {
				this[internal] = value;
				if (!this._dontNotify)
					this._owner[this._setter](this);
			};
		}, Base.each(['Point', 'Size', 'Center',
				'Left', 'Top', 'Right', 'Bottom', 'CenterX', 'CenterY',
				'TopLeft', 'TopRight', 'BottomLeft', 'BottomRight',
				'LeftCenter', 'TopCenter', 'RightCenter', 'BottomCenter'],
			function(key) {
				var name = 'set' + key;
				this[name] = function() {
					this._dontNotify = true;
					proto[name].apply(this, arguments);
					this._dontNotify = false;
					this._owner[this._setter](this);
				};
			}, {
				isSelected: function() {
					return !!(this._owner._selection & 2);
				},

				setSelected: function(selected) {
					var owner = this._owner;
					if (owner.changeSelection) {
						owner.changeSelection(2, selected);
					}
				}
			})
		);
	});

	var Matrix = Base.extend({
		_class: 'Matrix',

		initialize: function Matrix(arg) {
			var count = arguments.length,
				ok = true;
			if (count === 6) {
				this.set.apply(this, arguments);
			} else if (count === 1) {
				if (arg instanceof Matrix) {
					this.set(arg._a, arg._b, arg._c, arg._d, arg._tx, arg._ty);
				} else if (Array.isArray(arg)) {
					this.set.apply(this, arg);
				} else {
					ok = false;
				}
			} else if (count === 0) {
				this.reset();
			} else {
				ok = false;
			}
			if (!ok) {
				throw new Error('Unsupported matrix parameters');
			}
		},

		set: function(a, b, c, d, tx, ty, _dontNotify) {
			this._a = a;
			this._b = b;
			this._c = c;
			this._d = d;
			this._tx = tx;
			this._ty = ty;
			if (!_dontNotify)
				this._changed();
			return this;
		},

		_serialize: function(options, dictionary) {
			return Base.serialize(this.getValues(), options, true, dictionary);
		},

		_changed: function() {
			var owner = this._owner;
			if (owner) {
				if (owner._applyMatrix) {
					owner.transform(null, true);
				} else {
					owner._changed(9);
				}
			}
		},

		clone: function() {
			return new Matrix(this._a, this._b, this._c, this._d,
					this._tx, this._ty);
		},

		equals: function(mx) {
			return mx === this || mx && this._a === mx._a && this._b === mx._b
					&& this._c === mx._c && this._d === mx._d
					&& this._tx === mx._tx && this._ty === mx._ty;
		},

		toString: function() {
			var f = Formatter.instance;
			return '[[' + [f.number(this._a), f.number(this._c),
						f.number(this._tx)].join(', ') + '], ['
					+ [f.number(this._b), f.number(this._d),
						f.number(this._ty)].join(', ') + ']]';
		},

		reset: function(_dontNotify) {
			this._a = this._d = 1;
			this._b = this._c = this._tx = this._ty = 0;
			if (!_dontNotify)
				this._changed();
			return this;
		},

		apply: function(recursively, _setApplyMatrix) {
			var owner = this._owner;
			if (owner) {
				owner.transform(null, true, Base.pick(recursively, true),
						_setApplyMatrix);
				return this.isIdentity();
			}
			return false;
		},

		translate: function() {
			var point = Point.read(arguments),
				x = point.x,
				y = point.y;
			this._tx += x * this._a + y * this._c;
			this._ty += x * this._b + y * this._d;
			this._changed();
			return this;
		},

		scale: function() {
			var scale = Point.read(arguments),
				center = Point.read(arguments, 0, { readNull: true });
			if (center)
				this.translate(center);
			this._a *= scale.x;
			this._b *= scale.x;
			this._c *= scale.y;
			this._d *= scale.y;
			if (center)
				this.translate(center.negate());
			this._changed();
			return this;
		},

		rotate: function(angle ) {
			angle *= Math.PI / 180;
			var center = Point.read(arguments, 1),
				x = center.x,
				y = center.y,
				cos = Math.cos(angle),
				sin = Math.sin(angle),
				tx = x - x * cos + y * sin,
				ty = y - x * sin - y * cos,
				a = this._a,
				b = this._b,
				c = this._c,
				d = this._d;
			this._a = cos * a + sin * c;
			this._b = cos * b + sin * d;
			this._c = -sin * a + cos * c;
			this._d = -sin * b + cos * d;
			this._tx += tx * a + ty * c;
			this._ty += tx * b + ty * d;
			this._changed();
			return this;
		},

		shear: function() {
			var shear = Point.read(arguments),
				center = Point.read(arguments, 0, { readNull: true });
			if (center)
				this.translate(center);
			var a = this._a,
				b = this._b;
			this._a += shear.y * this._c;
			this._b += shear.y * this._d;
			this._c += shear.x * a;
			this._d += shear.x * b;
			if (center)
				this.translate(center.negate());
			this._changed();
			return this;
		},

		skew: function() {
			var skew = Point.read(arguments),
				center = Point.read(arguments, 0, { readNull: true }),
				toRadians = Math.PI / 180,
				shear = new Point(Math.tan(skew.x * toRadians),
					Math.tan(skew.y * toRadians));
			return this.shear(shear, center);
		},

		append: function(mx) {
			if (mx) {
				var a1 = this._a,
					b1 = this._b,
					c1 = this._c,
					d1 = this._d,
					a2 = mx._a,
					b2 = mx._c,
					c2 = mx._b,
					d2 = mx._d,
					tx2 = mx._tx,
					ty2 = mx._ty;
				this._a = a2 * a1 + c2 * c1;
				this._c = b2 * a1 + d2 * c1;
				this._b = a2 * b1 + c2 * d1;
				this._d = b2 * b1 + d2 * d1;
				this._tx += tx2 * a1 + ty2 * c1;
				this._ty += tx2 * b1 + ty2 * d1;
				this._changed();
			}
			return this;
		},

		prepend: function(mx) {
			if (mx) {
				var a1 = this._a,
					b1 = this._b,
					c1 = this._c,
					d1 = this._d,
					tx1 = this._tx,
					ty1 = this._ty,
					a2 = mx._a,
					b2 = mx._c,
					c2 = mx._b,
					d2 = mx._d,
					tx2 = mx._tx,
					ty2 = mx._ty;
				this._a = a2 * a1 + b2 * b1;
				this._c = a2 * c1 + b2 * d1;
				this._b = c2 * a1 + d2 * b1;
				this._d = c2 * c1 + d2 * d1;
				this._tx = a2 * tx1 + b2 * ty1 + tx2;
				this._ty = c2 * tx1 + d2 * ty1 + ty2;
				this._changed();
			}
			return this;
		},

		appended: function(mx) {
			return this.clone().append(mx);
		},

		prepended: function(mx) {
			return this.clone().prepend(mx);
		},

		invert: function() {
			var a = this._a,
				b = this._b,
				c = this._c,
				d = this._d,
				tx = this._tx,
				ty = this._ty,
				det = a * d - b * c,
				res = null;
			if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
				this._a = d / det;
				this._b = -b / det;
				this._c = -c / det;
				this._d = a / det;
				this._tx = (c * ty - d * tx) / det;
				this._ty = (b * tx - a * ty) / det;
				res = this;
			}
			return res;
		},

		inverted: function() {
			return this.clone().invert();
		},

		concatenate: '#append',
		preConcatenate: '#prepend',
		chain: '#appended',

		_shiftless: function() {
			return new Matrix(this._a, this._b, this._c, this._d, 0, 0);
		},

		_orNullIfIdentity: function() {
			return this.isIdentity() ? null : this;
		},

		isIdentity: function() {
			return this._a === 1 && this._b === 0 && this._c === 0 && this._d === 1
					&& this._tx === 0 && this._ty === 0;
		},

		isInvertible: function() {
			var det = this._a * this._d - this._c * this._b;
			return det && !isNaN(det) && isFinite(this._tx) && isFinite(this._ty);
		},

		isSingular: function() {
			return !this.isInvertible();
		},

		transform: function( src, dst, count) {
			return arguments.length < 3
				? this._transformPoint(Point.read(arguments))
				: this._transformCoordinates(src, dst, count);
		},

		_transformPoint: function(point, dest, _dontNotify) {
			var x = point.x,
				y = point.y;
			if (!dest)
				dest = new Point();
			return dest.set(
					x * this._a + y * this._c + this._tx,
					x * this._b + y * this._d + this._ty,
					_dontNotify);
		},

		_transformCoordinates: function(src, dst, count) {
			for (var i = 0, max = 2 * count; i < max; i += 2) {
				var x = src[i],
					y = src[i + 1];
				dst[i] = x * this._a + y * this._c + this._tx;
				dst[i + 1] = x * this._b + y * this._d + this._ty;
			}
			return dst;
		},

		_transformCorners: function(rect) {
			var x1 = rect.x,
				y1 = rect.y,
				x2 = x1 + rect.width,
				y2 = y1 + rect.height,
				coords = [ x1, y1, x2, y1, x2, y2, x1, y2 ];
			return this._transformCoordinates(coords, coords, 4);
		},

		_transformBounds: function(bounds, dest, _dontNotify) {
			var coords = this._transformCorners(bounds),
				min = coords.slice(0, 2),
				max = min.slice();
			for (var i = 2; i < 8; i++) {
				var val = coords[i],
					j = i & 1;
				if (val < min[j]) {
					min[j] = val;
				} else if (val > max[j]) {
					max[j] = val;
				}
			}
			if (!dest)
				dest = new Rectangle();
			return dest.set(min[0], min[1], max[0] - min[0], max[1] - min[1],
					_dontNotify);
		},

		inverseTransform: function() {
			return this._inverseTransform(Point.read(arguments));
		},

		_inverseTransform: function(point, dest, _dontNotify) {
			var a = this._a,
				b = this._b,
				c = this._c,
				d = this._d,
				tx = this._tx,
				ty = this._ty,
				det = a * d - b * c,
				res = null;
			if (det && !isNaN(det) && isFinite(tx) && isFinite(ty)) {
				var x = point.x - this._tx,
					y = point.y - this._ty;
				if (!dest)
					dest = new Point();
				res = dest.set(
						(x * d - y * c) / det,
						(y * a - x * b) / det,
						_dontNotify);
			}
			return res;
		},

		decompose: function() {
			var a = this._a,
				b = this._b,
				c = this._c,
				d = this._d,
				det = a * d - b * c,
				sqrt = Math.sqrt,
				atan2 = Math.atan2,
				degrees = 180 / Math.PI,
				rotate,
				scale,
				skew;
			if (a !== 0 || b !== 0) {
				var r = sqrt(a * a + b * b);
				rotate = Math.acos(a / r) * (b > 0 ? 1 : -1);
				scale = [r, det / r];
				skew = [atan2(a * c + b * d, r * r), 0];
			} else if (c !== 0 || d !== 0) {
				var s = sqrt(c * c + d * d);
				rotate = Math.asin(c / s)  * (d > 0 ? 1 : -1);
				scale = [det / s, s];
				skew = [0, atan2(a * c + b * d, s * s)];
			} else {
				rotate = 0;
				skew = scale = [0, 0];
			}
			return {
				translation: this.getTranslation(),
				rotation: rotate * degrees,
				scaling: new Point(scale),
				skewing: new Point(skew[0] * degrees, skew[1] * degrees)
			};
		},

		getValues: function() {
			return [ this._a, this._b, this._c, this._d, this._tx, this._ty ];
		},

		getTranslation: function() {
			return new Point(this._tx, this._ty);
		},

		getScaling: function() {
			return (this.decompose() || {}).scaling;
		},

		getRotation: function() {
			return (this.decompose() || {}).rotation;
		},

		applyToContext: function(ctx) {
			if (!this.isIdentity()) {
				ctx.transform(this._a, this._b, this._c, this._d,
						this._tx, this._ty);
			}
		}
	}, Base.each(['a', 'b', 'c', 'd', 'tx', 'ty'], function(key) {
		var part = Base.capitalize(key),
			prop = '_' + key;
		this['get' + part] = function() {
			return this[prop];
		};
		this['set' + part] = function(value) {
			this[prop] = value;
			this._changed();
		};
	}, {}));

	var Line = Base.extend({
		_class: 'Line',

		initialize: function Line(arg0, arg1, arg2, arg3, arg4) {
			var asVector = false;
			if (arguments.length >= 4) {
				this._px = arg0;
				this._py = arg1;
				this._vx = arg2;
				this._vy = arg3;
				asVector = arg4;
			} else {
				this._px = arg0.x;
				this._py = arg0.y;
				this._vx = arg1.x;
				this._vy = arg1.y;
				asVector = arg2;
			}
			if (!asVector) {
				this._vx -= this._px;
				this._vy -= this._py;
			}
		},

		getPoint: function() {
			return new Point(this._px, this._py);
		},

		getVector: function() {
			return new Point(this._vx, this._vy);
		},

		getLength: function() {
			return this.getVector().getLength();
		},

		intersect: function(line, isInfinite) {
			return Line.intersect(
					this._px, this._py, this._vx, this._vy,
					line._px, line._py, line._vx, line._vy,
					true, isInfinite);
		},

		getSide: function(point, isInfinite) {
			return Line.getSide(
					this._px, this._py, this._vx, this._vy,
					point.x, point.y, true, isInfinite);
		},

		getDistance: function(point) {
			return Math.abs(Line.getSignedDistance(
					this._px, this._py, this._vx, this._vy,
					point.x, point.y, true));
		},

		isCollinear: function(line) {
			return Point.isCollinear(this._vx, this._vy, line._vx, line._vy);
		},

		isOrthogonal: function(line) {
			return Point.isOrthogonal(this._vx, this._vy, line._vx, line._vy);
		},

		statics: {
			intersect: function(p1x, p1y, v1x, v1y, p2x, p2y, v2x, v2y, asVector,
					isInfinite) {
				if (!asVector) {
					v1x -= p1x;
					v1y -= p1y;
					v2x -= p2x;
					v2y -= p2y;
				}
				var cross = v1x * v2y - v1y * v2x;
				if (!Numerical.isZero(cross)) {
					var dx = p1x - p2x,
						dy = p1y - p2y,
						u1 = (v2x * dy - v2y * dx) / cross,
						u2 = (v1x * dy - v1y * dx) / cross,
						epsilon = 1e-12,
						uMin = -epsilon,
						uMax = 1 + epsilon;
					if (isInfinite
							|| uMin < u1 && u1 < uMax && uMin < u2 && u2 < uMax) {
						if (!isInfinite) {
							u1 = u1 <= 0 ? 0 : u1 >= 1 ? 1 : u1;
						}
						return new Point(
								p1x + u1 * v1x,
								p1y + u1 * v1y);
					}
				}
			},

			getSide: function(px, py, vx, vy, x, y, asVector, isInfinite) {
				if (!asVector) {
					vx -= px;
					vy -= py;
				}
				var v2x = x - px,
					v2y = y - py,
					ccw = v2x * vy - v2y * vx;
				if (ccw === 0 && !isInfinite) {
					ccw = (v2x * vx + v2x * vx) / (vx * vx + vy * vy);
					if (ccw >= 0 && ccw <= 1)
						ccw = 0;
				}
				return ccw < 0 ? -1 : ccw > 0 ? 1 : 0;
			},

			getSignedDistance: function(px, py, vx, vy, x, y, asVector) {
				if (!asVector) {
					vx -= px;
					vy -= py;
				}
				return vx === 0 ? vy > 0 ? x - px : px - x
					 : vy === 0 ? vx < 0 ? y - py : py - y
					 : ((x-px) * vy - (y-py) * vx) / Math.sqrt(vx * vx + vy * vy);
			}
		}
	});

	var Project = PaperScopeItem.extend({
		_class: 'Project',
		_list: 'projects',
		_reference: 'project',
		_compactSerialize: true,

		initialize: function Project(element) {
			PaperScopeItem.call(this, true);
			this._children = [];
			this._namedChildren = {};
			this._activeLayer = null;
			this._currentStyle = new Style(null, null, this);
			this._view = View.create(this,
					element || CanvasProvider.getCanvas(1, 1));
			this._selectionItems = {};
			this._selectionCount = 0;
			this._updateVersion = 0;
		},

		_serialize: function(options, dictionary) {
			return Base.serialize(this._children, options, true, dictionary);
		},

		_changed: function(flags, item) {
			if (flags & 1) {
				var view = this._view;
				if (view) {
					view._needsUpdate = true;
					if (!view._requested && view._autoUpdate)
						view.requestUpdate();
				}
			}
			var changes = this._changes;
			if (changes && item) {
				var changesById = this._changesById,
					id = item._id,
					entry = changesById[id];
				if (entry) {
					entry.flags |= flags;
				} else {
					changes.push(changesById[id] = { item: item, flags: flags });
				}
			}
		},

		clear: function() {
			var children = this._children;
			for (var i = children.length - 1; i >= 0; i--)
				children[i].remove();
		},

		isEmpty: function() {
			return this._children.length === 0;
		},

		remove: function remove() {
			if (!remove.base.call(this))
				return false;
			if (this._view)
				this._view.remove();
			return true;
		},

		getView: function() {
			return this._view;
		},

		getCurrentStyle: function() {
			return this._currentStyle;
		},

		setCurrentStyle: function(style) {
			this._currentStyle.initialize(style);
		},

		getIndex: function() {
			return this._index;
		},

		getOptions: function() {
			return this._scope.settings;
		},

		getLayers: function() {
			return this._children;
		},

		getActiveLayer: function() {
			return this._activeLayer || new Layer({ project: this, insert: true });
		},

		getSymbolDefinitions: function() {
			var definitions = [],
				ids = {};
			this.getItems({
				class: SymbolItem,
				match: function(item) {
					var definition = item._definition,
						id = definition._id;
					if (!ids[id]) {
						ids[id] = true;
						definitions.push(definition);
					}
					return false;
				}
			});
			return definitions;
		},

		getSymbols: 'getSymbolDefinitions',

		getSelectedItems: function() {
			var selectionItems = this._selectionItems,
				items = [];
			for (var id in selectionItems) {
				var item = selectionItems[id],
					selection = item._selection;
				if (selection & 1 && item.isInserted()) {
					items.push(item);
				} else if (!selection) {
					this._updateSelection(item);
				}
			}
			return items;
		},

		_updateSelection: function(item) {
			var id = item._id,
				selectionItems = this._selectionItems;
			if (item._selection) {
				if (selectionItems[id] !== item) {
					this._selectionCount++;
					selectionItems[id] = item;
				}
			} else if (selectionItems[id] === item) {
				this._selectionCount--;
				delete selectionItems[id];
			}
		},

		selectAll: function() {
			var children = this._children;
			for (var i = 0, l = children.length; i < l; i++)
				children[i].setFullySelected(true);
		},

		deselectAll: function() {
			var selectionItems = this._selectionItems;
			for (var i in selectionItems)
				selectionItems[i].setFullySelected(false);
		},

		addLayer: function(layer) {
			return this.insertLayer(undefined, layer);
		},

		insertLayer: function(index, layer) {
			if (layer instanceof Layer) {
				layer._remove(false, true);
				Base.splice(this._children, [layer], index, 0);
				layer._setProject(this, true);
				var name = layer._name;
				if (name)
					layer.setName(name);
				if (this._changes)
					layer._changed(5);
				if (!this._activeLayer)
					this._activeLayer = layer;
			} else {
				layer = null;
			}
			return layer;
		},

		_insertItem: function(index, item, _preserve, _created) {
			item = this.insertLayer(index, item)
					|| (this._activeLayer || this._insertItem(undefined,
							new Layer(Item.NO_INSERT), true, true))
							.insertChild(index, item, _preserve);
			if (_created && item.activate)
				item.activate();
			return item;
		},

		getItems: function(options) {
			return Item._getItems(this, options);
		},

		getItem: function(options) {
			return Item._getItems(this, options, null, null, true)[0] || null;
		},

		importJSON: function(json) {
			this.activate();
			var layer = this._activeLayer;
			return Base.importJSON(json, layer && layer.isEmpty() && layer);
		},

		removeOn: function(type) {
			var sets = this._removeSets;
			if (sets) {
				if (type === 'mouseup')
					sets.mousedrag = null;
				var set = sets[type];
				if (set) {
					for (var id in set) {
						var item = set[id];
						for (var key in sets) {
							var other = sets[key];
							if (other && other != set)
								delete other[item._id];
						}
						item.remove();
					}
					sets[type] = null;
				}
			}
		},

		draw: function(ctx, matrix, pixelRatio) {
			this._updateVersion++;
			ctx.save();
			matrix.applyToContext(ctx);
			var children = this._children,
				param = new Base({
					offset: new Point(0, 0),
					pixelRatio: pixelRatio,
					viewMatrix: matrix.isIdentity() ? null : matrix,
					matrices: [new Matrix()],
					updateMatrix: true
				});
			for (var i = 0, l = children.length; i < l; i++) {
				children[i].draw(ctx, param);
			}
			ctx.restore();

			if (this._selectionCount > 0) {
				ctx.save();
				ctx.strokeWidth = 1;
				var items = this._selectionItems,
					size = this._scope.settings.handleSize,
					version = this._updateVersion;
				for (var id in items) {
					items[id]._drawSelection(ctx, matrix, size, items, version);
				}
				ctx.restore();
			}
		}
	});

	var Item = Base.extend(Emitter, {
		statics: {
			extend: function extend(src) {
				if (src._serializeFields)
					src._serializeFields = Base.set({},
						this.prototype._serializeFields, src._serializeFields);
				return extend.base.apply(this, arguments);
			},

			NO_INSERT: { insert: false }
		},

		_class: 'Item',
		_name: null,
		_applyMatrix: true,
		_canApplyMatrix: true,
		_canScaleStroke: false,
		_pivot: null,
		_visible: true,
		_blendMode: 'normal',
		_opacity: 1,
		_locked: false,
		_guide: false,
		_clipMask: false,
		_selection: 0,
		_selectBounds: true,
		_selectChildren: false,
		_serializeFields: {
			name: null,
			applyMatrix: null,
			matrix: new Matrix(),
			pivot: null,
			visible: true,
			blendMode: 'normal',
			opacity: 1,
			locked: false,
			guide: false,
			clipMask: false,
			selected: false,
			data: {}
		}
	},
	new function() {
		var handlers = ['onMouseDown', 'onMouseUp', 'onMouseDrag', 'onClick',
				'onDoubleClick', 'onMouseMove', 'onMouseEnter', 'onMouseLeave'];
		return Base.each(handlers,
			function(name) {
				this._events[name] = {
					install: function(type) {
						this.getView()._countItemEvent(type, 1);
					},

					uninstall: function(type) {
						this.getView()._countItemEvent(type, -1);
					}
				};
			}, {
				_events: {
					onFrame: {
						install: function() {
							this.getView()._animateItem(this, true);
						},

						uninstall: function() {
							this.getView()._animateItem(this, false);
						}
					},

					onLoad: {},
					onError: {}
				},
				statics: {
					_itemHandlers: handlers
				}
			}
		);
	}, {
		initialize: function Item() {
		},

		_initialize: function(props, point) {
			var hasProps = props && Base.isPlainObject(props),
				internal = hasProps && props.internal === true,
				matrix = this._matrix = new Matrix(),
				project = hasProps && props.project || paper.project,
				settings = paper.settings;
			this._id = internal ? null : UID.get();
			this._parent = this._index = null;
			this._applyMatrix = this._canApplyMatrix && settings.applyMatrix;
			if (point)
				matrix.translate(point);
			matrix._owner = this;
			this._style = new Style(project._currentStyle, this, project);
			if (internal || hasProps && props.insert === false
				|| !settings.insertItems && !(hasProps && props.insert === true)) {
				this._setProject(project);
			} else {
				(hasProps && props.parent || project)
						._insertItem(undefined, this, true, true);
			}
			if (hasProps && props !== Item.NO_INSERT) {
				Base.filter(this, props, {
					internal: true, insert: true, project: true, parent: true
				});
			}
			return hasProps;
		},

		_serialize: function(options, dictionary) {
			var props = {},
				that = this;

			function serialize(fields) {
				for (var key in fields) {
					var value = that[key];
					if (!Base.equals(value, key === 'leading'
							? fields.fontSize * 1.2 : fields[key])) {
						props[key] = Base.serialize(value, options,
								key !== 'data', dictionary);
					}
				}
			}

			serialize(this._serializeFields);
			if (!(this instanceof Group))
				serialize(this._style._defaults);
			return [ this._class, props ];
		},

		_changed: function(flags) {
			var symbol = this._symbol,
				cacheParent = this._parent || symbol,
				project = this._project;
			if (flags & 8) {
				this._bounds = this._position = this._decomposed =
						this._globalMatrix = undefined;
			}
			if (cacheParent
					&& (flags & 40)) {
				Item._clearBoundsCache(cacheParent);
			}
			if (flags & 2) {
				Item._clearBoundsCache(this);
			}
			if (project)
				project._changed(flags, this);
			if (symbol)
				symbol._changed(flags);
		},

		set: function(props) {
			if (props)
				this._set(props);
			return this;
		},

		getId: function() {
			return this._id;
		},

		getName: function() {
			return this._name;
		},

		setName: function(name) {

			if (this._name)
				this._removeNamed();
			if (name === (+name) + '')
				throw new Error(
						'Names consisting only of numbers are not supported.');
			var owner = this._getOwner();
			if (name && owner) {
				var children = owner._children,
					namedChildren = owner._namedChildren;
				(namedChildren[name] = namedChildren[name] || []).push(this);
				if (!(name in children))
					children[name] = this;
			}
			this._name = name || undefined;
			this._changed(128);
		},

		getStyle: function() {
			return this._style;
		},

		setStyle: function(style) {
			this.getStyle().set(style);
		}
	}, Base.each(['locked', 'visible', 'blendMode', 'opacity', 'guide'],
		function(name) {
			var part = Base.capitalize(name),
				name = '_' + name;
			this['get' + part] = function() {
				return this[name];
			};
			this['set' + part] = function(value) {
				if (value != this[name]) {
					this[name] = value;
					this._changed(name === '_locked'
							? 128 : 129);
				}
			};
		},
	{}), {
		beans: true,

		getSelection: function() {
			return this._selection;
		},

		setSelection: function(selection) {
			if (selection !== this._selection) {
				this._selection = selection;
				var project = this._project;
				if (project) {
					project._updateSelection(this);
					this._changed(129);
				}
			}
		},

		changeSelection: function(flag, selected) {
			var selection = this._selection;
			this.setSelection(selected ? selection | flag : selection & ~flag);
		},

		isSelected: function() {
			if (this._selectChildren) {
				var children = this._children;
				for (var i = 0, l = children.length; i < l; i++)
					if (children[i].isSelected())
						return true;
			}
			return !!(this._selection & 1);
		},

		setSelected: function(selected) {
			if (this._selectChildren) {
				var children = this._children;
				for (var i = 0, l = children.length; i < l; i++)
					children[i].setSelected(selected);
			}
			this.changeSelection(1, selected);
		},

		isFullySelected: function() {
			var children = this._children,
				selected = !!(this._selection & 1);
			if (children && selected) {
				for (var i = 0, l = children.length; i < l; i++)
					if (!children[i].isFullySelected())
						return false;
				return true;
			}
			return selected;
		},

		setFullySelected: function(selected) {
			var children = this._children;
			if (children) {
				for (var i = 0, l = children.length; i < l; i++)
					children[i].setFullySelected(selected);
			}
			this.changeSelection(1, selected);
		},

		isClipMask: function() {
			return this._clipMask;
		},

		setClipMask: function(clipMask) {
			if (this._clipMask != (clipMask = !!clipMask)) {
				this._clipMask = clipMask;
				if (clipMask) {
					this.setFillColor(null);
					this.setStrokeColor(null);
				}
				this._changed(129);
				if (this._parent)
					this._parent._changed(1024);
			}
		},

		getData: function() {
			if (!this._data)
				this._data = {};
			return this._data;
		},

		setData: function(data) {
			this._data = data;
		},

		getPosition: function(_dontLink) {
			var position = this._position,
				ctor = _dontLink ? Point : LinkedPoint;
			if (!position) {
				var pivot = this._pivot;
				position = this._position = pivot
						? this._matrix._transformPoint(pivot)
						: this.getBounds().getCenter(true);
			}
			return new ctor(position.x, position.y, this, 'setPosition');
		},

		setPosition: function() {
			this.translate(Point.read(arguments).subtract(this.getPosition(true)));
		},

		getPivot: function(_dontLink) {
			var pivot = this._pivot;
			if (pivot) {
				var ctor = _dontLink ? Point : LinkedPoint;
				pivot = new ctor(pivot.x, pivot.y, this, 'setPivot');
			}
			return pivot;
		},

		setPivot: function() {
			this._pivot = Point.read(arguments, 0, { clone: true, readNull: true });
			this._position = undefined;
		}
	}, Base.each({
			getStrokeBounds: { stroke: true },
			getHandleBounds: { handle: true },
			getInternalBounds: { internal: true }
		},
		function(options, key) {
			this[key] = function(matrix) {
				return this.getBounds(matrix, options);
			};
		},
	{
		beans: true,

		getBounds: function(matrix, options) {
			var hasMatrix = options || matrix instanceof Matrix,
				opts = Base.set({}, hasMatrix ? options : matrix,
						this._boundsOptions);
			if (!opts.stroke || this.getStrokeScaling())
				opts.cacheItem = this;
			var bounds = this._getCachedBounds(hasMatrix && matrix, opts);
			return arguments.length === 0
					? new LinkedRectangle(bounds.x, bounds.y, bounds.width,
							bounds.height, this, 'setBounds')
					: bounds;
		},

		setBounds: function() {
			var rect = Rectangle.read(arguments),
				bounds = this.getBounds(),
				_matrix = this._matrix,
				matrix = new Matrix(),
				center = rect.getCenter();
			matrix.translate(center);
			if (rect.width != bounds.width || rect.height != bounds.height) {
				if (!_matrix.isInvertible()) {
					_matrix.initialize(_matrix._backup
							|| new Matrix().translate(_matrix.getTranslation()));
					bounds = this.getBounds();
				}
				matrix.scale(
						bounds.width !== 0 ? rect.width / bounds.width : 0,
						bounds.height !== 0 ? rect.height / bounds.height : 0);
			}
			center = bounds.getCenter();
			matrix.translate(-center.x, -center.y);
			this.transform(matrix);
		},

		_getBounds: function(matrix, options) {
			var children = this._children;
			if (!children || children.length === 0)
				return new Rectangle();
			Item._updateBoundsCache(this, options.cacheItem);
			return Item._getBounds(children, matrix, options);
		},

		_getCachedBounds: function(matrix, options) {
			matrix = matrix && matrix._orNullIfIdentity();
			var internal = options.internal,
				cacheItem = options.cacheItem,
				_matrix = internal ? null : this._matrix._orNullIfIdentity(),
				cacheKey = cacheItem && (!matrix || matrix.equals(_matrix)) && [
					options.stroke ? 1 : 0,
					options.handle ? 1 : 0,
					internal ? 1 : 0
				].join('');
			Item._updateBoundsCache(this._parent || this._symbol, cacheItem);
			if (cacheKey && this._bounds && cacheKey in this._bounds)
				return this._bounds[cacheKey].rect.clone();
			var bounds = this._getBounds(matrix || _matrix, options);
			if (cacheKey) {
				if (!this._bounds)
					this._bounds = {};
				var cached = this._bounds[cacheKey] = {
					rect: bounds.clone(),
					internal: options.internal
				};
			}
			return bounds;
		},

		_getStrokeMatrix: function(matrix, options) {
			var parent = this.getStrokeScaling() ? null
					: options && options.internal ? this
						: this._parent || this._symbol && this._symbol._item,
				mx = parent ? parent.getViewMatrix().invert() : matrix;
			return mx && mx._shiftless();
		},

		statics: {
			_updateBoundsCache: function(parent, item) {
				if (parent && item) {
					var id = item._id,
						ref = parent._boundsCache = parent._boundsCache || {
							ids: {},
							list: []
						};
					if (!ref.ids[id]) {
						ref.list.push(item);
						ref.ids[id] = item;
					}
				}
			},

			_clearBoundsCache: function(item) {
				var cache = item._boundsCache;
				if (cache) {
					item._bounds = item._position = item._boundsCache = undefined;
					for (var i = 0, list = cache.list, l = list.length; i < l; i++){
						var other = list[i];
						if (other !== item) {
							other._bounds = other._position = undefined;
							if (other._boundsCache)
								Item._clearBoundsCache(other);
						}
					}
				}
			},

			_getBounds: function(items, matrix, options) {
				var x1 = Infinity,
					x2 = -x1,
					y1 = x1,
					y2 = x2;
				options = options || {};
				for (var i = 0, l = items.length; i < l; i++) {
					var item = items[i];
					if (item._visible && !item.isEmpty()) {
						var rect = item._getCachedBounds(
							matrix && matrix.appended(item._matrix), options);
						x1 = Math.min(rect.x, x1);
						y1 = Math.min(rect.y, y1);
						x2 = Math.max(rect.x + rect.width, x2);
						y2 = Math.max(rect.y + rect.height, y2);
					}
				}
				return isFinite(x1)
						? new Rectangle(x1, y1, x2 - x1, y2 - y1)
						: new Rectangle();
			}
		}

	}), {
		beans: true,

		_decompose: function() {
			return this._decomposed || (this._decomposed = this._matrix.decompose());
		},

		getRotation: function() {
			var decomposed = this._decompose();
			return decomposed && decomposed.rotation;
		},

		setRotation: function(rotation) {
			var current = this.getRotation();
			if (current != null && rotation != null) {
				this.rotate(rotation - current);
			}
		},

		getScaling: function(_dontLink) {
			var decomposed = this._decompose(),
				scaling = decomposed && decomposed.scaling,
				ctor = _dontLink ? Point : LinkedPoint;
			return scaling && new ctor(scaling.x, scaling.y, this, 'setScaling');
		},

		setScaling: function() {
			var current = this.getScaling(),
				scaling = Point.read(arguments, 0, { clone: true, readNull: true });
			if (current && scaling) {
				this.scale(scaling.x / current.x, scaling.y / current.y);
			}
		},

		getMatrix: function() {
			return this._matrix;
		},

		setMatrix: function() {
			var matrix = this._matrix;
			matrix.initialize.apply(matrix, arguments);
		},

		getGlobalMatrix: function(_dontClone) {
			var matrix = this._globalMatrix,
				updateVersion = this._project._updateVersion;
			if (matrix && matrix._updateVersion !== updateVersion)
				matrix = null;
			if (!matrix) {
				matrix = this._globalMatrix = this._matrix.clone();
				var parent = this._parent;
				if (parent)
					matrix.prepend(parent.getGlobalMatrix(true));
				matrix._updateVersion = updateVersion;
			}
			return _dontClone ? matrix : matrix.clone();
		},

		getViewMatrix: function() {
			return this.getGlobalMatrix().prepend(this.getView()._matrix);
		},

		getApplyMatrix: function() {
			return this._applyMatrix;
		},

		setApplyMatrix: function(apply) {
			if (this._applyMatrix = this._canApplyMatrix && !!apply)
				this.transform(null, true);
		},

		getTransformContent: '#getApplyMatrix',
		setTransformContent: '#setApplyMatrix',
	}, {
		getProject: function() {
			return this._project;
		},

		_setProject: function(project, installEvents) {
			if (this._project !== project) {
				if (this._project)
					this._installEvents(false);
				this._project = project;
				var children = this._children;
				for (var i = 0, l = children && children.length; i < l; i++)
					children[i]._setProject(project);
				installEvents = true;
			}
			if (installEvents)
				this._installEvents(true);
		},

		getView: function() {
			return this._project._view;
		},

		_installEvents: function _installEvents(install) {
			_installEvents.base.call(this, install);
			var children = this._children;
			for (var i = 0, l = children && children.length; i < l; i++)
				children[i]._installEvents(install);
		},

		getLayer: function() {
			var parent = this;
			while (parent = parent._parent) {
				if (parent instanceof Layer)
					return parent;
			}
			return null;
		},

		getParent: function() {
			return this._parent;
		},

		setParent: function(item) {
			return item.addChild(this);
		},

		_getOwner: '#getParent',

		getChildren: function() {
			return this._children;
		},

		setChildren: function(items, _preserve) {
			this.removeChildren();
			this.addChildren(items, _preserve);
		},

		getFirstChild: function() {
			return this._children && this._children[0] || null;
		},

		getLastChild: function() {
			return this._children && this._children[this._children.length - 1]
					|| null;
		},

		getNextSibling: function() {
			var owner = this._getOwner();
			return owner && owner._children[this._index + 1] || null;
		},

		getPreviousSibling: function() {
			var owner = this._getOwner();
			return owner && owner._children[this._index - 1] || null;
		},

		getIndex: function() {
			return this._index;
		},

		equals: function(item) {
			return item === this || item && this._class === item._class
					&& this._style.equals(item._style)
					&& this._matrix.equals(item._matrix)
					&& this._locked === item._locked
					&& this._visible === item._visible
					&& this._blendMode === item._blendMode
					&& this._opacity === item._opacity
					&& this._clipMask === item._clipMask
					&& this._guide === item._guide
					&& this._equals(item)
					|| false;
		},

		_equals: function(item) {
			return Base.equals(this._children, item._children);
		},

		clone: function(options) {
			var copy = new this.constructor(Item.NO_INSERT),
				children = this._children,
				insert = Base.pick(options ? options.insert : undefined,
						options === undefined || options === true),
				deep = Base.pick(options ? options.deep : undefined, true);
			if (children)
				copy.copyAttributes(this);
			if (!children || deep)
				copy.copyContent(this);
			if (!children)
				copy.copyAttributes(this);
			if (insert)
				copy.insertAbove(this);
			var name = this._name,
				parent = this._parent;
			if (name && parent) {
				var children = parent._children,
					orig = name,
					i = 1;
				while (children[name])
					name = orig + ' ' + (i++);
				if (name !== orig)
					copy.setName(name);
			}
			return copy;
		},

		copyContent: function(source) {
			var children = source._children;
			for (var i = 0, l = children && children.length; i < l; i++) {
				this.addChild(children[i].clone(false), true);
			}
		},

		copyAttributes: function(source, excludeMatrix) {
			this.setStyle(source._style);
			var keys = ['_locked', '_visible', '_blendMode', '_opacity',
					'_clipMask', '_guide'];
			for (var i = 0, l = keys.length; i < l; i++) {
				var key = keys[i];
				if (source.hasOwnProperty(key))
					this[key] = source[key];
			}
			if (!excludeMatrix)
				this._matrix.initialize(source._matrix);
			this.setApplyMatrix(source._applyMatrix);
			this.setPivot(source._pivot);
			this.setSelection(source._selection);
			var data = source._data,
				name = source._name;
			this._data = data ? Base.clone(data) : null;
			if (name)
				this.setName(name);
		},

		rasterize: function(resolution, insert) {
			var bounds = this.getStrokeBounds(),
				scale = (resolution || this.getView().getResolution()) / 72,
				topLeft = bounds.getTopLeft().floor(),
				bottomRight = bounds.getBottomRight().ceil(),
				size = new Size(bottomRight.subtract(topLeft)),
				raster = new Raster(Item.NO_INSERT);
			if (!size.isZero()) {
				var canvas = CanvasProvider.getCanvas(size.multiply(scale)),
					ctx = canvas.getContext('2d'),
					matrix = new Matrix().scale(scale).translate(topLeft.negate());
				ctx.save();
				matrix.applyToContext(ctx);
				this.draw(ctx, new Base({ matrices: [matrix] }));
				ctx.restore();
				raster.setCanvas(canvas);
			}
			raster.transform(new Matrix().translate(topLeft.add(size.divide(2)))
					.scale(1 / scale));
			if (insert === undefined || insert)
				raster.insertAbove(this);
			return raster;
		},

		contains: function() {
			return !!this._contains(
					this._matrix._inverseTransform(Point.read(arguments)));
		},

		_contains: function(point) {
			var children = this._children;
			if (children) {
				for (var i = children.length - 1; i >= 0; i--) {
					if (children[i].contains(point))
						return true;
				}
				return false;
			}
			return point.isInside(this.getInternalBounds());
		},

		isInside: function() {
			return Rectangle.read(arguments).contains(this.getBounds());
		},

		_asPathItem: function() {
			return new Path.Rectangle({
				rectangle: this.getInternalBounds(),
				matrix: this._matrix,
				insert: false,
			});
		},

		intersects: function(item, _matrix) {
			if (!(item instanceof Item))
				return false;
			return this._asPathItem().getIntersections(item._asPathItem(), null,
					_matrix, true).length > 0;
		}
	},
	new function() {
		function hitTest() {
			return this._hitTest(
					Point.read(arguments),
					HitResult.getOptions(arguments));
		}

		function hitTestAll() {
			var point = Point.read(arguments),
				options = HitResult.getOptions(arguments),
				callback = options.match,
				results = [];
			options = Base.set({}, options, {
				match: function(hit) {
					if (!callback || callback(hit))
						results.push(hit);
				}
			});
			this._hitTest(point, options);
			return results;
		}

		function hitTestChildren(point, options, viewMatrix, _exclude) {
			var children = this._children;
			if (children) {
				for (var i = children.length - 1; i >= 0; i--) {
					var child = children[i];
					var res = child !== _exclude && child._hitTest(point, options,
							viewMatrix);
					if (res)
						return res;
				}
			}
			return null;
		}

		Project.inject({
			hitTest: hitTest,
			hitTestAll: hitTestAll,
			_hitTest: hitTestChildren
		});

		return {
			hitTest: hitTest,
			hitTestAll: hitTestAll,
			_hitTestChildren: hitTestChildren,
		};
	}, {

		_hitTest: function(point, options, parentViewMatrix) {
			if (this._locked || !this._visible || this._guide && !options.guides
					|| this.isEmpty()) {
				return null;
			}

			var matrix = this._matrix,
				viewMatrix = parentViewMatrix
						? parentViewMatrix.appended(matrix)
						: this.getGlobalMatrix().prepend(this.getView()._matrix),
				strokeMatrix = this.getStrokeScaling()
						? null
						: viewMatrix.inverted()._shiftless(),
				tolerance = Math.max(options.tolerance, 1e-6),
				tolerancePadding = options._tolerancePadding = new Size(
						Path._getStrokePadding(tolerance, strokeMatrix));
			point = matrix._inverseTransform(point);
			if (!point || !this._children &&
				!this.getBounds({ internal: true, stroke: true, handle: true })
					.expand(tolerancePadding.multiply(2))._containsPoint(point)) {
				return null;
			}

			var checkSelf = !(options.guides && !this._guide
					|| options.selected && !this.isSelected()
					|| options.type && options.type !== Base.hyphenate(this._class)
					|| options.class && !(this instanceof options.class)),
				callback = options.match,
				that = this,
				bounds,
				res;

			function match(hit) {
				return !callback || hit && callback(hit) ? hit : null;
			}

			function checkBounds(type, part) {
				var pt = bounds['get' + part]();
				if (point.subtract(pt).divide(tolerancePadding).length <= 1) {
					return new HitResult(type, that,
							{ name: Base.hyphenate(part), point: pt });
				}
			}

			if (checkSelf && (options.center || options.bounds) && this._parent) {
				bounds = this.getInternalBounds();
				if (options.center) {
					res = checkBounds('center', 'Center');
				}
				if (!res && options.bounds) {
					var points = [
						'TopLeft', 'TopRight', 'BottomLeft', 'BottomRight',
						'LeftCenter', 'TopCenter', 'RightCenter', 'BottomCenter'
					];
					for (var i = 0; i < 8 && !res; i++) {
						res = checkBounds('bounds', points[i]);
					}
				}
				res = match(res);
			}

			if (!res) {
				res = this._hitTestChildren(point, options, viewMatrix)
					|| checkSelf
						&& match(this._hitTestSelf(point, options, viewMatrix,
							strokeMatrix))
					|| null;
			}
			if (res && res.point) {
				res.point = matrix.transform(res.point);
			}
			return res;
		},

		_hitTestSelf: function(point, options) {
			if (options.fill && this.hasFill() && this._contains(point))
				return new HitResult('fill', this);
		},

		matches: function(name, compare) {
			function matchObject(obj1, obj2) {
				for (var i in obj1) {
					if (obj1.hasOwnProperty(i)) {
						var val1 = obj1[i],
							val2 = obj2[i];
						if (Base.isPlainObject(val1) && Base.isPlainObject(val2)) {
							if (!matchObject(val1, val2))
								return false;
						} else if (!Base.equals(val1, val2)) {
							return false;
						}
					}
				}
				return true;
			}
			var type = typeof name;
			if (type === 'object') {
				for (var key in name) {
					if (name.hasOwnProperty(key) && !this.matches(key, name[key]))
						return false;
				}
				return true;
			} else if (type === 'function') {
				return name(this);
			} else if (name === 'match') {
				return compare(this);
			} else {
				var value = /^(empty|editable)$/.test(name)
						? this['is' + Base.capitalize(name)]()
						: name === 'type'
							? Base.hyphenate(this._class)
							: this[name];
				if (name === 'class') {
					if (typeof compare === 'function')
						return this instanceof compare;
					value = this._class;
				}
				if (typeof compare === 'function') {
					return !!compare(value);
				} else if (compare) {
					if (compare.test) {
						return compare.test(value);
					} else if (Base.isPlainObject(compare)) {
						return matchObject(compare, value);
					}
				}
				return Base.equals(value, compare);
			}
		},

		getItems: function(options) {
			return Item._getItems(this, options, this._matrix);
		},

		getItem: function(options) {
			return Item._getItems(this, options, this._matrix, null, true)[0]
					|| null;
		},

		statics: {
			_getItems: function _getItems(item, options, matrix, param, firstOnly) {
				if (!param) {
					var obj = typeof options === 'object' && options,
						overlapping = obj && obj.overlapping,
						inside = obj && obj.inside,
						bounds = overlapping || inside,
						rect = bounds && Rectangle.read([bounds]);
					param = {
						items: [],
						recursive: obj && obj.recursive !== false,
						inside: !!inside,
						overlapping: !!overlapping,
						rect: rect,
						path: overlapping && new Path.Rectangle({
							rectangle: rect,
							insert: false
						})
					};
					if (obj) {
						options = Base.filter({}, options, {
							recursive: true, inside: true, overlapping: true
						});
					}
				}
				var children = item._children,
					items = param.items,
					rect = param.rect;
				matrix = rect && (matrix || new Matrix());
				for (var i = 0, l = children && children.length; i < l; i++) {
					var child = children[i],
						childMatrix = matrix && matrix.appended(child._matrix),
						add = true;
					if (rect) {
						var bounds = child.getBounds(childMatrix);
						if (!rect.intersects(bounds))
							continue;
						if (!(rect.contains(bounds)
								|| param.overlapping && (bounds.contains(rect)
									|| param.path.intersects(child, childMatrix))))
							add = false;
					}
					if (add && child.matches(options)) {
						items.push(child);
						if (firstOnly)
							break;
					}
					if (param.recursive !== false) {
						_getItems(child, options, childMatrix, param, firstOnly);
					}
					if (firstOnly && items.length > 0)
						break;
				}
				return items;
			}
		}
	}, {

		importJSON: function(json) {
			var res = Base.importJSON(json, this);
			return res !== this ? this.addChild(res) : res;
		},

		addChild: function(item, _preserve) {
			return this.insertChild(undefined, item, _preserve);
		},

		insertChild: function(index, item, _preserve) {
			var res = item ? this.insertChildren(index, [item], _preserve) : null;
			return res && res[0];
		},

		addChildren: function(items, _preserve) {
			return this.insertChildren(this._children.length, items, _preserve);
		},

		insertChildren: function(index, items, _preserve, _proto) {
			var children = this._children;
			if (children && items && items.length > 0) {
				items = Array.prototype.slice.apply(items);
				for (var i = items.length - 1; i >= 0; i--) {
					var item = items[i];
					if (!item || _proto && !(item instanceof _proto)) {
						items.splice(i, 1);
					} else {
						item._remove(false, true);
					}
				}
				Base.splice(children, items, index, 0);
				var project = this._project,
					notifySelf = project._changes;
				for (var i = 0, l = items.length; i < l; i++) {
					var item = items[i],
						name = item._name;
					item._parent = this;
					item._setProject(project, true);
					if (name)
						item.setName(name);
					if (notifySelf)
						this._changed(5);
				}
				this._changed(11);
			} else {
				items = null;
			}
			return items;
		},

		_insertItem: '#insertChild',

		_insertAt: function(item, offset, _preserve) {
			var res = this;
			if (res !== item) {
				var owner = item && item._getOwner();
				if (owner) {
					res._remove(false, true);
					owner._insertItem(item._index + offset, res, _preserve);
				} else {
					res = null;
				}
			}
			return res;
		},

		insertAbove: function(item, _preserve) {
			return this._insertAt(item, 1, _preserve);
		},

		insertBelow: function(item, _preserve) {
			return this._insertAt(item, 0, _preserve);
		},

		sendToBack: function() {
			var owner = this._getOwner();
			return owner ? owner._insertItem(0, this) : null;
		},

		bringToFront: function() {
			var owner = this._getOwner();
			return owner ? owner._insertItem(undefined, this) : null;
		},

		appendTop: '#addChild',

		appendBottom: function(item) {
			return this.insertChild(0, item);
		},

		moveAbove: '#insertAbove',

		moveBelow: '#insertBelow',

		copyTo: function(owner) {
			return owner._insertItem(undefined, this.clone(false));
		},

		reduce: function(options) {
			var children = this._children;
			if (children && children.length === 1) {
				var child = children[0].reduce(options);
				if (this._parent) {
					child.insertAbove(this);
					this.remove();
				} else {
					child.remove();
				}
				return child;
			}
			return this;
		},

		_removeNamed: function() {
			var owner = this._getOwner();
			if (owner) {
				var children = owner._children,
					namedChildren = owner._namedChildren,
					name = this._name,
					namedArray = namedChildren[name],
					index = namedArray ? namedArray.indexOf(this) : -1;
				if (index !== -1) {
					if (children[name] == this)
						delete children[name];
					namedArray.splice(index, 1);
					if (namedArray.length) {
						children[name] = namedArray[0];
					} else {
						delete namedChildren[name];
					}
				}
			}
		},

		_remove: function(notifySelf, notifyParent) {
			var owner = this._getOwner(),
				project = this._project,
				index = this._index;
			if (owner) {
				if (index != null) {
					if (project._activeLayer === this)
						project._activeLayer = this.getNextSibling()
								|| this.getPreviousSibling();
					Base.splice(owner._children, null, index, 1);
				}
				if (this._name)
					this._removeNamed();
				this._installEvents(false);
				if (notifySelf && project._changes)
					this._changed(5);
				if (notifyParent)
					owner._changed(11, this);
				this._parent = null;
				return true;
			}
			return false;
		},

		remove: function() {
			return this._remove(true, true);
		},

		replaceWith: function(item) {
			var ok = item && item.insertBelow(this);
			if (ok)
				this.remove();
			return ok;
		},

		removeChildren: function(start, end) {
			if (!this._children)
				return null;
			start = start || 0;
			end = Base.pick(end, this._children.length);
			var removed = Base.splice(this._children, null, start, end - start);
			for (var i = removed.length - 1; i >= 0; i--) {
				removed[i]._remove(true, false);
			}
			if (removed.length > 0)
				this._changed(11);
			return removed;
		},

		clear: '#removeChildren',

		reverseChildren: function() {
			if (this._children) {
				this._children.reverse();
				for (var i = 0, l = this._children.length; i < l; i++)
					this._children[i]._index = i;
				this._changed(11);
			}
		},

		isEmpty: function() {
			return !this._children || this._children.length === 0;
		},

		isEditable: function() {
			var item = this;
			while (item) {
				if (!item._visible || item._locked)
					return false;
				item = item._parent;
			}
			return true;
		},

		hasFill: function() {
			return this.getStyle().hasFill();
		},

		hasStroke: function() {
			return this.getStyle().hasStroke();
		},

		hasShadow: function() {
			return this.getStyle().hasShadow();
		},

		_getOrder: function(item) {
			function getList(item) {
				var list = [];
				do {
					list.unshift(item);
				} while (item = item._parent);
				return list;
			}
			var list1 = getList(this),
				list2 = getList(item);
			for (var i = 0, l = Math.min(list1.length, list2.length); i < l; i++) {
				if (list1[i] != list2[i]) {
					return list1[i]._index < list2[i]._index ? 1 : -1;
				}
			}
			return 0;
		},

		hasChildren: function() {
			return this._children && this._children.length > 0;
		},

		isInserted: function() {
			return this._parent ? this._parent.isInserted() : false;
		},

		isAbove: function(item) {
			return this._getOrder(item) === -1;
		},

		isBelow: function(item) {
			return this._getOrder(item) === 1;
		},

		isParent: function(item) {
			return this._parent === item;
		},

		isChild: function(item) {
			return item && item._parent === this;
		},

		isDescendant: function(item) {
			var parent = this;
			while (parent = parent._parent) {
				if (parent === item)
					return true;
			}
			return false;
		},

		isAncestor: function(item) {
			return item ? item.isDescendant(this) : false;
		},

		isSibling: function(item) {
			return this._parent === item._parent;
		},

		isGroupedWith: function(item) {
			var parent = this._parent;
			while (parent) {
				if (parent._parent
					&& /^(Group|Layer|CompoundPath)$/.test(parent._class)
					&& item.isDescendant(parent))
						return true;
				parent = parent._parent;
			}
			return false;
		},

	}, Base.each(['rotate', 'scale', 'shear', 'skew'], function(key) {
		var rotate = key === 'rotate';
		this[key] = function() {
			var value = (rotate ? Base : Point).read(arguments),
				center = Point.read(arguments, 0, { readNull: true });
			return this.transform(new Matrix()[key](value,
					center || this.getPosition(true)));
		};
	}, {
		translate: function() {
			var mx = new Matrix();
			return this.transform(mx.translate.apply(mx, arguments));
		},

		transform: function(matrix, _applyMatrix, _applyRecursively,
				_setApplyMatrix) {
			if (matrix && matrix.isIdentity())
				matrix = null;
			var _matrix = this._matrix,
				applyMatrix = (_applyMatrix || this._applyMatrix)
						&& ((!_matrix.isIdentity() || matrix)
							|| _applyMatrix && _applyRecursively && this._children);
			if (!matrix && !applyMatrix)
				return this;
			if (matrix) {
				if (!matrix.isInvertible() && _matrix.isInvertible())
					_matrix._backup = _matrix.getValues();
				_matrix.prepend(matrix);
			}
			if (applyMatrix = applyMatrix && this._transformContent(_matrix,
						_applyRecursively, _setApplyMatrix)) {
				var pivot = this._pivot,
					style = this._style,
					fillColor = style.getFillColor(true),
					strokeColor = style.getStrokeColor(true);
				if (pivot)
					_matrix._transformPoint(pivot, pivot, true);
				if (fillColor)
					fillColor.transform(_matrix);
				if (strokeColor)
					strokeColor.transform(_matrix);
				_matrix.reset(true);
				if (_setApplyMatrix && this._canApplyMatrix)
					this._applyMatrix = true;
			}
			var bounds = this._bounds,
				position = this._position;
			this._changed(9);
			var decomp = bounds && matrix && matrix.decompose();
			if (decomp && !decomp.shearing && decomp.rotation % 90 === 0) {
				for (var key in bounds) {
					var cache = bounds[key];
					if (applyMatrix || !cache.internal) {
						var rect = cache.rect;
						matrix._transformBounds(rect, rect);
					}
				}
				var getter = this._boundsGetter,
					rect = bounds[getter && getter.getBounds || getter || 'getBounds'];
				if (rect)
					this._position = rect.getCenter(true);
				this._bounds = bounds;
			} else if (matrix && position) {
				this._position = matrix._transformPoint(position, position);
			}
			return this;
		},

		_transformContent: function(matrix, applyRecursively, setApplyMatrix) {
			var children = this._children;
			if (children) {
				for (var i = 0, l = children.length; i < l; i++)
					children[i].transform(matrix, true, applyRecursively,
							setApplyMatrix);
				return true;
			}
		},

		globalToLocal: function() {
			return this.getGlobalMatrix(true)._inverseTransform(
					Point.read(arguments));
		},

		localToGlobal: function() {
			return this.getGlobalMatrix(true)._transformPoint(
					Point.read(arguments));
		},

		parentToLocal: function() {
			return this._matrix._inverseTransform(Point.read(arguments));
		},

		localToParent: function() {
			return this._matrix._transformPoint(Point.read(arguments));
		},

		fitBounds: function(rectangle, fill) {
			rectangle = Rectangle.read(arguments);
			var bounds = this.getBounds(),
				itemRatio = bounds.height / bounds.width,
				rectRatio = rectangle.height / rectangle.width,
				scale = (fill ? itemRatio > rectRatio : itemRatio < rectRatio)
						? rectangle.width / bounds.width
						: rectangle.height / bounds.height,
				newBounds = new Rectangle(new Point(),
						new Size(bounds.width * scale, bounds.height * scale));
			newBounds.setCenter(rectangle.getCenter());
			this.setBounds(newBounds);
		}
	}), {

		_setStyles: function(ctx, param, viewMatrix) {
			var style = this._style;
			if (style.hasFill()) {
				ctx.fillStyle = style.getFillColor().toCanvasStyle(ctx);
			}
			if (style.hasStroke()) {
				ctx.strokeStyle = style.getStrokeColor().toCanvasStyle(ctx);
				ctx.lineWidth = style.getStrokeWidth();
				var strokeJoin = style.getStrokeJoin(),
					strokeCap = style.getStrokeCap(),
					miterLimit = style.getMiterLimit();
				if (strokeJoin)
					ctx.lineJoin = strokeJoin;
				if (strokeCap)
					ctx.lineCap = strokeCap;
				if (miterLimit)
					ctx.miterLimit = miterLimit;
				if (paper.support.nativeDash) {
					var dashArray = style.getDashArray(),
						dashOffset = style.getDashOffset();
					if (dashArray && dashArray.length) {
						if ('setLineDash' in ctx) {
							ctx.setLineDash(dashArray);
							ctx.lineDashOffset = dashOffset;
						} else {
							ctx.mozDash = dashArray;
							ctx.mozDashOffset = dashOffset;
						}
					}
				}
			}
			if (style.hasShadow()) {
				var pixelRatio = param.pixelRatio || 1,
					mx = viewMatrix._shiftless().prepend(
						new Matrix().scale(pixelRatio, pixelRatio)),
					blur = mx.transform(new Point(style.getShadowBlur(), 0)),
					offset = mx.transform(this.getShadowOffset());
				ctx.shadowColor = style.getShadowColor().toCanvasStyle(ctx);
				ctx.shadowBlur = blur.getLength();
				ctx.shadowOffsetX = offset.x;
				ctx.shadowOffsetY = offset.y;
			}
		},

		draw: function(ctx, param, parentStrokeMatrix) {
			var updateVersion = this._updateVersion = this._project._updateVersion;
			if (!this._visible || this._opacity === 0)
				return;
			var matrices = param.matrices,
				viewMatrix = param.viewMatrix,
				matrix = this._matrix,
				globalMatrix = matrices[matrices.length - 1].appended(matrix);
			if (!globalMatrix.isInvertible())
				return;

			viewMatrix = viewMatrix ? viewMatrix.appended(globalMatrix)
					: globalMatrix;

			matrices.push(globalMatrix);
			if (param.updateMatrix) {
				globalMatrix._updateVersion = updateVersion;
				this._globalMatrix = globalMatrix;
			}

			var blendMode = this._blendMode,
				opacity = this._opacity,
				normalBlend = blendMode === 'normal',
				nativeBlend = BlendMode.nativeModes[blendMode],
				direct = normalBlend && opacity === 1
						|| param.dontStart
						|| param.clip
						|| (nativeBlend || normalBlend && opacity < 1)
							&& this._canComposite(),
				pixelRatio = param.pixelRatio || 1,
				mainCtx, itemOffset, prevOffset;
			if (!direct) {
				var bounds = this.getStrokeBounds(viewMatrix);
				if (!bounds.width || !bounds.height)
					return;
				prevOffset = param.offset;
				itemOffset = param.offset = bounds.getTopLeft().floor();
				mainCtx = ctx;
				ctx = CanvasProvider.getContext(bounds.getSize().ceil().add(1)
						.multiply(pixelRatio));
				if (pixelRatio !== 1)
					ctx.scale(pixelRatio, pixelRatio);
			}
			ctx.save();
			var strokeMatrix = parentStrokeMatrix
					? parentStrokeMatrix.appended(matrix)
					: this._canScaleStroke && !this.getStrokeScaling(true)
						&& viewMatrix,
				clip = !direct && param.clipItem,
				transform = !strokeMatrix || clip;
			if (direct) {
				ctx.globalAlpha = opacity;
				if (nativeBlend)
					ctx.globalCompositeOperation = blendMode;
			} else if (transform) {
				ctx.translate(-itemOffset.x, -itemOffset.y);
			}
			if (transform) {
				(direct ? matrix : viewMatrix).applyToContext(ctx);
			}
			if (clip) {
				param.clipItem.draw(ctx, param.extend({ clip: true }));
			}
			if (strokeMatrix) {
				ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
				var offset = param.offset;
				if (offset)
					ctx.translate(-offset.x, -offset.y);
			}
			this._draw(ctx, param, viewMatrix, strokeMatrix);
			ctx.restore();
			matrices.pop();
			if (param.clip && !param.dontFinish)
				ctx.clip();
			if (!direct) {
				BlendMode.process(blendMode, ctx, mainCtx, opacity,
						itemOffset.subtract(prevOffset).multiply(pixelRatio));
				CanvasProvider.release(ctx);
				param.offset = prevOffset;
			}
		},

		_isUpdated: function(updateVersion) {
			var parent = this._parent;
			if (parent instanceof CompoundPath)
				return parent._isUpdated(updateVersion);
			var updated = this._updateVersion === updateVersion;
			if (!updated && parent && parent._visible
					&& parent._isUpdated(updateVersion)) {
				this._updateVersion = updateVersion;
				updated = true;
			}
			return updated;
		},

		_drawSelection: function(ctx, matrix, size, selectionItems, updateVersion) {
			var selection = this._selection,
				itemSelected = selection & 1,
				boundsSelected = selection & 2
						|| itemSelected && this._selectBounds,
				positionSelected = selection & 4;
			if (!this._drawSelected)
				itemSelected = false;
			if ((itemSelected || boundsSelected || positionSelected)
					&& this._isUpdated(updateVersion)) {
				var layer,
					color = this.getSelectedColor(true) || (layer = this.getLayer())
						&& layer.getSelectedColor(true),
					mx = matrix.appended(this.getGlobalMatrix(true)),
					half = size / 2;
				ctx.strokeStyle = ctx.fillStyle = color
						? color.toCanvasStyle(ctx) : '#009dec';
				if (itemSelected)
					this._drawSelected(ctx, mx, selectionItems);
				if (positionSelected) {
					var point = this.getPosition(true),
						x = point.x,
						y = point.y;
					ctx.beginPath();
					ctx.arc(x, y, half, 0, Math.PI * 2, true);
					ctx.stroke();
					var deltas = [[0, -1], [1, 0], [0, 1], [-1, 0]],
						start = half,
						end = size + 1;
					for (var i = 0; i < 4; i++) {
						var delta = deltas[i],
							dx = delta[0],
							dy = delta[1];
						ctx.moveTo(x + dx * start, y + dy * start);
						ctx.lineTo(x + dx * end, y + dy * end);
						ctx.stroke();
					}
				}
				if (boundsSelected) {
					var coords = mx._transformCorners(this.getInternalBounds());
					ctx.beginPath();
					for (var i = 0; i < 8; i++) {
						ctx[i === 0 ? 'moveTo' : 'lineTo'](coords[i], coords[++i]);
					}
					ctx.closePath();
					ctx.stroke();
					for (var i = 0; i < 8; i++) {
						ctx.fillRect(coords[i] - half, coords[++i] - half,
								size, size);
					}
				}
			}
		},

		_canComposite: function() {
			return false;
		}
	}, Base.each(['down', 'drag', 'up', 'move'], function(key) {
		this['removeOn' + Base.capitalize(key)] = function() {
			var hash = {};
			hash[key] = true;
			return this.removeOn(hash);
		};
	}, {

		removeOn: function(obj) {
			for (var name in obj) {
				if (obj[name]) {
					var key = 'mouse' + name,
						project = this._project,
						sets = project._removeSets = project._removeSets || {};
					sets[key] = sets[key] || {};
					sets[key][this._id] = this;
				}
			}
			return this;
		}
	}));

	var Group = Item.extend({
		_class: 'Group',
		_selectBounds: false,
		_selectChildren: true,
		_serializeFields: {
			children: []
		},

		initialize: function Group(arg) {
			this._children = [];
			this._namedChildren = {};
			if (!this._initialize(arg))
				this.addChildren(Array.isArray(arg) ? arg : arguments);
		},

		_changed: function _changed(flags) {
			_changed.base.call(this, flags);
			if (flags & 1026) {
				this._clipItem = undefined;
			}
		},

		_getClipItem: function() {
			var clipItem = this._clipItem;
			if (clipItem === undefined) {
				clipItem = null;
				var children = this._children;
				for (var i = 0, l = children.length; i < l; i++) {
					if (children[i]._clipMask) {
						clipItem = children[i];
						break;
					}
				}
				this._clipItem = clipItem;
			}
			return clipItem;
		},

		isClipped: function() {
			return !!this._getClipItem();
		},

		setClipped: function(clipped) {
			var child = this.getFirstChild();
			if (child)
				child.setClipMask(clipped);
		},

		_getBounds: function _getBounds(matrix, options) {
			var clipItem = this._getClipItem();
			return clipItem
				? clipItem._getCachedBounds(
					matrix && matrix.appended(clipItem._matrix),
					Base.set({}, options, { stroke: false }))
				: _getBounds.base.call(this, matrix, options);
		},

		_hitTestChildren: function _hitTestChildren(point, options, viewMatrix) {
			var clipItem = this._getClipItem();
			return (!clipItem || clipItem.contains(point))
					&& _hitTestChildren.base.call(this, point, options, viewMatrix,
						clipItem);
		},

		_draw: function(ctx, param) {
			var clip = param.clip,
				clipItem = !clip && this._getClipItem();
			param = param.extend({ clipItem: clipItem, clip: false });
			if (clip) {
				ctx.beginPath();
				param.dontStart = param.dontFinish = true;
			} else if (clipItem) {
				clipItem.draw(ctx, param.extend({ clip: true }));
			}
			var children = this._children;
			for (var i = 0, l = children.length; i < l; i++) {
				var item = children[i];
				if (item !== clipItem)
					item.draw(ctx, param);
			}
		}
	});

	var Layer = Group.extend({
		_class: 'Layer',

		initialize: function Layer() {
			Group.apply(this, arguments);
		},

		_getOwner: function() {
			return this._parent || this._index != null && this._project;
		},

		isInserted: function isInserted() {
			return this._parent ? isInserted.base.call(this) : this._index != null;
		},

		activate: function() {
			this._project._activeLayer = this;
		},

		_hitTestSelf: function() {
		}
	});

	var Shape = Item.extend({
		_class: 'Shape',
		_applyMatrix: false,
		_canApplyMatrix: false,
		_canScaleStroke: true,
		_serializeFields: {
			type: null,
			size: null,
			radius: null
		},

		initialize: function Shape(props) {
			this._initialize(props);
		},

		_equals: function(item) {
			return this._type === item._type
				&& this._size.equals(item._size)
				&& Base.equals(this._radius, item._radius);
		},

		copyContent: function(source) {
			this.setType(source._type);
			this.setSize(source._size);
			this.setRadius(source._radius);
		},

		getType: function() {
			return this._type;
		},

		setType: function(type) {
			this._type = type;
		},

		getShape: '#getType',
		setShape: '#setType',

		getSize: function() {
			var size = this._size;
			return new LinkedSize(size.width, size.height, this, 'setSize');
		},

		setSize: function() {
			var size = Size.read(arguments);
			if (!this._size) {
				this._size = size.clone();
			} else if (!this._size.equals(size)) {
				var type = this._type,
					width = size.width,
					height = size.height;
				if (type === 'rectangle') {
					var radius = Size.min(this._radius, size.divide(2));
					this._radius.set(radius.width, radius.height);
				} else if (type === 'circle') {
					width = height = (width + height) / 2;
					this._radius = width / 2;
				} else if (type === 'ellipse') {
					this._radius.set(width / 2, height / 2);
				}
				this._size.set(width, height);
				this._changed(9);
			}
		},

		getRadius: function() {
			var rad = this._radius;
			return this._type === 'circle'
					? rad
					: new LinkedSize(rad.width, rad.height, this, 'setRadius');
		},

		setRadius: function(radius) {
			var type = this._type;
			if (type === 'circle') {
				if (radius === this._radius)
					return;
				var size = radius * 2;
				this._radius = radius;
				this._size.set(size, size);
			} else {
				radius = Size.read(arguments);
				if (!this._radius) {
					this._radius = radius.clone();
				} else {
					if (this._radius.equals(radius))
						return;
					this._radius.set(radius.width, radius.height);
					if (type === 'rectangle') {
						var size = Size.max(this._size, radius.multiply(2));
						this._size.set(size.width, size.height);
					} else if (type === 'ellipse') {
						this._size.set(radius.width * 2, radius.height * 2);
					}
				}
			}
			this._changed(9);
		},

		isEmpty: function() {
			return false;
		},

		toPath: function(insert) {
			var path = new Path[Base.capitalize(this._type)]({
				center: new Point(),
				size: this._size,
				radius: this._radius,
				insert: false
			});
			path.copyAttributes(this);
			if (paper.settings.applyMatrix)
				path.setApplyMatrix(true);
			if (insert === undefined || insert)
				path.insertAbove(this);
			return path;
		},

		toShape: '#clone',

		_draw: function(ctx, param, viewMatrix, strokeMatrix) {
			var style = this._style,
				hasFill = style.hasFill(),
				hasStroke = style.hasStroke(),
				dontPaint = param.dontFinish || param.clip,
				untransformed = !strokeMatrix;
			if (hasFill || hasStroke || dontPaint) {
				var type = this._type,
					radius = this._radius,
					isCircle = type === 'circle';
				if (!param.dontStart)
					ctx.beginPath();
				if (untransformed && isCircle) {
					ctx.arc(0, 0, radius, 0, Math.PI * 2, true);
				} else {
					var rx = isCircle ? radius : radius.width,
						ry = isCircle ? radius : radius.height,
						size = this._size,
						width = size.width,
						height = size.height;
					if (untransformed && type === 'rectangle' && rx === 0 && ry === 0) {
						ctx.rect(-width / 2, -height / 2, width, height);
					} else {
						var x = width / 2,
							y = height / 2,
							kappa = 1 - 0.5522847498307936,
							cx = rx * kappa,
							cy = ry * kappa,
							c = [
								-x, -y + ry,
								-x, -y + cy,
								-x + cx, -y,
								-x + rx, -y,
								x - rx, -y,
								x - cx, -y,
								x, -y + cy,
								x, -y + ry,
								x, y - ry,
								x, y - cy,
								x - cx, y,
								x - rx, y,
								-x + rx, y,
								-x + cx, y,
								-x, y - cy,
								-x, y - ry
							];
						if (strokeMatrix)
							strokeMatrix.transform(c, c, 32);
						ctx.moveTo(c[0], c[1]);
						ctx.bezierCurveTo(c[2], c[3], c[4], c[5], c[6], c[7]);
						if (x !== rx)
							ctx.lineTo(c[8], c[9]);
						ctx.bezierCurveTo(c[10], c[11], c[12], c[13], c[14], c[15]);
						if (y !== ry)
							ctx.lineTo(c[16], c[17]);
						ctx.bezierCurveTo(c[18], c[19], c[20], c[21], c[22], c[23]);
						if (x !== rx)
							ctx.lineTo(c[24], c[25]);
						ctx.bezierCurveTo(c[26], c[27], c[28], c[29], c[30], c[31]);
					}
				}
				ctx.closePath();
			}
			if (!dontPaint && (hasFill || hasStroke)) {
				this._setStyles(ctx, param, viewMatrix);
				if (hasFill) {
					ctx.fill(style.getFillRule());
					ctx.shadowColor = 'rgba(0,0,0,0)';
				}
				if (hasStroke)
					ctx.stroke();
			}
		},

		_canComposite: function() {
			return !(this.hasFill() && this.hasStroke());
		},

		_getBounds: function(matrix, options) {
			var rect = new Rectangle(this._size).setCenter(0, 0),
				style = this._style,
				strokeWidth = options.stroke && style.hasStroke()
						&& style.getStrokeWidth();
			if (matrix)
				rect = matrix._transformBounds(rect);
			return strokeWidth
					? rect.expand(Path._getStrokePadding(strokeWidth,
						this._getStrokeMatrix(matrix, options)))
					: rect;
		}
	},
	new function() {
		function getCornerCenter(that, point, expand) {
			var radius = that._radius;
			if (!radius.isZero()) {
				var halfSize = that._size.divide(2);
				for (var i = 0; i < 4; i++) {
					var dir = new Point(i & 1 ? 1 : -1, i > 1 ? 1 : -1),
						corner = dir.multiply(halfSize),
						center = corner.subtract(dir.multiply(radius)),
						rect = new Rectangle(corner, center);
					if ((expand ? rect.expand(expand) : rect).contains(point))
						return center;
				}
			}
		}

		function isOnEllipseStroke(point, radius, padding, quadrant) {
			var vector = point.divide(radius);
			return (!quadrant || vector.quadrant === quadrant) &&
					vector.subtract(vector.normalize()).multiply(radius)
						.divide(padding).length <= 1;
		}

		return {
			_contains: function _contains(point) {
				if (this._type === 'rectangle') {
					var center = getCornerCenter(this, point);
					return center
							? point.subtract(center).divide(this._radius)
								.getLength() <= 1
							: _contains.base.call(this, point);
				} else {
					return point.divide(this.size).getLength() <= 0.5;
				}
			},

			_hitTestSelf: function _hitTestSelf(point, options, viewMatrix,
					strokeMatrix) {
				var hit = false,
					style = this._style,
					hitStroke = options.stroke && style.hasStroke(),
					hitFill = options.fill && style.hasFill();
				if (hitStroke || hitFill) {
					var type = this._type,
						radius = this._radius,
						strokeRadius = hitStroke ? style.getStrokeWidth() / 2 : 0,
						strokePadding = options._tolerancePadding.add(
							Path._getStrokePadding(strokeRadius,
								!style.getStrokeScaling() && strokeMatrix));
					if (type === 'rectangle') {
						var padding = strokePadding.multiply(2),
							center = getCornerCenter(this, point, padding);
						if (center) {
							hit = isOnEllipseStroke(point.subtract(center), radius,
									strokePadding, center.getQuadrant());
						} else {
							var rect = new Rectangle(this._size).setCenter(0, 0),
								outer = rect.expand(padding),
								inner = rect.expand(padding.negate());
							hit = outer._containsPoint(point)
									&& !inner._containsPoint(point);
						}
					} else {
						hit = isOnEllipseStroke(point, radius, strokePadding);
					}
				}
				return hit ? new HitResult(hitStroke ? 'stroke' : 'fill', this)
						: _hitTestSelf.base.apply(this, arguments);
			}
		};
	}, {

	statics: new function() {
		function createShape(type, point, size, radius, args) {
			var item = new Shape(Base.getNamed(args));
			item._type = type;
			item._size = size;
			item._radius = radius;
			return item.translate(point);
		}

		return {
			Circle: function() {
				var center = Point.readNamed(arguments, 'center'),
					radius = Base.readNamed(arguments, 'radius');
				return createShape('circle', center, new Size(radius * 2), radius,
						arguments);
			},

			Rectangle: function() {
				var rect = Rectangle.readNamed(arguments, 'rectangle'),
					radius = Size.min(Size.readNamed(arguments, 'radius'),
							rect.getSize(true).divide(2));
				return createShape('rectangle', rect.getCenter(true),
						rect.getSize(true), radius, arguments);
			},

			Ellipse: function() {
				var ellipse = Shape._readEllipse(arguments),
					radius = ellipse.radius;
				return createShape('ellipse', ellipse.center, radius.multiply(2),
						radius, arguments);
			},

			_readEllipse: function(args) {
				var center,
					radius;
				if (Base.hasNamed(args, 'radius')) {
					center = Point.readNamed(args, 'center');
					radius = Size.readNamed(args, 'radius');
				} else {
					var rect = Rectangle.readNamed(args, 'rectangle');
					center = rect.getCenter(true);
					radius = rect.getSize(true).divide(2);
				}
				return { center: center, radius: radius };
			}
		};
	}});

	var Raster = Item.extend({
		_class: 'Raster',
		_applyMatrix: false,
		_canApplyMatrix: false,
		_boundsOptions: { stroke: false, handle: false },
		_serializeFields: {
			crossOrigin: null,
			source: null
		},

		initialize: function Raster(object, position) {
			if (!this._initialize(object,
					position !== undefined && Point.read(arguments, 1))) {
				var image = typeof object === 'string'
						? document.getElementById(object) : object;
				if (image) {
					this.setImage(image);
				} else {
					this.setSource(object);
				}
			}
			if (!this._size) {
				this._size = new Size();
				this._loaded = false;
			}
		},

		_equals: function(item) {
			return this.getSource() === item.getSource();
		},

		copyContent: function(source) {
			var image = source._image,
				canvas = source._canvas;
			if (image) {
				this._setImage(image);
			} else if (canvas) {
				var copyCanvas = CanvasProvider.getCanvas(source._size);
				copyCanvas.getContext('2d').drawImage(canvas, 0, 0);
				this._setImage(copyCanvas);
			}
			this._crossOrigin = source._crossOrigin;
		},

		getSize: function() {
			var size = this._size;
			return new LinkedSize(size ? size.width : 0, size ? size.height : 0,
					this, 'setSize');
		},

		setSize: function() {
			var size = Size.read(arguments);
			if (!size.equals(this._size)) {
				if (size.width > 0 && size.height > 0) {
					var element = this.getElement();
					this._setImage(CanvasProvider.getCanvas(size));
					if (element)
						this.getContext(true).drawImage(element, 0, 0,
								size.width, size.height);
				} else {
					if (this._canvas)
						CanvasProvider.release(this._canvas);
					this._size = size.clone();
				}
			}
		},

		getWidth: function() {
			return this._size ? this._size.width : 0;
		},

		setWidth: function(width) {
			this.setSize(width, this.getHeight());
		},

		getHeight: function() {
			return this._size ? this._size.height : 0;
		},

		setHeight: function(height) {
			this.setSize(this.getWidth(), height);
		},

		getLoaded: function() {
			return this._loaded;
		},

		isEmpty: function() {
			var size = this._size;
			return !size || size.width === 0 && size.height === 0;
		},

		getResolution: function() {
			var matrix = this._matrix,
				orig = new Point(0, 0).transform(matrix),
				u = new Point(1, 0).transform(matrix).subtract(orig),
				v = new Point(0, 1).transform(matrix).subtract(orig);
			return new Size(
				72 / u.getLength(),
				72 / v.getLength()
			);
		},

		getPpi: '#getResolution',

		getImage: function() {
			return this._image;
		},

		setImage: function(image) {
			var that = this;

			function emit(event) {
				var view = that.getView(),
					type = event && event.type || 'load';
				if (view && that.responds(type)) {
					paper = view._scope;
					that.emit(type, new Event(event));
				}
			}

			this._setImage(image);
			if (this._loaded) {
				setTimeout(emit, 0);
			} else if (image) {
				DomEvent.add(image, {
					load: function(event) {
						that._setImage(image);
						emit(event);
					},
					error: emit
				});
			}
		},

		_setImage: function(image) {
			if (this._canvas)
				CanvasProvider.release(this._canvas);
			if (image && image.getContext) {
				this._image = null;
				this._canvas = image;
				this._loaded = true;
			} else {
				this._image = image;
				this._canvas = null;
				this._loaded = !!(image && image.src && image.complete);
			}
			this._size = new Size(
					image ? image.naturalWidth || image.width : 0,
					image ? image.naturalHeight || image.height : 0);
			this._context = null;
			this._changed(521);
		},

		getCanvas: function() {
			if (!this._canvas) {
				var ctx = CanvasProvider.getContext(this._size);
				try {
					if (this._image)
						ctx.drawImage(this._image, 0, 0);
					this._canvas = ctx.canvas;
				} catch (e) {
					CanvasProvider.release(ctx);
				}
			}
			return this._canvas;
		},

		setCanvas: '#setImage',

		getContext: function(modify) {
			if (!this._context)
				this._context = this.getCanvas().getContext('2d');
			if (modify) {
				this._image = null;
				this._changed(513);
			}
			return this._context;
		},

		setContext: function(context) {
			this._context = context;
		},

		getSource: function() {
			var image = this._image;
			return image && image.src || this.toDataURL();
		},

		setSource: function(src) {
			var image = new window.Image(),
				crossOrigin = this._crossOrigin;
			if (crossOrigin)
				image.crossOrigin = crossOrigin;
			image.src = src;
			this.setImage(image);
		},

		getCrossOrigin: function() {
			var image = this._image;
			return image && image.crossOrigin || this._crossOrigin || '';
		},

		setCrossOrigin: function(crossOrigin) {
			this._crossOrigin = crossOrigin;
			var image = this._image;
			if (image)
				image.crossOrigin = crossOrigin;
		},

		getElement: function() {
			return this._canvas || this._loaded && this._image;
		}
	}, {
		beans: false,

		getSubCanvas: function() {
			var rect = Rectangle.read(arguments),
				ctx = CanvasProvider.getContext(rect.getSize());
			ctx.drawImage(this.getCanvas(), rect.x, rect.y,
					rect.width, rect.height, 0, 0, rect.width, rect.height);
			return ctx.canvas;
		},

		getSubRaster: function() {
			var rect = Rectangle.read(arguments),
				raster = new Raster(Item.NO_INSERT);
			raster._setImage(this.getSubCanvas(rect));
			raster.translate(rect.getCenter().subtract(this.getSize().divide(2)));
			raster._matrix.prepend(this._matrix);
			raster.insertAbove(this);
			return raster;
		},

		toDataURL: function() {
			var image = this._image,
				src = image && image.src;
			if (/^data:/.test(src))
				return src;
			var canvas = this.getCanvas();
			return canvas ? canvas.toDataURL.apply(canvas, arguments) : null;
		},

		drawImage: function(image ) {
			var point = Point.read(arguments, 1);
			this.getContext(true).drawImage(image, point.x, point.y);
		},

		getAverageColor: function(object) {
			var bounds, path;
			if (!object) {
				bounds = this.getBounds();
			} else if (object instanceof PathItem) {
				path = object;
				bounds = object.getBounds();
			} else if (typeof object === 'object') {
				if ('width' in object) {
					bounds = new Rectangle(object);
				} else if ('x' in object) {
					bounds = new Rectangle(object.x - 0.5, object.y - 0.5, 1, 1);
				}
			}
			if (!bounds)
				return null;
			var sampleSize = 32,
				width = Math.min(bounds.width, sampleSize),
				height = Math.min(bounds.height, sampleSize);
			var ctx = Raster._sampleContext;
			if (!ctx) {
				ctx = Raster._sampleContext = CanvasProvider.getContext(
						new Size(sampleSize));
			} else {
				ctx.clearRect(0, 0, sampleSize + 1, sampleSize + 1);
			}
			ctx.save();
			var matrix = new Matrix()
					.scale(width / bounds.width, height / bounds.height)
					.translate(-bounds.x, -bounds.y);
			matrix.applyToContext(ctx);
			if (path)
				path.draw(ctx, new Base({ clip: true, matrices: [matrix] }));
			this._matrix.applyToContext(ctx);
			var element = this.getElement(),
				size = this._size;
			if (element)
				ctx.drawImage(element, -size.width / 2, -size.height / 2);
			ctx.restore();
			var pixels = ctx.getImageData(0.5, 0.5, Math.ceil(width),
					Math.ceil(height)).data,
				channels = [0, 0, 0],
				total = 0;
			for (var i = 0, l = pixels.length; i < l; i += 4) {
				var alpha = pixels[i + 3];
				total += alpha;
				alpha /= 255;
				channels[0] += pixels[i] * alpha;
				channels[1] += pixels[i + 1] * alpha;
				channels[2] += pixels[i + 2] * alpha;
			}
			for (var i = 0; i < 3; i++)
				channels[i] /= total;
			return total ? Color.read(channels) : null;
		},

		getPixel: function() {
			var point = Point.read(arguments);
			var data = this.getContext().getImageData(point.x, point.y, 1, 1).data;
			return new Color('rgb', [data[0] / 255, data[1] / 255, data[2] / 255],
					data[3] / 255);
		},

		setPixel: function() {
			var point = Point.read(arguments),
				color = Color.read(arguments),
				components = color._convert('rgb'),
				alpha = color._alpha,
				ctx = this.getContext(true),
				imageData = ctx.createImageData(1, 1),
				data = imageData.data;
			data[0] = components[0] * 255;
			data[1] = components[1] * 255;
			data[2] = components[2] * 255;
			data[3] = alpha != null ? alpha * 255 : 255;
			ctx.putImageData(imageData, point.x, point.y);
		},

		createImageData: function() {
			var size = Size.read(arguments);
			return this.getContext().createImageData(size.width, size.height);
		},

		getImageData: function() {
			var rect = Rectangle.read(arguments);
			if (rect.isEmpty())
				rect = new Rectangle(this._size);
			return this.getContext().getImageData(rect.x, rect.y,
					rect.width, rect.height);
		},

		setImageData: function(data ) {
			var point = Point.read(arguments, 1);
			this.getContext(true).putImageData(data, point.x, point.y);
		},

		_getBounds: function(matrix, options) {
			var rect = new Rectangle(this._size).setCenter(0, 0);
			return matrix ? matrix._transformBounds(rect) : rect;
		},

		_hitTestSelf: function(point) {
			if (this._contains(point)) {
				var that = this;
				return new HitResult('pixel', that, {
					offset: point.add(that._size.divide(2)).round(),
					color: {
						get: function() {
							return that.getPixel(this.offset);
						}
					}
				});
			}
		},

		_draw: function(ctx) {
			var element = this.getElement();
			if (element) {
				ctx.globalAlpha = this._opacity;
				ctx.drawImage(element,
						-this._size.width / 2, -this._size.height / 2);
			}
		},

		_canComposite: function() {
			return true;
		}
	});

	var SymbolItem = Item.extend({
		_class: 'SymbolItem',
		_applyMatrix: false,
		_canApplyMatrix: false,
		_boundsOptions: { stroke: true },
		_serializeFields: {
			symbol: null
		},

		initialize: function SymbolItem(arg0, arg1) {
			if (!this._initialize(arg0,
					arg1 !== undefined && Point.read(arguments, 1)))
				this.setDefinition(arg0 instanceof SymbolDefinition ?
						arg0 : new SymbolDefinition(arg0));
		},

		_equals: function(item) {
			return this._definition === item._definition;
		},

		copyContent: function(source) {
			this.setDefinition(source._definition);
		},

		getDefinition: function() {
			return this._definition;
		},

		setDefinition: function(definition) {
			this._definition = definition;
			this._changed(9);
		},

		getSymbol: '#getDefinition',
		setSymbol: '#setDefinition',

		isEmpty: function() {
			return this._definition._item.isEmpty();
		},

		_getBounds: function(matrix, options) {
			var item = this._definition._item;
			return item._getCachedBounds(item._matrix.prepended(matrix), options);
		},

		_hitTestSelf: function(point, options, viewMatrix, strokeMatrix) {
			var res = this._definition._item._hitTest(point, options, viewMatrix);
			if (res)
				res.item = this;
			return res;
		},

		_draw: function(ctx, param) {
			this._definition._item.draw(ctx, param);
		}

	});

	var SymbolDefinition = Base.extend({
		_class: 'SymbolDefinition',

		initialize: function SymbolDefinition(item, dontCenter) {
			this._id = UID.get();
			this.project = paper.project;
			if (item)
				this.setItem(item, dontCenter);
		},

		_serialize: function(options, dictionary) {
			return dictionary.add(this, function() {
				return Base.serialize([this._class, this._item],
						options, false, dictionary);
			});
		},

		_changed: function(flags) {
			if (flags & 8)
				Item._clearBoundsCache(this);
			if (flags & 1)
				this.project._changed(flags);
		},

		getItem: function() {
			return this._item;
		},

		setItem: function(item, _dontCenter) {
			if (item._symbol)
				item = item.clone();
			if (this._item)
				this._item._symbol = null;
			this._item = item;
			item.remove();
			item.setSelected(false);
			if (!_dontCenter)
				item.setPosition(new Point());
			item._symbol = this;
			this._changed(9);
		},

		getDefinition: '#getItem',
		setDefinition: '#setItem',

		place: function(position) {
			return new SymbolItem(this, position);
		},

		clone: function() {
			return new SymbolDefinition(this._item.clone(false));
		},

		equals: function(symbol) {
			return symbol === this
					|| symbol && this._item.equals(symbol._item)
					|| false;
		}
	});

	var HitResult = Base.extend({
		_class: 'HitResult',

		initialize: function HitResult(type, item, values) {
			this.type = type;
			this.item = item;
			if (values) {
				values.enumerable = true;
				this.inject(values);
			}
		},

		statics: {
			getOptions: function(args) {
				var options = args && Base.read(args);
				return Base.set({
					type: null,
					tolerance: paper.settings.hitTolerance,
					fill: !options,
					stroke: !options,
					segments: !options,
					handles: false,
					ends: false,
					center: false,
					bounds: false,
					guides: false,
					selected: false
				}, options);
			}
		}
	});

	var Segment = Base.extend({
		_class: 'Segment',
		beans: true,
		_selection: 0,

		initialize: function Segment(arg0, arg1, arg2, arg3, arg4, arg5) {
			var count = arguments.length,
				point, handleIn, handleOut,
				selection;
			if (count === 0) {
			} else if (count === 1) {
				if (arg0 && 'point' in arg0) {
					point = arg0.point;
					handleIn = arg0.handleIn;
					handleOut = arg0.handleOut;
					selection = arg0.selection;
				} else {
					point = arg0;
				}
			} else if (arg0 == null || typeof arg0 === 'object') {
				point = arg0;
				handleIn = arg1;
				handleOut = arg2;
				selection = arg3;
			} else {
				point = arg0 !== undefined ? [ arg0, arg1 ] : null;
				handleIn = arg2 !== undefined ? [ arg2, arg3 ] : null;
				handleOut = arg4 !== undefined ? [ arg4, arg5 ] : null;
			}
			new SegmentPoint(point, this, '_point');
			new SegmentPoint(handleIn, this, '_handleIn');
			new SegmentPoint(handleOut, this, '_handleOut');
			if (selection)
				this.setSelection(selection);
		},

		_serialize: function(options, dictionary) {
			var point = this._point,
				selection = this._selection,
				obj = selection || this.hasHandles()
						? [point, this._handleIn, this._handleOut]
						: point;
			if (selection)
				obj.push(selection);
			return Base.serialize(obj, options, true, dictionary);
		},

		_changed: function(point) {
			var path = this._path;
			if (!path)
				return;
			var curves = path._curves,
				index = this._index,
				curve;
			if (curves) {
				if ((!point || point === this._point || point === this._handleIn)
						&& (curve = index > 0 ? curves[index - 1] : path._closed
							? curves[curves.length - 1] : null))
					curve._changed();
				if ((!point || point === this._point || point === this._handleOut)
						&& (curve = curves[index]))
					curve._changed();
			}
			path._changed(25);
		},

		getPoint: function() {
			return this._point;
		},

		setPoint: function() {
			var point = Point.read(arguments);
			this._point.set(point.x, point.y);
		},

		getHandleIn: function() {
			return this._handleIn;
		},

		setHandleIn: function() {
			var point = Point.read(arguments);
			this._handleIn.set(point.x, point.y);
		},

		getHandleOut: function() {
			return this._handleOut;
		},

		setHandleOut: function() {
			var point = Point.read(arguments);
			this._handleOut.set(point.x, point.y);
		},

		hasHandles: function() {
			return !this._handleIn.isZero() || !this._handleOut.isZero();
		},

		clearHandles: function() {
			this._handleIn.set(0, 0);
			this._handleOut.set(0, 0);
		},

		getSelection: function() {
			return this._selection;
		},

		setSelection: function(selection) {
			var oldSelection = this._selection,
				path = this._path;
			this._selection = selection = selection || 0;
			if (path && selection !== oldSelection) {
				path._updateSelection(this, oldSelection, selection);
				path._changed(129);
			}
		},

		changeSelection: function(flag, selected) {
			var selection = this._selection;
			this.setSelection(selected ? selection | flag : selection & ~flag);
		},

		isSelected: function() {
			return !!(this._selection & 7);
		},

		setSelected: function(selected) {
			this.changeSelection(7, selected);
		},

		getIndex: function() {
			return this._index !== undefined ? this._index : null;
		},

		getPath: function() {
			return this._path || null;
		},

		getCurve: function() {
			var path = this._path,
				index = this._index;
			if (path) {
				if (index > 0 && !path._closed
						&& index === path._segments.length - 1)
					index--;
				return path.getCurves()[index] || null;
			}
			return null;
		},

		getLocation: function() {
			var curve = this.getCurve();
			return curve
					? new CurveLocation(curve, this === curve._segment1 ? 0 : 1)
					: null;
		},

		getNext: function() {
			var segments = this._path && this._path._segments;
			return segments && (segments[this._index + 1]
					|| this._path._closed && segments[0]) || null;
		},

		smooth: function(options, _first, _last) {
			var opts = options || {},
				type = opts.type,
				factor = opts.factor,
				prev = this.getPrevious(),
				next = this.getNext(),
				p0 = (prev || this)._point,
				p1 = this._point,
				p2 = (next || this)._point,
				d1 = p0.getDistance(p1),
				d2 = p1.getDistance(p2);
			if (!type || type === 'catmull-rom') {
				var a = factor === undefined ? 0.5 : factor,
					d1_a = Math.pow(d1, a),
					d1_2a = d1_a * d1_a,
					d2_a = Math.pow(d2, a),
					d2_2a = d2_a * d2_a;
				if (!_first && prev) {
					var A = 2 * d2_2a + 3 * d2_a * d1_a + d1_2a,
						N = 3 * d2_a * (d2_a + d1_a);
					this.setHandleIn(N !== 0
						? new Point(
							(d2_2a * p0._x + A * p1._x - d1_2a * p2._x) / N - p1._x,
							(d2_2a * p0._y + A * p1._y - d1_2a * p2._y) / N - p1._y)
						: new Point());
				}
				if (!_last && next) {
					var A = 2 * d1_2a + 3 * d1_a * d2_a + d2_2a,
						N = 3 * d1_a * (d1_a + d2_a);
					this.setHandleOut(N !== 0
						? new Point(
							(d1_2a * p2._x + A * p1._x - d2_2a * p0._x) / N - p1._x,
							(d1_2a * p2._y + A * p1._y - d2_2a * p0._y) / N - p1._y)
						: new Point());
				}
			} else if (type === 'geometric') {
				if (prev && next) {
					var vector = p0.subtract(p2),
						t = factor === undefined ? 0.4 : factor,
						k = t * d1 / (d1 + d2);
					if (!_first)
						this.setHandleIn(vector.multiply(k));
					if (!_last)
						this.setHandleOut(vector.multiply(k - t));
				}
			} else {
				throw new Error('Smoothing method \'' + type + '\' not supported.');
			}
		},

		getPrevious: function() {
			var segments = this._path && this._path._segments;
			return segments && (segments[this._index - 1]
					|| this._path._closed && segments[segments.length - 1]) || null;
		},

		isFirst: function() {
			return this._index === 0;
		},

		isLast: function() {
			var path = this._path;
			return path && this._index === path._segments.length - 1 || false;
		},

		reverse: function() {
			var handleIn = this._handleIn,
				handleOut = this._handleOut,
				inX = handleIn._x,
				inY = handleIn._y;
			handleIn.set(handleOut._x, handleOut._y);
			handleOut.set(inX, inY);
		},

		reversed: function() {
			return new Segment(this._point, this._handleOut, this._handleIn);
		},

		remove: function() {
			return this._path ? !!this._path.removeSegment(this._index) : false;
		},

		clone: function() {
			return new Segment(this._point, this._handleIn, this._handleOut);
		},

		equals: function(segment) {
			return segment === this || segment && this._class === segment._class
					&& this._point.equals(segment._point)
					&& this._handleIn.equals(segment._handleIn)
					&& this._handleOut.equals(segment._handleOut)
					|| false;
		},

		toString: function() {
			var parts = [ 'point: ' + this._point ];
			if (!this._handleIn.isZero())
				parts.push('handleIn: ' + this._handleIn);
			if (!this._handleOut.isZero())
				parts.push('handleOut: ' + this._handleOut);
			return '{ ' + parts.join(', ') + ' }';
		},

		transform: function(matrix) {
			this._transformCoordinates(matrix, new Array(6), true);
			this._changed();
		},

		interpolate: function(from, to, factor) {
			var u = 1 - factor,
				v = factor,
				point1 = from._point,
				point2 = to._point,
				handleIn1 = from._handleIn,
				handleIn2 = to._handleIn,
				handleOut2 = to._handleOut,
				handleOut1 = from._handleOut;
			this._point.set(
					u * point1._x + v * point2._x,
					u * point1._y + v * point2._y, true);
			this._handleIn.set(
					u * handleIn1._x + v * handleIn2._x,
					u * handleIn1._y + v * handleIn2._y, true);
			this._handleOut.set(
					u * handleOut1._x + v * handleOut2._x,
					u * handleOut1._y + v * handleOut2._y, true);
			this._changed();
		},

		_transformCoordinates: function(matrix, coords, change) {
			var point = this._point,
				handleIn = !change || !this._handleIn.isZero()
						? this._handleIn : null,
				handleOut = !change || !this._handleOut.isZero()
						? this._handleOut : null,
				x = point._x,
				y = point._y,
				i = 2;
			coords[0] = x;
			coords[1] = y;
			if (handleIn) {
				coords[i++] = handleIn._x + x;
				coords[i++] = handleIn._y + y;
			}
			if (handleOut) {
				coords[i++] = handleOut._x + x;
				coords[i++] = handleOut._y + y;
			}
			if (matrix) {
				matrix._transformCoordinates(coords, coords, i / 2);
				x = coords[0];
				y = coords[1];
				if (change) {
					point._x = x;
					point._y = y;
					i = 2;
					if (handleIn) {
						handleIn._x = coords[i++] - x;
						handleIn._y = coords[i++] - y;
					}
					if (handleOut) {
						handleOut._x = coords[i++] - x;
						handleOut._y = coords[i++] - y;
					}
				} else {
					if (!handleIn) {
						coords[i++] = x;
						coords[i++] = y;
					}
					if (!handleOut) {
						coords[i++] = x;
						coords[i++] = y;
					}
				}
			}
			return coords;
		}
	});

	var SegmentPoint = Point.extend({
		initialize: function SegmentPoint(point, owner, key) {
			var x, y,
				selected;
			if (!point) {
				x = y = 0;
			} else if ((x = point[0]) !== undefined) {
				y = point[1];
			} else {
				var pt = point;
				if ((x = pt.x) === undefined) {
					pt = Point.read(arguments);
					x = pt.x;
				}
				y = pt.y;
				selected = pt.selected;
			}
			this._x = x;
			this._y = y;
			this._owner = owner;
			owner[key] = this;
			if (selected)
				this.setSelected(true);
		},

		set: function(x, y) {
			this._x = x;
			this._y = y;
			this._owner._changed(this);
			return this;
		},

		getX: function() {
			return this._x;
		},

		setX: function(x) {
			this._x = x;
			this._owner._changed(this);
		},

		getY: function() {
			return this._y;
		},

		setY: function(y) {
			this._y = y;
			this._owner._changed(this);
		},

		isZero: function() {
			return Numerical.isZero(this._x) && Numerical.isZero(this._y);
		},

		isSelected: function() {
			return !!(this._owner._selection & this._getSelection());
		},

		setSelected: function(selected) {
			this._owner.changeSelection(this._getSelection(), selected);
		},

		_getSelection: function() {
			var owner = this._owner;
			return this === owner._point ? 1
				: this === owner._handleIn ? 2
				: this === owner._handleOut ? 4
				: 0;
		}
	});

	var Curve = Base.extend({
		_class: 'Curve',

		initialize: function Curve(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
			var count = arguments.length,
				seg1, seg2,
				point1, point2,
				handle1, handle2;
			if (count === 3) {
				this._path = arg0;
				seg1 = arg1;
				seg2 = arg2;
			} else if (count === 0) {
				seg1 = new Segment();
				seg2 = new Segment();
			} else if (count === 1) {
				if ('segment1' in arg0) {
					seg1 = new Segment(arg0.segment1);
					seg2 = new Segment(arg0.segment2);
				} else if ('point1' in arg0) {
					point1 = arg0.point1;
					handle1 = arg0.handle1;
					handle2 = arg0.handle2;
					point2 = arg0.point2;
				} else if (Array.isArray(arg0)) {
					point1 = [arg0[0], arg0[1]];
					point2 = [arg0[6], arg0[7]];
					handle1 = [arg0[2] - arg0[0], arg0[3] - arg0[1]];
					handle2 = [arg0[4] - arg0[6], arg0[5] - arg0[7]];
				}
			} else if (count === 2) {
				seg1 = new Segment(arg0);
				seg2 = new Segment(arg1);
			} else if (count === 4) {
				point1 = arg0;
				handle1 = arg1;
				handle2 = arg2;
				point2 = arg3;
			} else if (count === 8) {
				point1 = [arg0, arg1];
				point2 = [arg6, arg7];
				handle1 = [arg2 - arg0, arg3 - arg1];
				handle2 = [arg4 - arg6, arg5 - arg7];
			}
			this._segment1 = seg1 || new Segment(point1, null, handle1);
			this._segment2 = seg2 || new Segment(point2, handle2, null);
		},

		_serialize: function(options, dictionary) {
			return Base.serialize(this.hasHandles()
					? [this.getPoint1(), this.getHandle1(), this.getHandle2(),
						this.getPoint2()]
					: [this.getPoint1(), this.getPoint2()],
					options, true, dictionary);
		},

		_changed: function() {
			this._length = this._bounds = undefined;
		},

		clone: function() {
			return new Curve(this._segment1, this._segment2);
		},

		toString: function() {
			var parts = [ 'point1: ' + this._segment1._point ];
			if (!this._segment1._handleOut.isZero())
				parts.push('handle1: ' + this._segment1._handleOut);
			if (!this._segment2._handleIn.isZero())
				parts.push('handle2: ' + this._segment2._handleIn);
			parts.push('point2: ' + this._segment2._point);
			return '{ ' + parts.join(', ') + ' }';
		},

		remove: function() {
			var removed = false;
			if (this._path) {
				var segment2 = this._segment2,
					handleOut = segment2._handleOut;
				removed = segment2.remove();
				if (removed)
					this._segment1._handleOut.set(handleOut.x, handleOut.y);
			}
			return removed;
		},

		getPoint1: function() {
			return this._segment1._point;
		},

		setPoint1: function() {
			var point = Point.read(arguments);
			this._segment1._point.set(point.x, point.y);
		},

		getPoint2: function() {
			return this._segment2._point;
		},

		setPoint2: function() {
			var point = Point.read(arguments);
			this._segment2._point.set(point.x, point.y);
		},

		getHandle1: function() {
			return this._segment1._handleOut;
		},

		setHandle1: function() {
			var point = Point.read(arguments);
			this._segment1._handleOut.set(point.x, point.y);
		},

		getHandle2: function() {
			return this._segment2._handleIn;
		},

		setHandle2: function() {
			var point = Point.read(arguments);
			this._segment2._handleIn.set(point.x, point.y);
		},

		getSegment1: function() {
			return this._segment1;
		},

		getSegment2: function() {
			return this._segment2;
		},

		getPath: function() {
			return this._path;
		},

		getIndex: function() {
			return this._segment1._index;
		},

		getNext: function() {
			var curves = this._path && this._path._curves;
			return curves && (curves[this._segment1._index + 1]
					|| this._path._closed && curves[0]) || null;
		},

		getPrevious: function() {
			var curves = this._path && this._path._curves;
			return curves && (curves[this._segment1._index - 1]
					|| this._path._closed && curves[curves.length - 1]) || null;
		},

		isFirst: function() {
			return this._segment1._index === 0;
		},

		isLast: function() {
			var path = this._path;
			return path && this._segment1._index === path._curves.length - 1
					|| false;
		},

		isSelected: function() {
			return this.getPoint1().isSelected()
					&& this.getHandle2().isSelected()
					&& this.getHandle2().isSelected()
					&& this.getPoint2().isSelected();
		},

		setSelected: function(selected) {
			this.getPoint1().setSelected(selected);
			this.getHandle1().setSelected(selected);
			this.getHandle2().setSelected(selected);
			this.getPoint2().setSelected(selected);
		},

		getValues: function(matrix) {
			return Curve.getValues(this._segment1, this._segment2, matrix);
		},

		getPoints: function() {
			var coords = this.getValues(),
				points = [];
			for (var i = 0; i < 8; i += 2)
				points.push(new Point(coords[i], coords[i + 1]));
			return points;
		},

		getLength: function() {
			if (this._length == null)
				this._length = Curve.getLength(this.getValues(), 0, 1);
			return this._length;
		},

		getArea: function() {
			return Curve.getArea(this.getValues());
		},

		getLine: function() {
			return new Line(this._segment1._point, this._segment2._point);
		},

		getPart: function(from, to) {
			return new Curve(Curve.getPart(this.getValues(), from, to));
		},

		getPartLength: function(from, to) {
			return Curve.getLength(this.getValues(), from, to);
		},

		getIntersections: function(curve) {
			return Curve._getIntersections(this.getValues(),
					curve && curve !== this ? curve.getValues() : null,
					this, curve, [], {});
		},

		divideAt: function(location) {
			return this.divideAtTime(location && location.curve === this
					? location.time : location);
		},

		divideAtTime: function(time, _setHandles) {
			var tMin = 4e-7,
				tMax = 1 - tMin,
				res = null;
			if (time >= tMin && time <= tMax) {
				var parts = Curve.subdivide(this.getValues(), time),
					left = parts[0],
					right = parts[1],
					setHandles = _setHandles || this.hasHandles(),
					segment1 = this._segment1,
					segment2 = this._segment2,
					path = this._path;
				if (setHandles) {
					segment1._handleOut.set(left[2] - left[0], left[3] - left[1]);
					segment2._handleIn.set(right[4] - right[6],right[5] - right[7]);
				}
				var x = left[6], y = left[7],
					segment = new Segment(new Point(x, y),
							setHandles && new Point(left[4] - x, left[5] - y),
							setHandles && new Point(right[2] - x, right[3] - y));
				if (path) {
					path.insert(segment1._index + 1, segment);
					res = this.getNext();
				} else {
					this._segment2 = segment;
					this._changed();
					res = new Curve(segment, segment2);
				}
			}
			return res;
		},

		splitAt: function(location) {
			return this._path ? this._path.splitAt(location) : null;
		},

		splitAtTime: function(t) {
			return this.splitAt(this.getLocationAtTime(t));
		},

		divide: function(offset, isTime) {
			return this.divideAtTime(offset === undefined ? 0.5 : isTime ? offset
					: this.getTimeAt(offset));
		},

		split: function(offset, isTime) {
			return this.splitAtTime(offset === undefined ? 0.5 : isTime ? offset
					: this.getTimeAt(offset));
		},

		reversed: function() {
			return new Curve(this._segment2.reversed(), this._segment1.reversed());
		},

		clearHandles: function() {
			this._segment1._handleOut.set(0, 0);
			this._segment2._handleIn.set(0, 0);
		},

	statics: {
		getValues: function(segment1, segment2, matrix) {
			var p1 = segment1._point,
				h1 = segment1._handleOut,
				h2 = segment2._handleIn,
				p2 = segment2._point,
				values = [
					p1._x, p1._y,
					p1._x + h1._x, p1._y + h1._y,
					p2._x + h2._x, p2._y + h2._y,
					p2._x, p2._y
				];
			if (matrix)
				matrix._transformCoordinates(values, values, 4);
			return values;
		},

		subdivide: function(v, t) {
			var p1x = v[0], p1y = v[1],
				c1x = v[2], c1y = v[3],
				c2x = v[4], c2y = v[5],
				p2x = v[6], p2y = v[7];
			if (t === undefined)
				t = 0.5;
			var u = 1 - t,
				p3x = u * p1x + t * c1x, p3y = u * p1y + t * c1y,
				p4x = u * c1x + t * c2x, p4y = u * c1y + t * c2y,
				p5x = u * c2x + t * p2x, p5y = u * c2y + t * p2y,
				p6x = u * p3x + t * p4x, p6y = u * p3y + t * p4y,
				p7x = u * p4x + t * p5x, p7y = u * p4y + t * p5y,
				p8x = u * p6x + t * p7x, p8y = u * p6y + t * p7y;
			return [
				[p1x, p1y, p3x, p3y, p6x, p6y, p8x, p8y],
				[p8x, p8y, p7x, p7y, p5x, p5y, p2x, p2y]
			];
		},

		solveCubic: function (v, coord, val, roots, min, max) {
			var p1 = v[coord],
				c1 = v[coord + 2],
				c2 = v[coord + 4],
				p2 = v[coord + 6],
				res = 0;
			if (  !(p1 < val && p2 < val && c1 < val && c2 < val ||
					p1 > val && p2 > val && c1 > val && c2 > val)) {
				var c = 3 * (c1 - p1),
					b = 3 * (c2 - c1) - c,
					a = p2 - p1 - c - b;
				res = Numerical.solveCubic(a, b, c, p1 - val, roots, min, max);
			}
			return res;
		},

		getTimeOf: function(v, point) {
			var p1 = new Point(v[0], v[1]),
				p2 = new Point(v[6], v[7]),
				epsilon = 1e-12,
				t = point.isClose(p1, epsilon) ? 0
				  : point.isClose(p2, epsilon) ? 1
				  : null;
			if (t !== null)
				return t;
			var coords = [point.x, point.y],
				roots = [],
				geomEpsilon = 2e-7;
			for (var c = 0; c < 2; c++) {
				var count = Curve.solveCubic(v, c, coords[c], roots, 0, 1);
				for (var i = 0; i < count; i++) {
					t = roots[i];
					if (point.isClose(Curve.getPoint(v, t), geomEpsilon))
						return t;
				}
			}
			return point.isClose(p1, geomEpsilon) ? 0
				 : point.isClose(p2, geomEpsilon) ? 1
				 : null;
		},

		getNearestTime: function(v, point) {
			if (Curve.isStraight(v)) {
				var p1x = v[0], p1y = v[1],
					p2x = v[6], p2y = v[7],
					vx = p2x - p1x, vy = p2y - p1y,
					det = vx * vx + vy * vy;
				if (det === 0)
					return 0;
				var u = ((point.x - p1x) * vx + (point.y - p1y) * vy) / det;
				return u < 1e-12 ? 0
					 : u > 0.999999999999 ? 1
					 : Curve.getTimeOf(v,
						new Point(p1x + u * vx, p1y + u * vy));
			}

			var count = 100,
				minDist = Infinity,
				minT = 0;

			function refine(t) {
				if (t >= 0 && t <= 1) {
					var dist = point.getDistance(Curve.getPoint(v, t), true);
					if (dist < minDist) {
						minDist = dist;
						minT = t;
						return true;
					}
				}
			}

			for (var i = 0; i <= count; i++)
				refine(i / count);

			var step = 1 / (count * 2);
			while (step > 4e-7) {
				if (!refine(minT - step) && !refine(minT + step))
					step /= 2;
			}
			return minT;
		},

		getPart: function(v, from, to) {
			var flip = from > to;
			if (flip) {
				var tmp = from;
				from = to;
				to = tmp;
			}
			if (from > 0)
				v = Curve.subdivide(v, from)[1];
			if (to < 1)
				v = Curve.subdivide(v, (to - from) / (1 - from))[0];
			return flip
					? [v[6], v[7], v[4], v[5], v[2], v[3], v[0], v[1]]
					: v;
		},

		isFlatEnough: function(v, flatness) {
			var p1x = v[0], p1y = v[1],
				c1x = v[2], c1y = v[3],
				c2x = v[4], c2y = v[5],
				p2x = v[6], p2y = v[7],
				ux = 3 * c1x - 2 * p1x - p2x,
				uy = 3 * c1y - 2 * p1y - p2y,
				vx = 3 * c2x - 2 * p2x - p1x,
				vy = 3 * c2y - 2 * p2y - p1y;
			return Math.max(ux * ux, vx * vx) + Math.max(uy * uy, vy * vy)
					<= 16 * flatness * flatness;
		},

		getArea: function(v) {
			var p1x = v[0], p1y = v[1],
				c1x = v[2], c1y = v[3],
				c2x = v[4], c2y = v[5],
				p2x = v[6], p2y = v[7];
			return 3 * ((p2y - p1y) * (c1x + c2x) - (p2x - p1x) * (c1y + c2y)
					+ c1y * (p1x - c2x) - c1x * (p1y - c2y)
					+ p2y * (c2x + p1x / 3) - p2x * (c2y + p1y / 3)) / 20;
		},

		getBounds: function(v) {
			var min = v.slice(0, 2),
				max = min.slice(),
				roots = [0, 0];
			for (var i = 0; i < 2; i++)
				Curve._addBounds(v[i], v[i + 2], v[i + 4], v[i + 6],
						i, 0, min, max, roots);
			return new Rectangle(min[0], min[1], max[0] - min[0], max[1] - min[1]);
		},

		_addBounds: function(v0, v1, v2, v3, coord, padding, min, max, roots) {
			function add(value, padding) {
				var left = value - padding,
					right = value + padding;
				if (left < min[coord])
					min[coord] = left;
				if (right > max[coord])
					max[coord] = right;
			}

			padding /= 2;
			var minPad = min[coord] - padding,
				maxPad = max[coord] + padding;
			if (    v0 < minPad || v1 < minPad || v2 < minPad || v3 < minPad ||
					v0 > maxPad || v1 > maxPad || v2 > maxPad || v3 > maxPad) {
				if (v1 < v0 != v1 < v3 && v2 < v0 != v2 < v3) {
					add(v0, padding);
					add(v3, padding);
				} else {
					var a = 3 * (v1 - v2) - v0 + v3,
						b = 2 * (v0 + v2) - 4 * v1,
						c = v1 - v0,
						count = Numerical.solveQuadratic(a, b, c, roots),
						tMin = 4e-7,
						tMax = 1 - tMin;
					add(v3, 0);
					for (var i = 0; i < count; i++) {
						var t = roots[i],
							u = 1 - t;
						if (tMin < t && t < tMax)
							add(u * u * u * v0
								+ 3 * u * u * t * v1
								+ 3 * u * t * t * v2
								+ t * t * t * v3,
								padding);
					}
				}
			}
		}
	}}, Base.each(
		['getBounds', 'getStrokeBounds', 'getHandleBounds'],
		function(name) {
			this[name] = function() {
				if (!this._bounds)
					this._bounds = {};
				var bounds = this._bounds[name];
				if (!bounds) {
					bounds = this._bounds[name] = Path[name](
							[this._segment1, this._segment2], false, this._path);
				}
				return bounds.clone();
			};
		},
	{

	}), Base.each({
		isStraight: function(l, h1, h2) {
			if (h1.isZero() && h2.isZero()) {
				return true;
			} else {
				var v = l.getVector(),
					epsilon = 2e-7;
				if (v.isZero()) {
					return false;
				} else if (l.getDistance(h1) < epsilon
						&& l.getDistance(h2) < epsilon) {
					var div = v.dot(v),
						p1 = v.dot(h1) / div,
						p2 = v.dot(h2) / div;
					return p1 >= 0 && p1 <= 1 && p2 <= 0 && p2 >= -1;
				}
			}
			return false;
		},

		isLinear: function(l, h1, h2) {
			var third = l.getVector().divide(3);
			return h1.equals(third) && h2.negate().equals(third);
		}
	}, function(test, name) {
		this[name] = function() {
			var seg1 = this._segment1,
				seg2 = this._segment2;
			return test(new Line(seg1._point, seg2._point),
					seg1._handleOut, seg2._handleIn);
		};

		this.statics[name] = function(v) {
			var p1x = v[0], p1y = v[1],
				p2x = v[6], p2y = v[7];
			return test(new Line(p1x, p1y, p2x, p2y),
					new Point(v[2] - p1x, v[3] - p1y),
					new Point(v[4] - p2x, v[5] - p2y));
		};
	}, {
		statics: {},

		hasHandles: function() {
			return !this._segment1._handleOut.isZero()
					|| !this._segment2._handleIn.isZero();
		},

		isCollinear: function(curve) {
			return curve && this.isStraight() && curve.isStraight()
					&& this.getLine().isCollinear(curve.getLine());
		},

		isHorizontal: function() {
			return this.isStraight() && Math.abs(this.getTangentAtTime(0.5).y)
					< 1e-7;
		},

		isVertical: function() {
			return this.isStraight() && Math.abs(this.getTangentAtTime(0.5).x)
					< 1e-7;
		}
	}), {
		beans: false,

		getLocationAt: function(offset, _isTime) {
			return this.getLocationAtTime(
					_isTime ? offset : this.getTimeAt(offset));
		},

		getLocationAtTime: function(t) {
			return t != null && t >= 0 && t <= 1
					? new CurveLocation(this, t)
					: null;
		},

		getTimeAt: function(offset, start) {
			return Curve.getTimeAt(this.getValues(), offset, start);
		},

		getParameterAt: '#getTimeAt',

		getOffsetAtTime: function(t) {
			return this.getPartLength(0, t);
		},

		getLocationOf: function() {
			return this.getLocationAtTime(this.getTimeOf(Point.read(arguments)));
		},

		getOffsetOf: function() {
			var loc = this.getLocationOf.apply(this, arguments);
			return loc ? loc.getOffset() : null;
		},

		getTimeOf: function() {
			return Curve.getTimeOf(this.getValues(), Point.read(arguments));
		},

		getParameterOf: '#getTimeOf',

		getNearestLocation: function() {
			var point = Point.read(arguments),
				values = this.getValues(),
				t = Curve.getNearestTime(values, point),
				pt = Curve.getPoint(values, t);
			return new CurveLocation(this, t, pt, null, point.getDistance(pt));
		},

		getNearestPoint: function() {
			var loc = this.getNearestLocation.apply(this, arguments);
			return loc ? loc.getPoint() : loc;
		}

	},
	new function() {
		var methods = ['getPoint', 'getTangent', 'getNormal', 'getWeightedTangent',
			'getWeightedNormal', 'getCurvature'];
		return Base.each(methods,
			function(name) {
				this[name + 'At'] = function(location, _isTime) {
					var values = this.getValues();
					return Curve[name](values, _isTime ? location
							: Curve.getTimeAt(values, location));
				};

				this[name + 'AtTime'] = function(time) {
					return Curve[name](this.getValues(), time);
				};
			}, {
				statics: {
					_evaluateMethods: methods
				}
			}
		);
	},
	new function() {

		function getLengthIntegrand(v) {
			var p1x = v[0], p1y = v[1],
				c1x = v[2], c1y = v[3],
				c2x = v[4], c2y = v[5],
				p2x = v[6], p2y = v[7],

				ax = 9 * (c1x - c2x) + 3 * (p2x - p1x),
				bx = 6 * (p1x + c2x) - 12 * c1x,
				cx = 3 * (c1x - p1x),

				ay = 9 * (c1y - c2y) + 3 * (p2y - p1y),
				by = 6 * (p1y + c2y) - 12 * c1y,
				cy = 3 * (c1y - p1y);

			return function(t) {
				var dx = (ax * t + bx) * t + cx,
					dy = (ay * t + by) * t + cy;
				return Math.sqrt(dx * dx + dy * dy);
			};
		}

		function getIterations(a, b) {
			return Math.max(2, Math.min(16, Math.ceil(Math.abs(b - a) * 32)));
		}

		function evaluate(v, t, type, normalized) {
			if (t == null || t < 0 || t > 1)
				return null;
			var p1x = v[0], p1y = v[1],
				c1x = v[2], c1y = v[3],
				c2x = v[4], c2y = v[5],
				p2x = v[6], p2y = v[7],
				isZero = Numerical.isZero;
			if (isZero(c1x - p1x) && isZero(c1y - p1y)) {
				c1x = p1x;
				c1y = p1y;
			}
			if (isZero(c2x - p2x) && isZero(c2y - p2y)) {
				c2x = p2x;
				c2y = p2y;
			}
			var cx = 3 * (c1x - p1x),
				bx = 3 * (c2x - c1x) - cx,
				ax = p2x - p1x - cx - bx,
				cy = 3 * (c1y - p1y),
				by = 3 * (c2y - c1y) - cy,
				ay = p2y - p1y - cy - by,
				x, y;
			if (type === 0) {
				x = t === 0 ? p1x : t === 1 ? p2x
						: ((ax * t + bx) * t + cx) * t + p1x;
				y = t === 0 ? p1y : t === 1 ? p2y
						: ((ay * t + by) * t + cy) * t + p1y;
			} else {
				var tMin = 4e-7,
					tMax = 1 - tMin;
				if (t < tMin) {
					x = cx;
					y = cy;
				} else if (t > tMax) {
					x = 3 * (p2x - c2x);
					y = 3 * (p2y - c2y);
				} else {
					x = (3 * ax * t + 2 * bx) * t + cx;
					y = (3 * ay * t + 2 * by) * t + cy;
				}
				if (normalized) {
					if (x === 0 && y === 0 && (t < tMin || t > tMax)) {
						x = c2x - c1x;
						y = c2y - c1y;
					}
					var len = Math.sqrt(x * x + y * y);
					if (len) {
						x /= len;
						y /= len;
					}
				}
				if (type === 3) {
					var x2 = 6 * ax * t + 2 * bx,
						y2 = 6 * ay * t + 2 * by,
						d = Math.pow(x * x + y * y, 3 / 2);
					x = d !== 0 ? (x * y2 - y * x2) / d : 0;
					y = 0;
				}
			}
			return type === 2 ? new Point(y, -x) : new Point(x, y);
		}

		return { statics: {

			getLength: function(v, a, b, ds) {
				if (a === undefined)
					a = 0;
				if (b === undefined)
					b = 1;
				if (Curve.isStraight(v)) {
					var c = v;
					if (b < 1) {
						c = Curve.subdivide(c, b)[0];
						a /= b;
					}
					if (a > 0) {
						c = Curve.subdivide(c, a)[1];
					}
					var dx = c[6] - c[0],
						dy = c[7] - c[1];
					return Math.sqrt(dx * dx + dy * dy);
				}
				return Numerical.integrate(ds || getLengthIntegrand(v), a, b,
						getIterations(a, b));
			},

			getTimeAt: function(v, offset, start) {
				if (start === undefined)
					start = offset < 0 ? 1 : 0;
				if (offset === 0)
					return start;
				var abs = Math.abs,
					epsilon = 1e-12,
					forward = offset > 0,
					a = forward ? start : 0,
					b = forward ? 1 : start,
					ds = getLengthIntegrand(v),
					rangeLength = Curve.getLength(v, a, b, ds),
					diff = abs(offset) - rangeLength;
				if (abs(diff) < epsilon) {
					return forward ? b : a;
				} else if (diff > epsilon) {
					return null;
				}
				var guess = offset / rangeLength,
					length = 0;
				function f(t) {
					length += Numerical.integrate(ds, start, t,
							getIterations(start, t));
					start = t;
					return length - offset;
				}
				return Numerical.findRoot(f, ds, start + guess, a, b, 32,
						1e-12);
			},

			getPoint: function(v, t) {
				return evaluate(v, t, 0, false);
			},

			getTangent: function(v, t) {
				return evaluate(v, t, 1, true);
			},

			getWeightedTangent: function(v, t) {
				return evaluate(v, t, 1, false);
			},

			getNormal: function(v, t) {
				return evaluate(v, t, 2, true);
			},

			getWeightedNormal: function(v, t) {
				return evaluate(v, t, 2, false);
			},

			getCurvature: function(v, t) {
				return evaluate(v, t, 3, false).x;
			}
		}};
	},
	new function() {

		function addLocation(locations, param, v1, c1, t1, p1, v2, c2, t2, p2,
				overlap) {
			var excludeStart = !overlap && param.excludeStart,
				excludeEnd = !overlap && param.excludeEnd,
				tMin = 4e-7,
				tMax = 1 - tMin;
			if (t1 == null)
				t1 = Curve.getTimeOf(v1, p1);
			if (t1 !== null && t1 >= (excludeStart ? tMin : 0) &&
				t1 <= (excludeEnd ? tMax : 1)) {
				if (t2 == null)
					t2 = Curve.getTimeOf(v2, p2);
				if (t2 !== null && t2 >= (excludeEnd ? tMin : 0) &&
					t2 <= (excludeStart ? tMax : 1)) {
					var renormalize = param.renormalize;
					if (renormalize) {
						var res = renormalize(t1, t2);
						t1 = res[0];
						t2 = res[1];
					}
					var loc1 = new CurveLocation(c1, t1,
							p1 || Curve.getPoint(v1, t1), overlap),
						loc2 = new CurveLocation(c2, t2,
							p2 || Curve.getPoint(v2, t2), overlap),
						flip = loc1.getPath() === loc2.getPath()
							&& loc1.getIndex() > loc2.getIndex(),
						loc = flip ? loc2 : loc1,
						include = param.include;
					loc1._intersection = loc2;
					loc2._intersection = loc1;
					if (!include || include(loc)) {
						CurveLocation.insert(locations, loc, true);
					}
				}
			}
		}

		function addCurveIntersections(v1, v2, c1, c2, locations, param, tMin, tMax,
				uMin, uMax, flip, recursion, calls) {
			if (++recursion >= 48 || ++calls > 4096)
				return calls;
			var q0x = v2[0], q0y = v2[1], q3x = v2[6], q3y = v2[7],
				getSignedDistance = Line.getSignedDistance,
				d1 = getSignedDistance(q0x, q0y, q3x, q3y, v2[2], v2[3]),
				d2 = getSignedDistance(q0x, q0y, q3x, q3y, v2[4], v2[5]),
				factor = d1 * d2 > 0 ? 3 / 4 : 4 / 9,
				dMin = factor * Math.min(0, d1, d2),
				dMax = factor * Math.max(0, d1, d2),
				dp0 = getSignedDistance(q0x, q0y, q3x, q3y, v1[0], v1[1]),
				dp1 = getSignedDistance(q0x, q0y, q3x, q3y, v1[2], v1[3]),
				dp2 = getSignedDistance(q0x, q0y, q3x, q3y, v1[4], v1[5]),
				dp3 = getSignedDistance(q0x, q0y, q3x, q3y, v1[6], v1[7]),
				hull = getConvexHull(dp0, dp1, dp2, dp3),
				top = hull[0],
				bottom = hull[1],
				tMinClip,
				tMaxClip;
			if (d1 === 0 && d2 === 0
					&& dp0 === 0 && dp1 === 0 && dp2 === 0 && dp3 === 0
				|| (tMinClip = clipConvexHull(top, bottom, dMin, dMax)) == null
				|| (tMaxClip = clipConvexHull(top.reverse(), bottom.reverse(),
					dMin, dMax)) == null)
				return calls;
			var tMinNew = tMin + (tMax - tMin) * tMinClip,
				tMaxNew = tMin + (tMax - tMin) * tMaxClip;
			if (Math.max(uMax - uMin, tMaxNew - tMinNew)
					< 1e-9) {
				var t = (tMinNew + tMaxNew) / 2,
					u = (uMin + uMax) / 2;
				v1 = c1.getValues();
				v2 = c2.getValues();
				addLocation(locations, param,
						flip ? v2 : v1, flip ? c2 : c1, flip ? u : t, null,
						flip ? v1 : v2, flip ? c1 : c2, flip ? t : u, null);
			} else {
				v1 = Curve.getPart(v1, tMinClip, tMaxClip);
				if (tMaxClip - tMinClip > 0.8) {
					if (tMaxNew - tMinNew > uMax - uMin) {
						var parts = Curve.subdivide(v1, 0.5),
							t = (tMinNew + tMaxNew) / 2;
						calls = addCurveIntersections(
								v2, parts[0], c2, c1, locations, param,
								uMin, uMax, tMinNew, t, !flip, recursion, calls);
						calls = addCurveIntersections(
								v2, parts[1], c2, c1, locations, param,
								uMin, uMax, t, tMaxNew, !flip, recursion, calls);
					} else {
						var parts = Curve.subdivide(v2, 0.5),
							u = (uMin + uMax) / 2;
						calls = addCurveIntersections(
								parts[0], v1, c2, c1, locations, param,
								uMin, u, tMinNew, tMaxNew, !flip, recursion, calls);
						calls = addCurveIntersections(
								parts[1], v1, c2, c1, locations, param,
								u, uMax, tMinNew, tMaxNew, !flip, recursion, calls);
					}
				} else {
					calls = addCurveIntersections(
							v2, v1, c2, c1, locations, param,
							uMin, uMax, tMinNew, tMaxNew, !flip, recursion, calls);
				}
			}
			return calls;
		}

		function getConvexHull(dq0, dq1, dq2, dq3) {
			var p0 = [ 0, dq0 ],
				p1 = [ 1 / 3, dq1 ],
				p2 = [ 2 / 3, dq2 ],
				p3 = [ 1, dq3 ],
				dist1 = dq1 - (2 * dq0 + dq3) / 3,
				dist2 = dq2 - (dq0 + 2 * dq3) / 3,
				hull;
			if (dist1 * dist2 < 0) {
				hull = [[p0, p1, p3], [p0, p2, p3]];
			} else {
				var distRatio = dist1 / dist2;
				hull = [
					distRatio >= 2 ? [p0, p1, p3]
					: distRatio <= 0.5 ? [p0, p2, p3]
					: [p0, p1, p2, p3],
					[p0, p3]
				];
			}
			return (dist1 || dist2) < 0 ? hull.reverse() : hull;
		}

		function clipConvexHull(hullTop, hullBottom, dMin, dMax) {
			if (hullTop[0][1] < dMin) {
				return clipConvexHullPart(hullTop, true, dMin);
			} else if (hullBottom[0][1] > dMax) {
				return clipConvexHullPart(hullBottom, false, dMax);
			} else {
				return hullTop[0][0];
			}
		}

		function clipConvexHullPart(part, top, threshold) {
			var px = part[0][0],
				py = part[0][1];
			for (var i = 1, l = part.length; i < l; i++) {
				var qx = part[i][0],
					qy = part[i][1];
				if (top ? qy >= threshold : qy <= threshold) {
					return qy === threshold ? qx
							: px + (threshold - py) * (qx - px) / (qy - py);
				}
				px = qx;
				py = qy;
			}
			return null;
		}

		function addCurveLineIntersections(v1, v2, c1, c2, locations, param) {
			var flip = Curve.isStraight(v1),
				vc = flip ? v2 : v1,
				vl = flip ? v1 : v2,
				lx1 = vl[0], ly1 = vl[1],
				lx2 = vl[6], ly2 = vl[7],
				ldx = lx2 - lx1,
				ldy = ly2 - ly1,
				angle = Math.atan2(-ldy, ldx),
				sin = Math.sin(angle),
				cos = Math.cos(angle),
				rvc = [];
			for(var i = 0; i < 8; i += 2) {
				var x = vc[i] - lx1,
					y = vc[i + 1] - ly1;
				rvc.push(
					x * cos - y * sin,
					x * sin + y * cos);
			}
			var roots = [],
				count = Curve.solveCubic(rvc, 1, 0, roots, 0, 1);
			for (var i = 0; i < count; i++) {
				var tc = roots[i],
					pc = Curve.getPoint(vc, tc),
					tl = Curve.getTimeOf(vl, pc);
				if (tl !== null) {
					var pl = Curve.getPoint(vl, tl),
						t1 = flip ? tl : tc,
						t2 = flip ? tc : tl;
					if (!param.excludeEnd || t2 > Numerical.CURVETIME_EPSILON) {
						addLocation(locations, param,
								v1, c1, t1, flip ? pl : pc,
								v2, c2, t2, flip ? pc : pl);
					}
				}
			}
		}

		function addLineIntersection(v1, v2, c1, c2, locations, param) {
			var pt = Line.intersect(
					v1[0], v1[1], v1[6], v1[7],
					v2[0], v2[1], v2[6], v2[7]);
			if (pt) {
				addLocation(locations, param, v1, c1, null, pt, v2, c2, null, pt);
			}
		}

		return { statics: {
			_getIntersections: function(v1, v2, c1, c2, locations, param) {
				if (!v2) {
					return Curve._getSelfIntersection(v1, c1, locations, param);
				}
				var epsilon = 2e-7,
					c1p1x = v1[0], c1p1y = v1[1],
					c1p2x = v1[6], c1p2y = v1[7],
					c2p1x = v2[0], c2p1y = v2[1],
					c2p2x = v2[6], c2p2y = v2[7],
					c1s1x = (3 * v1[2] + c1p1x) / 4,
					c1s1y = (3 * v1[3] + c1p1y) / 4,
					c1s2x = (3 * v1[4] + c1p2x) / 4,
					c1s2y = (3 * v1[5] + c1p2y) / 4,
					c2s1x = (3 * v2[2] + c2p1x) / 4,
					c2s1y = (3 * v2[3] + c2p1y) / 4,
					c2s2x = (3 * v2[4] + c2p2x) / 4,
					c2s2y = (3 * v2[5] + c2p2y) / 4,
					min = Math.min,
					max = Math.max;
				if (!(  max(c1p1x, c1s1x, c1s2x, c1p2x) + epsilon >
						min(c2p1x, c2s1x, c2s2x, c2p2x) &&
						min(c1p1x, c1s1x, c1s2x, c1p2x) - epsilon <
						max(c2p1x, c2s1x, c2s2x, c2p2x) &&
						max(c1p1y, c1s1y, c1s2y, c1p2y) + epsilon >
						min(c2p1y, c2s1y, c2s2y, c2p2y) &&
						min(c1p1y, c1s1y, c1s2y, c1p2y) - epsilon <
						max(c2p1y, c2s1y, c2s2y, c2p2y)))
					return locations;
				var overlaps = Curve.getOverlaps(v1, v2);
				if (overlaps) {
					for (var i = 0; i < 2; i++) {
						var overlap = overlaps[i];
						addLocation(locations, param,
							v1, c1, overlap[0], null,
							v2, c2, overlap[1], null, true);
					}
					return locations;
				}

				var straight1 = Curve.isStraight(v1),
					straight2 = Curve.isStraight(v2),
					straight = straight1 && straight2,
					before = locations.length;
				(straight
					? addLineIntersection
					: straight1 || straight2
						? addCurveLineIntersections
						: addCurveIntersections)(
							v1, v2, c1, c2, locations, param,
							0, 1, 0, 1, 0, 0, 0);
				if (straight && locations.length > before)
					return locations;
				var c1p1 = new Point(c1p1x, c1p1y),
					c1p2 = new Point(c1p2x, c1p2y),
					c2p1 = new Point(c2p1x, c2p1y),
					c2p2 = new Point(c2p2x, c2p2y);
				if (c1p1.isClose(c2p1, epsilon))
					addLocation(locations, param, v1, c1, 0, c1p1, v2, c2, 0, c2p1);
				if (!param.excludeStart && c1p1.isClose(c2p2, epsilon))
					addLocation(locations, param, v1, c1, 0, c1p1, v2, c2, 1, c2p2);
				if (!param.excludeEnd && c1p2.isClose(c2p1, epsilon))
					addLocation(locations, param, v1, c1, 1, c1p2, v2, c2, 0, c2p1);
				if (c1p2.isClose(c2p2, epsilon))
					addLocation(locations, param, v1, c1, 1, c1p2, v2, c2, 1, c2p2);
				return locations;
			},

			_getSelfIntersection: function(v1, c1, locations, param) {
				var p1x = v1[0], p1y = v1[1],
					h1x = v1[2], h1y = v1[3],
					h2x = v1[4], h2y = v1[5],
					p2x = v1[6], p2y = v1[7];
				var line = new Line(p1x, p1y, p2x, p2y, false),
					side1 = line.getSide(new Point(h1x, h1y), true),
					side2 = line.getSide(new Point(h2x, h2y), true);
				if (side1 === side2) {
					var edgeSum = (p1x - h2x) * (h1y - p2y)
								+ (h1x - p2x) * (h2y - p1y);
					if (edgeSum * side1 > 0)
						return locations;
				}
				var ax = p2x - 3 * h2x + 3 * h1x - p1x,
					bx = h2x - 2 * h1x + p1x,
					cx = h1x - p1x,
					ay = p2y - 3 * h2y + 3 * h1y - p1y,
					by = h2y - 2 * h1y + p1y,
					cy = h1y - p1y,
					ac = ay * cx - ax * cy,
					ab = ay * bx - ax * by,
					bc = by * cx - bx * cy;
				if (ac * ac - 4 * ab * bc < 0) {
					var roots = [],
						tSplit,
						count = Numerical.solveCubic(
								ax * ax  + ay * ay,
								3 * (ax * bx + ay * by),
								2 * (bx * bx + by * by) + ax * cx + ay * cy,
								bx * cx + by * cy,
								roots, 0, 1);
					if (count > 0) {
						for (var i = 0, maxCurvature = 0; i < count; i++) {
							var curvature = Math.abs(
									c1.getCurvatureAtTime(roots[i]));
							if (curvature > maxCurvature) {
								maxCurvature = curvature;
								tSplit = roots[i];
							}
						}
						var parts = Curve.subdivide(v1, tSplit);
						param.excludeEnd = true;
						param.renormalize = function(t1, t2) {
							return [t1 * tSplit, t2 * (1 - tSplit) + tSplit];
						};
						Curve._getIntersections(parts[0], parts[1], c1, c1,
								locations, param);
					}
				}
				return locations;
			},

			getOverlaps: function(v1, v2) {
				var abs = Math.abs,
					timeEpsilon = 4e-7,
					geomEpsilon = 2e-7,
					straight1 = Curve.isStraight(v1),
					straight2 = Curve.isStraight(v2),
					straightBoth = straight1 && straight2;

				function getSquaredLineLength(v) {
					var x = v[6] - v[0],
						y = v[7] - v[1];
					return x * x + y * y;
				}

				var flip = getSquaredLineLength(v1) < getSquaredLineLength(v2),
					l1 = flip ? v2 : v1,
					l2 = flip ? v1 : v2,
					line = new Line(l1[0], l1[1], l1[6], l1[7]);
				if (line.getDistance(new Point(l2[0], l2[1])) < geomEpsilon &&
					line.getDistance(new Point(l2[6], l2[7])) < geomEpsilon) {
					if (!straightBoth &&
						line.getDistance(new Point(l1[2], l1[3])) < geomEpsilon &&
						line.getDistance(new Point(l1[4], l1[5])) < geomEpsilon &&
						line.getDistance(new Point(l2[2], l2[3])) < geomEpsilon &&
						line.getDistance(new Point(l2[4], l2[5])) < geomEpsilon) {
						straight1 = straight2 = straightBoth = true;
					}
				} else if (straightBoth) {
					return null;
				}
				if (straight1 ^ straight2) {
					return null;
				}

				var v = [v1, v2],
					pairs = [];
				for (var i = 0, t1 = 0;
						i < 2 && pairs.length < 2;
						i += t1 === 0 ? 0 : 1, t1 = t1 ^ 1) {
					var t2 = Curve.getTimeOf(v[i ^ 1], new Point(
							v[i][t1 === 0 ? 0 : 6],
							v[i][t1 === 0 ? 1 : 7]));
					if (t2 != null) {
						var pair = i === 0 ? [t1, t2] : [t2, t1];
						if (pairs.length === 0 ||
							abs(pair[0] - pairs[0][0]) > timeEpsilon &&
							abs(pair[1] - pairs[0][1]) > timeEpsilon)
							pairs.push(pair);
					}
					if (i === 1 && pairs.length === 0)
						break;
				}
				if (pairs.length !== 2) {
					pairs = null;
				} else if (!straightBoth) {
					var o1 = Curve.getPart(v1, pairs[0][0], pairs[1][0]),
						o2 = Curve.getPart(v2, pairs[0][1], pairs[1][1]);
					if (abs(o2[2] - o1[2]) > geomEpsilon ||
						abs(o2[3] - o1[3]) > geomEpsilon ||
						abs(o2[4] - o1[4]) > geomEpsilon ||
						abs(o2[5] - o1[5]) > geomEpsilon)
						pairs = null;
				}
				return pairs;
			}
		}};
	});

	var CurveLocation = Base.extend({
		_class: 'CurveLocation',
		beans: true,

		initialize: function CurveLocation(curve, time, point, _overlap, _distance) {
			if (time > 0.9999996) {
				var next = curve.getNext();
				if (next) {
					time = 0;
					curve = next;
				}
			}
			this._setCurve(curve);
			this._time = time;
			this._point = point || curve.getPointAtTime(time);
			this._overlap = _overlap;
			this._distance = _distance;
			this._intersection = this._next = this._previous = null;
		},

		_setCurve: function(curve) {
			var path = curve._path;
			this._path = path;
			this._version = path ? path._version : 0;
			this._curve = curve;
			this._segment = null;
			this._segment1 = curve._segment1;
			this._segment2 = curve._segment2;
		},

		_setSegment: function(segment) {
			this._setCurve(segment.getCurve());
			this._segment = segment;
			this._time = segment === this._segment1 ? 0 : 1;
			this._point = segment._point.clone();
		},

		getSegment: function() {
			var curve = this.getCurve(),
				segment = this._segment;
			if (!segment) {
				var time = this.getTime();
				if (time === 0) {
					segment = curve._segment1;
				} else if (time === 1) {
					segment = curve._segment2;
				} else if (time != null) {
					segment = curve.getPartLength(0, time)
						< curve.getPartLength(time, 1)
							? curve._segment1
							: curve._segment2;
				}
				this._segment = segment;
			}
			return segment;
		},

		getCurve: function() {
			var path = this._path,
				that = this;
			if (path && path._version !== this._version) {
				this._time = this._curve = this._offset = null;
			}

			function trySegment(segment) {
				var curve = segment && segment.getCurve();
				if (curve && (that._time = curve.getTimeOf(that._point))
						!= null) {
					that._setCurve(curve);
					that._segment = segment;
					return curve;
				}
			}

			return this._curve
				|| trySegment(this._segment)
				|| trySegment(this._segment1)
				|| trySegment(this._segment2.getPrevious());
		},

		getPath: function() {
			var curve = this.getCurve();
			return curve && curve._path;
		},

		getIndex: function() {
			var curve = this.getCurve();
			return curve && curve.getIndex();
		},

		getTime: function() {
			var curve = this.getCurve(),
				time = this._time;
			return curve && time == null
				? this._time = curve.getTimeOf(this._point)
				: time;
		},

		getParameter: '#getTime',

		getPoint: function() {
			return this._point;
		},

		getOffset: function() {
			var offset = this._offset;
			if (offset == null) {
				offset = 0;
				var path = this.getPath(),
					index = this.getIndex();
				if (path && index != null) {
					var curves = path.getCurves();
					for (var i = 0; i < index; i++)
						offset += curves[i].getLength();
				}
				this._offset = offset += this.getCurveOffset();
			}
			return offset;
		},

		getCurveOffset: function() {
			var curve = this.getCurve(),
				time = this.getTime();
			return time != null && curve && curve.getPartLength(0, time);
		},

		getIntersection: function() {
			return this._intersection;
		},

		getDistance: function() {
			return this._distance;
		},

		divide: function() {
			var curve = this.getCurve(),
				res = null;
			if (curve) {
				res = curve.divideAtTime(this.getTime());
				if (res)
					this._setSegment(res._segment1);
			}
			return res;
		},

		split: function() {
			var curve = this.getCurve();
			return curve ? curve.splitAtTime(this.getTime()) : null;
		},

		equals: function(loc, _ignoreOther) {
			var res = this === loc,
				epsilon = 2e-7;
			if (!res && loc instanceof CurveLocation
					&& this.getPath() === loc.getPath()
					&& this.getPoint().isClose(loc.getPoint(), epsilon)) {
				var c1 = this.getCurve(),
					c2 = loc.getCurve(),
					abs = Math.abs,
					diff = abs(
						((c1.isLast() && c2.isFirst() ? -1 : c1.getIndex())
								+ this.getTime()) -
						((c2.isLast() && c1.isFirst() ? -1 : c2.getIndex())
								+ loc.getTime()));
				res = (diff < 4e-7
					|| ((diff = abs(this.getOffset() - loc.getOffset())) < epsilon
						|| abs(this.getPath().getLength() - diff) < epsilon))
					&& (_ignoreOther
						|| (!this._intersection && !loc._intersection
							|| this._intersection && this._intersection.equals(
									loc._intersection, true)));
			}
			return res;
		},

		toString: function() {
			var parts = [],
				point = this.getPoint(),
				f = Formatter.instance;
			if (point)
				parts.push('point: ' + point);
			var index = this.getIndex();
			if (index != null)
				parts.push('index: ' + index);
			var time = this.getTime();
			if (time != null)
				parts.push('time: ' + f.number(time));
			if (this._distance != null)
				parts.push('distance: ' + f.number(this._distance));
			return '{ ' + parts.join(', ') + ' }';
		},

		isTouching: function() {
			var inter = this._intersection;
			if (inter && this.getTangent().isCollinear(inter.getTangent())) {
				var curve1 = this.getCurve(),
					curve2 = inter.getCurve();
				return !(curve1.isStraight() && curve2.isStraight()
						&& curve1.getLine().intersect(curve2.getLine()));
			}
			return false;
		},

		isCrossing: function() {
			var inter = this._intersection;
			if (!inter)
				return false;
			var t1 = this.getTime(),
				t2 = inter.getTime(),
				tMin = 4e-7,
				tMax = 1 - tMin,
				t1Inside = t1 > tMin && t1 < tMax,
				t2Inside = t2 > tMin && t2 < tMax;
			if (t1Inside && t2Inside)
				return !this.isTouching();
			var c2 = this.getCurve(),
				c1 = t1 <= tMin ? c2.getPrevious() : c2,
				c4 = inter.getCurve(),
				c3 = t2 <= tMin ? c4.getPrevious() : c4;
			if (t1 >= tMax)
				c2 = c2.getNext();
			if (t2 >= tMax)
				c4 = c4.getNext();
			if (!c1 || !c2 || !c3 || !c4)
				return false;

			function isInRange(angle, min, max) {
				return min < max
						? angle > min && angle < max
						: angle > min || angle < max;
			}

			var lenghts = [];
			if (!t1Inside)
				lenghts.push(c1.getLength(), c2.getLength());
			if (!t2Inside)
				lenghts.push(c3.getLength(), c4.getLength());
			var pt = this.getPoint(),
				offset = Math.min.apply(Math, lenghts) / 64,
				v2 = t1Inside ? c2.getTangentAtTime(t1)
						: c2.getPointAt(offset).subtract(pt),
				v1 = t1Inside ? v2.negate()
						: c1.getPointAt(-offset).subtract(pt),
				v4 = t2Inside ? c4.getTangentAtTime(t2)
						: c4.getPointAt(offset).subtract(pt),
				v3 = t2Inside ? v4.negate()
						: c3.getPointAt(-offset).subtract(pt),
				a1 = v1.getAngle(),
				a2 = v2.getAngle(),
				a3 = v3.getAngle(),
				a4 = v4.getAngle();
			return !!(t1Inside
					? (isInRange(a1, a3, a4) ^ isInRange(a2, a3, a4)) &&
					  (isInRange(a1, a4, a3) ^ isInRange(a2, a4, a3))
					: (isInRange(a3, a1, a2) ^ isInRange(a4, a1, a2)) &&
					  (isInRange(a3, a2, a1) ^ isInRange(a4, a2, a1)));
		},

		hasOverlap: function() {
			return !!this._overlap;
		}
	}, Base.each(Curve._evaluateMethods, function(name) {
		var get = name + 'At';
		this[name] = function() {
			var curve = this.getCurve(),
				time = this.getTime();
			return time != null && curve && curve[get](time, true);
		};
	}, {
		preserve: true
	}),
	new function() {

		function insert(locations, loc, merge) {
			var length = locations.length,
				l = 0,
				r = length - 1;

			function search(index, dir) {
				for (var i = index + dir; i >= -1 && i <= length; i += dir) {
					var loc2 = locations[((i % length) + length) % length];
					if (!loc.getPoint().isClose(loc2.getPoint(),
							2e-7))
						break;
					if (loc.equals(loc2))
						return loc2;
				}
				return null;
			}

			while (l <= r) {
				var m = (l + r) >>> 1,
					loc2 = locations[m],
					found;
				if (merge && (found = loc.equals(loc2) ? loc2
						: (search(m, -1) || search(m, 1)))) {
					if (loc._overlap) {
						found._overlap = found._intersection._overlap = true;
					}
					return found;
				}
			var path1 = loc.getPath(),
				path2 = loc2.getPath(),
				diff = path1 === path2
					? (loc.getIndex() + loc.getTime())
					- (loc2.getIndex() + loc2.getTime())
					: path1._id - path2._id;
				if (diff < 0) {
					r = m - 1;
				} else {
					l = m + 1;
				}
			}
			locations.splice(l, 0, loc);
			return loc;
		}

		return { statics: {
			insert: insert,

			expand: function(locations) {
				var expanded = locations.slice();
				for (var i = locations.length - 1; i >= 0; i--) {
					insert(expanded, locations[i]._intersection, false);
				}
				return expanded;
			}
		}};
	});

	var PathItem = Item.extend({
		_class: 'PathItem',
		_selectBounds: false,
		_canScaleStroke: true,

		initialize: function PathItem() {
		},

		statics: {
			create: function(pathData) {
				var ctor = (pathData && pathData.match(/m/gi) || []).length > 1
						|| /z\s*\S+/i.test(pathData) ? CompoundPath : Path;
				return new ctor(pathData);
			}
		},

		_asPathItem: function() {
			return this;
		},

		setPathData: function(data) {

			var parts = data && data.match(/[mlhvcsqtaz][^mlhvcsqtaz]*/ig),
				coords,
				relative = false,
				previous,
				control,
				current = new Point(),
				start = new Point();

			function getCoord(index, coord) {
				var val = +coords[index];
				if (relative)
					val += current[coord];
				return val;
			}

			function getPoint(index) {
				return new Point(
					getCoord(index, 'x'),
					getCoord(index + 1, 'y')
				);
			}

			this.clear();

			for (var i = 0, l = parts && parts.length; i < l; i++) {
				var part = parts[i],
					command = part[0],
					lower = command.toLowerCase();
				coords = part.match(/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g);
				var length = coords && coords.length;
				relative = command === lower;
				if (previous === 'z' && !/[mz]/.test(lower))
					this.moveTo(current = start);
				switch (lower) {
				case 'm':
				case 'l':
					var move = lower === 'm';
					for (var j = 0; j < length; j += 2)
						this[j === 0 && move ? 'moveTo' : 'lineTo'](
								current = getPoint(j));
					control = current;
					if (move)
						start = current;
					break;
				case 'h':
				case 'v':
					var coord = lower === 'h' ? 'x' : 'y';
					for (var j = 0; j < length; j++) {
						current[coord] = getCoord(j, coord);
						this.lineTo(current);
					}
					control = current;
					break;
				case 'c':
					for (var j = 0; j < length; j += 6) {
						this.cubicCurveTo(
								getPoint(j),
								control = getPoint(j + 2),
								current = getPoint(j + 4));
					}
					break;
				case 's':
					for (var j = 0; j < length; j += 4) {
						this.cubicCurveTo(
								/[cs]/.test(previous)
										? current.multiply(2).subtract(control)
										: current,
								control = getPoint(j),
								current = getPoint(j + 2));
						previous = lower;
					}
					break;
				case 'q':
					for (var j = 0; j < length; j += 4) {
						this.quadraticCurveTo(
								control = getPoint(j),
								current = getPoint(j + 2));
					}
					break;
				case 't':
					for (var j = 0; j < length; j += 2) {
						this.quadraticCurveTo(
								control = (/[qt]/.test(previous)
										? current.multiply(2).subtract(control)
										: current),
								current = getPoint(j));
						previous = lower;
					}
					break;
				case 'a':
					for (var j = 0; j < length; j += 7) {
						this.arcTo(current = getPoint(j + 5),
								new Size(+coords[j], +coords[j + 1]),
								+coords[j + 2], +coords[j + 4], +coords[j + 3]);
					}
					break;
				case 'z':
					this.closePath(1e-12);
					break;
				}
				previous = lower;
			}
		},

		_canComposite: function() {
			return !(this.hasFill() && this.hasStroke());
		},

		_contains: function(point) {
			var winding = point.isInside(
					this.getBounds({ internal: true, handle: true }))
						&& this._getWinding(point);
			return !!(this.getFillRule() === 'evenodd' ? winding & 1 : winding);
		},

		getIntersections: function(path, include, _matrix, _returnFirst) {
			var self = this === path || !path,
				matrix1 = this._matrix._orNullIfIdentity(),
				matrix2 = self ? matrix1
					: (_matrix || path._matrix)._orNullIfIdentity();
			if (!self && !this.getBounds(matrix1).touches(path.getBounds(matrix2)))
				return [];
			var curves1 = this.getCurves(),
				curves2 = self ? curves1 : path.getCurves(),
				length1 = curves1.length,
				length2 = self ? length1 : curves2.length,
				values2 = [],
				arrays = [],
				locations,
				path;
			for (var i = 0; i < length2; i++)
				values2[i] = curves2[i].getValues(matrix2);
			for (var i = 0; i < length1; i++) {
				var curve1 = curves1[i],
					values1 = self ? values2[i] : curve1.getValues(matrix1),
					path1 = curve1.getPath();
				if (path1 !== path) {
					path = path1;
					locations = [];
					arrays.push(locations);
				}
				if (self) {
					Curve._getSelfIntersection(values1, curve1, locations, {
						include: include,
						excludeStart: length1 === 1 &&
								curve1.getPoint1().equals(curve1.getPoint2())
					});
				}
				for (var j = self ? i + 1 : 0; j < length2; j++) {
					if (_returnFirst && locations.length)
						return locations;
					var curve2 = curves2[j];
					Curve._getIntersections(
						values1, values2[j], curve1, curve2, locations,
						{
							include: include,
							excludeStart: self && curve1.getPrevious() === curve2,
							excludeEnd: self && curve1.getNext() === curve2
						}
					);
				}
			}
			locations = [];
			for (var i = 0, l = arrays.length; i < l; i++) {
				locations.push.apply(locations, arrays[i]);
			}
			return locations;
		},

		getCrossings: function(path) {
			return this.getIntersections(path, function(inter) {
				return inter._overlap || inter.isCrossing();
			});
		},

		getNearestLocation: function() {
			var point = Point.read(arguments),
				curves = this.getCurves(),
				minDist = Infinity,
				minLoc = null;
			for (var i = 0, l = curves.length; i < l; i++) {
				var loc = curves[i].getNearestLocation(point);
				if (loc._distance < minDist) {
					minDist = loc._distance;
					minLoc = loc;
				}
			}
			return minLoc;
		},

		getNearestPoint: function() {
			var loc = this.getNearestLocation.apply(this, arguments);
			return loc ? loc.getPoint() : loc;
		},

		interpolate: function(from, to, factor) {
			var isPath = !this._children,
				name = isPath ? '_segments' : '_children',
				itemsFrom = from[name],
				itemsTo = to[name],
				items = this[name];
			if (!itemsFrom || !itemsTo || itemsFrom.length !== itemsTo.length) {
				throw new Error('Invalid operands in interpolate() call: ' +
						from + ', ' + to);
			}
			var current = items.length,
				length = itemsTo.length;
			if (current < length) {
				var ctor = isPath ? Segment : Path;
				for (var i = current; i < length; i++) {
					this.add(new ctor());
				}
			} else if (current > length) {
				this[isPath ? 'removeSegments' : 'removeChildren'](length, current);
			}
			for (var i = 0; i < length; i++) {
				items[i].interpolate(itemsFrom[i], itemsTo[i], factor);
			}
			if (isPath) {
				this.setClosed(from._closed);
				this._changed(9);
			}
		},

	});

	var Path = PathItem.extend({
		_class: 'Path',
		_serializeFields: {
			segments: [],
			closed: false
		},

		initialize: function Path(arg) {
			this._closed = false;
			this._segments = [];
			this._version = 0;
			var segments = Array.isArray(arg)
				? typeof arg[0] === 'object'
					? arg
					: arguments
				: arg && (arg.size === undefined && (arg.x !== undefined
						|| arg.point !== undefined))
					? arguments
					: null;
			if (segments && segments.length > 0) {
				this.setSegments(segments);
			} else {
				this._curves = undefined;
				this._segmentSelection = 0;
				if (!segments && typeof arg === 'string') {
					this.setPathData(arg);
					arg = null;
				}
			}
			this._initialize(!segments && arg);
		},

		_equals: function(item) {
			return this._closed === item._closed
					&& Base.equals(this._segments, item._segments);
		},

		copyContent: function(source) {
			this.setSegments(source._segments);
			this._closed = source._closed;
			var clockwise = source._clockwise;
			if (clockwise !== undefined)
				this._clockwise = clockwise;
		},

		_changed: function _changed(flags) {
			_changed.base.call(this, flags);
			if (flags & 8) {
				this._length = this._area = this._clockwise = this._monoCurves =
						undefined;
				if (flags & 16) {
					this._version++;
				} else if (this._curves) {
				   for (var i = 0, l = this._curves.length; i < l; i++)
						this._curves[i]._changed();
				}
			} else if (flags & 32) {
				this._bounds = undefined;
			}
		},

		getStyle: function() {
			var parent = this._parent;
			return (parent instanceof CompoundPath ? parent : this)._style;
		},

		getSegments: function() {
			return this._segments;
		},

		setSegments: function(segments) {
			var fullySelected = this.isFullySelected();
			this._segments.length = 0;
			this._segmentSelection = 0;
			this._curves = undefined;
			if (segments && segments.length > 0)
				this._add(Segment.readAll(segments));
			if (fullySelected)
				this.setFullySelected(true);
		},

		getFirstSegment: function() {
			return this._segments[0];
		},

		getLastSegment: function() {
			return this._segments[this._segments.length - 1];
		},

		getCurves: function() {
			var curves = this._curves,
				segments = this._segments;
			if (!curves) {
				var length = this._countCurves();
				curves = this._curves = new Array(length);
				for (var i = 0; i < length; i++)
					curves[i] = new Curve(this, segments[i],
						segments[i + 1] || segments[0]);
			}
			return curves;
		},

		getFirstCurve: function() {
			return this.getCurves()[0];
		},

		getLastCurve: function() {
			var curves = this.getCurves();
			return curves[curves.length - 1];
		},

		isClosed: function() {
			return this._closed;
		},

		setClosed: function(closed) {
			if (this._closed != (closed = !!closed)) {
				this._closed = closed;
				if (this._curves) {
					var length = this._curves.length = this._countCurves();
					if (closed)
						this._curves[length - 1] = new Curve(this,
							this._segments[length - 1], this._segments[0]);
				}
				this._changed(25);
			}
		}
	}, {
		beans: true,

		getPathData: function(_matrix, _precision) {
			var segments = this._segments,
				length = segments.length,
				f = new Formatter(_precision),
				coords = new Array(6),
				first = true,
				curX, curY,
				prevX, prevY,
				inX, inY,
				outX, outY,
				parts = [];

			function addSegment(segment, skipLine) {
				segment._transformCoordinates(_matrix, coords);
				curX = coords[0];
				curY = coords[1];
				if (first) {
					parts.push('M' + f.pair(curX, curY));
					first = false;
				} else {
					inX = coords[2];
					inY = coords[3];
					if (inX === curX && inY === curY
							&& outX === prevX && outY === prevY) {
						if (!skipLine)
							parts.push('l' + f.pair(curX - prevX, curY - prevY));
					} else {
						parts.push('c' + f.pair(outX - prevX, outY - prevY)
								+ ' ' + f.pair(inX - prevX, inY - prevY)
								+ ' ' + f.pair(curX - prevX, curY - prevY));
					}
				}
				prevX = curX;
				prevY = curY;
				outX = coords[4];
				outY = coords[5];
			}

			if (length === 0)
				return '';

			for (var i = 0; i < length; i++)
				addSegment(segments[i]);
			if (this._closed && length > 0) {
				addSegment(segments[0], true);
				parts.push('z');
			}
			return parts.join('');
		},

		isEmpty: function() {
			return this._segments.length === 0;
		},

		_transformContent: function(matrix) {
			var segments = this._segments,
				coords = new Array(6);
			for (var i = 0, l = segments.length; i < l; i++)
				segments[i]._transformCoordinates(matrix, coords, true);
			return true;
		},

		_add: function(segs, index) {
			var segments = this._segments,
				curves = this._curves,
				amount = segs.length,
				append = index == null,
				index = append ? segments.length : index;
			for (var i = 0; i < amount; i++) {
				var segment = segs[i];
				if (segment._path)
					segment = segs[i] = segment.clone();
				segment._path = this;
				segment._index = index + i;
				if (segment._selection)
					this._updateSelection(segment, 0, segment._selection);
			}
			if (append) {
				segments.push.apply(segments, segs);
			} else {
				segments.splice.apply(segments, [index, 0].concat(segs));
				for (var i = index + amount, l = segments.length; i < l; i++)
					segments[i]._index = i;
			}
			if (curves) {
				var total = this._countCurves(),
					start = index > 0 && index + amount - 1 === total ? index - 1
						: index,
					insert = start,
					end = Math.min(start + amount, total);
				if (segs._curves) {
					curves.splice.apply(curves, [start, 0].concat(segs._curves));
					insert += segs._curves.length;
				}
				for (var i = insert; i < end; i++)
					curves.splice(i, 0, new Curve(this, null, null));
				this._adjustCurves(start, end);
			}
			this._changed(25);
			return segs;
		},

		_adjustCurves: function(start, end) {
			var segments = this._segments,
				curves = this._curves,
				curve;
			for (var i = start; i < end; i++) {
				curve = curves[i];
				curve._path = this;
				curve._segment1 = segments[i];
				curve._segment2 = segments[i + 1] || segments[0];
				curve._changed();
			}
			if (curve = curves[this._closed && start === 0 ? segments.length - 1
					: start - 1]) {
				curve._segment2 = segments[start] || segments[0];
				curve._changed();
			}
			if (curve = curves[end]) {
				curve._segment1 = segments[end];
				curve._changed();
			}
		},

		_countCurves: function() {
			var length = this._segments.length;
			return !this._closed && length > 0 ? length - 1 : length;
		},

		add: function(segment1 ) {
			return arguments.length > 1 && typeof segment1 !== 'number'
				? this._add(Segment.readAll(arguments))
				: this._add([ Segment.read(arguments) ])[0];
		},

		insert: function(index, segment1 ) {
			return arguments.length > 2 && typeof segment1 !== 'number'
				? this._add(Segment.readAll(arguments, 1), index)
				: this._add([ Segment.read(arguments, 1) ], index)[0];
		},

		addSegment: function() {
			return this._add([ Segment.read(arguments) ])[0];
		},

		insertSegment: function(index ) {
			return this._add([ Segment.read(arguments, 1) ], index)[0];
		},

		addSegments: function(segments) {
			return this._add(Segment.readAll(segments));
		},

		insertSegments: function(index, segments) {
			return this._add(Segment.readAll(segments), index);
		},

		removeSegment: function(index) {
			return this.removeSegments(index, index + 1)[0] || null;
		},

		removeSegments: function(start, end, _includeCurves) {
			start = start || 0;
			end = Base.pick(end, this._segments.length);
			var segments = this._segments,
				curves = this._curves,
				count = segments.length,
				removed = segments.splice(start, end - start),
				amount = removed.length;
			if (!amount)
				return removed;
			for (var i = 0; i < amount; i++) {
				var segment = removed[i];
				if (segment._selection)
					this._updateSelection(segment, segment._selection, 0);
				segment._index = segment._path = null;
			}
			for (var i = start, l = segments.length; i < l; i++)
				segments[i]._index = i;
			if (curves) {
				var index = start > 0 && end === count + (this._closed ? 1 : 0)
						? start - 1
						: start,
					curves = curves.splice(index, amount);
				for (var i = curves.length - 1; i >= 0; i--)
					curves[i]._path = null;
				if (_includeCurves)
					removed._curves = curves.slice(1);
				this._adjustCurves(index, index);
			}
			this._changed(25);
			return removed;
		},

		clear: '#removeSegments',

		hasHandles: function() {
			var segments = this._segments;
			for (var i = 0, l = segments.length; i < l; i++) {
				if (segments[i].hasHandles())
					return true;
			}
			return false;
		},

		clearHandles: function() {
			var segments = this._segments;
			for (var i = 0, l = segments.length; i < l; i++)
				segments[i].clearHandles();
		},

		getLength: function() {
			if (this._length == null) {
				var curves = this.getCurves(),
					length = 0;
				for (var i = 0, l = curves.length; i < l; i++)
					length += curves[i].getLength();
				this._length = length;
			}
			return this._length;
		},

		getArea: function(_closed) {
			var cached = _closed === undefined,
				area = this._area;
			if (!cached || area == null) {
				var segments = this._segments,
					count = segments.length,
					closed = cached ? this._closed : _closed,
					last = count - 1;
				area = 0;
				for (var i = 0, l = closed ? count : last; i < l; i++) {
					area += Curve.getArea(Curve.getValues(
							segments[i], segments[i < last ? i + 1 : 0]));
				}
				if (cached)
					this._area = area;
			}
			return area;
		},

		isClockwise: function() {
			if (this._clockwise !== undefined)
				return this._clockwise;
			return this.getArea() >= 0;
		},

		setClockwise: function(clockwise) {
			if (this.isClockwise() != (clockwise = !!clockwise))
				this.reverse();
			this._clockwise = clockwise;
		},

		isFullySelected: function() {
			var length = this._segments.length;
			return this.isSelected() && length > 0 && this._segmentSelection
					=== length * 7;
		},

		setFullySelected: function(selected) {
			if (selected)
				this._selectSegments(true);
			this.setSelected(selected);
		},

		setSelection: function setSelection(selection) {
			if (!(selection & 1))
				this._selectSegments(false);
			setSelection.base.call(this, selection);
		},

		_selectSegments: function(selected) {
			var segments = this._segments,
				length = segments.length,
				selection = selected ? 7 : 0;
			this._segmentSelection = selection * length;
			for (var i = 0; i < length; i++)
				segments[i]._selection = selection;
		},

		_updateSelection: function(segment, oldSelection, newSelection) {
			segment._selection = newSelection;
			var selection = this._segmentSelection += newSelection - oldSelection;
			if (selection > 0)
				this.setSelected(true);
		},

		splitAt: function(location) {
			var loc = typeof location === 'number'
					? this.getLocationAt(location) : location,
				index = loc && loc.index,
				time = loc && loc.time,
				tMin = 4e-7,
				tMax = 1 - tMin;
			if (time >= tMax) {
				index++;
				time = 0;
			}
			var curves = this.getCurves();
			if (index >= 0 && index < curves.length) {
				if (time >= tMin) {
					curves[index++].divideAtTime(time);
				}
				var segs = this.removeSegments(index, this._segments.length, true),
					path;
				if (this._closed) {
					this.setClosed(false);
					path = this;
				} else {
					path = new Path(Item.NO_INSERT);
					path.insertAbove(this, true);
					path.copyAttributes(this);
				}
				path._add(segs, 0);
				this.addSegment(segs[0]);
				return path;
			}
			return null;
		},

		split: function(index, time) {
			var curve,
				location = time === undefined ? index
					: (curve = this.getCurves()[index])
						&& curve.getLocationAtTime(time);
			return location != null ? this.splitAt(location) : null;
		},

		join: function(path, tolerance) {
			var epsilon = tolerance || 0;
			if (path && path !== this) {
				var segments = path._segments,
					last1 = this.getLastSegment(),
					last2 = path.getLastSegment();
				if (!last2)
					return this;
				if (last1 && last1._point.isClose(last2._point, epsilon))
					path.reverse();
				var first2 = path.getFirstSegment();
				if (last1 && last1._point.isClose(first2._point, epsilon)) {
					last1.setHandleOut(first2._handleOut);
					this._add(segments.slice(1));
				} else {
					var first1 = this.getFirstSegment();
					if (first1 && first1._point.isClose(first2._point, epsilon))
						path.reverse();
					last2 = path.getLastSegment();
					if (first1 && first1._point.isClose(last2._point, epsilon)) {
						first1.setHandleIn(last2._handleIn);
						this._add(segments.slice(0, segments.length - 1), 0);
					} else {
						this._add(segments.slice());
					}
				}
				if (path._closed)
					this._add([segments[0]]);
				path.remove();
			}
			var first = this.getFirstSegment(),
				last = this.getLastSegment();
			if (first !== last && first._point.isClose(last._point, epsilon)) {
				first.setHandleIn(last._handleIn);
				last.remove();
				this.setClosed(true);
			}
			return this;
		},

		reduce: function(options) {
			var curves = this.getCurves(),
				simplify = options && options.simplify,
				tolerance = simplify ? 2e-7 : 0;
			for (var i = curves.length - 1; i >= 0; i--) {
				var curve = curves[i];
				if (!curve.hasHandles() && (curve.getLength() < tolerance
						|| simplify && curve.isCollinear(curve.getNext())))
					curve.remove();
			}
			return this;
		},

		reverse: function() {
			this._segments.reverse();
			for (var i = 0, l = this._segments.length; i < l; i++) {
				var segment = this._segments[i];
				var handleIn = segment._handleIn;
				segment._handleIn = segment._handleOut;
				segment._handleOut = handleIn;
				segment._index = i;
			}
			this._curves = null;
			if (this._clockwise !== undefined)
				this._clockwise = !this._clockwise;
			this._changed(9);
		},

		flatten: function(flatness) {
			var iterator = new PathIterator(this, flatness || 0.25, 256, true),
				parts = iterator.parts,
				length = parts.length,
				segments = [];
			for (var i = 0; i < length; i++) {
				segments.push(new Segment(parts[i].curve.slice(0, 2)));
			}
			if (!this._closed && length > 0) {
				segments.push(new Segment(parts[length - 1].curve.slice(6)));
			}
			this.setSegments(segments);
		},

		simplify: function(tolerance) {
			var segments = new PathFitter(this).fit(tolerance || 2.5);
			if (segments)
				this.setSegments(segments);
			return !!segments;
		},

		smooth: function(options) {
			var that = this,
				opts = options || {},
				type = opts.type || 'asymmetric',
				segments = this._segments,
				length = segments.length,
				closed = this._closed;

			function getIndex(value, _default) {
				var index = value && value.index;
				if (index != null) {
					var path = value.path;
					if (path && path !== that)
						throw new Error(value._class + ' ' + index + ' of ' + path
								+ ' is not part of ' + that);
					if (_default && value instanceof Curve)
						index++;
				} else {
					index = typeof value === 'number' ? value : _default;
				}
				return Math.min(index < 0 && closed
						? index % length
						: index < 0 ? index + length : index, length - 1);
			}

			var loop = closed && opts.from === undefined && opts.to === undefined,
				from = getIndex(opts.from, 0),
				to = getIndex(opts.to, length - 1);

			if (from > to) {
				if (closed) {
					from -= length;
				} else {
					var tmp = from;
					from = to;
					to = tmp;
				}
			}
			if (/^(?:asymmetric|continuous)$/.test(type)) {
				var asymmetric = type === 'asymmetric',
					min = Math.min,
					amount = to - from + 1,
					n = amount - 1,
					padding = loop ? min(amount, 4) : 1,
					paddingLeft = padding,
					paddingRight = padding,
					knots = [];
				if (!closed) {
					paddingLeft = min(1, from);
					paddingRight = min(1, length - to - 1);
				}
				n += paddingLeft + paddingRight;
				if (n <= 1)
					return;
				for (var i = 0, j = from - paddingLeft; i <= n; i++, j++) {
					knots[i] = segments[(j < 0 ? j + length : j) % length]._point;
				}

				var x = knots[0]._x + 2 * knots[1]._x,
					y = knots[0]._y + 2 * knots[1]._y,
					f = 2,
					n_1 = n - 1,
					rx = [x],
					ry = [y],
					rf = [f],
					px = [],
					py = [];
				for (var i = 1; i < n; i++) {
					var internal = i < n_1,
						a = internal ? 1 : asymmetric ? 1 : 2,
						b = internal ? 4 : asymmetric ? 2 : 7,
						u = internal ? 4 : asymmetric ? 3 : 8,
						v = internal ? 2 : asymmetric ? 0 : 1,
						m = a / f;
					f = rf[i] = b - m;
					x = rx[i] = u * knots[i]._x + v * knots[i + 1]._x - m * x;
					y = ry[i] = u * knots[i]._y + v * knots[i + 1]._y - m * y;
				}

				px[n_1] = rx[n_1] / rf[n_1];
				py[n_1] = ry[n_1] / rf[n_1];
				for (var i = n - 2; i >= 0; i--) {
					px[i] = (rx[i] - px[i + 1]) / rf[i];
					py[i] = (ry[i] - py[i + 1]) / rf[i];
				}
				px[n] = (3 * knots[n]._x - px[n_1]) / 2;
				py[n] = (3 * knots[n]._y - py[n_1]) / 2;

				for (var i = paddingLeft, max = n - paddingRight, j = from;
						i <= max; i++, j++) {
					var segment = segments[j < 0 ? j + length : j],
						pt = segment._point,
						hx = px[i] - pt._x,
						hy = py[i] - pt._y;
					if (loop || i < max)
						segment.setHandleOut(hx, hy);
					if (loop || i > paddingLeft)
						segment.setHandleIn(-hx, -hy);
				}
			} else {
				for (var i = from; i <= to; i++) {
					segments[i < 0 ? i + length : i].smooth(opts,
							!loop && i === from, !loop && i === to);
				}
			}
		},

		toShape: function(insert) {
			if (!this._closed)
				return null;

			var segments = this._segments,
				type,
				size,
				radius,
				topCenter;

			function isCollinear(i, j) {
				var seg1 = segments[i],
					seg2 = seg1.getNext(),
					seg3 = segments[j],
					seg4 = seg3.getNext();
				return seg1._handleOut.isZero() && seg2._handleIn.isZero()
						&& seg3._handleOut.isZero() && seg4._handleIn.isZero()
						&& seg2._point.subtract(seg1._point).isCollinear(
							seg4._point.subtract(seg3._point));
			}

			function isOrthogonal(i) {
				var seg2 = segments[i],
					seg1 = seg2.getPrevious(),
					seg3 = seg2.getNext();
				return seg1._handleOut.isZero() && seg2._handleIn.isZero()
						&& seg2._handleOut.isZero() && seg3._handleIn.isZero()
						&& seg2._point.subtract(seg1._point).isOrthogonal(
							seg3._point.subtract(seg2._point));
			}

			function isArc(i) {
				var seg1 = segments[i],
					seg2 = seg1.getNext(),
					handle1 = seg1._handleOut,
					handle2 = seg2._handleIn,
					kappa = 0.5522847498307936;
				if (handle1.isOrthogonal(handle2)) {
					var pt1 = seg1._point,
						pt2 = seg2._point,
						corner = new Line(pt1, handle1, true).intersect(
								new Line(pt2, handle2, true), true);
					return corner && Numerical.isZero(handle1.getLength() /
							corner.subtract(pt1).getLength() - kappa)
						&& Numerical.isZero(handle2.getLength() /
							corner.subtract(pt2).getLength() - kappa);
				}
				return false;
			}

			function getDistance(i, j) {
				return segments[i]._point.getDistance(segments[j]._point);
			}

			if (!this.hasHandles() && segments.length === 4
					&& isCollinear(0, 2) && isCollinear(1, 3) && isOrthogonal(1)) {
				type = Shape.Rectangle;
				size = new Size(getDistance(0, 3), getDistance(0, 1));
				topCenter = segments[1]._point.add(segments[2]._point).divide(2);
			} else if (segments.length === 8 && isArc(0) && isArc(2) && isArc(4)
					&& isArc(6) && isCollinear(1, 5) && isCollinear(3, 7)) {
				type = Shape.Rectangle;
				size = new Size(getDistance(1, 6), getDistance(0, 3));
				radius = size.subtract(new Size(getDistance(0, 7),
						getDistance(1, 2))).divide(2);
				topCenter = segments[3]._point.add(segments[4]._point).divide(2);
			} else if (segments.length === 4
					&& isArc(0) && isArc(1) && isArc(2) && isArc(3)) {
				if (Numerical.isZero(getDistance(0, 2) - getDistance(1, 3))) {
					type = Shape.Circle;
					radius = getDistance(0, 2) / 2;
				} else {
					type = Shape.Ellipse;
					radius = new Size(getDistance(2, 0) / 2, getDistance(3, 1) / 2);
				}
				topCenter = segments[1]._point;
			}

			if (type) {
				var center = this.getPosition(true),
					shape = new type({
						center: center,
						size: size,
						radius: radius,
						insert: false
					});
				shape.copyAttributes(this, true);
				shape._matrix.prepend(this._matrix);
				shape.rotate(topCenter.subtract(center).getAngle() + 90);
				if (insert === undefined || insert)
					shape.insertAbove(this);
				return shape;
			}
			return null;
		},

		toPath: '#clone',

		_hitTestSelf: function(point, options, viewMatrix, strokeMatrix) {
			var that = this,
				style = this.getStyle(),
				segments = this._segments,
				numSegments = segments.length,
				closed = this._closed,
				tolerancePadding = options._tolerancePadding,
				strokePadding = tolerancePadding,
				join, cap, miterLimit,
				area, loc, res,
				hitStroke = options.stroke && style.hasStroke(),
				hitFill = options.fill && style.hasFill(),
				hitCurves = options.curves,
				strokeRadius = hitStroke
						? style.getStrokeWidth() / 2
						: hitFill && options.tolerance > 0 || hitCurves
							? 0 : null;
			if (strokeRadius !== null) {
				if (strokeRadius > 0) {
					join = style.getStrokeJoin();
					cap = style.getStrokeCap();
					miterLimit = strokeRadius * style.getMiterLimit();
					strokePadding = strokePadding.add(
						Path._getStrokePadding(strokeRadius, strokeMatrix));
				} else {
					join = cap = 'round';
				}
			}

			function isCloseEnough(pt, padding) {
				return point.subtract(pt).divide(padding).length <= 1;
			}

			function checkSegmentPoint(seg, pt, name) {
				if (!options.selected || pt.isSelected()) {
					var anchor = seg._point;
					if (pt !== anchor)
						pt = pt.add(anchor);
					if (isCloseEnough(pt, strokePadding)) {
						return new HitResult(name, that, {
							segment: seg,
							point: pt
						});
					}
				}
			}

			function checkSegmentPoints(seg, ends) {
				return (ends || options.segments)
					&& checkSegmentPoint(seg, seg._point, 'segment')
					|| (!ends && options.handles) && (
						checkSegmentPoint(seg, seg._handleIn, 'handle-in') ||
						checkSegmentPoint(seg, seg._handleOut, 'handle-out'));
			}

			function addToArea(point) {
				area.add(point);
			}

			function checkSegmentStroke(segment) {
				if (join !== 'round' || cap !== 'round') {
					area = new Path({ internal: true, closed: true });
					if (closed || segment._index > 0
							&& segment._index < numSegments - 1) {
						if (join !== 'round' && (segment._handleIn.isZero()
								|| segment._handleOut.isZero()))
							Path._addBevelJoin(segment, join, strokeRadius,
								   miterLimit, null, strokeMatrix, addToArea, true);
					} else if (cap !== 'round') {
						Path._addSquareCap(segment, cap, strokeRadius, null,
								strokeMatrix, addToArea, true);
					}
					if (!area.isEmpty()) {
						var loc;
						return area.contains(point)
							|| (loc = area.getNearestLocation(point))
								&& isCloseEnough(loc.getPoint(), tolerancePadding);
					}
				}
				return isCloseEnough(segment._point, strokePadding);
			}

			if (options.ends && !options.segments && !closed) {
				if (res = checkSegmentPoints(segments[0], true)
						|| checkSegmentPoints(segments[numSegments - 1], true))
					return res;
			} else if (options.segments || options.handles) {
				for (var i = 0; i < numSegments; i++)
					if (res = checkSegmentPoints(segments[i]))
						return res;
			}
			if (strokeRadius !== null) {
				loc = this.getNearestLocation(point);
				if (loc) {
					var time = loc.getTime();
					if (time === 0 || time === 1 && numSegments > 1) {
						if (!checkSegmentStroke(loc.getSegment()))
							loc = null;
					} else if (!isCloseEnough(loc.getPoint(), strokePadding)) {
						loc = null;
					}
				}
				if (!loc && join === 'miter' && numSegments > 1) {
					for (var i = 0; i < numSegments; i++) {
						var segment = segments[i];
						if (point.getDistance(segment._point) <= miterLimit
								&& checkSegmentStroke(segment)) {
							loc = segment.getLocation();
							break;
						}
					}
				}
			}
			return !loc && hitFill && this._contains(point)
					|| loc && !hitStroke && !hitCurves
						? new HitResult('fill', this)
						: loc
							? new HitResult(hitStroke ? 'stroke' : 'curve', this, {
								location: loc,
								point: loc.getPoint()
							})
							: null;
		}

	}, Base.each(Curve._evaluateMethods,
		function(name) {
			this[name + 'At'] = function(offset) {
				var loc = this.getLocationAt(offset);
				return loc && loc[name]();
			};
		},
	{
		beans: false,

		getLocationOf: function() {
			var point = Point.read(arguments),
				curves = this.getCurves();
			for (var i = 0, l = curves.length; i < l; i++) {
				var loc = curves[i].getLocationOf(point);
				if (loc)
					return loc;
			}
			return null;
		},

		getOffsetOf: function() {
			var loc = this.getLocationOf.apply(this, arguments);
			return loc ? loc.getOffset() : null;
		},

		getLocationAt: function(offset) {
			var curves = this.getCurves(),
				length = 0;
			for (var i = 0, l = curves.length; i < l; i++) {
				var start = length,
					curve = curves[i];
				length += curve.getLength();
				if (length > offset) {
					return curve.getLocationAt(offset - start);
				}
			}
			if (curves.length > 0 && offset <= this.getLength())
				return new CurveLocation(curves[curves.length - 1], 1);
			return null;
		}

	}),
	new function() {

		function drawHandles(ctx, segments, matrix, size) {
			var half = size / 2,
				coords = new Array(6),
				pX, pY;

			function drawHandle(index) {
				var hX = coords[index],
					hY = coords[index + 1];
				if (pX != hX || pY != hY) {
					ctx.beginPath();
					ctx.moveTo(pX, pY);
					ctx.lineTo(hX, hY);
					ctx.stroke();
					ctx.beginPath();
					ctx.arc(hX, hY, half, 0, Math.PI * 2, true);
					ctx.fill();
				}
			}

			for (var i = 0, l = segments.length; i < l; i++) {
				var segment = segments[i],
					selection = segment._selection;
				segment._transformCoordinates(matrix, coords);
				pX = coords[0];
				pY = coords[1];
				if (selection & 2)
					drawHandle(2);
				if (selection & 4)
					drawHandle(4);
				ctx.fillRect(pX - half, pY - half, size, size);
				if (!(selection & 1)) {
					var fillStyle = ctx.fillStyle;
					ctx.fillStyle = '#ffffff';
					ctx.fillRect(pX - half + 1, pY - half + 1, size - 2, size - 2);
					ctx.fillStyle = fillStyle;
				}
			}
		}

		function drawSegments(ctx, path, matrix) {
			var segments = path._segments,
				length = segments.length,
				coords = new Array(6),
				first = true,
				curX, curY,
				prevX, prevY,
				inX, inY,
				outX, outY;

			function drawSegment(segment) {
				if (matrix) {
					segment._transformCoordinates(matrix, coords);
					curX = coords[0];
					curY = coords[1];
				} else {
					var point = segment._point;
					curX = point._x;
					curY = point._y;
				}
				if (first) {
					ctx.moveTo(curX, curY);
					first = false;
				} else {
					if (matrix) {
						inX = coords[2];
						inY = coords[3];
					} else {
						var handle = segment._handleIn;
						inX = curX + handle._x;
						inY = curY + handle._y;
					}
					if (inX === curX && inY === curY
							&& outX === prevX && outY === prevY) {
						ctx.lineTo(curX, curY);
					} else {
						ctx.bezierCurveTo(outX, outY, inX, inY, curX, curY);
					}
				}
				prevX = curX;
				prevY = curY;
				if (matrix) {
					outX = coords[4];
					outY = coords[5];
				} else {
					var handle = segment._handleOut;
					outX = prevX + handle._x;
					outY = prevY + handle._y;
				}
			}

			for (var i = 0; i < length; i++)
				drawSegment(segments[i]);
			if (path._closed && length > 0)
				drawSegment(segments[0]);
		}

		return {
			_draw: function(ctx, param, viewMatrix, strokeMatrix) {
				var dontStart = param.dontStart,
					dontPaint = param.dontFinish || param.clip,
					style = this.getStyle(),
					hasFill = style.hasFill(),
					hasStroke = style.hasStroke(),
					dashArray = style.getDashArray(),
					dashLength = !paper.support.nativeDash && hasStroke
							&& dashArray && dashArray.length;

				if (!dontStart)
					ctx.beginPath();

				if (hasFill || hasStroke && !dashLength || dontPaint) {
					drawSegments(ctx, this, strokeMatrix);
					if (this._closed)
						ctx.closePath();
				}

				function getOffset(i) {
					return dashArray[((i % dashLength) + dashLength) % dashLength];
				}

				if (!dontPaint && (hasFill || hasStroke)) {
					this._setStyles(ctx, param, viewMatrix);
					if (hasFill) {
						ctx.fill(style.getFillRule());
						ctx.shadowColor = 'rgba(0,0,0,0)';
					}
					if (hasStroke) {
						if (dashLength) {
							if (!dontStart)
								ctx.beginPath();
							var iterator = new PathIterator(this, 0.25, 32, false,
									strokeMatrix),
								length = iterator.length,
								from = -style.getDashOffset(), to,
								i = 0;
							from = from % length;
							while (from > 0) {
								from -= getOffset(i--) + getOffset(i--);
							}
							while (from < length) {
								to = from + getOffset(i++);
								if (from > 0 || to > 0)
									iterator.drawPart(ctx,
											Math.max(from, 0), Math.max(to, 0));
								from = to + getOffset(i++);
							}
						}
						ctx.stroke();
					}
				}
			},

			_drawSelected: function(ctx, matrix) {
				ctx.beginPath();
				drawSegments(ctx, this, matrix);
				ctx.stroke();
				drawHandles(ctx, this._segments, matrix, paper.settings.handleSize);
			}
		};
	},
	new function() {
		function getCurrentSegment(that) {
			var segments = that._segments;
			if (segments.length === 0)
				throw new Error('Use a moveTo() command first');
			return segments[segments.length - 1];
		}

		return {
			moveTo: function() {
				var segments = this._segments;
				if (segments.length === 1)
					this.removeSegment(0);
				if (!segments.length)
					this._add([ new Segment(Point.read(arguments)) ]);
			},

			moveBy: function() {
				throw new Error('moveBy() is unsupported on Path items.');
			},

			lineTo: function() {
				this._add([ new Segment(Point.read(arguments)) ]);
			},

			cubicCurveTo: function() {
				var handle1 = Point.read(arguments),
					handle2 = Point.read(arguments),
					to = Point.read(arguments),
					current = getCurrentSegment(this);
				current.setHandleOut(handle1.subtract(current._point));
				this._add([ new Segment(to, handle2.subtract(to)) ]);
			},

			quadraticCurveTo: function() {
				var handle = Point.read(arguments),
					to = Point.read(arguments),
					current = getCurrentSegment(this)._point;
				this.cubicCurveTo(
					handle.add(current.subtract(handle).multiply(1 / 3)),
					handle.add(to.subtract(handle).multiply(1 / 3)),
					to
				);
			},

			curveTo: function() {
				var through = Point.read(arguments),
					to = Point.read(arguments),
					t = Base.pick(Base.read(arguments), 0.5),
					t1 = 1 - t,
					current = getCurrentSegment(this)._point,
					handle = through.subtract(current.multiply(t1 * t1))
						.subtract(to.multiply(t * t)).divide(2 * t * t1);
				if (handle.isNaN())
					throw new Error(
						'Cannot put a curve through points with parameter = ' + t);
				this.quadraticCurveTo(handle, to);
			},

			arcTo: function() {
				var current = getCurrentSegment(this),
					from = current._point,
					to = Point.read(arguments),
					through,
					peek = Base.peek(arguments),
					clockwise = Base.pick(peek, true),
					center, extent, vector, matrix;
				if (typeof clockwise === 'boolean') {
					var middle = from.add(to).divide(2),
					through = middle.add(middle.subtract(from).rotate(
							clockwise ? -90 : 90));
				} else if (Base.remain(arguments) <= 2) {
					through = to;
					to = Point.read(arguments);
				} else {
					var radius = Size.read(arguments),
						isZero = Numerical.isZero;
					if (isZero(radius.width) || isZero(radius.height))
						return this.lineTo(to);
					var rotation = Base.read(arguments),
						clockwise = !!Base.read(arguments),
						large = !!Base.read(arguments),
						middle = from.add(to).divide(2),
						pt = from.subtract(middle).rotate(-rotation),
						x = pt.x,
						y = pt.y,
						abs = Math.abs,
						rx = abs(radius.width),
						ry = abs(radius.height),
						rxSq = rx * rx,
						rySq = ry * ry,
						xSq = x * x,
						ySq = y * y;
					var factor = Math.sqrt(xSq / rxSq + ySq / rySq);
					if (factor > 1) {
						rx *= factor;
						ry *= factor;
						rxSq = rx * rx;
						rySq = ry * ry;
					}
					factor = (rxSq * rySq - rxSq * ySq - rySq * xSq) /
							(rxSq * ySq + rySq * xSq);
					if (abs(factor) < 1e-12)
						factor = 0;
					if (factor < 0)
						throw new Error(
								'Cannot create an arc with the given arguments');
					center = new Point(rx * y / ry, -ry * x / rx)
							.multiply((large === clockwise ? -1 : 1)
								* Math.sqrt(factor))
							.rotate(rotation).add(middle);
					matrix = new Matrix().translate(center).rotate(rotation)
							.scale(rx, ry);
					vector = matrix._inverseTransform(from);
					extent = vector.getDirectedAngle(matrix._inverseTransform(to));
					if (!clockwise && extent > 0)
						extent -= 360;
					else if (clockwise && extent < 0)
						extent += 360;
				}
				if (through) {
					var l1 = new Line(from.add(through).divide(2),
								through.subtract(from).rotate(90), true),
						l2 = new Line(through.add(to).divide(2),
								to.subtract(through).rotate(90), true),
						line = new Line(from, to),
						throughSide = line.getSide(through);
					center = l1.intersect(l2, true);
					if (!center) {
						if (!throughSide)
							return this.lineTo(to);
						throw new Error(
								'Cannot create an arc with the given arguments');
					}
					vector = from.subtract(center);
					extent = vector.getDirectedAngle(to.subtract(center));
					var centerSide = line.getSide(center);
					if (centerSide === 0) {
						extent = throughSide * Math.abs(extent);
					} else if (throughSide === centerSide) {
						extent += extent < 0 ? 360 : -360;
					}
				}
				var ext = Math.abs(extent),
					count = ext >= 360 ? 4 : Math.ceil(ext / 90),
					inc = extent / count,
					half = inc * Math.PI / 360,
					z = 4 / 3 * Math.sin(half) / (1 + Math.cos(half)),
					segments = [];
				for (var i = 0; i <= count; i++) {
					var pt = to,
						out = null;
					if (i < count) {
						out = vector.rotate(90).multiply(z);
						if (matrix) {
							pt = matrix._transformPoint(vector);
							out = matrix._transformPoint(vector.add(out))
									.subtract(pt);
						} else {
							pt = center.add(vector);
						}
					}
					if (i === 0) {
						current.setHandleOut(out);
					} else {
						var _in = vector.rotate(-90).multiply(z);
						if (matrix) {
							_in = matrix._transformPoint(vector.add(_in))
									.subtract(pt);
						}
						segments.push(new Segment(pt, _in, out));
					}
					vector = vector.rotate(inc);
				}
				this._add(segments);
			},

			lineBy: function() {
				var to = Point.read(arguments),
					current = getCurrentSegment(this)._point;
				this.lineTo(current.add(to));
			},

			curveBy: function() {
				var through = Point.read(arguments),
					to = Point.read(arguments),
					parameter = Base.read(arguments),
					current = getCurrentSegment(this)._point;
				this.curveTo(current.add(through), current.add(to), parameter);
			},

			cubicCurveBy: function() {
				var handle1 = Point.read(arguments),
					handle2 = Point.read(arguments),
					to = Point.read(arguments),
					current = getCurrentSegment(this)._point;
				this.cubicCurveTo(current.add(handle1), current.add(handle2),
						current.add(to));
			},

			quadraticCurveBy: function() {
				var handle = Point.read(arguments),
					to = Point.read(arguments),
					current = getCurrentSegment(this)._point;
				this.quadraticCurveTo(current.add(handle), current.add(to));
			},

			arcBy: function() {
				var current = getCurrentSegment(this)._point,
					point = current.add(Point.read(arguments)),
					clockwise = Base.pick(Base.peek(arguments), true);
				if (typeof clockwise === 'boolean') {
					this.arcTo(point, clockwise);
				} else {
					this.arcTo(point, current.add(Point.read(arguments)));
				}
			},

			closePath: function(tolerance) {
				this.setClosed(true);
				this.join(this, tolerance);
			}
		};
	}, {

		_getBounds: function(matrix, options) {
			var method = options.handle
					? 'getHandleBounds'
					: options.stroke
					? 'getStrokeBounds'
					: 'getBounds';
			return Path[method](this._segments, this._closed, this, matrix, options);
		},

	statics: {
		getBounds: function(segments, closed, path, matrix, options, strokePadding) {
			var first = segments[0];
			if (!first)
				return new Rectangle();
			var coords = new Array(6),
				prevCoords = first._transformCoordinates(matrix, new Array(6)),
				min = prevCoords.slice(0, 2),
				max = min.slice(),
				roots = new Array(2);

			function processSegment(segment) {
				segment._transformCoordinates(matrix, coords);
				for (var i = 0; i < 2; i++) {
					Curve._addBounds(
						prevCoords[i],
						prevCoords[i + 4],
						coords[i + 2],
						coords[i],
						i, strokePadding ? strokePadding[i] : 0, min, max, roots);
				}
				var tmp = prevCoords;
				prevCoords = coords;
				coords = tmp;
			}

			for (var i = 1, l = segments.length; i < l; i++)
				processSegment(segments[i]);
			if (closed)
				processSegment(first);
			return new Rectangle(min[0], min[1], max[0] - min[0], max[1] - min[1]);
		},

		getStrokeBounds: function(segments, closed, path, matrix, options) {
			var style = path.getStyle(),
				stroke = style.hasStroke(),
				strokeWidth = style.getStrokeWidth(),
				strokeMatrix = stroke && path._getStrokeMatrix(matrix, options),
				strokePadding = stroke && Path._getStrokePadding(strokeWidth,
					strokeMatrix),
				bounds = Path.getBounds(segments, closed, path, matrix, options,
					strokePadding);
			if (!stroke)
				return bounds;
			var strokeRadius = strokeWidth / 2,
				join = style.getStrokeJoin(),
				cap = style.getStrokeCap(),
				miterLimit = strokeRadius * style.getMiterLimit(),
				joinBounds = new Rectangle(new Size(strokePadding));

			function addPoint(point) {
				bounds = bounds.include(point);
			}

			function addRound(segment) {
				bounds = bounds.unite(
						joinBounds.setCenter(segment._point.transform(matrix)));
			}

			function addJoin(segment, join) {
				var handleIn = segment._handleIn,
					handleOut = segment._handleOut;
				if (join === 'round' || !handleIn.isZero() && !handleOut.isZero()
						&& handleIn.isCollinear(handleOut)) {
					addRound(segment);
				} else {
					Path._addBevelJoin(segment, join, strokeRadius, miterLimit,
							matrix, strokeMatrix, addPoint);
				}
			}

			function addCap(segment, cap) {
				if (cap === 'round') {
					addRound(segment);
				} else {
					Path._addSquareCap(segment, cap, strokeRadius, matrix,
							strokeMatrix, addPoint);
				}
			}

			var length = segments.length - (closed ? 0 : 1);
			for (var i = 1; i < length; i++)
				addJoin(segments[i], join);
			if (closed) {
				addJoin(segments[0], join);
			} else if (length > 0) {
				addCap(segments[0], cap);
				addCap(segments[segments.length - 1], cap);
			}
			return bounds;
		},

		_getStrokePadding: function(radius, matrix) {
			if (!matrix)
				return [radius, radius];
			var hor = new Point(radius, 0).transform(matrix),
				ver = new Point(0, radius).transform(matrix),
				phi = hor.getAngleInRadians(),
				a = hor.getLength(),
				b = ver.getLength();
			var sin = Math.sin(phi),
				cos = Math.cos(phi),
				tan = Math.tan(phi),
				tx = Math.atan2(b * tan, a),
				ty = Math.atan2(b, tan * a);
			return [Math.abs(a * Math.cos(tx) * cos + b * Math.sin(tx) * sin),
					Math.abs(b * Math.sin(ty) * cos + a * Math.cos(ty) * sin)];
		},

		_addBevelJoin: function(segment, join, radius, miterLimit, matrix,
				strokeMatrix, addPoint, isArea) {
			var curve2 = segment.getCurve(),
				curve1 = curve2.getPrevious(),
				point = curve2.getPointAtTime(0),
				normal1 = curve1.getNormalAtTime(1),
				normal2 = curve2.getNormalAtTime(0),
				step = normal1.getDirectedAngle(normal2) < 0 ? -radius : radius;
			normal1.setLength(step);
			normal2.setLength(step);
			if (matrix)
				matrix._transformPoint(point, point);
			if (strokeMatrix) {
				strokeMatrix._transformPoint(normal1, normal1);
				strokeMatrix._transformPoint(normal2, normal2);
			}
			if (isArea) {
				addPoint(point);
				addPoint(point.add(normal1));
			}
			if (join === 'miter') {
				var corner = new Line(point.add(normal1),
						new Point(-normal1.y, normal1.x), true
					).intersect(new Line(point.add(normal2),
						new Point(-normal2.y, normal2.x), true
					), true);
				if (corner && point.getDistance(corner) <= miterLimit) {
					addPoint(corner);
					if (!isArea)
						return;
				}
			}
			if (!isArea)
				addPoint(point.add(normal1));
			addPoint(point.add(normal2));
		},

		_addSquareCap: function(segment, cap, radius, matrix, strokeMatrix,
				addPoint, isArea) {
			var point = segment._point,
				loc = segment.getLocation(),
				normal = loc.getNormal().multiply(radius);
			if (matrix)
				matrix._transformPoint(point, point);
			if (strokeMatrix)
				strokeMatrix._transformPoint(normal, normal);
			if (isArea) {
				addPoint(point.subtract(normal));
				addPoint(point.add(normal));
			}
			if (cap === 'square') {
				point = point.add(normal.rotate(
						loc.getTime() === 0 ? -90 : 90));
			}
			addPoint(point.add(normal));
			addPoint(point.subtract(normal));
		},

		getHandleBounds: function(segments, closed, path, matrix, options) {
			var style = path.getStyle(),
				stroke = options.stroke && style.hasStroke(),
				strokePadding,
				joinPadding;
			if (stroke) {
				var strokeMatrix = path._getStrokeMatrix(matrix, options),
					strokeRadius = style.getStrokeWidth() / 2,
					joinRadius = strokeRadius;
				if (style.getStrokeJoin() === 'miter')
					joinRadius = strokeRadius * style.getMiterLimit();
				if (style.getStrokeCap() === 'square')
					joinRadius = Math.max(joinRadius, strokeRadius * Math.sqrt(2));
				strokePadding = Path._getStrokePadding(strokeRadius, strokeMatrix);
				joinPadding = Path._getStrokePadding(joinRadius, strokeMatrix);
			}
			var coords = new Array(6),
				x1 = Infinity,
				x2 = -x1,
				y1 = x1,
				y2 = x2;
			for (var i = 0, l = segments.length; i < l; i++) {
				var segment = segments[i];
				segment._transformCoordinates(matrix, coords);
				for (var j = 0; j < 6; j += 2) {
					var padding = j === 0 ? joinPadding : strokePadding,
						paddingX = padding ? padding[0] : 0,
						paddingY = padding ? padding[1] : 0,
						x = coords[j],
						y = coords[j + 1],
						xn = x - paddingX,
						xx = x + paddingX,
						yn = y - paddingY,
						yx = y + paddingY;
					if (xn < x1) x1 = xn;
					if (xx > x2) x2 = xx;
					if (yn < y1) y1 = yn;
					if (yx > y2) y2 = yx;
				}
			}
			return new Rectangle(x1, y1, x2 - x1, y2 - y1);
		}
	}});

	Path.inject({ statics: new function() {

		var kappa = 0.5522847498307936,
			ellipseSegments = [
				new Segment([-1, 0], [0, kappa ], [0, -kappa]),
				new Segment([0, -1], [-kappa, 0], [kappa, 0 ]),
				new Segment([1, 0], [0, -kappa], [0, kappa ]),
				new Segment([0, 1], [kappa, 0 ], [-kappa, 0])
			];

		function createPath(segments, closed, args) {
			var props = Base.getNamed(args),
				path = new Path(props && props.insert === false && Item.NO_INSERT);
			path._add(segments);
			path._closed = closed;
			return path.set(props);
		}

		function createEllipse(center, radius, args) {
			var segments = new Array(4);
			for (var i = 0; i < 4; i++) {
				var segment = ellipseSegments[i];
				segments[i] = new Segment(
					segment._point.multiply(radius).add(center),
					segment._handleIn.multiply(radius),
					segment._handleOut.multiply(radius)
				);
			}
			return createPath(segments, true, args);
		}

		return {
			Line: function() {
				return createPath([
					new Segment(Point.readNamed(arguments, 'from')),
					new Segment(Point.readNamed(arguments, 'to'))
				], false, arguments);
			},

			Circle: function() {
				var center = Point.readNamed(arguments, 'center'),
					radius = Base.readNamed(arguments, 'radius');
				return createEllipse(center, new Size(radius), arguments);
			},

			Rectangle: function() {
				var rect = Rectangle.readNamed(arguments, 'rectangle'),
					radius = Size.readNamed(arguments, 'radius', 0,
							{ readNull: true }),
					bl = rect.getBottomLeft(true),
					tl = rect.getTopLeft(true),
					tr = rect.getTopRight(true),
					br = rect.getBottomRight(true),
					segments;
				if (!radius || radius.isZero()) {
					segments = [
						new Segment(bl),
						new Segment(tl),
						new Segment(tr),
						new Segment(br)
					];
				} else {
					radius = Size.min(radius, rect.getSize(true).divide(2));
					var rx = radius.width,
						ry = radius.height,
						hx = rx * kappa,
						hy = ry * kappa;
					segments = [
						new Segment(bl.add(rx, 0), null, [-hx, 0]),
						new Segment(bl.subtract(0, ry), [0, hy]),
						new Segment(tl.add(0, ry), null, [0, -hy]),
						new Segment(tl.add(rx, 0), [-hx, 0], null),
						new Segment(tr.subtract(rx, 0), null, [hx, 0]),
						new Segment(tr.add(0, ry), [0, -hy], null),
						new Segment(br.subtract(0, ry), null, [0, hy]),
						new Segment(br.subtract(rx, 0), [hx, 0])
					];
				}
				return createPath(segments, true, arguments);
			},

			RoundRectangle: '#Rectangle',

			Ellipse: function() {
				var ellipse = Shape._readEllipse(arguments);
				return createEllipse(ellipse.center, ellipse.radius, arguments);
			},

			Oval: '#Ellipse',

			Arc: function() {
				var from = Point.readNamed(arguments, 'from'),
					through = Point.readNamed(arguments, 'through'),
					to = Point.readNamed(arguments, 'to'),
					props = Base.getNamed(arguments),
					path = new Path(props && props.insert === false
							&& Item.NO_INSERT);
				path.moveTo(from);
				path.arcTo(through, to);
				return path.set(props);
			},

			RegularPolygon: function() {
				var center = Point.readNamed(arguments, 'center'),
					sides = Base.readNamed(arguments, 'sides'),
					radius = Base.readNamed(arguments, 'radius'),
					step = 360 / sides,
					three = sides % 3 === 0,
					vector = new Point(0, three ? -radius : radius),
					offset = three ? -1 : 0.5,
					segments = new Array(sides);
				for (var i = 0; i < sides; i++)
					segments[i] = new Segment(center.add(
						vector.rotate((i + offset) * step)));
				return createPath(segments, true, arguments);
			},

			Star: function() {
				var center = Point.readNamed(arguments, 'center'),
					points = Base.readNamed(arguments, 'points') * 2,
					radius1 = Base.readNamed(arguments, 'radius1'),
					radius2 = Base.readNamed(arguments, 'radius2'),
					step = 360 / points,
					vector = new Point(0, -1),
					segments = new Array(points);
				for (var i = 0; i < points; i++)
					segments[i] = new Segment(center.add(vector.rotate(step * i)
							.multiply(i % 2 ? radius2 : radius1)));
				return createPath(segments, true, arguments);
			}
		};
	}});

	var CompoundPath = PathItem.extend({
		_class: 'CompoundPath',
		_serializeFields: {
			children: []
		},

		initialize: function CompoundPath(arg) {
			this._children = [];
			this._namedChildren = {};
			if (!this._initialize(arg)) {
				if (typeof arg === 'string') {
					this.setPathData(arg);
				} else {
					this.addChildren(Array.isArray(arg) ? arg : arguments);
				}
			}
		},

		insertChildren: function insertChildren(index, items, _preserve) {
			for (var i = items.length - 1; i >= 0; i--) {
				var item = items[i];
				if (item instanceof CompoundPath) {
					items = items.slice();
					items.splice.apply(items, [i, 1].concat(item.removeChildren()));
					item.remove();
				}
			}
			items = insertChildren.base.call(this, index, items, _preserve, Path);
			for (var i = 0, l = !_preserve && items && items.length; i < l; i++) {
				var item = items[i];
				if (item._clockwise === undefined)
					item.setClockwise(item._index === 0);
			}
			return items;
		},

		reduce: function reduce(options) {
			var children = this._children;
			for (var i = children.length - 1; i >= 0; i--) {
				var path = children[i].reduce(options);
				if (path.isEmpty())
					path.remove();
			}
			if (children.length === 0) {
				var path = new Path(Item.NO_INSERT);
				path.copyAttributes(this);
				path.insertAbove(this);
				this.remove();
				return path;
			}
			return reduce.base.call(this);
		},

		isClockwise: function() {
			var child = this.getFirstChild();
			return child && child.isClockwise();
		},

		setClockwise: function(clockwise) {
			if (this.isClockwise() ^ !!clockwise)
				this.reverse();
		},

		getFirstSegment: function() {
			var first = this.getFirstChild();
			return first && first.getFirstSegment();
		},

		getLastSegment: function() {
			var last = this.getLastChild();
			return last && last.getLastSegment();
		},

		getCurves: function() {
			var children = this._children,
				curves = [];
			for (var i = 0, l = children.length; i < l; i++)
				curves.push.apply(curves, children[i].getCurves());
			return curves;
		},

		getFirstCurve: function() {
			var first = this.getFirstChild();
			return first && first.getFirstCurve();
		},

		getLastCurve: function() {
			var last = this.getLastChild();
			return last && last.getFirstCurve();
		},

		getArea: function() {
			var children = this._children,
				area = 0;
			for (var i = 0, l = children.length; i < l; i++)
				area += children[i].getArea();
			return area;
		}
	}, {
		beans: true,

		getPathData: function(_matrix, _precision) {
			var children = this._children,
				paths = [];
			for (var i = 0, l = children.length; i < l; i++) {
				var child = children[i],
					mx = child._matrix;
				paths.push(child.getPathData(_matrix && !mx.isIdentity()
						? _matrix.appended(mx) : _matrix, _precision));
			}
			return paths.join(' ');
		}
	}, {
		_hitTestChildren: function _hitTestChildren(point, options, viewMatrix) {
			return _hitTestChildren.base.call(this, point,
					options.class === Path || options.type === 'path' ? options
						: Base.set({}, options, { fill: false }),
					viewMatrix);
		},

		_draw: function(ctx, param, viewMatrix, strokeMatrix) {
			var children = this._children;
			if (children.length === 0)
				return;

			param = param.extend({ dontStart: true, dontFinish: true });
			ctx.beginPath();
			for (var i = 0, l = children.length; i < l; i++)
				children[i].draw(ctx, param, strokeMatrix);

			if (!param.clip) {
				this._setStyles(ctx, param, viewMatrix);
				var style = this._style;
				if (style.hasFill()) {
					ctx.fill(style.getFillRule());
					ctx.shadowColor = 'rgba(0,0,0,0)';
				}
				if (style.hasStroke())
					ctx.stroke();
			}
		},

		_drawSelected: function(ctx, matrix, selectionItems) {
			var children = this._children;
			for (var i = 0, l = children.length; i < l; i++) {
				var child = children[i],
					mx = child._matrix;
				if (!selectionItems[child._id]) {
					child._drawSelected(ctx, mx.isIdentity() ? matrix
							: matrix.appended(mx));
				}
			}
		}
	},
	new function() {
		function getCurrentPath(that, check) {
			var children = that._children;
			if (check && children.length === 0)
				throw new Error('Use a moveTo() command first');
			return children[children.length - 1];
		}

		return Base.each(['lineTo', 'cubicCurveTo', 'quadraticCurveTo', 'curveTo',
				'arcTo', 'lineBy', 'cubicCurveBy', 'quadraticCurveBy', 'curveBy',
				'arcBy'],
			function(key) {
				this[key] = function() {
					var path = getCurrentPath(this, true);
					path[key].apply(path, arguments);
				};
			}, {
				moveTo: function() {
					var current = getCurrentPath(this),
						path = current && current.isEmpty() ? current
								: new Path(Item.NO_INSERT);
					if (path !== current)
						this.addChild(path);
					path.moveTo.apply(path, arguments);
				},

				moveBy: function() {
					var current = getCurrentPath(this, true),
						last = current && current.getLastSegment(),
						point = Point.read(arguments);
					this.moveTo(last ? point.add(last._point) : point);
				},

				closePath: function(tolerance) {
					getCurrentPath(this, true).closePath(tolerance);
				}
			}
		);
	}, Base.each(['reverse', 'flatten', 'simplify', 'smooth'], function(key) {
		this[key] = function(param) {
			var children = this._children,
				res;
			for (var i = 0, l = children.length; i < l; i++) {
				res = children[i][key](param) || res;
			}
			return res;
		};
	}, {}));

	PathItem.inject(new function() {
		var operators = {
			unite:     { 1: true },
			intersect: { 2: true },
			subtract:  { 1: true },
			exclude:   { 1: true }
		};

		function preparePath(path, resolve) {
			var res = path.clone(false).reduce({ simplify: true })
					.transform(null, true, true);
			return resolve ? res.resolveCrossings() : res;
		}

		function createResult(ctor, paths, reduce, path1, path2) {
			var result = new ctor(Item.NO_INSERT);
			result.addChildren(paths, true);
			if (reduce)
				result = result.reduce({ simplify: true });
			result.insertAbove(path2 && path1.isSibling(path2)
					&& path1.getIndex() < path2.getIndex() ? path2 : path1);
			result.copyAttributes(path1, true);
			return result;
		}

		function computeBoolean(path1, path2, operation) {
			var operator = operators[operation];
			operator[operation] = true;
			if (!path1._children && !path1._closed)
				return computeOpenBoolean(path1, path2, operator);
			var _path1 = preparePath(path1, true),
				_path2 = path2 && path1 !== path2 && preparePath(path2, true);
			if (_path2 && (operator.subtract || operator.exclude)
					^ (_path2.isClockwise() ^ _path1.isClockwise()))
				_path2.reverse();
			var crossings = divideLocations(
					CurveLocation.expand(_path1.getCrossings(_path2))),
				segments = [],
				monoCurves = [];

			function collect(paths) {
				for (var i = 0, l = paths.length; i < l; i++) {
					var path = paths[i];
					segments.push.apply(segments, path._segments);
					monoCurves.push.apply(monoCurves, path._getMonoCurves());
					path._overlapsOnly = path._validOverlapsOnly = true;
				}
			}

			collect(_path1._children || [_path1]);
			if (_path2)
				collect(_path2._children || [_path2]);
			for (var i = 0, l = crossings.length; i < l; i++) {
				propagateWinding(crossings[i]._segment, _path1, _path2, monoCurves,
						operator);
			}
			for (var i = 0, l = segments.length; i < l; i++) {
				var segment = segments[i],
					inter = segment._intersection;
				if (segment._winding == null) {
					propagateWinding(segment, _path1, _path2, monoCurves, operator);
				}
				if (!(inter && inter._overlap)) {
					var path = segment._path;
					path._overlapsOnly = false;
					if (operator[segment._winding])
						path._validOverlapsOnly = false;
				}
			}
			return createResult(CompoundPath, tracePaths(segments, operator), true,
						path1, path2);
		}

		function computeOpenBoolean(path1, path2, operator) {
			if (!path2 || !path2._children && !path2._closed
					|| !operator.subtract && !operator.intersect)
				return null;
			var _path1 = preparePath(path1, false),
				_path2 = preparePath(path2, false),
				crossings = _path1.getCrossings(_path2),
				sub = operator.subtract,
				paths = [];

			function addPath(path) {
				if (_path2.contains(path.getPointAt(path.getLength() / 2)) ^ sub) {
					paths.unshift(path);
					return true;
				}
			}

			for (var i = crossings.length - 1; i >= 0; i--) {
				var path = crossings[i].split();
				if (path) {
					if (addPath(path))
						path.getFirstSegment().setHandleIn(0, 0);
					_path1.getLastSegment().setHandleOut(0, 0);
				}
			}
			addPath(_path1);
			return createResult(Group, paths, false, path1, path2);
		}

		function linkIntersections(from, to) {
			var prev = from;
			while (prev) {
				if (prev === to)
					return;
				prev = prev._previous;
			}
			while (from._next && from._next !== to)
				from = from._next;
			if (!from._next) {
				while (to._previous)
					to = to._previous;
				from._next = to;
				to._previous = from;
			}
		}

		function divideLocations(locations, include) {
			var results = include && [],
				tMin = 4e-7,
				tMax = 1 - tMin,
				noHandles = false,
				clearCurves = [],
				prevCurve,
				prevTime;

			for (var i = locations.length - 1; i >= 0; i--) {
				var loc = locations[i];
				if (include) {
					if (!include(loc))
						continue;
					results.unshift(loc);
				}
				var curve = loc._curve,
					time = loc._time,
					origTime = time,
					segment;
				if (curve !== prevCurve) {
					noHandles = !curve.hasHandles();
				} else if (prevTime >= tMin && prevTime <= tMax ) {
					time /= prevTime;
				}
				if (time < tMin) {
					segment = curve._segment1;
				} else if (time > tMax) {
					segment = curve._segment2;
				} else {
					var newCurve = curve.divideAtTime(time, true);
					if (noHandles)
						clearCurves.push(curve, newCurve);
					segment = newCurve._segment1;
				}
				loc._setSegment(segment);
				var inter = segment._intersection,
					dest = loc._intersection;
				if (inter) {
					linkIntersections(inter, dest);
					var other = inter;
					while (other) {
						linkIntersections(other._intersection, inter);
						other = other._next;
					}
				} else {
					segment._intersection = dest;
				}
				prevCurve = curve;
				prevTime = origTime;
			}
			for (var i = 0, l = clearCurves.length; i < l; i++) {
				clearCurves[i].clearHandles();
			}
			return results || locations;
		}

		function getWinding(point, curves, horizontal) {
			var epsilon = 2e-7,
				px = point.x,
				py = point.y,
				windLeft = 0,
				windRight = 0,
				length = curves.length,
				roots = [],
				abs = Math.abs;
			if (horizontal) {
				var yTop = -Infinity,
					yBottom = Infinity,
					yBefore = py - epsilon,
					yAfter = py + epsilon;
				for (var i = 0; i < length; i++) {
					var values = curves[i].values,
						count = Curve.solveCubic(values, 0, px, roots, 0, 1);
					for (var j = count - 1; j >= 0; j--) {
						var y = Curve.getPoint(values, roots[j]).y;
						if (y < yBefore && y > yTop) {
							yTop = y;
						} else if (y > yAfter && y < yBottom) {
							yBottom = y;
						}
					}
				}
				yTop = (yTop + py) / 2;
				yBottom = (yBottom + py) / 2;
				if (yTop > -Infinity)
					windLeft = getWinding(new Point(px, yTop), curves).winding;
				if (yBottom < Infinity)
					windRight = getWinding(new Point(px, yBottom), curves).winding;
			} else {
				var xBefore = px - epsilon,
					xAfter = px + epsilon,
					prevWinding,
					prevXEnd,
					windLeftOnCurve = 0,
					windRightOnCurve = 0,
					isOnCurve = false;
				for (var i = 0; i < length; i++) {
					var curve = curves[i],
						winding = curve.winding,
						values = curve.values,
						yStart = values[1],
						yEnd = values[7];
					if (curve.last) {
						prevWinding = curve.last.winding;
						prevXEnd = curve.last.values[6];
						isOnCurve = false;
					}
					if (py >= yStart && py <= yEnd || py >= yEnd && py <= yStart) {
						if (winding) {
							var x = py === yStart ? values[0]
								: py === yEnd ? values[6]
								: Curve.solveCubic(values, 1, py, roots, 0, 1) === 1
								? Curve.getPoint(values, roots[0]).x
								: null;
							if (x != null) {
								if (x >= xBefore && x <= xAfter) {
									isOnCurve = true;
								} else if (
									(py !== yStart || winding !== prevWinding)
									&& !(py === yStart
										&& (px - x) * (px - prevXEnd) < 0)) {
									if (x < xBefore) {
										windLeft += winding;
									} else if (x > xAfter) {
										windRight += winding;
									}
								}
							}
							prevWinding = winding;
							prevXEnd = values[6];
						} else if ((px - values[0]) * (px - values[6]) <= 0) {
							isOnCurve = true;
						}
					}
					if (isOnCurve && (i >= length - 1 || curves[i + 1].last)) {
						windLeftOnCurve += 1;
						windRightOnCurve -= 1;
					}
				}
				if (windLeft === 0 && windRight === 0) {
					windLeft = windLeftOnCurve;
					windRight = windRightOnCurve;
				}
			}
			return {
				winding: Math.max(abs(windLeft), abs(windRight)),
				contour: !windLeft ^ !windRight
			};
		}

		function propagateWinding(segment, path1, path2, monoCurves, operator) {
			var chain = [],
				start = segment,
				totalLength = 0,
				winding;
			do {
				var curve = segment.getCurve(),
					length = curve.getLength();
				chain.push({ segment: segment, curve: curve, length: length });
				totalLength += length;
				segment = segment.getNext();
			} while (segment && !segment._intersection && segment !== start);
			var length = totalLength / 2;
			for (var j = 0, l = chain.length; j < l; j++) {
				var entry = chain[j],
					curveLength = entry.length;
				if (length <= curveLength) {
					var curve = entry.curve,
						path = curve._path,
						parent = path._parent,
						t = curve.getTimeAt(length),
						pt = curve.getPointAtTime(t),
						hor = Math.abs(curve.getTangentAtTime(t).y)
								< 1e-7;
					if (parent instanceof CompoundPath)
						path = parent;
					winding = !(operator.subtract && path2 && (
							path === path1 &&  path2._getWinding(pt, hor) ||
							path === path2 && !path1._getWinding(pt, hor)))
								? getWinding(pt, monoCurves, hor)
								: { winding: 0 };
					 break;
				}
				length -= curveLength;
			}
			for (var j = chain.length - 1; j >= 0; j--) {
				var seg = chain[j].segment;
				seg._winding = winding.winding;
				seg._contour = winding.contour;
			}
		}

		function tracePaths(segments, operator) {
			var paths = [],
				start,
				otherStart;

			function isValid(seg, excludeContour) {
				return !!(seg && !seg._visited && (!operator
						|| operator[seg._winding]
						|| !excludeContour && operator.unite && seg._contour));
			}

			function isStart(seg) {
				return seg === start || seg === otherStart;
			}

			function findBestIntersection(inter, exclude) {
				if (!inter._next)
					return inter;
				while (inter) {
					var seg = inter._segment,
						nextSeg = seg.getNext(),
						nextInter = nextSeg && nextSeg._intersection;
					if (seg !== exclude && (isStart(seg) || isStart(nextSeg)
						|| !seg._visited && !nextSeg._visited
						&& (!operator || isValid(seg) && (isValid(nextSeg)
							|| nextInter && isValid(nextInter._segment)))
						))
						return inter;
					inter = inter._next;
				}
				return null;
			}

			for (var i = 0, l = segments.length; i < l; i++) {
				var path = null,
					finished = false,
					seg = segments[i],
					inter = seg._intersection,
					handleIn;
				if (!seg._visited && seg._path._overlapsOnly) {
					var path1 = seg._path,
						path2 = inter._segment._path,
						segments1 = path1._segments,
						segments2 = path2._segments;
					if (Base.equals(segments1, segments2)) {
						if ((operator.unite || operator.intersect)
								&& path1.getArea()) {
							paths.push(path1.clone(false));
						}
						for (var j = 0, k = segments1.length; j < k; j++) {
							segments1[j]._visited = segments2[j]._visited = true;
						}
					}
				}
				if (!isValid(seg, true)
						|| !seg._path._validOverlapsOnly && inter && inter._overlap)
					continue;
				start = otherStart = null;
				while (true) {
					inter = inter && findBestIntersection(inter, seg) || inter;
					var other = inter && inter._segment;
					if (isStart(seg)) {
						finished = true;
					} else if (other) {
						if (isStart(other)) {
							finished = true;
							seg = other;
						} else if (isValid(other, isValid(seg, true))) {
							if (operator
									&& (operator.intersect || operator.subtract)) {
								seg._visited = true;
							}
							seg = other;
						}
					}
					if (finished || seg._visited) {
						seg._visited = true;
						break;
					}
					if (seg._path._validOverlapsOnly && !isValid(seg))
						break;
					if (!path) {
						path = new Path(Item.NO_INSERT);
						start = seg;
						otherStart = other;
					}
					var next = seg.getNext();
					path.add(new Segment(seg._point, handleIn,
							next && seg._handleOut));
					seg._visited = true;
					seg = next || seg._path.getFirstSegment();
					handleIn = next && next._handleIn;
					inter = seg._intersection;
				}
				if (finished) {
					path.firstSegment.setHandleIn(handleIn);
					path.setClosed(true);
				} else if (path) {
					var area = path.getArea(true);
					if (Math.abs(area) >= 2e-7) {
						console.error('Boolean operation resulted in open path',
								'segments =', path._segments.length,
								'length =', path.getLength(),
								'area=', area);
					}
					path = null;
				}
				if (path && (path._segments.length > 8
						|| !Numerical.isZero(path.getArea()))) {
					paths.push(path);
					path = null;
				}
			}
			return paths;
		}

		return {
			_getWinding: function(point, horizontal) {
				return getWinding(point, this._getMonoCurves(), horizontal).winding;
			},

			unite: function(path) {
				return computeBoolean(this, path, 'unite');
			},

			intersect: function(path) {
				return computeBoolean(this, path, 'intersect');
			},

			subtract: function(path) {
				return computeBoolean(this, path, 'subtract');
			},

			exclude: function(path) {
				return computeBoolean(this, path, 'exclude');
			},

			divide: function(path) {
				return createResult(Group, [this.subtract(path),
						this.intersect(path)], true, this, path);
			},

			resolveCrossings: function() {
				var children = this._children,
					paths = children || [this];

				function hasOverlap(seg) {
					var inter = seg && seg._intersection;
					return inter && inter._overlap;
				}

				var hasOverlaps = false,
					hasCrossings = false,
					intersections = this.getIntersections(null, function(inter) {
						return inter._overlap && (hasOverlaps = true)
								|| inter.isCrossing() && (hasCrossings = true);
					});
				intersections = CurveLocation.expand(intersections);
				if (hasOverlaps) {
					var overlaps = divideLocations(intersections, function(inter) {
						return inter._overlap;
					});
					for (var i = overlaps.length - 1; i >= 0; i--) {
						var seg = overlaps[i]._segment,
							prev = seg.getPrevious(),
							next = seg.getNext();
						if (seg._path && hasOverlap(prev) && hasOverlap(next)) {
							seg.remove();
							prev._handleOut.set(0, 0);
							next._handleIn.set(0, 0);
							var curve = prev.getCurve();
							if (curve.isStraight() && curve.getLength() === 0)
								prev.remove();
						}
					}
				}
				if (hasCrossings) {
					divideLocations(intersections, hasOverlaps && function(inter) {
						var curve1 = inter.getCurve(),
							curve2 = inter._intersection._curve,
							seg = inter._segment;
						if (curve1 && curve2 && curve1._path && curve2._path) {
							return true;
						} else if (seg) {
							seg._intersection = null;
						}
					});
					paths = tracePaths(Base.each(paths, function(path) {
						this.push.apply(this, path._segments);
					}, []));
				}
				var length = paths.length,
					item;
				if (length > 1) {
					paths = paths.slice().sort(function (a, b) {
						return b.getBounds().getArea() - a.getBounds().getArea();
					});
					var first = paths[0],
						items = [first],
						excluded = {},
						isNonZero = this.getFillRule() === 'nonzero',
						windings = isNonZero && Base.each(paths, function(path) {
							this.push(path.isClockwise() ? 1 : -1);
						}, []);
					for (var i = 1; i < length; i++) {
						var path = paths[i],
							point = path.getInteriorPoint(),
							isContained = false,
							container = null,
							exclude = false;
						for (var j = i - 1; j >= 0 && !container; j--) {
							if (paths[j].contains(point)) {
								if (isNonZero && !isContained) {
									windings[i] += windings[j];
									if (windings[i] && windings[j]) {
										exclude = excluded[i] = true;
										break;
									}
								}
								isContained = true;
								container = !excluded[j] && paths[j];
							}
						}
						if (!exclude) {
							path.setClockwise(container ? !container.isClockwise()
									: first.isClockwise());
							items.push(path);
						}
					}
					paths = items;
					length = items.length;
				}
				if (length > 1 && children) {
					if (paths !== children) {
						this.setChildren(paths, true);
					}
					item = this;
				} else if (length === 1 && !children) {
					if (paths[0] !== this)
						this.setSegments(paths[0].removeSegments());
					item = this;
				}
				if (!item) {
					item = new CompoundPath(Item.NO_INSERT);
					item.addChildren(paths, true);
					item = item.reduce();
					item.copyAttributes(this);
					this.replaceWith(item);
				}
				return item;
			}
		};
	});

	Path.inject({
		_getMonoCurves: function() {
			var monoCurves = this._monoCurves,
				last;

			function insertCurve(v) {
				var y0 = v[1],
					y1 = v[7],
					winding = Math.abs((y0 - y1) / (v[0] - v[6]))
							< 2e-7
						? 0
						: y0 > y1
							? -1
							: 1,
					curve = { values: v, winding: winding };
				monoCurves.push(curve);
				if (winding)
					last = curve;
			}

			function handleCurve(v) {
				if (Curve.getLength(v) === 0)
					return;
				var y0 = v[1],
					y1 = v[3],
					y2 = v[5],
					y3 = v[7];
				if (Curve.isStraight(v)
						|| y0 >= y1 === y1 >= y2 && y1 >= y2 === y2 >= y3) {
					insertCurve(v);
				} else {
					var a = 3 * (y1 - y2) - y0 + y3,
						b = 2 * (y0 + y2) - 4 * y1,
						c = y1 - y0,
						tMin = 4e-7,
						tMax = 1 - tMin,
						roots = [],
						n = Numerical.solveQuadratic(a, b, c, roots, tMin, tMax);
					if (n < 1) {
						insertCurve(v);
					} else {
						roots.sort();
						var t = roots[0],
							parts = Curve.subdivide(v, t);
						insertCurve(parts[0]);
						if (n > 1) {
							t = (roots[1] - t) / (1 - t);
							parts = Curve.subdivide(parts[1], t);
							insertCurve(parts[0]);
						}
						insertCurve(parts[1]);
					}
				}
			}

			if (!monoCurves) {
				monoCurves = this._monoCurves = [];
				var curves = this.getCurves(),
					segments = this._segments;
				for (var i = 0, l = curves.length; i < l; i++)
					handleCurve(curves[i].getValues());
				if (!this._closed && segments.length > 1) {
					var p1 = segments[segments.length - 1]._point,
						p2 = segments[0]._point,
						p1x = p1._x, p1y = p1._y,
						p2x = p2._x, p2y = p2._y;
					handleCurve([p1x, p1y, p1x, p1y, p2x, p2y, p2x, p2y]);
				}
				if (monoCurves.length > 0) {
					monoCurves[0].last = last;
				}
			}
			return monoCurves;
		},

		getInteriorPoint: function() {
			var bounds = this.getBounds(),
				point = bounds.getCenter(true);
			if (!this.contains(point)) {
				var curves = this._getMonoCurves(),
					roots = [],
					y = point.y,
					intercepts = [];
				for (var i = 0, l = curves.length; i < l; i++) {
					var values = curves[i].values;
					if (curves[i].winding === 1
							&& y > values[1] && y <= values[7]
							|| y >= values[7] && y < values[1]) {
						var count = Curve.solveCubic(values, 1, y, roots, 0, 1);
						for (var j = count - 1; j >= 0; j--) {
							intercepts.push(Curve.getPoint(values, roots[j]).x);
						}
					}
				}
				intercepts.sort(function(a, b) { return a - b; });
				point.x = (intercepts[0] + intercepts[1]) / 2;
			}
			return point;
		}
	});

	CompoundPath.inject({
		_getMonoCurves: function() {
			var children = this._children,
				monoCurves = [];
			for (var i = 0, l = children.length; i < l; i++)
				monoCurves.push.apply(monoCurves, children[i]._getMonoCurves());
			return monoCurves;
		}
	});

	var PathIterator = Base.extend({
		_class: 'PathIterator',

		initialize: function(path, flatness, maxRecursion, ignoreStraight, matrix) {
			var curves = [],
				parts = [],
				length = 0,
				minSpan = 1 / (maxRecursion || 32),
				segments = path._segments,
				segment1 = segments[0],
				segment2;

			function addCurve(segment1, segment2) {
				var curve = Curve.getValues(segment1, segment2, matrix);
				curves.push(curve);
				computeParts(curve, segment1._index, 0, 1);
			}

			function computeParts(curve, index, t1, t2) {
				if ((t2 - t1) > minSpan
						&& !(ignoreStraight && Curve.isStraight(curve))
						&& !Curve.isFlatEnough(curve, flatness || 0.25)) {
					var halves = Curve.subdivide(curve, 0.5),
						tMid = (t1 + t2) / 2;
					computeParts(halves[0], index, t1, tMid);
					computeParts(halves[1], index, tMid, t2);
				} else {
					var dx = curve[6] - curve[0],
						dy = curve[7] - curve[1],
						dist = Math.sqrt(dx * dx + dy * dy);
					if (dist > 0) {
						length += dist;
						parts.push({
							offset: length,
							curve: curve,
							index: index,
							time: t2,
						});
					}
				}
			}

			for (var i = 1, l = segments.length; i < l; i++) {
				segment2 = segments[i];
				addCurve(segment1, segment2);
				segment1 = segment2;
			}
			if (path._closed)
				addCurve(segment2, segments[0]);
			this.curves = curves;
			this.parts = parts;
			this.length = length;
			this.index = 0;
		},

		_get: function(offset) {
			var i, j = this.index;
			for (;;) {
				i = j;
				if (j === 0 || this.parts[--j].offset < offset)
					break;
			}
			for (var l = this.parts.length; i < l; i++) {
				var part = this.parts[i];
				if (part.offset >= offset) {
					this.index = i;
					var prev = this.parts[i - 1];
					var prevTime = prev && prev.index === part.index ? prev.time : 0,
						prevOffset = prev ? prev.offset : 0;
					return {
						index: part.index,
						time: prevTime + (part.time - prevTime)
							* (offset - prevOffset) / (part.offset - prevOffset)
					};
				}
			}
			var part = this.parts[this.parts.length - 1];
			return {
				index: part.index,
				time: 1
			};
		},

		drawPart: function(ctx, from, to) {
			var start = this._get(from),
				end = this._get(to);
			for (var i = start.index, l = end.index; i <= l; i++) {
				var curve = Curve.getPart(this.curves[i],
						i === start.index ? start.time : 0,
						i === end.index ? end.time : 1);
				if (i === start.index)
					ctx.moveTo(curve[0], curve[1]);
				ctx.bezierCurveTo.apply(ctx, curve.slice(2));
			}
		}
	}, Base.each(Curve._evaluateMethods,
		function(name) {
			this[name + 'At'] = function(offset) {
				var param = this._get(offset);
				return Curve[name](this.curves[param.index], param.time);
			};
		}, {})
	);

	var PathFitter = Base.extend({
		initialize: function(path) {
			var points = this.points = [],
				segments = path._segments,
				closed = path._closed;
			for (var i = 0, prev, l = segments.length; i < l; i++) {
				var point = segments[i].point;
				if (!prev || !prev.equals(point)) {
					points.push(prev = point.clone());
				}
			}
			if (closed) {
				points.unshift(points[points.length - 1]);
				points.push(points[1]);
			}
			this.closed = closed;
		},

		fit: function(error) {
			var points = this.points,
				length = points.length,
				segments = null;
			if (length > 0) {
				segments = [new Segment(points[0])];
				if (length > 1) {
					this.fitCubic(segments, error, 0, length - 1,
							points[1].subtract(points[0]),
							points[length - 2].subtract(points[length - 1]));
					if (this.closed) {
						segments.shift();
						segments.pop();
					}
				}
			}
			return segments;
		},

		fitCubic: function(segments, error, first, last, tan1, tan2) {
			var points = this.points;
			if (last - first === 1) {
				var pt1 = points[first],
					pt2 = points[last],
					dist = pt1.getDistance(pt2) / 3;
				this.addCurve(segments, [pt1, pt1.add(tan1.normalize(dist)),
						pt2.add(tan2.normalize(dist)), pt2]);
				return;
			}
			var uPrime = this.chordLengthParameterize(first, last),
				maxError = Math.max(error, error * error),
				split,
				parametersInOrder = true;
			for (var i = 0; i <= 4; i++) {
				var curve = this.generateBezier(first, last, uPrime, tan1, tan2);
				var max = this.findMaxError(first, last, curve, uPrime);
				if (max.error < error && parametersInOrder) {
					this.addCurve(segments, curve);
					return;
				}
				split = max.index;
				if (max.error >= maxError)
					break;
				parametersInOrder = this.reparameterize(first, last, uPrime, curve);
				maxError = max.error;
			}
			var tanCenter = points[split - 1].subtract(points[split + 1]);
			this.fitCubic(segments, error, first, split, tan1, tanCenter);
			this.fitCubic(segments, error, split, last, tanCenter.negate(), tan2);
		},

		addCurve: function(segments, curve) {
			var prev = segments[segments.length - 1];
			prev.setHandleOut(curve[1].subtract(curve[0]));
			segments.push(new Segment(curve[3], curve[2].subtract(curve[3])));
		},

		generateBezier: function(first, last, uPrime, tan1, tan2) {
			var epsilon = 1e-12,
				abs = Math.abs,
				points = this.points,
				pt1 = points[first],
				pt2 = points[last],
				C = [[0, 0], [0, 0]],
				X = [0, 0];

			for (var i = 0, l = last - first + 1; i < l; i++) {
				var u = uPrime[i],
					t = 1 - u,
					b = 3 * u * t,
					b0 = t * t * t,
					b1 = b * t,
					b2 = b * u,
					b3 = u * u * u,
					a1 = tan1.normalize(b1),
					a2 = tan2.normalize(b2),
					tmp = points[first + i]
						.subtract(pt1.multiply(b0 + b1))
						.subtract(pt2.multiply(b2 + b3));
				C[0][0] += a1.dot(a1);
				C[0][1] += a1.dot(a2);
				C[1][0] = C[0][1];
				C[1][1] += a2.dot(a2);
				X[0] += a1.dot(tmp);
				X[1] += a2.dot(tmp);
			}

			var detC0C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1],
				alpha1, alpha2;
			if (abs(detC0C1) > epsilon) {
				var detC0X = C[0][0] * X[1]    - C[1][0] * X[0],
					detXC1 = X[0]    * C[1][1] - X[1]    * C[0][1];
				alpha1 = detXC1 / detC0C1;
				alpha2 = detC0X / detC0C1;
			} else {
				var c0 = C[0][0] + C[0][1],
					c1 = C[1][0] + C[1][1];
				if (abs(c0) > epsilon) {
					alpha1 = alpha2 = X[0] / c0;
				} else if (abs(c1) > epsilon) {
					alpha1 = alpha2 = X[1] / c1;
				} else {
					alpha1 = alpha2 = 0;
				}
			}

			var segLength = pt2.getDistance(pt1),
				eps = epsilon * segLength,
				handle1,
				handle2;
			if (alpha1 < eps || alpha2 < eps) {
				alpha1 = alpha2 = segLength / 3;
			} else {
				var line = pt2.subtract(pt1);
				handle1 = tan1.normalize(alpha1);
				handle2 = tan2.normalize(alpha2);
				if (handle1.dot(line) - handle2.dot(line) > segLength * segLength) {
					alpha1 = alpha2 = segLength / 3;
					handle1 = handle2 = null;
				}
			}

			return [pt1,
					pt1.add(handle1 || tan1.normalize(alpha1)),
					pt2.add(handle2 || tan2.normalize(alpha2)),
					pt2];
		},

		reparameterize: function(first, last, u, curve) {
			for (var i = first; i <= last; i++) {
				u[i - first] = this.findRoot(curve, this.points[i], u[i - first]);
			}
			for (var i = 1, l = u.length; i < l; i++) {
				if (u[i] <= u[i - 1])
					return false;
			}
			return true;
		},

		findRoot: function(curve, point, u) {
			var curve1 = [],
				curve2 = [];
			for (var i = 0; i <= 2; i++) {
				curve1[i] = curve[i + 1].subtract(curve[i]).multiply(3);
			}
			for (var i = 0; i <= 1; i++) {
				curve2[i] = curve1[i + 1].subtract(curve1[i]).multiply(2);
			}
			var pt = this.evaluate(3, curve, u),
				pt1 = this.evaluate(2, curve1, u),
				pt2 = this.evaluate(1, curve2, u),
				diff = pt.subtract(point),
				df = pt1.dot(pt1) + diff.dot(pt2);
			if (Math.abs(df) < 1e-6)
				return u;
			return u - diff.dot(pt1) / df;
		},

		evaluate: function(degree, curve, t) {
			var tmp = curve.slice();
			for (var i = 1; i <= degree; i++) {
				for (var j = 0; j <= degree - i; j++) {
					tmp[j] = tmp[j].multiply(1 - t).add(tmp[j + 1].multiply(t));
				}
			}
			return tmp[0];
		},

		chordLengthParameterize: function(first, last) {
			var u = [0];
			for (var i = first + 1; i <= last; i++) {
				u[i - first] = u[i - first - 1]
						+ this.points[i].getDistance(this.points[i - 1]);
			}
			for (var i = 1, m = last - first; i <= m; i++) {
				u[i] /= u[m];
			}
			return u;
		},

		findMaxError: function(first, last, curve, u) {
			var index = Math.floor((last - first + 1) / 2),
				maxDist = 0;
			for (var i = first + 1; i < last; i++) {
				var P = this.evaluate(3, curve, u[i - first]);
				var v = P.subtract(this.points[i]);
				var dist = v.x * v.x + v.y * v.y;
				if (dist >= maxDist) {
					maxDist = dist;
					index = i;
				}
			}
			return {
				error: maxDist,
				index: index
			};
		}
	});

	var TextItem = Item.extend({
		_class: 'TextItem',
		_applyMatrix: false,
		_canApplyMatrix: false,
		_serializeFields: {
			content: null
		},
		_boundsOptions: { stroke: false, handle: false },

		initialize: function TextItem(arg) {
			this._content = '';
			this._lines = [];
			var hasProps = arg && Base.isPlainObject(arg)
					&& arg.x === undefined && arg.y === undefined;
			this._initialize(hasProps && arg, !hasProps && Point.read(arguments));
		},

		_equals: function(item) {
			return this._content === item._content;
		},

		copyContent: function(source) {
			this.setContent(source._content);
		},

		getContent: function() {
			return this._content;
		},

		setContent: function(content) {
			this._content = '' + content;
			this._lines = this._content.split(/\r\n|\n|\r/mg);
			this._changed(265);
		},

		isEmpty: function() {
			return !this._content;
		},

		getCharacterStyle: '#getStyle',
		setCharacterStyle: '#setStyle',

		getParagraphStyle: '#getStyle',
		setParagraphStyle: '#setStyle'
	});

	var PointText = TextItem.extend({
		_class: 'PointText',

		initialize: function PointText() {
			TextItem.apply(this, arguments);
		},

		getPoint: function() {
			var point = this._matrix.getTranslation();
			return new LinkedPoint(point.x, point.y, this, 'setPoint');
		},

		setPoint: function() {
			var point = Point.read(arguments);
			this.translate(point.subtract(this._matrix.getTranslation()));
		},

		_draw: function(ctx, param, viewMatrix) {
			if (!this._content)
				return;
			this._setStyles(ctx, param, viewMatrix);
			var lines = this._lines,
				style = this._style,
				hasFill = style.hasFill(),
				hasStroke = style.hasStroke(),
				leading = style.getLeading(),
				shadowColor = ctx.shadowColor;
			ctx.font = style.getFontStyle();
			ctx.textAlign = style.getJustification();
			for (var i = 0, l = lines.length; i < l; i++) {
				ctx.shadowColor = shadowColor;
				var line = lines[i];
				if (hasFill) {
					ctx.fillText(line, 0, 0);
					ctx.shadowColor = 'rgba(0,0,0,0)';
				}
				if (hasStroke)
					ctx.strokeText(line, 0, 0);
				ctx.translate(0, leading);
			}
		},

		_getBounds: function(matrix, options) {
			var style = this._style,
				lines = this._lines,
				numLines = lines.length,
				justification = style.getJustification(),
				leading = style.getLeading(),
				width = this.getView().getTextWidth(style.getFontStyle(), lines),
				x = 0;
			if (justification !== 'left')
				x -= width / (justification === 'center' ? 2: 1);
			var bounds = new Rectangle(x,
						numLines ? - 0.75 * leading : 0,
						width, numLines * leading);
			return matrix ? matrix._transformBounds(bounds, bounds) : bounds;
		}
	});

	var Color = Base.extend(new function() {
		var types = {
			gray: ['gray'],
			rgb: ['red', 'green', 'blue'],
			hsb: ['hue', 'saturation', 'brightness'],
			hsl: ['hue', 'saturation', 'lightness'],
			gradient: ['gradient', 'origin', 'destination', 'highlight']
		};

		var componentParsers = {},
			colorCache = {},
			colorCtx;

		function fromCSS(string) {
			var match = string.match(/^#(\w{1,2})(\w{1,2})(\w{1,2})$/),
				components;
			if (match) {
				components = [0, 0, 0];
				for (var i = 0; i < 3; i++) {
					var value = match[i + 1];
					components[i] = parseInt(value.length == 1
							? value + value : value, 16) / 255;
				}
			} else if (match = string.match(/^rgba?\((.*)\)$/)) {
				components = match[1].split(',');
				for (var i = 0, l = components.length; i < l; i++) {
					var value = +components[i];
					components[i] = i < 3 ? value / 255 : value;
				}
			} else if (window) {
				var cached = colorCache[string];
				if (!cached) {
					if (!colorCtx) {
						colorCtx = CanvasProvider.getContext(1, 1);
						colorCtx.globalCompositeOperation = 'copy';
					}
					colorCtx.fillStyle = 'rgba(0,0,0,0)';
					colorCtx.fillStyle = string;
					colorCtx.fillRect(0, 0, 1, 1);
					var data = colorCtx.getImageData(0, 0, 1, 1).data;
					cached = colorCache[string] = [
						data[0] / 255,
						data[1] / 255,
						data[2] / 255
					];
				}
				components = cached.slice();
			} else {
				components = [0, 0, 0];
			}
			return components;
		}

		var hsbIndices = [
			[0, 3, 1],
			[2, 0, 1],
			[1, 0, 3],
			[1, 2, 0],
			[3, 1, 0],
			[0, 1, 2]
		];

		var converters = {
			'rgb-hsb': function(r, g, b) {
				var max = Math.max(r, g, b),
					min = Math.min(r, g, b),
					delta = max - min,
					h = delta === 0 ? 0
						:   ( max == r ? (g - b) / delta + (g < b ? 6 : 0)
							: max == g ? (b - r) / delta + 2
							:            (r - g) / delta + 4) * 60;
				return [h, max === 0 ? 0 : delta / max, max];
			},

			'hsb-rgb': function(h, s, b) {
				h = (((h / 60) % 6) + 6) % 6;
				var i = Math.floor(h),
					f = h - i,
					i = hsbIndices[i],
					v = [
						b,
						b * (1 - s),
						b * (1 - s * f),
						b * (1 - s * (1 - f))
					];
				return [v[i[0]], v[i[1]], v[i[2]]];
			},

			'rgb-hsl': function(r, g, b) {
				var max = Math.max(r, g, b),
					min = Math.min(r, g, b),
					delta = max - min,
					achromatic = delta === 0,
					h = achromatic ? 0
						:   ( max == r ? (g - b) / delta + (g < b ? 6 : 0)
							: max == g ? (b - r) / delta + 2
							:            (r - g) / delta + 4) * 60,
					l = (max + min) / 2,
					s = achromatic ? 0 : l < 0.5
							? delta / (max + min)
							: delta / (2 - max - min);
				return [h, s, l];
			},

			'hsl-rgb': function(h, s, l) {
				h = (((h / 360) % 1) + 1) % 1;
				if (s === 0)
					return [l, l, l];
				var t3s = [ h + 1 / 3, h, h - 1 / 3 ],
					t2 = l < 0.5 ? l * (1 + s) : l + s - l * s,
					t1 = 2 * l - t2,
					c = [];
				for (var i = 0; i < 3; i++) {
					var t3 = t3s[i];
					if (t3 < 0) t3 += 1;
					if (t3 > 1) t3 -= 1;
					c[i] = 6 * t3 < 1
						? t1 + (t2 - t1) * 6 * t3
						: 2 * t3 < 1
							? t2
							: 3 * t3 < 2
								? t1 + (t2 - t1) * ((2 / 3) - t3) * 6
								: t1;
				}
				return c;
			},

			'rgb-gray': function(r, g, b) {
				return [r * 0.2989 + g * 0.587 + b * 0.114];
			},

			'gray-rgb': function(g) {
				return [g, g, g];
			},

			'gray-hsb': function(g) {
				return [0, 0, g];
			},

			'gray-hsl': function(g) {
				return [0, 0, g];
			},

			'gradient-rgb': function() {
				return [];
			},

			'rgb-gradient': function() {
				return [];
			}

		};

		return Base.each(types, function(properties, type) {
			componentParsers[type] = [];
			Base.each(properties, function(name, index) {
				var part = Base.capitalize(name),
					hasOverlap = /^(hue|saturation)$/.test(name),
					parser = componentParsers[type][index] = name === 'gradient'
						? function(value) {
							var current = this._components[0];
							value = Gradient.read(Array.isArray(value) ? value
									: arguments, 0, { readNull: true });
							if (current !== value) {
								if (current)
									current._removeOwner(this);
								if (value)
									value._addOwner(this);
							}
							return value;
						}
						: type === 'gradient'
							? function() {
								return Point.read(arguments, 0, {
										readNull: name === 'highlight',
										clone: true
								});
							}
							: function(value) {
								return value == null || isNaN(value) ? 0 : value;
							};

				this['get' + part] = function() {
					return this._type === type
						|| hasOverlap && /^hs[bl]$/.test(this._type)
							? this._components[index]
							: this._convert(type)[index];
				};

				this['set' + part] = function(value) {
					if (this._type !== type
							&& !(hasOverlap && /^hs[bl]$/.test(this._type))) {
						this._components = this._convert(type);
						this._properties = types[type];
						this._type = type;
					}
					this._components[index] = parser.call(this, value);
					this._changed();
				};
			}, this);
		}, {
			_class: 'Color',
			_readIndex: true,

			initialize: function Color(arg) {
				var slice = Array.prototype.slice,
					args = arguments,
					reading = this.__read,
					read = 0,
					type,
					components,
					alpha,
					values;
				if (Array.isArray(arg)) {
					args = arg;
					arg = args[0];
				}
				var argType = arg != null && typeof arg;
				if (argType === 'string' && arg in types) {
					type = arg;
					arg = args[1];
					if (Array.isArray(arg)) {
						components = arg;
						alpha = args[2];
					} else {
						if (reading)
							read = 1;
						args = slice.call(args, 1);
						argType = typeof arg;
					}
				}
				if (!components) {
					values = argType === 'number'
							? args
							: argType === 'object' && arg.length != null
								? arg
								: null;
					if (values) {
						if (!type)
							type = values.length >= 3
									? 'rgb'
									: 'gray';
						var length = types[type].length;
						alpha = values[length];
						if (reading) {
							read += values === arguments
								? length + (alpha != null ? 1 : 0)
								: 1;
						}
						if (values.length > length)
							values = slice.call(values, 0, length);
					} else if (argType === 'string') {
						type = 'rgb';
						components = fromCSS(arg);
						if (components.length === 4) {
							alpha = components[3];
							components.length--;
						}
					} else if (argType === 'object') {
						if (arg.constructor === Color) {
							type = arg._type;
							components = arg._components.slice();
							alpha = arg._alpha;
							if (type === 'gradient') {
								for (var i = 1, l = components.length; i < l; i++) {
									var point = components[i];
									if (point)
										components[i] = point.clone();
								}
							}
						} else if (arg.constructor === Gradient) {
							type = 'gradient';
							values = args;
						} else {
							type = 'hue' in arg
								? 'lightness' in arg
									? 'hsl'
									: 'hsb'
								: 'gradient' in arg || 'stops' in arg
										|| 'radial' in arg
									? 'gradient'
									: 'gray' in arg
										? 'gray'
										: 'rgb';
							var properties = types[type],
								parsers = componentParsers[type];
							this._components = components = [];
							for (var i = 0, l = properties.length; i < l; i++) {
								var value = arg[properties[i]];
								if (value == null && i === 0 && type === 'gradient'
										&& 'stops' in arg) {
									value = {
										stops: arg.stops,
										radial: arg.radial
									};
								}
								value = parsers[i].call(this, value);
								if (value != null)
									components[i] = value;
							}
							alpha = arg.alpha;
						}
					}
					if (reading && type)
						read = 1;
				}
				this._type = type || 'rgb';
				if (!components) {
					this._components = components = [];
					var parsers = componentParsers[this._type];
					for (var i = 0, l = parsers.length; i < l; i++) {
						var value = parsers[i].call(this, values && values[i]);
						if (value != null)
							components[i] = value;
					}
				}
				this._components = components;
				this._properties = types[this._type];
				this._alpha = alpha;
				if (reading)
					this.__read = read;
			},

			_set: '#initialize',

			_serialize: function(options, dictionary) {
				var components = this.getComponents();
				return Base.serialize(
						/^(gray|rgb)$/.test(this._type)
							? components
							: [this._type].concat(components),
						options, true, dictionary);
			},

			_changed: function() {
				this._canvasStyle = null;
				if (this._owner)
					this._owner._changed(65);
			},

			_convert: function(type) {
				var converter;
				return this._type === type
						? this._components.slice()
						: (converter = converters[this._type + '-' + type])
							? converter.apply(this, this._components)
							: converters['rgb-' + type].apply(this,
								converters[this._type + '-rgb'].apply(this,
									this._components));
			},

			convert: function(type) {
				return new Color(type, this._convert(type), this._alpha);
			},

			getType: function() {
				return this._type;
			},

			setType: function(type) {
				this._components = this._convert(type);
				this._properties = types[type];
				this._type = type;
			},

			getComponents: function() {
				var components = this._components.slice();
				if (this._alpha != null)
					components.push(this._alpha);
				return components;
			},

			getAlpha: function() {
				return this._alpha != null ? this._alpha : 1;
			},

			setAlpha: function(alpha) {
				this._alpha = alpha == null ? null : Math.min(Math.max(alpha, 0), 1);
				this._changed();
			},

			hasAlpha: function() {
				return this._alpha != null;
			},

			equals: function(color) {
				var col = Base.isPlainValue(color, true)
						? Color.read(arguments)
						: color;
				return col === this || col && this._class === col._class
						&& this._type === col._type
						&& this._alpha === col._alpha
						&& Base.equals(this._components, col._components)
						|| false;
			},

			toString: function() {
				var properties = this._properties,
					parts = [],
					isGradient = this._type === 'gradient',
					f = Formatter.instance;
				for (var i = 0, l = properties.length; i < l; i++) {
					var value = this._components[i];
					if (value != null)
						parts.push(properties[i] + ': '
								+ (isGradient ? value : f.number(value)));
				}
				if (this._alpha != null)
					parts.push('alpha: ' + f.number(this._alpha));
				return '{ ' + parts.join(', ') + ' }';
			},

			toCSS: function(hex) {
				var components = this._convert('rgb'),
					alpha = hex || this._alpha == null ? 1 : this._alpha;
				function convert(val) {
					return Math.round((val < 0 ? 0 : val > 1 ? 1 : val) * 255);
				}
				components = [
					convert(components[0]),
					convert(components[1]),
					convert(components[2])
				];
				if (alpha < 1)
					components.push(alpha < 0 ? 0 : alpha);
				return hex
						? '#' + ((1 << 24) + (components[0] << 16)
							+ (components[1] << 8)
							+ components[2]).toString(16).slice(1)
						: (components.length == 4 ? 'rgba(' : 'rgb(')
							+ components.join(',') + ')';
			},

			toCanvasStyle: function(ctx) {
				if (this._canvasStyle)
					return this._canvasStyle;
				if (this._type !== 'gradient')
					return this._canvasStyle = this.toCSS();
				var components = this._components,
					gradient = components[0],
					stops = gradient._stops,
					origin = components[1],
					destination = components[2],
					canvasGradient;
				if (gradient._radial) {
					var radius = destination.getDistance(origin),
						highlight = components[3];
					if (highlight) {
						var vector = highlight.subtract(origin);
						if (vector.getLength() > radius)
							highlight = origin.add(vector.normalize(radius - 0.1));
					}
					var start = highlight || origin;
					canvasGradient = ctx.createRadialGradient(start.x, start.y,
							0, origin.x, origin.y, radius);
				} else {
					canvasGradient = ctx.createLinearGradient(origin.x, origin.y,
							destination.x, destination.y);
				}
				for (var i = 0, l = stops.length; i < l; i++) {
					var stop = stops[i];
					canvasGradient.addColorStop(stop._offset || i / (l - 1),
							stop._color.toCanvasStyle());
				}
				return this._canvasStyle = canvasGradient;
			},

			transform: function(matrix) {
				if (this._type === 'gradient') {
					var components = this._components;
					for (var i = 1, l = components.length; i < l; i++) {
						var point = components[i];
						matrix._transformPoint(point, point, true);
					}
					this._changed();
				}
			},

			statics: {
				_types: types,

				random: function() {
					var random = Math.random;
					return new Color(random(), random(), random());
				}
			}
		});
	},
	new function() {
		var operators = {
			add: function(a, b) {
				return a + b;
			},

			subtract: function(a, b) {
				return a - b;
			},

			multiply: function(a, b) {
				return a * b;
			},

			divide: function(a, b) {
				return a / b;
			}
		};

		return Base.each(operators, function(operator, name) {
			this[name] = function(color) {
				color = Color.read(arguments);
				var type = this._type,
					components1 = this._components,
					components2 = color._convert(type);
				for (var i = 0, l = components1.length; i < l; i++)
					components2[i] = operator(components1[i], components2[i]);
				return new Color(type, components2,
						this._alpha != null
								? operator(this._alpha, color.getAlpha())
								: null);
			};
		}, {
		});
	});

	var Gradient = Base.extend({
		_class: 'Gradient',

		initialize: function Gradient(stops, radial) {
			this._id = UID.get();
			if (stops && this._set(stops))
				stops = radial = null;
			if (!this._stops)
				this.setStops(stops || ['white', 'black']);
			if (this._radial == null) {
				this.setRadial(typeof radial === 'string' && radial === 'radial'
						|| radial || false);
			}
		},

		_serialize: function(options, dictionary) {
			return dictionary.add(this, function() {
				return Base.serialize([this._stops, this._radial],
						options, true, dictionary);
			});
		},

		_changed: function() {
			for (var i = 0, l = this._owners && this._owners.length; i < l; i++) {
				this._owners[i]._changed();
			}
		},

		_addOwner: function(color) {
			if (!this._owners)
				this._owners = [];
			this._owners.push(color);
		},

		_removeOwner: function(color) {
			var index = this._owners ? this._owners.indexOf(color) : -1;
			if (index != -1) {
				this._owners.splice(index, 1);
				if (this._owners.length === 0)
					this._owners = undefined;
			}
		},

		clone: function() {
			var stops = [];
			for (var i = 0, l = this._stops.length; i < l; i++) {
				stops[i] = this._stops[i].clone();
			}
			return new Gradient(stops, this._radial);
		},

		getStops: function() {
			return this._stops;
		},

		setStops: function(stops) {
			if (stops.length < 2) {
				throw new Error(
						'Gradient stop list needs to contain at least two stops.');
			}
			var _stops = this._stops;
			if (_stops) {
				for (var i = 0, l = _stops.length; i < l; i++)
					_stops[i]._owner = undefined;
			}
			_stops = this._stops = GradientStop.readAll(stops, 0, { clone: true });
			for (var i = 0, l = _stops.length; i < l; i++)
				_stops[i]._owner = this;
			this._changed();
		},

		getRadial: function() {
			return this._radial;
		},

		setRadial: function(radial) {
			this._radial = radial;
			this._changed();
		},

		equals: function(gradient) {
			if (gradient === this)
				return true;
			if (gradient && this._class === gradient._class) {
				var stops1 = this._stops,
					stops2 = gradient._stops,
					length = stops1.length;
				if (length === stops2.length) {
					for (var i = 0; i < length; i++) {
						if (!stops1[i].equals(stops2[i]))
							return false;
					}
					return true;
				}
			}
			return false;
		}
	});

	var GradientStop = Base.extend({
		_class: 'GradientStop',

		initialize: function GradientStop(arg0, arg1) {
			var color = arg0,
				offset = arg1;
			if (typeof arg0 === 'object' && arg1 === undefined) {
				if (Array.isArray(arg0) && typeof arg0[0] !== 'number') {
					color = arg0[0];
					offset = arg0[1];
				} else if ('color' in arg0 || 'offset' in arg0
						|| 'rampPoint' in arg0) {
					color = arg0.color;
					offset = arg0.offset || arg0.rampPoint || 0;
				}
			}
			this.setColor(color);
			this.setOffset(offset);
		},

		clone: function() {
			return new GradientStop(this._color.clone(), this._offset);
		},

		_serialize: function(options, dictionary) {
			var color = this._color,
				offset = this._offset;
			return Base.serialize(offset == null ? [color] : [color, offset],
					options, true, dictionary);
		},

		_changed: function() {
			if (this._owner)
				this._owner._changed(65);
		},

		getOffset: function() {
			return this._offset;
		},

		setOffset: function(offset) {
			this._offset = offset;
			this._changed();
		},

		getRampPoint: '#getOffset',
		setRampPoint: '#setOffset',

		getColor: function() {
			return this._color;
		},

		setColor: function() {
			var color = Color.read(arguments, 0, { clone: true });
			if (color)
				color._owner = this;
			this._color = color;
			this._changed();
		},

		equals: function(stop) {
			return stop === this || stop && this._class === stop._class
					&& this._color.equals(stop._color)
					&& this._offset == stop._offset
					|| false;
		}
	});

	var Style = Base.extend(new function() {
		var itemDefaults = {
			fillColor: null,
			fillRule: 'nonzero',
			strokeColor: null,
			strokeWidth: 1,
			strokeCap: 'butt',
			strokeJoin: 'miter',
			strokeScaling: true,
			miterLimit: 10,
			dashOffset: 0,
			dashArray: [],
			shadowColor: null,
			shadowBlur: 0,
			shadowOffset: new Point(),
			selectedColor: null
		},
		groupDefaults = Base.set({}, itemDefaults, {
			fontFamily: 'sans-serif',
			fontWeight: 'normal',
			fontSize: 12,
			leading: null,
			justification: 'left'
		}),
		textDefaults = Base.set({}, groupDefaults, {
			fillColor: new Color()
		}),
		flags = {
			strokeWidth: 97,
			strokeCap: 97,
			strokeJoin: 97,
			strokeScaling: 105,
			miterLimit: 97,
			fontFamily: 9,
			fontWeight: 9,
			fontSize: 9,
			font: 9,
			leading: 9,
			justification: 9
		},
		item = {
			beans: true
		},
		fields = {
			_class: 'Style',
			beans: true,

			initialize: function Style(style, owner, project) {
				this._values = {};
				this._owner = owner;
				this._project = owner && owner._project || project || paper.project;
				this._defaults = !owner || owner instanceof Group ? groupDefaults
						: owner instanceof TextItem ? textDefaults
						: itemDefaults;
				if (style)
					this.set(style);
			}
		};

		Base.each(groupDefaults, function(value, key) {
			var isColor = /Color$/.test(key),
				isPoint = key === 'shadowOffset',
				part = Base.capitalize(key),
				flag = flags[key],
				set = 'set' + part,
				get = 'get' + part;

			fields[set] = function(value) {
				var owner = this._owner,
					children = owner && owner._children;
				if (children && children.length > 0
						&& !(owner instanceof CompoundPath)) {
					for (var i = 0, l = children.length; i < l; i++)
						children[i]._style[set](value);
				} else if (key in this._defaults) {
					var old = this._values[key];
					if (old !== value) {
						if (isColor) {
							if (old && old._owner !== undefined)
								old._owner = undefined;
							if (value && value.constructor === Color) {
								if (value._owner)
									value = value.clone();
								value._owner = owner;
							}
						}
						this._values[key] = value;
						if (owner)
							owner._changed(flag || 65);
					}
				}
			};

			fields[get] = function(_dontMerge) {
				var owner = this._owner,
					children = owner && owner._children,
					value;
				if (key in this._defaults && (!children || children.length === 0
						|| _dontMerge || owner instanceof CompoundPath)) {
					var value = this._values[key];
					if (value === undefined) {
						value = this._defaults[key];
						if (value && value.clone)
							value = value.clone();
					} else {
						var ctor = isColor ? Color : isPoint ? Point : null;
						if (ctor && !(value && value.constructor === ctor)) {
							this._values[key] = value = ctor.read([value], 0,
									{ readNull: true, clone: true });
							if (value && isColor)
								value._owner = owner;
						}
					}
				} else if (children) {
					for (var i = 0, l = children.length; i < l; i++) {
						var childValue = children[i]._style[get]();
						if (i === 0) {
							value = childValue;
						} else if (!Base.equals(value, childValue)) {
							return undefined;
						}
					}
				}
				return value;
			};

			item[get] = function(_dontMerge) {
				return this._style[get](_dontMerge);
			};

			item[set] = function(value) {
				this._style[set](value);
			};
		});

		Base.each({
			Font: 'FontFamily',
			WindingRule: 'FillRule'
		}, function(value, key) {
			var get = 'get' + key,
				set = 'set' + key;
			fields[get] = item[get] = '#get' + value;
			fields[set] = item[set] = '#set' + value;
		});

		Item.inject(item);
		return fields;
	}, {
		set: function(style) {
			var isStyle = style instanceof Style,
				values = isStyle ? style._values : style;
			if (values) {
				for (var key in values) {
					if (key in this._defaults) {
						var value = values[key];
						this[key] = value && isStyle && value.clone
								? value.clone() : value;
					}
				}
			}
		},

		equals: function(style) {
			return style === this || style && this._class === style._class
					&& Base.equals(this._values, style._values)
					|| false;
		},

		hasFill: function() {
			var color = this.getFillColor();
			return !!color && color.alpha > 0;
		},

		hasStroke: function() {
			var color = this.getStrokeColor();
			return !!color && color.alpha > 0 && this.getStrokeWidth() > 0;
		},

		hasShadow: function() {
			var color = this.getShadowColor();
			return !!color && color.alpha > 0 && (this.getShadowBlur() > 0
					|| !this.getShadowOffset().isZero());
		},

		getView: function() {
			return this._project._view;
		},

		getFontStyle: function() {
			var fontSize = this.getFontSize();
			return this.getFontWeight()
					+ ' ' + fontSize + (/[a-z]/i.test(fontSize + '') ? ' ' : 'px ')
					+ this.getFontFamily();
		},

		getFont: '#getFontFamily',
		setFont: '#setFontFamily',

		getLeading: function getLeading() {
			var leading = getLeading.base.call(this),
				fontSize = this.getFontSize();
			if (/pt|em|%|px/.test(fontSize))
				fontSize = this.getView().getPixelSize(fontSize);
			return leading != null ? leading : fontSize * 1.2;
		}

	});

	var DomElement = new function() {
		function handlePrefix(el, name, set, value) {
			var prefixes = ['', 'webkit', 'moz', 'Moz', 'ms', 'o'],
				suffix = name[0].toUpperCase() + name.substring(1);
			for (var i = 0; i < 6; i++) {
				var prefix = prefixes[i],
					key = prefix ? prefix + suffix : name;
				if (key in el) {
					if (set) {
						el[key] = value;
					} else {
						return el[key];
					}
					break;
				}
			}
		}

		return {
			getStyles: function(el) {
				var doc = el && el.nodeType !== 9 ? el.ownerDocument : el,
					view = doc && doc.defaultView;
				return view && view.getComputedStyle(el, '');
			},

			getBounds: function(el, viewport) {
				var doc = el.ownerDocument,
					body = doc.body,
					html = doc.documentElement,
					rect;
				try {
					rect = el.getBoundingClientRect();
				} catch (e) {
					rect = { left: 0, top: 0, width: 0, height: 0 };
				}
				var x = rect.left - (html.clientLeft || body.clientLeft || 0),
					y = rect.top - (html.clientTop || body.clientTop || 0);
				if (!viewport) {
					var view = doc.defaultView;
					x += view.pageXOffset || html.scrollLeft || body.scrollLeft;
					y += view.pageYOffset || html.scrollTop || body.scrollTop;
				}
				return new Rectangle(x, y, rect.width, rect.height);
			},

			getViewportBounds: function(el) {
				var doc = el.ownerDocument,
					view = doc.defaultView,
					html = doc.documentElement;
				return new Rectangle(0, 0,
					view.innerWidth || html.clientWidth,
					view.innerHeight || html.clientHeight
				);
			},

			getOffset: function(el, viewport) {
				return DomElement.getBounds(el, viewport).getPoint();
			},

			getSize: function(el) {
				return DomElement.getBounds(el, true).getSize();
			},

			isInvisible: function(el) {
				return DomElement.getSize(el).equals(new Size(0, 0));
			},

			isInView: function(el) {
				return !DomElement.isInvisible(el)
						&& DomElement.getViewportBounds(el).intersects(
							DomElement.getBounds(el, true));
			},

			isInserted: function(el) {
				return document.body.contains(el);
			},

			getPrefixed: function(el, name) {
				return el && handlePrefix(el, name);
			},

			setPrefixed: function(el, name, value) {
				if (typeof name === 'object') {
					for (var key in name)
						handlePrefix(el, key, true, name[key]);
				} else {
					handlePrefix(el, name, true, value);
				}
			}
		};
	};

	var DomEvent = {
		add: function(el, events) {
			if (el) {
				for (var type in events) {
					var func = events[type],
						parts = type.split(/[\s,]+/g);
					for (var i = 0, l = parts.length; i < l; i++)
						el.addEventListener(parts[i], func, false);
				}
			}
		},

		remove: function(el, events) {
			if (el) {
				for (var type in events) {
					var func = events[type],
						parts = type.split(/[\s,]+/g);
					for (var i = 0, l = parts.length; i < l; i++)
						el.removeEventListener(parts[i], func, false);
				}
			}
		},

		getPoint: function(event) {
			var pos = event.targetTouches
					? event.targetTouches.length
						? event.targetTouches[0]
						: event.changedTouches[0]
					: event;
			return new Point(
				pos.pageX || pos.clientX + document.documentElement.scrollLeft,
				pos.pageY || pos.clientY + document.documentElement.scrollTop
			);
		},

		getTarget: function(event) {
			return event.target || event.srcElement;
		},

		getRelatedTarget: function(event) {
			return event.relatedTarget || event.toElement;
		},

		getOffset: function(event, target) {
			return DomEvent.getPoint(event).subtract(DomElement.getOffset(
					target || DomEvent.getTarget(event)));
		}
	};

	DomEvent.requestAnimationFrame = new function() {
		var nativeRequest = DomElement.getPrefixed(window, 'requestAnimationFrame'),
			requested = false,
			callbacks = [],
			timer;

		function handleCallbacks() {
			var functions = callbacks;
			callbacks = [];
			for (var i = 0, l = functions.length; i < l; i++)
				functions[i]();
			requested = nativeRequest && callbacks.length;
			if (requested)
				nativeRequest(handleCallbacks);
		}

		return function(callback) {
			callbacks.push(callback);
			if (nativeRequest) {
				if (!requested) {
					nativeRequest(handleCallbacks);
					requested = true;
				}
			} else if (!timer) {
				timer = setInterval(handleCallbacks, 1000 / 60);
			}
		};
	};

	var View = Base.extend(Emitter, {
		_class: 'View',

		initialize: function View(project, element) {

			function getSize(name) {
				return element[name] || parseInt(element.getAttribute(name), 10);
			}

			function getCanvasSize() {
				var size = DomElement.getSize(element);
				return size.isNaN() || size.isZero()
						? new Size(getSize('width'), getSize('height'))
						: size;
			}

			var size;
			if (window && element) {
				this._id = element.getAttribute('id');
				if (this._id == null)
					element.setAttribute('id', this._id = 'view-' + View._id++);
				DomEvent.add(element, this._viewEvents);
				var none = 'none';
				DomElement.setPrefixed(element.style, {
					userDrag: none,
					userSelect: none,
					touchCallout: none,
					contentZooming: none,
					tapHighlightColor: 'rgba(0,0,0,0)'
				});

				if (PaperScope.hasAttribute(element, 'resize')) {
					var that = this;
					DomEvent.add(window, this._windowEvents = {
						resize: function() {
							that.setViewSize(getCanvasSize());
						}
					});
				}

				size = getCanvasSize();

				if (PaperScope.hasAttribute(element, 'stats')
						&& typeof Stats !== 'undefined') {
					this._stats = new Stats();
					var stats = this._stats.domElement,
						style = stats.style,
						offset = DomElement.getOffset(element);
					style.position = 'absolute';
					style.left = offset.x + 'px';
					style.top = offset.y + 'px';
					document.body.appendChild(stats);
				}
			} else {
				size = new Size(element);
				element = null;
			}
			this._project = project;
			this._scope = project._scope;
			this._element = element;
			if (!this._pixelRatio)
				this._pixelRatio = window && window.devicePixelRatio || 1;
			this._setElementSize(size.width, size.height);
			this._viewSize = size;
			View._views.push(this);
			View._viewsById[this._id] = this;
			(this._matrix = new Matrix())._owner = this;
			this._zoom = 1;
			if (!View._focused)
				View._focused = this;
			this._frameItems = {};
			this._frameItemCount = 0;
			this._itemEvents = { native: {}, virtual: {} };
			this._autoUpdate = !paper.agent.node;
			this._needsUpdate = false;
		},

		remove: function() {
			if (!this._project)
				return false;
			if (View._focused === this)
				View._focused = null;
			View._views.splice(View._views.indexOf(this), 1);
			delete View._viewsById[this._id];
			var project = this._project;
			if (project._view === this)
				project._view = null;
			DomEvent.remove(this._element, this._viewEvents);
			DomEvent.remove(window, this._windowEvents);
			this._element = this._project = null;
			this.off('frame');
			this._animate = false;
			this._frameItems = {};
			return true;
		},

		_events: Base.each(
			Item._itemHandlers.concat(['onResize', 'onKeyDown', 'onKeyUp']),
			function(name) {
				this[name] = {};
			}, {
				onFrame: {
					install: function() {
						this.play();
					},

					uninstall: function() {
						this.pause();
					}
				}
			}
		),

		_animate: false,
		_time: 0,
		_count: 0,

		getAutoUpdate: function() {
			return this._autoUpdate;
		},

		setAutoUpdate: function(autoUpdate) {
			this._autoUpdate = autoUpdate;
			if (autoUpdate)
				this.requestUpdate();
		},

		update: function() {
		},

		draw: function() {
			this.update();
		},

		requestUpdate: function() {
			if (!this._requested) {
				var that = this;
				DomEvent.requestAnimationFrame(function() {
					that._requested = false;
					if (that._animate) {
						that.requestUpdate();
						var element = that._element;
						if ((!DomElement.getPrefixed(document, 'hidden')
								|| PaperScope.getAttribute(element, 'keepalive')
									=== 'true') && DomElement.isInView(element)) {
							that._handleFrame();
						}
					}
					if (that._autoUpdate)
						that.update();
				});
				this._requested = true;
			}
		},

		play: function() {
			this._animate = true;
			this.requestUpdate();
		},

		pause: function() {
			this._animate = false;
		},

		_handleFrame: function() {
			paper = this._scope;
			var now = Date.now() / 1000,
				delta = this._last ? now - this._last : 0;
			this._last = now;
			this.emit('frame', new Base({
				delta: delta,
				time: this._time += delta,
				count: this._count++
			}));
			if (this._stats)
				this._stats.update();
		},

		_animateItem: function(item, animate) {
			var items = this._frameItems;
			if (animate) {
				items[item._id] = {
					item: item,
					time: 0,
					count: 0
				};
				if (++this._frameItemCount === 1)
					this.on('frame', this._handleFrameItems);
			} else {
				delete items[item._id];
				if (--this._frameItemCount === 0) {
					this.off('frame', this._handleFrameItems);
				}
			}
		},

		_handleFrameItems: function(event) {
			for (var i in this._frameItems) {
				var entry = this._frameItems[i];
				entry.item.emit('frame', new Base(event, {
					time: entry.time += event.delta,
					count: entry.count++
				}));
			}
		},

		_changed: function() {
			this._project._changed(2049);
			this._bounds = null;
		},

		getElement: function() {
			return this._element;
		},

		getPixelRatio: function() {
			return this._pixelRatio;
		},

		getResolution: function() {
			return this._pixelRatio * 72;
		},

		getViewSize: function() {
			var size = this._viewSize;
			return new LinkedSize(size.width, size.height, this, 'setViewSize');
		},

		setViewSize: function() {
			var size = Size.read(arguments),
				width = size.width,
				height = size.height,
				delta = size.subtract(this._viewSize);
			if (delta.isZero())
				return;
			this._setElementSize(width, height);
			this._viewSize.set(width, height);
			this.emit('resize', {
				size: size,
				delta: delta
			});
			this._changed();
			if (this._autoUpdate)
				this.requestUpdate();
		},

		_setElementSize: function(width, height) {
			var element = this._element;
			if (element) {
				if (element.width !== width)
					element.width = width;
				if (element.height !== height)
					element.height = height;
			}
		},

		getBounds: function() {
			if (!this._bounds)
				this._bounds = this._matrix.inverted()._transformBounds(
						new Rectangle(new Point(), this._viewSize));
			return this._bounds;
		},

		getSize: function() {
			return this.getBounds().getSize();
		},

		getCenter: function() {
			return this.getBounds().getCenter();
		},

		setCenter: function() {
			var center = Point.read(arguments);
			this.translate(this.getCenter().subtract(center));
		},

		getZoom: function() {
			return this._zoom;
		},

		setZoom: function(zoom) {
			this.transform(new Matrix().scale(zoom / this._zoom,
				this.getCenter()));
			this._zoom = zoom;
		},

		getMatrix: function() {
			return this._matrix;
		},

		setMatrix: function() {
			var matrix = this._matrix;
			matrix.initialize.apply(matrix, arguments);
		},

		isVisible: function() {
			return DomElement.isInView(this._element);
		},

		isInserted: function() {
			return DomElement.isInserted(this._element);
		},

		getPixelSize: function(size) {
			var element = this._element,
				pixels;
			if (element) {
				var parent = element.parentNode,
					temp = document.createElement('div');
				temp.style.fontSize = size;
				parent.appendChild(temp);
				pixels = parseFloat(DomElement.getStyles(temp).fontSize);
				parent.removeChild(temp);
			} else {
				pixels = parseFloat(pixels);
			}
			return pixels;
		},

		getTextWidth: function(font, lines) {
			return 0;
		}
	}, Base.each(['rotate', 'scale', 'shear', 'skew'], function(key) {
		var rotate = key === 'rotate';
		this[key] = function() {
			var value = (rotate ? Base : Point).read(arguments),
				center = Point.read(arguments, 0, { readNull: true });
			return this.transform(new Matrix()[key](value,
					center || this.getCenter(true)));
		};
	}, {
		translate: function() {
			var mx = new Matrix();
			return this.transform(mx.translate.apply(mx, arguments));
		},

		transform: function(matrix) {
			this._matrix.append(matrix);
		},

		scrollBy: function() {
			this.translate(Point.read(arguments).negate());
		}
	}), {

		projectToView: function() {
			return this._matrix._transformPoint(Point.read(arguments));
		},

		viewToProject: function() {
			return this._matrix._inverseTransform(Point.read(arguments));
		},

		getEventPoint: function(event) {
			return this.viewToProject(DomEvent.getOffset(event, this._element));
		},

	}, {
		statics: {
			_views: [],
			_viewsById: {},
			_id: 0,

			create: function(project, element) {
				if (document && typeof element === 'string')
					element = document.getElementById(element);
				var ctor = window ? CanvasView : View;
				return new ctor(project, element);
			}
		}
	},
	new function() {
		if (!window)
			return;
		var prevFocus,
			tempFocus,
			dragging = false,
			mouseDown = false;

		function getView(event) {
			var target = DomEvent.getTarget(event);
			return target.getAttribute && View._viewsById[
					target.getAttribute('id')];
		}

		function updateFocus() {
			var view = View._focused;
			if (!view || !view.isVisible()) {
				for (var i = 0, l = View._views.length; i < l; i++) {
					if ((view = View._views[i]).isVisible()) {
						View._focused = tempFocus = view;
						break;
					}
				}
			}
		}

		function handleMouseMove(view, event, point) {
			view._handleMouseEvent('mousemove', event, point);
		}

		var navigator = window.navigator,
			mousedown, mousemove, mouseup;
		if (navigator.pointerEnabled || navigator.msPointerEnabled) {
			mousedown = 'pointerdown MSPointerDown';
			mousemove = 'pointermove MSPointerMove';
			mouseup = 'pointerup pointercancel MSPointerUp MSPointerCancel';
		} else {
			mousedown = 'touchstart';
			mousemove = 'touchmove';
			mouseup = 'touchend touchcancel';
			if (!('ontouchstart' in window && navigator.userAgent.match(
					/mobile|tablet|ip(ad|hone|od)|android|silk/i))) {
				mousedown += ' mousedown';
				mousemove += ' mousemove';
				mouseup += ' mouseup';
			}
		}

		var viewEvents = {},
			docEvents = {
				mouseout: function(event) {
					var view = View._focused,
						target = DomEvent.getRelatedTarget(event);
					if (view && (!target || target.nodeName === 'HTML')) {
						var offset = DomEvent.getOffset(event, view._element),
							x = offset.x,
							abs = Math.abs,
							ax = abs(x),
							max = 1 << 25,
							diff = ax - max;
						offset.x = abs(diff) < ax ? diff * (x < 0 ? -1 : 1) : x;
						handleMouseMove(view, event, view.viewToProject(offset));
					}
				},

				scroll: updateFocus
			};

		viewEvents[mousedown] = function(event) {
			var view = View._focused = getView(event);
			if (!dragging) {
				dragging = true;
				view._handleMouseEvent('mousedown', event);
			}
		};

		docEvents[mousemove] = function(event) {
			var view = View._focused;
			if (!mouseDown) {
				var target = getView(event);
				if (target) {
					if (view !== target) {
						if (view)
							handleMouseMove(view, event);
						if (!prevFocus)
							prevFocus = view;
						view = View._focused = tempFocus = target;
					}
				} else if (tempFocus && tempFocus === view) {
					if (prevFocus && !prevFocus.isInserted())
						prevFocus = null;
					view = View._focused = prevFocus;
					prevFocus = null;
					updateFocus();
				}
			}
			if (view)
				handleMouseMove(view, event);
		};

		docEvents[mousedown] = function() {
			mouseDown = true;
		};

		docEvents[mouseup] = function(event) {
			var view = View._focused;
			if (view && dragging)
				view._handleMouseEvent('mouseup', event);
			mouseDown = dragging = false;
		};

		DomEvent.add(document, docEvents);

		DomEvent.add(window, {
			load: updateFocus
		});

		var called = false,
			prevented = false,
			fallbacks = {
				doubleclick: 'click',
				mousedrag: 'mousemove'
			},
			wasInView = false,
			overView,
			downPoint,
			lastPoint,
			downItem,
			overItem,
			dragItem,
			clickItem,
			clickTime,
			dblClick;

		function emitMouseEvent(obj, target, type, event, point, prevPoint,
				stopItem) {
			var stopped = false,
				mouseEvent;

			function emit(obj, type) {
				if (obj.responds(type)) {
					if (!mouseEvent) {
						mouseEvent = new MouseEvent(type, event, point,
								target || obj,
								prevPoint ? point.subtract(prevPoint) : null);
					}
					if (obj.emit(type, mouseEvent)) {
						called = true;
						if (mouseEvent.prevented)
							prevented = true;
						if (mouseEvent.stopped)
							return stopped = true;
					}
				} else {
					var fallback = fallbacks[type];
					if (fallback)
						return emit(obj, fallback);
				}
			}

			while (obj && obj !== stopItem) {
				if (emit(obj, type))
					break;
				obj = obj._parent;
			}
			return stopped;
		}

		function emitMouseEvents(view, hitItem, type, event, point, prevPoint) {
			view._project.removeOn(type);
			prevented = called = false;
			return (dragItem && emitMouseEvent(dragItem, null, type, event,
						point, prevPoint)
				|| hitItem && hitItem !== dragItem
					&& !hitItem.isDescendant(dragItem)
					&& emitMouseEvent(hitItem, null, fallbacks[type] || type, event,
						point, prevPoint, dragItem)
				|| emitMouseEvent(view, dragItem || hitItem || view, type, event,
						point, prevPoint));
		}

		var itemEventsMap = {
			mousedown: {
				mousedown: 1,
				mousedrag: 1,
				click: 1,
				doubleclick: 1
			},
			mouseup: {
				mouseup: 1,
				mousedrag: 1,
				click: 1,
				doubleclick: 1
			},
			mousemove: {
				mousedrag: 1,
				mousemove: 1,
				mouseenter: 1,
				mouseleave: 1
			}
		};

		return {
			_viewEvents: viewEvents,

			_handleMouseEvent: function(type, event, point) {
				var itemEvents = this._itemEvents,
					hitItems = itemEvents.native[type],
					nativeMove = type === 'mousemove',
					tool = this._scope.tool,
					view = this;

				function responds(type) {
					return itemEvents.virtual[type] || view.responds(type)
							|| tool && tool.responds(type);
				}

				if (nativeMove && dragging && responds('mousedrag'))
					type = 'mousedrag';
				if (!point)
					point = this.getEventPoint(event);

				var inView = this.getBounds().contains(point),
					hit = hitItems && inView && view._project.hitTest(point, {
						tolerance: 0,
						fill: true,
						stroke: true
					}),
					hitItem = hit && hit.item || null,
					handle = false,
					mouse = {};
				mouse[type.substr(5)] = true;

				if (hitItems && hitItem !== overItem) {
					if (overItem) {
						emitMouseEvent(overItem, null, 'mouseleave', event, point);
					}
					if (hitItem) {
						emitMouseEvent(hitItem, null, 'mouseenter', event, point);
					}
					overItem = hitItem;
				}
				if (wasInView ^ inView) {
					emitMouseEvent(this, null, inView ? 'mouseenter' : 'mouseleave',
							event, point);
					overView = inView ? this : null;
					handle = true;
				}
				if ((inView || mouse.drag) && !point.equals(lastPoint)) {
					emitMouseEvents(this, hitItem, nativeMove ? type : 'mousemove',
							event, point, lastPoint);
					handle = true;
				}
				wasInView = inView;
				if (mouse.down && inView || mouse.up && downPoint) {
					emitMouseEvents(this, hitItem, type, event, point, downPoint);
					if (mouse.down) {
						dblClick = hitItem === clickItem
							&& (Date.now() - clickTime < 300);
						downItem = clickItem = hitItem;
						dragItem = !prevented && hitItem;
						downPoint = point;
					} else if (mouse.up) {
						if (!prevented && hitItem === downItem) {
							clickTime = Date.now();
							emitMouseEvents(this, hitItem, dblClick ? 'doubleclick'
									: 'click', event, point, downPoint);
							dblClick = false;
						}
						downItem = dragItem = null;
					}
					wasInView = false;
					handle = true;
				}
				lastPoint = point;
				if (handle && tool) {
					called = tool._handleMouseEvent(type, event, point, mouse)
						|| called;
				}

				if (called && !mouse.move || mouse.down && responds('mouseup'))
					event.preventDefault();
			},

			_handleKeyEvent: function(type, event, key, character) {
				var scope = this._scope,
					tool = scope.tool,
					keyEvent;

				function emit(obj) {
					if (obj.responds(type)) {
						paper = scope;
						obj.emit(type, keyEvent = keyEvent
								|| new KeyEvent(type, event, key, character));
					}
				}

				if (this.isVisible()) {
					emit(this);
					if (tool && tool.responds(type))
						emit(tool);
				}
			},

			_countItemEvent: function(type, sign) {
				var itemEvents = this._itemEvents,
					native = itemEvents.native,
					virtual = itemEvents.virtual;
				for (var key in itemEventsMap) {
					native[key] = (native[key] || 0)
							+ (itemEventsMap[key][type] || 0) * sign;
				}
				virtual[type] = (virtual[type] || 0) + sign;
			},

			statics: {
				updateFocus: updateFocus
			}
		};
	});

	var CanvasView = View.extend({
		_class: 'CanvasView',

		initialize: function CanvasView(project, canvas) {
			if (!(canvas instanceof window.HTMLCanvasElement)) {
				var size = Size.read(arguments, 1);
				if (size.isZero())
					throw new Error(
							'Cannot create CanvasView with the provided argument: '
							+ [].slice.call(arguments, 1));
				canvas = CanvasProvider.getCanvas(size);
			}
			var ctx = this._context = canvas.getContext('2d');
			ctx.save();
			this._pixelRatio = 1;
			if (!/^off|false$/.test(PaperScope.getAttribute(canvas, 'hidpi'))) {
				var deviceRatio = window.devicePixelRatio || 1,
					backingStoreRatio = DomElement.getPrefixed(ctx,
							'backingStorePixelRatio') || 1;
				this._pixelRatio = deviceRatio / backingStoreRatio;
			}
			View.call(this, project, canvas);
			this._needsUpdate = true;
		},

		remove: function remove() {
			this._context.restore();
			return remove.base.call(this);
		},

		_setElementSize: function _setElementSize(width, height) {
			var pixelRatio = this._pixelRatio;
			_setElementSize.base.call(this, width * pixelRatio, height * pixelRatio);
			if (pixelRatio !== 1) {
				var element = this._element,
					ctx = this._context;
				if (!PaperScope.hasAttribute(element, 'resize')) {
					var style = element.style;
					style.width = width + 'px';
					style.height = height + 'px';
				}
				ctx.restore();
				ctx.save();
				ctx.scale(pixelRatio, pixelRatio);
			}
		},

		getPixelSize: function getPixelSize(size) {
			var agent = paper.agent,
				pixels;
			if (agent && agent.firefox) {
				pixels = getPixelSize.base.call(this, size);
			} else {
				var ctx = this._context,
					prevFont = ctx.font;
				ctx.font = size + ' serif';
				pixels = parseFloat(ctx.font);
				ctx.font = prevFont;
			}
			return pixels;
		},

		getTextWidth: function(font, lines) {
			var ctx = this._context,
				prevFont = ctx.font,
				width = 0;
			ctx.font = font;
			for (var i = 0, l = lines.length; i < l; i++)
				width = Math.max(width, ctx.measureText(lines[i]).width);
			ctx.font = prevFont;
			return width;
		},

		update: function() {
			if (!this._needsUpdate)
				return false;
			var project = this._project,
				ctx = this._context,
				size = this._viewSize;
			ctx.clearRect(0, 0, size.width + 1, size.height + 1);
			if (project)
				project.draw(ctx, this._matrix, this._pixelRatio);
			this._needsUpdate = false;
			return true;
		}
	});

	var Event = Base.extend({
		_class: 'Event',

		initialize: function Event(event) {
			this.event = event;
			this.type = event && event.type;
		},

		prevented: false,
		stopped: false,

		preventDefault: function() {
			this.prevented = true;
			this.event.preventDefault();
		},

		stopPropagation: function() {
			this.stopped = true;
			this.event.stopPropagation();
		},

		stop: function() {
			this.stopPropagation();
			this.preventDefault();
		},

		getTimeStamp: function() {
			return this.event.timeStamp;
		},

		getModifiers: function() {
			return Key.modifiers;
		}
	});

	var KeyEvent = Event.extend({
		_class: 'KeyEvent',

		initialize: function KeyEvent(type, event, key, character) {
			this.type = type;
			this.event = event;
			this.key = key;
			this.character = character;
		},

		toString: function() {
			return "{ type: '" + this.type
					+ "', key: '" + this.key
					+ "', character: '" + this.character
					+ "', modifiers: " + this.getModifiers()
					+ " }";
		}
	});

	var Key = new function() {
		var keyLookup = {
				'\t': 'tab',
				' ': 'space',
				'\b': 'backspace',
				'\x7f': 'delete',
				'Spacebar': 'space',
				'Del': 'delete',
				'Win': 'meta',
				'Esc': 'escape'
			},

			charLookup = {
				'tab': '\t',
				'space': ' ',
				'enter': '\r'
			},

			keyMap = {},
			charMap = {},
			metaFixMap,
			downKey,

			modifiers = new Base({
				shift: false,
				control: false,
				alt: false,
				meta: false,
				capsLock: false,
				space: false
			}).inject({
				option: {
					get: function() {
						return this.alt;
					}
				},

				command: {
					get: function() {
						var agent = paper && paper.agent;
						return agent && agent.mac ? this.meta : this.control;
					}
				}
			});

		function getKey(event) {
			var key = event.key || event.keyIdentifier;
			key = /^U\+/.test(key)
					? String.fromCharCode(parseInt(key.substr(2), 16))
					: /^Arrow[A-Z]/.test(key) ? key.substr(5)
					: key === 'Unidentified' ? String.fromCharCode(event.keyCode)
					: key;
			return keyLookup[key] ||
					(key.length > 1 ? Base.hyphenate(key) : key.toLowerCase());
		}

		function handleKey(down, key, character, event) {
			var type = down ? 'keydown' : 'keyup',
				view = View._focused,
				name;
			keyMap[key] = down;
			if (down) {
				charMap[key] = character;
			} else {
				delete charMap[key];
			}
			if (key.length > 1 && (name = Base.camelize(key)) in modifiers) {
				modifiers[name] = down;
				var agent = paper && paper.agent;
				if (name === 'meta' && agent && agent.mac) {
					if (down) {
						metaFixMap = {};
					} else {
						for (var k in metaFixMap) {
							if (k in charMap)
								handleKey(false, k, metaFixMap[k], event);
						}
						metaFixMap = null;
					}
				}
			} else if (down && metaFixMap) {
				metaFixMap[key] = character;
			}
			if (view) {
				view._handleKeyEvent(down ? 'keydown' : 'keyup', event, key,
						character);
			}
		}

		DomEvent.add(document, {
			keydown: function(event) {
				var key = getKey(event),
					agent = paper && paper.agent;
				if (key.length > 1 || agent && (agent.chrome && (event.altKey
							|| agent.mac && event.metaKey
							|| !agent.mac && event.ctrlKey))) {
					handleKey(true, key,
							charLookup[key] || (key.length > 1 ? '' : key), event);
				} else {
					downKey = key;
				}
			},

			keypress: function(event) {
				if (downKey) {
					var key = getKey(event),
						code = event.charCode,
						character = code >= 32 ? String.fromCharCode(code)
							: key.length > 1 ? '' : key;
					if (key !== downKey) {
						key = character.toLowerCase();
					}
					handleKey(true, key, character, event);
					downKey = null;
				}
			},

			keyup: function(event) {
				var key = getKey(event);
				if (key in charMap)
					handleKey(false, key, charMap[key], event);
			}
		});

		DomEvent.add(window, {
			blur: function(event) {
				for (var key in charMap)
					handleKey(false, key, charMap[key], event);
			}
		});

		return {
			modifiers: modifiers,

			isDown: function(key) {
				return !!keyMap[key];
			}
		};
	};

	var MouseEvent = Event.extend({
		_class: 'MouseEvent',

		initialize: function MouseEvent(type, event, point, target, delta) {
			this.type = type;
			this.event = event;
			this.point = point;
			this.target = target;
			this.delta = delta;
		},

		toString: function() {
			return "{ type: '" + this.type
					+ "', point: " + this.point
					+ ', target: ' + this.target
					+ (this.delta ? ', delta: ' + this.delta : '')
					+ ', modifiers: ' + this.getModifiers()
					+ ' }';
		}
	});

	var ToolEvent = Event.extend({
		_class: 'ToolEvent',
		_item: null,

		initialize: function ToolEvent(tool, type, event) {
			this.tool = tool;
			this.type = type;
			this.event = event;
		},

		_choosePoint: function(point, toolPoint) {
			return point ? point : toolPoint ? toolPoint.clone() : null;
		},

		getPoint: function() {
			return this._choosePoint(this._point, this.tool._point);
		},

		setPoint: function(point) {
			this._point = point;
		},

		getLastPoint: function() {
			return this._choosePoint(this._lastPoint, this.tool._lastPoint);
		},

		setLastPoint: function(lastPoint) {
			this._lastPoint = lastPoint;
		},

		getDownPoint: function() {
			return this._choosePoint(this._downPoint, this.tool._downPoint);
		},

		setDownPoint: function(downPoint) {
			this._downPoint = downPoint;
		},

		getMiddlePoint: function() {
			if (!this._middlePoint && this.tool._lastPoint) {
				return this.tool._point.add(this.tool._lastPoint).divide(2);
			}
			return this._middlePoint;
		},

		setMiddlePoint: function(middlePoint) {
			this._middlePoint = middlePoint;
		},

		getDelta: function() {
			return !this._delta && this.tool._lastPoint
					? this.tool._point.subtract(this.tool._lastPoint)
					: this._delta;
		},

		setDelta: function(delta) {
			this._delta = delta;
		},

		getCount: function() {
			return this.tool[/^mouse(down|up)$/.test(this.type)
					? '_downCount' : '_moveCount'];
		},

		setCount: function(count) {
			this.tool[/^mouse(down|up)$/.test(this.type) ? 'downCount' : 'count']
				= count;
		},

		getItem: function() {
			if (!this._item) {
				var result = this.tool._scope.project.hitTest(this.getPoint());
				if (result) {
					var item = result.item,
						parent = item._parent;
					while (/^(Group|CompoundPath)$/.test(parent._class)) {
						item = parent;
						parent = parent._parent;
					}
					this._item = item;
				}
			}
			return this._item;
		},

		setItem: function(item) {
			this._item = item;
		},

		toString: function() {
			return '{ type: ' + this.type
					+ ', point: ' + this.getPoint()
					+ ', count: ' + this.getCount()
					+ ', modifiers: ' + this.getModifiers()
					+ ' }';
		}
	});

	var Tool = PaperScopeItem.extend({
		_class: 'Tool',
		_list: 'tools',
		_reference: 'tool',
		_events: ['onMouseDown', 'onMouseUp', 'onMouseDrag', 'onMouseMove',
				'onActivate', 'onDeactivate', 'onEditOptions', 'onKeyDown',
				'onKeyUp'],

		initialize: function Tool(props) {
			PaperScopeItem.call(this);
			this._moveCount = -1;
			this._downCount = -1;
			this._set(props);
		},

		getMinDistance: function() {
			return this._minDistance;
		},

		setMinDistance: function(minDistance) {
			this._minDistance = minDistance;
			if (minDistance != null && this._maxDistance != null
					&& minDistance > this._maxDistance) {
				this._maxDistance = minDistance;
			}
		},

		getMaxDistance: function() {
			return this._maxDistance;
		},

		setMaxDistance: function(maxDistance) {
			this._maxDistance = maxDistance;
			if (this._minDistance != null && maxDistance != null
					&& maxDistance < this._minDistance) {
				this._minDistance = maxDistance;
			}
		},

		getFixedDistance: function() {
			return this._minDistance == this._maxDistance
				? this._minDistance : null;
		},

		setFixedDistance: function(distance) {
			this._minDistance = this._maxDistance = distance;
		},

		_handleMouseEvent: function(type, event, point, mouse) {
			paper = this._scope;
			if (mouse.drag && !this.responds(type))
				type = 'mousemove';
			var move = mouse.move || mouse.drag,
				responds = this.responds(type),
				minDistance = this.minDistance,
				maxDistance = this.maxDistance,
				called = false,
				tool = this;
			function update(minDistance, maxDistance) {
				var pt = point,
					toolPoint = move ? tool._point : (tool._downPoint || pt);
				if (move) {
					if (tool._moveCount && pt.equals(toolPoint)) {
						return false;
					}
					if (toolPoint && (minDistance != null || maxDistance != null)) {
						var vector = pt.subtract(toolPoint),
							distance = vector.getLength();
						if (distance < (minDistance || 0))
							return false;
						if (maxDistance) {
							pt = toolPoint.add(vector.normalize(
									Math.min(distance, maxDistance)));
						}
					}
					tool._moveCount++;
				}
				tool._point = pt;
				tool._lastPoint = toolPoint || pt;
				if (mouse.down) {
					tool._moveCount = -1;
					tool._downPoint = pt;
					tool._downCount++;
				}
				return true;
			}

			function emit() {
				if (responds) {
					called = tool.emit(type, new ToolEvent(tool, type, event))
							|| called;
				}
			}

			if (mouse.down) {
				update();
				emit();
			} else if (mouse.up) {
				update(null, maxDistance);
				emit();
			} else if (responds) {
				while (update(minDistance, maxDistance))
					emit();
			}
			return called;
		}

	});

	var Http = {
		request: function(options) {
			var xhr = new window.XMLHttpRequest();
			xhr.open((options.method || 'get').toUpperCase(), options.url,
					Base.pick(options.async, true));
			if (options.mimeType)
				xhr.overrideMimeType(options.mimeType);
			xhr.onload = function() {
				var status = xhr.status;
				if (status === 0 || status === 200) {
					if (options.onLoad) {
						options.onLoad.call(xhr, xhr.responseText);
					}
				} else {
					xhr.onerror();
				}
			};
			xhr.onerror = function() {
				var status = xhr.status,
					message = 'Could not load "' + options.url + '" (Status: '
							+ status + ')';
				if (options.onError) {
					options.onError(message, status);
				} else {
					throw new Error(message);
				}
			};
			return xhr.send(null);
		}
	};

	var CanvasProvider = {
		canvases: [],

		getCanvas: function(width, height) {
			if (!window)
				return null;
			var canvas,
				clear = true;
			if (typeof width === 'object') {
				height = width.height;
				width = width.width;
			}
			if (this.canvases.length) {
				canvas = this.canvases.pop();
			} else {
				canvas = document.createElement('canvas');
				clear = false;
			}
			var ctx = canvas.getContext('2d');
			if (!ctx) {
				throw new Error('Canvas ' + canvas +
						' is unable toprovide a 2D context.');
			}
			if (canvas.width === width && canvas.height === height) {
				if (clear)
					ctx.clearRect(0, 0, width + 1, height + 1);
			} else {
				canvas.width = width;
				canvas.height = height;
			}
			ctx.save();
			return canvas;
		},

		getContext: function(width, height) {
			var canvas = this.getCanvas(width, height);
			return canvas ? canvas.getContext('2d') : null;
		},

		release: function(obj) {
			var canvas = obj && obj.canvas ? obj.canvas : obj;
			if (canvas && canvas.getContext) {
				canvas.getContext('2d').restore();
				this.canvases.push(canvas);
			}
		}
	};

	var BlendMode = new function() {
		var min = Math.min,
			max = Math.max,
			abs = Math.abs,
			sr, sg, sb, sa,
			br, bg, bb, ba,
			dr, dg, db;

		function getLum(r, g, b) {
			return 0.2989 * r + 0.587 * g + 0.114 * b;
		}

		function setLum(r, g, b, l) {
			var d = l - getLum(r, g, b);
			dr = r + d;
			dg = g + d;
			db = b + d;
			var l = getLum(dr, dg, db),
				mn = min(dr, dg, db),
				mx = max(dr, dg, db);
			if (mn < 0) {
				var lmn = l - mn;
				dr = l + (dr - l) * l / lmn;
				dg = l + (dg - l) * l / lmn;
				db = l + (db - l) * l / lmn;
			}
			if (mx > 255) {
				var ln = 255 - l,
					mxl = mx - l;
				dr = l + (dr - l) * ln / mxl;
				dg = l + (dg - l) * ln / mxl;
				db = l + (db - l) * ln / mxl;
			}
		}

		function getSat(r, g, b) {
			return max(r, g, b) - min(r, g, b);
		}

		function setSat(r, g, b, s) {
			var col = [r, g, b],
				mx = max(r, g, b),
				mn = min(r, g, b),
				md;
			mn = mn === r ? 0 : mn === g ? 1 : 2;
			mx = mx === r ? 0 : mx === g ? 1 : 2;
			md = min(mn, mx) === 0 ? max(mn, mx) === 1 ? 2 : 1 : 0;
			if (col[mx] > col[mn]) {
				col[md] = (col[md] - col[mn]) * s / (col[mx] - col[mn]);
				col[mx] = s;
			} else {
				col[md] = col[mx] = 0;
			}
			col[mn] = 0;
			dr = col[0];
			dg = col[1];
			db = col[2];
		}

		var modes = {
			multiply: function() {
				dr = br * sr / 255;
				dg = bg * sg / 255;
				db = bb * sb / 255;
			},

			screen: function() {
				dr = br + sr - (br * sr / 255);
				dg = bg + sg - (bg * sg / 255);
				db = bb + sb - (bb * sb / 255);
			},

			overlay: function() {
				dr = br < 128 ? 2 * br * sr / 255 : 255 - 2 * (255 - br) * (255 - sr) / 255;
				dg = bg < 128 ? 2 * bg * sg / 255 : 255 - 2 * (255 - bg) * (255 - sg) / 255;
				db = bb < 128 ? 2 * bb * sb / 255 : 255 - 2 * (255 - bb) * (255 - sb) / 255;
			},

			'soft-light': function() {
				var t = sr * br / 255;
				dr = t + br * (255 - (255 - br) * (255 - sr) / 255 - t) / 255;
				t = sg * bg / 255;
				dg = t + bg * (255 - (255 - bg) * (255 - sg) / 255 - t) / 255;
				t = sb * bb / 255;
				db = t + bb * (255 - (255 - bb) * (255 - sb) / 255 - t) / 255;
			},

			'hard-light': function() {
				dr = sr < 128 ? 2 * sr * br / 255 : 255 - 2 * (255 - sr) * (255 - br) / 255;
				dg = sg < 128 ? 2 * sg * bg / 255 : 255 - 2 * (255 - sg) * (255 - bg) / 255;
				db = sb < 128 ? 2 * sb * bb / 255 : 255 - 2 * (255 - sb) * (255 - bb) / 255;
			},

			'color-dodge': function() {
				dr = br === 0 ? 0 : sr === 255 ? 255 : min(255, 255 * br / (255 - sr));
				dg = bg === 0 ? 0 : sg === 255 ? 255 : min(255, 255 * bg / (255 - sg));
				db = bb === 0 ? 0 : sb === 255 ? 255 : min(255, 255 * bb / (255 - sb));
			},

			'color-burn': function() {
				dr = br === 255 ? 255 : sr === 0 ? 0 : max(0, 255 - (255 - br) * 255 / sr);
				dg = bg === 255 ? 255 : sg === 0 ? 0 : max(0, 255 - (255 - bg) * 255 / sg);
				db = bb === 255 ? 255 : sb === 0 ? 0 : max(0, 255 - (255 - bb) * 255 / sb);
			},

			darken: function() {
				dr = br < sr ? br : sr;
				dg = bg < sg ? bg : sg;
				db = bb < sb ? bb : sb;
			},

			lighten: function() {
				dr = br > sr ? br : sr;
				dg = bg > sg ? bg : sg;
				db = bb > sb ? bb : sb;
			},

			difference: function() {
				dr = br - sr;
				if (dr < 0)
					dr = -dr;
				dg = bg - sg;
				if (dg < 0)
					dg = -dg;
				db = bb - sb;
				if (db < 0)
					db = -db;
			},

			exclusion: function() {
				dr = br + sr * (255 - br - br) / 255;
				dg = bg + sg * (255 - bg - bg) / 255;
				db = bb + sb * (255 - bb - bb) / 255;
			},

			hue: function() {
				setSat(sr, sg, sb, getSat(br, bg, bb));
				setLum(dr, dg, db, getLum(br, bg, bb));
			},

			saturation: function() {
				setSat(br, bg, bb, getSat(sr, sg, sb));
				setLum(dr, dg, db, getLum(br, bg, bb));
			},

			luminosity: function() {
				setLum(br, bg, bb, getLum(sr, sg, sb));
			},

			color: function() {
				setLum(sr, sg, sb, getLum(br, bg, bb));
			},

			add: function() {
				dr = min(br + sr, 255);
				dg = min(bg + sg, 255);
				db = min(bb + sb, 255);
			},

			subtract: function() {
				dr = max(br - sr, 0);
				dg = max(bg - sg, 0);
				db = max(bb - sb, 0);
			},

			average: function() {
				dr = (br + sr) / 2;
				dg = (bg + sg) / 2;
				db = (bb + sb) / 2;
			},

			negation: function() {
				dr = 255 - abs(255 - sr - br);
				dg = 255 - abs(255 - sg - bg);
				db = 255 - abs(255 - sb - bb);
			}
		};

		var nativeModes = this.nativeModes = Base.each([
			'source-over', 'source-in', 'source-out', 'source-atop',
			'destination-over', 'destination-in', 'destination-out',
			'destination-atop', 'lighter', 'darker', 'copy', 'xor'
		], function(mode) {
			this[mode] = true;
		}, {});

		var ctx = CanvasProvider.getContext(1, 1);
		if (ctx) {
			Base.each(modes, function(func, mode) {
				var darken = mode === 'darken',
					ok = false;
				ctx.save();
				try {
					ctx.fillStyle = darken ? '#300' : '#a00';
					ctx.fillRect(0, 0, 1, 1);
					ctx.globalCompositeOperation = mode;
					if (ctx.globalCompositeOperation === mode) {
						ctx.fillStyle = darken ? '#a00' : '#300';
						ctx.fillRect(0, 0, 1, 1);
						ok = ctx.getImageData(0, 0, 1, 1).data[0] !== darken
								? 170 : 51;
					}
				} catch (e) {}
				ctx.restore();
				nativeModes[mode] = ok;
			});
			CanvasProvider.release(ctx);
		}

		this.process = function(mode, srcContext, dstContext, alpha, offset) {
			var srcCanvas = srcContext.canvas,
				normal = mode === 'normal';
			if (normal || nativeModes[mode]) {
				dstContext.save();
				dstContext.setTransform(1, 0, 0, 1, 0, 0);
				dstContext.globalAlpha = alpha;
				if (!normal)
					dstContext.globalCompositeOperation = mode;
				dstContext.drawImage(srcCanvas, offset.x, offset.y);
				dstContext.restore();
			} else {
				var process = modes[mode];
				if (!process)
					return;
				var dstData = dstContext.getImageData(offset.x, offset.y,
						srcCanvas.width, srcCanvas.height),
					dst = dstData.data,
					src = srcContext.getImageData(0, 0,
						srcCanvas.width, srcCanvas.height).data;
				for (var i = 0, l = dst.length; i < l; i += 4) {
					sr = src[i];
					br = dst[i];
					sg = src[i + 1];
					bg = dst[i + 1];
					sb = src[i + 2];
					bb = dst[i + 2];
					sa = src[i + 3];
					ba = dst[i + 3];
					process();
					var a1 = sa * alpha / 255,
						a2 = 1 - a1;
					dst[i] = a1 * dr + a2 * br;
					dst[i + 1] = a1 * dg + a2 * bg;
					dst[i + 2] = a1 * db + a2 * bb;
					dst[i + 3] = sa * alpha + a2 * ba;
				}
				dstContext.putImageData(dstData, offset.x, offset.y);
			}
		};
	};

	var SvgElement = new function() {
		var svg = 'http://www.w3.org/2000/svg',
			xmlns = 'http://www.w3.org/2000/xmlns',
			xlink = 'http://www.w3.org/1999/xlink',
			attributeNamespace = {
				href: xlink,
				xlink: xmlns,
				xmlns: xmlns + '/',
				'xmlns:xlink': xmlns + '/'
			};

		function create(tag, attributes, formatter) {
			return set(document.createElementNS(svg, tag), attributes, formatter);
		}

		function get(node, name) {
			var namespace = attributeNamespace[name],
				value = namespace
					? node.getAttributeNS(namespace, name)
					: node.getAttribute(name);
			return value === 'null' ? null : value;
		}

		function set(node, attributes, formatter) {
			for (var name in attributes) {
				var value = attributes[name],
					namespace = attributeNamespace[name];
				if (typeof value === 'number' && formatter)
					value = formatter.number(value);
				if (namespace) {
					node.setAttributeNS(namespace, name, value);
				} else {
					node.setAttribute(name, value);
				}
			}
			return node;
		}

		return {
			svg: svg,
			xmlns: xmlns,
			xlink: xlink,

			create: create,
			get: get,
			set: set
		};
	};

	var SvgStyles = Base.each({
		fillColor: ['fill', 'color'],
		fillRule: ['fill-rule', 'string'],
		strokeColor: ['stroke', 'color'],
		strokeWidth: ['stroke-width', 'number'],
		strokeCap: ['stroke-linecap', 'string'],
		strokeJoin: ['stroke-linejoin', 'string'],
		strokeScaling: ['vector-effect', 'lookup', {
			true: 'none',
			false: 'non-scaling-stroke'
		}, function(item, value) {
			return !value
					&& (item instanceof PathItem
						|| item instanceof Shape
						|| item instanceof TextItem);
		}],
		miterLimit: ['stroke-miterlimit', 'number'],
		dashArray: ['stroke-dasharray', 'array'],
		dashOffset: ['stroke-dashoffset', 'number'],
		fontFamily: ['font-family', 'string'],
		fontWeight: ['font-weight', 'string'],
		fontSize: ['font-size', 'number'],
		justification: ['text-anchor', 'lookup', {
			left: 'start',
			center: 'middle',
			right: 'end'
		}],
		opacity: ['opacity', 'number'],
		blendMode: ['mix-blend-mode', 'style']
	}, function(entry, key) {
		var part = Base.capitalize(key),
			lookup = entry[2];
		this[key] = {
			type: entry[1],
			property: key,
			attribute: entry[0],
			toSVG: lookup,
			fromSVG: lookup && Base.each(lookup, function(value, name) {
				this[value] = name;
			}, {}),
			exportFilter: entry[3],
			get: 'get' + part,
			set: 'set' + part
		};
	}, {});

	new function() {
		var formatter;

		function getTransform(matrix, coordinates, center) {
			var attrs = new Base(),
				trans = matrix.getTranslation();
			if (coordinates) {
				matrix = matrix._shiftless();
				var point = matrix._inverseTransform(trans);
				attrs[center ? 'cx' : 'x'] = point.x;
				attrs[center ? 'cy' : 'y'] = point.y;
				trans = null;
			}
			if (!matrix.isIdentity()) {
				var decomposed = matrix.decompose();
				if (decomposed) {
					var parts = [],
						angle = decomposed.rotation,
						scale = decomposed.scaling,
						skew = decomposed.skewing;
					if (trans && !trans.isZero())
						parts.push('translate(' + formatter.point(trans) + ')');
					if (angle)
						parts.push('rotate(' + formatter.number(angle) + ')');
					if (!Numerical.isZero(scale.x - 1)
							|| !Numerical.isZero(scale.y - 1))
						parts.push('scale(' + formatter.point(scale) +')');
					if (skew && skew.x)
						parts.push('skewX(' + formatter.number(skew.x) + ')');
					if (skew && skew.y)
						parts.push('skewY(' + formatter.number(skew.y) + ')');
					attrs.transform = parts.join(' ');
				} else {
					attrs.transform = 'matrix(' + matrix.getValues().join(',') + ')';
				}
			}
			return attrs;
		}

		function exportGroup(item, options) {
			var attrs = getTransform(item._matrix),
				children = item._children;
			var node = SvgElement.create('g', attrs, formatter);
			for (var i = 0, l = children.length; i < l; i++) {
				var child = children[i];
				var childNode = exportSVG(child, options);
				if (childNode) {
					if (child.isClipMask()) {
						var clip = SvgElement.create('clipPath');
						clip.appendChild(childNode);
						setDefinition(child, clip, 'clip');
						SvgElement.set(node, {
							'clip-path': 'url(#' + clip.id + ')'
						});
					} else {
						node.appendChild(childNode);
					}
				}
			}
			return node;
		}

		function exportRaster(item, options) {
			var attrs = getTransform(item._matrix, true),
				size = item.getSize(),
				image = item.getImage();
			attrs.x -= size.width / 2;
			attrs.y -= size.height / 2;
			attrs.width = size.width;
			attrs.height = size.height;
			attrs.href = options.embedImages === false && image && image.src
					|| item.toDataURL();
			return SvgElement.create('image', attrs, formatter);
		}

		function exportPath(item, options) {
			var matchShapes = options.matchShapes;
			if (matchShapes) {
				var shape = item.toShape(false);
				if (shape)
					return exportShape(shape, options);
			}
			var segments = item._segments,
				length = segments.length,
				type,
				attrs = getTransform(item._matrix);
			if (matchShapes && length >= 2 && !item.hasHandles()) {
				if (length > 2) {
					type = item._closed ? 'polygon' : 'polyline';
					var parts = [];
					for(var i = 0; i < length; i++)
						parts.push(formatter.point(segments[i]._point));
					attrs.points = parts.join(' ');
				} else {
					type = 'line';
					var start = segments[0]._point,
						end = segments[1]._point;
					attrs.set({
						x1: start.x,
						y1: start.y,
						x2: end.x,
						y2: end.y
					});
				}
			} else {
				type = 'path';
				attrs.d = item.getPathData(null, options.precision);
			}
			return SvgElement.create(type, attrs, formatter);
		}

		function exportShape(item) {
			var type = item._type,
				radius = item._radius,
				attrs = getTransform(item._matrix, true, type !== 'rectangle');
			if (type === 'rectangle') {
				type = 'rect';
				var size = item._size,
					width = size.width,
					height = size.height;
				attrs.x -= width / 2;
				attrs.y -= height / 2;
				attrs.width = width;
				attrs.height = height;
				if (radius.isZero())
					radius = null;
			}
			if (radius) {
				if (type === 'circle') {
					attrs.r = radius;
				} else {
					attrs.rx = radius.width;
					attrs.ry = radius.height;
				}
			}
			return SvgElement.create(type, attrs, formatter);
		}

		function exportCompoundPath(item, options) {
			var attrs = getTransform(item._matrix);
			var data = item.getPathData(null, options.precision);
			if (data)
				attrs.d = data;
			return SvgElement.create('path', attrs, formatter);
		}

		function exportSymbolItem(item, options) {
			var attrs = getTransform(item._matrix, true),
				definition = item._definition,
				node = getDefinition(definition, 'symbol'),
				definitionItem = definition._item,
				bounds = definitionItem.getBounds();
			if (!node) {
				node = SvgElement.create('symbol', {
					viewBox: formatter.rectangle(bounds)
				});
				node.appendChild(exportSVG(definitionItem, options));
				setDefinition(definition, node, 'symbol');
			}
			attrs.href = '#' + node.id;
			attrs.x += bounds.x;
			attrs.y += bounds.y;
			attrs.width = bounds.width;
			attrs.height = bounds.height;
			attrs.overflow = 'visible';
			return SvgElement.create('use', attrs, formatter);
		}

		function exportGradient(color) {
			var gradientNode = getDefinition(color, 'color');
			if (!gradientNode) {
				var gradient = color.getGradient(),
					radial = gradient._radial,
					origin = color.getOrigin(),
					destination = color.getDestination(),
					attrs;
				if (radial) {
					attrs = {
						cx: origin.x,
						cy: origin.y,
						r: origin.getDistance(destination)
					};
					var highlight = color.getHighlight();
					if (highlight) {
						attrs.fx = highlight.x;
						attrs.fy = highlight.y;
					}
				} else {
					attrs = {
						x1: origin.x,
						y1: origin.y,
						x2: destination.x,
						y2: destination.y
					};
				}
				attrs.gradientUnits = 'userSpaceOnUse';
				gradientNode = SvgElement.create((radial ? 'radial' : 'linear')
						+ 'Gradient', attrs, formatter);
				var stops = gradient._stops;
				for (var i = 0, l = stops.length; i < l; i++) {
					var stop = stops[i],
						stopColor = stop._color,
						alpha = stopColor.getAlpha();
					attrs = {
						offset: stop._offset || i / (l - 1)
					};
					if (stopColor)
						attrs['stop-color'] = stopColor.toCSS(true);
					if (alpha < 1)
						attrs['stop-opacity'] = alpha;
					gradientNode.appendChild(
							SvgElement.create('stop', attrs, formatter));
				}
				setDefinition(color, gradientNode, 'color');
			}
			return 'url(#' + gradientNode.id + ')';
		}

		function exportText(item) {
			var node = SvgElement.create('text', getTransform(item._matrix, true),
					formatter);
			node.textContent = item._content;
			return node;
		}

		var exporters = {
			Group: exportGroup,
			Layer: exportGroup,
			Raster: exportRaster,
			Path: exportPath,
			Shape: exportShape,
			CompoundPath: exportCompoundPath,
			SymbolItem: exportSymbolItem,
			PointText: exportText
		};

		function applyStyle(item, node, isRoot) {
			var attrs = {},
				parent = !isRoot && item.getParent(),
				style = [];

			if (item._name != null)
				attrs.id = item._name;

			Base.each(SvgStyles, function(entry) {
				var get = entry.get,
					type = entry.type,
					value = item[get]();
				if (entry.exportFilter
						? entry.exportFilter(item, value)
						: !parent || !Base.equals(parent[get](), value)) {
					if (type === 'color' && value != null) {
						var alpha = value.getAlpha();
						if (alpha < 1)
							attrs[entry.attribute + '-opacity'] = alpha;
					}
					if (type === 'style') {
						style.push(entry.attribute + ': ' + value);
					} else {
						attrs[entry.attribute] = value == null ? 'none'
								: type === 'color' ? value.gradient
									? exportGradient(value, item)
									: value.toCSS(true)
								: type === 'array' ? value.join(',')
								: type === 'lookup' ? entry.toSVG[value]
								: value;
					}
				}
			});

			if (style.length)
				attrs.style = style.join(';');

			if (attrs.opacity === 1)
				delete attrs.opacity;

			if (!item._visible)
				attrs.visibility = 'hidden';

			return SvgElement.set(node, attrs, formatter);
		}

		var definitions;
		function getDefinition(item, type) {
			if (!definitions)
				definitions = { ids: {}, svgs: {} };
			var id = item._id || item.__id || (item.__id = UID.get('svg'));
			return item && definitions.svgs[type + '-' + id];
		}

		function setDefinition(item, node, type) {
			if (!definitions)
				getDefinition();
			var typeId = definitions.ids[type] = (definitions.ids[type] || 0) + 1;
			node.id = type + '-' + typeId;
			definitions.svgs[type + '-' + (item._id || item.__id)] = node;
		}

		function exportDefinitions(node, options) {
			var svg = node,
				defs = null;
			if (definitions) {
				svg = node.nodeName.toLowerCase() === 'svg' && node;
				for (var i in definitions.svgs) {
					if (!defs) {
						if (!svg) {
							svg = SvgElement.create('svg');
							svg.appendChild(node);
						}
						defs = svg.insertBefore(SvgElement.create('defs'),
								svg.firstChild);
					}
					defs.appendChild(definitions.svgs[i]);
				}
				definitions = null;
			}
			return options.asString
					? new window.XMLSerializer().serializeToString(svg)
					: svg;
		}

		function exportSVG(item, options, isRoot) {
			var exporter = exporters[item._class],
				node = exporter && exporter(item, options);
			if (node) {
				var onExport = options.onExport;
				if (onExport)
					node = onExport(item, node, options) || node;
				var data = JSON.stringify(item._data);
				if (data && data !== '{}' && data !== 'null')
					node.setAttribute('data-paper-data', data);
			}
			return node && applyStyle(item, node, isRoot);
		}

		function setOptions(options) {
			if (!options)
				options = {};
			formatter = new Formatter(options.precision);
			return options;
		}

		Item.inject({
			exportSVG: function(options) {
				options = setOptions(options);
				return exportDefinitions(exportSVG(this, options, true), options);
			}
		});

		Project.inject({
			exportSVG: function(options) {
				options = setOptions(options);
				var children = this._children,
					view = this.getView(),
					bounds = Base.pick(options.bounds, 'view'),
					mx = options.matrix || bounds === 'view' && view._matrix,
					matrix = mx && Matrix.read([mx]),
					rect = bounds === 'view'
						? new Rectangle([0, 0], view.getViewSize())
						: bounds === 'content'
							? Item._getBounds(children, matrix, { stroke: true })
							: Rectangle.read([bounds], 0, { readNull: true }),
					attrs = {
						version: '1.1',
						xmlns: SvgElement.svg,
						'xmlns:xlink': SvgElement.xlink,
					};
				if (rect) {
					attrs.width = rect.width;
					attrs.height = rect.height;
					if (rect.x || rect.y)
						attrs.viewBox = formatter.rectangle(rect);
				}
				var node = SvgElement.create('svg', attrs, formatter),
					parent = node;
				if (matrix && !matrix.isIdentity()) {
					parent = node.appendChild(SvgElement.create('g',
							getTransform(matrix), formatter));
				}
				for (var i = 0, l = children.length; i < l; i++) {
					parent.appendChild(exportSVG(children[i], options, true));
				}
				return exportDefinitions(node, options);
			}
		});
	};

	new function() {

		var definitions = {},
			rootSize;

		function getValue(node, name, isString, allowNull, allowPercent) {
			var value = SvgElement.get(node, name),
				res = value == null
					? allowNull
						? null
						: isString ? '' : 0
					: isString
						? value
						: parseFloat(value);
			return /%\s*$/.test(value)
				? (res / 100) * (allowPercent ? 1
					: rootSize[/x|^width/.test(name) ? 'width' : 'height'])
				: res;
		}

		function getPoint(node, x, y, allowNull, allowPercent) {
			x = getValue(node, x || 'x', false, allowNull, allowPercent);
			y = getValue(node, y || 'y', false, allowNull, allowPercent);
			return allowNull && (x == null || y == null) ? null
					: new Point(x, y);
		}

		function getSize(node, w, h, allowNull, allowPercent) {
			w = getValue(node, w || 'width', false, allowNull, allowPercent);
			h = getValue(node, h || 'height', false, allowNull, allowPercent);
			return allowNull && (w == null || h == null) ? null
					: new Size(w, h);
		}

		function convertValue(value, type, lookup) {
			return value === 'none' ? null
					: type === 'number' ? parseFloat(value)
					: type === 'array' ?
						value ? value.split(/[\s,]+/g).map(parseFloat) : []
					: type === 'color' ? getDefinition(value) || value
					: type === 'lookup' ? lookup[value]
					: value;
		}

		function importGroup(node, type, options, isRoot) {
			var nodes = node.childNodes,
				isClip = type === 'clippath',
				isDefs = type === 'defs',
				item = new Group(),
				project = item._project,
				currentStyle = project._currentStyle,
				children = [];
			if (!isClip && !isDefs) {
				item = applyAttributes(item, node, isRoot);
				project._currentStyle = item._style.clone();
			}
			if (isRoot) {
				var defs = node.querySelectorAll('defs');
				for (var i = 0, l = defs.length; i < l; i++) {
					importNode(defs[i], options, false);
				}
			}
			for (var i = 0, l = nodes.length; i < l; i++) {
				var childNode = nodes[i],
					child;
				if (childNode.nodeType === 1
						&& !/^defs$/i.test(childNode.nodeName)
						&& (child = importNode(childNode, options, false))
						&& !(child instanceof SymbolDefinition))
					children.push(child);
			}
			item.addChildren(children);
			if (isClip)
				item = applyAttributes(item.reduce(), node, isRoot);
			project._currentStyle = currentStyle;
			if (isClip || isDefs) {
				item.remove();
				item = null;
			}
			return item;
		}

		function importPoly(node, type) {
			var coords = node.getAttribute('points').match(
						/[+-]?(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?/g),
				points = [];
			for (var i = 0, l = coords.length; i < l; i += 2)
				points.push(new Point(
						parseFloat(coords[i]),
						parseFloat(coords[i + 1])));
			var path = new Path(points);
			if (type === 'polygon')
				path.closePath();
			return path;
		}

		function importPath(node) {
			return PathItem.create(node.getAttribute('d'));
		}

		function importGradient(node, type) {
			var id = (getValue(node, 'href', true) || '').substring(1),
				radial = type === 'radialgradient',
				gradient;
			if (id) {
				gradient = definitions[id].getGradient();
				if (gradient._radial ^ radial) {
					gradient = gradient.clone();
					gradient._radial = radial;
				}
			} else {
				var nodes = node.childNodes,
					stops = [];
				for (var i = 0, l = nodes.length; i < l; i++) {
					var child = nodes[i];
					if (child.nodeType === 1)
						stops.push(applyAttributes(new GradientStop(), child));
				}
				gradient = new Gradient(stops, radial);
			}
			var origin, destination, highlight,
				scaleToBounds = getValue(node, 'gradientUnits', true) !==
					'userSpaceOnUse';
			if (radial) {
				origin = getPoint(node, 'cx', 'cy', false, scaleToBounds);
				destination = origin.add(
						getValue(node, 'r', false, false, scaleToBounds), 0);
				highlight = getPoint(node, 'fx', 'fy', true, scaleToBounds);
			} else {
				origin = getPoint(node, 'x1', 'y1', false, scaleToBounds);
				destination = getPoint(node, 'x2', 'y2', false, scaleToBounds);
			}
			var color = applyAttributes(
					new Color(gradient, origin, destination, highlight), node);
			color._scaleToBounds = scaleToBounds;
			return null;
		}

		var importers = {
			'#document': function (node, type, options, isRoot) {
				var nodes = node.childNodes;
				for (var i = 0, l = nodes.length; i < l; i++) {
					var child = nodes[i];
					if (child.nodeType === 1)
						return importNode(child, options, isRoot);
				}
			},
			g: importGroup,
			svg: importGroup,
			clippath: importGroup,
			polygon: importPoly,
			polyline: importPoly,
			path: importPath,
			lineargradient: importGradient,
			radialgradient: importGradient,

			image: function (node) {
				var raster = new Raster(getValue(node, 'href', true));
				raster.on('load', function() {
					var size = getSize(node);
					this.setSize(size);
					var center = this._matrix._transformPoint(
							getPoint(node).add(size.divide(2)));
					this.translate(center);
				});
				return raster;
			},

			symbol: function(node, type, options, isRoot) {
				return new SymbolDefinition(
						importGroup(node, type, options, isRoot), true);
			},

			defs: importGroup,

			use: function(node) {
				var id = (getValue(node, 'href', true) || '').substring(1),
					definition = definitions[id],
					point = getPoint(node);
				return definition
						? definition instanceof SymbolDefinition
							? definition.place(point)
							: definition.clone().translate(point)
						: null;
			},

			circle: function(node) {
				return new Shape.Circle(
						getPoint(node, 'cx', 'cy'),
						getValue(node, 'r'));
			},

			ellipse: function(node) {
				return new Shape.Ellipse({
					center: getPoint(node, 'cx', 'cy'),
					radius: getSize(node, 'rx', 'ry')
				});
			},

			rect: function(node) {
				return new Shape.Rectangle(new Rectangle(
							getPoint(node),
							getSize(node)
						), getSize(node, 'rx', 'ry'));
				},

			line: function(node) {
				return new Path.Line(
						getPoint(node, 'x1', 'y1'),
						getPoint(node, 'x2', 'y2'));
			},

			text: function(node) {
				var text = new PointText(getPoint(node).add(
						getPoint(node, 'dx', 'dy')));
				text.setContent(node.textContent.trim() || '');
				return text;
			}
		};

		function applyTransform(item, value, name, node) {
			if (item.transform) {
				var transforms = (node.getAttribute(name) || '').split(/\)\s*/g),
					matrix = new Matrix();
				for (var i = 0, l = transforms.length; i < l; i++) {
					var transform = transforms[i];
					if (!transform)
						break;
					var parts = transform.split(/\(\s*/),
						command = parts[0],
						v = parts[1].split(/[\s,]+/g);
					for (var j = 0, m = v.length; j < m; j++)
						v[j] = parseFloat(v[j]);
					switch (command) {
					case 'matrix':
						matrix.append(
								new Matrix(v[0], v[1], v[2], v[3], v[4], v[5]));
						break;
					case 'rotate':
						matrix.rotate(v[0], v[1], v[2]);
						break;
					case 'translate':
						matrix.translate(v[0], v[1]);
						break;
					case 'scale':
						matrix.scale(v);
						break;
					case 'skewX':
						matrix.skew(v[0], 0);
						break;
					case 'skewY':
						matrix.skew(0, v[0]);
						break;
					}
				}
				item.transform(matrix);
			}
		}

		function applyOpacity(item, value, name) {
			var key = name === 'fill-opacity' ? 'getFillColor' : 'getStrokeColor',
				color = item[key] && item[key]();
			if (color)
				color.setAlpha(parseFloat(value));
		}

		var attributes = Base.set(Base.each(SvgStyles, function(entry) {
			this[entry.attribute] = function(item, value) {
				if (item[entry.set]) {
					item[entry.set](convertValue(value, entry.type, entry.fromSVG));
					if (entry.type === 'color') {
						var color = item[entry.get]();
						if (color) {
							if (color._scaleToBounds) {
								var bounds = item.getBounds();
								color.transform(new Matrix()
									.translate(bounds.getPoint())
									.scale(bounds.getSize()));
							}
							if (item instanceof Shape) {
								color.transform(new Matrix().translate(
									item.getPosition(true).negate()));
							}
						}
					}
				}
			};
		}, {}), {
			id: function(item, value) {
				definitions[value] = item;
				if (item.setName)
					item.setName(value);
			},

			'clip-path': function(item, value) {
				var clip = getDefinition(value);
				if (clip) {
					clip = clip.clone();
					clip.setClipMask(true);
					if (item instanceof Group) {
						item.insertChild(0, clip);
					} else {
						return new Group(clip, item);
					}
				}
			},

			gradientTransform: applyTransform,
			transform: applyTransform,

			'fill-opacity': applyOpacity,
			'stroke-opacity': applyOpacity,

			visibility: function(item, value) {
				if (item.setVisible)
					item.setVisible(value === 'visible');
			},

			display: function(item, value) {
				if (item.setVisible)
					item.setVisible(value !== null);
			},

			'stop-color': function(item, value) {
				if (item.setColor)
					item.setColor(value);
			},

			'stop-opacity': function(item, value) {
				if (item._color)
					item._color.setAlpha(parseFloat(value));
			},

			offset: function(item, value) {
				if (item.setOffset) {
					var percent = value.match(/(.*)%$/);
					item.setOffset(percent ? percent[1] / 100 : parseFloat(value));
				}
			},

			viewBox: function(item, value, name, node, styles) {
				var rect = new Rectangle(convertValue(value, 'array')),
					size = getSize(node, null, null, true),
					group,
					matrix;
				if (item instanceof Group) {
					var scale = size ? size.divide(rect.getSize()) : 1,
					matrix = new Matrix().scale(scale)
							.translate(rect.getPoint().negate());
					group = item;
				} else if (item instanceof SymbolDefinition) {
					if (size)
						rect.setSize(size);
					group = item._item;
				}
				if (group)  {
					if (getAttribute(node, 'overflow', styles) !== 'visible') {
						var clip = new Shape.Rectangle(rect);
						clip.setClipMask(true);
						group.addChild(clip);
					}
					if (matrix)
						group.transform(matrix);
				}
			}
		});

		function getAttribute(node, name, styles) {
			var attr = node.attributes[name],
				value = attr && attr.value;
			if (!value) {
				var style = Base.camelize(name);
				value = node.style[style];
				if (!value && styles.node[style] !== styles.parent[style])
					value = styles.node[style];
			}
			return !value ? undefined
					: value === 'none' ? null
					: value;
		}

		function applyAttributes(item, node, isRoot) {
			var parent = node.parentNode,
				styles = {
					node: DomElement.getStyles(node) || {},
					parent: !isRoot && !/^defs$/i.test(parent.tagName)
							&& DomElement.getStyles(parent) || {}
				};
			Base.each(attributes, function(apply, name) {
				var value = getAttribute(node, name, styles);
				item = value !== undefined && apply(item, value, name, node, styles)
						|| item;
			});
			return item;
		}

		function getDefinition(value) {
			var match = value && value.match(/\((?:["'#]*)([^"')]+)/),
				res = match && definitions[match[1]
					.replace(window.location.href.split('#')[0] + '#', '')];
			if (res && res._scaleToBounds) {
				res = res.clone();
				res._scaleToBounds = true;
			}
			return res;
		}

		function importNode(node, options, isRoot) {
			var type = node.nodeName.toLowerCase(),
				isElement = type !== '#document',
				body = document.body,
				container,
				parent,
				next;
			if (isRoot && isElement) {
				rootSize = getSize(node, null, null, true)
						|| paper.getView().getSize();
				container = SvgElement.create('svg', {
					style: 'stroke-width: 1px; stroke-miterlimit: 10'
				});
				parent = node.parentNode;
				next = node.nextSibling;
				container.appendChild(node);
				body.appendChild(container);
			}
			var settings = paper.settings,
				applyMatrix = settings.applyMatrix,
				insertItems = settings.insertItems;
			settings.applyMatrix = false;
			settings.insertItems = false;
			var importer = importers[type],
				item = importer && importer(node, type, options, isRoot) || null;
			settings.insertItems = insertItems;
			settings.applyMatrix = applyMatrix;
			if (item) {
				if (isElement && !(item instanceof Group))
					item = applyAttributes(item, node, isRoot);
				var onImport = options.onImport,
					data = isElement && node.getAttribute('data-paper-data');
				if (onImport)
					item = onImport(node, item, options) || item;
				if (options.expandShapes && item instanceof Shape) {
					item.remove();
					item = item.toPath();
				}
				if (data)
					item._data = JSON.parse(data);
			}
			if (container) {
				body.removeChild(container);
				if (parent) {
					if (next) {
						parent.insertBefore(node, next);
					} else {
						parent.appendChild(node);
					}
				}
			}
			if (isRoot) {
				definitions = {};
				if (item && Base.pick(options.applyMatrix, applyMatrix))
					item.matrix.apply(true, true);
			}
			return item;
		}

		function importSVG(source, options, owner) {
			if (!source)
				return null;
			options = typeof options === 'function' ? { onLoad: options }
					: options || {};
			var scope = paper,
				item = null;

			function onLoad(svg) {
				try {
					var node = typeof svg === 'object' ? svg : new window.DOMParser()
							.parseFromString(svg, 'image/svg+xml');
					if (!node.nodeName) {
						node = null;
						throw new Error('Unsupported SVG source: ' + source);
					}
					paper = scope;
					item = importNode(node, options, true);
					if (!options || options.insert !== false) {
						owner._insertItem(undefined, item);
					}
					var onLoad = options.onLoad;
					if (onLoad)
						onLoad(item, svg);
				} catch (e) {
					onError(e);
				}
			}

			function onError(message, status) {
				var onError = options.onError;
				if (onError) {
					onError(message, status);
				} else {
					throw new Error(message);
				}
			}

			if (typeof source === 'string' && !/^.*</.test(source)) {
				var node = document.getElementById(source);
				if (node) {
					onLoad(node);
				} else {
					Http.request({
						url: source,
						async: true,
						onLoad: onLoad,
						onError: onError
					});
				}
			} else if (typeof File !== 'undefined' && source instanceof File) {
				var reader = new FileReader();
				reader.onload = function() {
					onLoad(reader.result);
				};
				reader.onerror = function() {
					onError(reader.error);
				};
				return reader.readAsText(source);
			} else {
				onLoad(source);
			}

			return item;
		}

		Item.inject({
			importSVG: function(node, options) {
				return importSVG(node, options, this);
			}
		});

		Project.inject({
			importSVG: function(node, options) {
				this.activate();
				return importSVG(node, options, this);
			}
		});
	};

	Base.exports.PaperScript = function() {
		var exports, define,
			scope = this;
	!function(e,r){return"object"==typeof exports&&"object"==typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):void r(e.acorn||(e.acorn={}))}(this,function(e){"use strict";function r(e){fe=e||{};for(var r in he)Object.prototype.hasOwnProperty.call(fe,r)||(fe[r]=he[r]);me=fe.sourceFile||null}function t(e,r){var t=ve(de,e);r+=" ("+t.line+":"+t.column+")";var n=new SyntaxError(r);throw n.pos=e,n.loc=t,n.raisedAt=be,n}function n(e){function r(e){if(1==e.length)return t+="return str === "+JSON.stringify(e[0])+";";t+="switch(str){";for(var r=0;r<e.length;++r)t+="case "+JSON.stringify(e[r])+":";t+="return true}return false;"}e=e.split(" ");var t="",n=[];e:for(var a=0;a<e.length;++a){for(var o=0;o<n.length;++o)if(n[o][0].length==e[a].length){n[o].push(e[a]);continue e}n.push([e[a]])}if(n.length>3){n.sort(function(e,r){return r.length-e.length}),t+="switch(str.length){";for(var a=0;a<n.length;++a){var i=n[a];t+="case "+i[0].length+":",r(i)}t+="}"}else r(e);return new Function("str",t)}function a(){this.line=Ae,this.column=be-Se}function o(){Ae=1,be=Se=0,Ee=!0,u()}function i(e,r){ge=be,fe.locations&&(ke=new a),we=e,u(),Ce=r,Ee=e.beforeExpr}function s(){var e=fe.onComment&&fe.locations&&new a,r=be,n=de.indexOf("*/",be+=2);if(-1===n&&t(be-2,"Unterminated comment"),be=n+2,fe.locations){Kr.lastIndex=r;for(var o;(o=Kr.exec(de))&&o.index<be;)++Ae,Se=o.index+o[0].length}fe.onComment&&fe.onComment(!0,de.slice(r+2,n),r,be,e,fe.locations&&new a)}function c(){for(var e=be,r=fe.onComment&&fe.locations&&new a,t=de.charCodeAt(be+=2);pe>be&&10!==t&&13!==t&&8232!==t&&8233!==t;)++be,t=de.charCodeAt(be);fe.onComment&&fe.onComment(!1,de.slice(e+2,be),e,be,r,fe.locations&&new a)}function u(){for(;pe>be;){var e=de.charCodeAt(be);if(32===e)++be;else if(13===e){++be;var r=de.charCodeAt(be);10===r&&++be,fe.locations&&(++Ae,Se=be)}else if(10===e||8232===e||8233===e)++be,fe.locations&&(++Ae,Se=be);else if(e>8&&14>e)++be;else if(47===e){var r=de.charCodeAt(be+1);if(42===r)s();else{if(47!==r)break;c()}}else if(160===e)++be;else{if(!(e>=5760&&Jr.test(String.fromCharCode(e))))break;++be}}}function l(){var e=de.charCodeAt(be+1);return e>=48&&57>=e?E(!0):(++be,i(xr))}function f(){var e=de.charCodeAt(be+1);return Ee?(++be,k()):61===e?x(Er,2):x(wr,1)}function d(){var e=de.charCodeAt(be+1);return 61===e?x(Er,2):x(jr,1)}function p(e){var r=de.charCodeAt(be+1);return r===e?x(124===e?Ir:Lr,2):61===r?x(Er,2):x(124===e?Ur:Rr,1)}function m(){var e=de.charCodeAt(be+1);return 61===e?x(Er,2):x(Fr,1)}function h(e){var r=de.charCodeAt(be+1);return r===e?45==r&&62==de.charCodeAt(be+2)&&Gr.test(de.slice(Le,be))?(be+=3,c(),u(),g()):x(Ar,2):61===r?x(Er,2):x(qr,1)}function v(e){var r=de.charCodeAt(be+1),t=1;return r===e?(t=62===e&&62===de.charCodeAt(be+2)?3:2,61===de.charCodeAt(be+t)?x(Er,t+1):x(Tr,t)):33==r&&60==e&&45==de.charCodeAt(be+2)&&45==de.charCodeAt(be+3)?(be+=4,c(),u(),g()):(61===r&&(t=61===de.charCodeAt(be+2)?3:2),x(Vr,t))}function b(e){var r=de.charCodeAt(be+1);return 61===r?x(Or,61===de.charCodeAt(be+2)?3:2):x(61===e?Cr:Sr,1)}function y(e){switch(e){case 46:return l();case 40:return++be,i(hr);case 41:return++be,i(vr);case 59:return++be,i(yr);case 44:return++be,i(br);case 91:return++be,i(fr);case 93:return++be,i(dr);case 123:return++be,i(pr);case 125:return++be,i(mr);case 58:return++be,i(gr);case 63:return++be,i(kr);case 48:var r=de.charCodeAt(be+1);if(120===r||88===r)return C();case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return E(!1);case 34:case 39:return A(e);case 47:return f(e);case 37:case 42:return d();case 124:case 38:return p(e);case 94:return m();case 43:case 45:return h(e);case 60:case 62:return v(e);case 61:case 33:return b(e);case 126:return x(Sr,1)}return!1}function g(e){if(e?be=ye+1:ye=be,fe.locations&&(xe=new a),e)return k();if(be>=pe)return i(Be);var r=de.charCodeAt(be);if(Qr(r)||92===r)return L();var n=y(r);if(n===!1){var o=String.fromCharCode(r);if("\\"===o||$r.test(o))return L();t(be,"Unexpected character '"+o+"'")}return n}function x(e,r){var t=de.slice(be,be+r);be+=r,i(e,t)}function k(){for(var e,r,n="",a=be;;){be>=pe&&t(a,"Unterminated regular expression");var o=de.charAt(be);if(Gr.test(o)&&t(a,"Unterminated regular expression"),e)e=!1;else{if("["===o)r=!0;else if("]"===o&&r)r=!1;else if("/"===o&&!r)break;e="\\"===o}++be}var n=de.slice(a,be);++be;var s=I();s&&!/^[gmsiy]*$/.test(s)&&t(a,"Invalid regexp flag");try{var c=new RegExp(n,s)}catch(u){u instanceof SyntaxError&&t(a,u.message),t(u)}return i(qe,c)}function w(e,r){for(var t=be,n=0,a=0,o=null==r?1/0:r;o>a;++a){var i,s=de.charCodeAt(be);if(i=s>=97?s-97+10:s>=65?s-65+10:s>=48&&57>=s?s-48:1/0,i>=e)break;++be,n=n*e+i}return be===t||null!=r&&be-t!==r?null:n}function C(){be+=2;var e=w(16);return null==e&&t(ye+2,"Expected hexadecimal number"),Qr(de.charCodeAt(be))&&t(be,"Identifier directly after number"),i(Te,e)}function E(e){var r=be,n=!1,a=48===de.charCodeAt(be);e||null!==w(10)||t(r,"Invalid number"),46===de.charCodeAt(be)&&(++be,w(10),n=!0);var o=de.charCodeAt(be);69!==o&&101!==o||(o=de.charCodeAt(++be),43!==o&&45!==o||++be,null===w(10)&&t(r,"Invalid number"),n=!0),Qr(de.charCodeAt(be))&&t(be,"Identifier directly after number");var s,c=de.slice(r,be);return n?s=parseFloat(c):a&&1!==c.length?/[89]/.test(c)||Oe?t(r,"Invalid number"):s=parseInt(c,8):s=parseInt(c,10),i(Te,s)}function A(e){be++;for(var r="";;){be>=pe&&t(ye,"Unterminated string constant");var n=de.charCodeAt(be);if(n===e)return++be,i(je,r);if(92===n){n=de.charCodeAt(++be);var a=/^[0-7]+/.exec(de.slice(be,be+3));for(a&&(a=a[0]);a&&parseInt(a,8)>255;)a=a.slice(0,-1);if("0"===a&&(a=null),++be,a)Oe&&t(be-2,"Octal literal in strict mode"),r+=String.fromCharCode(parseInt(a,8)),be+=a.length-1;else switch(n){case 110:r+="\n";break;case 114:r+="\r";break;case 120:r+=String.fromCharCode(S(2));break;case 117:r+=String.fromCharCode(S(4));break;case 85:r+=String.fromCharCode(S(8));break;case 116:r+="	";break;case 98:r+="\b";break;case 118:r+="\x0B";break;case 102:r+="\f";break;case 48:r+="\x00";break;case 13:10===de.charCodeAt(be)&&++be;case 10:fe.locations&&(Se=be,++Ae);break;default:r+=String.fromCharCode(n)}}else 13!==n&&10!==n&&8232!==n&&8233!==n||t(ye,"Unterminated string constant"),r+=String.fromCharCode(n),++be}}function S(e){var r=w(16,e);return null===r&&t(ye,"Bad character escape sequence"),r}function I(){Br=!1;for(var e,r=!0,n=be;;){var a=de.charCodeAt(be);if(Yr(a))Br&&(e+=de.charAt(be)),++be;else{if(92!==a)break;Br||(e=de.slice(n,be)),Br=!0,117!=de.charCodeAt(++be)&&t(be,"Expecting Unicode escape sequence \\uXXXX"),++be;var o=S(4),i=String.fromCharCode(o);i||t(be-1,"Invalid Unicode escape"),(r?Qr(o):Yr(o))||t(be-4,"Invalid Unicode escape"),e+=i}r=!1}return Br?e:de.slice(n,be)}function L(){var e=I(),r=De;return!Br&&Wr(e)&&(r=lr[e]),i(r,e)}function U(){Ie=ye,Le=ge,Ue=ke,g()}function F(e){if(Oe=e,be=ye,fe.locations)for(;Se>be;)Se=de.lastIndexOf("\n",Se-2)+1,--Ae;u(),g()}function R(){this.type=null,this.start=ye,this.end=null}function O(){this.start=xe,this.end=null,null!==me&&(this.source=me)}function V(){var e=new R;return fe.locations&&(e.loc=new O),fe.directSourceFile&&(e.sourceFile=fe.directSourceFile),fe.ranges&&(e.range=[ye,0]),e}function T(e){var r=new R;return r.start=e.start,fe.locations&&(r.loc=new O,r.loc.start=e.loc.start),fe.ranges&&(r.range=[e.range[0],0]),r}function q(e,r){return e.type=r,e.end=Le,fe.locations&&(e.loc.end=Ue),fe.ranges&&(e.range[1]=Le),e}function j(e){return fe.ecmaVersion>=5&&"ExpressionStatement"===e.type&&"Literal"===e.expression.type&&"use strict"===e.expression.value}function D(e){return we===e?(U(),!0):void 0}function B(){return!fe.strictSemicolons&&(we===Be||we===mr||Gr.test(de.slice(Le,ye)))}function M(){D(yr)||B()||X()}function z(e){we===e?U():X()}function X(){t(ye,"Unexpected token")}function N(e){"Identifier"!==e.type&&"MemberExpression"!==e.type&&t(e.start,"Assigning to rvalue"),Oe&&"Identifier"===e.type&&Nr(e.name)&&t(e.start,"Assigning to "+e.name+" in strict mode")}function W(e){Ie=Le=be,fe.locations&&(Ue=new a),Fe=Oe=null,Re=[],g();var r=e||V(),t=!0;for(e||(r.body=[]);we!==Be;){var n=J();r.body.push(n),t&&j(n)&&F(!0),t=!1}return q(r,"Program")}function J(){(we===wr||we===Er&&"/="==Ce)&&g(!0);var e=we,r=V();switch(e){case Me:case Ne:U();var n=e===Me;D(yr)||B()?r.label=null:we!==De?X():(r.label=le(),M());for(var a=0;a<Re.length;++a){var o=Re[a];if(null==r.label||o.name===r.label.name){if(null!=o.kind&&(n||"loop"===o.kind))break;if(r.label&&n)break}}return a===Re.length&&t(r.start,"Unsyntactic "+e.keyword),q(r,n?"BreakStatement":"ContinueStatement");case We:return U(),M(),q(r,"DebuggerStatement");case Pe:return U(),Re.push(Zr),r.body=J(),Re.pop(),z(tr),r.test=P(),M(),q(r,"DoWhileStatement");case _e:if(U(),Re.push(Zr),z(hr),we===yr)return $(r,null);if(we===rr){var i=V();return U(),G(i,!0),q(i,"VariableDeclaration"),1===i.declarations.length&&D(ur)?_(r,i):$(r,i)}var i=K(!1,!0);return D(ur)?(N(i),_(r,i)):$(r,i);case Ge:return U(),ce(r,!0);case Ke:return U(),r.test=P(),r.consequent=J(),r.alternate=D(He)?J():null,q(r,"IfStatement");case Qe:return Fe||fe.allowReturnOutsideFunction||t(ye,"'return' outside of function"),U(),D(yr)||B()?r.argument=null:(r.argument=K(),M()),q(r,"ReturnStatement");case Ye:U(),r.discriminant=P(),r.cases=[],z(pr),Re.push(et);for(var s,c;we!=mr;)if(we===ze||we===Je){var u=we===ze;s&&q(s,"SwitchCase"),r.cases.push(s=V()),s.consequent=[],U(),u?s.test=K():(c&&t(Ie,"Multiple default clauses"),c=!0,s.test=null),z(gr)}else s||X(),s.consequent.push(J());return s&&q(s,"SwitchCase"),U(),Re.pop(),q(r,"SwitchStatement");case Ze:return U(),Gr.test(de.slice(Le,ye))&&t(Le,"Illegal newline after throw"),r.argument=K(),M(),q(r,"ThrowStatement");case er:if(U(),r.block=H(),r.handler=null,we===Xe){var l=V();U(),z(hr),l.param=le(),Oe&&Nr(l.param.name)&&t(l.param.start,"Binding "+l.param.name+" in strict mode"),z(vr),l.guard=null,l.body=H(),r.handler=q(l,"CatchClause")}return r.guardedHandlers=Ve,r.finalizer=D($e)?H():null,r.handler||r.finalizer||t(r.start,"Missing catch or finally clause"),q(r,"TryStatement");case rr:return U(),G(r),M(),q(r,"VariableDeclaration");case tr:return U(),r.test=P(),Re.push(Zr),r.body=J(),Re.pop(),q(r,"WhileStatement");case nr:return Oe&&t(ye,"'with' in strict mode"),U(),r.object=P(),r.body=J(),q(r,"WithStatement");case pr:return H();case yr:return U(),q(r,"EmptyStatement");default:var f=Ce,d=K();if(e===De&&"Identifier"===d.type&&D(gr)){for(var a=0;a<Re.length;++a)Re[a].name===f&&t(d.start,"Label '"+f+"' is already declared");var p=we.isLoop?"loop":we===Ye?"switch":null;return Re.push({name:f,kind:p}),r.body=J(),Re.pop(),r.label=d,q(r,"LabeledStatement")}return r.expression=d,M(),q(r,"ExpressionStatement")}}function P(){z(hr);var e=K();return z(vr),e}function H(e){var r,t=V(),n=!0,a=!1;for(t.body=[],z(pr);!D(mr);){var o=J();t.body.push(o),n&&e&&j(o)&&(r=a,F(a=!0)),n=!1}return a&&!r&&F(!1),q(t,"BlockStatement")}function $(e,r){return e.init=r,z(yr),e.test=we===yr?null:K(),z(yr),e.update=we===vr?null:K(),z(vr),e.body=J(),Re.pop(),q(e,"ForStatement")}function _(e,r){return e.left=r,e.right=K(),z(vr),e.body=J(),Re.pop(),q(e,"ForInStatement")}function G(e,r){for(e.declarations=[],e.kind="var";;){var n=V();if(n.id=le(),Oe&&Nr(n.id.name)&&t(n.id.start,"Binding "+n.id.name+" in strict mode"),n.init=D(Cr)?K(!0,r):null,e.declarations.push(q(n,"VariableDeclarator")),!D(br))break}return e}function K(e,r){var t=Q(r);if(!e&&we===br){var n=T(t);for(n.expressions=[t];D(br);)n.expressions.push(Q(r));return q(n,"SequenceExpression")}return t}function Q(e){var r=Y(e);if(we.isAssign){var t=T(r);return t.operator=Ce,t.left=r,U(),t.right=Q(e),N(r),q(t,"AssignmentExpression")}return r}function Y(e){var r=Z(e);if(D(kr)){var t=T(r);return t.test=r,t.consequent=K(!0),z(gr),t.alternate=K(!0,e),q(t,"ConditionalExpression")}return r}function Z(e){return ee(re(),-1,e)}function ee(e,r,t){var n=we.binop;if(null!=n&&(!t||we!==ur)&&n>r){var a=T(e);a.left=e,a.operator=Ce;var o=we;U(),a.right=ee(re(),n,t);var i=q(a,o===Ir||o===Lr?"LogicalExpression":"BinaryExpression");return ee(i,r,t)}return e}function re(){if(we.prefix){var e=V(),r=we.isUpdate;return e.operator=Ce,e.prefix=!0,Ee=!0,U(),e.argument=re(),r?N(e.argument):Oe&&"delete"===e.operator&&"Identifier"===e.argument.type&&t(e.start,"Deleting local variable in strict mode"),q(e,r?"UpdateExpression":"UnaryExpression")}for(var n=te();we.postfix&&!B();){var e=T(n);e.operator=Ce,e.prefix=!1,e.argument=n,N(n),U(),n=q(e,"UpdateExpression")}return n}function te(){return ne(ae())}function ne(e,r){if(D(xr)){var t=T(e);return t.object=e,t.property=le(!0),t.computed=!1,ne(q(t,"MemberExpression"),r)}if(D(fr)){var t=T(e);return t.object=e,t.property=K(),t.computed=!0,z(dr),ne(q(t,"MemberExpression"),r)}if(!r&&D(hr)){var t=T(e);return t.callee=e,t.arguments=ue(vr,!1),ne(q(t,"CallExpression"),r)}return e}function ae(){switch(we){case or:var e=V();return U(),q(e,"ThisExpression");case De:return le();case Te:case je:case qe:var e=V();return e.value=Ce,e.raw=de.slice(ye,ge),U(),q(e,"Literal");case ir:case sr:case cr:var e=V();return e.value=we.atomValue,e.raw=we.keyword,U(),q(e,"Literal");case hr:var r=xe,t=ye;U();var n=K();return n.start=t,n.end=ge,fe.locations&&(n.loc.start=r,n.loc.end=ke),fe.ranges&&(n.range=[t,ge]),z(vr),n;case fr:var e=V();return U(),e.elements=ue(dr,!0,!0),q(e,"ArrayExpression");case pr:return ie();case Ge:var e=V();return U(),ce(e,!1);case ar:return oe();default:X()}}function oe(){var e=V();return U(),e.callee=ne(ae(),!0),D(hr)?e.arguments=ue(vr,!1):e.arguments=Ve,q(e,"NewExpression")}function ie(){var e=V(),r=!0,n=!1;for(e.properties=[],U();!D(mr);){if(r)r=!1;else if(z(br),fe.allowTrailingCommas&&D(mr))break;var a,o={key:se()},i=!1;if(D(gr)?(o.value=K(!0),a=o.kind="init"):fe.ecmaVersion>=5&&"Identifier"===o.key.type&&("get"===o.key.name||"set"===o.key.name)?(i=n=!0,a=o.kind=o.key.name,o.key=se(),we!==hr&&X(),o.value=ce(V(),!1)):X(),"Identifier"===o.key.type&&(Oe||n))for(var s=0;s<e.properties.length;++s){var c=e.properties[s];if(c.key.name===o.key.name){var u=a==c.kind||i&&"init"===c.kind||"init"===a&&("get"===c.kind||"set"===c.kind);u&&!Oe&&"init"===a&&"init"===c.kind&&(u=!1),u&&t(o.key.start,"Redefinition of property")}}e.properties.push(o)}return q(e,"ObjectExpression")}function se(){return we===Te||we===je?ae():le(!0)}function ce(e,r){we===De?e.id=le():r?X():e.id=null,e.params=[];var n=!0;for(z(hr);!D(vr);)n?n=!1:z(br),e.params.push(le());var a=Fe,o=Re;if(Fe=!0,Re=[],e.body=H(!0),Fe=a,Re=o,Oe||e.body.body.length&&j(e.body.body[0]))for(var i=e.id?-1:0;i<e.params.length;++i){var s=0>i?e.id:e.params[i];if((Xr(s.name)||Nr(s.name))&&t(s.start,"Defining '"+s.name+"' in strict mode"),i>=0)for(var c=0;i>c;++c)s.name===e.params[c].name&&t(s.start,"Argument name clash in strict mode")}return q(e,r?"FunctionDeclaration":"FunctionExpression")}function ue(e,r,t){for(var n=[],a=!0;!D(e);){if(a)a=!1;else if(z(br),r&&fe.allowTrailingCommas&&D(e))break;t&&we===br?n.push(null):n.push(K(!0))}return n}function le(e){var r=V();return e&&"everywhere"==fe.forbidReserved&&(e=!1),we===De?(!e&&(fe.forbidReserved&&(3===fe.ecmaVersion?Mr:zr)(Ce)||Oe&&Xr(Ce))&&-1==de.slice(ye,ge).indexOf("\\")&&t(ye,"The keyword '"+Ce+"' is reserved"),r.name=Ce):e&&we.keyword?r.name=we.keyword:X(),Ee=!1,U(),q(r,"Identifier")}e.version="0.5.0";var fe,de,pe,me;e.parse=function(e,t){return de=String(e),pe=de.length,r(t),o(),W(fe.program)};var he=e.defaultOptions={ecmaVersion:5,strictSemicolons:!1,allowTrailingCommas:!0,forbidReserved:!1,allowReturnOutsideFunction:!1,locations:!1,onComment:null,ranges:!1,program:null,sourceFile:null,directSourceFile:null},ve=e.getLineInfo=function(e,r){for(var t=1,n=0;;){Kr.lastIndex=n;var a=Kr.exec(e);if(!(a&&a.index<r))break;++t,n=a.index+a[0].length}return{line:t,column:r-n}};e.tokenize=function(e,t){function n(e){return Le=ge,g(e),a.start=ye,a.end=ge,a.startLoc=xe,a.endLoc=ke,a.type=we,a.value=Ce,a}de=String(e),pe=de.length,r(t),o();var a={};return n.jumpTo=function(e,r){if(be=e,fe.locations){Ae=1,Se=Kr.lastIndex=0;for(var t;(t=Kr.exec(de))&&t.index<e;)++Ae,Se=t.index+t[0].length}Ee=r,u()},n};var be,ye,ge,xe,ke,we,Ce,Ee,Ae,Se,Ie,Le,Ue,Fe,Re,Oe,Ve=[],Te={type:"num"},qe={type:"regexp"},je={type:"string"},De={type:"name"},Be={type:"eof"},Me={keyword:"break"},ze={keyword:"case",beforeExpr:!0},Xe={keyword:"catch"},Ne={keyword:"continue"},We={keyword:"debugger"},Je={keyword:"default"},Pe={keyword:"do",isLoop:!0},He={keyword:"else",beforeExpr:!0},$e={keyword:"finally"},_e={keyword:"for",isLoop:!0},Ge={keyword:"function"},Ke={keyword:"if"},Qe={keyword:"return",beforeExpr:!0},Ye={keyword:"switch"},Ze={keyword:"throw",beforeExpr:!0},er={keyword:"try"},rr={keyword:"var"},tr={keyword:"while",isLoop:!0},nr={keyword:"with"},ar={keyword:"new",beforeExpr:!0},or={keyword:"this"},ir={keyword:"null",atomValue:null},sr={keyword:"true",atomValue:!0},cr={keyword:"false",atomValue:!1},ur={keyword:"in",binop:7,beforeExpr:!0},lr={"break":Me,"case":ze,"catch":Xe,"continue":Ne,"debugger":We,"default":Je,"do":Pe,"else":He,"finally":$e,"for":_e,"function":Ge,"if":Ke,"return":Qe,"switch":Ye,"throw":Ze,"try":er,"var":rr,"while":tr,"with":nr,"null":ir,"true":sr,"false":cr,"new":ar,"in":ur,"instanceof":{keyword:"instanceof",binop:7,beforeExpr:!0},"this":or,"typeof":{keyword:"typeof",prefix:!0,beforeExpr:!0},"void":{keyword:"void",prefix:!0,beforeExpr:!0},"delete":{keyword:"delete",prefix:!0,beforeExpr:!0}},fr={type:"[",beforeExpr:!0},dr={type:"]"},pr={type:"{",beforeExpr:!0},mr={type:"}"},hr={type:"(",beforeExpr:!0},vr={type:")"},br={type:",",beforeExpr:!0},yr={type:";",beforeExpr:!0},gr={type:":",beforeExpr:!0},xr={type:"."},kr={type:"?",beforeExpr:!0},wr={binop:10,beforeExpr:!0},Cr={isAssign:!0,beforeExpr:!0},Er={isAssign:!0,beforeExpr:!0},Ar={postfix:!0,prefix:!0,isUpdate:!0},Sr={prefix:!0,beforeExpr:!0},Ir={binop:1,beforeExpr:!0},Lr={binop:2,beforeExpr:!0},Ur={binop:3,beforeExpr:!0},Fr={binop:4,beforeExpr:!0},Rr={binop:5,beforeExpr:!0},Or={binop:6,beforeExpr:!0},Vr={binop:7,beforeExpr:!0},Tr={binop:8,beforeExpr:!0},qr={binop:9,prefix:!0,beforeExpr:!0},jr={binop:10,beforeExpr:!0};e.tokTypes={bracketL:fr,bracketR:dr,braceL:pr,braceR:mr,parenL:hr,parenR:vr,comma:br,semi:yr,colon:gr,dot:xr,question:kr,slash:wr,eq:Cr,name:De,eof:Be,num:Te,regexp:qe,string:je};for(var Dr in lr)e.tokTypes["_"+Dr]=lr[Dr];var Br,Mr=n("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),zr=n("class enum extends super const export import"),Xr=n("implements interface let package private protected public static yield"),Nr=n("eval arguments"),Wr=n("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),Jr=/[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,Pr="\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc",Hr="\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f",$r=new RegExp("["+Pr+"]"),_r=new RegExp("["+Pr+Hr+"]"),Gr=/[\n\r\u2028\u2029]/,Kr=/\r\n|[\n\r\u2028\u2029]/g,Qr=e.isIdentifierStart=function(e){return 65>e?36===e:91>e?!0:97>e?95===e:123>e?!0:e>=170&&$r.test(String.fromCharCode(e))},Yr=e.isIdentifierChar=function(e){return 48>e?36===e:58>e?!0:65>e?!1:91>e?!0:97>e?95===e:123>e?!0:e>=170&&_r.test(String.fromCharCode(e))},Zr={kind:"loop"},et={kind:"switch"}});

		var binaryOperators = {
			'+': '__add',
			'-': '__subtract',
			'*': '__multiply',
			'/': '__divide',
			'%': '__modulo',
			'==': '__equals',
			'!=': '__equals'
		};

		var unaryOperators = {
			'-': '__negate',
			'+': null
		};

		var fields = Base.each(
			['add', 'subtract', 'multiply', 'divide', 'modulo', 'equals', 'negate'],
			function(name) {
				this['__' + name] = '#' + name;
			},
			{}
		);
		Point.inject(fields);
		Size.inject(fields);
		Color.inject(fields);

		function __$__(left, operator, right) {
			var handler = binaryOperators[operator];
			if (left && left[handler]) {
				var res = left[handler](right);
				return operator === '!=' ? !res : res;
			}
			switch (operator) {
			case '+': return left + right;
			case '-': return left - right;
			case '*': return left * right;
			case '/': return left / right;
			case '%': return left % right;
			case '==': return left == right;
			case '!=': return left != right;
			}
		}

		function $__(operator, value) {
			var handler = unaryOperators[operator];
			if (handler && value && value[handler])
				return value[handler]();
			switch (operator) {
			case '+': return +value;
			case '-': return -value;
			}
		}

		function parse(code, options) {
			return scope.acorn.parse(code, options);
		}

		function compile(code, options) {
			if (!code)
				return '';
			options = options || {};

			var insertions = [];

			function getOffset(offset) {
				for (var i = 0, l = insertions.length; i < l; i++) {
					var insertion = insertions[i];
					if (insertion[0] >= offset)
						break;
					offset += insertion[1];
				}
				return offset;
			}

			function getCode(node) {
				return code.substring(getOffset(node.range[0]),
						getOffset(node.range[1]));
			}

			function getBetween(left, right) {
				return code.substring(getOffset(left.range[1]),
						getOffset(right.range[0]));
			}

			function replaceCode(node, str) {
				var start = getOffset(node.range[0]),
					end = getOffset(node.range[1]),
					insert = 0;
				for (var i = insertions.length - 1; i >= 0; i--) {
					if (start > insertions[i][0]) {
						insert = i + 1;
						break;
					}
				}
				insertions.splice(insert, 0, [start, str.length - end + start]);
				code = code.substring(0, start) + str + code.substring(end);
			}

			function walkAST(node, parent) {
				if (!node)
					return;
				for (var key in node) {
					if (key === 'range' || key === 'loc')
						continue;
					var value = node[key];
					if (Array.isArray(value)) {
						for (var i = 0, l = value.length; i < l; i++)
							walkAST(value[i], node);
					} else if (value && typeof value === 'object') {
						walkAST(value, node);
					}
				}
				switch (node.type) {
				case 'UnaryExpression':
					if (node.operator in unaryOperators
							&& node.argument.type !== 'Literal') {
						var arg = getCode(node.argument);
						replaceCode(node, '$__("' + node.operator + '", '
								+ arg + ')');
					}
					break;
				case 'BinaryExpression':
					if (node.operator in binaryOperators
							&& node.left.type !== 'Literal') {
						var left = getCode(node.left),
							right = getCode(node.right),
							between = getBetween(node.left, node.right),
							operator = node.operator;
						replaceCode(node, '__$__(' + left + ','
								+ between.replace(new RegExp('\\' + operator),
									'"' + operator + '"')
								+ ', ' + right + ')');
					}
					break;
				case 'UpdateExpression':
				case 'AssignmentExpression':
					var parentType = parent && parent.type;
					if (!(
							parentType === 'ForStatement'
							|| parentType === 'BinaryExpression'
								&& /^[=!<>]/.test(parent.operator)
							|| parentType === 'MemberExpression' && parent.computed
					)) {
						if (node.type === 'UpdateExpression') {
							var arg = getCode(node.argument),
								exp = '__$__(' + arg + ', "' + node.operator[0]
										+ '", 1)',
								str = arg + ' = ' + exp;
							if (!node.prefix
									&& (parentType === 'AssignmentExpression'
										|| parentType === 'VariableDeclarator')) {
								if (getCode(parent.left || parent.id) === arg)
									str = exp;
								str = arg + '; ' + str;
							}
							replaceCode(node, str);
						} else {
							if (/^.=$/.test(node.operator)
									&& node.left.type !== 'Literal') {
								var left = getCode(node.left),
									right = getCode(node.right);
								replaceCode(node, left + ' = __$__(' + left + ', "'
										+ node.operator[0] + '", ' + right + ')');
							}
						}
					}
					break;
				}
			}

			function encodeVLQ(value) {
				var res = '',
					base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
				value = (Math.abs(value) << 1) + (value < 0 ? 1 : 0);
				while (value || !res) {
					var next = value & (32 - 1);
					value >>= 5;
					if (value)
						next |= 32;
					res += base64[next];
				}
				return res;
			}

			var url = options.url || '',
				agent = paper.agent,
				version = agent.versionNumber,
				offsetCode = false,
				sourceMaps = options.sourceMaps,
				source = options.source || code,
				lineBreaks = /\r\n|\n|\r/mg,
				offset = options.offset || 0,
				map;
			if (sourceMaps && (agent.chrome && version >= 30
					|| agent.webkit && version >= 537.76
					|| agent.firefox && version >= 23
					|| agent.node)) {
				if (agent.node) {
					offset -= 2;
				} else if (window && url && !window.location.href.indexOf(url)) {
					var html = document.getElementsByTagName('html')[0].innerHTML;
					offset = html.substr(0, html.indexOf(code) + 1).match(
							lineBreaks).length + 1;
				}
				offsetCode = offset > 0 && !(
						agent.chrome && version >= 36 ||
						agent.safari && version >= 600 ||
						agent.firefox && version >= 40 ||
						agent.node);
				var mappings = ['AA' + encodeVLQ(offsetCode ? 0 : offset) + 'A'];
				mappings.length = (code.match(lineBreaks) || []).length + 1
						+ (offsetCode ? offset : 0);
				map = {
					version: 3,
					file: url,
					names:[],
					mappings: mappings.join(';AACA'),
					sourceRoot: '',
					sources: [url],
					sourcesContent: [source]
				};
			}
			walkAST(parse(code, { ranges: true }));
			if (map) {
				if (offsetCode) {
					code = new Array(offset + 1).join('\n') + code;
				}
				if (/^(inline|both)$/.test(sourceMaps)) {
					code += "\n//# sourceMappingURL=data:application/json;base64,"
							+ window.btoa(unescape(encodeURIComponent(
								JSON.stringify(map))));
				}
				code += "\n//# sourceURL=" + (url || 'paperscript');
			}
			return {
				url: url,
				source: source,
				code: code,
				map: map
			};
		}

		function execute(code, scope, options) {
			paper = scope;
			var view = scope.getView(),
				tool = /\btool\.\w+|\s+on(?:Key|Mouse)(?:Up|Down|Move|Drag)\b/
						.test(code) && !/\bnew\s+Tool\b/.test(code)
							? new Tool() : null,
				toolHandlers = tool ? tool._events : [],
				handlers = ['onFrame', 'onResize'].concat(toolHandlers),
				params = [],
				args = [],
				func,
				compiled = typeof code === 'object' ? code : compile(code, options);
			code = compiled.code;
			function expose(scope, hidden) {
				for (var key in scope) {
					if ((hidden || !/^_/.test(key)) && new RegExp('([\\b\\s\\W]|^)'
							+ key.replace(/\$/g, '\\$') + '\\b').test(code)) {
						params.push(key);
						args.push(scope[key]);
					}
				}
			}
			expose({ __$__: __$__, $__: $__, paper: scope, view: view, tool: tool },
					true);
			expose(scope);
			handlers = Base.each(handlers, function(key) {
				if (new RegExp('\\s+' + key + '\\b').test(code)) {
					params.push(key);
					this.push(key + ': ' + key);
				}
			}, []).join(', ');
			if (handlers)
				code += '\nreturn { ' + handlers + ' };';
			var agent = paper.agent;
			if (document && (agent.chrome
					|| agent.firefox && agent.versionNumber < 40)) {
				var script = document.createElement('script'),
					head = document.head || document.getElementsByTagName('head')[0];
				if (agent.firefox)
					code = '\n' + code;
				script.appendChild(document.createTextNode(
					'paper._execute = function(' + params + ') {' + code + '\n}'
				));
				head.appendChild(script);
				func = paper._execute;
				delete paper._execute;
				head.removeChild(script);
			} else {
				func = Function(params, code);
			}
			var res = func.apply(scope, args) || {};
			Base.each(toolHandlers, function(key) {
				var value = res[key];
				if (value)
					tool[key] = value;
			});
			if (view) {
				if (res.onResize)
					view.setOnResize(res.onResize);
				view.emit('resize', {
					size: view.size,
					delta: new Point()
				});
				if (res.onFrame)
					view.setOnFrame(res.onFrame);
				view.requestUpdate();
			}
			return compiled;
		}

		function loadScript(script) {
			if (/^text\/(?:x-|)paperscript$/.test(script.type)
					&& PaperScope.getAttribute(script, 'ignore') !== 'true') {
				var canvasId = PaperScope.getAttribute(script, 'canvas'),
					canvas = document.getElementById(canvasId),
					src = script.src || script.getAttribute('data-src'),
					async = PaperScope.hasAttribute(script, 'async'),
					scopeAttribute = 'data-paper-scope';
				if (!canvas)
					throw new Error('Unable to find canvas with id "'
							+ canvasId + '"');
				var scope = PaperScope.get(canvas.getAttribute(scopeAttribute))
							|| new PaperScope().setup(canvas);
				canvas.setAttribute(scopeAttribute, scope._id);
				if (src) {
					Http.request({
						url: src,
						async: async,
						mimeType: 'text/plain',
						onLoad: function(code) {
							execute(code, scope, src);
						}
					});
				} else {
					execute(script.innerHTML, scope, script.baseURI);
				}
				script.setAttribute('data-paper-ignore', 'true');
				return scope;
			}
		}

		function loadAll() {
			Base.each(document && document.getElementsByTagName('script'),
					loadScript);
		}

		function load(script) {
			return script ? loadScript(script) : loadAll();
		}

		if (window) {
			if (document.readyState === 'complete') {
				setTimeout(loadAll);
			} else {
				DomEvent.add(window, { load: loadAll });
			}
		}

		return {
			compile: compile,
			execute: execute,
			load: load,
			parse: parse
		};

	}.call(this);

	paper = new (PaperScope.inject(Base.exports, {
		enumerable: true,
		Base: Base,
		Numerical: Numerical,
		Key: Key,
		DomEvent: DomEvent,
		DomElement: DomElement,
		document: document,
		window: window,
		Symbol: SymbolDefinition,
		PlacedSymbol: SymbolItem
	}))();

	if (paper.agent.node)
		__webpack_require__(303)(paper);

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (paper), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module === 'object' && module) {
		module.exports = paper;
	}

	return paper;
	}.call(this, typeof self === 'object' ? self : null);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 302 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 303 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _pen = __webpack_require__(305);

	var _pen2 = _interopRequireDefault(_pen);

	var _shape = __webpack_require__(308);

	var _shape2 = _interopRequireDefault(_shape);

	var _text = __webpack_require__(309);

	var _text2 = _interopRequireDefault(_text);

	var _select = __webpack_require__(310);

	var _select2 = _interopRequireDefault(_select);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ToolBar = function () {
		function ToolBar(elems) {
			var _this = this;

			_classCallCheck(this, ToolBar);

			this._elems = elems;
			this._selected = null;

			//set toolbar
			this._tools = new Map();
			// this._tools.set('Pen', new Pen());
			// this._tools.set('Geo', new Pen('red'));
			this._elems['toolbar'].children('div').each(function (index, element) {
				var name = $(element).attr('data-name');
				switch (name) {
					case "Select":
						_this._tools.set(name, new _select2.default());
						break;
					case "Pen":
						_this._tools.set(name, new _pen2.default());
						break;
					case "Shape":
						_this._tools.set(name, new _shape2.default());
						break;
					case "Text":
						_this._tools.set(name, new _text2.default());
				}
				$(element).on('click', function (event) {
					return _this.select(event);
				});
			});
		}

		_createClass(ToolBar, [{
			key: 'select',
			value: function select(event) {
				var name = $(event.currentTarget).attr('data-name');
				this._selected = this._tools.get(name);
				console.log(this._selected);
				this._selected._tool.activate();
			}
		}, {
			key: 'tools',
			get: function get() {
				return this._tools;
			}
		}]);

		return ToolBar;
	}();

	exports.default = ToolBar;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(paper) {'use strict';
	// import paper from '../../node_modules/paper/dist/paper-full.js';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _style = __webpack_require__(306);

	var _style2 = _interopRequireDefault(_style);

	var _connect = __webpack_require__(307);

	var _connect2 = _interopRequireDefault(_connect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Pen = function () {
		function Pen() {
			var _this = this;

			_classCallCheck(this, Pen);

			this._toolName = 'Pen';
			this._tool = new paper.Tool();
			this._tool.onMouseDown = function (event) {
				return _this.onMouseDown(event);
			};
			this._tool.onMouseDrag = function (event) {
				_this._path.add(event.point);
				var data = {
					tool: _this._toolName,
					name: _this._path.name,
					action: "onMouseDrag",
					point: event.point,
					type: 'action'
				};
				_connect2.default.send(data);
			};

			// this._path = null;
			// this._color = 'black';

			this._style = new _style2.default();
			_connect2.default.addCallBacks(this._toolName, this);
		}

		_createClass(Pen, [{
			key: 'onMouseDown',
			value: function onMouseDown(event) {

				this._path = new paper.Path();

				this._path.name = _connect2.default.id + '-' + this._path.id;
				// this._path.strokeColor = this._color;
				this._path.strokeColor = _style2.default.frontColor;
				this._path.strokeWidth = this._style.strokeWidth;
				this._path.dashArray = this._style.dashArray;
				this._path.shadowBlur = this._style.shadowBlur;
				this._path.shadowOffset = this._style.shadowOffset;
				this._path.visible = this._style.visible;
				this._path.blendMode = this._style.blendMode;
				this._path.opacity = this._style.opacity;
				this._path.add(event.point);
				var data = {
					tool: this._toolName,
					name: this._path.name,
					action: "onMouseDown",
					point: event.point,
					type: 'action'
				};
				_connect2.default.send(data);
			}
		}, {
			key: 'peerAction',
			value: function peerAction(data) {
				if (data['action'] == 'onMouseDown') {
					var path = new paper.Path();
					path.name = data['name'];
					// this._path.strokeColor = this._color;
					path.strokeColor = _style2.default.frontColor;
					path.strokeWidth = this._style.strokeWidth;
					path.dashArray = this._style.dashArray;
					path.shadowBlur = this._style.shadowBlur;
					path.shadowOffset = this._style.shadowOffset;
					path.visible = this._style.visible;
					path.blendMode = this._style.blendMode;
					path.opacity = this._style.opacity;
					path.add([data['point'][1], data['point'][2]]);
				} else {
					var _path = paper.project.activeLayer.children[data['name']];
					_path.add([data['point'][1], data['point'][2]]);
				}
			}
		}, {
			key: 'tool',
			get: function get() {
				return this._tool;
			}
		}, {
			key: 'name',
			get: function get() {
				return this._toolName;
			}
		}, {
			key: 'strokeWidth',

			// get color () {return this._color};
			// set color (color) {this._color = color};

			set: function set(width) {
				this._style.strokeWidth = width;
			}
		}, {
			key: 'dashArray',
			set: function set(array) {
				this._style.dashArray = array;
			}
		}, {
			key: 'shadowBlur',
			set: function set(num) {
				this._style.shadowBlur = num;
			}
		}, {
			key: 'shadowOffset',
			set: function set(num) {
				this._style.shadowOffset = num;
			}
		}, {
			key: 'visible',
			set: function set(vis) {
				this._style.visible = vis;
			}
		}, {
			key: 'blendMode',
			set: function set(mode) {
				this._style.blendMode = mode;
			}
		}, {
			key: 'opacity',
			set: function set(num) {
				this._style.opacity = num;
			}
		}]);

		return Pen;
	}();

	exports.default = Pen;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ },
/* 306 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Style = function () {
		function Style() {
			_classCallCheck(this, Style);

			//Stroke Style
			// this.strokeColor = 'black';
			this._strokeWidth = 1;
			// this._strokeCap = 'butt'; //'round', 'square', 'butt'
			// this._stokeJoin = 'miter'; //'miter', 'round', 'bevel'
			// this._dashOffset = 0;
			this._dashArray = [];

			//Fill Style
			//this._fillColor = 'black';

			//Shadow Style
			//this._shadowColor = 'black';
			this._shadowBlur = 0;
			this._shadowOffset = 0;

			//properties
			this._visible = true;
			this._blendMode = 'normal'; //'normal', 'multiply', 'screen', 'overlay', 'soft-light', 'hard- light', 'color-dodge', 'color-burn', 'darken', 'lighten', 'difference', 'exclusion', 'hue', 'saturation', 'luminosity', 'color', 'add', 'subtract', 'average', 'pin-light', 'negation', 'source- over', 'source-in', 'source-out', 'source-atop', 'destination-over', 'destination-in', 'destination-out', 'destination-atop', 'lighter', 'darker', 'copy', 'xor'
			this._opacity = 1;

			//Character Style
			this._fontFamily = 'sans-serif';
			this._fontWeight = 'normal'; //bold
			this._fontSize = 20;
			// this._leading = 12;

			//Paragraph Style
			this._justification = 'left'; //'left', 'right', 'center'
		}

		_createClass(Style, [{
			key: 'strokeWidth',
			get: function get() {
				return this._strokeWidth;
			},
			set: function set(width) {
				this._strokeWidth = width;
			}
		}, {
			key: 'dashArray',
			get: function get() {
				return this._dashArray;
			},
			set: function set(array) {
				this._dashArray = array;
			}
		}, {
			key: 'shadowBlur',
			get: function get() {
				return this._shadowBlur;
			},
			set: function set(num) {
				this._shadowBlur = num;
			}
		}, {
			key: 'shadowOffset',
			get: function get() {
				return this._shadowOffset;
			},
			set: function set(num) {
				this._shadowOffset = num;
			}
		}, {
			key: 'visible',
			get: function get() {
				return this._visible;
			},
			set: function set(vis) {
				this._visible = vis;
			}
		}, {
			key: 'blendMode',
			get: function get() {
				return this._blendMode;
			},
			set: function set(mode) {
				this._blendMode = mode;
			}
		}, {
			key: 'opacity',
			get: function get() {
				return this._opacity;
			},
			set: function set(num) {
				this._opacity = num;
			}
		}, {
			key: 'fontFamily',
			get: function get() {
				return this._fontFamily;
			},
			set: function set(font) {
				this._fontFamily = font;
			}
		}, {
			key: 'fontWeight',
			get: function get() {
				return this._fontWeight;
			},
			set: function set(weight) {
				this._fontWeight = fontWeight;
			}
		}, {
			key: 'fontSize',
			get: function get() {
				return this._fontSize;
			},
			set: function set(size) {
				this._fontSize = fontSize;
			}
		}, {
			key: 'justification',
			get: function get() {
				return this._justification;
			},
			set: function set(just) {
				this._justification = just;
			}
		}]);

		return Style;
	}();

	exports.default = Style;

	Style.frontColor = 'black';
	Style.backColor = 'white';

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($, paper) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var conn = new (function () {
		function Connect() {
			var _this = this;

			_classCallCheck(this, Connect);

			this._peer = new Peer({ key: 'h4vvvnumco50cnmi' });
			this._peer.on('open', function (id) {
				return _this.open(id);
			});
			this._peer.on('connection', function (conn) {
				return _this.connection(conn);
			});
			$('#connect').on('click', function () {
				return _this.connect();
			});
			this._connections = new Map();
			this._tools = {};
		}

		_createClass(Connect, [{
			key: 'open',
			value: function open(id) {
				this._id = id;
				console.log(this._peer);
				console.log('My peer ID is: ' + this._id);
				$('#myId').text('ID: ' + this._id);
			}
		}, {
			key: 'connect',
			value: function connect() {
				var _this2 = this;

				var id = $('#peerId').val();
				var conn = this._peer.connect(id);
				conn.on('open', function () {
					console.log(conn);
					conn.on('data', function (data) {
						_this2.receive(data);
					});
					conn.serialization = 'json';
					_this2._connections.set(id, conn);
				});
			}
		}, {
			key: 'connection',
			value: function connection(conn) {
				var _this3 = this;

				conn.on('open', function () {
					console.log(conn);
					conn.on('data', function (data) {
						_this3.receive(data);
					});
					conn.serialization = 'json';
					_this3._connections.set(conn.peer, conn);
					conn.send({ type: "sync", project: paper.project.exportJSON() });
				});
			}
		}, {
			key: 'send',
			value: function send(data) {
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = this._connections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var _step$value = _slicedToArray(_step.value, 2);

						var id = _step$value[0];
						var _conn = _step$value[1];

						if (_conn != null && _conn.open) {
							_conn.send(data);
						}
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}, {
			key: 'receive',
			value: function receive(data) {
				if (data['type'] == 'action') {
					var tool = this._tools[data['tool']];
					tool.peerAction(data);
				} else {
					paper.project.importJSON(data['project']);
				}
			}
		}, {
			key: 'addCallBacks',
			value: function addCallBacks(name, tool) {
				this._tools[name] = tool;
			}
		}, {
			key: 'peer',
			get: function get() {
				return this._peer;
			}
		}, {
			key: 'id',
			get: function get() {
				return this._id;
			}
		}]);

		return Connect;
	}())();

	exports.default = conn;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1), __webpack_require__(301)))

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(paper) {'use strict';
	// import paper from '../../node_modules/paper/dist/paper-full.js';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _style = __webpack_require__(306);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Shape = function () {
		function Shape() {
			var _this = this;

			_classCallCheck(this, Shape);

			this._tool = new paper.Tool();
			// this._tool.onMouseDown = (event) => this.onMouseDown(event);
			this._tool.onMouseDrag = function (event) {
				return _this.onMouseDrag(event);
			};

			this._path = null;
			this._type = 'circle';
			this._shapes = new Map([['circle', this.createCircle], ['rect', this.createRect], ['ellipse', this.createEllipse], ['arc', this.createArc], ['polygon', this.createPolygon], ['star', this.createStar]]);
			this._style = new _style2.default();
		}

		_createClass(Shape, [{
			key: 'onMouseDrag',
			value: function onMouseDrag(event) {
				this._path = this._shapes.get(this._type)(event);
				this._path.strokeColor = _style2.default.frontColor;
				this._path.strokeWidth = this._style.strokeWidth;
				this._path.dashArray = this._style.dashArray;
				this._path.shadowBlur = this._style.shadowBlur;
				this._path.shadowOffset = this._style.shadowOffset;
				this._path.visible = this._style.visible;
				this._path.blendMode = this._style.blendMode;
				this._path.opacity = this._style.opacity;
				this._path.removeOnDrag();
			}
		}, {
			key: 'createCircle',
			value: function createCircle(event) {
				return new paper.Path.Circle({
					center: event.downPoint,
					radius: event.downPoint.subtract(event.point).length
				});
			}
		}, {
			key: 'createRect',
			value: function createRect() {}
		}, {
			key: 'createEllipse',
			value: function createEllipse() {}
		}, {
			key: 'createArc',
			value: function createArc() {}
		}, {
			key: 'createPolygon',
			value: function createPolygon() {}
		}, {
			key: 'createStar',
			value: function createStar() {}
		}, {
			key: 'tool',
			get: function get() {
				return this._tool;
			}
		}, {
			key: 'type',
			set: function set(type) {
				this._type = type;
			}
		}]);

		return Shape;
	}();

	exports.default = Shape;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(paper, $) {'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _style = __webpack_require__(306);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// import paper from '../../node_modules/paper/dist/paper-full.js';

	var Text = function () {
		function Text() {
			var _this = this;

			_classCallCheck(this, Text);

			this._tool = new paper.Tool();
			this._tool.onMouseDown = function (event) {
				return _this.onMouseDown(event);
			};
			this._tool.onMouseUp = function (event) {
				return _this.onMouseUp(event);
			};

			this._text = null;
			this._style = new _style2.default();
		}

		_createClass(Text, [{
			key: 'onMouseDown',
			value: function onMouseDown(event) {
				var hitOptions = {
					fill: true,
					class: paper.PointText,
					tolerance: 5
				};

				var hitRes = paper.project.hitTest(event.point, hitOptions);
				if (hitRes) {
					this._text = hitRes.item;
					this._text.selected = true;
				} else {
					this._text = new paper.PointText(event.point);
					this._text.fontFamily = this._style.fontFamily;
					this._text.fontWeight = this._style.fontWeight;
					this._text.fontSize = this._style.fontSize;
					this._text.justification = this._style.justification;
					this._text.fillColor = _style2.default.frontColor;
					this._text.shadowBlur = this._style.shadowBlur;
					this._text.shadowOffset = this._style.shadowOffset;
					this._text.visible = this._style.visible;
					this._text.blendMode = this._style.blendMode;
					this._text.opacity = this._style.opacity;
					this._text.selected = true;
				}
				this.edit();
			}
		}, {
			key: 'onMouseUp',
			value: function onMouseUp(event) {}
		}, {
			key: 'edit',
			value: function edit() {
				var _this2 = this;

				var input = $('<input id="fakeTextInput" class="fakeTextInput"></input>');

				input.css({
					position: 'absolute',
					top: 80,
					left: 100,
					zIndex: 10
				});

				$('body').append(input);
				var fakeTextInput = $('#fakeTextInput');
				fakeTextInput.focus();
				fakeTextInput.val(this._text.content);

				fakeTextInput.keyup(function (event) {
					_this2._text.content = fakeTextInput.val();
					if (event.keyCode === 13) {
						// finalizeInput(textItem);
						_this2._text.selected = false;
						$(event.currentTarget).remove();
					}
					paper.project.view.update();
				});
			}
		}, {
			key: 'tool',
			get: function get() {
				return this._tool;
			}
		}, {
			key: 'strokeWidth',
			set: function set(width) {
				this._style.strokeWidth = width;
			}
		}, {
			key: 'dashArray',
			set: function set(array) {
				this._style.dashArray = array;
			}
		}, {
			key: 'shadowBlur',
			set: function set(num) {
				this._style.shadowBlur = num;
			}
		}, {
			key: 'shadowOffset',
			set: function set(num) {
				this._style.shadowOffset = num;
			}
		}, {
			key: 'visible',
			set: function set(vis) {
				this._style.visible = vis;
			}
		}, {
			key: 'blendMode',
			set: function set(mode) {
				this._style.blendMode = mode;
			}
		}, {
			key: 'opacity',
			set: function set(num) {
				this._style.opacity = num;
			}
		}, {
			key: 'fontFamily',
			set: function set(font) {
				this._style.fontFamily = font;
			}
		}, {
			key: 'fontWeight',
			set: function set(weight) {
				this._style.fontWeight = weight;
			}
		}, {
			key: 'fontSize',
			set: function set(size) {
				this._style.fontSize = size;
			}
		}, {
			key: 'justification',
			set: function set(just) {
				this._style.justification = just;
			}
		}]);

		return Text;
	}();

	exports.default = Text;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301), __webpack_require__(1)))

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(paper) {'use strict';
	// import paper from '../../node_modules/paper/dist/paper-full.js';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Select = function () {
		function Select() {
			var _this = this;

			_classCallCheck(this, Select);

			this._tool = new paper.Tool();
			this._tool.onMouseDown = function (event) {
				return _this.onMouseDown(event);
			};
			this._tool.onMouseDrag = function (event) {
				return _this.onMouseDrag(event);
			};
			this._item = null;
		}

		_createClass(Select, [{
			key: 'onMouseDown',
			value: function onMouseDown(event) {
				var hitOptions = {
					segments: true,
					stroke: true,
					curves: true,
					fill: true,
					guide: false,
					tolerance: 5
				};
				var hitRes = paper.project.hitTest(event.point, hitOptions);
				if (hitRes) {
					this._item = hitRes.item;
					this._item.selected = true;
				} else if (this._item) {
					this._item.selected = false;
					this._item = null;
				}
			}
		}, {
			key: 'onMouseDrag',
			value: function onMouseDrag(event) {
				if (this._item && this._item.selected) {
					this._item.position = this._item.position.add(event.delta);
				}
			}
		}, {
			key: 'tool',
			get: function get() {
				return this._tool;
			}
		}]);

		return Select;
	}();

	exports.default = Select;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301)))

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(paper, fileSaver) {'use strict';
	// import paper from '../node_modules/paper/dist/paper-full.js';
	// import saveAs from 'file-saver';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Menu = function () {
		function Menu(elems) {
			var _this = this;

			_classCallCheck(this, Menu);

			this._elems = elems;

			this._elems['menu'].find('#imageUpload').change(function (event) {
				return _this.uploadImage(event);
			});
			this._elems['menu'].find('#exportImage').on('click', function (event) {
				return _this.exportImage(event);
			});
		}

		_createClass(Menu, [{
			key: 'uploadImage',
			value: function uploadImage(event) {
				var images = event.target.files; // FileList object

				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;

				try {
					for (var _iterator = images[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var f = _step.value;

						var reader = new FileReader();
						reader.onload = function (event) {
							var raster = new paper.Raster({
								source: event.target.result,
								position: paper.view.center
							});
						};
						// Read in the image file as a data URL.
						reader.readAsDataURL(f);
					}
				} catch (err) {
					_didIteratorError = true;
					_iteratorError = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion && _iterator.return) {
							_iterator.return();
						}
					} finally {
						if (_didIteratorError) {
							throw _iteratorError;
						}
					}
				}
			}
		}, {
			key: 'exportImage',
			value: function exportImage(event) {
				var tempImg = paper.project.layers[0].rasterize();
				var data = tempImg.toDataURL();
				tempImg.remove();
				this._elems['canvas'][0].toBlob(function (blob) {
					fileSaver.saveAs(blob, 'export.png');
				});
			}
		}]);

		return Menu;
	}();

	exports.default = Menu;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(301), __webpack_require__(312)))

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
	 * A saveAs() FileSaver implementation.
	 * 1.3.2
	 * 2016-06-16 18:25:19
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: MIT
	 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
	 */

	/*global self */
	/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

	/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

	var saveAs = saveAs || (function(view) {
		"use strict";
		// IE <10 is explicitly unsupported
		if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
			return;
		}
		var
			  doc = view.document
			  // only get URL when necessary in case Blob.js hasn't overridden it yet
			, get_URL = function() {
				return view.URL || view.webkitURL || view;
			}
			, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
			, can_use_save_link = "download" in save_link
			, click = function(node) {
				var event = new MouseEvent("click");
				node.dispatchEvent(event);
			}
			, is_safari = /constructor/i.test(view.HTMLElement)
			, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
			, throw_outside = function(ex) {
				(view.setImmediate || view.setTimeout)(function() {
					throw ex;
				}, 0);
			}
			, force_saveable_type = "application/octet-stream"
			// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
			, arbitrary_revoke_timeout = 1000 * 40 // in ms
			, revoke = function(file) {
				var revoker = function() {
					if (typeof file === "string") { // file is an object URL
						get_URL().revokeObjectURL(file);
					} else { // file is a File
						file.remove();
					}
				};
				setTimeout(revoker, arbitrary_revoke_timeout);
			}
			, dispatch = function(filesaver, event_types, event) {
				event_types = [].concat(event_types);
				var i = event_types.length;
				while (i--) {
					var listener = filesaver["on" + event_types[i]];
					if (typeof listener === "function") {
						try {
							listener.call(filesaver, event || filesaver);
						} catch (ex) {
							throw_outside(ex);
						}
					}
				}
			}
			, auto_bom = function(blob) {
				// prepend BOM for UTF-8 XML and text/* types (including HTML)
				// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
				if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
					return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
				}
				return blob;
			}
			, FileSaver = function(blob, name, no_auto_bom) {
				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				// First try a.download, then web filesystem, then object URLs
				var
					  filesaver = this
					, type = blob.type
					, force = type === force_saveable_type
					, object_url
					, dispatch_all = function() {
						dispatch(filesaver, "writestart progress write writeend".split(" "));
					}
					// on any filesys errors revert to saving with object URLs
					, fs_error = function() {
						if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
							// Safari doesn't allow downloading of blob urls
							var reader = new FileReader();
							reader.onloadend = function() {
								var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
								var popup = view.open(url, '_blank');
								if(!popup) view.location.href = url;
								url=undefined; // release reference before dispatching
								filesaver.readyState = filesaver.DONE;
								dispatch_all();
							};
							reader.readAsDataURL(blob);
							filesaver.readyState = filesaver.INIT;
							return;
						}
						// don't create more object URLs than needed
						if (!object_url) {
							object_url = get_URL().createObjectURL(blob);
						}
						if (force) {
							view.location.href = object_url;
						} else {
							var opened = view.open(object_url, "_blank");
							if (!opened) {
								// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
								view.location.href = object_url;
							}
						}
						filesaver.readyState = filesaver.DONE;
						dispatch_all();
						revoke(object_url);
					}
				;
				filesaver.readyState = filesaver.INIT;

				if (can_use_save_link) {
					object_url = get_URL().createObjectURL(blob);
					setTimeout(function() {
						save_link.href = object_url;
						save_link.download = name;
						click(save_link);
						dispatch_all();
						revoke(object_url);
						filesaver.readyState = filesaver.DONE;
					});
					return;
				}

				fs_error();
			}
			, FS_proto = FileSaver.prototype
			, saveAs = function(blob, name, no_auto_bom) {
				return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
			}
		;
		// IE 10+ (native saveAs)
		if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
			return function(blob, name, no_auto_bom) {
				name = name || blob.name || "download";

				if (!no_auto_bom) {
					blob = auto_bom(blob);
				}
				return navigator.msSaveOrOpenBlob(blob, name);
			};
		}

		FS_proto.abort = function(){};
		FS_proto.readyState = FS_proto.INIT = 0;
		FS_proto.WRITING = 1;
		FS_proto.DONE = 2;

		FS_proto.error =
		FS_proto.onwritestart =
		FS_proto.onprogress =
		FS_proto.onwrite =
		FS_proto.onabort =
		FS_proto.onerror =
		FS_proto.onwriteend =
			null;

		return saveAs;
	}(
		   typeof self !== "undefined" && self
		|| typeof window !== "undefined" && window
		|| this.content
	));
	// `self` is undefined in Firefox for Android content script context
	// while `this` is nsIContentFrameMessageManager
	// with an attribute `content` that corresponds to the window

	if (typeof module !== "undefined" && module.exports) {
	  module.exports.saveAs = saveAs;
	} else if (("function" !== "undefined" && __webpack_require__(313) !== null) && (__webpack_require__(2) !== null)) {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    return saveAs;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}


/***/ },
/* 313 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }
/******/ ]);