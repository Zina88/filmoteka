!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){i[e]=n},n.parcelRequired7c6=r);var l,a=r("bpxeT"),c=r("2TvXO"),o={},s=r("l5bVx");o=function(n){var t=void 0===n?"undefined":e(s)(n);return null!=n&&("object"==t||"function"==t)};var p,u={},d={};p="object"==typeof n&&n&&n.Object===Object&&n;var y="object"==typeof self&&self&&self.Object===Object&&self,f=p||y||Function("return this")();d=f;u=function(){return d.Date.now()};var v={},x={},T={},m=/\s/;T=function(e){for(var n=e.length;n--&&m.test(e.charAt(n)););return n};var g=/^\s+/;x=function(e){return e?e.slice(0,T(e)+1).replace(g,""):e};var h,b={},L=(s=r("l5bVx"),{});h=d.Symbol;var M={},E=Object.prototype,H=E.hasOwnProperty,S=E.toString,k=h?h.toStringTag:void 0;M=function(e){var n=H.call(e,k),t=e[k];try{e[k]=void 0;var i=!0}catch(e){}var r=S.call(e);return i&&(n?e[k]=t:delete e[k]),r};var w={},q=Object.prototype.toString;w=function(e){return q.call(e)};var O=h?h.toStringTag:void 0;L=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":O&&O in Object(e)?M(e):w(e)};var _={};_=function(e){return null!=e&&"object"==typeof e};b=function(n){return"symbol"==(void 0===n?"undefined":e(s)(n))||_(n)&&"[object Symbol]"==L(n)};var j=/^[-+]0x[0-9a-f]+$/i,A=/^0b[01]+$/i,C=/^0o[0-7]+$/i,V=parseInt;v=function(e){if("number"==typeof e)return e;if(b(e))return NaN;if(o(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=x(e);var t=A.test(e);return t||C.test(e)?V(e.slice(2),t?2:8):j.test(e)?NaN:+e};var Y=Math.max,D=Math.min;l=function(e,n,t){var i,r,l,a,c,s,p=0,d=!1,y=!1,f=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function x(n){var t=i,l=r;return i=r=void 0,p=n,a=e.apply(l,t)}function T(e){return p=e,c=setTimeout(g,n),d?x(e):a}function m(e){var t=e-s;return void 0===s||t>=n||t<0||y&&e-p>=l}function g(){var e=u();if(m(e))return h(e);c=setTimeout(g,function(e){var t=n-(e-s);return y?D(t,l-(e-p)):t}(e))}function h(e){return c=void 0,f&&i?x(e):(i=r=void 0,a)}function b(){var e=u(),t=m(e);if(i=arguments,r=this,s=e,t){if(void 0===c)return T(s);if(y)return clearTimeout(c),c=setTimeout(g,n),x(s)}return void 0===c&&(c=setTimeout(g,n)),a}return n=v(n)||0,o(t)&&(d=!!t.leading,l=(y="maxWait"in t)?Y(v(t.maxWait)||0,n):l,f="trailing"in t?!!t.trailing:f),b.cancel=function(){void 0!==c&&clearTimeout(c),p=0,i=s=r=c=void 0},b.flush=function(){return void 0===c?a:h(u())},b};var K=r("6Y6JA"),N=r("7ra6p"),R=(r("bpxeT"),r("2TvXO"),K=r("6Y6JA"),a=r("bpxeT"),c=r("2TvXO"),r("daCfg")),G={gallery:document.querySelector(".gallery")};function B(e){return F.apply(this,arguments)}function F(){return(F=e(a)(e(c).mark((function n(t){return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=G.gallery,e.next=3,I(t);case 3:e.t1=e.sent,e.t0.insertAdjacentHTML.call(e.t0,"beforeend",e.t1);case 5:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function I(e){return U.apply(this,arguments)}function U(){return U=e(a)(e(c).mark((function n(t){var i;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.map(function(){var n=e(a)(e(c).mark((function n(t){var i,r,l,a,o,s,p,u,d,y,f;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.id,r=t.title,l=t.name,a=t.release_date,o=t.genre_ids,s=t.poster_path,p="https://image.tmdb.org/t/p/w500".concat(s),u="https://image.tmdb.org/t/p/w500/AcKVlWaNVVVFQwro3nLXqPljcYA.jpg",e.next=5,(0,R.default)(o);case 5:if(!((d=e.sent).length>3)){e.next=10;break}return y="".concat(d.slice(0,3).join(", "),", ...other"),e.abrupt("return");case 10:return y=d.join(", "),f='<li class="card-item" id="'.concat(i,'">\n        <a class="card-link" id="').concat(i,'" href="').concat(null!==s?p:u,'">\n        <img class="card__image" id="').concat(i,'" src="').concat(null!==s?p:u,'" alt="').concat(r,'">\n        <div class="card-discr">\n        <p class="card-title" id="').concat(i,'">').concat(r||l,'</p>\n        <ul class="box">\n            <li class="card-genres" id="').concat(i,'">').concat(y||"Unknown",'</li>\n            <li class="card-data" id="').concat(i,'">').concat(a?a.slice(0,4):"Unknown","</li>\n        </ul>\n        </div>\n        </a>    \n    </li>"),e.abrupt("return",f);case 13:case"end":return e.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()),n.next=3,Promise.all(i);case 3:return i=(i=n.sent).join(""),n.abrupt("return",i);case 6:case"end":return n.stop()}}),n)}))),U.apply(this,arguments)}N=r("7ra6p");var W=r("4s6iC"),J=document.querySelector("[data-action-previous]"),P=document.querySelector("[data-action-first]"),X=document.querySelector("[data-action-second]"),$=document.querySelector("[data-action-third]"),Q=document.querySelector(".left-wing-dots");P.style.display="none",Q.style.display="none";var Z=document.querySelector("[data-action-last-third]"),z=document.querySelector("[data-action-last-second]"),ee=document.querySelector("[data-action-last]"),ne=document.querySelector("[data-action-last] > p"),te=document.querySelector("[data-action-next]"),ie=document.querySelector(".right-wing-dots"),re=document.querySelector(".pages-container"),le=new(0,K.default),ae=document.querySelector(".gallery"),ce=1,oe=null;function se(e,n){var t="";return 1===e?(t='<div class="current-page"><p>'.concat(e,"</p></div>"),J.style.display="none",P.style.display="none",te.style.display="inline-flex",ee.style.display="inline-flex",X.style.display="none",$.style.display="none",Z.style.display="inline-flex",z.style.display="inline-flex",Z.innerHTML="<p>".concat(e+1,"</p>"),z.innerHTML="<p>".concat(e+2,"</p>"),Q.style.display="none",ie.style.display="inline-block"):2===e?(t='<div class="current-page"><p>'.concat(e,"</p></div>"),ve(),X.style.display="none",$.style.display="none",Z.style.display="inline-flex",z.style.display="inline-flex",Z.innerHTML="<p>".concat(e+1,"</p>"),z.innerHTML="<p>".concat(e+2,"</p>"),Q.style.display="none",ie.style.display="inline-block"):3===e?(t='<div class="current-page"><p>'.concat(e,"</p></div>"),ve(),X.style.display="none",$.style.display="inline-flex",X.innerHTML="<p>".concat(e-2,"</p>"),$.innerHTML="<p>".concat(e-1,"</p>"),Z.style.display="inline-flex",z.style.display="inline-flex",Z.innerHTML="<p>".concat(e+1,"</p>"),z.innerHTML="<p>".concat(e+2,"</p>"),Q.style.display="none",ie.style.display="inline-block"):4===e?(t='<div class="current-page"><p>'.concat(e,"</p></div>"),ve(),X.style.display="inline-flex",$.style.display="inline-flex",X.innerHTML="<p>".concat(e-2,"</p>"),$.innerHTML="<p>".concat(e-1,"</p>"),Z.style.display="inline-flex",z.style.display="inline-flex",Z.innerHTML="<p>".concat(e+1,"</p>"),z.innerHTML="<p>".concat(e+2,"</p>"),Q.style.display="none",ie.style.display="inline-block"):e===n?(t='<div class="current-page"><p>'.concat(e,"</p></div>"),J.style.display="inline-flex",P.style.display="inline-flex",te.style.display="none",ee.style.display="none",X.style.display="inline-flex",$.style.display="inline-flex",X.innerHTML="<p>".concat(e-2,"</p>"),$.innerHTML="<p>".concat(e-1,"</p>"),Z.style.display="none",z.style.display="none",Z.innerHTML="<p>".concat(e+1,"</p>"),z.innerHTML="<p>".concat(e+2,"</p>"),Q.style.display="inline-block",ie.style.display="none"):e===n-1?(t='<div class="current-page"><p>'.concat(e,"</p></div>"),ve(),X.style.display="inline-flex",$.style.display="inline-flex",X.innerHTML="<p>".concat(e-2,"</p>"),$.innerHTML="<p>".concat(e-1,"</p>"),Z.style.display="none",z.style.display="none",Z.innerHTML="<p>".concat(e+1,"</p>"),z.innerHTML="<p>".concat(e+2,"</p>"),Q.style.display="inline-block",ie.style.display="none"):e===n-2?(t='<div class="current-page"><p>'.concat(e,"</p></div>"),ve(),X.style.display="inline-flex",$.style.display="inline-flex",X.innerHTML="<p>".concat(e-2,"</p>"),$.innerHTML="<p>".concat(e-1,"</p>"),Z.style.display="inline-flex",z.style.display="none",Z.innerHTML="<p>".concat(e+1,"</p>"),z.innerHTML="<p>".concat(e+2,"</p>"),Q.style.display="inline-block",ie.style.display="none"):e===n-3?(t='<div class="current-page"><p>'.concat(e,"</p></div>"),ve(),X.style.display="inline-flex",$.style.display="inline-flex",X.innerHTML="<p>".concat(e-2,"</p>"),$.innerHTML="<p>".concat(e-1,"</p>"),Z.style.display="inline-flex",z.style.display="inline-flex",Z.innerHTML="<p>".concat(e+1,"</p>"),z.innerHTML="<p>".concat(e+2,"</p>"),Q.style.display="inline-block",ie.style.display="none"):(t='<div class="current-page"><p>'.concat(e,"</p></div>"),ve(),X.style.display="inline-flex",$.style.display="inline-flex",X.innerHTML="<p>".concat(e-2,"</p>"),$.innerHTML="<p>".concat(e-1,"</p>"),Z.style.display="inline-flex",z.style.display="inline-flex",Z.innerHTML="<p>".concat(e+1,"</p>"),z.innerHTML="<p>".concat(e+2,"</p>"),Q.style.display="inline-block",ie.style.display="inline-block"),t}var pe=function(e,n){ce=e,oe=n,re.innerHTML=se(e,n),ne.innerHTML=n};function ue(e){return de.apply(this,arguments)}function de(){return(de=e(a)(e(c).mark((function n(t){var i,r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=null,!le.query){e.next=7;break}return e.next=4,le.moviesBySearch(t);case 4:i=e.sent,e.next=10;break;case 7:return e.next=9,le.popularMovies(t);case 9:i=e.sent;case 10:return i.results,r=i.results,(0,N.default)(W.STORAGE_KEY_MOVIES,r),pe(t,i.total_pages),e.next=16,I(r);case 16:ae.innerHTML=e.sent;case 17:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function ye(){ue(++ce)}function fe(){ue(--ce)}function ve(){te.style.display="inline-flex",J.style.display="inline-flex",P.style.display="inline-flex",ee.style.display="inline-flex"}ue(ce),te.addEventListener("click",ye),J.addEventListener("click",fe),P.addEventListener("click",(function(){ue(ce=1)})),ee.addEventListener("click",(function(){ce=oe,ue(oe)})),$.addEventListener("click",fe),X.addEventListener("click",(function(){ue(ce-=2)})),Z.addEventListener("click",ye),z.addEventListener("click",(function(){ue(ce+=2)}));W=r("4s6iC");var xe={errorEl:document.querySelector(".error")};function Te(e){xe.errorEl.textContent=e,xe.errorEl.classList.remove("visually-hidden"),setTimeout((function(){xe.errorEl.classList.add("visually-hidden")}),2e3)}var me={searchForm:document.querySelector("#search-form"),gallery:document.querySelector(".gallery"),input:document.querySelector(".search_input")};me.searchForm.addEventListener("submit",(function(e){return he.apply(this,arguments)}));var ge=new(0,K.default);function he(){return(he=e(a)(e(c).mark((function n(t){var i,r,l;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),me.gallery.innerHTML="",""!==(i=t.currentTarget.elements.searchQuery.value.trim())){e.next=7;break}return Te("Please, enter your search query."),ue(1),e.abrupt("return");case 7:return ge.query=i,e.prev=8,e.next=11,ge.moviesBySearch();case 11:if(r=e.sent,0!==(l=r.results).length){e.next=16;break}return Te("Search result is not successful. Enter the correct movie name."),e.abrupt("return");case 16:pe(r.page,r.total_pages),B(l),(0,N.default)(W.STORAGE_KEY_MOVIES,l),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(8),console.log(e.t0);case 24:ge.query="";case 25:case"end":return e.stop()}}),n,null,[[8,21]])})))).apply(this,arguments)}me.input.addEventListener("input",e(l)((function(){if(""===me.input.value.trim())return ue(1),void Te("Please, enter your search query.")}),W.DEBOUNCE_DELAY)),r("4F07H"),r("kvC6y"),r("3ytLt"),r("5xtVg"),r("daCfg"),r("jOfKZ"),r("bj0Jt"),r("jMqpj"),r("kvC6y"),r("7ra6p"),r("3ytLt"),r("5xtVg");W=r("4s6iC");var be=r("jOfKZ"),Le=r("bj0Jt"),Me=(N=r("7ra6p"),{watchedModal:document.querySelector("#watchedModalBtn"),queueModal:document.querySelector("#queueModalBtn")});Me.watchedModal.addEventListener("click",(function(){Me.watchedModal.classList.add("is-active__Btn");var e=[],n=(0,be.default)(W.STORAGE_KEY_MOVIEID),t=(0,Le.default)(W.STORAGE_KEY_MOVIES,n);(0,be.default)(W.STORAGE_KEY_WATCHED)&&(e=(0,be.default)(W.STORAGE_KEY_WATCHED));e.push(t),(0,N.default)(W.STORAGE_KEY_WATCHED,JSON.stringify(e)),Me.watchedModal.textContent="remove from watched",console.log(e)}))}();
//# sourceMappingURL=index.49df9602.js.map
