if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(l.map((s=>t[s]||o(s)))).then((s=>(n(...s),u)))}}define(["./workbox-28fe7b12"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-BH_FZJPV.css",revision:null},{url:"assets/AboutView-CjobrHKV.js",revision:null},{url:"assets/AdminView-DuwmG80P.js",revision:null},{url:"assets/DiscusionView-BCJNGtKX.css",revision:null},{url:"assets/DiscusionView-Bg2SBcXq.js",revision:null},{url:"assets/editor.esm-CaEA-wTk.js",revision:null},{url:"assets/index-BdH3mmB6.css",revision:null},{url:"assets/index-D0ym4pZZ.js",revision:null},{url:"assets/LoginView-B7GiP9mq.js",revision:null},{url:"assets/quill-CyBI07AH.js",revision:null},{url:"assets/RegisterView-Bb9aTTmL.js",revision:null},{url:"assets/SavedView-DFoWC3Ne.css",revision:null},{url:"assets/SavedView-DT1M06D7.js",revision:null},{url:"assets/SearchView-CFoZIuNh.css",revision:null},{url:"assets/SearchView-cloEm-3l.js",revision:null},{url:"assets/SingleView-DbVhvHQm.css",revision:null},{url:"assets/SingleView-DFhH5h1f.js",revision:null},{url:"index.html",revision:"7beb03f7c42f955ea15c2006aefb969d"},{url:"registerSW.js",revision:"f5396c78480f945a6fa9c300c47f2c29"},{url:"pwa-192x192.png",revision:"515b0622b17f69f55a81078a0ad747b3"},{url:"pwa-512x512.png",revision:"e10fd42872cd3f13be49459d501ee707"},{url:"manifest.webmanifest",revision:"6b51b906a42dd3825b41e788de890204"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
