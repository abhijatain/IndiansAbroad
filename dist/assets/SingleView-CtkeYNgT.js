import{_ as p,C as f,x as m,S as g,y as h,c as i,l as u,p as b,z as _,a as c,o as n,f as d,t as y,i as x,V as k,G as S,H as w}from"./index-CBjbQd10.js";const B=s=>(S("data-v-da11e1a2"),s=s(),w(),s),T={class:"container",style:{"margin-top":"4rem"}},E=c('<div class="card border-0 shadow bg-primary-subtle" data-v-da11e1a2><div class="d-flex align-items-center mb-2" style="padding:12px 15px;" data-v-da11e1a2><div class="avatar avatar-story me-2" data-v-da11e1a2><a href="#!" data-v-da11e1a2><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-da11e1a2></a></div><div data-v-da11e1a2><div class="" data-v-da11e1a2><h6 class="card-title mb-0" data-v-da11e1a2>Abhijeet Singh </h6><span class="text-body-secondary" style="font-size:12px;" data-v-da11e1a2>Posted on March 2022</span></div></div></div></div>',1),V={class:"barlow-bold p-2"},j=c('<div style="padding:12px 15px;" data-v-da11e1a2><span class="badge" style="margin-right:.5rem;background-color:#FF204E;" data-v-da11e1a2>canada</span><span class="badge" style="margin-right:.5rem;background-color:#A0153E;" data-v-da11e1a2>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#5D0E41;" data-v-da11e1a2>success</span><span class="badge" style="margin-right:.5rem;background-color:#00224D;" data-v-da11e1a2>info</span></div>',1),C=["innerHTML"],I=B(()=>d("h4",null,"Comments",-1)),L=c('<div class="fixed-bottom p-3 card" data-v-da11e1a2><div class="d-flex justify-content-between" data-v-da11e1a2><div data-v-da11e1a2><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-da11e1a2></i><span data-v-da11e1a2> 63</span></div><div data-v-da11e1a2><i data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" class="fa-regular fa-comment fa-lg p-2" data-v-da11e1a2></i><span data-v-da11e1a2> 23</span><div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style="height:70vh;" data-v-da11e1a2><div class="offcanvas-header" data-v-da11e1a2><h5 class="offcanvas-title" id="offcanvasBottomLabel" data-v-da11e1a2>Comments</h5><button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" data-v-da11e1a2></button></div><div class="offcanvas-body small" style="padding:0;" data-v-da11e1a2></div></div></div><div data-v-da11e1a2><i class="fa-solid fa-share p-2 fa-lg" data-v-da11e1a2></i><span data-v-da11e1a2> 30</span></div><i class="fa-regular fa-bookmark p-2 fa-lg" data-v-da11e1a2></i></div></div>',1),A={__name:"SingleView",setup(s){const l=f();let o=m([]);const r=g();return h(async()=>{const e=r.params.id;if(l.state.discusions.filter(a=>a.id==e).length>0)o.value=l.state.discusions.filter(a=>a.id==e);else{const a=localStorage.getItem("auth-token"),t=await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/discusion/${e}`,{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":a,"Content-Type":"application/json"}}),v=await t.json();t.ok&&o.value.push(...v)}}),(e,a)=>(n(),i("div",T,[(n(!0),i(u,null,b(_(o),t=>(n(),i("div",null,[E,d("div",null,[d("h1",V,y(t.title),1)]),j,d("div",{innerHTML:t.content,class:"ql-editor card border-0",style:{"margin-bottom":"4.5rem"}},null,8,C),I,x(k,{id:"1"})]))),256)),L]))}},D=p(A,[["__scopeId","data-v-da11e1a2"]]);export{D as default};