if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-28fe7b12"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-BH_FZJPV.css",revision:null},{url:"assets/AboutView-DbeSGM7-.js",revision:null},{url:"assets/AdminView-Cb_iXcAc.js",revision:null},{url:"assets/CarouselCard-DEQXxWU4.js",revision:null},{url:"assets/DiscusionView-BAnaBw8y.css",revision:null},{url:"assets/DiscusionView-BjeWjdS-.js",revision:null},{url:"assets/editor.esm-B58kc4kI.js",revision:null},{url:"assets/HelpView-BOudRtFL.js",revision:null},{url:"assets/index-B-E0ehzG.css",revision:null},{url:"assets/index-B72onYuF.js",revision:null},{url:"assets/LoginView-D4F2ILK_.js",revision:null},{url:"assets/NotificationView-osxMHXX6.js",revision:null},{url:"assets/quill-CyBI07AH.js",revision:null},{url:"assets/RegisterView-Bc6KTeTw.js",revision:null},{url:"assets/SavedView-Cm7znrn1.css",revision:null},{url:"assets/SavedView-Dr05v4UI.js",revision:null},{url:"assets/SearchView-B_Lezv2M.js",revision:null},{url:"assets/SingleView-CX6MtwgZ.css",revision:null},{url:"assets/SingleView-DY2kpUsf.js",revision:null},{url:"index.html",revision:"743db7f51070718c1a8d9ad689e50427"},{url:"registerSW.js",revision:"f5396c78480f945a6fa9c300c47f2c29"},{url:"pwa-192x192.png",revision:"515b0622b17f69f55a81078a0ad747b3"},{url:"pwa-512x512.png",revision:"e10fd42872cd3f13be49459d501ee707"},{url:"manifest.webmanifest",revision:"6b51b906a42dd3825b41e788de890204"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
