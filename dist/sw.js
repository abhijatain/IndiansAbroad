if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>i(s,n),t={module:{uri:n},exports:u,require:o};e[n]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-28fe7b12"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-BQr0w0VN.js",revision:null},{url:"assets/AddView-C1iBv8OW.js",revision:null},{url:"assets/AddView-CNSWYZI2.css",revision:null},{url:"assets/AdminView-Dms1HxOw.js",revision:null},{url:"assets/CarouselCard-BnFN6Apj.js",revision:null},{url:"assets/DiscusionView-BX3E4SUX.css",revision:null},{url:"assets/DiscusionView-J7EZbE45.js",revision:null},{url:"assets/DiscussionCard-Vi-PVLAN.css",revision:null},{url:"assets/HelpView-wupuIB92.js",revision:null},{url:"assets/index-DD67Gu4S.js",revision:null},{url:"assets/index-Xz4R3w9E.css",revision:null},{url:"assets/NotificationView-Dz7zlXPz.js",revision:null},{url:"assets/ProfileView-DEBByz8N.js",revision:null},{url:"assets/SavedView-C-OrDrIg.js",revision:null},{url:"assets/SavedView-Cgke0cYw.css",revision:null},{url:"assets/SearchView-CkX2RenR.js",revision:null},{url:"assets/SingleView-CrdivXXM.css",revision:null},{url:"assets/SingleView-VxAjWHEU.js",revision:null},{url:"assets/virtualscroller.esm-CzjRlO9H.js",revision:null},{url:"index.html",revision:"283b4f999e8731991c06f7cadfddaa5b"},{url:"registerSW.js",revision:"f5396c78480f945a6fa9c300c47f2c29"},{url:"pwa-192x192.png",revision:"515b0622b17f69f55a81078a0ad747b3"},{url:"pwa-512x512.png",revision:"e10fd42872cd3f13be49459d501ee707"},{url:"manifest.webmanifest",revision:"6b51b906a42dd3825b41e788de890204"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
