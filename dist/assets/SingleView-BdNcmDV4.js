import{_ as g,C as h,x as v,a2 as f,y as m,c as n,l as k,p as b,z as y,o,f as a,t as r,i as x,a3 as w,a as S,G as C,H as T}from"./index-BAlSA59m.js";const c=d=>(C("data-v-4ac8a4a7"),d=d(),T(),d),j={class:"",style:{"margin-top":"3.5rem"}},I=c(()=>a("img",{src:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",width:"100%",height:"300px"},null,-1)),V={style:{padding:"6px 8px"}},A={class:"lora-font p-1 m-0"},B={class:"d-flex justify-content-between p-2 align-items-center"},E={key:0},G=["onClick"],H={key:1},L=["onClick"],M=c(()=>a("i",{class:"fa-regular fa-comment fa-lg p-2"},null,-1)),N=c(()=>a("div",null,[a("i",{class:"fa-solid fa-share p-2 fa-lg"})],-1)),$=c(()=>a("i",{class:"fa-regular fa-bookmark p-2 fa-lg"},null,-1)),q=S('<div data-v-4ac8a4a7><div class="d-flex align-items-center mb-1 mt-1" style="padding:8px 12px;" data-v-4ac8a4a7><div class="avatar avatar-story me-2" data-v-4ac8a4a7><a href="#!" data-v-4ac8a4a7><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-4ac8a4a7></a></div><div data-v-4ac8a4a7><div class="" data-v-4ac8a4a7><h6 class="card-title mb-0 lora-regular" data-v-4ac8a4a7>Abhijeet Singh </h6><span class="text-body-secondary lora-regular" style="font-size:12px;" data-v-4ac8a4a7>Posted 9 days ago</span></div></div></div></div><div style="padding:4px 10px;" data-v-4ac8a4a7><span class="badge bg-success-subtle text-success m-1" data-v-4ac8a4a7>canada</span><span class="badge bg-warning-subtle text-warning m-1" data-v-4ac8a4a7>abroad</span><span class="badge bg-danger-subtle text-danger m-1" data-v-4ac8a4a7>success</span><span class="badge bg-primary-subtle text-primary m-1" data-v-4ac8a4a7>religion</span></div>',2),z=["innerHTML"],D=c(()=>a("hr",null,null,-1)),P={class:"m-2 border-0"},F={__name:"SingleView",setup(d){const i=h();let l=v([]);const _=f();m(async()=>{const e=_.params.id;if(i.state.discusions.filter(s=>s.id==e).length>0)l.value=i.state.discusions.filter(s=>s.id==e);else{const s=localStorage.getItem("auth-token"),t=await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/discusion/${e}`,{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":s,"Content-Type":"application/json"}}),u=await t.json();t.ok&&(l.value.push(...u),console.log(l))}});async function p(e){l.value[0].has_liked?(l.value[0].has_liked=!1,l.value[0].likes_count-=1):(l.value[0].has_liked=!0,l.value[0].likes_count+=1),i.state.discusions.filter(s=>s.id==e).length>0&&(i.state.discusions.filter(s=>s.id==e)[0].has_liked?(i.state.discusions.filter(s=>s.id==e)[0].has_liked=!1,i.state.discusions.filter(s=>s.id==e)[0].likes_count-=1):(i.state.discusions.filter(s=>s.id==e)[0].has_liked=!0,i.state.discusions.filter(s=>s.id==e)[0].likes_count+=1)),await i.dispatch("likeDiscusion",e).then(()=>{})}return(e,s)=>(o(),n("div",j,[(o(!0),n(k,null,b(y(l),t=>(o(),n("div",null,[I,a("div",V,[a("h1",A,[a("strong",null,r(t.title),1)])]),a("div",B,[a("div",null,[t.has_liked?(o(),n("div",E,[a("i",{class:"fa-solid fa-heart p-2 fa-lg",onClick:u=>p(t.id),style:{color:"red"}},null,8,G),a("span",null,r(t.likes_count),1)])):(o(),n("div",H,[a("i",{class:"fa-regular fa-heart p-2 fa-lg",onClick:u=>p(t.id)},null,8,L),a("span",null,r(t.likes_count),1)]))]),a("div",null,[M,a("span",null,r(t.comments_count),1)]),N,$]),q,a("div",{innerHTML:t.content,class:"ql-editor card border-0 lora-regular",style:{"margin-bottom":"2rem"}},null,8,z),D,a("div",P,[x(w,{id:"2",class:"mt-1"})])]))),256))]))}},R=g(F,[["__scopeId","data-v-4ac8a4a7"]]);export{R as default};