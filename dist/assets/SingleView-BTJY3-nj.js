import{_ as p,r as v,K as m,e as h,c as o,F as g,j as u,u as _,g as a,n as b,o as n,t as y,L as x,q as k,s as S,a as l}from"./index-D-Qi-kSX.js";const s=e=>(k("data-v-10af1877"),e=e(),S(),e),w={class:"container",style:{"margin-top":"4rem"}},B=l('<div class="card border-0 shadow bg-primary-subtle" data-v-10af1877><div class="d-flex align-items-center mb-2" style="padding:12px 15px;" data-v-10af1877><div class="avatar avatar-story me-2" data-v-10af1877><a href="#!" data-v-10af1877><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-10af1877></a></div><div data-v-10af1877><div class="" data-v-10af1877><h6 class="card-title mb-0" data-v-10af1877>Abhijeet Singh </h6><span class="text-body-secondary" style="font-size:12px;" data-v-10af1877>Posted on March 2022</span></div></div></div></div>',1),T={class:"barlow-bold p-2"},j=l('<div style="padding:12px 15px;" data-v-10af1877><span class="badge" style="margin-right:.5rem;background-color:#FF204E;" data-v-10af1877>canada</span><span class="badge" style="margin-right:.5rem;background-color:#A0153E;" data-v-10af1877>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#5D0E41;" data-v-10af1877>success</span><span class="badge" style="margin-right:.5rem;background-color:#00224D;" data-v-10af1877>info</span></div>',1),E=["innerHTML"],L={class:"fixed-bottom p-3 card"},I={class:"d-flex justify-content-between"},V=s(()=>a("div",null,[a("i",{class:"fa-solid fa-heart p-2 fa-lg",style:{color:"red"}}),a("span",null," 63")],-1)),A=s(()=>a("i",{"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasBottom","aria-controls":"offcanvasBottom",class:"fa-regular fa-comment fa-lg p-2"},null,-1)),C=s(()=>a("span",null," 23",-1)),F={class:"offcanvas offcanvas-bottom",tabindex:"-1",id:"offcanvasBottom","aria-labelledby":"offcanvasBottomLabel",style:{height:"70vh"}},M=s(()=>a("div",{class:"offcanvas-header"},[a("h5",{class:"offcanvas-title",id:"offcanvasBottomLabel"},"Comments"),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),D={class:"offcanvas-body small",style:{padding:"0"}},N=s(()=>a("div",null,[a("i",{class:"fa-solid fa-share p-2 fa-lg"}),a("span",null," 30")],-1)),q=s(()=>a("i",{class:"fa-regular fa-bookmark p-2 fa-lg"},null,-1)),G={__name:"SingleView",setup(e){let d=v([]);const r=m();return h(async()=>{const i=r.params.id,c=localStorage.getItem("auth-token"),t=await fetch(`https://community-app-india.onrender.com/api/discusion/${i}`,{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":c,"Content-Type":"application/json"}}),f=await t.json();t.ok&&d.value.push(...f)}),(i,c)=>(n(),o("div",w,[(n(!0),o(g,null,u(_(d),t=>(n(),o("div",null,[B,a("div",null,[a("h1",T,y(t.title),1)]),j,a("div",{innerHTML:t.content,class:"ql-editor card border-0",style:{"margin-bottom":"4.5rem"}},null,8,E)]))),256)),a("div",L,[a("div",I,[V,a("div",null,[A,C,a("div",F,[M,a("div",D,[b(x,{id:"1"})])])]),N,q])])]))}},P=p(G,[["__scopeId","data-v-10af1877"]]);export{P as default};
