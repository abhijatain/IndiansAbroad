if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>i(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-28fe7b12"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-D4TgXK5A.js",revision:null},{url:"assets/AddView-CN5y8bKo.css",revision:null},{url:"assets/AddView-DgIcthaJ.js",revision:null},{url:"assets/AdminView-CGK4CxlX.js",revision:null},{url:"assets/CarouselCard-DieEuglk.js",revision:null},{url:"assets/DiscusionView-CtT3mMdQ.js",revision:null},{url:"assets/DiscussionCard-Vi-PVLAN.css",revision:null},{url:"assets/HelpView-jPtx4dgH.js",revision:null},{url:"assets/index-BxIf5bh7.css",revision:null},{url:"assets/index-j2QxFq68.js",revision:null},{url:"assets/NotificationView-BCHmgddg.js",revision:null},{url:"assets/ProfileView-BNGodp4S.js",revision:null},{url:"assets/SavedView-C39pXZcZ.js",revision:null},{url:"assets/SavedView-Cgke0cYw.css",revision:null},{url:"assets/SearchView-BQtDqppQ.js",revision:null},{url:"assets/SingleView-COJxjCca.css",revision:null},{url:"assets/SingleView-p-eywVO8.js",revision:null},{url:"index.html",revision:"cc0a025f13531df819ec7a5bbfa53fed"},{url:"registerSW.js",revision:"f5396c78480f945a6fa9c300c47f2c29"},{url:"pwa-192x192.png",revision:"515b0622b17f69f55a81078a0ad747b3"},{url:"pwa-512x512.png",revision:"e10fd42872cd3f13be49459d501ee707"},{url:"manifest.webmanifest",revision:"6b51b906a42dd3825b41e788de890204"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
