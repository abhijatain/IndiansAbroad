if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-28fe7b12"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-BHNMoCDF.js",revision:null},{url:"assets/AddView-Cca0diDQ.css",revision:null},{url:"assets/AddView-CwlHyC_Z.js",revision:null},{url:"assets/AdminView-BSxVs0rb.js",revision:null},{url:"assets/CarouselCard-CanYSNJ-.js",revision:null},{url:"assets/DiscusionView-BX3E4SUX.css",revision:null},{url:"assets/DiscusionView-Caoivt4K.js",revision:null},{url:"assets/DiscussionCard-Ctvk_WKw.css",revision:null},{url:"assets/HelpView-C3FNNiaQ.js",revision:null},{url:"assets/index-Cge2dmfy.css",revision:null},{url:"assets/index-DPIDoqVE.js",revision:null},{url:"assets/NotificationView-DYMWSND-.js",revision:null},{url:"assets/ProfileView-LgiKt868.js",revision:null},{url:"assets/quill-CyBI07AH.js",revision:null},{url:"assets/SavedView-Cgke0cYw.css",revision:null},{url:"assets/SavedView-CTluE4d0.js",revision:null},{url:"assets/SearchView-DUa6K2Jn.js",revision:null},{url:"assets/SingleView-C0Tz1okY.css",revision:null},{url:"assets/SingleView-HpBaSyS1.js",revision:null},{url:"assets/virtualscroller.esm-BQOG4ez2.js",revision:null},{url:"index.html",revision:"8a7f9410e36cff2c8a087b8067be258e"},{url:"registerSW.js",revision:"f5396c78480f945a6fa9c300c47f2c29"},{url:"pwa-192x192.png",revision:"515b0622b17f69f55a81078a0ad747b3"},{url:"pwa-512x512.png",revision:"e10fd42872cd3f13be49459d501ee707"},{url:"manifest.webmanifest",revision:"6b51b906a42dd3825b41e788de890204"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
