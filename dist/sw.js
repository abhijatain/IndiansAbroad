if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-28fe7b12"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-BqrwAdhu.js",revision:null},{url:"assets/AddView-BSFKUHFO.css",revision:null},{url:"assets/AddView-Di_OwHSS.js",revision:null},{url:"assets/AdminView-Do00Z311.js",revision:null},{url:"assets/basecomponent.esm-DxBqfOmZ.js",revision:null},{url:"assets/CarouselCard-DKG0MOUG.js",revision:null},{url:"assets/DiscusionView-8AY1Pikz.js",revision:null},{url:"assets/DiscusionView-BX3E4SUX.css",revision:null},{url:"assets/DiscussionCard-Ctvk_WKw.css",revision:null},{url:"assets/editor.esm-Ce8Ah1da.js",revision:null},{url:"assets/HelpView-DXOuynrw.js",revision:null},{url:"assets/index-C966kL1E.css",revision:null},{url:"assets/index-Cg6KkF3H.js",revision:null},{url:"assets/NotificationView-BHzPE8fW.js",revision:null},{url:"assets/ProfileView-D9m4gAUq.js",revision:null},{url:"assets/quill-CyBI07AH.js",revision:null},{url:"assets/SavedView-CFVACXBK.js",revision:null},{url:"assets/SavedView-Cgke0cYw.css",revision:null},{url:"assets/SearchView-28yl_VFt.js",revision:null},{url:"assets/SingleView-B4OWtIM6.css",revision:null},{url:"assets/SingleView-DV-0GMWx.js",revision:null},{url:"assets/virtualscroller.esm-BQGJoOcA.js",revision:null},{url:"index.html",revision:"dff2aa751fae14e76a557245e787556c"},{url:"registerSW.js",revision:"f5396c78480f945a6fa9c300c47f2c29"},{url:"pwa-192x192.png",revision:"515b0622b17f69f55a81078a0ad747b3"},{url:"pwa-512x512.png",revision:"e10fd42872cd3f13be49459d501ee707"},{url:"manifest.webmanifest",revision:"6b51b906a42dd3825b41e788de890204"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
