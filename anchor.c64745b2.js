parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"v66i":[function(require,module,exports) {
function t(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;function n(t){return Math.floor(t.getBoundingClientRect().top)}t.preventDefault();var a=e?e.getAttribute("href"):this.getAttribute("href"),o=document.querySelector(a);if(o){var r=n(o);window.scrollBy({top:r,left:0,behavior:"smooth"});var i=setInterval(function(){var t=window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2;(0===n(o)||t)&&(o.tabIndex="-1",o.focus(),"history"in window?window.history.pushState("","",a):window.location=a,clearInterval(i))},100)}}document.addEventListener("click",function(e){"A"===e.target.tagName&&(!e.target.href||-1==e.target.href.indexOf("#")||e.target.pathname!=location.pathname&&"/"+e.target.pathname!=location.pathname||e.target.search!=location.search||t(e,e.target))});
},{}]},{},["v66i"], null)
//# sourceMappingURL=/parcel-project-template/anchor.c64745b2.js.map