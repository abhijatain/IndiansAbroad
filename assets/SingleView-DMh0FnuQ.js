import{_ as jt,r as it,j as Vt,f as Xt,c as ye,F as qt,h as $t,u as rt,o as Le,a as y,t as st,d as Kt,q as Zt,s as Jt}from"./index-v4pIz8X2.js";/*! @license DOMPurify 3.0.11 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.11/LICENSE */const{entries:Tt,setPrototypeOf:lt,isFrozen:Qt,getPrototypeOf:en,getOwnPropertyDescriptor:tn}=Object;let{freeze:g,seal:N,create:ht}=Object,{apply:Ce,construct:Me}=typeof Reflect<"u"&&Reflect;g||(g=function(o){return o});N||(N=function(o){return o});Ce||(Ce=function(o,l,r){return o.apply(l,r)});Me||(Me=function(o,l){return new o(...l)});const ae=L(Array.prototype.forEach),ct=L(Array.prototype.pop),$=L(Array.prototype.push),se=L(String.prototype.toLowerCase),Ne=L(String.prototype.toString),ft=L(String.prototype.match),K=L(String.prototype.replace),nn=L(String.prototype.indexOf),on=L(String.prototype.trim),O=L(Object.prototype.hasOwnProperty),R=L(RegExp.prototype.test),Z=an(TypeError);function L(i){return function(o){for(var l=arguments.length,r=new Array(l>1?l-1:0),u=1;u<l;u++)r[u-1]=arguments[u];return Ce(i,o,r)}}function an(i){return function(){for(var o=arguments.length,l=new Array(o),r=0;r<o;r++)l[r]=arguments[r];return Me(i,l)}}function s(i,o){let l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:se;lt&&lt(i,null);let r=o.length;for(;r--;){let u=o[r];if(typeof u=="string"){const E=l(u);E!==u&&(Qt(o)||(o[r]=E),u=E)}i[u]=!0}return i}function rn(i){for(let o=0;o<i.length;o++)O(i,o)||(i[o]=null);return i}function P(i){const o=ht(null);for(const[l,r]of Tt(i))O(i,l)&&(Array.isArray(r)?o[l]=rn(r):r&&typeof r=="object"&&r.constructor===Object?o[l]=P(r):o[l]=r);return o}function ie(i,o){for(;i!==null;){const r=tn(i,o);if(r){if(r.get)return L(r.get);if(typeof r.value=="function")return L(r.value)}i=en(i)}function l(){return null}return l}const ut=g(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Oe=g(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),De=g(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),sn=g(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),be=g(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ln=g(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),mt=g(["#text"]),pt=g(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Ie=g(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),dt=g(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),re=g(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),cn=N(/\{\{[\w\W]*|[\w\W]*\}\}/gm),fn=N(/<%[\w\W]*|[\w\W]*%>/gm),un=N(/\${[\w\W]*}/gm),mn=N(/^data-[\-\w.\u00B7-\uFFFF]/),pn=N(/^aria-[\-\w]+$/),gt=N(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),dn=N(/^(?:\w+script|data):/i),_n=N(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Et=N(/^html$/i),Tn=N(/^[a-z][.\w]*(-[.\w]+)+$/i);var _t=Object.freeze({__proto__:null,MUSTACHE_EXPR:cn,ERB_EXPR:fn,TMPLIT_EXPR:un,DATA_ATTR:mn,ARIA_ATTR:pn,IS_ALLOWED_URI:gt,IS_SCRIPT_OR_DATA:dn,ATTR_WHITESPACE:_n,DOCTYPE_NAME:Et,CUSTOM_ELEMENT:Tn});const hn=function(){return typeof window>"u"?null:window},gn=function(o,l){if(typeof o!="object"||typeof o.createPolicy!="function")return null;let r=null;const u="data-tt-policy-suffix";l&&l.hasAttribute(u)&&(r=l.getAttribute(u));const E="dompurify"+(r?"#"+r:"");try{return o.createPolicy(E,{createHTML(b){return b},createScriptURL(b){return b}})}catch{return console.warn("TrustedTypes policy "+E+" could not be created."),null}};function At(){let i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:hn();const o=a=>At(a);if(o.version="3.0.11",o.removed=[],!i||!i.document||i.document.nodeType!==9)return o.isSupported=!1,o;let{document:l}=i;const r=l,u=r.currentScript,{DocumentFragment:E,HTMLTemplateElement:b,Node:I,Element:W,NodeFilter:B,NamedNodeMap:Rt=i.NamedNodeMap||i.MozNamedAttrMap,HTMLFormElement:yt,DOMParser:Lt,trustedTypes:J}=i,Q=W.prototype,Nt=ie(Q,"cloneNode"),Ot=ie(Q,"nextSibling"),Dt=ie(Q,"childNodes"),le=ie(Q,"parentNode");if(typeof b=="function"){const a=l.createElement("template");a.content&&a.content.ownerDocument&&(l=a.content.ownerDocument)}let h,Y="";const{implementation:ce,createNodeIterator:bt,createDocumentFragment:It,getElementsByTagName:Ct}=l,{importNode:Mt}=r;let D={};o.isSupported=typeof Tt=="function"&&typeof le=="function"&&ce&&ce.createHTMLDocument!==void 0;const{MUSTACHE_EXPR:fe,ERB_EXPR:ue,TMPLIT_EXPR:me,DATA_ATTR:wt,ARIA_ATTR:vt,IS_SCRIPT_OR_DATA:xt,ATTR_WHITESPACE:we,CUSTOM_ELEMENT:Pt}=_t;let{IS_ALLOWED_URI:ve}=_t,m=null;const xe=s({},[...ut,...Oe,...De,...be,...mt]);let p=null;const Pe=s({},[...pt,...Ie,...dt,...re]);let f=Object.seal(ht(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),j=null,pe=null,ke=!0,de=!0,Ue=!1,Fe=!0,k=!1,v=!1,_e=!1,Te=!1,U=!1,ee=!1,te=!1,He=!0,ze=!1;const kt="user-content-";let he=!0,V=!1,F={},H=null;const Ge=s({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]);let We=null;const Be=s({},["audio","video","img","source","image","track"]);let ge=null;const Ye=s({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),ne="http://www.w3.org/1998/Math/MathML",oe="http://www.w3.org/2000/svg",C="http://www.w3.org/1999/xhtml";let z=C,Ee=!1,Ae=null;const Ut=s({},[ne,oe,C],Ne);let X=null;const Ft=["application/xhtml+xml","text/html"],Ht="text/html";let d=null,G=null;const zt=l.createElement("form"),je=function(e){return e instanceof RegExp||e instanceof Function},Se=function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(G&&G===e)){if((!e||typeof e!="object")&&(e={}),e=P(e),X=Ft.indexOf(e.PARSER_MEDIA_TYPE)===-1?Ht:e.PARSER_MEDIA_TYPE,d=X==="application/xhtml+xml"?Ne:se,m=O(e,"ALLOWED_TAGS")?s({},e.ALLOWED_TAGS,d):xe,p=O(e,"ALLOWED_ATTR")?s({},e.ALLOWED_ATTR,d):Pe,Ae=O(e,"ALLOWED_NAMESPACES")?s({},e.ALLOWED_NAMESPACES,Ne):Ut,ge=O(e,"ADD_URI_SAFE_ATTR")?s(P(Ye),e.ADD_URI_SAFE_ATTR,d):Ye,We=O(e,"ADD_DATA_URI_TAGS")?s(P(Be),e.ADD_DATA_URI_TAGS,d):Be,H=O(e,"FORBID_CONTENTS")?s({},e.FORBID_CONTENTS,d):Ge,j=O(e,"FORBID_TAGS")?s({},e.FORBID_TAGS,d):{},pe=O(e,"FORBID_ATTR")?s({},e.FORBID_ATTR,d):{},F=O(e,"USE_PROFILES")?e.USE_PROFILES:!1,ke=e.ALLOW_ARIA_ATTR!==!1,de=e.ALLOW_DATA_ATTR!==!1,Ue=e.ALLOW_UNKNOWN_PROTOCOLS||!1,Fe=e.ALLOW_SELF_CLOSE_IN_ATTR!==!1,k=e.SAFE_FOR_TEMPLATES||!1,v=e.WHOLE_DOCUMENT||!1,U=e.RETURN_DOM||!1,ee=e.RETURN_DOM_FRAGMENT||!1,te=e.RETURN_TRUSTED_TYPE||!1,Te=e.FORCE_BODY||!1,He=e.SANITIZE_DOM!==!1,ze=e.SANITIZE_NAMED_PROPS||!1,he=e.KEEP_CONTENT!==!1,V=e.IN_PLACE||!1,ve=e.ALLOWED_URI_REGEXP||gt,z=e.NAMESPACE||C,f=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&je(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(f.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&je(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(f.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(f.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),k&&(de=!1),ee&&(U=!0),F&&(m=s({},mt),p=[],F.html===!0&&(s(m,ut),s(p,pt)),F.svg===!0&&(s(m,Oe),s(p,Ie),s(p,re)),F.svgFilters===!0&&(s(m,De),s(p,Ie),s(p,re)),F.mathMl===!0&&(s(m,be),s(p,dt),s(p,re))),e.ADD_TAGS&&(m===xe&&(m=P(m)),s(m,e.ADD_TAGS,d)),e.ADD_ATTR&&(p===Pe&&(p=P(p)),s(p,e.ADD_ATTR,d)),e.ADD_URI_SAFE_ATTR&&s(ge,e.ADD_URI_SAFE_ATTR,d),e.FORBID_CONTENTS&&(H===Ge&&(H=P(H)),s(H,e.FORBID_CONTENTS,d)),he&&(m["#text"]=!0),v&&s(m,["html","head","body"]),m.table&&(s(m,["tbody"]),delete j.tbody),e.TRUSTED_TYPES_POLICY){if(typeof e.TRUSTED_TYPES_POLICY.createHTML!="function")throw Z('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof e.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Z('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');h=e.TRUSTED_TYPES_POLICY,Y=h.createHTML("")}else h===void 0&&(h=gn(J,u)),h!==null&&typeof Y=="string"&&(Y=h.createHTML(""));g&&g(e),G=e}},Ve=s({},["mi","mo","mn","ms","mtext"]),Xe=s({},["foreignobject","desc","title","annotation-xml"]),Gt=s({},["title","style","font","a","script"]),qe=s({},[...Oe,...De,...sn]),$e=s({},[...be,...ln]),Wt=function(e){let t=le(e);(!t||!t.tagName)&&(t={namespaceURI:z,tagName:"template"});const n=se(e.tagName),c=se(t.tagName);return Ae[e.namespaceURI]?e.namespaceURI===oe?t.namespaceURI===C?n==="svg":t.namespaceURI===ne?n==="svg"&&(c==="annotation-xml"||Ve[c]):!!qe[n]:e.namespaceURI===ne?t.namespaceURI===C?n==="math":t.namespaceURI===oe?n==="math"&&Xe[c]:!!$e[n]:e.namespaceURI===C?t.namespaceURI===oe&&!Xe[c]||t.namespaceURI===ne&&!Ve[c]?!1:!$e[n]&&(Gt[n]||!qe[n]):!!(X==="application/xhtml+xml"&&Ae[e.namespaceURI]):!1},w=function(e){$(o.removed,{element:e});try{e.parentNode.removeChild(e)}catch{e.remove()}},Re=function(e,t){try{$(o.removed,{attribute:t.getAttributeNode(e),from:t})}catch{$(o.removed,{attribute:null,from:t})}if(t.removeAttribute(e),e==="is"&&!p[e])if(U||ee)try{w(t)}catch{}else try{t.setAttribute(e,"")}catch{}},Ke=function(e){let t=null,n=null;if(Te)e="<remove></remove>"+e;else{const T=ft(e,/^[\r\n\t ]+/);n=T&&T[0]}X==="application/xhtml+xml"&&z===C&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");const c=h?h.createHTML(e):e;if(z===C)try{t=new Lt().parseFromString(c,X)}catch{}if(!t||!t.documentElement){t=ce.createDocument(z,"template",null);try{t.documentElement.innerHTML=Ee?Y:c}catch{}}const _=t.body||t.documentElement;return e&&n&&_.insertBefore(l.createTextNode(n),_.childNodes[0]||null),z===C?Ct.call(t,v?"html":"body")[0]:v?t.documentElement:_},Ze=function(e){return bt.call(e.ownerDocument||e,e,B.SHOW_ELEMENT|B.SHOW_COMMENT|B.SHOW_TEXT|B.SHOW_PROCESSING_INSTRUCTION|B.SHOW_CDATA_SECTION,null)},Bt=function(e){return e instanceof yt&&(typeof e.nodeName!="string"||typeof e.textContent!="string"||typeof e.removeChild!="function"||!(e.attributes instanceof Rt)||typeof e.removeAttribute!="function"||typeof e.setAttribute!="function"||typeof e.namespaceURI!="string"||typeof e.insertBefore!="function"||typeof e.hasChildNodes!="function")},Je=function(e){return typeof I=="function"&&e instanceof I},M=function(e,t,n){D[e]&&ae(D[e],c=>{c.call(o,t,n,G)})},Qe=function(e){let t=null;if(M("beforeSanitizeElements",e,null),Bt(e))return w(e),!0;const n=d(e.nodeName);if(M("uponSanitizeElement",e,{tagName:n,allowedTags:m}),e.hasChildNodes()&&!Je(e.firstElementChild)&&R(/<[/\w]/g,e.innerHTML)&&R(/<[/\w]/g,e.textContent)||e.nodeType===7)return w(e),!0;if(!m[n]||j[n]){if(!j[n]&&tt(n)&&(f.tagNameCheck instanceof RegExp&&R(f.tagNameCheck,n)||f.tagNameCheck instanceof Function&&f.tagNameCheck(n)))return!1;if(he&&!H[n]){const c=le(e)||e.parentNode,_=Dt(e)||e.childNodes;if(_&&c){const T=_.length;for(let A=T-1;A>=0;--A)c.insertBefore(Nt(_[A],!0),Ot(e))}}return w(e),!0}return e instanceof W&&!Wt(e)||(n==="noscript"||n==="noembed"||n==="noframes")&&R(/<\/no(script|embed|frames)/i,e.innerHTML)?(w(e),!0):(k&&e.nodeType===3&&(t=e.textContent,ae([fe,ue,me],c=>{t=K(t,c," ")}),e.textContent!==t&&($(o.removed,{element:e.cloneNode()}),e.textContent=t)),M("afterSanitizeElements",e,null),!1)},et=function(e,t,n){if(He&&(t==="id"||t==="name")&&(n in l||n in zt))return!1;if(!(de&&!pe[t]&&R(wt,t))){if(!(ke&&R(vt,t))){if(!p[t]||pe[t]){if(!(tt(e)&&(f.tagNameCheck instanceof RegExp&&R(f.tagNameCheck,e)||f.tagNameCheck instanceof Function&&f.tagNameCheck(e))&&(f.attributeNameCheck instanceof RegExp&&R(f.attributeNameCheck,t)||f.attributeNameCheck instanceof Function&&f.attributeNameCheck(t))||t==="is"&&f.allowCustomizedBuiltInElements&&(f.tagNameCheck instanceof RegExp&&R(f.tagNameCheck,n)||f.tagNameCheck instanceof Function&&f.tagNameCheck(n))))return!1}else if(!ge[t]){if(!R(ve,K(n,we,""))){if(!((t==="src"||t==="xlink:href"||t==="href")&&e!=="script"&&nn(n,"data:")===0&&We[e])){if(!(Ue&&!R(xt,K(n,we,"")))){if(n)return!1}}}}}}return!0},tt=function(e){return e!=="annotation-xml"&&ft(e,Pt)},nt=function(e){M("beforeSanitizeAttributes",e,null);const{attributes:t}=e;if(!t)return;const n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:p};let c=t.length;for(;c--;){const _=t[c],{name:T,namespaceURI:A,value:x}=_,q=d(T);let S=T==="value"?x:on(x);if(n.attrName=q,n.attrValue=S,n.keepAttr=!0,n.forceKeepAttr=void 0,M("uponSanitizeAttribute",e,n),S=n.attrValue,n.forceKeepAttr||(Re(T,e),!n.keepAttr))continue;if(!Fe&&R(/\/>/i,S)){Re(T,e);continue}k&&ae([fe,ue,me],at=>{S=K(S,at," ")});const ot=d(e.nodeName);if(et(ot,q,S)){if(ze&&(q==="id"||q==="name")&&(Re(T,e),S=kt+S),h&&typeof J=="object"&&typeof J.getAttributeType=="function"&&!A)switch(J.getAttributeType(ot,q)){case"TrustedHTML":{S=h.createHTML(S);break}case"TrustedScriptURL":{S=h.createScriptURL(S);break}}try{A?e.setAttributeNS(A,T,S):e.setAttribute(T,S),ct(o.removed)}catch{}}}M("afterSanitizeAttributes",e,null)},Yt=function a(e){let t=null;const n=Ze(e);for(M("beforeSanitizeShadowDOM",e,null);t=n.nextNode();)M("uponSanitizeShadowNode",t,null),!Qe(t)&&(t.content instanceof E&&a(t.content),nt(t));M("afterSanitizeShadowDOM",e,null)};return o.sanitize=function(a){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=null,n=null,c=null,_=null;if(Ee=!a,Ee&&(a="<!-->"),typeof a!="string"&&!Je(a))if(typeof a.toString=="function"){if(a=a.toString(),typeof a!="string")throw Z("dirty is not a string, aborting")}else throw Z("toString is not a function");if(!o.isSupported)return a;if(_e||Se(e),o.removed=[],typeof a=="string"&&(V=!1),V){if(a.nodeName){const x=d(a.nodeName);if(!m[x]||j[x])throw Z("root node is forbidden and cannot be sanitized in-place")}}else if(a instanceof I)t=Ke("<!---->"),n=t.ownerDocument.importNode(a,!0),n.nodeType===1&&n.nodeName==="BODY"||n.nodeName==="HTML"?t=n:t.appendChild(n);else{if(!U&&!k&&!v&&a.indexOf("<")===-1)return h&&te?h.createHTML(a):a;if(t=Ke(a),!t)return U?null:te?Y:""}t&&Te&&w(t.firstChild);const T=Ze(V?a:t);for(;c=T.nextNode();)Qe(c)||(c.content instanceof E&&Yt(c.content),nt(c));if(V)return a;if(U){if(ee)for(_=It.call(t.ownerDocument);t.firstChild;)_.appendChild(t.firstChild);else _=t;return(p.shadowroot||p.shadowrootmode)&&(_=Mt.call(r,_,!0)),_}let A=v?t.outerHTML:t.innerHTML;return v&&m["!doctype"]&&t.ownerDocument&&t.ownerDocument.doctype&&t.ownerDocument.doctype.name&&R(Et,t.ownerDocument.doctype.name)&&(A="<!DOCTYPE "+t.ownerDocument.doctype.name+`>
`+A),k&&ae([fe,ue,me],x=>{A=K(A,x," ")}),h&&te?h.createHTML(A):A},o.setConfig=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Se(a),_e=!0},o.clearConfig=function(){G=null,_e=!1},o.isValidAttribute=function(a,e,t){G||Se({});const n=d(a),c=d(e);return et(n,c,t)},o.addHook=function(a,e){typeof e=="function"&&(D[a]=D[a]||[],$(D[a],e))},o.removeHook=function(a){if(D[a])return ct(D[a])},o.removeHooks=function(a){D[a]&&(D[a]=[])},o.removeAllHooks=function(){D={}},o}var En=At();const St=i=>(Zt("data-v-fa1a7054"),i=i(),Jt(),i),An={class:"container",style:{"margin-top":"4rem"}},Sn={class:"ql-editor"},Rn={class:"ql-size-huge"},yn=Kt('<div style="padding:12px 15px;" data-v-fa1a7054><span style="margin-right:.5rem;" data-v-fa1a7054><span class="text-success" data-v-fa1a7054>#</span>canada</span><span style="margin-right:.5rem;" data-v-fa1a7054><span class="text-primary" data-v-fa1a7054>#</span>abroad</span><span style="margin-right:.5rem;" data-v-fa1a7054><span class="text-warning" data-v-fa1a7054>#</span>success</span><span style="margin-right:.5rem;" data-v-fa1a7054><span class="text-danger" data-v-fa1a7054>#</span>info</span></div>',1),Ln={class:"d-flex align-items-center mb-2",style:{padding:"12px 15px"}},Nn=St(()=>y("div",{class:"avatar avatar-story me-2"},[y("a",{href:"#!"},[y("img",{class:"avatar-img rounded-circle",height:"42px",src:"https://randomuser.me/api/portraits/men/86.jpg",alt:""})])],-1)),On={class:""},Dn={class:"card-title mb-0"},bn=St(()=>y("span",{class:"nav-item small"}," 2hr ago",-1)),In=["innerHTML"],Cn={__name:"SingleView",setup(i){let o=it([]),l=it("");const r=Vt();Xt(async()=>{const E=r.params.id,b=localStorage.getItem("auth-token"),I=await fetch(`https://community-app-india.onrender.com/api/discusion/${E}`,{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":b,"Content-Type":"application/json"}}),W=await I.json();I.ok&&(o.value.push(...W),l.value=u(W[0].content))});function u(E){return En.sanitize(E)}return(E,b)=>(Le(),ye("div",An,[(Le(!0),ye(qt,null,$t(rt(o),I=>(Le(),ye("div",null,[y("div",Sn,[y("p",null,[y("strong",Rn,st(I.title),1)])]),yn,y("div",null,[y("div",Ln,[Nn,y("div",null,[y("div",On,[y("h6",Dn,st(I.username),1),bn])])])]),y("div",{style:{width:"100%"},innerHTML:rt(l),class:"ql-editor"},null,8,In)]))),256))]))}},wn=jt(Cn,[["__scopeId","data-v-fa1a7054"]]);export{wn as default};
