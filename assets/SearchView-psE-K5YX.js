import{h as g,r as d,j as _,c as t,g as e,i as h,w as b,v as f,u,k as y,F as k,l as v,o,m as w,n as x,t as S,f as N,b as j,a as O}from"./index-CUJBZ3yM.js";/* empty css                                                                       */const B={class:"container",style:{"margin-top":"4rem"}},T={class:"btn-group mb-3",role:"group","aria-label":"Basic radio toggle button group"},C=e("label",{class:"btn btn-outline-secondary",for:"btnradio1"},"Discussions",-1),E=e("label",{class:"btn btn-outline-secondary",for:"btnradio2"},"News",-1),V=e("button",{class:"btn btn-outline-success",type:"submit"},"Search",-1),q={class:"card card-cover overflow-hidden rounded-4 shadow-lg",style:{"background-image":"url('')"}},D={class:"d-flex flex-column h-100 p-3 text-shadow-1"},P={class:"d-flex list-unstyled mb-2"},A={class:"me-auto"},M=e("img",{src:j,alt:"Bootstrap",width:"32",height:"32",class:"rounded-circle border border-white"},null,-1),W=e("small",{class:"p-1"},"Abhijeet Singh",-1),F=e("small",{class:"p-1"},"3d",-1),L={class:"mt-3 display-7 lh-1 fw-bold"},Y=e("li",{class:"d-flex align-items-center me-3"},null,-1),$={class:"d-flex align-items-center"},z={key:0,src:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg",height:"80",width:"80"},G={key:1,src:"https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg",height:"80",width:"80"},J={key:2,src:"https://media.istockphoto.com/id/533297303/photo/lion-mother-with-cub.jpg?s=612x612&w=0&k=20&c=W-8_Yb__gWrDFePNhEOBtVQ8ND6qsNb5X8AB00apkvk=",height:"80",width:"80"},Q={key:3,src:"https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q",height:"80",width:"80"},R={key:4,src:"https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q",height:"80",width:"80"},U={key:0,class:"d-flex flex-row justify-content-between align-items-end"},X=O('<div class="p-2"><span class="badge" style="margin-right:.5rem;background-color:#5E1675;">canada</span><span class="badge" style="margin-right:.5rem;background-color:#EE4266;">abroad</span><span class="badge" style="margin-right:.5rem;background-color:#e1b216;">success</span><span class="badge" style="margin-right:.5rem;background-color:#337357;">religion</span></div>',1),H=[X],ee={__name:"SearchView",setup(I){g();let a=d(!0),c=d([]),n=d("");async function p(){if(c.value=[],a.value){const r=await fetch("https://test-am3oxfhvvq-em.a.run.app/search/discussions",{method:"POST",Allow:["GET","POST"],headers:{"Content-Type":"application/json"},body:JSON.stringify({search:n.value})}),s=await r.json();r.ok&&c.value.push(...s)}else{const r=await fetch("https://test-am3oxfhvvq-em.a.run.app/search/news",{method:"POST",Allow:["GET","POST"],headers:{"Content-Type":"application/json"},body:JSON.stringify({search:n.value})}),s=await r.json();r.ok&&c.value.push(...s)}}return(r,s)=>{const m=_("router-link");return o(),t("div",B,[e("div",T,[e("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:"",onClick:s[0]||(s[0]=i=>h(a)?a.value=!0:a=!0)}),C,e("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off",onClick:s[1]||(s[1]=i=>h(a)?a.value=!1:a=!1)}),E]),e("form",{class:"d-flex",role:"search",onSubmit:y(p,["prevent"])},[b(e("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search","onUpdate:modelValue":s[2]||(s[2]=i=>h(n)?n.value=i:n=i)},null,512),[[f,u(n)]]),V],32),(o(!0),t(k,null,v(u(c),(i,l)=>(o(),t("div",{class:"col",key:l,style:{margin:"8px 4px"}},[e("div",q,[e("div",D,[e("ul",P,[e("li",A,[M,W,F,w(m,{to:`/discusion/${i.id}/${i.title}`},{default:x(()=>[e("h5",L,S(i.title),1)]),_:2},1032,["to"])]),Y,e("li",$,[l==0?(o(),t("img",z)):l==1?(o(),t("img",G)):l==2?(o(),t("img",J)):l==3?(o(),t("img",Q)):(o(),t("img",R))])]),u(a)?(o(),t("div",U,H)):N("",!0)])])]))),128))])}}};export{ee as default};
