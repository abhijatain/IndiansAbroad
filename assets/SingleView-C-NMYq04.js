import{h as p,r as g,z as h,e as _,c as l,F as m,l as f,u as v,o,g as s,t as c,m as k,C as b,a as y}from"./index-BVgDDtxC.js";const x={class:"",style:{"margin-top":"3.5rem"}},w=s("img",{src:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",width:"100%",height:"300px"},null,-1),C={style:{padding:"6px 8px"}},S={class:"lora-font p-1 m-0"},T={class:"d-flex justify-content-between p-2 align-items-center"},j={key:0},V=["onClick"],A={key:1},B=["onClick"],E=s("i",{class:"fa-regular fa-comment fa-lg p-2"},null,-1),L=s("div",null,[s("i",{class:"fa-solid fa-share p-2 fa-lg"})],-1),M=s("i",{class:"fa-regular fa-bookmark p-2 fa-lg"},null,-1),N=y('<div><div class="d-flex align-items-center mb-1 mt-1" style="padding:8px 12px;"><div class="avatar avatar-story me-2"><a href="#!"><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt=""></a></div><div><div class=""><h6 class="card-title mb-0 lora-regular">Abhijeet Singh </h6><span class="text-body-secondary lora-regular" style="font-size:12px;">Posted 9 days ago</span></div></div></div></div><div style="padding:4px 10px;"><span class="badge bg-success-subtle text-success m-1">canada</span><span class="badge bg-warning-subtle text-warning m-1">abroad</span><span class="badge bg-danger-subtle text-danger m-1">success</span><span class="badge bg-primary-subtle text-primary m-1">religion</span></div>',2),$=["innerHTML"],z=s("hr",null,null,-1),D={class:"m-2 border-0"},H={__name:"SingleView",setup(F){const i=p();let n=g([]);const u=h();_(async()=>{const t=u.params.id;if(i.state.discusions.filter(e=>e.id==t).length>0)n.value=i.state.discusions.filter(e=>e.id==t);else{const e=localStorage.getItem("auth-token"),a=await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/discusion/${t}`,{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":e,"Content-Type":"application/json"}}),r=await a.json();a.ok&&(n.value.push(...r),console.log(n))}});async function d(t){n.value[0].has_liked?(n.value[0].has_liked=!1,n.value[0].likes_count-=1):(n.value[0].has_liked=!0,n.value[0].likes_count+=1),i.state.discusions.filter(e=>e.id==t).length>0&&(i.state.discusions.filter(e=>e.id==t)[0].has_liked?(i.state.discusions.filter(e=>e.id==t)[0].has_liked=!1,i.state.discusions.filter(e=>e.id==t)[0].likes_count-=1):(i.state.discusions.filter(e=>e.id==t)[0].has_liked=!0,i.state.discusions.filter(e=>e.id==t)[0].likes_count+=1)),await i.dispatch("likeDiscusion",t).then(()=>{})}return(t,e)=>(o(),l("div",x,[(o(!0),l(m,null,f(v(n),a=>(o(),l("div",null,[w,s("div",C,[s("h1",S,[s("strong",null,c(a.title),1)])]),s("div",T,[s("div",null,[a.has_liked?(o(),l("div",j,[s("i",{class:"fa-solid fa-heart p-2 fa-lg",onClick:r=>d(a.id),style:{color:"red"}},null,8,V),s("span",null,c(a.likes_count),1)])):(o(),l("div",A,[s("i",{class:"fa-regular fa-heart p-2 fa-lg",onClick:r=>d(a.id)},null,8,B),s("span",null,c(a.likes_count),1)]))]),s("div",null,[E,s("span",null,c(a.comments_count),1)]),L,M]),N,s("div",{innerHTML:a.content,class:"tiptap card border-0",style:{"margin-bottom":"2rem"}},null,8,$),z,s("div",D,[k(b,{id:"2",class:"mt-1"})])]))),256))]))}};export{H as default};
