if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-28fe7b12"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-BJN0-iUz.js",revision:null},{url:"assets/AddView-Cca0diDQ.css",revision:null},{url:"assets/AddView-DE6LC7B_.js",revision:null},{url:"assets/AdminView-Dca1HNtY.js",revision:null},{url:"assets/CarouselCard-BG1dfYlY.js",revision:null},{url:"assets/DiscusionView-BNFTttIX.js",revision:null},{url:"assets/DiscusionView-BX3E4SUX.css",revision:null},{url:"assets/DiscussionCard-Ctvk_WKw.css",revision:null},{url:"assets/HelpView-B0Nl6Zy_.js",revision:null},{url:"assets/index-BAm4onf3.js",revision:null},{url:"assets/index-C966kL1E.css",revision:null},{url:"assets/NotificationView-DoBQ_KTa.js",revision:null},{url:"assets/ProfileView-BsUGJvE-.js",revision:null},{url:"assets/quill-CyBI07AH.js",revision:null},{url:"assets/SavedView-Cgke0cYw.css",revision:null},{url:"assets/SavedView-DF45dtmQ.js",revision:null},{url:"assets/SearchView-CZ35U9fK.js",revision:null},{url:"assets/SingleView-CkjobQef.css",revision:null},{url:"assets/SingleView-Cu3WuTn5.js",revision:null},{url:"assets/virtualscroller.esm-DRdMNhl7.js",revision:null},{url:"index.html",revision:"7c6949284147e0254d13ea451f0c55ff"},{url:"registerSW.js",revision:"f5396c78480f945a6fa9c300c47f2c29"},{url:"pwa-192x192.png",revision:"515b0622b17f69f55a81078a0ad747b3"},{url:"pwa-512x512.png",revision:"e10fd42872cd3f13be49459d501ee707"},{url:"manifest.webmanifest",revision:"6b51b906a42dd3825b41e788de890204"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
