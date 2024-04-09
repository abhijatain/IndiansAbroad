function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/AdminView-BMwYNf9r.js","assets/virtualscroller.esm-CGoA1tAZ.js","assets/SearchView-DKbZ2sh0.js","assets/DiscussionCard-Ctvk_WKw.css","assets/SavedView-DSvzoBnl.js","assets/SavedView-Cgke0cYw.css","assets/DiscusionView-Dztaw42z.js","assets/CarouselCard-CrxWxDRp.js","assets/DiscusionView-BX3E4SUX.css","assets/AddView-B5uVcq2Y.js","assets/AddView-Cca0diDQ.css","assets/SingleView-BBEZjpvV.js","assets/SingleView-DrGC_sUe.css","assets/HelpView-C0b_XBfb.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Li(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Bo(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,s=!1,a;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){s=!0,a=c},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(s)throw a}}}}function fd(t){return gd(t)||pd(t)||Bo(t)||hd()}function hd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pd(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gd(t){if(Array.isArray(t))return lo(t)}function Un(t){"@babel/helpers - typeof";return Un=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Un(t)}function $i(t,e){return bd(t)||vd(t,e)||Bo(t,e)||md()}function md(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bo(t,e){if(t){if(typeof t=="string")return lo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return lo(t,e)}}function lo(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function vd(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function bd(t){if(Array.isArray(t))return t}var Qt={innerWidth:function(e){if(e){var n=e.offsetWidth,r=getComputedStyle(e);return n+=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}return 0},width:function(e){if(e){var n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight),n}return 0},getWindowScrollTop:function(){var e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)},getWindowScrollLeft:function(){var e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)},getOuterWidth:function(e,n){if(e){var r=e.offsetWidth;if(n){var i=getComputedStyle(e);r+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return r}return 0},getOuterHeight:function(e,n){if(e){var r=e.offsetHeight;if(n){var i=getComputedStyle(e);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}return 0},getClientHeight:function(e,n){if(e){var r=e.clientHeight;if(n){var i=getComputedStyle(e);r+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return r}return 0},getViewport:function(){var e=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0],o=e.innerWidth||r.clientWidth||i.clientWidth,s=e.innerHeight||r.clientHeight||i.clientHeight;return{width:o,height:s}},getOffset:function(e){if(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}},index:function(e){if(e)for(var n,r=(n=this.getParentNode(e))===null||n===void 0?void 0:n.childNodes,i=0,o=0;o<r.length;o++){if(r[o]===e)return i;r[o].nodeType===1&&i++}return-1},addMultipleClasses:function(e,n){var r=this;e&&n&&[n].flat().filter(Boolean).forEach(function(i){return i.split(" ").forEach(function(o){return r.addClass(e,o)})})},removeMultipleClasses:function(e,n){var r=this;e&&n&&[n].flat().filter(Boolean).forEach(function(i){return i.split(" ").forEach(function(o){return r.removeClass(e,o)})})},addClass:function(e,n){e&&n&&!this.hasClass(e,n)&&(e.classList?e.classList.add(n):e.className+=" "+n)},removeClass:function(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))},hasClass:function(e,n){return e?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1},addStyles:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e&&Object.entries(n).forEach(function(r){var i=$i(r,2),o=i[0],s=i[1];return e.style[o]=s})},find:function(e,n){return this.isElement(e)?e.querySelectorAll(n):[]},findSingle:function(e,n){return this.isElement(e)?e.querySelector(n):null},createElement:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(e){var r=document.createElement(e);this.setAttributes(r,n);for(var i=arguments.length,o=new Array(i>2?i-2:0),s=2;s<i;s++)o[s-2]=arguments[s];return r.append.apply(r,o),r}},setAttribute:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0;this.isElement(e)&&r!==null&&r!==void 0&&e.setAttribute(n,r)},setAttributes:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.isElement(e)){var i=function o(s,a){var l,c,u=e!=null&&(l=e.$attrs)!==null&&l!==void 0&&l[s]?[e==null||(c=e.$attrs)===null||c===void 0?void 0:c[s]]:[];return[a].flat().reduce(function(d,f){if(f!=null){var g=Un(f);if(g==="string"||g==="number")d.push(f);else if(g==="object"){var b=Array.isArray(f)?o(s,f):Object.entries(f).map(function(q){var R=$i(q,2),k=R[0],x=R[1];return s==="style"&&(x||x===0)?"".concat(k.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),":").concat(x):x?k:void 0});d=b.length?d.concat(b.filter(function(q){return!!q})):d}}return d},u)};Object.entries(r).forEach(function(o){var s=$i(o,2),a=s[0],l=s[1];if(l!=null){var c=a.match(/^on(.+)/);c?e.addEventListener(c[1].toLowerCase(),l):a==="p-bind"?n.setAttributes(e,l):(l=a==="class"?fd(new Set(i("class",l))).join(" ").trim():a==="style"?i("style",l).join(";").trim():l,(e.$attrs=e.$attrs||{})&&(e.$attrs[a]=l),e.setAttribute(a,l))}})}},getAttribute:function(e,n){if(this.isElement(e)){var r=e.getAttribute(n);return isNaN(r)?r==="true"||r==="false"?r==="true":r:+r}},isAttributeEquals:function(e,n,r){return this.isElement(e)?this.getAttribute(e,n)===r:!1},isAttributeNotEquals:function(e,n,r){return!this.isAttributeEquals(e,n,r)},getHeight:function(e){if(e){var n=e.offsetHeight,r=getComputedStyle(e);return n-=parseFloat(r.paddingTop)+parseFloat(r.paddingBottom)+parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth),n}return 0},getWidth:function(e){if(e){var n=e.offsetWidth,r=getComputedStyle(e);return n-=parseFloat(r.paddingLeft)+parseFloat(r.paddingRight)+parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),n}return 0},absolutePosition:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=i.height,s=i.width,a=n.offsetHeight,l=n.offsetWidth,c=n.getBoundingClientRect(),u=this.getWindowScrollTop(),d=this.getWindowScrollLeft(),f=this.getViewport(),g,b,q="top";c.top+a+o>f.height?(g=c.top+u-o,q="bottom",g<0&&(g=u)):g=a+c.top+u,c.left+s>f.width?b=Math.max(0,c.left+d+l-s):b=c.left+d,e.style.top=g+"px",e.style.left=b+"px",e.style.transformOrigin=q,r&&(e.style.marginTop=q==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}},relativePosition:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;if(e){var i=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),o=n.offsetHeight,s=n.getBoundingClientRect(),a=this.getViewport(),l,c,u="top";s.top+o+i.height>a.height?(l=-1*i.height,u="bottom",s.top+l<0&&(l=-1*s.top)):l=o,i.width>a.width?c=s.left*-1:s.left+i.width>a.width?c=(s.left+i.width-a.width)*-1:c=0,e.style.top=l+"px",e.style.left=c+"px",e.style.transformOrigin=u,r&&(e.style.marginTop=u==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}},nestedPosition:function(e,n){if(e){var r=e.parentElement,i=this.getOffset(r),o=this.getViewport(),s=e.offsetParent?e.offsetWidth:this.getHiddenElementOuterWidth(e),a=this.getOuterWidth(r.children[0]),l;parseInt(i.left,10)+a+s>o.width-this.calculateScrollbarWidth()?parseInt(i.left,10)<s?n%2===1?l=parseInt(i.left,10)?"-"+parseInt(i.left,10)+"px":"100%":n%2===0&&(l=o.width-s-this.calculateScrollbarWidth()+"px"):l="-100%":l="100%",e.style.top="0px",e.style.left=l}},getParentNode:function(e){var n=e==null?void 0:e.parentNode;return n&&n instanceof ShadowRoot&&n.host&&(n=n.host),n},getParents:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],r=this.getParentNode(e);return r===null?n:this.getParents(r,n.concat([r]))},getScrollableParents:function(e){var n=[];if(e){var r=this.getParents(e),i=/(auto|scroll)/,o=function(R){try{var k=window.getComputedStyle(R,null);return i.test(k.getPropertyValue("overflow"))||i.test(k.getPropertyValue("overflowX"))||i.test(k.getPropertyValue("overflowY"))}catch{return!1}},s=Li(r),a;try{for(s.s();!(a=s.n()).done;){var l=a.value,c=l.nodeType===1&&l.dataset.scrollselectors;if(c){var u=c.split(","),d=Li(u),f;try{for(d.s();!(f=d.n()).done;){var g=f.value,b=this.findSingle(l,g);b&&o(b)&&n.push(b)}}catch(q){d.e(q)}finally{d.f()}}l.nodeType!==9&&o(l)&&n.push(l)}}catch(q){s.e(q)}finally{s.f()}}return n},getHiddenElementOuterHeight:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}return 0},getHiddenElementOuterWidth:function(e){if(e){e.style.visibility="hidden",e.style.display="block";var n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}return 0},getHiddenElementDimensions:function(e){if(e){var n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}return 0},fadeIn:function(e,n){if(e){e.style.opacity=0;var r=+new Date,i=0,o=function s(){i=+e.style.opacity+(new Date().getTime()-r)/n,e.style.opacity=i,r=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};o()}},fadeOut:function(e,n){if(e)var r=1,i=50,o=n,s=i/o,a=setInterval(function(){r-=s,r<=0&&(r=0,clearInterval(a)),e.style.opacity=r},i)},getUserAgent:function(){return navigator.userAgent},appendChild:function(e,n){if(this.isElement(n))n.appendChild(e);else if(n.el&&n.elElement)n.elElement.appendChild(e);else throw new Error("Cannot append "+n+" to "+e)},isElement:function(e){return(typeof HTMLElement>"u"?"undefined":Un(HTMLElement))==="object"?e instanceof HTMLElement:e&&Un(e)==="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"},scrollInView:function(e,n){var r=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=r?parseFloat(r):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),s=o?parseFloat(o):0,a=e.getBoundingClientRect(),l=n.getBoundingClientRect(),c=l.top+document.body.scrollTop-(a.top+document.body.scrollTop)-i-s,u=e.scrollTop,d=e.clientHeight,f=this.getOuterHeight(n);c<0?e.scrollTop=u+c:c+f>d&&(e.scrollTop=u+c-d+f)},clearSelection:function(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}},getSelection:function(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null},calculateScrollbarWidth:function(){if(this.calculatedScrollbarWidth!=null)return this.calculatedScrollbarWidth;var e=document.createElement("div");this.addStyles(e,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(e);var n=e.offsetWidth-e.clientWidth;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n},calculateBodyScrollbarWidth:function(){return window.innerWidth-document.documentElement.offsetWidth},getBrowser:function(){if(!this.browser){var e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser},resolveUserAgent:function(){var e=navigator.userAgent.toLowerCase(),n=/(chrome)[ ]([\w.]+)/.exec(e)||/(webkit)[ ]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ ]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}},isVisible:function(e){return e&&e.offsetParent!=null},invokeElementMethod:function(e,n,r){e[n].apply(e,r)},isExist:function(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&this.getParentNode(e))},isClient:function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)},focus:function(e,n){e&&document.activeElement!==e&&e.focus(n)},isFocusableElement:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return this.isElement(e)?e.matches('button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)):!1},getFocusableElements:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=this.find(e,'button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])'.concat(n,`,
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n,`,
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])`).concat(n)),i=[],o=Li(r),s;try{for(o.s();!(s=o.n()).done;){var a=s.value;getComputedStyle(a).display!="none"&&getComputedStyle(a).visibility!="hidden"&&i.push(a)}}catch(l){o.e(l)}finally{o.f()}return i},getFirstFocusableElement:function(e,n){var r=this.getFocusableElements(e,n);return r.length>0?r[0]:null},getLastFocusableElement:function(e,n){var r=this.getFocusableElements(e,n);return r.length>0?r[r.length-1]:null},getNextFocusableElement:function(e,n,r){var i=this.getFocusableElements(e,r),o=i.length>0?i.findIndex(function(a){return a===n}):-1,s=o>-1&&i.length>=o+1?o+1:-1;return s>-1?i[s]:null},getPreviousElementSibling:function(e,n){for(var r=e.previousElementSibling;r;){if(r.matches(n))return r;r=r.previousElementSibling}return null},getNextElementSibling:function(e,n){for(var r=e.nextElementSibling;r;){if(r.matches(n))return r;r=r.nextElementSibling}return null},isClickable:function(e){if(e){var n=e.nodeName,r=e.parentElement&&e.parentElement.nodeName;return n==="INPUT"||n==="TEXTAREA"||n==="BUTTON"||n==="A"||r==="INPUT"||r==="TEXTAREA"||r==="BUTTON"||r==="A"||!!e.closest(".p-button, .p-checkbox, .p-radiobutton")}return!1},applyStyle:function(e,n){if(typeof n=="string")e.style.cssText=n;else for(var r in n)e.style[r]=n[r]},isIOS:function(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream},isAndroid:function(){return/(android)/i.test(navigator.userAgent)},isTouchDevice:function(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0},hasCSSAnimation:function(e){if(e){var n=getComputedStyle(e),r=parseFloat(n.getPropertyValue("animation-duration")||"0");return r>0}return!1},hasCSSTransition:function(e){if(e){var n=getComputedStyle(e),r=parseFloat(n.getPropertyValue("transition-duration")||"0");return r>0}return!1},exportCSV:function(e,n){var r=new Blob([e],{type:"application/csv;charset=utf-8;"});if(window.navigator.msSaveOrOpenBlob)navigator.msSaveOrOpenBlob(r,n+".csv");else{var i=document.createElement("a");i.download!==void 0?(i.setAttribute("href",URL.createObjectURL(r)),i.setAttribute("download",n+".csv"),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i)):(e="data:text/csv;charset=utf-8,"+e,window.open(encodeURI(e)))}},blockBodyScroll:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)},unblockBodyScroll:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"p-overflow-hidden";document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}};function Xn(t){"@babel/helpers - typeof";return Xn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xn(t)}function yd(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Us(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,wd(r.key),r)}}function _d(t,e,n){return e&&Us(t.prototype,e),n&&Us(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function wd(t){var e=Sd(t,"string");return Xn(e)=="symbol"?e:String(e)}function Sd(t,e){if(Xn(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(Xn(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var $0=function(){function t(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){};yd(this,t),this.element=e,this.listener=n}return _d(t,[{key:"bindScrollListener",value:function(){this.scrollableParents=Qt.getScrollableParents(this.element);for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}},{key:"unbindScrollListener",value:function(){if(this.scrollableParents)for(var n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}},{key:"destroy",value:function(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}}]),t}();function D0(){var t=new Map;return{on:function(n,r){var i=t.get(n);i?i.push(r):i=[r],t.set(n,i)},off:function(n,r){var i=t.get(n);i&&i.splice(i.indexOf(r)>>>0,1)},emit:function(n,r){var i=t.get(n);i&&i.slice().map(function(o){o(r)})}}}function Vs(t,e){return Id(t)||Ed(t,e)||Ho(t,e)||qd()}function qd(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ed(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function Id(t){if(Array.isArray(t))return t}function Bs(t){return Cd(t)||kd(t)||Ho(t)||Td()}function Td(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kd(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Cd(t){if(Array.isArray(t))return co(t)}function Di(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Ho(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,s=!1,a;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){s=!0,a=c},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(s)throw a}}}}function Ho(t,e){if(t){if(typeof t=="string")return co(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return co(t,e)}}function co(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Vn(t){"@babel/helpers - typeof";return Vn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Vn(t)}var te={equals:function(e,n,r){return r?this.resolveFieldData(e,r)===this.resolveFieldData(n,r):this.deepEquals(e,n)},deepEquals:function(e,n){if(e===n)return!0;if(e&&n&&Vn(e)=="object"&&Vn(n)=="object"){var r=Array.isArray(e),i=Array.isArray(n),o,s,a;if(r&&i){if(s=e.length,s!=n.length)return!1;for(o=s;o--!==0;)if(!this.deepEquals(e[o],n[o]))return!1;return!0}if(r!=i)return!1;var l=e instanceof Date,c=n instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==n.getTime();var u=e instanceof RegExp,d=n instanceof RegExp;if(u!=d)return!1;if(u&&d)return e.toString()==n.toString();var f=Object.keys(e);if(s=f.length,s!==Object.keys(n).length)return!1;for(o=s;o--!==0;)if(!Object.prototype.hasOwnProperty.call(n,f[o]))return!1;for(o=s;o--!==0;)if(a=f[o],!this.deepEquals(e[a],n[a]))return!1;return!0}return e!==e&&n!==n},resolveFieldData:function(e,n){if(!e||!n)return null;try{var r=e[n];if(this.isNotEmpty(r))return r}catch{}if(Object.keys(e).length){if(this.isFunction(n))return n(e);if(n.indexOf(".")===-1)return e[n];for(var i=n.split("."),o=e,s=0,a=i.length;s<a;++s){if(o==null)return null;o=o[i[s]]}return o}return null},getItemValue:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return this.isFunction(e)?e.apply(void 0,r):e},filter:function(e,n,r){var i=[];if(e){var o=Di(e),s;try{for(o.s();!(s=o.n()).done;){var a=s.value,l=Di(n),c;try{for(l.s();!(c=l.n()).done;){var u=c.value;if(String(this.resolveFieldData(a,u)).toLowerCase().indexOf(r.toLowerCase())>-1){i.push(a);break}}}catch(d){l.e(d)}finally{l.f()}}}catch(d){o.e(d)}finally{o.f()}}return i},reorderArray:function(e,n,r){e&&n!==r&&(r>=e.length&&(r%=e.length,n%=e.length),e.splice(r,0,e.splice(n,1)[0]))},findIndexInList:function(e,n){var r=-1;if(n){for(var i=0;i<n.length;i++)if(n[i]===e){r=i;break}}return r},contains:function(e,n){if(e!=null&&n&&n.length){var r=Di(n),i;try{for(r.s();!(i=r.n()).done;){var o=i.value;if(this.equals(e,o))return!0}}catch(s){r.e(s)}finally{r.f()}}return!1},insertIntoOrderedArray:function(e,n,r,i){if(r.length>0){for(var o=!1,s=0;s<r.length;s++){var a=this.findIndexInList(r[s],i);if(a>n){r.splice(s,0,e),o=!0;break}}o||r.push(e)}else r.push(e)},removeAccents:function(e){return e&&e.search(/[\xC0-\xFF]/g)>-1&&(e=e.replace(/[\xC0-\xC5]/g,"A").replace(/[\xC6]/g,"AE").replace(/[\xC7]/g,"C").replace(/[\xC8-\xCB]/g,"E").replace(/[\xCC-\xCF]/g,"I").replace(/[\xD0]/g,"D").replace(/[\xD1]/g,"N").replace(/[\xD2-\xD6\xD8]/g,"O").replace(/[\xD9-\xDC]/g,"U").replace(/[\xDD]/g,"Y").replace(/[\xDE]/g,"P").replace(/[\xE0-\xE5]/g,"a").replace(/[\xE6]/g,"ae").replace(/[\xE7]/g,"c").replace(/[\xE8-\xEB]/g,"e").replace(/[\xEC-\xEF]/g,"i").replace(/[\xF1]/g,"n").replace(/[\xF2-\xF6\xF8]/g,"o").replace(/[\xF9-\xFC]/g,"u").replace(/[\xFE]/g,"p").replace(/[\xFD\xFF]/g,"y")),e},getVNodeProp:function(e,n){if(e){var r=e.props;if(r){var i=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),o=Object.prototype.hasOwnProperty.call(r,i)?i:n;return e.type.extends.props[n].type===Boolean&&r[o]===""?!0:r[o]}}return null},toFlatCase:function(e){return this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e},toKebabCase:function(e){return this.isString(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,function(n,r){return r===0?n:"-"+n.toLowerCase()}).toLowerCase():e},toCapitalCase:function(e){return this.isString(e,{empty:!1})?e[0].toUpperCase()+e.slice(1):e},isEmpty:function(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&Vn(e)==="object"&&Object.keys(e).length===0},isNotEmpty:function(e){return!this.isEmpty(e)},isFunction:function(e){return!!(e&&e.constructor&&e.call&&e.apply)},isObject:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e instanceof Object&&e.constructor===Object&&(n||Object.keys(e).length!==0)},isDate:function(e){return e instanceof Date&&e.constructor===Date},isArray:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return Array.isArray(e)&&(n||e.length!==0)},isString:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return typeof e=="string"&&(n||e!=="")},isPrintableCharacter:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)},findLast:function(e,n){var r;if(this.isNotEmpty(e))try{r=e.findLast(n)}catch{r=Bs(e).reverse().find(n)}return r},findLastIndex:function(e,n){var r=-1;if(this.isNotEmpty(e))try{r=e.findLastIndex(n)}catch{r=e.lastIndexOf(Bs(e).reverse().find(n))}return r},sort:function(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,i=arguments.length>3?arguments[3]:void 0,o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:1,s=this.compare(e,n,i,r),a=r;return(this.isEmpty(e)||this.isEmpty(n))&&(a=o===1?r:o),a*s},compare:function(e,n,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1,o=-1,s=this.isEmpty(e),a=this.isEmpty(n);return s&&a?o=0:s?o=i:a?o=-i:typeof e=="string"&&typeof n=="string"?o=r(e,n):o=e<n?-1:e>n?1:0,o},localeComparator:function(){return new Intl.Collator(void 0,{numeric:!0}).compare},nestedKeys:function(){var e=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return Object.entries(n).reduce(function(i,o){var s=Vs(o,2),a=s[0],l=s[1],c=r?"".concat(r,".").concat(a):a;return e.isObject(l)?i=i.concat(e.nestedKeys(l,c)):i.push(c),i},[])},stringify:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=" ".repeat(i),s=" ".repeat(i+r);return this.isArray(e)?"["+e.map(function(a){return n.stringify(a,r,i+r)}).join(", ")+"]":this.isDate(e)?e.toISOString():this.isFunction(e)?e.toString():this.isObject(e)?`{
`+Object.entries(e).map(function(a){var l=Vs(a,2),c=l[0],u=l[1];return"".concat(s).concat(c,": ").concat(n.stringify(u,r,i+r))}).join(`,
`)+`
`.concat(o)+"}":JSON.stringify(e)}},Hs=0;function M0(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"pv_id_";return Hs++,"".concat(t).concat(Hs)}function Ad(t){return Rd(t)||xd(t)||Pd(t)||Od()}function Od(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Pd(t,e){if(t){if(typeof t=="string")return uo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uo(t,e)}}function xd(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Rd(t){if(Array.isArray(t))return uo(t)}function uo(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Nd(){var t=[],e=function(a,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:999,u=i(a,l,c),d=u.value+(u.key===a?0:c)+1;return t.push({key:a,value:d}),d},n=function(a){t=t.filter(function(l){return l.value!==a})},r=function(a,l){return i(a,l).value},i=function(a,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return Ad(t).reverse().find(function(u){return l?!0:u.key===a})||{key:a,value:c}},o=function(a){return a&&parseInt(a.style.zIndex,10)||0};return{get:o,set:function(a,l,c){l&&(l.style.zIndex=String(e(a,!0,c)))},clear:function(a){a&&(n(o(a)),a.style.zIndex="")},getCurrent:function(a){return r(a,!0)}}}var j0=Nd(),Ae={STARTS_WITH:"startsWith",CONTAINS:"contains",NOT_CONTAINS:"notContains",ENDS_WITH:"endsWith",EQUALS:"equals",NOT_EQUALS:"notEquals",IN:"in",LESS_THAN:"lt",LESS_THAN_OR_EQUAL_TO:"lte",GREATER_THAN:"gt",GREATER_THAN_OR_EQUAL_TO:"gte",BETWEEN:"between",DATE_IS:"dateIs",DATE_IS_NOT:"dateIsNot",DATE_BEFORE:"dateBefore",DATE_AFTER:"dateAfter"};function Ws(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Ld(t))||e&&t&&typeof t.length=="number"){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o=!0,s=!1,a;return{s:function(){n=n.call(t)},n:function(){var c=n.next();return o=c.done,c},e:function(c){s=!0,a=c},f:function(){try{!o&&n.return!=null&&n.return()}finally{if(s)throw a}}}}function Ld(t,e){if(t){if(typeof t=="string")return zs(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zs(t,e)}}function zs(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var F0={filter:function(e,n,r,i,o){var s=[];if(!e)return s;var a=Ws(e),l;try{for(a.s();!(l=a.n()).done;){var c=l.value;if(typeof c=="string"){if(this.filters[i](c,r,o)){s.push(c);continue}}else{var u=Ws(n),d;try{for(u.s();!(d=u.n()).done;){var f=d.value,g=te.resolveFieldData(c,f);if(this.filters[i](g,r,o)){s.push(c);break}}}catch(b){u.e(b)}finally{u.f()}}}}catch(b){a.e(b)}finally{a.f()}return s},filters:{startsWith:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var i=te.removeAccents(n.toString()).toLocaleLowerCase(r),o=te.removeAccents(e.toString()).toLocaleLowerCase(r);return o.slice(0,i.length)===i},contains:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var i=te.removeAccents(n.toString()).toLocaleLowerCase(r),o=te.removeAccents(e.toString()).toLocaleLowerCase(r);return o.indexOf(i)!==-1},notContains:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var i=te.removeAccents(n.toString()).toLocaleLowerCase(r),o=te.removeAccents(e.toString()).toLocaleLowerCase(r);return o.indexOf(i)===-1},endsWith:function(e,n,r){if(n==null||n==="")return!0;if(e==null)return!1;var i=te.removeAccents(n.toString()).toLocaleLowerCase(r),o=te.removeAccents(e.toString()).toLocaleLowerCase(r);return o.indexOf(i,o.length-i.length)!==-1},equals:function(e,n,r){return n==null||n===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():te.removeAccents(e.toString()).toLocaleLowerCase(r)==te.removeAccents(n.toString()).toLocaleLowerCase(r)},notEquals:function(e,n,r){return n==null||n===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():te.removeAccents(e.toString()).toLocaleLowerCase(r)!=te.removeAccents(n.toString()).toLocaleLowerCase(r)},in:function(e,n){if(n==null||n.length===0)return!0;for(var r=0;r<n.length;r++)if(te.equals(e,n[r]))return!0;return!1},between:function(e,n){return n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1]},lt:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n},lte:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n},gt:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n},gte:function(e,n){return n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n},dateIs:function(e,n){return n==null?!0:e==null?!1:e.toDateString()===n.toDateString()},dateIsNot:function(e,n){return n==null?!0:e==null?!1:e.toDateString()!==n.toDateString()},dateBefore:function(e,n){return n==null?!0:e==null?!1:e.getTime()<n.getTime()},dateAfter:function(e,n){return n==null?!0:e==null?!1:e.getTime()>n.getTime()}},register:function(e,n){this.filters[e]=n}};/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wo(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const ge={},bn=[],We=()=>{},$d=()=>!1,li=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zo=t=>t.startsWith("onUpdate:"),qe=Object.assign,Go=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Dd=Object.prototype.hasOwnProperty,ne=(t,e)=>Dd.call(t,e),B=Array.isArray,yn=t=>ci(t)==="[object Map]",Vl=t=>ci(t)==="[object Set]",G=t=>typeof t=="function",we=t=>typeof t=="string",Pn=t=>typeof t=="symbol",me=t=>t!==null&&typeof t=="object",Bl=t=>(me(t)||G(t))&&G(t.then)&&G(t.catch),Hl=Object.prototype.toString,ci=t=>Hl.call(t),Md=t=>ci(t).slice(8,-1),Wl=t=>ci(t)==="[object Object]",Ko=t=>we(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bn=Wo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ui=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},jd=/-(\w)/g,lt=ui(t=>t.replace(jd,(e,n)=>n?n.toUpperCase():"")),Fd=/\B([A-Z])/g,xn=ui(t=>t.replace(Fd,"-$1").toLowerCase()),di=ui(t=>t.charAt(0).toUpperCase()+t.slice(1)),Mi=ui(t=>t?`on${di(t)}`:""),Vt=(t,e)=>!Object.is(t,e),$r=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Kr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},fo=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Ud=t=>{const e=we(t)?Number(t):NaN;return isNaN(e)?t:e};let Gs;const zl=()=>Gs||(Gs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fi(t){if(B(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=we(r)?Wd(r):fi(r);if(i)for(const o in i)e[o]=i[o]}return e}else if(we(t)||me(t))return t}const Vd=/;(?![^(]*\))/g,Bd=/:([^]+)/,Hd=/\/\*[^]*?\*\//g;function Wd(t){const e={};return t.replace(Hd,"").split(Vd).forEach(n=>{if(n){const r=n.split(Bd);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Dt(t){let e="";if(we(t))e=t;else if(B(t))for(let n=0;n<t.length;n++){const r=Dt(t[n]);r&&(e+=r+" ")}else if(me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function zd(t){if(!t)return null;let{class:e,style:n}=t;return e&&!we(e)&&(t.class=Dt(e)),n&&(t.style=fi(n)),t}const Gd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Kd=Wo(Gd);function Gl(t){return!!t||t===""}const Dr=t=>we(t)?t:t==null?"":B(t)||me(t)&&(t.toString===Hl||!G(t.toString))?JSON.stringify(t,Kl,2):String(t),Kl=(t,e)=>e&&e.__v_isRef?Kl(t,e.value):yn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],o)=>(n[ji(r,o)+" =>"]=i,n),{})}:Vl(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ji(n))}:Pn(e)?ji(e):me(e)&&!B(e)&&!Wl(e)?String(e):e,ji=(t,e="")=>{var n;return Pn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let je;class Jd{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=je,!e&&je&&(this.index=(je.scopes||(je.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=je;try{return je=this,e()}finally{je=n}}}on(){je=this}off(){je=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Yd(t,e=je){e&&e.active&&e.effects.push(t)}function Jl(){return je}function Qd(t){je&&je.cleanups.push(t)}let nn;class Jo{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Yd(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,ln();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Xd(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),cn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Mt,n=nn;try{return Mt=!0,nn=this,this._runnings++,Ks(this),this.fn()}finally{Js(this),this._runnings--,nn=n,Mt=e}}stop(){var e;this.active&&(Ks(this),Js(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Xd(t){return t.value}function Ks(t){t._trackId++,t._depsLength=0}function Js(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Yl(t.deps[e],t);t.deps.length=t._depsLength}}function Yl(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Mt=!0,ho=0;const Ql=[];function ln(){Ql.push(Mt),Mt=!1}function cn(){const t=Ql.pop();Mt=t===void 0?!0:t}function Yo(){ho++}function Qo(){for(ho--;!ho&&po.length;)po.shift()()}function Xl(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Yl(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const po=[];function Zl(t,e,n){Yo();for(const r of t.keys()){let i;r._dirtyLevel<e&&(i??(i=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(i??(i=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&po.push(r.scheduler)))}Qo()}const ec=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},go=new WeakMap,rn=Symbol(""),mo=Symbol("");function $e(t,e,n){if(Mt&&nn){let r=go.get(t);r||go.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=ec(()=>r.delete(n))),Xl(nn,i)}}function _t(t,e,n,r,i,o){const s=go.get(t);if(!s)return;let a=[];if(e==="clear")a=[...s.values()];else if(n==="length"&&B(t)){const l=Number(r);s.forEach((c,u)=>{(u==="length"||!Pn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(s.get(n)),e){case"add":B(t)?Ko(n)&&a.push(s.get("length")):(a.push(s.get(rn)),yn(t)&&a.push(s.get(mo)));break;case"delete":B(t)||(a.push(s.get(rn)),yn(t)&&a.push(s.get(mo)));break;case"set":yn(t)&&a.push(s.get(rn));break}Yo();for(const l of a)l&&Zl(l,4);Qo()}const Zd=Wo("__proto__,__v_isRef,__isVue"),tc=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pn)),Ys=ef();function ef(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ie(this);for(let o=0,s=this.length;o<s;o++)$e(r,"get",o+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(ie)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){ln(),Yo();const r=ie(this)[e].apply(this,n);return Qo(),cn(),r}}),t}function tf(t){const e=ie(this);return $e(e,"has",t),e.hasOwnProperty(t)}class nc{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const i=this._isReadonly,o=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return o;if(n==="__v_raw")return r===(i?o?gf:sc:o?oc:ic).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const s=B(e);if(!i){if(s&&ne(Ys,n))return Reflect.get(Ys,n,r);if(n==="hasOwnProperty")return tf}const a=Reflect.get(e,n,r);return(Pn(n)?tc.has(n):Zd(n))||(i||$e(e,"get",n),o)?a:_e(a)?s&&Ko(n)?a:a.value:me(a)?i?es(a):Rn(a):a}}class rc extends nc{constructor(e=!1){super(!1,e)}set(e,n,r,i){let o=e[n];if(!this._isShallow){const l=Tn(o);if(!Jr(r)&&!Tn(r)&&(o=ie(o),r=ie(r)),!B(e)&&_e(o)&&!_e(r))return l?!1:(o.value=r,!0)}const s=B(e)&&Ko(n)?Number(n)<e.length:ne(e,n),a=Reflect.set(e,n,r,i);return e===ie(i)&&(s?Vt(r,o)&&_t(e,"set",n,r):_t(e,"add",n,r)),a}deleteProperty(e,n){const r=ne(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&_t(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!Pn(n)||!tc.has(n))&&$e(e,"has",n),r}ownKeys(e){return $e(e,"iterate",B(e)?"length":rn),Reflect.ownKeys(e)}}class nf extends nc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const rf=new rc,of=new nf,sf=new rc(!0),Xo=t=>t,hi=t=>Reflect.getPrototypeOf(t);function Tr(t,e,n=!1,r=!1){t=t.__v_raw;const i=ie(t),o=ie(e);n||(Vt(e,o)&&$e(i,"get",e),$e(i,"get",o));const{has:s}=hi(i),a=r?Xo:n?ns:Zn;if(s.call(i,e))return a(t.get(e));if(s.call(i,o))return a(t.get(o));t!==i&&t.get(e)}function kr(t,e=!1){const n=this.__v_raw,r=ie(n),i=ie(t);return e||(Vt(t,i)&&$e(r,"has",t),$e(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Cr(t,e=!1){return t=t.__v_raw,!e&&$e(ie(t),"iterate",rn),Reflect.get(t,"size",t)}function Qs(t){t=ie(t);const e=ie(this);return hi(e).has.call(e,t)||(e.add(t),_t(e,"add",t,t)),this}function Xs(t,e){e=ie(e);const n=ie(this),{has:r,get:i}=hi(n);let o=r.call(n,t);o||(t=ie(t),o=r.call(n,t));const s=i.call(n,t);return n.set(t,e),o?Vt(e,s)&&_t(n,"set",t,e):_t(n,"add",t,e),this}function Zs(t){const e=ie(this),{has:n,get:r}=hi(e);let i=n.call(e,t);i||(t=ie(t),i=n.call(e,t)),r&&r.call(e,t);const o=e.delete(t);return i&&_t(e,"delete",t,void 0),o}function ea(){const t=ie(this),e=t.size!==0,n=t.clear();return e&&_t(t,"clear",void 0,void 0),n}function Ar(t,e){return function(r,i){const o=this,s=o.__v_raw,a=ie(s),l=e?Xo:t?ns:Zn;return!t&&$e(a,"iterate",rn),s.forEach((c,u)=>r.call(i,l(c),l(u),o))}}function Or(t,e,n){return function(...r){const i=this.__v_raw,o=ie(i),s=yn(o),a=t==="entries"||t===Symbol.iterator&&s,l=t==="keys"&&s,c=i[t](...r),u=n?Xo:e?ns:Zn;return!e&&$e(o,"iterate",l?mo:rn),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function Et(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function af(){const t={get(o){return Tr(this,o)},get size(){return Cr(this)},has:kr,add:Qs,set:Xs,delete:Zs,clear:ea,forEach:Ar(!1,!1)},e={get(o){return Tr(this,o,!1,!0)},get size(){return Cr(this)},has:kr,add:Qs,set:Xs,delete:Zs,clear:ea,forEach:Ar(!1,!0)},n={get(o){return Tr(this,o,!0)},get size(){return Cr(this,!0)},has(o){return kr.call(this,o,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Ar(!0,!1)},r={get(o){return Tr(this,o,!0,!0)},get size(){return Cr(this,!0)},has(o){return kr.call(this,o,!0)},add:Et("add"),set:Et("set"),delete:Et("delete"),clear:Et("clear"),forEach:Ar(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{t[o]=Or(o,!1,!1),n[o]=Or(o,!0,!1),e[o]=Or(o,!1,!0),r[o]=Or(o,!0,!0)}),[t,n,e,r]}const[lf,cf,uf,df]=af();function Zo(t,e){const n=e?t?df:uf:t?cf:lf;return(r,i,o)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(ne(n,i)&&i in r?n:r,i,o)}const ff={get:Zo(!1,!1)},hf={get:Zo(!1,!0)},pf={get:Zo(!0,!1)},ic=new WeakMap,oc=new WeakMap,sc=new WeakMap,gf=new WeakMap;function mf(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function vf(t){return t.__v_skip||!Object.isExtensible(t)?0:mf(Md(t))}function Rn(t){return Tn(t)?t:ts(t,!1,rf,ff,ic)}function ac(t){return ts(t,!1,sf,hf,oc)}function es(t){return ts(t,!0,of,pf,sc)}function ts(t,e,n,r,i){if(!me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const o=i.get(t);if(o)return o;const s=vf(t);if(s===0)return t;const a=new Proxy(t,s===2?r:n);return i.set(t,a),a}function _n(t){return Tn(t)?_n(t.__v_raw):!!(t&&t.__v_isReactive)}function Tn(t){return!!(t&&t.__v_isReadonly)}function Jr(t){return!!(t&&t.__v_isShallow)}function lc(t){return _n(t)||Tn(t)}function ie(t){const e=t&&t.__v_raw;return e?ie(e):t}function cc(t){return Object.isExtensible(t)&&Kr(t,"__v_skip",!0),t}const Zn=t=>me(t)?Rn(t):t,ns=t=>me(t)?es(t):t;class uc{constructor(e,n,r,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Jo(()=>e(this._value),()=>Mr(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=ie(this);return(!e._cacheable||e.effect.dirty)&&Vt(e._value,e._value=e.effect.run())&&Mr(e,4),dc(e),e.effect._dirtyLevel>=2&&Mr(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function bf(t,e,n=!1){let r,i;const o=G(t);return o?(r=t,i=We):(r=t.get,i=t.set),new uc(r,i,o||!i,n)}function dc(t){var e;Mt&&nn&&(t=ie(t),Xl(nn,(e=t.dep)!=null?e:t.dep=ec(()=>t.dep=void 0,t instanceof uc?t:void 0)))}function Mr(t,e=4,n){t=ie(t);const r=t.dep;r&&Zl(r,e)}function _e(t){return!!(t&&t.__v_isRef===!0)}function de(t){return fc(t,!1)}function yf(t){return fc(t,!0)}function fc(t,e){return _e(t)?t:new _f(t,e)}class _f{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ie(e),this._value=n?e:Zn(e)}get value(){return dc(this),this._value}set value(e){const n=this.__v_isShallow||Jr(e)||Tn(e);e=n?e:ie(e),Vt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Zn(e),Mr(this,4))}}function D(t){return _e(t)?t.value:t}const wf={get:(t,e,n)=>D(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return _e(i)&&!_e(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function hc(t){return _n(t)?t:new Proxy(t,wf)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jt(t,e,n,r){try{return r?t(...r):t()}catch(i){pi(i,e,n)}}function ze(t,e,n,r){if(G(t)){const o=jt(t,e,n,r);return o&&Bl(o)&&o.catch(s=>{pi(s,e,n)}),o}const i=[];for(let o=0;o<t.length;o++)i.push(ze(t[o],e,n,r));return i}function pi(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let o=e.parent;const s=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,s,a)===!1)return}o=o.parent}const l=e.appContext.config.errorHandler;if(l){jt(l,null,10,[t,s,a]);return}}Sf(t,n,i,r)}function Sf(t,e,n,r=!0){console.error(t)}let er=!1,vo=!1;const Oe=[];let ot=0;const wn=[];let At=null,Xt=0;const pc=Promise.resolve();let rs=null;function gr(t){const e=rs||pc;return t?e.then(this?t.bind(this):t):e}function qf(t){let e=ot+1,n=Oe.length;for(;e<n;){const r=e+n>>>1,i=Oe[r],o=tr(i);o<t||o===t&&i.pre?e=r+1:n=r}return e}function is(t){(!Oe.length||!Oe.includes(t,er&&t.allowRecurse?ot+1:ot))&&(t.id==null?Oe.push(t):Oe.splice(qf(t.id),0,t),gc())}function gc(){!er&&!vo&&(vo=!0,rs=pc.then(vc))}function Ef(t){const e=Oe.indexOf(t);e>ot&&Oe.splice(e,1)}function If(t){B(t)?wn.push(...t):(!At||!At.includes(t,t.allowRecurse?Xt+1:Xt))&&wn.push(t),gc()}function ta(t,e,n=er?ot+1:0){for(;n<Oe.length;n++){const r=Oe[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Oe.splice(n,1),n--,r()}}}function mc(t){if(wn.length){const e=[...new Set(wn)].sort((n,r)=>tr(n)-tr(r));if(wn.length=0,At){At.push(...e);return}for(At=e,Xt=0;Xt<At.length;Xt++)At[Xt]();At=null,Xt=0}}const tr=t=>t.id==null?1/0:t.id,Tf=(t,e)=>{const n=tr(t)-tr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function vc(t){vo=!1,er=!0,Oe.sort(Tf);try{for(ot=0;ot<Oe.length;ot++){const e=Oe[ot];e&&e.active!==!1&&jt(e,null,14)}}finally{ot=0,Oe.length=0,mc(),er=!1,rs=null,(Oe.length||wn.length)&&vc()}}function kf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ge;let i=n;const o=e.startsWith("update:"),s=o&&e.slice(7);if(s&&s in r){const u=`${s==="modelValue"?"model":s}Modifiers`,{number:d,trim:f}=r[u]||ge;f&&(i=n.map(g=>we(g)?g.trim():g)),d&&(i=n.map(fo))}let a,l=r[a=Mi(e)]||r[a=Mi(lt(e))];!l&&o&&(l=r[a=Mi(xn(e))]),l&&ze(l,t,6,i);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ze(c,t,6,i)}}function bc(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const o=t.emits;let s={},a=!1;if(!G(t)){const l=c=>{const u=bc(c,e,!0);u&&(a=!0,qe(s,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!o&&!a?(me(t)&&r.set(t,null),null):(B(o)?o.forEach(l=>s[l]=null):qe(s,o),me(t)&&r.set(t,s),s)}function gi(t,e){return!t||!li(e)?!1:(e=e.slice(2).replace(/Once$/,""),ne(t,e[0].toLowerCase()+e.slice(1))||ne(t,xn(e))||ne(t,e))}let Se=null,mi=null;function Yr(t){const e=Se;return Se=t,mi=t&&t.type.__scopeId||null,e}function vi(t){mi=t}function bi(){mi=null}function Le(t,e=Se,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&ga(-1);const o=Yr(e);let s;try{s=t(...i)}finally{Yr(o),r._d&&ga(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function Fi(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[s],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:f,setupState:g,ctx:b,inheritAttrs:q}=t;let R,k;const x=Yr(t);try{if(n.shapeFlag&4){const H=i||r,K=H;R=it(u.call(K,H,d,o,g,f,b)),k=l}else{const H=e;R=it(H.length>1?H(o,{attrs:l,slots:a,emit:c}):H(o,null)),k=e.props?l:Cf(l)}}catch(H){Kn.length=0,pi(H,t,1),R=re(Ge)}let j=R;if(k&&q!==!1){const H=Object.keys(k),{shapeFlag:K}=j;H.length&&K&7&&(s&&H.some(zo)&&(k=Af(k,s)),j=Bt(j,k))}return n.dirs&&(j=Bt(j),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&(j.transition=n.transition),R=j,Yr(x),R}const Cf=t=>{let e;for(const n in t)(n==="class"||n==="style"||li(n))&&((e||(e={}))[n]=t[n]);return e},Af=(t,e)=>{const n={};for(const r in t)(!zo(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Of(t,e,n){const{props:r,children:i,component:o}=t,{props:s,children:a,patchFlag:l}=e,c=o.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?na(r,s,c):!!s;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(s[f]!==r[f]&&!gi(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:r===s?!1:r?s?na(r,s,c):!0:!!s;return!1}function na(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(e[o]!==t[o]&&!gi(n,o))return!0}return!1}function Pf({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const os="components",xf="directives";function ss(t,e){return as(os,t,!0,e)||t}const yc=Symbol.for("v-ndc");function U0(t){return we(t)?as(os,t,!1)||t:t||yc}function V0(t){return as(xf,t)}function as(t,e,n=!0,r=!1){const i=Se||ke;if(i){const o=i.type;if(t===os){const a=kh(o,!1);if(a&&(a===e||a===lt(e)||a===di(lt(e))))return o}const s=ra(i[t]||o[t],e)||ra(i.appContext[t],e);return!s&&r?o:s}}function ra(t,e){return t&&(t[e]||t[lt(e)]||t[di(lt(e))])}const Rf=t=>t.__isSuspense;function Nf(t,e){e&&e.pendingBranch?B(t)?e.effects.push(...t):e.effects.push(t):If(t)}const Lf=Symbol.for("v-scx"),$f=()=>Qe(Lf);function Df(t,e){return ls(t,null,e)}const Pr={};function Ve(t,e,n){return ls(t,e,n)}function ls(t,e,{immediate:n,deep:r,flush:i,once:o,onTrack:s,onTrigger:a}=ge){if(e&&o){const L=e;e=(...Q)=>{L(...Q),K()}}const l=ke,c=L=>r===!0?L:en(L,r===!1?1:void 0);let u,d=!1,f=!1;if(_e(t)?(u=()=>t.value,d=Jr(t)):_n(t)?(u=()=>c(t),d=!0):B(t)?(f=!0,d=t.some(L=>_n(L)||Jr(L)),u=()=>t.map(L=>{if(_e(L))return L.value;if(_n(L))return c(L);if(G(L))return jt(L,l,2)})):G(t)?e?u=()=>jt(t,l,2):u=()=>(g&&g(),ze(t,l,3,[b])):u=We,e&&r){const L=u;u=()=>en(L())}let g,b=L=>{g=j.onStop=()=>{jt(L,l,4),g=j.onStop=void 0}},q;if(Ei)if(b=We,e?n&&ze(e,l,3,[u(),f?[]:void 0,b]):u(),i==="sync"){const L=$f();q=L.__watcherHandles||(L.__watcherHandles=[])}else return We;let R=f?new Array(t.length).fill(Pr):Pr;const k=()=>{if(!(!j.active||!j.dirty))if(e){const L=j.run();(r||d||(f?L.some((Q,M)=>Vt(Q,R[M])):Vt(L,R)))&&(g&&g(),ze(e,l,3,[L,R===Pr?void 0:f&&R[0]===Pr?[]:R,b]),R=L)}else j.run()};k.allowRecurse=!!e;let x;i==="sync"?x=k:i==="post"?x=()=>Ne(k,l&&l.suspense):(k.pre=!0,l&&(k.id=l.uid),x=()=>is(k));const j=new Jo(u,We,x),H=Jl(),K=()=>{j.stop(),H&&Go(H.effects,j)};return e?n?k():R=j.run():i==="post"?Ne(j.run.bind(j),l&&l.suspense):j.run(),q&&q.push(K),K}function Mf(t,e,n){const r=this.proxy,i=we(t)?t.includes(".")?_c(r,t):()=>r[t]:t.bind(r,r);let o;G(e)?o=e:(o=e.handler,n=e);const s=mr(this),a=ls(i,o.bind(r),n);return s(),a}function _c(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function en(t,e,n=0,r){if(!me(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),_e(t))en(t.value,e,n,r);else if(B(t))for(let i=0;i<t.length;i++)en(t[i],e,n,r);else if(Vl(t)||yn(t))t.forEach(i=>{en(i,e,n,r)});else if(Wl(t))for(const i in t)en(t[i],e,n,r);return t}function B0(t,e){if(Se===null)return t;const n=Ii(Se)||Se.proxy,r=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,s,a,l=ge]=e[i];o&&(G(o)&&(o={mounted:o,updated:o}),o.deep&&en(s),r.push({dir:o,instance:n,value:s,oldValue:void 0,arg:a,modifiers:l}))}return t}function zt(t,e,n,r){const i=t.dirs,o=e&&e.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let l=a.dir[r];l&&(ln(),ze(l,n,8,[t.el,a,t,e]),cn())}}const Ot=Symbol("_leaveCb"),xr=Symbol("_enterCb");function jf(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ut(()=>{t.isMounted=!0}),Tc(()=>{t.isUnmounting=!0}),t}const Be=[Function,Array],wc={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Be,onEnter:Be,onAfterEnter:Be,onEnterCancelled:Be,onBeforeLeave:Be,onLeave:Be,onAfterLeave:Be,onLeaveCancelled:Be,onBeforeAppear:Be,onAppear:Be,onAfterAppear:Be,onAppearCancelled:Be},Ff={name:"BaseTransition",props:wc,setup(t,{slots:e}){const n=qi(),r=jf();return()=>{const i=e.default&&qc(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const f of i)if(f.type!==Ge){o=f;break}}const s=ie(t),{mode:a}=s;if(r.isLeaving)return Ui(o);const l=ia(o);if(!l)return Ui(o);const c=bo(l,s,r,n);yo(l,c);const u=n.subTree,d=u&&ia(u);if(d&&d.type!==Ge&&!Zt(l,d)){const f=bo(d,s,r,n);if(yo(d,f),a==="out-in")return r.isLeaving=!0,f.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ui(o);a==="in-out"&&l.type!==Ge&&(f.delayLeave=(g,b,q)=>{const R=Sc(r,d);R[String(d.key)]=d,g[Ot]=()=>{b(),g[Ot]=void 0,delete c.delayedLeave},c.delayedLeave=q})}return o}}},Uf=Ff;function Sc(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bo(t,e,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:f,onAfterLeave:g,onLeaveCancelled:b,onBeforeAppear:q,onAppear:R,onAfterAppear:k,onAppearCancelled:x}=e,j=String(t.key),H=Sc(n,t),K=(M,Y)=>{M&&ze(M,r,9,Y)},L=(M,Y)=>{const X=Y[1];K(M,Y),B(M)?M.every(he=>he.length<=1)&&X():M.length<=1&&X()},Q={mode:o,persisted:s,beforeEnter(M){let Y=a;if(!n.isMounted)if(i)Y=q||a;else return;M[Ot]&&M[Ot](!0);const X=H[j];X&&Zt(t,X)&&X.el[Ot]&&X.el[Ot](),K(Y,[M])},enter(M){let Y=l,X=c,he=u;if(!n.isMounted)if(i)Y=R||l,X=k||c,he=x||u;else return;let N=!1;const oe=M[xr]=Ee=>{N||(N=!0,Ee?K(he,[M]):K(X,[M]),Q.delayedLeave&&Q.delayedLeave(),M[xr]=void 0)};Y?L(Y,[M,oe]):oe()},leave(M,Y){const X=String(t.key);if(M[xr]&&M[xr](!0),n.isUnmounting)return Y();K(d,[M]);let he=!1;const N=M[Ot]=oe=>{he||(he=!0,Y(),oe?K(b,[M]):K(g,[M]),M[Ot]=void 0,H[X]===t&&delete H[X])};H[X]=t,f?L(f,[M,N]):N()},clone(M){return bo(M,e,n,r)}};return Q}function Ui(t){if(yi(t))return t=Bt(t),t.children=null,t}function ia(t){return yi(t)?t.children?t.children[0]:void 0:t}function yo(t,e){t.shapeFlag&6&&t.component?yo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function qc(t,e=!1,n){let r=[],i=0;for(let o=0;o<t.length;o++){let s=t[o];const a=n==null?s.key:String(n)+String(s.key!=null?s.key:o);s.type===Te?(s.patchFlag&128&&i++,r=r.concat(qc(s.children,e,a))):(e||s.type!==Ge)&&r.push(a!=null?Bt(s,{key:a}):s)}if(i>1)for(let o=0;o<r.length;o++)r[o].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ec(t,e){return G(t)?qe({name:t.name},e,{setup:t}):t}const Hn=t=>!!t.type.__asyncLoader,yi=t=>t.type.__isKeepAlive;function Vf(t,e){Ic(t,"a",e)}function Bf(t,e){Ic(t,"da",e)}function Ic(t,e,n=ke){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(_i(e,r,n),n){let i=n.parent;for(;i&&i.parent;)yi(i.parent.vnode)&&Hf(r,e,n,i),i=i.parent}}function Hf(t,e,n,r){const i=_i(e,t,r,!0);kc(()=>{Go(r[e],i)},n)}function _i(t,e,n=ke,r=!1){if(n){const i=n[t]||(n[t]=[]),o=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;ln();const a=mr(n),l=ze(e,n,t,s);return a(),cn(),l});return r?i.unshift(o):i.push(o),o}}const St=t=>(e,n=ke)=>(!Ei||t==="sp")&&_i(t,(...r)=>e(...r),n),Wf=St("bm"),ut=St("m"),zf=St("bu"),Gf=St("u"),Tc=St("bum"),kc=St("um"),Kf=St("sp"),Jf=St("rtg"),Yf=St("rtc");function Qf(t,e=ke){_i("ec",t,e)}function _o(t,e,n,r){let i;const o=n&&n[r];if(B(t)||we(t)){i=new Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=e(t[s],s,void 0,o&&o[s])}else if(typeof t=="number"){i=new Array(t);for(let s=0;s<t;s++)i[s]=e(s+1,s,void 0,o&&o[s])}else if(me(t))if(t[Symbol.iterator])i=Array.from(t,(s,a)=>e(s,a,void 0,o&&o[a]));else{const s=Object.keys(t);i=new Array(s.length);for(let a=0,l=s.length;a<l;a++){const c=s[a];i[a]=e(t[c],c,a,o&&o[a])}}else i=[];return n&&(n[r]=i),i}function H0(t,e){for(let n=0;n<e.length;n++){const r=e[n];if(B(r))for(let i=0;i<r.length;i++)t[r[i].name]=r[i].fn;else r&&(t[r.name]=r.key?(...i)=>{const o=r.fn(...i);return o&&(o.key=r.key),o}:r.fn)}return t}function Cc(t,e,n={},r,i){if(Se.isCE||Se.parent&&Hn(Se.parent)&&Se.parent.isCE)return e!=="default"&&(n.name=e),re("slot",n,r&&r());let o=t[e];o&&o._c&&(o._d=!1),U();const s=o&&Ac(o(n)),a=Ue(Te,{key:n.key||s&&s.key||`_${e}`},s||(r?r():[]),s&&t._===1?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),o&&o._c&&(o._d=!0),a}function Ac(t){return t.some(e=>Xr(e)?!(e.type===Ge||e.type===Te&&!Ac(e.children)):!0)?t:null}const wo=t=>t?Vc(t)?Ii(t)||t.proxy:wo(t.parent):null,Wn=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wo(t.parent),$root:t=>wo(t.root),$emit:t=>t.emit,$options:t=>cs(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,is(t.update)}),$nextTick:t=>t.n||(t.n=gr.bind(t.proxy)),$watch:t=>Mf.bind(t)}),Vi=(t,e)=>t!==ge&&!t.__isScriptSetup&&ne(t,e),Xf={get({_:t},e){const{ctx:n,setupState:r,data:i,props:o,accessCache:s,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const g=s[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return o[e]}else{if(Vi(r,e))return s[e]=1,r[e];if(i!==ge&&ne(i,e))return s[e]=2,i[e];if((c=t.propsOptions[0])&&ne(c,e))return s[e]=3,o[e];if(n!==ge&&ne(n,e))return s[e]=4,n[e];So&&(s[e]=0)}}const u=Wn[e];let d,f;if(u)return e==="$attrs"&&$e(t,"get",e),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ge&&ne(n,e))return s[e]=4,n[e];if(f=l.config.globalProperties,ne(f,e))return f[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return Vi(i,e)?(i[e]=n,!0):r!==ge&&ne(r,e)?(r[e]=n,!0):ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(o[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},s){let a;return!!n[s]||t!==ge&&ne(t,s)||Vi(e,s)||(a=o[0])&&ne(a,s)||ne(r,s)||ne(Wn,s)||ne(i.config.globalProperties,s)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function oa(t){return B(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let So=!0;function Zf(t){const e=cs(t),n=t.proxy,r=t.ctx;So=!1,e.beforeCreate&&sa(e.beforeCreate,t,"bc");const{data:i,computed:o,methods:s,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:g,updated:b,activated:q,deactivated:R,beforeDestroy:k,beforeUnmount:x,destroyed:j,unmounted:H,render:K,renderTracked:L,renderTriggered:Q,errorCaptured:M,serverPrefetch:Y,expose:X,inheritAttrs:he,components:N,directives:oe,filters:Ee}=e;if(c&&eh(c,r,null),s)for(const ce in s){const se=s[ce];G(se)&&(r[ce]=se.bind(n))}if(i){const ce=i.call(n,n);me(ce)&&(t.data=Rn(ce))}if(So=!0,o)for(const ce in o){const se=o[ce],ft=G(se)?se.bind(n,n):G(se.get)?se.get.bind(n,n):We,qt=!G(se)&&G(se.set)?se.set.bind(n):We,tt=Fe({get:ft,set:qt});Object.defineProperty(r,ce,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Re=>tt.value=Re})}if(a)for(const ce in a)Oc(a[ce],r,n,ce);if(l){const ce=G(l)?l.call(n):l;Reflect.ownKeys(ce).forEach(se=>{jr(se,ce[se])})}u&&sa(u,t,"c");function ye(ce,se){B(se)?se.forEach(ft=>ce(ft.bind(n))):se&&ce(se.bind(n))}if(ye(Wf,d),ye(ut,f),ye(zf,g),ye(Gf,b),ye(Vf,q),ye(Bf,R),ye(Qf,M),ye(Yf,L),ye(Jf,Q),ye(Tc,x),ye(kc,H),ye(Kf,Y),B(X))if(X.length){const ce=t.exposed||(t.exposed={});X.forEach(se=>{Object.defineProperty(ce,se,{get:()=>n[se],set:ft=>n[se]=ft})})}else t.exposed||(t.exposed={});K&&t.render===We&&(t.render=K),he!=null&&(t.inheritAttrs=he),N&&(t.components=N),oe&&(t.directives=oe)}function eh(t,e,n=We){B(t)&&(t=qo(t));for(const r in t){const i=t[r];let o;me(i)?"default"in i?o=Qe(i.from||r,i.default,!0):o=Qe(i.from||r):o=Qe(i),_e(o)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[r]=o}}function sa(t,e,n){ze(B(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Oc(t,e,n,r){const i=r.includes(".")?_c(n,r):()=>n[r];if(we(t)){const o=e[t];G(o)&&Ve(i,o)}else if(G(t))Ve(i,t.bind(n));else if(me(t))if(B(t))t.forEach(o=>Oc(o,e,n,r));else{const o=G(t.handler)?t.handler.bind(n):e[t.handler];G(o)&&Ve(i,o,t)}}function cs(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=t.appContext,a=o.get(e);let l;return a?l=a:!i.length&&!n&&!r?l=e:(l={},i.length&&i.forEach(c=>Qr(l,c,s,!0)),Qr(l,e,s)),me(e)&&o.set(e,l),l}function Qr(t,e,n,r=!1){const{mixins:i,extends:o}=e;o&&Qr(t,o,n,!0),i&&i.forEach(s=>Qr(t,s,n,!0));for(const s in e)if(!(r&&s==="expose")){const a=th[s]||n&&n[s];t[s]=a?a(t[s],e[s]):e[s]}return t}const th={data:aa,props:la,emits:la,methods:Fn,computed:Fn,beforeCreate:xe,created:xe,beforeMount:xe,mounted:xe,beforeUpdate:xe,updated:xe,beforeDestroy:xe,beforeUnmount:xe,destroyed:xe,unmounted:xe,activated:xe,deactivated:xe,errorCaptured:xe,serverPrefetch:xe,components:Fn,directives:Fn,watch:rh,provide:aa,inject:nh};function aa(t,e){return e?t?function(){return qe(G(t)?t.call(this,this):t,G(e)?e.call(this,this):e)}:e:t}function nh(t,e){return Fn(qo(t),qo(e))}function qo(t){if(B(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xe(t,e){return t?[...new Set([].concat(t,e))]:e}function Fn(t,e){return t?qe(Object.create(null),t,e):e}function la(t,e){return t?B(t)&&B(e)?[...new Set([...t,...e])]:qe(Object.create(null),oa(t),oa(e??{})):e}function rh(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const r in e)n[r]=xe(t[r],e[r]);return n}function Pc(){return{app:null,config:{isNativeTag:$d,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ih=0;function oh(t,e){return function(r,i=null){G(r)||(r=qe({},r)),i!=null&&!me(i)&&(i=null);const o=Pc(),s=new WeakSet;let a=!1;const l=o.app={_uid:ih++,_component:r,_props:i,_container:null,_context:o,_instance:null,version:Ah,get config(){return o.config},set config(c){},use(c,...u){return s.has(c)||(c&&G(c.install)?(s.add(c),c.install(l,...u)):G(c)&&(s.add(c),c(l,...u))),l},mixin(c){return o.mixins.includes(c)||o.mixins.push(c),l},component(c,u){return u?(o.components[c]=u,l):o.components[c]},directive(c,u){return u?(o.directives[c]=u,l):o.directives[c]},mount(c,u,d){if(!a){const f=re(r,i);return f.appContext=o,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(f,c):t(f,c,d),a=!0,l._container=c,c.__vue_app__=l,Ii(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return o.provides[c]=u,l},runWithContext(c){const u=zn;zn=l;try{return c()}finally{zn=u}}};return l}}let zn=null;function jr(t,e){if(ke){let n=ke.provides;const r=ke.parent&&ke.parent.provides;r===n&&(n=ke.provides=Object.create(r)),n[t]=e}}function Qe(t,e,n=!1){const r=ke||Se;if(r||zn){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zn._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&G(e)?e.call(r&&r.proxy):e}}function sh(t,e,n,r=!1){const i={},o={};Kr(o,Si,1),t.propsDefaults=Object.create(null),xc(t,e,i,o);for(const s in t.propsOptions[0])s in i||(i[s]=void 0);n?t.props=r?i:ac(i):t.type.props?t.props=i:t.props=o,t.attrs=o}function ah(t,e,n,r){const{props:i,attrs:o,vnode:{patchFlag:s}}=t,a=ie(i),[l]=t.propsOptions;let c=!1;if((r||s>0)&&!(s&16)){if(s&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(gi(t.emitsOptions,f))continue;const g=e[f];if(l)if(ne(o,f))g!==o[f]&&(o[f]=g,c=!0);else{const b=lt(f);i[b]=Eo(l,a,b,g,t,!1)}else g!==o[f]&&(o[f]=g,c=!0)}}}else{xc(t,e,i,o)&&(c=!0);let u;for(const d in a)(!e||!ne(e,d)&&((u=xn(d))===d||!ne(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Eo(l,a,d,void 0,t,!0)):delete i[d]);if(o!==a)for(const d in o)(!e||!ne(e,d))&&(delete o[d],c=!0)}c&&_t(t,"set","$attrs")}function xc(t,e,n,r){const[i,o]=t.propsOptions;let s=!1,a;if(e)for(let l in e){if(Bn(l))continue;const c=e[l];let u;i&&ne(i,u=lt(l))?!o||!o.includes(u)?n[u]=c:(a||(a={}))[u]=c:gi(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,s=!0)}if(o){const l=ie(n),c=a||ge;for(let u=0;u<o.length;u++){const d=o[u];n[d]=Eo(i,l,d,c[d],t,!ne(c,d))}}return s}function Eo(t,e,n,r,i,o){const s=t[n];if(s!=null){const a=ne(s,"default");if(a&&r===void 0){const l=s.default;if(s.type!==Function&&!s.skipFactory&&G(l)){const{propsDefaults:c}=i;if(n in c)r=c[n];else{const u=mr(i);r=c[n]=l.call(null,e),u()}}else r=l}s[0]&&(o&&!a?r=!1:s[1]&&(r===""||r===xn(n))&&(r=!0))}return r}function Rc(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,s={},a=[];let l=!1;if(!G(t)){const u=d=>{l=!0;const[f,g]=Rc(d,e,!0);qe(s,f),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!o&&!l)return me(t)&&r.set(t,bn),bn;if(B(o))for(let u=0;u<o.length;u++){const d=lt(o[u]);ca(d)&&(s[d]=ge)}else if(o)for(const u in o){const d=lt(u);if(ca(d)){const f=o[u],g=s[d]=B(f)||G(f)?{type:f}:qe({},f);if(g){const b=fa(Boolean,g.type),q=fa(String,g.type);g[0]=b>-1,g[1]=q<0||b<q,(b>-1||ne(g,"default"))&&a.push(d)}}}const c=[s,a];return me(t)&&r.set(t,c),c}function ca(t){return t[0]!=="$"&&!Bn(t)}function ua(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function da(t,e){return ua(t)===ua(e)}function fa(t,e){return B(e)?e.findIndex(n=>da(n,t)):G(e)&&da(e,t)?0:-1}const Nc=t=>t[0]==="_"||t==="$stable",us=t=>B(t)?t.map(it):[it(t)],lh=(t,e,n)=>{if(e._n)return e;const r=Le((...i)=>us(e(...i)),n);return r._c=!1,r},Lc=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Nc(i))continue;const o=t[i];if(G(o))e[i]=lh(i,o,r);else if(o!=null){const s=us(o);e[i]=()=>s}}},$c=(t,e)=>{const n=us(e);t.slots.default=()=>n},ch=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ie(e),Kr(e,"_",n)):Lc(e,t.slots={})}else t.slots={},e&&$c(t,e);Kr(t.slots,Si,1)},uh=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,s=ge;if(r.shapeFlag&32){const a=e._;a?n&&a===1?o=!1:(qe(i,e),!n&&a===1&&delete i._):(o=!e.$stable,Lc(e,i)),s=e}else e&&($c(t,e),s={default:1});if(o)for(const a in i)!Nc(a)&&s[a]==null&&delete i[a]};function Io(t,e,n,r,i=!1){if(B(t)){t.forEach((f,g)=>Io(f,e&&(B(e)?e[g]:e),n,r,i));return}if(Hn(r)&&!i)return;const o=r.shapeFlag&4?Ii(r.component)||r.component.proxy:r.el,s=i?null:o,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ge?a.refs={}:a.refs,d=a.setupState;if(c!=null&&c!==l&&(we(c)?(u[c]=null,ne(d,c)&&(d[c]=null)):_e(c)&&(c.value=null)),G(l))jt(l,a,12,[s,u]);else{const f=we(l),g=_e(l);if(f||g){const b=()=>{if(t.f){const q=f?ne(d,l)?d[l]:u[l]:l.value;i?B(q)&&Go(q,o):B(q)?q.includes(o)||q.push(o):f?(u[l]=[o],ne(d,l)&&(d[l]=u[l])):(l.value=[o],t.k&&(u[t.k]=l.value))}else f?(u[l]=s,ne(d,l)&&(d[l]=s)):g&&(l.value=s,t.k&&(u[t.k]=s))};s?(b.id=-1,Ne(b,n)):b()}}}const Ne=Nf;function dh(t){return fh(t)}function fh(t,e){const n=zl();n.__VUE__=!0;const{insert:r,remove:i,patchProp:o,createElement:s,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:g=We,insertStaticContent:b}=t,q=(h,p,v,w=null,y=null,I=null,A=void 0,E=null,T=!!p.dynamicChildren)=>{if(h===p)return;h&&!Zt(h,p)&&(w=_(h),Re(h,y,I,!0),h=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:S,ref:P,shapeFlag:V}=p;switch(S){case wi:R(h,p,v,w);break;case Ge:k(h,p,v,w);break;case Fr:h==null&&x(p,v,w,A);break;case Te:N(h,p,v,w,y,I,A,E,T);break;default:V&1?K(h,p,v,w,y,I,A,E,T):V&6?oe(h,p,v,w,y,I,A,E,T):(V&64||V&128)&&S.process(h,p,v,w,y,I,A,E,T,$)}P!=null&&y&&Io(P,h&&h.ref,I,p||h,!p)},R=(h,p,v,w)=>{if(h==null)r(p.el=a(p.children),v,w);else{const y=p.el=h.el;p.children!==h.children&&c(y,p.children)}},k=(h,p,v,w)=>{h==null?r(p.el=l(p.children||""),v,w):p.el=h.el},x=(h,p,v,w)=>{[h.el,h.anchor]=b(h.children,p,v,w,h.el,h.anchor)},j=({el:h,anchor:p},v,w)=>{let y;for(;h&&h!==p;)y=f(h),r(h,v,w),h=y;r(p,v,w)},H=({el:h,anchor:p})=>{let v;for(;h&&h!==p;)v=f(h),i(h),h=v;i(p)},K=(h,p,v,w,y,I,A,E,T)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),h==null?L(p,v,w,y,I,A,E,T):Y(h,p,y,I,A,E,T)},L=(h,p,v,w,y,I,A,E)=>{let T,S;const{props:P,shapeFlag:V,transition:F,dirs:z}=h;if(T=h.el=s(h.type,I,P&&P.is,P),V&8?u(T,h.children):V&16&&M(h.children,T,null,w,y,Bi(h,I),A,E),z&&zt(h,null,w,"created"),Q(T,h,h.scopeId,A,w),P){for(const ue in P)ue!=="value"&&!Bn(ue)&&o(T,ue,null,P[ue],I,h.children,w,y,Ce);"value"in P&&o(T,"value",null,P.value,I),(S=P.onVnodeBeforeMount)&&rt(S,w,h)}z&&zt(h,null,w,"beforeMount");const Z=hh(y,F);Z&&F.beforeEnter(T),r(T,p,v),((S=P&&P.onVnodeMounted)||Z||z)&&Ne(()=>{S&&rt(S,w,h),Z&&F.enter(T),z&&zt(h,null,w,"mounted")},y)},Q=(h,p,v,w,y)=>{if(v&&g(h,v),w)for(let I=0;I<w.length;I++)g(h,w[I]);if(y){let I=y.subTree;if(p===I){const A=y.vnode;Q(h,A,A.scopeId,A.slotScopeIds,y.parent)}}},M=(h,p,v,w,y,I,A,E,T=0)=>{for(let S=T;S<h.length;S++){const P=h[S]=E?Pt(h[S]):it(h[S]);q(null,P,p,v,w,y,I,A,E)}},Y=(h,p,v,w,y,I,A)=>{const E=p.el=h.el;let{patchFlag:T,dynamicChildren:S,dirs:P}=p;T|=h.patchFlag&16;const V=h.props||ge,F=p.props||ge;let z;if(v&&Gt(v,!1),(z=F.onVnodeBeforeUpdate)&&rt(z,v,p,h),P&&zt(p,h,v,"beforeUpdate"),v&&Gt(v,!0),S?X(h.dynamicChildren,S,E,v,w,Bi(p,y),I):A||se(h,p,E,null,v,w,Bi(p,y),I,!1),T>0){if(T&16)he(E,p,V,F,v,w,y);else if(T&2&&V.class!==F.class&&o(E,"class",null,F.class,y),T&4&&o(E,"style",V.style,F.style,y),T&8){const Z=p.dynamicProps;for(let ue=0;ue<Z.length;ue++){const be=Z[ue],Ie=V[be],Je=F[be];(Je!==Ie||be==="value")&&o(E,be,Ie,Je,y,h.children,v,w,Ce)}}T&1&&h.children!==p.children&&u(E,p.children)}else!A&&S==null&&he(E,p,V,F,v,w,y);((z=F.onVnodeUpdated)||P)&&Ne(()=>{z&&rt(z,v,p,h),P&&zt(p,h,v,"updated")},w)},X=(h,p,v,w,y,I,A)=>{for(let E=0;E<p.length;E++){const T=h[E],S=p[E],P=T.el&&(T.type===Te||!Zt(T,S)||T.shapeFlag&70)?d(T.el):v;q(T,S,P,null,w,y,I,A,!0)}},he=(h,p,v,w,y,I,A)=>{if(v!==w){if(v!==ge)for(const E in v)!Bn(E)&&!(E in w)&&o(h,E,v[E],null,A,p.children,y,I,Ce);for(const E in w){if(Bn(E))continue;const T=w[E],S=v[E];T!==S&&E!=="value"&&o(h,E,S,T,A,p.children,y,I,Ce)}"value"in w&&o(h,"value",v.value,w.value,A)}},N=(h,p,v,w,y,I,A,E,T)=>{const S=p.el=h?h.el:a(""),P=p.anchor=h?h.anchor:a("");let{patchFlag:V,dynamicChildren:F,slotScopeIds:z}=p;z&&(E=E?E.concat(z):z),h==null?(r(S,v,w),r(P,v,w),M(p.children||[],v,P,y,I,A,E,T)):V>0&&V&64&&F&&h.dynamicChildren?(X(h.dynamicChildren,F,v,y,I,A,E),(p.key!=null||y&&p===y.subTree)&&ds(h,p,!0)):se(h,p,v,P,y,I,A,E,T)},oe=(h,p,v,w,y,I,A,E,T)=>{p.slotScopeIds=E,h==null?p.shapeFlag&512?y.ctx.activate(p,v,w,A,T):Ee(p,v,w,y,I,A,T):Ke(h,p,T)},Ee=(h,p,v,w,y,I,A)=>{const E=h.component=Sh(h,w,y);if(yi(h)&&(E.ctx.renderer=$),qh(E),E.asyncDep){if(y&&y.registerDep(E,ye),!h.el){const T=E.subTree=re(Ge);k(null,T,p,v)}}else ye(E,h,p,v,y,I,A)},Ke=(h,p,v)=>{const w=p.component=h.component;if(Of(h,p,v))if(w.asyncDep&&!w.asyncResolved){ce(w,p,v);return}else w.next=p,Ef(w.update),w.effect.dirty=!0,w.update();else p.el=h.el,w.vnode=p},ye=(h,p,v,w,y,I,A)=>{const E=()=>{if(h.isMounted){let{next:P,bu:V,u:F,parent:z,vnode:Z}=h;{const hn=Dc(h);if(hn){P&&(P.el=Z.el,ce(h,P,A)),hn.asyncDep.then(()=>{h.isUnmounted||E()});return}}let ue=P,be;Gt(h,!1),P?(P.el=Z.el,ce(h,P,A)):P=Z,V&&$r(V),(be=P.props&&P.props.onVnodeBeforeUpdate)&&rt(be,z,P,Z),Gt(h,!0);const Ie=Fi(h),Je=h.subTree;h.subTree=Ie,q(Je,Ie,d(Je.el),_(Je),h,y,I),P.el=Ie.el,ue===null&&Pf(h,Ie.el),F&&Ne(F,y),(be=P.props&&P.props.onVnodeUpdated)&&Ne(()=>rt(be,z,P,Z),y)}else{let P;const{el:V,props:F}=p,{bm:z,m:Z,parent:ue}=h,be=Hn(p);if(Gt(h,!1),z&&$r(z),!be&&(P=F&&F.onVnodeBeforeMount)&&rt(P,ue,p),Gt(h,!0),V&&ve){const Ie=()=>{h.subTree=Fi(h),ve(V,h.subTree,h,y,null)};be?p.type.__asyncLoader().then(()=>!h.isUnmounted&&Ie()):Ie()}else{const Ie=h.subTree=Fi(h);q(null,Ie,v,w,h,y,I),p.el=Ie.el}if(Z&&Ne(Z,y),!be&&(P=F&&F.onVnodeMounted)){const Ie=p;Ne(()=>rt(P,ue,Ie),y)}(p.shapeFlag&256||ue&&Hn(ue.vnode)&&ue.vnode.shapeFlag&256)&&h.a&&Ne(h.a,y),h.isMounted=!0,p=v=w=null}},T=h.effect=new Jo(E,We,()=>is(S),h.scope),S=h.update=()=>{T.dirty&&T.run()};S.id=h.uid,Gt(h,!0),S()},ce=(h,p,v)=>{p.component=h;const w=h.vnode.props;h.vnode=p,h.next=null,ah(h,p.props,w,v),uh(h,p.children,v),ln(),ta(h),cn()},se=(h,p,v,w,y,I,A,E,T=!1)=>{const S=h&&h.children,P=h?h.shapeFlag:0,V=p.children,{patchFlag:F,shapeFlag:z}=p;if(F>0){if(F&128){qt(S,V,v,w,y,I,A,E,T);return}else if(F&256){ft(S,V,v,w,y,I,A,E,T);return}}z&8?(P&16&&Ce(S,y,I),V!==S&&u(v,V)):P&16?z&16?qt(S,V,v,w,y,I,A,E,T):Ce(S,y,I,!0):(P&8&&u(v,""),z&16&&M(V,v,w,y,I,A,E,T))},ft=(h,p,v,w,y,I,A,E,T)=>{h=h||bn,p=p||bn;const S=h.length,P=p.length,V=Math.min(S,P);let F;for(F=0;F<V;F++){const z=p[F]=T?Pt(p[F]):it(p[F]);q(h[F],z,v,null,y,I,A,E,T)}S>P?Ce(h,y,I,!0,!1,V):M(p,v,w,y,I,A,E,T,V)},qt=(h,p,v,w,y,I,A,E,T)=>{let S=0;const P=p.length;let V=h.length-1,F=P-1;for(;S<=V&&S<=F;){const z=h[S],Z=p[S]=T?Pt(p[S]):it(p[S]);if(Zt(z,Z))q(z,Z,v,null,y,I,A,E,T);else break;S++}for(;S<=V&&S<=F;){const z=h[V],Z=p[F]=T?Pt(p[F]):it(p[F]);if(Zt(z,Z))q(z,Z,v,null,y,I,A,E,T);else break;V--,F--}if(S>V){if(S<=F){const z=F+1,Z=z<P?p[z].el:w;for(;S<=F;)q(null,p[S]=T?Pt(p[S]):it(p[S]),v,Z,y,I,A,E,T),S++}}else if(S>F)for(;S<=V;)Re(h[S],y,I,!0),S++;else{const z=S,Z=S,ue=new Map;for(S=Z;S<=F;S++){const Me=p[S]=T?Pt(p[S]):it(p[S]);Me.key!=null&&ue.set(Me.key,S)}let be,Ie=0;const Je=F-Z+1;let hn=!1,Ms=0;const Dn=new Array(Je);for(S=0;S<Je;S++)Dn[S]=0;for(S=z;S<=V;S++){const Me=h[S];if(Ie>=Je){Re(Me,y,I,!0);continue}let nt;if(Me.key!=null)nt=ue.get(Me.key);else for(be=Z;be<=F;be++)if(Dn[be-Z]===0&&Zt(Me,p[be])){nt=be;break}nt===void 0?Re(Me,y,I,!0):(Dn[nt-Z]=S+1,nt>=Ms?Ms=nt:hn=!0,q(Me,p[nt],v,null,y,I,A,E,T),Ie++)}const js=hn?ph(Dn):bn;for(be=js.length-1,S=Je-1;S>=0;S--){const Me=Z+S,nt=p[Me],Fs=Me+1<P?p[Me+1].el:w;Dn[S]===0?q(null,nt,v,Fs,y,I,A,E,T):hn&&(be<0||S!==js[be]?tt(nt,v,Fs,2):be--)}}},tt=(h,p,v,w,y=null)=>{const{el:I,type:A,transition:E,children:T,shapeFlag:S}=h;if(S&6){tt(h.component.subTree,p,v,w);return}if(S&128){h.suspense.move(p,v,w);return}if(S&64){A.move(h,p,v,$);return}if(A===Te){r(I,p,v);for(let V=0;V<T.length;V++)tt(T[V],p,v,w);r(h.anchor,p,v);return}if(A===Fr){j(h,p,v);return}if(w!==2&&S&1&&E)if(w===0)E.beforeEnter(I),r(I,p,v),Ne(()=>E.enter(I),y);else{const{leave:V,delayLeave:F,afterLeave:z}=E,Z=()=>r(I,p,v),ue=()=>{V(I,()=>{Z(),z&&z()})};F?F(I,Z,ue):ue()}else r(I,p,v)},Re=(h,p,v,w=!1,y=!1)=>{const{type:I,props:A,ref:E,children:T,dynamicChildren:S,shapeFlag:P,patchFlag:V,dirs:F}=h;if(E!=null&&Io(E,null,v,h,!0),P&256){p.ctx.deactivate(h);return}const z=P&1&&F,Z=!Hn(h);let ue;if(Z&&(ue=A&&A.onVnodeBeforeUnmount)&&rt(ue,p,h),P&6)Ir(h.component,v,w);else{if(P&128){h.suspense.unmount(v,w);return}z&&zt(h,null,p,"beforeUnmount"),P&64?h.type.remove(h,p,v,y,$,w):S&&(I!==Te||V>0&&V&64)?Ce(S,p,v,!1,!0):(I===Te&&V&384||!y&&P&16)&&Ce(T,p,v),w&&dn(h)}(Z&&(ue=A&&A.onVnodeUnmounted)||z)&&Ne(()=>{ue&&rt(ue,p,h),z&&zt(h,null,p,"unmounted")},v)},dn=h=>{const{type:p,el:v,anchor:w,transition:y}=h;if(p===Te){fn(v,w);return}if(p===Fr){H(h);return}const I=()=>{i(v),y&&!y.persisted&&y.afterLeave&&y.afterLeave()};if(h.shapeFlag&1&&y&&!y.persisted){const{leave:A,delayLeave:E}=y,T=()=>A(v,I);E?E(h.el,I,T):T()}else I()},fn=(h,p)=>{let v;for(;h!==p;)v=f(h),i(h),h=v;i(p)},Ir=(h,p,v)=>{const{bum:w,scope:y,update:I,subTree:A,um:E}=h;w&&$r(w),y.stop(),I&&(I.active=!1,Re(A,h,p,v)),E&&Ne(E,p),Ne(()=>{h.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&h.asyncDep&&!h.asyncResolved&&h.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ce=(h,p,v,w=!1,y=!1,I=0)=>{for(let A=I;A<h.length;A++)Re(h[A],p,v,w,y)},_=h=>h.shapeFlag&6?_(h.component.subTree):h.shapeFlag&128?h.suspense.next():f(h.anchor||h.el);let O=!1;const C=(h,p,v)=>{h==null?p._vnode&&Re(p._vnode,null,null,!0):q(p._vnode||null,h,p,null,null,null,v),O||(O=!0,ta(),mc(),O=!1),p._vnode=h},$={p:q,um:Re,m:tt,r:dn,mt:Ee,mc:M,pc:se,pbc:X,n:_,o:t};let ae,ve;return e&&([ae,ve]=e($)),{render:C,hydrate:ae,createApp:oh(C,ae)}}function Bi({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function hh(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ds(t,e,n=!1){const r=t.children,i=e.children;if(B(r)&&B(i))for(let o=0;o<r.length;o++){const s=r[o];let a=i[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[o]=Pt(i[o]),a.el=s.el),n||ds(s,a)),a.type===wi&&(a.el=s.el)}}function ph(t){const e=t.slice(),n=[0];let r,i,o,s,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}for(o=0,s=n.length-1;o<s;)a=o+s>>1,t[n[a]]<c?o=a+1:s=a;c<t[n[o]]&&(o>0&&(e[r]=n[o-1]),n[o]=r)}}for(o=n.length,s=n[o-1];o-- >0;)n[o]=s,s=e[s];return n}function Dc(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Dc(e)}const gh=t=>t.__isTeleport,Gn=t=>t&&(t.disabled||t.disabled===""),ha=t=>typeof SVGElement<"u"&&t instanceof SVGElement,pa=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,To=(t,e)=>{const n=t&&t.to;return we(n)?e?e(n):null:n},mh={name:"Teleport",__isTeleport:!0,process(t,e,n,r,i,o,s,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:g,querySelector:b,createText:q,createComment:R}}=c,k=Gn(e.props);let{shapeFlag:x,children:j,dynamicChildren:H}=e;if(t==null){const K=e.el=q(""),L=e.anchor=q("");g(K,n,r),g(L,n,r);const Q=e.target=To(e.props,b),M=e.targetAnchor=q("");Q&&(g(M,Q),s==="svg"||ha(Q)?s="svg":(s==="mathml"||pa(Q))&&(s="mathml"));const Y=(X,he)=>{x&16&&u(j,X,he,i,o,s,a,l)};k?Y(n,L):Q&&Y(Q,M)}else{e.el=t.el;const K=e.anchor=t.anchor,L=e.target=t.target,Q=e.targetAnchor=t.targetAnchor,M=Gn(t.props),Y=M?n:L,X=M?K:Q;if(s==="svg"||ha(L)?s="svg":(s==="mathml"||pa(L))&&(s="mathml"),H?(f(t.dynamicChildren,H,Y,i,o,s,a),ds(t,e,!0)):l||d(t,e,Y,X,i,o,s,a,!1),k)M?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Rr(e,n,K,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const he=e.target=To(e.props,b);he&&Rr(e,he,null,c,0)}else M&&Rr(e,L,Q,c,1)}Mc(e)},remove(t,e,n,r,{um:i,o:{remove:o}},s){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:f}=t;if(d&&o(u),s&&o(c),a&16){const g=s||!Gn(f);for(let b=0;b<l.length;b++){const q=l[b];i(q,e,n,g,!!q.dynamicChildren)}}},move:Rr,hydrate:vh};function Rr(t,e,n,{o:{insert:r},m:i},o=2){o===0&&r(t.targetAnchor,e,n);const{el:s,anchor:a,shapeFlag:l,children:c,props:u}=t,d=o===2;if(d&&r(s,e,n),(!d||Gn(u))&&l&16)for(let f=0;f<c.length;f++)i(c[f],e,n,2);d&&r(a,e,n)}function vh(t,e,n,r,i,o,{o:{nextSibling:s,parentNode:a,querySelector:l}},c){const u=e.target=To(e.props,l);if(u){const d=u._lpa||u.firstChild;if(e.shapeFlag&16)if(Gn(e.props))e.anchor=c(s(t),e,a(t),n,r,i,o),e.targetAnchor=d;else{e.anchor=s(t);let f=d;for(;f;)if(f=s(f),f&&f.nodeType===8&&f.data==="teleport anchor"){e.targetAnchor=f,u._lpa=e.targetAnchor&&s(e.targetAnchor);break}c(d,e,u,n,r,i,o)}Mc(e)}return e.anchor&&s(e.anchor)}const W0=mh;function Mc(t){const e=t.ctx;if(e&&e.ut){let n=t.children[0].el;for(;n&&n!==t.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",e.uid),n=n.nextSibling;e.ut()}}const Te=Symbol.for("v-fgt"),wi=Symbol.for("v-txt"),Ge=Symbol.for("v-cmt"),Fr=Symbol.for("v-stc"),Kn=[];let Ye=null;function U(t=!1){Kn.push(Ye=t?null:[])}function bh(){Kn.pop(),Ye=Kn[Kn.length-1]||null}let nr=1;function ga(t){nr+=t}function jc(t){return t.dynamicChildren=nr>0?Ye||bn:null,bh(),nr>0&&Ye&&Ye.push(t),t}function J(t,e,n,r,i,o){return jc(m(t,e,n,r,i,o,!0))}function Ue(t,e,n,r,i){return jc(re(t,e,n,r,i,!0))}function Xr(t){return t?t.__v_isVNode===!0:!1}function Zt(t,e){return t.type===e.type&&t.key===e.key}const Si="__vInternal",Fc=({key:t})=>t??null,Ur=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?we(t)||_e(t)||G(t)?{i:Se,r:t,k:e,f:!!n}:t:null);function m(t,e=null,n=null,r=0,i=null,o=t===Te?0:1,s=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fc(e),ref:e&&Ur(e),scopeId:mi,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Se};return a?(hs(l,n),o&128&&t.normalize(l)):n&&(l.shapeFlag|=we(n)?8:16),nr>0&&!s&&Ye&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&Ye.push(l),l}const re=yh;function yh(t,e=null,n=null,r=0,i=null,o=!1){if((!t||t===yc)&&(t=Ge),Xr(t)){const a=Bt(t,e,!0);return n&&hs(a,n),nr>0&&!o&&Ye&&(a.shapeFlag&6?Ye[Ye.indexOf(t)]=a:Ye.push(a)),a.patchFlag|=-2,a}if(Ch(t)&&(t=t.__vccOpts),e){e=Uc(e);let{class:a,style:l}=e;a&&!we(a)&&(e.class=Dt(a)),me(l)&&(lc(l)&&!B(l)&&(l=qe({},l)),e.style=fi(l))}const s=we(t)?1:Rf(t)?128:gh(t)?64:me(t)?4:G(t)?2:0;return m(t,e,n,r,i,s,o,!0)}function Uc(t){return t?lc(t)||Si in t?qe({},t):t:null}function Bt(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:s}=t,a=e?ee(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Fc(a),ref:e&&e.ref?n&&i?B(i)?i.concat(Ur(e)):[i,Ur(e)]:Ur(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:s,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Te?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Bt(t.ssContent),ssFallback:t.ssFallback&&Bt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function pt(t=" ",e=0){return re(wi,null,t,e)}function fs(t,e){const n=re(Fr,null,t);return n.staticCount=e,n}function st(t="",e=!1){return e?(U(),Ue(Ge,null,t)):re(Ge,null,t)}function it(t){return t==null||typeof t=="boolean"?re(Ge):B(t)?re(Te,null,t.slice()):typeof t=="object"?Pt(t):re(wi,null,String(t))}function Pt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Bt(t)}function hs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(B(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),hs(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Si in e)?e._ctx=Se:i===3&&Se&&(Se.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else G(e)?(e={default:e,_ctx:Se},n=32):(e=String(e),r&64?(n=16,e=[pt(e)]):n=8);t.children=e,t.shapeFlag|=n}function ee(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=Dt([e.class,r.class]));else if(i==="style")e.style=fi([e.style,r.style]);else if(li(i)){const o=e[i],s=r[i];s&&o!==s&&!(B(o)&&o.includes(s))&&(e[i]=o?[].concat(o,s):s)}else i!==""&&(e[i]=r[i])}return e}function rt(t,e,n,r=null){ze(t,e,7,[n,r])}const _h=Pc();let wh=0;function Sh(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||_h,o={uid:wh++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rc(r,i),emitsOptions:bc(r,i),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:r.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=e?e.root:o,o.emit=kf.bind(null,o),t.ce&&t.ce(o),o}let ke=null;const qi=()=>ke||Se;let Zr,ko;{const t=zl(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),o=>{i.length>1?i.forEach(s=>s(o)):i[0](o)}};Zr=e("__VUE_INSTANCE_SETTERS__",n=>ke=n),ko=e("__VUE_SSR_SETTERS__",n=>Ei=n)}const mr=t=>{const e=ke;return Zr(t),t.scope.on(),()=>{t.scope.off(),Zr(e)}},ma=()=>{ke&&ke.scope.off(),Zr(null)};function Vc(t){return t.vnode.shapeFlag&4}let Ei=!1;function qh(t,e=!1){e&&ko(e);const{props:n,children:r}=t.vnode,i=Vc(t);sh(t,n,i,e),ch(t,r);const o=i?Eh(t,e):void 0;return e&&ko(!1),o}function Eh(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=cc(new Proxy(t.ctx,Xf));const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?Th(t):null,o=mr(t);ln();const s=jt(r,t,0,[t.props,i]);if(cn(),o(),Bl(s)){if(s.then(ma,ma),e)return s.then(a=>{va(t,a,e)}).catch(a=>{pi(a,t,0)});t.asyncDep=s}else va(t,s,e)}else Bc(t,e)}function va(t,e,n){G(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:me(e)&&(t.setupState=hc(e)),Bc(t,n)}let ba;function Bc(t,e,n){const r=t.type;if(!t.render){if(!e&&ba&&!r.render){const i=r.template||cs(t).template;if(i){const{isCustomElement:o,compilerOptions:s}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=qe(qe({isCustomElement:o,delimiters:a},s),l);r.render=ba(i,c)}}t.render=r.render||We}{const i=mr(t);ln();try{Zf(t)}finally{cn(),i()}}}function Ih(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return $e(t,"get","$attrs"),e[n]}}))}function Th(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Ih(t)},slots:t.slots,emit:t.emit,expose:e}}function Ii(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(hc(cc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wn)return Wn[n](t)},has(e,n){return n in e||n in Wn}}))}function kh(t,e=!0){return G(t)?t.displayName||t.name:t.name||e&&t.__name}function Ch(t){return G(t)&&"__vccOpts"in t}const Fe=(t,e)=>bf(t,e,Ei);function ps(t,e,n){const r=arguments.length;return r===2?me(e)&&!B(e)?Xr(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Xr(n)&&(n=[n]),re(t,e,n))}const Ah="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Oh="http://www.w3.org/2000/svg",Ph="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,ya=xt&&xt.createElement("template"),xh={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?xt.createElementNS(Oh,t):e==="mathml"?xt.createElementNS(Ph,t):xt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>xt.createTextNode(t),createComment:t=>xt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,o){const s=n?n.previousSibling:e.lastChild;if(i&&(i===o||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===o||!(i=i.nextSibling)););else{ya.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=ya.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[s?s.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},It="transition",Mn="animation",rr=Symbol("_vtc"),Hc=(t,{slots:e})=>ps(Uf,Rh(t),e);Hc.displayName="Transition";const Wc={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Hc.props=qe({},wc,Wc);const Kt=(t,e=[])=>{B(t)?t.forEach(n=>n(...e)):t&&t(...e)},_a=t=>t?B(t)?t.some(e=>e.length>1):t.length>1:!1;function Rh(t){const e={};for(const N in t)N in Wc||(e[N]=t[N]);if(t.css===!1)return e;const{name:n="v",type:r,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:s=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:c=s,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,b=Nh(i),q=b&&b[0],R=b&&b[1],{onBeforeEnter:k,onEnter:x,onEnterCancelled:j,onLeave:H,onLeaveCancelled:K,onBeforeAppear:L=k,onAppear:Q=x,onAppearCancelled:M=j}=e,Y=(N,oe,Ee)=>{Jt(N,oe?u:a),Jt(N,oe?c:s),Ee&&Ee()},X=(N,oe)=>{N._isLeaving=!1,Jt(N,d),Jt(N,g),Jt(N,f),oe&&oe()},he=N=>(oe,Ee)=>{const Ke=N?Q:x,ye=()=>Y(oe,N,Ee);Kt(Ke,[oe,ye]),wa(()=>{Jt(oe,N?l:o),Tt(oe,N?u:a),_a(Ke)||Sa(oe,r,q,ye)})};return qe(e,{onBeforeEnter(N){Kt(k,[N]),Tt(N,o),Tt(N,s)},onBeforeAppear(N){Kt(L,[N]),Tt(N,l),Tt(N,c)},onEnter:he(!1),onAppear:he(!0),onLeave(N,oe){N._isLeaving=!0;const Ee=()=>X(N,oe);Tt(N,d),Dh(),Tt(N,f),wa(()=>{N._isLeaving&&(Jt(N,d),Tt(N,g),_a(H)||Sa(N,r,R,Ee))}),Kt(H,[N,Ee])},onEnterCancelled(N){Y(N,!1),Kt(j,[N])},onAppearCancelled(N){Y(N,!0),Kt(M,[N])},onLeaveCancelled(N){X(N),Kt(K,[N])}})}function Nh(t){if(t==null)return null;if(me(t))return[Hi(t.enter),Hi(t.leave)];{const e=Hi(t);return[e,e]}}function Hi(t){return Ud(t)}function Tt(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[rr]||(t[rr]=new Set)).add(e)}function Jt(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[rr];n&&(n.delete(e),n.size||(t[rr]=void 0))}function wa(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Lh=0;function Sa(t,e,n,r){const i=t._endId=++Lh,o=()=>{i===t._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:l}=$h(t,e);if(!s)return r();const c=s+"end";let u=0;const d=()=>{t.removeEventListener(c,f),o()},f=g=>{g.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function $h(t,e){const n=window.getComputedStyle(t),r=b=>(n[b]||"").split(", "),i=r(`${It}Delay`),o=r(`${It}Duration`),s=qa(i,o),a=r(`${Mn}Delay`),l=r(`${Mn}Duration`),c=qa(a,l);let u=null,d=0,f=0;e===It?s>0&&(u=It,d=s,f=o.length):e===Mn?c>0&&(u=Mn,d=c,f=l.length):(d=Math.max(s,c),u=d>0?s>c?It:Mn:null,f=u?u===It?o.length:l.length:0);const g=u===It&&/\b(transform|all)(,|$)/.test(r(`${It}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:g}}function qa(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Ea(n)+Ea(t[r])))}function Ea(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Dh(){return document.body.offsetHeight}function Mh(t,e,n){const r=t[rr];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ia=Symbol("_vod"),jh=Symbol("_vsh"),Fh=Symbol(""),Uh=/(^|;)\s*display\s*:/;function Vh(t,e,n){const r=t.style,i=we(n);let o=!1;if(n&&!i){if(e)if(we(e))for(const s of e.split(";")){const a=s.slice(0,s.indexOf(":")).trim();n[a]==null&&Vr(r,a,"")}else for(const s in e)n[s]==null&&Vr(r,s,"");for(const s in n)s==="display"&&(o=!0),Vr(r,s,n[s])}else if(i){if(e!==n){const s=r[Fh];s&&(n+=";"+s),r.cssText=n,o=Uh.test(n)}}else e&&t.removeAttribute("style");Ia in t&&(t[Ia]=o?r.display:"",t[jh]&&(r.display="none"))}const Ta=/\s*!important$/;function Vr(t,e,n){if(B(n))n.forEach(r=>Vr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Bh(t,e);Ta.test(n)?t.setProperty(xn(r),n.replace(Ta,""),"important"):t[r]=n}}const ka=["Webkit","Moz","ms"],Wi={};function Bh(t,e){const n=Wi[e];if(n)return n;let r=lt(e);if(r!=="filter"&&r in t)return Wi[e]=r;r=di(r);for(let i=0;i<ka.length;i++){const o=ka[i]+r;if(o in t)return Wi[e]=o}return e}const Ca="http://www.w3.org/1999/xlink";function Hh(t,e,n,r,i){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ca,e.slice(6,e.length)):t.setAttributeNS(Ca,e,n);else{const o=Kd(e);n==null||o&&!Gl(n)?t.removeAttribute(e):t.setAttribute(e,o?"":n)}}function Wh(t,e,n,r,i,o,s){if(e==="innerHTML"||e==="textContent"){r&&s(r,i,o),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Gl(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function mn(t,e,n,r){t.addEventListener(e,n,r)}function zh(t,e,n,r){t.removeEventListener(e,n,r)}const Aa=Symbol("_vei");function Gh(t,e,n,r,i=null){const o=t[Aa]||(t[Aa]={}),s=o[e];if(r&&s)s.value=r;else{const[a,l]=Kh(e);if(r){const c=o[e]=Qh(r,i);mn(t,a,c,l)}else s&&(zh(t,a,s,l),o[e]=void 0)}}const Oa=/(?:Once|Passive|Capture)$/;function Kh(t){let e;if(Oa.test(t)){e={};let r;for(;r=t.match(Oa);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):xn(t.slice(2)),e]}let zi=0;const Jh=Promise.resolve(),Yh=()=>zi||(Jh.then(()=>zi=0),zi=Date.now());function Qh(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(Xh(r,n.value),e,5,[r])};return n.value=t,n.attached=Yh(),n}function Xh(t,e){if(B(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Zh=(t,e,n,r,i,o,s,a,l)=>{const c=i==="svg";e==="class"?Mh(t,r,c):e==="style"?Vh(t,n,r):li(e)?zo(e)||Gh(t,e,n,r,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ep(t,e,r,c))?Wh(t,e,r,o,s,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hh(t,e,r,c))};function ep(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Pa(e)&&G(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Pa(e)&&we(n)?!1:e in t}const xa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return B(e)?n=>$r(e,n):e};function tp(t){t.target.composing=!0}function Ra(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Gi=Symbol("_assign"),z0={created(t,{modifiers:{lazy:e,trim:n,number:r}},i){t[Gi]=xa(i);const o=r||i.props&&i.props.type==="number";mn(t,e?"change":"input",s=>{if(s.target.composing)return;let a=t.value;n&&(a=a.trim()),o&&(a=fo(a)),t[Gi](a)}),n&&mn(t,"change",()=>{t.value=t.value.trim()}),e||(mn(t,"compositionstart",tp),mn(t,"compositionend",Ra),mn(t,"change",Ra))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:i}},o){if(t[Gi]=xa(o),t.composing)return;const s=i||t.type==="number"?fo(t.value):t.value,a=e??"";s!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},np=["ctrl","shift","alt","meta"],rp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>np.some(n=>t[`${n}Key`]&&!e.includes(n))},G0=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...o)=>{for(let s=0;s<e.length;s++){const a=rp[e[s]];if(a&&a(i,e))return}return t(i,...o)})},ip=qe({patchProp:Zh},xh);let Na;function op(){return Na||(Na=dh(ip))}const sp=(...t)=>{const e=op().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=lp(r);if(!i)return;const o=e._component;!G(o)&&!o.render&&!o.template&&(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,ap(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},e};function ap(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lp(t){return we(t)?document.querySelector(t):t}function ir(t){"@babel/helpers - typeof";return ir=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ir(t)}function La(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ki(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?La(Object(n),!0).forEach(function(r){cp(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):La(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function cp(t,e,n){return e=up(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function up(t){var e=dp(t,"string");return ir(e)=="symbol"?e:String(e)}function dp(t,e){if(ir(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ir(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var $a={ripple:!1,inputStyle:null,locale:{startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",completed:"Completed",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",today:"Today",weekHeader:"Wk",firstDayOfWeek:0,showMonthAfterYear:!1,dateFormat:"mm/dd/yy",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyFilterMessage:"No results found",searchMessage:"{0} results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyMessage:"No available options",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"Page {page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left"}},filterMatchModeOptions:{text:[Ae.STARTS_WITH,Ae.CONTAINS,Ae.NOT_CONTAINS,Ae.ENDS_WITH,Ae.EQUALS,Ae.NOT_EQUALS],numeric:[Ae.EQUALS,Ae.NOT_EQUALS,Ae.LESS_THAN,Ae.LESS_THAN_OR_EQUAL_TO,Ae.GREATER_THAN,Ae.GREATER_THAN_OR_EQUAL_TO],date:[Ae.DATE_IS,Ae.DATE_IS_NOT,Ae.DATE_BEFORE,Ae.DATE_AFTER]},zIndex:{modal:1100,overlay:1e3,menu:1e3,tooltip:1100},pt:void 0,ptOptions:{mergeSections:!0,mergeProps:!1},unstyled:!1,csp:{nonce:void 0}},fp=Symbol();function hp(t,e,n,r){if(t!==e){var i=document.getElementById(n),o=i.cloneNode(!0),s=i.getAttribute("href").replace(t,e);o.setAttribute("id",n+"-clone"),o.setAttribute("href",s),o.addEventListener("load",function(){i.remove(),o.setAttribute("id",n),r&&r()}),i.parentNode&&i.parentNode.insertBefore(o,i.nextSibling)}}var pp={install:function(e,n){var r=n?Ki(Ki({},$a),n):Ki({},$a),i={config:Rn(r),changeTheme:hp};e.config.globalProperties.$primevue=i,e.provide(fp,i)}};function gp(){return zc().__VUE_DEVTOOLS_GLOBAL_HOOK__}function zc(){return typeof navigator<"u"&&typeof window<"u"?window:typeof globalThis<"u"?globalThis:{}}const mp=typeof Proxy=="function",vp="devtools-plugin:setup",bp="plugin:settings:set";let pn,Co;function yp(){var t;return pn!==void 0||(typeof window<"u"&&window.performance?(pn=!0,Co=window.performance):typeof globalThis<"u"&&(!((t=globalThis.perf_hooks)===null||t===void 0)&&t.performance)?(pn=!0,Co=globalThis.perf_hooks.performance):pn=!1),pn}function _p(){return yp()?Co.now():Date.now()}class wp{constructor(e,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=n;const r={};if(e.settings)for(const s in e.settings){const a=e.settings[s];r[s]=a.defaultValue}const i=`__vue-devtools-plugin-settings__${e.id}`;let o=Object.assign({},r);try{const s=localStorage.getItem(i),a=JSON.parse(s);Object.assign(o,a)}catch{}this.fallbacks={getSettings(){return o},setSettings(s){try{localStorage.setItem(i,JSON.stringify(s))}catch{}o=s},now(){return _p()}},n&&n.on(bp,(s,a)=>{s===this.plugin.id&&this.fallbacks.setSettings(a)}),this.proxiedOn=new Proxy({},{get:(s,a)=>this.target?this.target.on[a]:(...l)=>{this.onQueue.push({method:a,args:l})}}),this.proxiedTarget=new Proxy({},{get:(s,a)=>this.target?this.target[a]:a==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(a)?(...l)=>(this.targetQueue.push({method:a,args:l,resolve:()=>{}}),this.fallbacks[a](...l)):(...l)=>new Promise(c=>{this.targetQueue.push({method:a,args:l,resolve:c})})})}async setRealTarget(e){this.target=e;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function Sp(t,e){const n=t,r=zc(),i=gp(),o=mp&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!o))i.emit(vp,t,e);else{const s=o?new wp(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:e,proxy:s}),s&&e(s.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Gc="store";function vr(t){return t===void 0&&(t=null),Qe(t!==null?t:Gc)}function Nn(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function qp(t){return t!==null&&typeof t=="object"}function Ep(t){return t&&typeof t.then=="function"}function Ip(t,e){return function(){return t(e)}}function Kc(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var r=e.indexOf(t);r>-1&&e.splice(r,1)}}function Jc(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;Ti(t,n,[],t._modules.root,!0),gs(t,n,e)}function gs(t,e,n){var r=t._state;t.getters={},t._makeLocalGettersCache=Object.create(null);var i=t._wrappedGetters,o={};Nn(i,function(s,a){o[a]=Ip(s,t),Object.defineProperty(t.getters,a,{get:function(){return o[a]()},enumerable:!0})}),t._state=Rn({data:e}),t.strict&&Op(t),r&&n&&t._withCommit(function(){r.data=null})}function Ti(t,e,n,r,i){var o=!n.length,s=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[s],t._modulesNamespaceMap[s]=r),!o&&!i){var a=ms(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){a[l]=r.state})}var c=r.context=Tp(t,s,n);r.forEachMutation(function(u,d){var f=s+d;kp(t,f,u,c)}),r.forEachAction(function(u,d){var f=u.root?d:s+d,g=u.handler||u;Cp(t,f,g,c)}),r.forEachGetter(function(u,d){var f=s+d;Ap(t,f,u,c)}),r.forEachChild(function(u,d){Ti(t,e,n.concat(d),u,i)})}function Tp(t,e,n){var r=e==="",i={dispatch:r?t.dispatch:function(o,s,a){var l=ei(o,s,a),c=l.payload,u=l.options,d=l.type;return(!u||!u.root)&&(d=e+d),t.dispatch(d,c)},commit:r?t.commit:function(o,s,a){var l=ei(o,s,a),c=l.payload,u=l.options,d=l.type;(!u||!u.root)&&(d=e+d),t.commit(d,c,u)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return Yc(t,e)}},state:{get:function(){return ms(t.state,n)}}}),i}function Yc(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach(function(i){if(i.slice(0,r)===e){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return t.getters[i]},enumerable:!0})}}),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function kp(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push(function(s){n.call(t,r.state,s)})}function Cp(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push(function(s){var a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},s);return Ep(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(l){throw t._devtoolHook.emit("vuex:error",l),l}):a})}function Ap(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(o){return n(r.state,r.getters,o.state,o.getters)})}function Op(t){Ve(function(){return t._state.data},function(){},{deep:!0,flush:"sync"})}function ms(t,e){return e.reduce(function(n,r){return n[r]},t)}function ei(t,e,n){return qp(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var Pp="vuex bindings",Da="vuex:mutations",Ji="vuex:actions",gn="vuex",xp=0;function Rp(t,e){Sp({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[Pp]},function(n){n.addTimelineLayer({id:Da,label:"Vuex Mutations",color:Ma}),n.addTimelineLayer({id:Ji,label:"Vuex Actions",color:Ma}),n.addInspector({id:gn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===t&&r.inspectorId===gn)if(r.filter){var i=[];eu(i,e._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[Zc(e._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===t&&r.inspectorId===gn){var i=r.nodeId;Yc(e,i),r.state=$p(Mp(e._modules,i),i==="root"?e.getters:e._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===t&&r.inspectorId===gn){var i=r.nodeId,o=r.path;i!=="root"&&(o=i.split("/").filter(Boolean).concat(o)),e._withCommit(function(){r.set(e._state.data,o,r.state.value)})}}),e.subscribe(function(r,i){var o={};r.payload&&(o.payload=r.payload),o.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(gn),n.sendInspectorState(gn),n.addTimelineEvent({layerId:Da,event:{time:Date.now(),title:r.type,data:o}})}),e.subscribeAction({before:function(r,i){var o={};r.payload&&(o.payload=r.payload),r._id=xp++,r._time=Date.now(),o.state=i,n.addTimelineEvent({layerId:Ji,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:o}})},after:function(r,i){var o={},s=Date.now()-r._time;o.duration={_custom:{type:"duration",display:s+"ms",tooltip:"Action duration",value:s}},r.payload&&(o.payload=r.payload),o.state=i,n.addTimelineEvent({layerId:Ji,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:o}})}})})}var Ma=8702998,Np=6710886,Lp=16777215,Qc={label:"namespaced",textColor:Lp,backgroundColor:Np};function Xc(t){return t&&t!=="root"?t.split("/").slice(-2,-1)[0]:"Root"}function Zc(t,e){return{id:e||"root",label:Xc(e),tags:t.namespaced?[Qc]:[],children:Object.keys(t._children).map(function(n){return Zc(t._children[n],e+n+"/")})}}function eu(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[Qc]:[]}),Object.keys(e._children).forEach(function(i){eu(t,e._children[i],n,r+i+"/")})}function $p(t,e,n){e=n==="root"?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map(function(s){return{key:s,editable:!0,value:t.state[s]}})};if(r.length){var o=Dp(e);i.getters=Object.keys(o).map(function(s){return{key:s.endsWith("/")?Xc(s):s,editable:!1,value:Ao(function(){return o[s]})}})}return i}function Dp(t){var e={};return Object.keys(t).forEach(function(n){var r=n.split("/");if(r.length>1){var i=e,o=r.pop();r.forEach(function(s){i[s]||(i[s]={_custom:{value:{},display:s,tooltip:"Module",abstract:!0}}),i=i[s]._custom.value}),i[o]=Ao(function(){return t[n]})}else e[n]=Ao(function(){return t[n]})}),e}function Mp(t,e){var n=e.split("/").filter(function(r){return r});return n.reduce(function(r,i,o){var s=r[i];if(!s)throw new Error('Missing module "'+i+'" for path "'+e+'".');return o===n.length-1?s:s._children},e==="root"?t:t.root._children)}function Ao(t){try{return t()}catch(e){return e}}var et=function(e,n){this.runtime=n,this._children=Object.create(null),this._rawModule=e;var r=e.state;this.state=(typeof r=="function"?r():r)||{}},tu={namespaced:{configurable:!0}};tu.namespaced.get=function(){return!!this._rawModule.namespaced};et.prototype.addChild=function(e,n){this._children[e]=n};et.prototype.removeChild=function(e){delete this._children[e]};et.prototype.getChild=function(e){return this._children[e]};et.prototype.hasChild=function(e){return e in this._children};et.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)};et.prototype.forEachChild=function(e){Nn(this._children,e)};et.prototype.forEachGetter=function(e){this._rawModule.getters&&Nn(this._rawModule.getters,e)};et.prototype.forEachAction=function(e){this._rawModule.actions&&Nn(this._rawModule.actions,e)};et.prototype.forEachMutation=function(e){this._rawModule.mutations&&Nn(this._rawModule.mutations,e)};Object.defineProperties(et.prototype,tu);var un=function(e){this.register([],e,!1)};un.prototype.get=function(e){return e.reduce(function(n,r){return n.getChild(r)},this.root)};un.prototype.getNamespace=function(e){var n=this.root;return e.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};un.prototype.update=function(e){nu([],this.root,e)};un.prototype.register=function(e,n,r){var i=this;r===void 0&&(r=!0);var o=new et(n,r);if(e.length===0)this.root=o;else{var s=this.get(e.slice(0,-1));s.addChild(e[e.length-1],o)}n.modules&&Nn(n.modules,function(a,l){i.register(e.concat(l),a,r)})};un.prototype.unregister=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1],i=n.getChild(r);i&&i.runtime&&n.removeChild(r)};un.prototype.isRegistered=function(e){var n=this.get(e.slice(0,-1)),r=e[e.length-1];return n?n.hasChild(r):!1};function nu(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return;nu(t.concat(r),e.getChild(r),n.modules[r])}}function jp(t){return new De(t)}var De=function(e){var n=this;e===void 0&&(e={});var r=e.plugins;r===void 0&&(r=[]);var i=e.strict;i===void 0&&(i=!1);var o=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new un(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,l=a.dispatch,c=a.commit;this.dispatch=function(f,g){return l.call(s,f,g)},this.commit=function(f,g,b){return c.call(s,f,g,b)},this.strict=i;var u=this._modules.root.state;Ti(this,u,[],this._modules.root),gs(this,u),r.forEach(function(d){return d(n)})},vs={state:{configurable:!0}};De.prototype.install=function(e,n){e.provide(n||Gc,this),e.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&Rp(e,this)};vs.state.get=function(){return this._state.data};vs.state.set=function(t){};De.prototype.commit=function(e,n,r){var i=this,o=ei(e,n,r),s=o.type,a=o.payload,l={type:s,payload:a},c=this._mutations[s];c&&(this._withCommit(function(){c.forEach(function(d){d(a)})}),this._subscribers.slice().forEach(function(u){return u(l,i.state)}))};De.prototype.dispatch=function(e,n){var r=this,i=ei(e,n),o=i.type,s=i.payload,a={type:o,payload:s},l=this._actions[o];if(l){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(a,r.state)})}catch{}var c=l.length>1?Promise.all(l.map(function(u){return u(s)})):l[0](s);return new Promise(function(u,d){c.then(function(f){try{r._actionSubscribers.filter(function(g){return g.after}).forEach(function(g){return g.after(a,r.state)})}catch{}u(f)},function(f){try{r._actionSubscribers.filter(function(g){return g.error}).forEach(function(g){return g.error(a,r.state,f)})}catch{}d(f)})})}};De.prototype.subscribe=function(e,n){return Kc(e,this._subscribers,n)};De.prototype.subscribeAction=function(e,n){var r=typeof e=="function"?{before:e}:e;return Kc(r,this._actionSubscribers,n)};De.prototype.watch=function(e,n,r){var i=this;return Ve(function(){return e(i.state,i.getters)},n,Object.assign({},r))};De.prototype.replaceState=function(e){var n=this;this._withCommit(function(){n._state.data=e})};De.prototype.registerModule=function(e,n,r){r===void 0&&(r={}),typeof e=="string"&&(e=[e]),this._modules.register(e,n),Ti(this,this.state,e,this._modules.get(e),r.preserveState),gs(this,this.state)};De.prototype.unregisterModule=function(e){var n=this;typeof e=="string"&&(e=[e]),this._modules.unregister(e),this._withCommit(function(){var r=ms(n.state,e.slice(0,-1));delete r[e[e.length-1]]}),Jc(this)};De.prototype.hasModule=function(e){return typeof e=="string"&&(e=[e]),this._modules.isRegistered(e)};De.prototype.hotUpdate=function(e){this._modules.update(e),Jc(this,!0)};De.prototype._withCommit=function(e){var n=this._committing;this._committing=!0,e(),this._committing=n};Object.defineProperties(De.prototype,vs);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const vn=typeof document<"u";function Fp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const le=Object.assign;function Yi(t,e){const n={};for(const r in e){const i=e[r];n[r]=Ze(i)?i.map(t):t(i)}return n}const Jn=()=>{},Ze=Array.isArray,ru=/#/g,Up=/&/g,Vp=/\//g,Bp=/=/g,Hp=/\?/g,iu=/\+/g,Wp=/%5B/g,zp=/%5D/g,ou=/%5E/g,Gp=/%60/g,su=/%7B/g,Kp=/%7C/g,au=/%7D/g,Jp=/%20/g;function bs(t){return encodeURI(""+t).replace(Kp,"|").replace(Wp,"[").replace(zp,"]")}function Yp(t){return bs(t).replace(su,"{").replace(au,"}").replace(ou,"^")}function Oo(t){return bs(t).replace(iu,"%2B").replace(Jp,"+").replace(ru,"%23").replace(Up,"%26").replace(Gp,"`").replace(su,"{").replace(au,"}").replace(ou,"^")}function Qp(t){return Oo(t).replace(Bp,"%3D")}function Xp(t){return bs(t).replace(ru,"%23").replace(Hp,"%3F")}function Zp(t){return t==null?"":Xp(t).replace(Vp,"%2F")}function or(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const eg=/\/$/,tg=t=>t.replace(eg,"");function Qi(t,e,n="/"){let r,i={},o="",s="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),o=e.slice(l+1,a>-1?a:e.length),i=t(o)),a>-1&&(r=r||e.slice(0,a),s=e.slice(a,e.length)),r=og(r??e,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:or(s)}}function ng(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ja(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function rg(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&kn(e.matched[r],n.matched[i])&&lu(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function kn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function lu(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!ig(t[n],e[n]))return!1;return!0}function ig(t,e){return Ze(t)?Fa(t,e):Ze(e)?Fa(e,t):t===e}function Fa(t,e){return Ze(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function og(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let o=n.length-1,s,a;for(s=0;s<r.length;s++)if(a=r[s],a!==".")if(a==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(s).join("/")}var sr;(function(t){t.pop="pop",t.push="push"})(sr||(sr={}));var Yn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Yn||(Yn={}));function sg(t){if(!t)if(vn){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),tg(t)}const ag=/^[^#]+#/;function lg(t,e){return t.replace(ag,"#")+e}function cg(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ki=()=>({left:window.scrollX,top:window.scrollY});function ug(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=cg(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Ua(t,e){return(history.state?history.state.position-e:-1)+t}const Po=new Map;function dg(t,e){Po.set(t,e)}function fg(t){const e=Po.get(t);return Po.delete(t),e}let hg=()=>location.protocol+"//"+location.host;function cu(t,e){const{pathname:n,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){let a=i.includes(t.slice(o))?t.slice(o).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),ja(l,"")}return ja(n,t)+r+i}function pg(t,e,n,r){let i=[],o=[],s=null;const a=({state:f})=>{const g=cu(t,location),b=n.value,q=e.value;let R=0;if(f){if(n.value=g,e.value=f,s&&s===b){s=null;return}R=q?f.position-q.position:0}else r(g);i.forEach(k=>{k(n.value,b,{delta:R,type:sr.pop,direction:R?R>0?Yn.forward:Yn.back:Yn.unknown})})};function l(){s=n.value}function c(f){i.push(f);const g=()=>{const b=i.indexOf(f);b>-1&&i.splice(b,1)};return o.push(g),g}function u(){const{history:f}=window;f.state&&f.replaceState(le({},f.state,{scroll:ki()}),"")}function d(){for(const f of o)f();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function Va(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?ki():null}}function gg(t){const{history:e,location:n}=window,r={value:cu(t,n)},i={value:e.state};i.value||o(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:hg()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](f)}}function s(l,c){const u=le({},e.state,Va(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});o(l,u,!0),r.value=l}function a(l,c){const u=le({},i.value,e.state,{forward:l,scroll:ki()});o(u.current,u,!0);const d=le({},Va(r.value,l,null),{position:u.position+1},c);o(l,d,!1),r.value=l}return{location:r,state:i,push:a,replace:s}}function mg(t){t=sg(t);const e=gg(t),n=pg(t,e.state,e.location,e.replace);function r(o,s=!0){s||n.pauseListeners(),history.go(o)}const i=le({location:"",base:t,go:r,createHref:lg.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function vg(t){return typeof t=="string"||t&&typeof t=="object"}function uu(t){return typeof t=="string"||typeof t=="symbol"}const kt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},du=Symbol("");var Ba;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ba||(Ba={}));function Cn(t,e){return le(new Error,{type:t,[du]:!0},e)}function ht(t,e){return t instanceof Error&&du in t&&(e==null||!!(t.type&e))}const Ha="[^/]+?",bg={sensitive:!1,strict:!1,start:!0,end:!0},yg=/[.+*?^${}()[\]/\\]/g;function _g(t,e){const n=le({},bg,e),r=[];let i=n.start?"^":"";const o=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const f=c[d];let g=40+(n.sensitive?.25:0);if(f.type===0)d||(i+="/"),i+=f.value.replace(yg,"\\$&"),g+=40;else if(f.type===1){const{value:b,repeatable:q,optional:R,regexp:k}=f;o.push({name:b,repeatable:q,optional:R});const x=k||Ha;if(x!==Ha){g+=10;try{new RegExp(`(${x})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${b}" (${x}): `+H.message)}}let j=q?`((?:${x})(?:/(?:${x}))*)`:`(${x})`;d||(j=R&&c.length<2?`(?:/${j})`:"/"+j),R&&(j+="?"),i+=j,g+=20,R&&(g+=-8),q&&(g+=-20),x===".*"&&(g+=-50)}u.push(g)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(s),d={};if(!u)return null;for(let f=1;f<u.length;f++){const g=u[f]||"",b=o[f-1];d[b.name]=g&&b.repeatable?g.split("/"):g}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of f)if(g.type===0)u+=g.value;else if(g.type===1){const{value:b,repeatable:q,optional:R}=g,k=b in c?c[b]:"";if(Ze(k)&&!q)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const x=Ze(k)?k.join("/"):k;if(!x)if(R)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${b}"`);u+=x}}return u||"/"}return{re:s,score:r,keys:o,parse:a,stringify:l}}function wg(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Sg(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const o=wg(r[n],i[n]);if(o)return o;n++}if(Math.abs(i.length-r.length)===1){if(Wa(r))return 1;if(Wa(i))return-1}return i.length-r.length}function Wa(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const qg={type:0,value:""},Eg=/[a-zA-Z0-9_]/;function Ig(t){if(!t)return[[]];if(t==="/")return[[qg]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a=0,l,c="",u="";function d(){c&&(n===0?o.push({type:0,value:c}):n===1||n===2||n===3?(o.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),s()):l===":"?(d(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:Eg.test(l)?f():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),s(),i}function Tg(t,e,n){const r=_g(Ig(t.path),n),i=le(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function kg(t,e){const n=[],r=new Map;e=Ka({strict:!1,end:!0,sensitive:!1},e);function i(u){return r.get(u)}function o(u,d,f){const g=!f,b=Cg(u);b.aliasOf=f&&f.record;const q=Ka(e,u),R=[b];if("alias"in u){const j=typeof u.alias=="string"?[u.alias]:u.alias;for(const H of j)R.push(le({},b,{components:f?f.record.components:b.components,path:H,aliasOf:f?f.record:b}))}let k,x;for(const j of R){const{path:H}=j;if(d&&H[0]!=="/"){const K=d.record.path,L=K[K.length-1]==="/"?"":"/";j.path=d.record.path+(H&&L+H)}if(k=Tg(j,d,q),f?f.alias.push(k):(x=x||k,x!==k&&x.alias.push(k),g&&u.name&&!Ga(k)&&s(u.name)),b.children){const K=b.children;for(let L=0;L<K.length;L++)o(K[L],k,f&&f.children[L])}f=f||k,(k.record.components&&Object.keys(k.record.components).length||k.record.name||k.record.redirect)&&l(k)}return x?()=>{s(x)}:Jn}function s(u){if(uu(u)){const d=r.get(u);d&&(r.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(s),d.alias.forEach(s))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&r.delete(u.record.name),u.children.forEach(s),u.alias.forEach(s))}}function a(){return n}function l(u){let d=0;for(;d<n.length&&Sg(u,n[d])>=0&&(u.record.path!==n[d].record.path||!fu(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!Ga(u)&&r.set(u.record.name,u)}function c(u,d){let f,g={},b,q;if("name"in u&&u.name){if(f=r.get(u.name),!f)throw Cn(1,{location:u});q=f.record.name,g=le(za(d.params,f.keys.filter(x=>!x.optional).concat(f.parent?f.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),u.params&&za(u.params,f.keys.map(x=>x.name))),b=f.stringify(g)}else if(u.path!=null)b=u.path,f=n.find(x=>x.re.test(b)),f&&(g=f.parse(b),q=f.record.name);else{if(f=d.name?r.get(d.name):n.find(x=>x.re.test(d.path)),!f)throw Cn(1,{location:u,currentLocation:d});q=f.record.name,g=le({},d.params,u.params),b=f.stringify(g)}const R=[];let k=f;for(;k;)R.unshift(k.record),k=k.parent;return{name:q,path:b,params:g,matched:R,meta:Og(R)}}return t.forEach(u=>o(u)),{addRoute:o,resolve:c,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function za(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Cg(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Ag(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function Ag(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ga(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Og(t){return t.reduce((e,n)=>le(e,n.meta),{})}function Ka(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function fu(t,e){return e.children.some(n=>n===t||fu(t,n))}function Pg(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const o=r[i].replace(iu," "),s=o.indexOf("="),a=or(s<0?o:o.slice(0,s)),l=s<0?null:or(o.slice(s+1));if(a in e){let c=e[a];Ze(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Ja(t){let e="";for(let n in t){const r=t[n];if(n=Qp(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ze(r)?r.map(o=>o&&Oo(o)):[r&&Oo(r)]).forEach(o=>{o!==void 0&&(e+=(e.length?"&":"")+n,o!=null&&(e+="="+o))})}return e}function xg(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Ze(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const Rg=Symbol(""),Ya=Symbol(""),ys=Symbol(""),_s=Symbol(""),xo=Symbol("");function jn(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rt(t,e,n,r,i,o=s=>s()){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Cn(4,{from:n,to:e})):f instanceof Error?l(f):vg(f)?l(Cn(2,{from:e,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},u=o(()=>t.call(r&&r.instances[i],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Xi(t,e,n,r,i=o=>o()){const o=[];for(const s of t)for(const a in s.components){let l=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(Ng(l)){const u=(l.__vccOpts||l)[e];u&&o.push(Rt(u,n,r,s,a,i))}else{let c=l();o.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const d=Fp(u)?u.default:u;s.components[a]=d;const g=(d.__vccOpts||d)[e];return g&&Rt(g,n,r,s,a,i)()}))}}return o}function Ng(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Qa(t){const e=Qe(ys),n=Qe(_s),r=Fe(()=>e.resolve(D(t.to))),i=Fe(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(kn.bind(null,u));if(f>-1)return f;const g=Xa(l[c-2]);return c>1&&Xa(u)===g&&d[d.length-1].path!==g?d.findIndex(kn.bind(null,l[c-2])):f}),o=Fe(()=>i.value>-1&&Mg(n.params,r.value.params)),s=Fe(()=>i.value>-1&&i.value===n.matched.length-1&&lu(n.params,r.value.params));function a(l={}){return Dg(l)?e[D(t.replace)?"replace":"push"](D(t.to)).catch(Jn):Promise.resolve()}return{route:r,href:Fe(()=>r.value.href),isActive:o,isExactActive:s,navigate:a}}const Lg=Ec({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Qa,setup(t,{slots:e}){const n=Rn(Qa(t)),{options:r}=Qe(ys),i=Fe(()=>({[Za(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Za(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const o=e.default&&e.default(n);return t.custom?o:ps("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},o)}}}),$g=Lg;function Dg(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Mg(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Ze(i)||i.length!==r.length||r.some((o,s)=>o!==i[s]))return!1}return!0}function Xa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Za=(t,e,n)=>t??e??n,jg=Ec({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Qe(xo),i=Fe(()=>t.route||r.value),o=Qe(Ya,0),s=Fe(()=>{let c=D(o);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Fe(()=>i.value.matched[s.value]);jr(Ya,Fe(()=>s.value+1)),jr(Rg,a),jr(xo,i);const l=de();return Ve(()=>[l.value,a.value,t.name],([c,u,d],[f,g,b])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!kn(u,g)||!f)&&(u.enterCallbacks[d]||[]).forEach(q=>q(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return el(n.default,{Component:f,route:c});const g=d.props[u],b=g?g===!0?c.params:typeof g=="function"?g(c):g:null,R=ps(f,le({},b,e,{onVnodeUnmounted:k=>{k.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return el(n.default,{Component:R,route:c})||R}}});function el(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ro=jg;function Fg(t){const e=kg(t.routes,t),n=t.parseQuery||Pg,r=t.stringifyQuery||Ja,i=t.history,o=jn(),s=jn(),a=jn(),l=yf(kt);let c=kt;vn&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Yi.bind(null,_=>""+_),d=Yi.bind(null,Zp),f=Yi.bind(null,or);function g(_,O){let C,$;return uu(_)?(C=e.getRecordMatcher(_),$=O):$=_,e.addRoute($,C)}function b(_){const O=e.getRecordMatcher(_);O&&e.removeRoute(O)}function q(){return e.getRoutes().map(_=>_.record)}function R(_){return!!e.getRecordMatcher(_)}function k(_,O){if(O=le({},O||l.value),typeof _=="string"){const p=Qi(n,_,O.path),v=e.resolve({path:p.path},O),w=i.createHref(p.fullPath);return le(p,v,{params:f(v.params),hash:or(p.hash),redirectedFrom:void 0,href:w})}let C;if(_.path!=null)C=le({},_,{path:Qi(n,_.path,O.path).path});else{const p=le({},_.params);for(const v in p)p[v]==null&&delete p[v];C=le({},_,{params:d(p)}),O.params=d(O.params)}const $=e.resolve(C,O),ae=_.hash||"";$.params=u(f($.params));const ve=ng(r,le({},_,{hash:Yp(ae),path:$.path})),h=i.createHref(ve);return le({fullPath:ve,hash:ae,query:r===Ja?xg(_.query):_.query||{}},$,{redirectedFrom:void 0,href:h})}function x(_){return typeof _=="string"?Qi(n,_,l.value.path):le({},_)}function j(_,O){if(c!==_)return Cn(8,{from:O,to:_})}function H(_){return Q(_)}function K(_){return H(le(x(_),{replace:!0}))}function L(_){const O=_.matched[_.matched.length-1];if(O&&O.redirect){const{redirect:C}=O;let $=typeof C=="function"?C(_):C;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=x($):{path:$},$.params={}),le({query:_.query,hash:_.hash,params:$.path!=null?{}:_.params},$)}}function Q(_,O){const C=c=k(_),$=l.value,ae=_.state,ve=_.force,h=_.replace===!0,p=L(C);if(p)return Q(le(x(p),{state:typeof p=="object"?le({},ae,p.state):ae,force:ve,replace:h}),O||C);const v=C;v.redirectedFrom=O;let w;return!ve&&rg(r,$,C)&&(w=Cn(16,{to:v,from:$}),tt($,$,!0,!1)),(w?Promise.resolve(w):X(v,$)).catch(y=>ht(y)?ht(y,2)?y:qt(y):se(y,v,$)).then(y=>{if(y){if(ht(y,2))return Q(le({replace:h},x(y.to),{state:typeof y.to=="object"?le({},ae,y.to.state):ae,force:ve}),O||v)}else y=N(v,$,!0,h,ae);return he(v,$,y),y})}function M(_,O){const C=j(_,O);return C?Promise.reject(C):Promise.resolve()}function Y(_){const O=fn.values().next().value;return O&&typeof O.runWithContext=="function"?O.runWithContext(_):_()}function X(_,O){let C;const[$,ae,ve]=Ug(_,O);C=Xi($.reverse(),"beforeRouteLeave",_,O);for(const p of $)p.leaveGuards.forEach(v=>{C.push(Rt(v,_,O))});const h=M.bind(null,_,O);return C.push(h),Ce(C).then(()=>{C=[];for(const p of o.list())C.push(Rt(p,_,O));return C.push(h),Ce(C)}).then(()=>{C=Xi(ae,"beforeRouteUpdate",_,O);for(const p of ae)p.updateGuards.forEach(v=>{C.push(Rt(v,_,O))});return C.push(h),Ce(C)}).then(()=>{C=[];for(const p of ve)if(p.beforeEnter)if(Ze(p.beforeEnter))for(const v of p.beforeEnter)C.push(Rt(v,_,O));else C.push(Rt(p.beforeEnter,_,O));return C.push(h),Ce(C)}).then(()=>(_.matched.forEach(p=>p.enterCallbacks={}),C=Xi(ve,"beforeRouteEnter",_,O,Y),C.push(h),Ce(C))).then(()=>{C=[];for(const p of s.list())C.push(Rt(p,_,O));return C.push(h),Ce(C)}).catch(p=>ht(p,8)?p:Promise.reject(p))}function he(_,O,C){a.list().forEach($=>Y(()=>$(_,O,C)))}function N(_,O,C,$,ae){const ve=j(_,O);if(ve)return ve;const h=O===kt,p=vn?history.state:{};C&&($||h?i.replace(_.fullPath,le({scroll:h&&p&&p.scroll},ae)):i.push(_.fullPath,ae)),l.value=_,tt(_,O,C,h),qt()}let oe;function Ee(){oe||(oe=i.listen((_,O,C)=>{if(!Ir.listening)return;const $=k(_),ae=L($);if(ae){Q(le(ae,{replace:!0}),$).catch(Jn);return}c=$;const ve=l.value;vn&&dg(Ua(ve.fullPath,C.delta),ki()),X($,ve).catch(h=>ht(h,12)?h:ht(h,2)?(Q(h.to,$).then(p=>{ht(p,20)&&!C.delta&&C.type===sr.pop&&i.go(-1,!1)}).catch(Jn),Promise.reject()):(C.delta&&i.go(-C.delta,!1),se(h,$,ve))).then(h=>{h=h||N($,ve,!1),h&&(C.delta&&!ht(h,8)?i.go(-C.delta,!1):C.type===sr.pop&&ht(h,20)&&i.go(-1,!1)),he($,ve,h)}).catch(Jn)}))}let Ke=jn(),ye=jn(),ce;function se(_,O,C){qt(_);const $=ye.list();return $.length?$.forEach(ae=>ae(_,O,C)):console.error(_),Promise.reject(_)}function ft(){return ce&&l.value!==kt?Promise.resolve():new Promise((_,O)=>{Ke.add([_,O])})}function qt(_){return ce||(ce=!_,Ee(),Ke.list().forEach(([O,C])=>_?C(_):O()),Ke.reset()),_}function tt(_,O,C,$){const{scrollBehavior:ae}=t;if(!vn||!ae)return Promise.resolve();const ve=!C&&fg(Ua(_.fullPath,0))||($||!C)&&history.state&&history.state.scroll||null;return gr().then(()=>ae(_,O,ve)).then(h=>h&&ug(h)).catch(h=>se(h,_,O))}const Re=_=>i.go(_);let dn;const fn=new Set,Ir={currentRoute:l,listening:!0,addRoute:g,removeRoute:b,hasRoute:R,getRoutes:q,resolve:k,options:t,push:H,replace:K,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:o.add,beforeResolve:s.add,afterEach:a.add,onError:ye.add,isReady:ft,install(_){const O=this;_.component("RouterLink",$g),_.component("RouterView",Ro),_.config.globalProperties.$router=O,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>D(l)}),vn&&!dn&&l.value===kt&&(dn=!0,H(i.location).catch(ae=>{}));const C={};for(const ae in kt)Object.defineProperty(C,ae,{get:()=>l.value[ae],enumerable:!0});_.provide(ys,O),_.provide(_s,ac(C)),_.provide(xo,l);const $=_.unmount;fn.add(_),_.unmount=function(){fn.delete(_),fn.size<1&&(c=kt,oe&&oe(),oe=null,l.value=kt,dn=!1,ce=!1),$()}}};function Ce(_){return _.reduce((O,C)=>O.then(()=>Y(C)),Promise.resolve())}return Ir}function Ug(t,e){const n=[],r=[],i=[],o=Math.max(e.matched.length,t.matched.length);for(let s=0;s<o;s++){const a=e.matched[s];a&&(t.matched.find(c=>kn(c,a))?r.push(a):n.push(a));const l=t.matched[s];l&&(e.matched.find(c=>kn(c,l))||i.push(l))}return[n,r,i]}function ws(){return Qe(_s)}const Vg="/IndiansAbroad/assets/BharatGuildLogo-8ORqGw2e.jpg";function Ss(t){return Jl()?(Qd(t),!0):!1}function Ci(t){return typeof t=="function"?t():D(t)}const Bg=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Hg=Object.prototype.toString,Wg=t=>Hg.call(t)==="[object Object]",zg=()=>{};function Gg(t){return t||qi()}function Kg(t,e=!0,n){Gg()?ut(t,n):e?t():gr(t)}function No(t){var e;const n=Ci(t);return(e=n==null?void 0:n.$el)!=null?e:n}const Ai=Bg?window:void 0;function Jg(...t){let e,n,r,i;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,i]=t,e=Ai):[e,n,r,i]=t,!e)return zg;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],s=()=>{o.forEach(u=>u()),o.length=0},a=(u,d,f,g)=>(u.addEventListener(d,f,g),()=>u.removeEventListener(d,f,g)),l=Ve(()=>[No(e),Ci(i)],([u,d])=>{if(s(),!u)return;const f=Wg(d)?{...d}:d;o.push(...n.flatMap(g=>r.map(b=>a(u,g,b,f))))},{immediate:!0,flush:"post"}),c=()=>{l(),s()};return Ss(c),c}function Yg(){const t=de(!1),e=qi();return e&&ut(()=>{t.value=!0},e),t}function hu(t){const e=Yg();return Fe(()=>(e.value,!!t()))}function pu(t,e={}){const{window:n=Ai}=e,r=hu(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let i;const o=de(!1),s=c=>{o.value=c.matches},a=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",s):i.removeListener(s))},l=Df(()=>{r.value&&(a(),i=n.matchMedia(Ci(t)),"addEventListener"in i?i.addEventListener("change",s):i.addListener(s),o.value=i.matches)});return Ss(()=>{l(),a(),i=void 0}),o}function Qg(t){return pu("(prefers-color-scheme: dark)",t)}function Xg(t,e,n={}){const{window:r=Ai,...i}=n;let o;const s=hu(()=>r&&"ResizeObserver"in r),a=()=>{o&&(o.disconnect(),o=void 0)},l=Fe(()=>Array.isArray(t)?t.map(d=>No(d)):[No(t)]),c=Ve(l,d=>{if(a(),s.value&&r){o=new ResizeObserver(e);for(const f of d)f&&o.observe(f,i)}},{immediate:!0,flush:"post"}),u=()=>{a(),c()};return Ss(u),{isSupported:s,stop:u}}function K0(t){var e;const n=de(t==null?void 0:t.element),r=de(t==null?void 0:t.input),i=(e=t==null?void 0:t.styleProp)!=null?e:"height",o=de(1);function s(){var a,l;if(!n.value)return;let c="";n.value.style[i]="1px",o.value=(a=n.value)==null?void 0:a.scrollHeight,t!=null&&t.styleTarget?Ci(t.styleTarget).style[i]=`${o.value}px`:c=`${o.value}px`,n.value.style[i]=c,(l=t==null?void 0:t.onResize)==null||l.call(t)}return Ve([r,n],()=>gr(s),{immediate:!0}),Xg(n,()=>s()),t!=null&&t.watch&&Ve(t.watch,s,{immediate:!0,deep:!0}),{textarea:n,input:r,triggerResize:s}}function gu(t={}){const{window:e=Ai,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:o=!0}=t,s=de(n),a=de(r),l=()=>{e&&(o?(s.value=e.innerWidth,a.value=e.innerHeight):(s.value=e.document.documentElement.clientWidth,a.value=e.document.documentElement.clientHeight))};if(l(),Kg(l),Jg("resize",l,{passive:!0}),i){const c=pu("(orientation: portrait)");Ve(c,()=>l())}return{width:s,height:a}}var tl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zg=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},vu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,s||(f=64)),r.push(n[u],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mu(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Zg(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||c==null||d==null)throw new em;const f=o<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),d!==64){const b=c<<6&192|d;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class em extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tm=function(t){const e=mu(t);return vu.encodeByteArray(e,!0)},bu=function(t){return tm(t).replace(/\./g,"")},yu=function(t){try{return vu.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=()=>nm().__FIREBASE_DEFAULTS__,im=()=>{if(typeof process>"u"||typeof tl>"u")return;const t=tl.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},om=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yu(t[1]);return e&&JSON.parse(e)},qs=()=>{try{return rm()||im()||om()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},sm=t=>{var e,n;return(n=(e=qs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},_u=()=>{var t;return(t=qs())===null||t===void 0?void 0:t.config},wu=t=>{var e;return(e=qs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function cm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function um(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dm(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fm(){try{return typeof indexedDB=="object"}catch{return!1}}function hm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=pm,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,br.prototype.create)}}class br{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?gm(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ht(i,a,r)}}function gm(t,e){return t.replace(mm,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mm=/\{\$([^}]+)}/g;function vm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ti(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(nl(o)&&nl(s)){if(!ti(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function nl(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bm(t,e){const n=new ym(t,e);return n.subscribe.bind(n)}class ym{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");_m(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Zi),i.error===void 0&&(i.error=Zi),i.complete===void 0&&(i.complete=Zi);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _m(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Zi(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t){return t&&t._delegate?t._delegate:t}class An{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new am;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qm(e))try{this.getOrInitializeService({instanceIdentifier:Yt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yt){return this.instances.has(e)}getOptions(e=Yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Sm(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Yt){return this.component?this.component.multipleInstances?e:Yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Sm(t){return t===Yt?void 0:t}function qm(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new wm(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const Im={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},Tm=fe.INFO,km={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},Cm=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=km[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Su{constructor(e){this.name=e,this._logLevel=Tm,this._logHandler=Cm,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Im[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const Am=(t,e)=>e.some(n=>t instanceof n);let rl,il;function Om(){return rl||(rl=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pm(){return il||(il=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qu=new WeakMap,Lo=new WeakMap,Eu=new WeakMap,eo=new WeakMap,Es=new WeakMap;function xm(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ft(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&qu.set(n,t)}).catch(()=>{}),Es.set(e,t),e}function Rm(t){if(Lo.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Lo.set(t,e)}let $o={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lo.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Eu.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ft(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Nm(t){$o=t($o)}function Lm(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(to(this),e,...n);return Eu.set(r,e.sort?e.sort():[e]),Ft(r)}:Pm().includes(t)?function(...e){return t.apply(to(this),e),Ft(qu.get(this))}:function(...e){return Ft(t.apply(to(this),e))}}function $m(t){return typeof t=="function"?Lm(t):(t instanceof IDBTransaction&&Rm(t),Am(t,Om())?new Proxy(t,$o):t)}function Ft(t){if(t instanceof IDBRequest)return xm(t);if(eo.has(t))return eo.get(t);const e=$m(t);return e!==t&&(eo.set(t,e),Es.set(e,t)),e}const to=t=>Es.get(t);function Dm(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ft(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ft(s.result),l.oldVersion,l.newVersion,Ft(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Mm=["get","getKey","getAll","getAllKeys","count"],jm=["put","add","delete","clear"],no=new Map;function ol(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(no.get(e))return no.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=jm.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Mm.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return no.set(e,o),o}Nm(t=>({...t,get:(e,n,r)=>ol(e,n)||t.get(e,n,r),has:(e,n)=>!!ol(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Um(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Um(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Do="@firebase/app",sl="0.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new Su("@firebase/app"),Vm="@firebase/app-compat",Bm="@firebase/analytics-compat",Hm="@firebase/analytics",Wm="@firebase/app-check-compat",zm="@firebase/app-check",Gm="@firebase/auth",Km="@firebase/auth-compat",Jm="@firebase/database",Ym="@firebase/database-compat",Qm="@firebase/functions",Xm="@firebase/functions-compat",Zm="@firebase/installations",ev="@firebase/installations-compat",tv="@firebase/messaging",nv="@firebase/messaging-compat",rv="@firebase/performance",iv="@firebase/performance-compat",ov="@firebase/remote-config",sv="@firebase/remote-config-compat",av="@firebase/storage",lv="@firebase/storage-compat",cv="@firebase/firestore",uv="@firebase/firestore-compat",dv="firebase",fv="10.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="[DEFAULT]",hv={[Do]:"fire-core",[Vm]:"fire-core-compat",[Hm]:"fire-analytics",[Bm]:"fire-analytics-compat",[zm]:"fire-app-check",[Wm]:"fire-app-check-compat",[Gm]:"fire-auth",[Km]:"fire-auth-compat",[Jm]:"fire-rtdb",[Ym]:"fire-rtdb-compat",[Qm]:"fire-fn",[Xm]:"fire-fn-compat",[Zm]:"fire-iid",[ev]:"fire-iid-compat",[tv]:"fire-fcm",[nv]:"fire-fcm-compat",[rv]:"fire-perf",[iv]:"fire-perf-compat",[ov]:"fire-rc",[sv]:"fire-rc-compat",[av]:"fire-gcs",[lv]:"fire-gcs-compat",[cv]:"fire-fst",[uv]:"fire-fst-compat","fire-js":"fire-js",[dv]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=new Map,pv=new Map,jo=new Map;function al(t,e){try{t.container.addComponent(e)}catch(n){sn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ar(t){const e=t.name;if(jo.has(e))return sn.debug(`There were multiple attempts to register component ${e}.`),!1;jo.set(e,t);for(const n of ni.values())al(n,t);for(const n of pv.values())al(n,t);return!0}function Iu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ut=new br("app","Firebase",gv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new An("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ut.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=fv;function Tu(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Mo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ut.create("bad-app-name",{appName:String(i)});if(n||(n=_u()),!n)throw Ut.create("no-options");const o=ni.get(i);if(o){if(ti(n,o.options)&&ti(r,o.config))return o;throw Ut.create("duplicate-app",{appName:i})}const s=new Em(i);for(const l of jo.values())s.addComponent(l);const a=new mv(n,r,s);return ni.set(i,a),a}function vv(t=Mo){const e=ni.get(t);if(!e&&t===Mo&&_u())return Tu();if(!e)throw Ut.create("no-app",{appName:t});return e}function Sn(t,e,n){var r;let i=(r=hv[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sn.warn(a.join(" "));return}ar(new An(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="firebase-heartbeat-database",yv=1,lr="firebase-heartbeat-store";let ro=null;function ku(){return ro||(ro=Dm(bv,yv,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(lr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ut.create("idb-open",{originalErrorMessage:t.message})})),ro}async function _v(t){try{const n=(await ku()).transaction(lr),r=await n.objectStore(lr).get(Cu(t));return await n.done,r}catch(e){if(e instanceof Ht)sn.warn(e.message);else{const n=Ut.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});sn.warn(n.message)}}}async function ll(t,e){try{const r=(await ku()).transaction(lr,"readwrite");await r.objectStore(lr).put(e,Cu(t)),await r.done}catch(n){if(n instanceof Ht)sn.warn(n.message);else{const r=Ut.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});sn.warn(r.message)}}}function Cu(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wv=1024,Sv=30*24*60*60*1e3;class qv{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Iv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=cl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=Sv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=cl(),{heartbeatsToSend:r,unsentEntries:i}=Ev(this._heartbeatsCache.heartbeats),o=bu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function cl(){return new Date().toISOString().substring(0,10)}function Ev(t,e=wv){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),ul(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ul(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Iv{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fm()?hm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await _v(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ll(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ul(t){return bu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(t){ar(new An("platform-logger",e=>new Fm(e),"PRIVATE")),ar(new An("heartbeat",e=>new qv(e),"PRIVATE")),Sn(Do,sl,t),Sn(Do,sl,"esm2017"),Sn("fire-js","")}Tv("");function Is(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Au(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kv=Au,Ou=new br("auth","Firebase",Au());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Su("@firebase/auth");function Cv(t,...e){ri.logLevel<=fe.WARN&&ri.warn(`Auth (${_r}): ${t}`,...e)}function Br(t,...e){ri.logLevel<=fe.ERROR&&ri.error(`Auth (${_r}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,...e){throw ks(t,...e)}function Xe(t,...e){return ks(t,...e)}function Ts(t,e,n){const r=Object.assign(Object.assign({},kv()),{[e]:n});return new br("auth","Firebase",r).create(e,{appName:t.name})}function on(t){return Ts(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Av(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(t,"argument-error"),Ts(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ks(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ou.create(t,...e)}function W(t,e,...n){if(!t)throw ks(e,...n)}function vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Br(e),new Error(e)}function wt(t,e){t||vt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Ov(){return dl()==="http:"||dl()==="https:"}function dl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ov()||cm()||"connection"in navigator)?navigator.onLine:!0}function xv(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,n){this.shortDelay=e,this.longDelay=n,wt(n>e,"Short delay should be less than long delay!"),this.isMobile=lm()||um()}get(){return Pv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(t,e){wt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=new wr(3e4,6e4);function As(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $n(t,e,n,r,i={}){return xu(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=yr(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Pu.fetch()(Ru(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function xu(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Rv),e);try{const i=new $v(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Nr(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nr(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Nr(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw Nr(t,"user-disabled",s);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ts(t,u,c);ct(t,u)}}catch(i){if(i instanceof Ht)throw i;ct(t,"network-request-failed",{message:String(i)})}}async function Lv(t,e,n,r,i={}){const o=await $n(t,e,n,r,i);return"mfaPendingCredential"in o&&ct(t,"multi-factor-auth-required",{_serverResponse:o}),o}function Ru(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cs(t.config,i):`${t.config.apiScheme}://${i}`}class $v{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),Nv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dv(t,e){return $n(t,"POST","/v1/accounts:delete",e)}async function Nu(t,e){return $n(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Mv(t,e=!1){const n=Ln(t),r=await n.getIdToken(e),i=Os(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:Qn(io(i.auth_time)),issuedAtTime:Qn(io(i.iat)),expirationTime:Qn(io(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function io(t){return Number(t)*1e3}function Os(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Br("JWT malformed, contained fewer than 3 sections"),null;try{const i=yu(n);return i?JSON.parse(i):(Br("Failed to decode base64 JWT payload"),null)}catch(i){return Br("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fl(t){const e=Os(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&jv(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jv({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qn(this.lastLoginAt),this.creationTime=Qn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t){var e;const n=t.auth,r=await t.getIdToken(),i=await cr(t,Nu(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Lu(o.providerUserInfo):[],a=Vv(t.providerData,s),l=t.isAnonymous,c=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Uo(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function Uv(t){const e=Ln(t);await ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Vv(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Lu(t){return t.map(e=>{var{providerId:n}=e,r=Is(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(t,e){const n=await xu(t,{},async()=>{const r=yr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=Ru(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Pu.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Hv(t,e){return $n(t,"POST","/v2/accounts:revokeToken",As(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fl(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){W(e.length!==0,"internal-error");const n=fl(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await Bv(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new qn;return r&&(W(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(W(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qn,this.toJSON())}_performRefresh(){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Is(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Fv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Uo(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await cr(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Mv(this,e)}reload(){return Uv(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(on(this.auth));const e=await this.getIdToken();return await cr(this,Dv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,b=(s=n.photoURL)!==null&&s!==void 0?s:void 0,q=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=n.createdAt)!==null&&c!==void 0?c:void 0,x=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:j,emailVerified:H,isAnonymous:K,providerData:L,stsTokenManager:Q}=n;W(j&&Q,e,"internal-error");const M=qn.fromJSON(this.name,Q);W(typeof j=="string",e,"internal-error"),Ct(d,e.name),Ct(f,e.name),W(typeof H=="boolean",e,"internal-error"),W(typeof K=="boolean",e,"internal-error"),Ct(g,e.name),Ct(b,e.name),Ct(q,e.name),Ct(R,e.name),Ct(k,e.name),Ct(x,e.name);const Y=new bt({uid:j,auth:e,email:f,emailVerified:H,displayName:d,isAnonymous:K,photoURL:b,phoneNumber:g,tenantId:q,stsTokenManager:M,createdAt:k,lastLoginAt:x});return L&&Array.isArray(L)&&(Y.providerData=L.map(X=>Object.assign({},X))),R&&(Y._redirectEventId=R),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new qn;i.updateFromServerResponse(n);const o=new bt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ii(o),o}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];W(i.localId!==void 0,"internal-error");const o=i.providerUserInfo!==void 0?Lu(i.providerUserInfo):[],s=!(i.email&&i.passwordHash)&&!(o!=null&&o.length),a=new qn;a.updateFromIdToken(r);const l=new bt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:s}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Uo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(o!=null&&o.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl=new Map;function yt(t){wt(t instanceof Function,"Expected a class definition");let e=hl.get(t);return e?(wt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hl.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$u.type="NONE";const pl=$u;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(t,e,n){return`firebase:${t}:${e}:${n}`}class En{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Hr(this.userKey,i.apiKey,o),this.fullPersistenceKey=Hr("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new En(yt(pl),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||yt(pl);const s=Hr(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(s);if(u){const d=bt._fromJSON(e,u);c!==o&&(a=d),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new En(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new En(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ju(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Du(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Uu(e))return"Blackberry";if(Vu(e))return"Webos";if(Ps(e))return"Safari";if((e.includes("chrome/")||Mu(e))&&!e.includes("edge/"))return"Chrome";if(Fu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Du(t=Pe()){return/firefox\//i.test(t)}function Ps(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mu(t=Pe()){return/crios\//i.test(t)}function ju(t=Pe()){return/iemobile/i.test(t)}function Fu(t=Pe()){return/android/i.test(t)}function Uu(t=Pe()){return/blackberry/i.test(t)}function Vu(t=Pe()){return/webos/i.test(t)}function Oi(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Wv(t=Pe()){var e;return Oi(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function zv(){return dm()&&document.documentMode===10}function Bu(t=Pe()){return Oi(t)||Fu(t)||Vu(t)||Uu(t)||/windows phone/i.test(t)||ju(t)}function Gv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t,e=[]){let n;switch(t){case"Browser":n=gl(Pe());break;case"Worker":n=`${gl(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jv(t,e={}){return $n(t,"GET","/v2/passwordPolicy",As(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv=6;class Qv{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:Yv,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsUppercaseLetter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(s=l.containsNumericCharacter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ml(this),this.idTokenSubscription=new ml(this),this.beforeStateQueue=new Kv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ou,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await En.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nu(this,{idToken:e}),r=await bt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mt(this.app)){const s=this.app.settings.authIdToken;return s?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(s).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ii(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xv()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(on(this));const n=e?Ln(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(on(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(on(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Jv(this),n=new Qv(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new br("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Hv(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yt(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await En.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(a,this,"internal-error"),a.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{s=!0,l()}}else{const l=e.addObserver(n);return()=>{s=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Hu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Cv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pi(t){return Ln(t)}class ml{constructor(e){this.auth=e,this.observer=null,this.addObserver=bm(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Zv(t){xs=t}function eb(t){return xs.loadJS(t)}function tb(){return xs.gapiScript}function nb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t,e){const n=Iu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(ti(o,e??{}))return i;ct(i,"already-initialized")}return n.initialize({options:e})}function ib(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ob(t,e,n){const r=Pi(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=Wu(e),{host:s,port:a}=sb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||ab()}function Wu(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sb(t){const e=Wu(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:vl(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:vl(s)}}}function vl(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ab(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vt("not implemented")}_getIdTokenResponse(e){return vt("not implemented")}_linkToIdToken(e,n){return vt("not implemented")}_getReauthenticationResolver(e){return vt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function In(t,e){return Lv(t,"POST","/v1/accounts:signInWithIdp",As(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lb="http://localhost";class an extends zu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new an(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Is(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new an(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return In(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,In(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,In(e,n)}buildRequest(){const e={requestUri:lb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=yr(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Rs{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends Sr{constructor(){super("facebook.com")}static credential(e){return an._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nt.credentialFromTaggedObject(e)}static credentialFromError(e){return Nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nt.credential(e.oauthAccessToken)}catch{return null}}}Nt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return an._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gt.credential(n,r)}catch{return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com";gt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Sr{constructor(){super("github.com")}static credential(e){return an._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Lt.credential(e.oauthAccessToken)}catch{return null}}}Lt.GITHUB_SIGN_IN_METHOD="github.com";Lt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Sr{constructor(){super("twitter.com")}static credential(e,n){return an._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $t.credentialFromTaggedObject(e)}static credentialFromError(e){return $t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $t.credential(n,r)}catch{return null}}}$t.TWITTER_SIGN_IN_METHOD="twitter.com";$t.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await bt._fromIdTokenResponse(e,r,i),s=bl(r);return new On({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=bl(r);return new On({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function bl(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Ht{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,oi.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new oi(e,n,r,i)}}function Gu(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?oi._fromErrorAndOperation(t,o,e,r):o})}async function cb(t,e,n=!1){const r=await cr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return On._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e,n=!1){const{auth:r}=t;if(mt(r.app))return Promise.reject(on(r));const i="reauthenticate";try{const o=await cr(t,Gu(r,i,e,t),n);W(o.idToken,r,"internal-error");const s=Os(o.idToken);W(s,r,"internal-error");const{sub:a}=s;return W(t.uid===a,r,"user-mismatch"),On._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e,n=!1){if(mt(t.app))return Promise.reject(on(t));const r="signIn",i=await Gu(t,r,e),o=await On._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}function fb(t,e,n,r){return Ln(t).onIdTokenChanged(e,n,r)}function hb(t,e,n){return Ln(t).beforeAuthStateChanged(e,n)}const si="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(si,"1"),this.storage.removeItem(si),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(){const t=Pe();return Ps(t)||Oi(t)}const gb=1e3,mb=10;class Ju extends Ku{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pb()&&Gv(),this.fallbackToPolling=Bu(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);zv()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,mb):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ju.type="LOCAL";const vb=Ju;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends Ku{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Yu.type="SESSION";const Qu=Yu;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(n.origin,o)),l=await bb(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=Ns("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return window}function _b(t){at().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xu(){return typeof at().WorkerGlobalScope<"u"&&typeof at().importScripts=="function"}async function wb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Sb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qb(){return Xu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="firebaseLocalStorageDb",Eb=1,ai="firebaseLocalStorage",ed="fbase_key";class qr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ri(t,e){return t.transaction([ai],e?"readwrite":"readonly").objectStore(ai)}function Ib(){const t=indexedDB.deleteDatabase(Zu);return new qr(t).toPromise()}function Vo(){const t=indexedDB.open(Zu,Eb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ai,{keyPath:ed})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ai)?e(r):(r.close(),await Ib(),e(await Vo()))})})}async function yl(t,e,n){const r=Ri(t,!0).put({[ed]:e,value:n});return new qr(r).toPromise()}async function Tb(t,e){const n=Ri(t,!1).get(e),r=await new qr(n).toPromise();return r===void 0?null:r.value}function _l(t,e){const n=Ri(t,!0).delete(e);return new qr(n).toPromise()}const kb=800,Cb=3;class td{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vo(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Cb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xi._getInstance(qb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await wb(),!this.activeServiceWorker)return;this.sender=new yb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Sb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vo();return await yl(e,si,"1"),await _l(e,si),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yl(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Tb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>_l(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ri(i,!1).getAll();return new qr(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}td.type="LOCAL";const Ab=td;new wr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(t,e){return e?yt(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends zu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return In(e,this._buildIdpRequest())}_linkToIdToken(e,n){return In(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return In(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Ob(t){return db(t.auth,new Ls(t),t.bypassAuthState)}function Pb(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),ub(n,new Ls(t),t.bypassAuthState)}async function xb(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),cb(n,new Ls(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ob;case"linkViaPopup":case"linkViaRedirect":return xb;case"reauthViaPopup":case"reauthViaRedirect":return Pb;default:ct(this.auth,"internal-error")}}resolve(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new wr(2e3,1e4);async function Nb(t,e,n){if(mt(t.app))return Promise.reject(Xe(t,"operation-not-supported-in-this-environment"));const r=Pi(t);Av(t,e,Rs);const i=nd(r,n);return new tn(r,"signInViaPopup",e,i).executeNotNull()}class tn extends rd{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const e=Ns();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Rb.get())};e()}}tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lb="pendingRedirect",Wr=new Map;class $b extends rd{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Wr.get(this.auth._key());if(!e){try{const r=await Db(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Wr.set(this.auth._key(),e)}return this.bypassAuthState||Wr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Db(t,e){const n=Fb(e),r=jb(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Mb(t,e){Wr.set(t._key(),e)}function jb(t){return yt(t._redirectPersistence)}function Fb(t){return Hr(Lb,t.config.apiKey,t.name)}async function Ub(t,e,n=!1){if(mt(t.app))return Promise.reject(on(t));const r=Pi(t),i=nd(r,e),s=await new $b(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vb=10*60*1e3;class Bb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!od(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vb&&this.cachedEventUids.clear(),this.cachedEventUids.has(wl(e))}saveEventToCache(e){this.cachedEventUids.add(wl(e)),this.lastProcessedEventTime=Date.now()}}function wl(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function od({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return od(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e={}){return $n(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gb=/^https?/;async function Kb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Wb(t);for(const n of e)try{if(Jb(n))return}catch{}ct(t,"unauthorized-domain")}function Jb(t){const e=Fo(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!Gb.test(n))return!1;if(zb.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=new wr(3e4,6e4);function Sl(){const t=at().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Qb(t){return new Promise((e,n)=>{var r,i,o;function s(){Sl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sl(),n(Xe(t,"network-request-failed"))},timeout:Yb.get()})}if(!((i=(r=at().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=at().gapi)===null||o===void 0)&&o.load)s();else{const a=nb("iframefcb");return at()[a]=()=>{gapi.load?s():n(Xe(t,"network-request-failed"))},eb(`${tb()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw zr=null,e})}let zr=null;function Xb(t){return zr=zr||Qb(t),zr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new wr(5e3,15e3),ey="__/auth/iframe",ty="emulator/auth/iframe",ny={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ry=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function iy(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cs(e,ty):`https://${t.config.authDomain}/${ey}`,r={apiKey:e.apiKey,appName:t.name,v:_r},i=ry.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${yr(r).slice(1)}`}async function oy(t){const e=await Xb(t),n=at().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:iy(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ny,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Xe(t,"network-request-failed"),a=at().setTimeout(()=>{o(s)},Zb.get());function l(){at().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ay=500,ly=600,cy="_blank",uy="http://localhost";class ql{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dy(t,e,n,r=ay,i=ly){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},sy),{width:r.toString(),height:i.toString(),top:o,left:s}),c=Pe().toLowerCase();n&&(a=Mu(c)?cy:n),Du(c)&&(e=e||uy,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[g,b])=>`${f}${g}=${b},`,"");if(Wv(c)&&a!=="_self")return fy(e||"",a),new ql(null);const d=window.open(e||"",a,u);W(d,t,"popup-blocked");try{d.focus()}catch{}return new ql(d)}function fy(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="__/auth/handler",py="emulator/auth/handler",gy=encodeURIComponent("fac");async function El(t,e,n,r,i,o){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_r,eventId:i};if(e instanceof Rs){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",vm(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(o||{}))s[u]=d}if(e instanceof Sr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(s.scopes=u.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${gy}=${encodeURIComponent(l)}`:"";return`${my(t)}?${yr(a).slice(1)}${c}`}function my({config:t}){return t.emulator?Cs(t,py):`https://${t.authDomain}/${hy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oo="webStorageSupport";class vy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qu,this._completeRedirectFn=Ub,this._overrideRedirectResult=Mb}async _openPopup(e,n,r,i){var o;wt((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await El(e,n,r,Fo(),i);return dy(e,s,Ns())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await El(e,n,r,Fo(),i);return _b(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(wt(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await oy(e),r=new Bb(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(oo,{type:oo},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[oo];s!==void 0&&n(!!s),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Kb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bu()||Ps()||Oi()}}const by=vy;var Il="@firebase/auth",Tl="1.7.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _y(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function wy(t){ar(new An("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;W(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Hu(t)},c=new Xv(r,i,o,l);return ib(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ar(new An("auth-internal",e=>{const n=Pi(e.getProvider("auth").getImmediate());return(r=>new yy(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Il,Tl,_y(t)),Sn(Il,Tl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sy=5*60,qy=wu("authIdTokenMaxAge")||Sy;let kl=null;const Ey=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qy)return;const i=n==null?void 0:n.token;kl!==i&&(kl=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Iy(t=vv()){const e=Iu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rb(t,{popupRedirectResolver:by,persistence:[Ab,vb,Qu]}),r=wu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const o=new URL(r,location.origin);if(location.origin===o.origin){const s=Ey(o.toString());hb(n,s,()=>s(n.currentUser)),fb(n,a=>s(a))}}const i=sm("auth");return i&&ob(n,`http://${i}`),n}function Ty(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Zv({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=Xe("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Ty().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});wy("Browser");const Wt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n},dt=t=>(vi("data-v-91b0998a"),t=t(),bi(),t),ky={class:"container p-0",style:{margin:"0px"}},Cy={class:"card p-2 shadow border-0 m-1"},Ay=dt(()=>m("h4",null,[m("strong",null,"We are a community of Indians Abroad")],-1)),Oy=dt(()=>m("p",{class:"arvo-regular"},"Join us, and let’s make the world a smaller, more connected place for Indians everywhere.",-1)),Py=dt(()=>m("button",{type:"button",class:"btn btn-outline-primary",style:{width:"100%"}},"Profile",-1)),xy=dt(()=>m("hr",null,null,-1)),Ry={class:"nav nav-pills flex-column mb-auto"},Ny=dt(()=>m("i",{class:"fa-regular fa-newspaper me-2",style:{color:"#337357"}},null,-1)),Ly={class:"nav-item"},$y=dt(()=>m("i",{class:"fa-regular fa-comments me-2",style:{color:"#EE4266"}},null,-1)),Dy=dt(()=>m("i",{class:"fa-solid fa-bookmark me-2",style:{color:"#FFD23F"}},null,-1)),My=dt(()=>m("i",{class:"fa-solid fa-handshake-angle me-2",style:{color:"#337357"}},null,-1)),jy=dt(()=>m("i",{class:"fa-solid fa-address-card me-2",style:{color:"#FFD23F"}},null,-1)),Fy=dt(()=>m("i",{class:"fa-solid fa-address-book me-2",style:{color:"#5E1675"}},null,-1)),Uy={__name:"NavBody",setup(t){const e=vr();let n=de(localStorage.getItem("auth-token"));const r=()=>{const o=new gt;Nb(Iy(),o).then(s=>{localStorage.setItem("name",s.user.displayName),localStorage.setItem("image",s.user.photoURL),localStorage.setItem("email",s.user.email),e.state.image=s.user.photoURL,fetch("https://test-am3oxfhvvq-em.a.run.app/google/login",{method:"POST",Allow:["GET","POST","OPTIONS"],headers:{"Content-type":"application/json"},body:JSON.stringify({token:s.user.accessToken})}).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{a.state==0&&(localStorage.setItem("auth-token",a.token),localStorage.setItem("role",a.role),alert("Logged In"),n.value=!0)}).catch(a=>{console.error("There was a problem with the fetch operation:",a)})})};function i(){localStorage.removeItem("auth-token"),localStorage.removeItem("role"),localStorage.removeItem("name"),localStorage.removeItem("image"),localStorage.removeItem("email"),n.value=null,e.state.image=null}return(o,s)=>{const a=ss("router-link");return U(),J("div",ky,[m("div",Cy,[Ay,Oy,D(n)?(U(),Ue(a,{key:0,to:"/profile"},{default:Le(()=>[Py]),_:1})):st("",!0),D(n)?(U(),J("button",{key:1,type:"button",class:"btn btn-outline-secondary mt-2",style:{width:"100%"},onClick:i},"Logout")):st("",!0),D(n)?st("",!0):(U(),J("button",{key:2,type:"button",class:"login-with-google-btn shadow",style:{width:"100%"},onClick:r}," Sign in with Google "))]),xy,m("ul",Ry,[m("li",null,[re(a,{to:"/",class:"nav-link link-body-emphasis"},{default:Le(()=>[Ny,pt(" News ")]),_:1})]),m("li",Ly,[re(a,{to:"/discusion",class:"nav-link link-body-emphasis"},{default:Le(()=>[$y,pt(" Discusions ")]),_:1})]),m("li",null,[D(n)?(U(),Ue(a,{key:0,to:"/saved",class:"nav-link link-body-emphasis"},{default:Le(()=>[Dy,pt(" Saved ")]),_:1})):st("",!0)]),m("li",null,[re(a,{to:"/help",class:"nav-link link-body-emphasis"},{default:Le(()=>[My,pt(" Help ")]),_:1})]),m("li",null,[re(a,{to:"/about",class:"nav-link link-body-emphasis"},{default:Le(()=>[jy,pt(" About ")]),_:1})]),m("li",null,[re(a,{to:"/",class:"nav-link link-body-emphasis"},{default:Le(()=>[Fy,pt(" Contact ")]),_:1})])])])}}},sd=Wt(Uy,[["__scopeId","data-v-91b0998a"]]),Er=t=>(vi("data-v-aa742de4"),t=t(),bi(),t),Vy={class:"navbar shadow fixed-top p-2 border-bottom",style:{"background-color":"#000000"}},By={class:"container align-items-center",style:{"grid-template-columns":"1fr 2fr"}},Hy={class:"d-flex align-items-center"},Wy=["src"],zy={key:1,class:"avatar-img rounded-circle",height:"38px",src:Vg,alt:"Bharat Guild"},Gy=Er(()=>m("label",{for:"checkbox",class:"checkbox-label"},[m("i",{class:"fas fa-moon"}),m("i",{class:"fas fa-sun"}),m("span",{class:"ball"})],-1)),Ky={class:"d-flex align-items-center"},Jy={class:"input-group-text me-3",style:{padding:"1px 6px"}},Yy=Er(()=>m("i",{class:"fa-solid fa-magnifying-glass"},null,-1)),Qy={class:"input-group-text me-3",style:{padding:"1px 6px"}},Xy=Er(()=>m("i",{class:"fa-solid fa-bell"},null,-1)),Zy={key:0,class:"rounded border-0","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar","aria-label":"Toggle navigation"},e_=Er(()=>m("i",{class:"fa-solid fa-bars"},null,-1)),t_=[e_],n_={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",style:{width:"60vw"}},r_=Er(()=>m("div",{class:"offcanvas-header"},[m("h4",{class:"offcanvas-title",id:"offcanvasNavbarLabel"},[m("strong",null,"Bharat Guild")]),m("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),i_={class:"offcanvas-body p-1"},o_={__name:"NavBar",setup(t){const e=vr(),{width:n,height:r}=gu(),i=Qg();ut(()=>{const l=localStorage.getItem("mode");l?(console.log(l),l=="dark"&&console.log(2)):i?(console.log(3),document.getElementById("checkbox").click()):(console.log(4),localStorage.setItem("mode","light"))});function o(){localStorage.setItem("mode","light");let l=document.querySelector("body");l.dataset.bsTheme="light"}function s(){localStorage.setItem("mode","dark");let l=document.querySelector("body");l.dataset.bsTheme="dark"}function a(){localStorage.getItem("mode")=="dark"?o():s()}return(l,c)=>{const u=ss("router-link");return U(),J("nav",Vy,[m("div",By,[m("div",Hy,[re(u,{to:"/",style:{"margin-right":"1rem"}},{default:Le(()=>[D(e).state.image?(U(),J("img",{key:0,class:"avatar-img rounded-circle",height:"38px",src:D(e).state.image,alt:"Bharat Guild"},null,8,Wy)):(U(),J("img",zy))]),_:1}),m("div",{class:"flex-shrink-0",style:{"margin-right":"1rem"}},[m("div",null,[m("input",{type:"checkbox",class:"checkbox",id:"checkbox",onClick:a}),Gy])])]),m("div",Ky,[m("span",Jy,[re(u,{to:"/search",class:"link-body-emphasis"},{default:Le(()=>[Yy]),_:1})]),m("span",Qy,[re(u,{to:"/notifications",class:"link-body-emphasis"},{default:Le(()=>[Xy]),_:1})]),D(n)<850?(U(),J("button",Zy,t_)):st("",!0),m("div",n_,[r_,m("div",i_,[re(sd)])])])])])}}},s_=Wt(o_,[["__scopeId","data-v-aa742de4"]]),a_={},l_={class:"container",style:{margin:"0px",width:"325px"}},c_=fs('<div class="card mb-3"><div class="card-header p-2 border-0 text-center"><h5 class="card-title mb-0">Latest News</h5></div><div class="card-body"><div class="list-group list-group-flush border-bottom scrollarea"><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a></div><div class="d-grid mt-3"><a class="btn btn-sm btn-primary-soft" href="#!">View more</a></div></div></div><div class="card"><div class="card-header p-2 border-0 text-center"><h5 class="card-title mb-0">Top Discussions</h5></div><div class="card-body"><div class="list-group list-group-flush border-bottom scrollarea"><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a><a href="#" class="list-group-item list-group-item-action p-1 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">List group item heading</strong><small>Wed</small></div><div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and date.</div></a></div><div class="d-grid mt-3"><a class="btn btn-sm btn-primary-soft" href="#!">View more</a></div></div></div>',2),u_=[c_];function d_(t,e){return U(),J("div",l_,u_)}const f_=Wt(a_,[["render",d_]]),h_={key:0,class:"d-flex justify-content-center m-auto"},p_={__name:"App",setup(t){const{width:e,height:n}=gu(),r=vr(),i=ws();let o=de(!0),s=de(0);return ut(async()=>{r.state.isDataLoaded==!1&&(await r.dispatch("getArticles"),await r.dispatch("getDiscusions"))}),Ve(i,(a,l)=>{o.value=!o.value,s.value+=1}),(a,l)=>(U(),J(Te,null,[(U(),Ue(s_,{key:D(o)})),D(e)>849?(U(),J("div",h_,[(U(),Ue(sd,{style:{"margin-top":"6rem",width:"250px"},key:D(o)})),(U(),Ue(D(Ro),{key:D(s),style:{width:"650px"}})),re(f_,{style:{"margin-top":"6rem"}})])):(U(),Ue(D(Ro),{key:D(s)}))],64))}},g_="modulepreload",m_=function(t){return"/IndiansAbroad/"+t},Cl={},He=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link");i=Promise.all(n.map(s=>{if(s=m_(s),s in Cl)return;Cl[s]=!0;const a=s.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!r)for(let d=o.length-1;d>=0;d--){const f=o[d];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":g_,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((d,f)=>{u.addEventListener("load",d),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})}))}return i.then(()=>e()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},v_=t=>(vi("data-v-28c39adc"),t=t(),bi(),t),b_={class:"row d-flex justify-content-center p-2"},y_={class:"btn-group",role:"group","aria-label":"Basic checkbox toggle button group"},__=v_(()=>m("p",{class:"text-center"},"Check content based on senstivity",-1)),w_={__name:"CheckBox",emits:["inFocus","filterData"],setup(t,{emit:e}){let n=de(!0),r=de(!0),i=de(!0),o=de(!0);const s=e;function a(){s("filterData",{v:n.value,p:r.value,r:i.value,o:o.value})}return(l,c)=>(U(),J("div",b_,[m("div",y_,[(U(),J("label",{class:Dt(["btn",{"btn-danger":D(n),"btn-outline-danger":!D(n)}]),onClick:c[0]||(c[0]=u=>{_e(n)?n.value=!D(n):n=!D(n),a()}),key:D(n)},"Voilent",2)),(U(),J("label",{class:Dt(["btn",{"btn-warning":D(r),"btn-outline-warning":!D(r)}]),onClick:c[1]||(c[1]=u=>{_e(r)?r.value=!D(r):r=!D(r),a()}),key:D(r)},"Political",2)),(U(),J("label",{class:Dt(["btn",{"btn-success":D(i),"btn-outline-success":!D(i)}]),onClick:c[2]||(c[2]=u=>{_e(i)?i.value=!D(i):i=!D(i),a()}),key:D(i)},"Religion",2)),(U(),J("label",{class:Dt(["btn",{"btn-primary":D(o),"btn-outline-primary":!D(o)}]),onClick:c[3]||(c[3]=u=>{_e(o)?o.value=!D(o):o=!D(o),a()}),key:D(o)},"Success",2))]),__]))}},S_=Wt(w_,[["__scopeId","data-v-28c39adc"]]),q_={},E_={id:"container1"},I_=fs('<div id="objects" data-v-fd68ca9b><a class="nav-link object" data-v-fd68ca9b>Germany</a><a class="nav-link object" href="#" data-v-fd68ca9b>Uk</a><a class="nav-link object" href="#" data-v-fd68ca9b>Russia</a><a class="nav-link object" href="#" data-v-fd68ca9b>Italy</a><a class="nav-link object" href="#" data-v-fd68ca9b>Australia</a><a class="nav-link object" href="#" data-v-fd68ca9b>Germany</a><a class="nav-link object" href="#" data-v-fd68ca9b>Uk</a><a class="nav-link object" href="#" data-v-fd68ca9b>Russia</a><a class="nav-link object" href="#" data-v-fd68ca9b>Italy</a><a class="nav-link object" href="#" data-v-fd68ca9b>Australia</a></div>',1),T_=[I_];function k_(t,e){return U(),J("div",E_,T_)}const C_=Wt(q_,[["render",k_],["__scopeId","data-v-fd68ca9b"]]),A_={},O_={class:"card","aria-hidden":"true"},P_=fs('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJztHLBqLX7gIZz4ZFSTq7ADz1hhicBg0gDuB7E4bAgQ&amp;s" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title placeholder-glow"><span class="placeholder col-6"></span></h5><p class="card-text placeholder-glow"><span class="placeholder col-7"></span><span class="placeholder col-4"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span><span class="placeholder col-8"></span></p><a class="btn btn-primary disabled placeholder col-6" aria-disabled="true"></a></div>',2),x_=[P_];function R_(t,e){return U(),J("div",O_,x_)}const Al=Wt(A_,[["render",R_]]),$s=t=>(vi("data-v-1fcbba42"),t=t(),bi(),t),N_={class:"d-flex gap-1 border-0 p-1 justify-content-start mb-0","aria-current":"true"},L_=$s(()=>m("img",{src:"https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e",alt:"twbs",width:"34",height:"34",class:"rounded-circle flex-shrink-0"},null,-1)),$_={class:""},D_=$s(()=>m("h6",{class:"card-title mb-0 lora-regular"},"Abhijeet Singh ",-1)),M_=$s(()=>m("span",{class:"text-body-secondary lora-regular",style:{"font-size":"12px"}},"Posted 9 days ago",-1)),j_={class:"remove-style"},F_=["innerHTML"],U_={__name:"CommentCard",props:{name:String,time:String,content:String},setup(t){return ut(()=>{var e=document.querySelectorAll(".remove-style, .remove-style *");e.forEach(function(n){n.removeAttribute("style")})}),(e,n)=>(U(),J("div",N_,[L_,m("div",$_,[D_,M_,m("div",j_,[m("p",{class:"mb-0 r p-1 ql-editor lora-regular",innerHTML:t.content},null,8,F_)])])]))}},Ol=Wt(U_,[["__scopeId","data-v-1fcbba42"]]);function ur(t){"@babel/helpers - typeof";return ur=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ur(t)}function Pl(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function xl(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Pl(Object(n),!0).forEach(function(r){V_(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Pl(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function V_(t,e,n){return e=B_(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function B_(t){var e=H_(t,"string");return ur(e)=="symbol"?e:String(e)}function H_(t,e){if(ur(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(ur(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function W_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;qi()?ut(t):e?t():gr(t)}var z_=0;function ad(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=de(!1),r=de(t),i=de(null),o=Qt.isClient()?window.document:void 0,s=e.document,a=s===void 0?o:s,l=e.immediate,c=l===void 0?!0:l,u=e.manual,d=u===void 0?!1:u,f=e.name,g=f===void 0?"style_".concat(++z_):f,b=e.id,q=b===void 0?void 0:b,R=e.media,k=R===void 0?void 0:R,x=e.nonce,j=x===void 0?void 0:x,H=e.props,K=H===void 0?{}:H,L=function(){},Q=function(X){var he=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(a){var N=xl(xl({},K),he),oe=N.name||g,Ee=N.id||q,Ke=N.nonce||j;i.value=a.querySelector('style[data-primevue-style-id="'.concat(oe,'"]'))||a.getElementById(Ee)||a.createElement("style"),i.value.isConnected||(r.value=X||t,Qt.setAttributes(i.value,{type:"text/css",id:Ee,media:k,nonce:Ke}),a.head.appendChild(i.value),Qt.setAttribute(i.value,"data-primevue-style-id",g),Qt.setAttributes(i.value,N)),!n.value&&(L=Ve(r,function(ye){i.value.textContent=ye},{immediate:!0}),n.value=!0)}},M=function(){!a||!n.value||(L(),Qt.isExist(i.value)&&a.head.removeChild(i.value),n.value=!1)};return c&&!d&&W_(Q),{id:q,name:g,css:r,unload:M,load:Q,isLoaded:es(n)}}function dr(t){"@babel/helpers - typeof";return dr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},dr(t)}function G_(t,e){return Q_(t)||Y_(t,e)||J_(t,e)||K_()}function K_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function J_(t,e){if(t){if(typeof t=="string")return Rl(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rl(t,e)}}function Rl(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Y_(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function Q_(t){if(Array.isArray(t))return t}function Nl(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function so(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nl(Object(n),!0).forEach(function(r){X_(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nl(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function X_(t,e,n){return e=Z_(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Z_(t){var e=ew(t,"string");return dr(e)=="symbol"?e:String(e)}function ew(t,e){if(dr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(dr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var tw=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: var(--scrollbar-width);
}
`,nw={},rw={},Ds={name:"base",css:tw,classes:nw,inlineStyles:rw,loadStyle:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.css?ad(this.css,so({name:this.name},e)):{}},getStyleSheet:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.css){var r=Object.entries(n).reduce(function(i,o){var s=G_(o,2),a=s[0],l=s[1];return i.push("".concat(a,'="').concat(l,'"'))&&i},[]).join(" ");return'<style type="text/css" data-primevue-style-id="'.concat(this.name,'" ').concat(r,">").concat(this.css).concat(e,"</style>")}return""},extend:function(e){return so(so({},this),{},{css:void 0},e)}};function fr(t){"@babel/helpers - typeof";return fr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fr(t)}function Ll(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function iw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ll(Object(n),!0).forEach(function(r){ow(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ll(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ow(t,e,n){return e=sw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function sw(t){var e=aw(t,"string");return fr(e)=="symbol"?e:String(e)}function aw(t,e){if(fr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(fr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var ao=Ds.extend({name:"common",loadGlobalStyle:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ad(e,iw({name:"global"},n))}});function hr(t){"@babel/helpers - typeof";return hr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hr(t)}function lw(t){return ud(t)||cw(t)||cd(t)||ld()}function cw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Lr(t,e){return ud(t)||uw(t,e)||cd(t,e)||ld()}function ld(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cd(t,e){if(t){if(typeof t=="string")return $l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $l(t,e)}}function $l(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function uw(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,s,a=[],l=!0,c=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw i}}return a}}function ud(t){if(Array.isArray(t))return t}function Dl(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function pe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Dl(Object(n),!0).forEach(function(r){Gr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Dl(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gr(t,e,n){return e=dw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dw(t){var e=fw(t,"string");return hr(e)=="symbol"?e:String(e)}function fw(t,e){if(hr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(hr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var hw={name:"BaseComponent",props:{pt:{type:Object,default:void 0},ptOptions:{type:Object,default:void 0},unstyled:{type:Boolean,default:void 0}},inject:{$parentInstance:{default:void 0}},watch:{isUnstyled:{immediate:!0,handler:function(e){if(!e){var n,r;ao.loadStyle({nonce:(n=this.$config)===null||n===void 0||(n=n.csp)===null||n===void 0?void 0:n.nonce}),this.$options.style&&this.$style.loadStyle({nonce:(r=this.$config)===null||r===void 0||(r=r.csp)===null||r===void 0?void 0:r.nonce})}}}},beforeCreate:function(){var e,n,r,i,o,s,a,l,c,u,d,f=(e=this.pt)===null||e===void 0?void 0:e._usept,g=f?(n=this.pt)===null||n===void 0||(n=n.originalValue)===null||n===void 0?void 0:n[this.$.type.name]:void 0,b=f?(r=this.pt)===null||r===void 0||(r=r.value)===null||r===void 0?void 0:r[this.$.type.name]:this.pt;(i=b||g)===null||i===void 0||(i=i.hooks)===null||i===void 0||(o=i.onBeforeCreate)===null||o===void 0||o.call(i);var q=(s=this.$config)===null||s===void 0||(s=s.pt)===null||s===void 0?void 0:s._usept,R=q?(a=this.$primevue)===null||a===void 0||(a=a.config)===null||a===void 0||(a=a.pt)===null||a===void 0?void 0:a.originalValue:void 0,k=q?(l=this.$primevue)===null||l===void 0||(l=l.config)===null||l===void 0||(l=l.pt)===null||l===void 0?void 0:l.value:(c=this.$primevue)===null||c===void 0||(c=c.config)===null||c===void 0?void 0:c.pt;(u=k||R)===null||u===void 0||(u=u[this.$.type.name])===null||u===void 0||(u=u.hooks)===null||u===void 0||(d=u.onBeforeCreate)===null||d===void 0||d.call(u)},created:function(){this._hook("onCreated")},beforeMount:function(){var e;Ds.loadStyle({nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce}),this._loadGlobalStyles(),this._hook("onBeforeMount")},mounted:function(){this._hook("onMounted")},beforeUpdate:function(){this._hook("onBeforeUpdate")},updated:function(){this._hook("onUpdated")},beforeUnmount:function(){this._hook("onBeforeUnmount")},unmounted:function(){this._hook("onUnmounted")},methods:{_hook:function(e){if(!this.$options.hostName){var n=this._usePT(this._getPT(this.pt,this.$.type.name),this._getOptionValue,"hooks.".concat(e)),r=this._useDefaultPT(this._getOptionValue,"hooks.".concat(e));n==null||n(),r==null||r()}},_mergeProps:function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return te.isFunction(e)?e.apply(void 0,r):ee.apply(void 0,r)},_loadGlobalStyles:function(){var e,n=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);te.isNotEmpty(n)&&ao.loadGlobalStyle(n,{nonce:(e=this.$config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})},_getHostInstance:function(e){return e?this.$options.hostName?e.$.type.name===this.$options.hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0},_getPropValue:function(e){var n;return this[e]||((n=this._getHostInstance(this))===null||n===void 0?void 0:n[e])},_getOptionValue:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=te.toFlatCase(n).split("."),o=i.shift();return o?te.isObject(e)?this._getOptionValue(te.getItemValue(e[Object.keys(e).find(function(s){return te.toFlatCase(s)===o})||""],r),i.join("."),r):void 0:te.getItemValue(e,r)},_getPTValue:function(){var e,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!0,s=/./g.test(r)&&!!i[r.split(".")[0]],a=this._getPropValue("ptOptions")||((e=this.$config)===null||e===void 0?void 0:e.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,f=o?s?this._useGlobalPT(this._getPTClassValue,r,i):this._useDefaultPT(this._getPTClassValue,r,i):void 0,g=s?void 0:this._getPTSelf(n,this._getPTClassValue,r,pe(pe({},i),{},{global:f||{}})),b=this._getPTDatasets(r);return c||!c&&g?d?this._mergeProps(d,f,g,b):pe(pe(pe({},f),g),b):pe(pe({},g),b)},_getPTSelf:function(){for(var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return ee(this._usePT.apply(this,[this._getPT(e,this.$name)].concat(r)),this._usePT.apply(this,[this.$_attrsPT].concat(r)))},_getPTDatasets:function(){var e,n,r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",i="data-pc-",o=r==="root"&&te.isNotEmpty((e=this.pt)===null||e===void 0?void 0:e["data-pc-section"]);return r!=="transition"&&pe(pe({},r==="root"&&pe(Gr({},"".concat(i,"name"),te.toFlatCase(o?(n=this.pt)===null||n===void 0?void 0:n["data-pc-section"]:this.$.type.name)),o&&Gr({},"".concat(i,"extend"),te.toFlatCase(this.$.type.name)))),{},Gr({},"".concat(i,"section"),te.toFlatCase(r)))},_getPTClassValue:function(){var e=this._getOptionValue.apply(this,arguments);return te.isString(e)||te.isArray(e)?{class:e}:e},_getPT:function(e){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,o=function(a){var l,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=i?i(a):a,d=te.toFlatCase(r),f=te.toFlatCase(n.$name);return(l=c?d!==f?u==null?void 0:u[d]:void 0:u==null?void 0:u[d])!==null&&l!==void 0?l:u};return e!=null&&e.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:o(e.originalValue),value:o(e.value)}:o(e,!0)},_usePT:function(e,n,r,i){var o=function(q){return n(q,r,i)};if(e!=null&&e.hasOwnProperty("_usept")){var s,a=e._usept||((s=this.$config)===null||s===void 0?void 0:s.ptOptions)||{},l=a.mergeSections,c=l===void 0?!0:l,u=a.mergeProps,d=u===void 0?!1:u,f=o(e.originalValue),g=o(e.value);return f===void 0&&g===void 0?void 0:te.isString(g)?g:te.isString(f)?f:c||!c&&g?d?this._mergeProps(d,f,g):pe(pe({},f),g):g}return o(e)},_useGlobalPT:function(e,n,r){return this._usePT(this.globalPT,e,n,r)},_useDefaultPT:function(e,n,r){return this._usePT(this.defaultPT,e,n,r)},ptm:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this._getPTValue(this.pt,e,pe(pe({},this.$params),n))},ptmi:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return ee(this.$_attrsNoPT,this.ptm(e,n))},ptmo:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this._getPTValue(e,n,pe({instance:this},r),!1)},cx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return this.isUnstyled?void 0:this._getOptionValue(this.$style.classes,e,pe(pe({},this.$params),n))},sx:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(n){var i=this._getOptionValue(this.$style.inlineStyles,e,pe(pe({},this.$params),r)),o=this._getOptionValue(ao.inlineStyles,e,pe(pe({},this.$params),r));return[o,i]}}},computed:{globalPT:function(){var e,n=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(r){return te.getItemValue(r,{instance:n})})},defaultPT:function(){var e,n=this;return this._getPT((e=this.$config)===null||e===void 0?void 0:e.pt,void 0,function(r){return n._getOptionValue(r,n.$name,pe({},n.$params))||te.getItemValue(r,pe({},n.$params))})},isUnstyled:function(){var e;return this.unstyled!==void 0?this.unstyled:(e=this.$config)===null||e===void 0?void 0:e.unstyled},$params:function(){var e=this._getHostInstance(this)||this.$parent;return{instance:this,props:this.$props,state:this.$data,attrs:this.$attrs,parent:{instance:e,props:e==null?void 0:e.$props,state:e==null?void 0:e.$data,attrs:e==null?void 0:e.$attrs},parentInstance:e}},$style:function(){return pe(pe({classes:void 0,inlineStyles:void 0,loadStyle:function(){},loadCustomStyle:function(){}},(this._getHostInstance(this)||{}).$style),this.$options.style)},$config:function(){var e;return(e=this.$primevue)===null||e===void 0?void 0:e.config},$name:function(){return this.$options.hostName||this.$.type.name},$_attrsPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=Lr(e,1),r=n[0];return r==null?void 0:r.startsWith("pt:")}).reduce(function(e,n){var r=Lr(n,2),i=r[0],o=r[1],s=i.split(":"),a=lw(s),l=a.slice(1);return l==null||l.reduce(function(c,u,d,f){return!c[u]&&(c[u]=d===f.length-1?o:{}),c[u]},e),e},{})},$_attrsNoPT:function(){return Object.entries(this.$attrs||{}).filter(function(e){var n=Lr(e,1),r=n[0];return!(r!=null&&r.startsWith("pt:"))}).reduce(function(e,n){var r=Lr(n,2),i=r[0],o=r[1];return e[i]=o,e},{})}}},pw=`
/*!
* Quill Editor v1.3.3
* https://quilljs.com/
* Copyright (c) 2014, Jason Chen
* Copyright (c) 2013, salesforce.com
*/
.ql-container {
    box-sizing: border-box;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    height: 100%;
    margin: 0px;
    position: relative;
}
.ql-container.ql-disabled .ql-tooltip {
    visibility: hidden;
}
.ql-container.ql-disabled .ql-editor ul[data-checked] > li::before {
    pointer-events: none;
}
.ql-clipboard {
    left: -100000px;
    height: 1px;
    overflow-y: hidden;
    position: absolute;
    top: 50%;
}
.ql-clipboard p {
    margin: 0;
    padding: 0;
}
.ql-editor {
    box-sizing: border-box;
    line-height: 1.42;
    height: 100%;
    outline: none;
    overflow-y: auto;
    padding: 12px 15px;
    tab-size: 4;
    -moz-tab-size: 4;
    text-align: left;
    white-space: pre-wrap;
    word-wrap: break-word;
}
.ql-editor > * {
    cursor: text;
}
.ql-editor p,
.ql-editor ol,
.ql-editor ul,
.ql-editor pre,
.ql-editor blockquote,
.ql-editor h1,
.ql-editor h2,
.ql-editor h3,
.ql-editor h4,
.ql-editor h5,
.ql-editor h6 {
    margin: 0;
    padding: 0;
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol,
.ql-editor ul {
    padding-left: 1.5rem;
}
.ql-editor ol > li,
.ql-editor ul > li {
    list-style-type: none;
}
.ql-editor ul > li::before {
    content: '\\2022';
}
.ql-editor ul[data-checked='true'],
.ql-editor ul[data-checked='false'] {
    pointer-events: none;
}
.ql-editor ul[data-checked='true'] > li *,
.ql-editor ul[data-checked='false'] > li * {
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before,
.ql-editor ul[data-checked='false'] > li::before {
    color: #777;
    cursor: pointer;
    pointer-events: all;
}
.ql-editor ul[data-checked='true'] > li::before {
    content: '\\2611';
}
.ql-editor ul[data-checked='false'] > li::before {
    content: '\\2610';
}
.ql-editor li::before {
    display: inline-block;
    white-space: nowrap;
    width: 1.2rem;
}
.ql-editor li:not(.ql-direction-rtl)::before {
    margin-left: -1.5rem;
    margin-right: 0.3rem;
    text-align: right;
}
.ql-editor li.ql-direction-rtl::before {
    margin-left: 0.3rem;
    margin-right: -1.5rem;
}
.ql-editor ol li:not(.ql-direction-rtl),
.ql-editor ul li:not(.ql-direction-rtl) {
    padding-left: 1.5rem;
}
.ql-editor ol li.ql-direction-rtl,
.ql-editor ul li.ql-direction-rtl {
    padding-right: 1.5rem;
}
.ql-editor ol li {
    counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
    counter-increment: list-0;
}
.ql-editor ol li:before {
    content: counter(list-0, decimal) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-increment: list-1;
}
.ql-editor ol li.ql-indent-1:before {
    content: counter(list-1, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-1 {
    counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-2 {
    counter-increment: list-2;
}
.ql-editor ol li.ql-indent-2:before {
    content: counter(list-2, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-2 {
    counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-3 {
    counter-increment: list-3;
}
.ql-editor ol li.ql-indent-3:before {
    content: counter(list-3, decimal) '. ';
}
.ql-editor ol li.ql-indent-3 {
    counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-4 {
    counter-increment: list-4;
}
.ql-editor ol li.ql-indent-4:before {
    content: counter(list-4, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-4 {
    counter-reset: list-5 list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-5 {
    counter-increment: list-5;
}
.ql-editor ol li.ql-indent-5:before {
    content: counter(list-5, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-5 {
    counter-reset: list-6 list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-6 {
    counter-increment: list-6;
}
.ql-editor ol li.ql-indent-6:before {
    content: counter(list-6, decimal) '. ';
}
.ql-editor ol li.ql-indent-6 {
    counter-reset: list-7 list-8 list-9;
}
.ql-editor ol li.ql-indent-7 {
    counter-increment: list-7;
}
.ql-editor ol li.ql-indent-7:before {
    content: counter(list-7, lower-alpha) '. ';
}
.ql-editor ol li.ql-indent-7 {
    counter-reset: list-8 list-9;
}
.ql-editor ol li.ql-indent-8 {
    counter-increment: list-8;
}
.ql-editor ol li.ql-indent-8:before {
    content: counter(list-8, lower-roman) '. ';
}
.ql-editor ol li.ql-indent-8 {
    counter-reset: list-9;
}
.ql-editor ol li.ql-indent-9 {
    counter-increment: list-9;
}
.ql-editor ol li.ql-indent-9:before {
    content: counter(list-9, decimal) '. ';
}
.ql-editor .ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 3rem;
}
.ql-editor li.ql-indent-1:not(.ql-direction-rtl) {
    padding-left: 4.5rem;
}
.ql-editor .ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 3rem;
}
.ql-editor li.ql-indent-1.ql-direction-rtl.ql-align-right {
    padding-right: 4.5rem;
}
.ql-editor .ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 6rem;
}
.ql-editor li.ql-indent-2:not(.ql-direction-rtl) {
    padding-left: 7.5rem;
}
.ql-editor .ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 6rem;
}
.ql-editor li.ql-indent-2.ql-direction-rtl.ql-align-right {
    padding-right: 7.5rem;
}
.ql-editor .ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 9rem;
}
.ql-editor li.ql-indent-3:not(.ql-direction-rtl) {
    padding-left: 10.5rem;
}
.ql-editor .ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 9rem;
}
.ql-editor li.ql-indent-3.ql-direction-rtl.ql-align-right {
    padding-right: 10.5rem;
}
.ql-editor .ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 12rem;
}
.ql-editor li.ql-indent-4:not(.ql-direction-rtl) {
    padding-left: 13.5rem;
}
.ql-editor .ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 12rem;
}
.ql-editor li.ql-indent-4.ql-direction-rtl.ql-align-right {
    padding-right: 13.5rem;
}
.ql-editor .ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 15rem;
}
.ql-editor li.ql-indent-5:not(.ql-direction-rtl) {
    padding-left: 16.5rem;
}
.ql-editor .ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 15rem;
}
.ql-editor li.ql-indent-5.ql-direction-rtl.ql-align-right {
    padding-right: 16.5rem;
}
.ql-editor .ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 18rem;
}
.ql-editor li.ql-indent-6:not(.ql-direction-rtl) {
    padding-left: 19.5rem;
}
.ql-editor .ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 18rem;
}
.ql-editor li.ql-indent-6.ql-direction-rtl.ql-align-right {
    padding-right: 19.5rem;
}
.ql-editor .ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 21rem;
}
.ql-editor li.ql-indent-7:not(.ql-direction-rtl) {
    padding-left: 22.5rem;
}
.ql-editor .ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 21rem;
}
.ql-editor li.ql-indent-7.ql-direction-rtl.ql-align-right {
    padding-right: 22.5rem;
}
.ql-editor .ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 24rem;
}
.ql-editor li.ql-indent-8:not(.ql-direction-rtl) {
    padding-left: 25.5rem;
}
.ql-editor .ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 24rem;
}
.ql-editor li.ql-indent-8.ql-direction-rtl.ql-align-right {
    padding-right: 25.5rem;
}
.ql-editor .ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 27rem;
}
.ql-editor li.ql-indent-9:not(.ql-direction-rtl) {
    padding-left: 28.5rem;
}
.ql-editor .ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 27rem;
}
.ql-editor li.ql-indent-9.ql-direction-rtl.ql-align-right {
    padding-right: 28.5rem;
}
.ql-editor .ql-video {
    display: block;
    max-width: 100%;
}
.ql-editor .ql-video.ql-align-center {
    margin: 0 auto;
}
.ql-editor .ql-video.ql-align-right {
    margin: 0 0 0 auto;
}
.ql-editor .ql-bg-black {
    background-color: #000;
}
.ql-editor .ql-bg-red {
    background-color: #e60000;
}
.ql-editor .ql-bg-orange {
    background-color: #f90;
}
.ql-editor .ql-bg-yellow {
    background-color: #ff0;
}
.ql-editor .ql-bg-green {
    background-color: #008a00;
}
.ql-editor .ql-bg-blue {
    background-color: #06c;
}
.ql-editor .ql-bg-purple {
    background-color: #93f;
}
.ql-editor .ql-color-white {
    color: #fff;
}
.ql-editor .ql-color-red {
    color: #e60000;
}
.ql-editor .ql-color-orange {
    color: #f90;
}
.ql-editor .ql-color-yellow {
    color: #ff0;
}
.ql-editor .ql-color-green {
    color: #008a00;
}
.ql-editor .ql-color-blue {
    color: #06c;
}
.ql-editor .ql-color-purple {
    color: #93f;
}
.ql-editor .ql-font-serif {
    font-family: Georgia, Times New Roman, serif;
}
.ql-editor .ql-font-monospace {
    font-family: Monaco, Courier New, monospace;
}
.ql-editor .ql-size-small {
    font-size: 0.75rem;
}
.ql-editor .ql-size-large {
    font-size: 1.5rem;
}
.ql-editor .ql-size-huge {
    font-size: 2.5rem;
}
.ql-editor .ql-direction-rtl {
    direction: rtl;
    text-align: inherit;
}
.ql-editor .ql-align-center {
    text-align: center;
}
.ql-editor .ql-align-justify {
    text-align: justify;
}
.ql-editor .ql-align-right {
    text-align: right;
}
.ql-editor.ql-blank::before {
    color: rgba(0, 0, 0, 0.6);
    content: attr(data-placeholder);
    font-style: italic;
    left: 15px;
    pointer-events: none;
    position: absolute;
    right: 15px;
}
.ql-snow.ql-toolbar:after,
.ql-snow .ql-toolbar:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow.ql-toolbar button,
.ql-snow .ql-toolbar button {
    background: none;
    border: none;
    cursor: pointer;
    display: inline-block;
    float: left;
    height: 24px;
    padding: 3px 5px;
    width: 28px;
}
.ql-snow.ql-toolbar button svg,
.ql-snow .ql-toolbar button svg {
    float: left;
    height: 100%;
}
.ql-snow.ql-toolbar button:active:hover,
.ql-snow .ql-toolbar button:active:hover {
    outline: none;
}
.ql-snow.ql-toolbar input.ql-image[type='file'],
.ql-snow .ql-toolbar input.ql-image[type='file'] {
    display: none;
}
.ql-snow.ql-toolbar button:hover,
.ql-snow .ql-toolbar button:hover,
.ql-snow.ql-toolbar button:focus,
.ql-snow .ql-toolbar button:focus,
.ql-snow.ql-toolbar button.ql-active,
.ql-snow .ql-toolbar button.ql-active,
.ql-snow.ql-toolbar .ql-picker-label:hover,
.ql-snow .ql-toolbar .ql-picker-label:hover,
.ql-snow.ql-toolbar .ql-picker-label.ql-active,
.ql-snow .ql-toolbar .ql-picker-label.ql-active,
.ql-snow.ql-toolbar .ql-picker-item:hover,
.ql-snow .ql-toolbar .ql-picker-item:hover,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-fill,
.ql-snow .ql-toolbar button:hover .ql-fill,
.ql-snow.ql-toolbar button:focus .ql-fill,
.ql-snow .ql-toolbar button:focus .ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: #06c;
}
.ql-snow.ql-toolbar button:hover .ql-stroke,
.ql-snow .ql-toolbar button:hover .ql-stroke,
.ql-snow.ql-toolbar button:focus .ql-stroke,
.ql-snow .ql-toolbar button:focus .ql-stroke,
.ql-snow.ql-toolbar button.ql-active .ql-stroke,
.ql-snow .ql-toolbar button.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: #06c;
}
@media (pointer: coarse) {
    .ql-snow.ql-toolbar button:hover:not(.ql-active),
    .ql-snow .ql-toolbar button:hover:not(.ql-active) {
        color: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-fill,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke.ql-fill {
        fill: #444;
    }
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke,
    .ql-snow.ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter,
    .ql-snow .ql-toolbar button:hover:not(.ql-active) .ql-stroke-miter {
        stroke: #444;
    }
}
.ql-snow {
    box-sizing: border-box;
}
.ql-snow * {
    box-sizing: border-box;
}
.ql-snow .ql-hidden {
    display: none;
}
.ql-snow .ql-out-bottom,
.ql-snow .ql-out-top {
    visibility: hidden;
}
.ql-snow .ql-tooltip {
    position: absolute;
    transform: translateY(10px);
}
.ql-snow .ql-tooltip a {
    cursor: pointer;
    text-decoration: none;
}
.ql-snow .ql-tooltip.ql-flip {
    transform: translateY(-10px);
}
.ql-snow .ql-formats {
    display: inline-block;
    vertical-align: middle;
}
.ql-snow .ql-formats:after {
    clear: both;
    content: '';
    display: table;
}
.ql-snow .ql-stroke {
    fill: none;
    stroke: #444;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
}
.ql-snow .ql-stroke-miter {
    fill: none;
    stroke: #444;
    stroke-miterlimit: 10;
    stroke-width: 2;
}
.ql-snow .ql-fill,
.ql-snow .ql-stroke.ql-fill {
    fill: #444;
}
.ql-snow .ql-empty {
    fill: none;
}
.ql-snow .ql-even {
    fill-rule: evenodd;
}
.ql-snow .ql-thin,
.ql-snow .ql-stroke.ql-thin {
    stroke-width: 1;
}
.ql-snow .ql-transparent {
    opacity: 0.4;
}
.ql-snow .ql-direction svg:last-child {
    display: none;
}
.ql-snow .ql-direction.ql-active svg:last-child {
    display: inline;
}
.ql-snow .ql-direction.ql-active svg:first-child {
    display: none;
}
.ql-snow .ql-editor h1 {
    font-size: 2rem;
}
.ql-snow .ql-editor h2 {
    font-size: 1.5rem;
}
.ql-snow .ql-editor h3 {
    font-size: 1.17rem;
}
.ql-snow .ql-editor h4 {
    font-size: 1rem;
}
.ql-snow .ql-editor h5 {
    font-size: 0.83rem;
}
.ql-snow .ql-editor h6 {
    font-size: 0.67rem;
}
.ql-snow .ql-editor a {
    text-decoration: underline;
}
.ql-snow .ql-editor blockquote {
    border-left: 4px solid #ccc;
    margin-bottom: 5px;
    margin-top: 5px;
    padding-left: 16px;
}
.ql-snow .ql-editor code,
.ql-snow .ql-editor pre {
    background-color: #f0f0f0;
    border-radius: 3px;
}
.ql-snow .ql-editor pre {
    white-space: pre-wrap;
    margin-bottom: 5px;
    margin-top: 5px;
    padding: 5px 10px;
}
.ql-snow .ql-editor code {
    font-size: 85%;
    padding: 2px 4px;
}
.ql-snow .ql-editor pre.ql-syntax {
    background-color: #23241f;
    color: #f8f8f2;
    overflow: visible;
}
.ql-snow .ql-editor img {
    max-width: 100%;
}
.ql-snow .ql-picker {
    color: #444;
    display: inline-block;
    float: left;
    font-size: 14px;
    font-weight: 500;
    height: 24px;
    position: relative;
    vertical-align: middle;
}
.ql-snow .ql-picker-label {
    cursor: pointer;
    display: inline-block;
    height: 100%;
    padding-left: 8px;
    padding-right: 2px;
    position: relative;
    width: 100%;
}
.ql-snow .ql-picker-label::before {
    display: inline-block;
    line-height: 22px;
}
.ql-snow .ql-picker-options {
    background-color: #fff;
    display: none;
    min-width: 100%;
    padding: 4px 8px;
    position: absolute;
    white-space: nowrap;
}
.ql-snow .ql-picker-options .ql-picker-item {
    cursor: pointer;
    display: block;
    padding-bottom: 5px;
    padding-top: 5px;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    color: #ccc;
    z-index: 2;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-fill {
    fill: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-label .ql-stroke {
    stroke: #ccc;
}
.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    display: block;
    margin-top: -1px;
    top: 100%;
    z-index: 1;
}
.ql-snow .ql-color-picker,
.ql-snow .ql-icon-picker {
    width: 28px;
}
.ql-snow .ql-color-picker .ql-picker-label,
.ql-snow .ql-icon-picker .ql-picker-label {
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-label svg,
.ql-snow .ql-icon-picker .ql-picker-label svg {
    right: 4px;
}
.ql-snow .ql-icon-picker .ql-picker-options {
    padding: 4px 0px;
}
.ql-snow .ql-icon-picker .ql-picker-item {
    height: 24px;
    width: 24px;
    padding: 2px 4px;
}
.ql-snow .ql-color-picker .ql-picker-options {
    padding: 3px 5px;
    width: 152px;
}
.ql-snow .ql-color-picker .ql-picker-item {
    border: 1px solid transparent;
    float: left;
    height: 16px;
    margin: 2px;
    padding: 0px;
    width: 16px;
}
.ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg {
    position: absolute;
    margin-top: -9px;
    right: 0;
    top: 50%;
    width: 18px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-label[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-label]:not([data-label=''])::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-label]:not([data-label=''])::before {
    content: attr(data-label);
}
.ql-snow .ql-picker.ql-header {
    width: 98px;
}
.ql-snow .ql-picker.ql-header .ql-picker-label::before,
.ql-snow .ql-picker.ql-header .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='1']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    content: 'Heading 1';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='2']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    content: 'Heading 2';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='3']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    content: 'Heading 3';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='4']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    content: 'Heading 4';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='5']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    content: 'Heading 5';
}
.ql-snow .ql-picker.ql-header .ql-picker-label[data-value='6']::before,
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    content: 'Heading 6';
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='1']::before {
    font-size: 2rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='2']::before {
    font-size: 1.5rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='3']::before {
    font-size: 1.17rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='4']::before {
    font-size: 1rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='5']::before {
    font-size: 0.83rem;
}
.ql-snow .ql-picker.ql-header .ql-picker-item[data-value='6']::before {
    font-size: 0.67rem;
}
.ql-snow .ql-picker.ql-font {
    width: 108px;
}
.ql-snow .ql-picker.ql-font .ql-picker-label::before,
.ql-snow .ql-picker.ql-font .ql-picker-item::before {
    content: 'Sans Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='serif']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    content: 'Serif';
}
.ql-snow .ql-picker.ql-font .ql-picker-label[data-value='monospace']::before,
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    content: 'Monospace';
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='serif']::before {
    font-family: Georgia, Times New Roman, serif;
}
.ql-snow .ql-picker.ql-font .ql-picker-item[data-value='monospace']::before {
    font-family: Monaco, Courier New, monospace;
}
.ql-snow .ql-picker.ql-size {
    width: 98px;
}
.ql-snow .ql-picker.ql-size .ql-picker-label::before,
.ql-snow .ql-picker.ql-size .ql-picker-item::before {
    content: 'Normal';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='small']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    content: 'Small';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='large']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    content: 'Large';
}
.ql-snow .ql-picker.ql-size .ql-picker-label[data-value='huge']::before,
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    content: 'Huge';
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='small']::before {
    font-size: 10px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='large']::before {
    font-size: 18px;
}
.ql-snow .ql-picker.ql-size .ql-picker-item[data-value='huge']::before {
    font-size: 32px;
}
.ql-snow .ql-color-picker.ql-background .ql-picker-item {
    background-color: #fff;
}
.ql-snow .ql-color-picker.ql-color .ql-picker-item {
    background-color: #000;
}
.ql-toolbar.ql-snow {
    border: 1px solid #ccc;
    box-sizing: border-box;
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    padding: 8px;
}
.ql-toolbar.ql-snow .ql-formats {
    margin-right: 15px;
}
.ql-toolbar.ql-snow .ql-picker-label {
    border: 1px solid transparent;
}
.ql-toolbar.ql-snow .ql-picker-options {
    border: 1px solid transparent;
    box-shadow: rgba(0, 0, 0, 0.2) 0 2px 8px;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-label {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-picker.ql-expanded .ql-picker-options {
    border-color: #ccc;
}
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item.ql-selected,
.ql-toolbar.ql-snow .ql-color-picker .ql-picker-item:hover {
    border-color: #000;
}
.ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 0px;
}
.ql-snow .ql-tooltip {
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0px 0px 5px #ddd;
    color: #444;
    padding: 5px 12px;
    white-space: nowrap;
}
.ql-snow .ql-tooltip::before {
    content: 'Visit URL:';
    line-height: 26px;
    margin-right: 8px;
}
.ql-snow .ql-tooltip input[type='text'] {
    display: none;
    border: 1px solid #ccc;
    font-size: 13px;
    height: 26px;
    margin: 0px;
    padding: 3px 5px;
    width: 170px;
}
.ql-snow .ql-tooltip a.ql-preview {
    display: inline-block;
    max-width: 200px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    vertical-align: top;
}
.ql-snow .ql-tooltip a.ql-action::after {
    border-right: 1px solid #ccc;
    content: 'Edit';
    margin-left: 16px;
    padding-right: 8px;
}
.ql-snow .ql-tooltip a.ql-remove::before {
    content: 'Remove';
    margin-left: 8px;
}
.ql-snow .ql-tooltip a {
    line-height: 26px;
}
.ql-snow .ql-tooltip.ql-editing a.ql-preview,
.ql-snow .ql-tooltip.ql-editing a.ql-remove {
    display: none;
}
.ql-snow .ql-tooltip.ql-editing input[type='text'] {
    display: inline-block;
}
.ql-snow .ql-tooltip.ql-editing a.ql-action::after {
    border-right: 0px;
    content: 'Save';
    padding-right: 0px;
}
.ql-snow .ql-tooltip[data-mode='link']::before {
    content: 'Enter link:';
}
.ql-snow .ql-tooltip[data-mode='formula']::before {
    content: 'Enter formula:';
}
.ql-snow .ql-tooltip[data-mode='video']::before {
    content: 'Enter video:';
}
.ql-snow a {
    color: #06c;
}
.ql-container.ql-snow {
    border: 1px solid #ccc;
}
`,gw={root:"p-editor-container",toolbar:"p-editor-toolbar",content:"p-editor-content"},Ml=Ds.extend({name:"editor",css:pw,classes:gw}),mw={name:"BaseEditor",extends:hw,props:{modelValue:String,placeholder:String,readonly:Boolean,formats:Array,editorStyle:null,modules:null},style:Ml,provide:function(){return{$parentInstance:this}},beforeMount:function(){var e;Ml.loadStyle({nonce:(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce})}};function pr(t){"@babel/helpers - typeof";return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},pr(t)}function jl(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function vw(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?jl(Object(n),!0).forEach(function(r){bw(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):jl(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function bw(t,e,n){return e=yw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function yw(t){var e=_w(t,"string");return pr(e)=="symbol"?e:String(e)}function _w(t,e){if(pr(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(pr(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Fl=function(){try{return window.Quill}catch{return null}}(),dd={name:"Editor",extends:mw,inheritAttrs:!1,emits:["update:modelValue","text-change","selection-change","load"],data:function(){return{reRenderColorKey:0}},quill:null,watch:{modelValue:function(e,n){e!==n&&this.quill&&!this.quill.hasFocus()&&(this.reRenderColorKey++,this.renderValue(e))},readonly:function(){this.handleReadOnlyChange()}},mounted:function(){var e=this,n={modules:vw({toolbar:this.$refs.toolbarElement},this.modules),readOnly:this.readonly,theme:"snow",formats:this.formats,placeholder:this.placeholder};Fl?(this.quill=new Fl(this.$refs.editorElement,n),this.initQuill(),this.handleLoad()):He(()=>import("./quill-CyBI07AH.js").then(r=>r.q),__vite__mapDeps([])).then(function(r){r&&Qt.isExist(e.$refs.editorElement)&&(r.default?e.quill=new r.default(e.$refs.editorElement,n):e.quill=new r(e.$refs.editorElement,n),e.initQuill())}).then(function(){e.handleLoad()})},beforeUnmount:function(){this.quill=null},methods:{renderValue:function(e){this.quill&&(e?this.quill.setContents(this.quill.clipboard.convert(e)):this.quill.setText(""))},initQuill:function(){var e=this;this.renderValue(this.modelValue),this.quill.on("text-change",function(n,r,i){if(i==="user"){var o=e.$refs.editorElement.children[0].innerHTML,s=e.quill.getText().trim();o==="<p><br></p>"&&(o=""),e.$emit("update:modelValue",o),e.$emit("text-change",{htmlValue:o,textValue:s,delta:n,source:i,instance:e.quill})}}),this.quill.on("selection-change",function(n,r,i){var o=e.$refs.editorElement.children[0].innerHTML,s=e.quill.getText().trim();e.$emit("selection-change",{htmlValue:o,textValue:s,range:n,oldRange:r,source:i,instance:e.quill})})},handleLoad:function(){this.quill&&this.quill.getModule("toolbar")&&this.$emit("load",{instance:this.quill})},handleReadOnlyChange:function(){this.quill&&this.quill.enable(!this.readonly)}}};function ww(t,e,n,r,i,o){return U(),J("div",ee({class:t.cx("root")},t.ptmi("root")),[m("div",ee({ref:"toolbarElement",class:t.cx("toolbar")},t.ptm("toolbar")),[Cc(t.$slots,"toolbar",{},function(){return[m("span",ee({class:"ql-formats"},t.ptm("formats")),[m("select",ee({class:"ql-header",defaultValue:"0"},t.ptm("header")),[m("option",ee({value:"1"},t.ptm("option")),"Heading",16),m("option",ee({value:"2"},t.ptm("option")),"Subheading",16),m("option",ee({value:"0"},t.ptm("option")),"Normal",16)],16),m("select",ee({class:"ql-font"},t.ptm("font")),[m("option",zd(Uc(t.ptm("option"))),null,16),m("option",ee({value:"serif"},t.ptm("option")),null,16),m("option",ee({value:"monospace"},t.ptm("option")),null,16)],16)],16),m("span",ee({class:"ql-formats"},t.ptm("formats")),[m("button",ee({class:"ql-bold",type:"button"},t.ptm("bold")),null,16),m("button",ee({class:"ql-italic",type:"button"},t.ptm("italic")),null,16),m("button",ee({class:"ql-underline",type:"button"},t.ptm("underline")),null,16)],16),(U(),J("span",ee({key:i.reRenderColorKey,class:"ql-formats"},t.ptm("formats")),[m("select",ee({class:"ql-color"},t.ptm("color")),null,16),m("select",ee({class:"ql-background"},t.ptm("background")),null,16)],16)),m("span",ee({class:"ql-formats"},t.ptm("formats")),[m("button",ee({class:"ql-list",value:"ordered",type:"button"},t.ptm("list")),null,16),m("button",ee({class:"ql-list",value:"bullet",type:"button"},t.ptm("list")),null,16),m("select",ee({class:"ql-align"},t.ptm("select")),[m("option",ee({defaultValue:""},t.ptm("option")),null,16),m("option",ee({value:"center"},t.ptm("option")),null,16),m("option",ee({value:"right"},t.ptm("option")),null,16),m("option",ee({value:"justify"},t.ptm("option")),null,16)],16)],16),m("span",ee({class:"ql-formats"},t.ptm("formats")),[m("button",ee({class:"ql-link",type:"button"},t.ptm("link")),null,16),m("button",ee({class:"ql-image",type:"button"},t.ptm("image")),null,16),m("button",ee({class:"ql-code-block",type:"button"},t.ptm("codeBlock")),null,16)],16),m("span",ee({class:"ql-formats"},t.ptm("formats")),[m("button",ee({class:"ql-clean",type:"button"},t.ptm("clean")),null,16)],16)]})],16),m("div",ee({ref:"editorElement",class:t.cx("content"),style:t.editorStyle},t.ptm("content")),null,16)],16)}dd.render=ww;const Sw={class:"p-2"},qw=m("div",{style:{padding:"10px 8px"},class:"d-flex justify-content-between"},[m("h3",{class:"p-1 barlow-semibold"},"Comments"),m("button",{class:"button bg-success-subtle border-0 rounded p-2","data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Add To Discussion")],-1),Ew={class:"list-group list-group-flush",style:{"margin-bottom":"2rem"}},Iw={class:""},Tw={class:"col d-flex flex-column position-static"},kw={class:"d-flex justify-content-between ms-5"},Cw={class:""},Aw={class:"border-0 bg-transparent"},Ow={key:0,class:"fa-solid fa-heart p-1",style:{color:"#ea3e13"}},Pw=m("small",{class:"opacity-75 text-nowrap p-1"},"100",-1),xw=["onClick","href","aria-controls"],Rw=m("i",{class:"fa-regular fa-comment ms-1"},null,-1),Nw=m("small",{class:"opacity-75 text-nowrap p-1"},"100",-1),Lw=[Rw,Nw],$w=["onClick"],Dw=["id"],Mw={class:"col d-flex flex-column position-static"},jw={class:"d-flex justify-content-between ms-5"},Fw={class:""},Uw={class:"border-0 bg-transparent"},Vw={key:0,class:"fa-solid fa-heart p-1",style:{color:"#ea3e13"}},Bw=m("small",{class:"opacity-75 text-nowrap p-1"},"100",-1),Hw=["onClick"],Ww={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},zw={class:"modal-dialog mt-5"},Gw={class:"modal-content"},Kw={class:"modal-body"},Jw={class:"alert alert-warning alert-dismissible m-0 p-1 mb-1",role:"alert",key:"alert"},Yw={class:"ms-1"},Qw=m("span",{class:"ql-formats"},[m("select",{class:"ql-font"}),m("select",{class:"ql-size"})],-1),Xw=m("span",{class:"ql-formats"},[m("button",{class:"ql-bold"}),m("button",{class:"ql-italic"})],-1),Zw=m("span",{class:"ql-formats"},[m("button",{class:"ql-list",value:"ordered"}),m("button",{class:"ql-list",value:"bullet"})],-1),e0=m("span",{class:"ql-formats"},[m("button",{class:"ql-video"}),m("button",{class:"ql-link"}),m("button",{class:"ql-clean"})],-1),t0=m("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1),n0={__name:"CommentSection",props:["id"],setup(t){const e=t;let n=de([]),r=de(""),i=de(""),o=de(-1),s=de(!0);de("");function a(u,d){r.value=u,o.value=d,s.value=!1}ut(async()=>{const u=`https://test-am3oxfhvvq-em.a.run.app/article/comments/${e.id}`,d=await fetch(u,{method:"GET",Allow:["GET","POST"],headers:{"Content-Type":"application/json"}}),f=await d.json();if(d.ok){for(const g of f)n.value.push({id:g.id,content:g.content,likes_count:g.likes_count,username:g.username,image:g.image,replies:[]});console.log(n)}});async function l(){if(l.value=="")alert("type first");else{const d=await fetch("https://test-am3oxfhvvq-em.a.run.app/comment",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({article:e.id,parent:o.value,content:i.value})});await d.json(),d.ok&&(o!=-1?n.value.filter(f=>f.id==o)[0].replies.push({content:i.value,likes_count:0,username:localStorage.getItem("name"),image:localStorage.getItem("image")}):n.value.push({id:e.id,content:i.value,likes_count:0,username:localStorage.getItem("name"),image:localStorage.getItem("image")}))}}async function c(u){const d=await fetch(`https://test-am3oxfhvvq-em.a.run.app/nested/comments/${u}`,{method:"GET",headers:{"Content-type":"application/json"}}),f=await d.json();d.ok&&(n.value.filter(g=>g.id==u)[0].replies=f)}return(u,d)=>(U(),J("div",Sw,[qw,m("ul",Ew,[(U(!0),J(Te,null,_o(D(n),(f,g)=>(U(),J("li",{class:"list-group-item mt-2 p-1",key:g},[m("div",Iw,[m("div",null,[m("div",Tw,[re(Ol,{name:f.username,time:"2 days ago",content:f.content},null,8,["name","content"]),m("div",kw,[m("div",Cw,[m("button",Aw,[(U(),J("i",Ow)),Pw]),m("button",{class:"border-0 bg-transparent",onClick:b=>c(f.id),"data-bs-toggle":"collapse",href:`#nested${f.id}`,"aria-expanded":"false","aria-controls":`nested${f.id}`},Lw,8,xw)]),m("small",{class:"opacity-75 text-nowrap",onClick:b=>a(f.username,f.id),"data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Reply",8,$w)]),m("div",{class:"collapse",id:`nested${f.id}`},[(U(!0),J(Te,null,_o(f.replies,b=>(U(),J("div",{class:"card-body ms-2 mt-2",style:{padding:"12px"},key:b.content},[m("div",null,[m("div",Mw,[re(Ol,{name:b.username,time:"2 days ago",content:b.content},null,8,["name","content"]),m("div",jw,[m("div",Fw,[m("button",Uw,[(U(),J("i",Vw)),Bw])]),m("small",{class:"opacity-75 text-nowrap",onClick:q=>a(f.username,f.id),"data-bs-toggle":"modal","data-bs-target":"#exampleModal"},"Reply",8,Hw)])])])]))),128))],8,Dw)])])])]))),128))]),m("div",Ww,[m("div",zw,[m("div",Gw,[m("div",Kw,[D(s)?st("",!0):(U(),J("div",Jw,[m("span",Yw,"Replying to "+Dr(D(r)),1),m("span",{class:"btn-close p-2",onClick:d[0]||(d[0]=f=>{_e(s)?s.value=!0:s=!0,_e(r)?r.value="":r="",_e(o)?o.value=-1:o=-1})})])),re(D(dd),{modelValue:D(i),"onUpdate:modelValue":d[1]||(d[1]=f=>_e(i)?i.value=f:i=f),editorStyle:"height: 25vh;"},{toolbar:Le(()=>[Qw,Xw,Zw,e0]),_:1},8,["modelValue"])]),m("div",{class:"modal-footer"},[t0,m("button",{type:"button",class:"btn btn-primary",onClick:l},"Comment")])])])])]))}},r0={},i0={"data-bs-toggle":"modal","data-bs-target":"#exampleModal"},o0=m("div",{class:"modal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",role:"dialog"},[m("div",{class:"modal-dialog",role:"document"},[m("div",{class:"modal-content rounded-3 shadow"},[m("div",{class:"modal-body p-4 text-center"},[m("h5",{class:"mb-0"},"Login Required!"),m("p",{class:"mb-0"},"You can always change your mind in your account settings.")]),m("div",{class:"modal-footer flex-nowrap p-0"},[m("button",{type:"button",class:"btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0 border-end"},[m("strong",null,"Login")]),m("button",{type:"button",class:"btn btn-lg btn-link fs-6 text-decoration-none col-6 py-3 m-0 rounded-0","data-bs-dismiss":"modal"},"Close")])])])],-1);function s0(t,e){return U(),J(Te,null,[m("div",i0,[Cc(t.$slots,"default")]),o0],64)}const a0=Wt(r0,[["render",s0]]),l0={class:"card mb-3 shadow-lg",style:{"max-width":"95%"}},c0={class:"card-header"},u0={class:"p-1 bg-info-subtle rounded-4"},d0=["src"],f0=["src"],h0={class:"card-body"},p0={class:"barlow-semibold"},g0={class:"card-text barlow-regular"},m0=m("br",null,null,-1),v0={class:"d-flex justify-content-between"},b0=["data-bs-target","aria-controls"],y0=["id"],_0={class:"offcanvas-body small",style:{padding:"0"}},w0=m("i",{class:"fa-regular fa-bookmark p-2 fa-lg"},null,-1),S0={__name:"NewsContent",props:{title:String,image:String,content:String,source:String,category:String,id:Number,has_liked:Boolean,has_saved:Boolean},setup(t){const e=vr();ws();let n=de(!1),r=localStorage.getItem("auth-token");async function i(a){e.state.articles.filter(l=>l.id==a)[0].has_liked=!e.state.articles.filter(l=>l.id==a)[0].has_liked,await e.dispatch("likeArticle",a).then(()=>{})}async function o(a){e.state.articles.filter(l=>l.id==a)[0].has_saved=!e.state.articles.filter(l=>l.id==a)[0].has_saved,await e.dispatch("saveArticle",a).then(()=>{})}function s(){navigator.share?navigator.share({text:title,url:`https://abhijatain.github.io/Indians/article/${id}`,title:"Bharat Guild"}):(navigator.clipboard.writeText(`https://abhijatain.github.io/Indians/article/${id}`),alert("Link Copied"))}return(a,l)=>{const c=ss("router-link");return U(),J("div",l0,[m("div",c0,[m("strong",u0,Dr(t.category),1)]),t.category=="stats"?(U(),J("img",{key:0,src:t.image,class:"card-img"},null,8,d0)):(U(),J("iframe",{key:1,style:{height:"30vh"},class:"embed-responsive-item",src:t.image,allowfullscreen:""},null,8,f0)),m("div",h0,[m("h3",p0,Dr(t.title),1),m("p",g0,[pt(Dr(t.content)+" ",1),re(c,{to:`article/${t.id}/${t.title}`},{default:Le(()=>[pt("Read More")]),_:1},8,["to"])]),m0,m("div",v0,[m("div",null,[t.has_liked?(U(),J("i",{key:0,class:"fa-solid fa-heart p-2 fa-lg",onClick:l[0]||(l[0]=u=>i(t.id)),style:{color:"#FB6D48"}})):(U(),J("i",{key:1,class:"fa-regular fa-heart p-2 fa-lg",onClick:l[1]||(l[1]=u=>i(t.id))})),m("i",{"data-bs-toggle":"offcanvas","data-bs-target":`#${t.id}`,"aria-controls":t.id,class:"fa-regular fa-comment fa-lg p-2",onClick:l[2]||(l[2]=u=>_e(n)?n.value=!D(n):n=!D(n))},null,8,b0),m("div",{class:"offcanvas offcanvas-bottom",tabindex:"-1",id:t.id,"aria-labelledby":"offcanvasBottomLabel",style:{height:"60vh"}},[m("div",_0,[D(n)?(U(),Ue(n0,{key:0,id:t.id},null,8,["id"])):st("",!0)])],8,y0),m("i",{class:"fa-solid fa-share p-2 fa-lg",onClick:l[3]||(l[3]=u=>s())})]),m("div",null,[D(r)?t.has_saved?(U(),J("i",{key:1,class:"fa-solid fa-bookmark p-2 fa-lg",onClick:l[4]||(l[4]=u=>o(t.id))})):(U(),J("i",{key:2,class:"fa-regular fa-bookmark p-2 fa-lg",onClick:l[5]||(l[5]=u=>o(t.id))})):(U(),Ue(a0,{key:0},{default:Le(()=>[w0]),_:1}))])])])])}}},q0={style:{"margin-top":"4rem"}},E0={class:"container"},I0={class:"row d-flex justify-content-center"},T0={key:0,class:"container"},k0={class:"row d-flex justify-content-center"},C0={class:"card mb-5 shadow-lg",style:{"max-width":"95%"}},A0={class:"card mb-5 shadow-lg",style:{"max-width":"95%"}},O0={__name:"ArticleCard",setup(t){const e=vr();let n=de([]),r=de([]);const i=ws();let o=de(!1);ut(async()=>{function a(){e.state.isDataLoaded&&(console.log(e.state.articles),clearInterval(l),o.value=!0)}const l=setInterval(a,50)});function s(a){n.value=r.value,a.v==!1&&(n.value=n.value.filter(l=>l.category!="voilent")),a.p==!1&&(n.value=n.value.filter(l=>l.category!="political")),a.r==!1&&(n.value=n.value.filter(l=>l.category!="religion")),a.o==!1&&(n.value=n.value.filter(l=>l.category!="stats"))}return(a,l)=>(U(),J("div",q0,[m("div",E0,[D(i).params.id=="all"||!D(i).params.id?(U(),Ue(C_,{key:0})):st("",!0),D(i).params.id=="all"||!D(i).params.id?(U(),Ue(S_,{key:1,onFilterData:l[0]||(l[0]=c=>s(c))})):st("",!0),m("div",I0,[(U(!0),J(Te,null,_o(D(e).state.articles,(c,u)=>(U(),Ue(S0,{key:u,title:c.title,content:c.summary,source:c.source,image:c.youtube,id:c.id,has_liked:c.has_liked,has_saved:c.has_saved,category:c.category},null,8,["title","content","source","image","id","has_liked","has_saved","category"]))),128))])]),D(o)?st("",!0):(U(),J("div",T0,[m("div",k0,[m("div",C0,[re(Al)]),m("div",A0,[re(Al)])])]))]))}},Ul={__name:"HomeView",setup(t){return(e,n)=>(U(),J("main",null,[re(O0)]))}},P0=Fg({history:mg("/IndiansAbroad/"),routes:[{path:"/",name:"home",component:Ul},{path:"/profile",name:"profile",component:()=>He(()=>import("./ProfileView-7pFOlA2H.js"),__vite__mapDeps([]))},{path:"/admin",name:"admin",component:()=>He(()=>import("./AdminView-BMwYNf9r.js"),__vite__mapDeps([0,1]))},{path:"/search/:content",name:"search",component:()=>He(()=>import("./SearchView-DKbZ2sh0.js"),__vite__mapDeps([2,3]))},{path:"/about",name:"about",component:()=>He(()=>import("./AboutView-Cyd1yY-N.js"),__vite__mapDeps([]))},{path:"/saved",name:"saved",component:()=>He(()=>import("./SavedView-DSvzoBnl.js"),__vite__mapDeps([4,5]))},{path:"/search",name:"search",component:()=>He(()=>import("./SearchView-DKbZ2sh0.js"),__vite__mapDeps([2,3]))},{path:"/article/:id/:title",name:"article",component:Ul},{path:"/discusion",name:"discusion",component:()=>He(()=>import("./DiscusionView-Dztaw42z.js"),__vite__mapDeps([6,7,8,3]))},{path:"/add/discussion",name:"add",component:()=>He(()=>import("./AddView-B5uVcq2Y.js"),__vite__mapDeps([9,1,10]))},{path:"/discusion/:id/:title",name:"single",props:!0,component:()=>He(()=>import("./SingleView-BBEZjpvV.js"),__vite__mapDeps([11,12]))},{path:"/notifications",name:"notfications",component:()=>He(()=>import("./NotificationView-DnC2TSft.js"),__vite__mapDeps([]))},{path:"/help",name:"help",component:()=>He(()=>import("./HelpView-C0b_XBfb.js"),__vite__mapDeps([13,7]))}]}),x0=jp({state(){return{image:null,articles:[],discusions:[],token:localStorage.getItem("auth-token"),isDataLoaded:!1,isDiscusionLoaded:!1}},mutations:{add_articles(t,e){t.articles=e},add_discusions(t,e){t.discusions=e},like_discusion(t,e){t.discusions.filter(n=>n.id==e)[0].has_liked=!t.discusions.filter(n=>n.id==e)[0].has_liked},save_discusion(t,e){t.discusions.filter(n=>n.id==e)[0].has_saved=!t.discusions.filter(n=>n.id==e)[0].has_saved}},actions:{async getArticles({commit:t,state:e}){const n=await fetch("https://test-am3oxfhvvq-em.a.run.app/api/article/all",{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":e.token,"Content-Type":"application/json"}}),r=await n.json();n.ok&&(t("add_articles",r),e.isDataLoaded=!0)},async likeArticle({commit:t,state:e},n){await fetch("https://test-am3oxfhvvq-em.a.run.app/like/article",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":e.token,"Content-type":"application/json"},body:JSON.stringify({id:n})})},async saveArticle({commit:t,state:e},n){await fetch("https://test-am3oxfhvvq-em.a.run.app/save",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":e.token,"Content-type":"application/json"},body:JSON.stringify({id:n})})},async getDiscusions({commit:t,state:e}){const n=await fetch("https://test-am3oxfhvvq-em.a.run.app/api/discusion/all",{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":e.token,"Content-Type":"application/json"}}),r=await n.json();n.ok&&(t("add_discusions",r),e.isDiscusionLoaded=!0)},async likeDiscusion({commit:t,state:e},n){await fetch("https://test-am3oxfhvvq-em.a.run.app/like/discusion",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":e.token,"Content-type":"application/json"},body:JSON.stringify({id:n})}),t("like_discusion",n)},async saveDiscusion({commit:t,state:e},n){await fetch("https://test-am3oxfhvvq-em.a.run.app/save/discusion",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":e.token,"Content-type":"application/json"},body:JSON.stringify({id:n})}),t("save_discusion",n)}},getters:{getCount(t){return t.articles}}});var R0="firebase",N0="10.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Sn(R0,N0,"app");const L0={apiKey:"AIzaSyDDvzYMAuIceDytcmOZ6Bf28MtjrEFcOjk",authDomain:"bharat-guild-f02d0.firebaseapp.com",projectId:"bharat-guild-f02d0",storageBucket:"bharat-guild-f02d0.appspot.com",messagingSenderId:"724548591779",appId:"1:724548591779:web:da77bee042632d34f71f16",measurementId:"G-H9XNY6PEY3"};Tu(L0);const Ni=sp(p_);Ni.use(x0);Ni.use(P0);Ni.use(pp);Ni.mount("#app");export{_e as A,Ds as B,vr as C,Qt as D,G0 as E,F0 as F,vi as G,bi as H,gu as I,D0 as J,W0 as K,$0 as L,Hc as M,zd as N,te as O,Uc as P,K0 as Q,dd as R,ws as S,C_ as T,M0 as U,n0 as V,j0 as Z,Wt as _,fs as a,Vg as b,J as c,Ue as d,V0 as e,m as f,Cc as g,st as h,re as i,H0 as j,Le as k,Te as l,ee as m,Dt as n,U as o,_o as p,pt as q,ss as r,hw as s,Dr as t,U0 as u,z0 as v,B0 as w,de as x,ut as y,D as z};
