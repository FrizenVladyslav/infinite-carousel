!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=6)}([function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(2)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),a=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(a).concat([o]).join("\n")}var i,l,s;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var i=0;i<t.length;i++){var l=t[i];null!=l[0]&&r[l[0]]||(n&&!l[2]?l[2]=n:n&&(l[2]="(".concat(l[2],") and (").concat(n,")")),e.push(l))}},e}},function(t,e,n){"use strict";var r,o={},a=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function l(t,e){for(var n=[],r={},o=0;o<t.length;o++){var a=t[o],i=e.base?a[0]+e.base:a[0],l={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(l):n.push(r[i]={id:i,parts:[l]})}return n}function s(t,e){for(var n=0;n<t.length;n++){var r=t[n],a=o[r.id],i=0;if(a){for(a.refs++;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(m(r.parts[i],e))}else{for(var l=[];i<r.parts.length;i++)l.push(m(r.parts[i],e));o[r.id]={id:r.id,refs:1,parts:l}}}}function c(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var o=i(t.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}return e}var u,f=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function d(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,o);else{var a=document.createTextNode(o),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(a,i[e]):t.appendChild(a)}}function p(t,e,n){var r=n.css,o=n.media,a=n.sourceMap;if(o&&t.setAttribute("media",o),a&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,b=0;function m(t,e){var n,r,o;if(e.singleton){var a=b++;n=h||(h=c(e)),r=d.bind(null,n,a,!1),o=d.bind(null,n,a,!0)}else n=c(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a());var n=l(t,e);return s(n,e),function(t){for(var r=[],a=0;a<n.length;a++){var i=n[a],c=o[i.id];c&&(c.refs--,r.push(c))}t&&s(l(t,e),e);for(var u=0;u<r.length;u++){var f=r[u];if(0===f.refs){for(var d=0;d<f.parts.length;d++)f.parts[d]();delete o[f.id]}}}}},function(t,e,n){(e=t.exports=n(1)(!1)).push([t.i,"",""]),e.locals={carouselWidth:"1000px"}},function(t,e,n){var r=n(5);"string"==typeof r&&(r=[[t.i,r,""]]);var o={insert:"head",singleton:!1};n(2)(r,o);r.locals&&(t.exports=r.locals)},function(t,e,n){(e=t.exports=n(1)(!1)).push([t.i,"#app{width:1000px;height:700px;position:relative;margin:0 auto}.wrapper{min-height:100%;overflow:hidden;box-shadow:0 1px 4px rgba(0,0,0,.3),-23px 0 20px -23px rgba(0,0,0,.8),23px 0 20px -23px rgba(0,0,0,.8),inset 0 0 40px rgba(0,0,0,.1)}.carousel,.wrapper{position:relative}.carousel,.slide,.wrapper{display:-webkit-box;display:flex}.slide{min-width:1000px;min-height:100%;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;color:#000;font-size:20px}.move{-webkit-transition:left .2s ease-out;transition:left .2s ease-out}.active{-webkit-transform:translateX(0);transform:translateX(0);z-index:2}.control{top:calc(50% - 25px);height:50px;outline:none;z-index:3;-webkit-appearance:none;background:transparent;border:0;outline:0;cursor:pointer;-webkit-transform:translateZ(0);transform:translateZ(0)}.control,.control i{position:absolute;width:50px}.control i{top:40%;left:0;height:5px;border-radius:2.5px;background:#000;-webkit-transition:all .15s ease;transition:all .15s ease}.control-left{left:-16.66667px}.control-left i{-webkit-transform-origin:0 50%;transform-origin:0 50%}.control-left i:first-child{-webkit-transform:translateY(-1px) rotate(40deg);transform:translateY(-1px) rotate(40deg)}.control-left i:last-child{-webkit-transform:translateY(1px) rotate(-40deg);transform:translateY(1px) rotate(-40deg)}.control-left:hover i:first-child{-webkit-transform:translateY(-1px) rotate(30deg);transform:translateY(-1px) rotate(30deg)}.control-left:hover i:last-child{-webkit-transform:translateY(1px) rotate(-30deg);transform:translateY(1px) rotate(-30deg)}.control-left:active i:first-child{-webkit-transform:translate(1px,-1px) rotate(25deg);transform:translate(1px,-1px) rotate(25deg)}.control-left:active i:last-child{-webkit-transform:translate(1px,1px) rotate(-25deg);transform:translate(1px,1px) rotate(-25deg)}.control-right{left:975px}.control-right i{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.control-right i:first-child{-webkit-transform:translateY(1px) rotate(40deg);transform:translateY(1px) rotate(40deg)}.control-right i:last-child{-webkit-transform:translateY(-1px) rotate(-40deg);transform:translateY(-1px) rotate(-40deg)}.control-right:hover i:first-child{-webkit-transform:translateY(1px) rotate(30deg);transform:translateY(1px) rotate(30deg)}.control-right:hover i:last-child{-webkit-transform:translateY(-1px) rotate(-30deg);transform:translateY(-1px) rotate(-30deg)}.control-right:active i:first-child{-webkit-transform:translate(1px,1px) rotate(25deg);transform:translate(1px,1px) rotate(25deg)}.control-right:active i:last-child{-webkit-transform:translate(1px,-1px) rotate(-25deg);transform:translate(1px,-1px) rotate(-25deg)}",""]),e.locals={carouselWidth:"1000px"}},function(t,e,n){"use strict";n.r(e);var r=function t(e,n){var r,o,a,i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),a=function(t){i._model.activeSlide=t},(o="changeSlide")in(r=this)?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,this._model=e,this._view=n,this._timeout=null,n.on("changeSlide",(function(t){return i.changeSlide(t)}))};function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var a=function(){function t(){var e,n,r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r={},(n="_events")in(e=this)?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r}var e,n,r;return e=t,(n=[{key:"on",value:function(t,e){return(this._events[t]||(this._events[t]=[])).push(e),this}},{key:"emit",value:function(t,e){(this._events[t]||[]).slice().forEach((function(t){return t(e)}))}}])&&o(e.prototype,n),r&&o(e,r),t}();function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var d=function(t){function e(t){var n,r,o,a,s,f;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=c(e).call(this),n=!o||"object"!==i(o)&&"function"!=typeof o?u(r):o,a=u(n),f=function(){for(var t="#",e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t},(s="getRandomColor")in a?Object.defineProperty(a,s,{value:f,enumerable:!0,configurable:!0,writable:!0}):a[s]=f,n._slides=l(Array(t)).map((function(t,e){return e})),n._colors=l(Array(t)).map((function(t,e){return n.getRandomColor()})),n._activeSlide=0,n}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,(r=[{key:"slides",get:function(){return this._slides}},{key:"colors",get:function(){return this._colors}},{key:"activeSlide",get:function(){return this._activeSlide},set:function(t){this._activeSlide=t}}])&&s(n.prototype,r),o&&s(n,o),e}(a),p=n(0);function h(t){return(h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function y(t,e){return(y=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function x(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _=function(t){function e(t,n){var r,o,a;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,a=v(e).call(this),r=!a||"object"!==h(a)&&"function"!=typeof a?g(o):a,x(g(r),"handleChangeDistance",(function(t){r._carousel.style.left=-1*t*r.carouselWidth-1e3+"px",r.emit("changeSlide",t)})),x(g(r),"handleChangeSlide",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;if(!r._preventActions){r._preventActions=!0;var e=r._model.activeSlide,n=e+t;r._carousel.classList.add("move"),r.handleChangeDistance(n)}})),x(g(r),"onCriticalSlide",(function(){r._carousel.classList.remove("move");var t=r._model.activeSlide;r._preventActions=!1,-1===t&&(t=r._slides.length-3),t===r._slides.length-2&&(t=0),r.handleChangeDistance(t)})),x(g(r),"renderSlides",(function(){var t=r._model,e=t.colors,n=t.slides;return[n[n.length-1]].concat(b(n),[n[0]]).map((function(t){var n=document.createElement("div");return n.style.backgroundColor=e[t],n.classList.add("slide"),n.innerText="Slide ".concat(t),r._carousel.appendChild(n),r._carousel.style.left="-".concat(p.carouselWidth),n}))})),x(g(r),"onDragStart",(function(t){if(t.preventDefault(),r._startOffset=r._carousel.offsetLeft,"touchstart"==t.type)return r._startPosition=t.touches[0].clientX;r._startPosition=t.clientX,document.onmouseup=r.onDragEnd,document.onmousemove=r.handleDrag})),x(g(r),"handleDrag",(function(t){"touchmove"==t.type?(r._endPosition=r._startPosition-t.touches[0].clientX,r._startPosition=t.touches[0].clientX):(r._endPosition=r._startPosition-t.clientX,r._startPosition=t.clientX),r._carousel.style.left=r._carousel.offsetLeft-r._endPosition+"px"})),x(g(r),"onDragEnd",(function(){switch(r._endOffset=r._carousel.offsetLeft,!0){case r._endOffset-r._startOffset<-r.carouselWidth/3:r.handleChangeSlide(1);break;case r._endOffset-r._startOffset>r.carouselWidth/3:r.handleChangeSlide(-1);break;default:r._carousel.style.left=r._startOffset+"px"}document.onmouseup=null,document.onmousemove=null})),r._model=t,r._carousel=n.carousel,r._slides=r.renderSlides(),r._startPosition=null,r._endPosition=null,r._startOffset=null,r._endOffset=null,r._preventActions=!1,n.nextButton.onclick=function(){return r.handleChangeSlide(1)},n.prevButton.onclick=function(){return r.handleChangeSlide(-1)},r._carousel.addEventListener("transitionend",r.onCriticalSlide),r._carousel.addEventListener("touchstart",r.onDragStart),r._carousel.addEventListener("touchend",r.onDragEnd),r._carousel.addEventListener("touchmove",r.handleDrag),r._carousel.onmousedown=r.onDragStart,r}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&y(t,e)}(e,t),n=e,(r=[{key:"carouselWidth",get:function(){return p.carouselWidth.replace("px","")}}])&&m(n.prototype,r),o&&m(n,o),e}(a);n(4);window.addEventListener("load",(function(){var t=new d(5),e=new _(t,{carousel:document.querySelector(".carousel"),nextButton:document.querySelector(".control-right"),prevButton:document.querySelector(".control-left")});new r(t,e)}))}]);
//# sourceMappingURL=index.js.map