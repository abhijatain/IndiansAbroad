import{_ as v,k as f,r as h,K as m,e as u,c as d,F as g,j as _,u as y,g as a,n as x,o as l,t as k,L as S,q as w,s as B,a as r}from"./index-DIpcXTmi.js";const t=o=>(w("data-v-9723ba9b"),o=o(),B(),o),T={class:"container",style:{"margin-top":"4rem"}},j=r('<div class="card border-0 shadow bg-primary-subtle" data-v-9723ba9b><div class="d-flex align-items-center mb-2" style="padding:12px 15px;" data-v-9723ba9b><div class="avatar avatar-story me-2" data-v-9723ba9b><a href="#!" data-v-9723ba9b><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-9723ba9b></a></div><div data-v-9723ba9b><div class="" data-v-9723ba9b><h6 class="card-title mb-0" data-v-9723ba9b>Abhijeet Singh </h6><span class="text-body-secondary" style="font-size:12px;" data-v-9723ba9b>Posted on March 2022</span></div></div></div></div>',1),E={class:"barlow-bold p-2"},L=r('<div style="padding:12px 15px;" data-v-9723ba9b><span class="badge" style="margin-right:.5rem;background-color:#FF204E;" data-v-9723ba9b>canada</span><span class="badge" style="margin-right:.5rem;background-color:#A0153E;" data-v-9723ba9b>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#5D0E41;" data-v-9723ba9b>success</span><span class="badge" style="margin-right:.5rem;background-color:#00224D;" data-v-9723ba9b>info</span></div>',1),I=["innerHTML"],V={class:"fixed-bottom p-3 card"},A={class:"d-flex justify-content-between"},F=t(()=>a("div",null,[a("i",{class:"fa-solid fa-heart p-2 fa-lg",style:{color:"red"}}),a("span",null," 63")],-1)),M=t(()=>a("i",{"data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasBottom","aria-controls":"offcanvasBottom",class:"fa-regular fa-comment fa-lg p-2"},null,-1)),q=t(()=>a("span",null," 23",-1)),C={class:"offcanvas offcanvas-bottom",tabindex:"-1",id:"offcanvasBottom","aria-labelledby":"offcanvasBottomLabel",style:{height:"70vh"}},D=t(()=>a("div",{class:"offcanvas-header"},[a("h5",{class:"offcanvas-title",id:"offcanvasBottomLabel"},"Comments"),a("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),N={class:"offcanvas-body small",style:{padding:"0"}},G=t(()=>a("div",null,[a("i",{class:"fa-solid fa-share p-2 fa-lg"}),a("span",null," 30")],-1)),H=t(()=>a("i",{class:"fa-regular fa-bookmark p-2 fa-lg"},null,-1)),P={__name:"SingleView",setup(o){const c=f();let i=h([]);const b=m();return u(async()=>{const n=b.params.id;if(c.state.discusions.filter(s=>s.id==n).length>0)i.value=c.state.discusions.filter(s=>s.id==n);else{const s=localStorage.getItem("auth-token"),e=await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/discusion/${n}`,{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":s,"Content-Type":"application/json"}}),p=await e.json();e.ok&&i.value.push(...p)}}),(n,s)=>(l(),d("div",T,[(l(!0),d(g,null,_(y(i),e=>(l(),d("div",null,[j,a("div",null,[a("h1",E,k(e.title),1)]),L,a("div",{innerHTML:e.content,class:"ql-editor card border-0",style:{"margin-bottom":"4.5rem"}},null,8,I)]))),256)),a("div",V,[a("div",A,[F,a("div",null,[M,q,a("div",C,[D,a("div",N,[x(S,{id:"1"})])])]),G,H])])]))}},z=v(P,[["__scopeId","data-v-9723ba9b"]]);export{z as default};
