if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,l)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const o=s=>i(s,r),t={module:{uri:r},exports:u,require:o};e[r]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-28fe7b12"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AboutView-BH_FZJPV.css",revision:null},{url:"assets/AboutView-DO0C3P8-.js",revision:null},{url:"assets/AdminView-D52FnZuo.js",revision:null},{url:"assets/DiscusionView-DFugeiqO.css",revision:null},{url:"assets/DiscusionView-o6O_dsnz.js",revision:null},{url:"assets/editor.esm-BM7wKK6Z.js",revision:null},{url:"assets/index-BOQd-uz4.js",revision:null},{url:"assets/index-TPPtPsnP.css",revision:null},{url:"assets/LoginView-aHjwN9L4.js",revision:null},{url:"assets/quill-CyBI07AH.js",revision:null},{url:"assets/RegisterView-VrOENQ6D.js",revision:null},{url:"assets/SavedView-CgtPdP5J.js",revision:null},{url:"assets/SavedView-DFoWC3Ne.css",revision:null},{url:"assets/SearchView-CFoZIuNh.css",revision:null},{url:"assets/SearchView-Cg75ZspT.js",revision:null},{url:"assets/SingleView-BLVs3_tp.js",revision:null},{url:"assets/SingleView-C86cuCGc.css",revision:null},{url:"index.html",revision:"eb56ed07b3b81c2bf4815abc0f842938"},{url:"registerSW.js",revision:"f5396c78480f945a6fa9c300c47f2c29"},{url:"pwa-192x192.png",revision:"515b0622b17f69f55a81078a0ad747b3"},{url:"pwa-512x512.png",revision:"e10fd42872cd3f13be49459d501ee707"},{url:"manifest.webmanifest",revision:"6b51b906a42dd3825b41e788de890204"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
