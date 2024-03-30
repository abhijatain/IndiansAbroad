import{_ as g,r,o as b,c as u,a,w as I,v as F,u as c,i as m,l as v,m as h,F as S,d as f,q as y,s as _,j as q,k as E}from"./index-B_xT-yjc.js";import{s as T}from"./editor.esm-wglumE32.js";const t=d=>(y("data-v-8a7a6a53"),d=d(),_(),d),C=t(()=>a("button",{class:"btn btn-outline-success",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample"},[a("i",{class:"fa-solid fa-pen-to-square",style:{color:"#337357"}})],-1)),D={class:"offcanvas offcanvas-start",tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel",style:{width:"100%",height:"100%"}},L=t(()=>a("div",{class:"offcanvas-header"},[a("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),P={class:"offcanvas-body"},$={class:"mb-5"},A=f('<div class="mb-5" data-v-8a7a6a53><form class="row gy-2 gx-3 align-items-center" data-v-8a7a6a53><div class="col-auto" data-v-8a7a6a53><select class="form-select border-0 bg-primary-subtle" id="autoSizingSelect" style="background-color:#FFAF45;width:25vw;" data-v-8a7a6a53><option selected data-v-8a7a6a53>Country</option><option value="1" data-v-8a7a6a53>One</option><option value="2" data-v-8a7a6a53>Two</option><option value="3" data-v-8a7a6a53>Three</option></select></div><div class="col-auto" data-v-8a7a6a53><label class="visually-hidden" for="autoSizingSelect" data-v-8a7a6a53>Preference</label><select class="form-select border-0 bg-warning-subtle" id="autoSizingSelect" style="background-color:#FB6D48;width:25vw;" data-v-8a7a6a53><option selected data-v-8a7a6a53>Tag2</option><option value="1" data-v-8a7a6a53>One</option><option value="2" data-v-8a7a6a53>Two</option><option value="3" data-v-8a7a6a53>Three</option></select></div><div class="col-auto" data-v-8a7a6a53><label class="visually-hidden" for="autoSizingSelect" data-v-8a7a6a53>Preference</label><select class="form-select border-0 bg-danger-subtle" id="autoSizingSelect" style="background-color:#D74B76;width:25vw;" data-v-8a7a6a53><option selected data-v-8a7a6a53>Tag3</option><option value="1" data-v-8a7a6a53>One</option><option value="2" data-v-8a7a6a53>Two</option><option value="3" data-v-8a7a6a53>Three</option></select></div><div class="col-auto" data-v-8a7a6a53><label class="visually-hidden" for="autoSizingSelect" data-v-8a7a6a53>Preference</label><select class="form-select border-0 bg-success-subtle" id="autoSizingSelect" style="background-color:#673F69;width:25vw;" data-v-8a7a6a53><option selected data-v-8a7a6a53>Tag4</option><option value="1" data-v-8a7a6a53>One</option><option value="2" data-v-8a7a6a53>Two</option><option value="3" data-v-8a7a6a53>Three</option></select></div></form></div>',1),B={class:"mb-3"},O=t(()=>a("span",{class:"ql-formats"},[a("select",{class:"ql-font"}),a("select",{class:"ql-size"})],-1)),V=t(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-bold"}),a("button",{class:"ql-italic"}),a("button",{class:"ql-underline"}),a("button",{class:"ql-strike"})],-1)),z=t(()=>a("span",{class:"ql-formats"},[a("select",{class:"ql-color"}),a("select",{class:"ql-background"})],-1)),N=t(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-list",value:"ordered"}),a("button",{class:"ql-list",value:"bullet"}),a("button",{class:"ql-indent",value:"-1"}),a("button",{class:"ql-indent",value:"+1"})],-1)),G=t(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-direction",value:"rtl"}),a("select",{class:"ql-align"})],-1)),R=t(()=>a("button",{class:"ql-video"},null,-1)),U=t(()=>a("button",{class:"ql-link"},null,-1)),Y=t(()=>a("i",{class:"fa-solid fa-image"},null,-1)),J=[Y],M=t(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-clean"})],-1)),H=t(()=>a("button",{type:"button",class:"btn btn-secondary m-1"},"Preview",-1)),K={__name:"AddDiscusion",setup(d){let l=r(""),e=r("Type Your Content here"),o=r(null);async function p(){const i=await(await fetch("https://community-app-india.onrender.com/api/discusion",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({title:l.value,data:e.value})})).json();console.log(i)}function w(){document.getElementById("formFile").click()}async function k(){let n=new FormData;if(n.append("image",o.value.files[0]),o.value.files[0]){const s=await fetch("https://community-app-india.onrender.com/upload/image",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token")},body:n}),j=await s.json();s.ok&&(e.value+=`<img src=${j.url} referrerpolicy="no-referrer">`)}}return(n,i)=>(b(),u(S,null,[C,a("div",D,[L,a("div",P,[a("div",$,[a("h1",null,[I(a("input",{type:"text",placeholder:"Your Post Title",class:"border-0 w-100 arvo-bold p-2",id:"exampleFormControlInput1","onUpdate:modelValue":i[0]||(i[0]=s=>m(l)?l.value=s:l=s)},null,512),[[F,c(l)]])])]),A,a("div",B,[v(c(T),{modelValue:c(e),"onUpdate:modelValue":i[1]||(i[1]=s=>m(e)?e.value=s:e=s),editorStyle:"height: 60vh;"},{toolbar:h(()=>[O,V,z,N,G,a("span",{class:"ql-formats"},[R,U,a("button",{onClick:w},J)]),M]),_:1},8,["modelValue"]),a("input",{ref_key:"fileInput",ref:o,type:"file",id:"formFile",accept:"image/*",hidden:"",onChange:k},null,544)]),a("div",{class:"offcanvas-body"},[a("div",{class:"fixed-bottom p-2 bg-dark"},[a("button",{type:"button",class:"btn btn-primary m-1",onClick:p},"Publish"),H,a("button",{type:"button",class:"btn btn-secondary m-1",onClick:p},"Edit")])])])])],64))}},Q=g(K,[["__scopeId","data-v-8a7a6a53"]]),x=d=>(y("data-v-0d745f45"),d=d(),_(),d),W={class:"container",style:{"margin-top":"4rem"}},X={class:"d-flex align-items-center justify-content-between p-2"},Z=x(()=>a("div",{class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},[a("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""}),a("label",{class:"btn btn-outline-secondary",for:"btnradio1"},"Latest"),a("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off"}),a("label",{class:"btn btn-outline-secondary",for:"btnradio2"},"Popular")],-1)),aa={class:"card border border-3 shadow",style:{"margin-bottom":"1rem","margin-top":"1rem"}},ta={class:"card-body"},da={class:"col d-flex flex-column position-static"},sa=f('<div class="d-flex align-items-center justify-content-between" data-v-0d745f45><div class="d-flex align-items-center mb-2" data-v-0d745f45><div class="avatar avatar-story me-2" data-v-0d745f45><a href="#!" data-v-0d745f45><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-0d745f45></a></div><div data-v-0d745f45><div class="" data-v-0d745f45><h6 class="card-title mb-0" data-v-0d745f45>Lori Ferguson</h6><span class="nav-item small" data-v-0d745f45> 2hr ago</span></div></div></div></div><div class="p-2" data-v-0d745f45><span class="badge" style="margin-right:.5rem;background-color:#0C0C0C;" data-v-0d745f45>canada</span><span class="badge" style="margin-right:.5rem;background-color:#481E14;" data-v-0d745f45>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#9B3922;" data-v-0d745f45>success</span><span class="badge" style="margin-right:.5rem;background-color:#F2613F;" data-v-0d745f45>info</span></div>',2),ea=x(()=>a("p",null," I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll. ",-1)),ia=f('<div class="card border border-3 shadow" style="margin-bottom:1rem;margin-top:1rem;" data-v-0d745f45><div class="card-body" data-v-0d745f45><div class="col d-flex flex-column position-static" data-v-0d745f45><div class="d-flex align-items-center justify-content-between" data-v-0d745f45><div class="d-flex align-items-center mb-2" data-v-0d745f45><div class="avatar avatar-story me-2" data-v-0d745f45><a href="#!" data-v-0d745f45><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-0d745f45></a></div><div data-v-0d745f45><div class="" data-v-0d745f45><h6 class="card-title mb-0" data-v-0d745f45>Lori Ferguson</h6><span class="nav-item small" data-v-0d745f45> 2hr ago</span></div></div></div></div><div class="p-2" data-v-0d745f45><span class="badge" style="margin-right:.5rem;background-color:#5E1675;" data-v-0d745f45>canada</span><span class="badge" style="margin-right:.5rem;background-color:#EE4266;" data-v-0d745f45>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#e1b216;" data-v-0d745f45>success</span><span class="badge" style="margin-right:.5rem;background-color:#337357;" data-v-0d745f45>info</span></div><p class="p-2" data-v-0d745f45>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p></div></div></div><div class="card border border-3 shadow" style="margin-bottom:1rem;margin-top:1rem;" data-v-0d745f45><div class="card-body" data-v-0d745f45><div class="col d-flex flex-column position-static" data-v-0d745f45><div class="d-flex align-items-center justify-content-between" data-v-0d745f45><div class="d-flex align-items-center mb-2" data-v-0d745f45><div class="avatar avatar-story me-2" data-v-0d745f45><a href="#!" data-v-0d745f45><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-0d745f45></a></div><div data-v-0d745f45><div class="" data-v-0d745f45><h6 class="card-title mb-0" data-v-0d745f45>Lori Ferguson</h6><span class="nav-item small" data-v-0d745f45> 2hr ago</span></div></div></div></div><div class="p-2" data-v-0d745f45><span class="badge" style="margin-right:.5rem;background-color:#FF204E;" data-v-0d745f45>canada</span><span class="badge" style="margin-right:.5rem;background-color:#A0153E;" data-v-0d745f45>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#5D0E41;" data-v-0d745f45>success</span><span class="badge" style="margin-right:.5rem;background-color:#00224D;" data-v-0d745f45>info</span></div><p class="p-2" data-v-0d745f45>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-0d745f45><div data-v-0d745f45><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-0d745f45></i><i class="fa-solid fa-share p-2 fa-lg" data-v-0d745f45></i></div><div data-v-0d745f45><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-0d745f45></i></div></div></div></div></div><div class="card border border-3 border-info-subtle shadow" style="margin-bottom:1rem;" data-v-0d745f45><div class="card-body" data-v-0d745f45><div class="d-flex align-items-center justify-content-between" data-v-0d745f45><div class="d-flex align-items-center mb-2" data-v-0d745f45><div class="avatar avatar-story me-2" data-v-0d745f45><a href="#!" data-v-0d745f45><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-0d745f45></a></div><div data-v-0d745f45><div class="nav nav-divider" data-v-0d745f45><h6 class="nav-item card-title mb-0" data-v-0d745f45>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-0d745f45> 2hr ago</span></div></div></div></div><div class="p-2" data-v-0d745f45><span style="margin-right:.5rem;" data-v-0d745f45><span class="text-success" data-v-0d745f45>#</span>canada</span><span style="margin-right:.5rem;" data-v-0d745f45><span class="text-primary" data-v-0d745f45>#</span>abroad</span><span style="margin-right:.5rem;" data-v-0d745f45><span class="text-warning" data-v-0d745f45>#</span>success</span><span style="margin-right:.5rem;" data-v-0d745f45><span class="text-secondary" data-v-0d745f45>#</span>info</span></div><p class="p-2" data-v-0d745f45>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-0d745f45><div data-v-0d745f45><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-0d745f45></i><i class="fa-solid fa-share p-2 fa-lg" data-v-0d745f45></i></div><div data-v-0d745f45><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-0d745f45></i></div></div></div></div><div class="card border border-3 border-success-subtle shadow" style="margin-bottom:1rem;" data-v-0d745f45><div class="card-body" data-v-0d745f45><div class="d-flex align-items-center justify-content-between" data-v-0d745f45><div class="d-flex align-items-center" data-v-0d745f45><div class="avatar avatar-story me-2" data-v-0d745f45><a href="#!" data-v-0d745f45><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-0d745f45></a></div><div data-v-0d745f45><div class="nav nav-divider" data-v-0d745f45><h6 class="nav-item card-title mb-0" data-v-0d745f45>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-0d745f45> 2hr ago</span></div></div></div></div><div class="p-2" data-v-0d745f45><span class="badge" style="margin-right:.5rem;background-color:#0C0C0C;" data-v-0d745f45>canada</span><span class="badge" style="margin-right:.5rem;background-color:#481E14;" data-v-0d745f45>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#9B3922;" data-v-0d745f45>success</span><span class="badge" style="margin-right:.5rem;background-color:#F2613F;" data-v-0d745f45>info</span></div><p class="p-2" data-v-0d745f45>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-0d745f45><div data-v-0d745f45><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-0d745f45></i><i class="fa-solid fa-share p-2 fa-lg" data-v-0d745f45></i></div><div data-v-0d745f45><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-0d745f45></i></div></div></div></div><div class="card border border-3 border-warning-subtle shadow" style="margin-bottom:1rem;" data-v-0d745f45><div class="card-body" data-v-0d745f45><div class="d-flex align-items-center justify-content-between" data-v-0d745f45><div class="d-flex align-items-center" data-v-0d745f45><div class="avatar avatar-story me-2" data-v-0d745f45><a href="#!" data-v-0d745f45><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-0d745f45></a></div><div data-v-0d745f45><div class="nav nav-divider" data-v-0d745f45><h6 class="nav-item card-title mb-0" data-v-0d745f45>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-0d745f45> 2hr ago</span></div></div></div></div><div class="p-2" data-v-0d745f45><span class="badge" style="margin-right:.5rem;background-color:#5E1675;" data-v-0d745f45>canada</span><span class="badge" style="margin-right:.5rem;background-color:#EE4266;" data-v-0d745f45>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#e1b216;" data-v-0d745f45>success</span><span class="badge" style="margin-right:.5rem;background-color:#337357;" data-v-0d745f45>info</span></div><p class="p-2" data-v-0d745f45>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-0d745f45><div data-v-0d745f45><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-0d745f45></i><i class="fa-solid fa-share p-2 fa-lg" data-v-0d745f45></i></div><div data-v-0d745f45><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-0d745f45></i></div></div></div></div><div class="card border border-3 border-danger-subtle shadow" style="margin-bottom:2rem;" data-v-0d745f45><div class="card-body" data-v-0d745f45><div class="d-flex align-items-center justify-content-between" data-v-0d745f45><div class="d-flex align-items-center" data-v-0d745f45><div class="avatar avatar-story me-2" data-v-0d745f45><a href="#!" data-v-0d745f45><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-0d745f45></a></div><div data-v-0d745f45><div class="nav nav-divider" data-v-0d745f45><h6 class="nav-item card-title mb-0" data-v-0d745f45>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-0d745f45> 2hr ago</span></div></div></div></div><div class="p-2" data-v-0d745f45><span class="badge" style="margin-right:.5rem;background-color:#FF204E;" data-v-0d745f45>canada</span><span class="badge" style="margin-right:.5rem;background-color:#A0153E;" data-v-0d745f45>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#5D0E41;" data-v-0d745f45>success</span><span class="badge" style="margin-right:.5rem;background-color:#00224D;" data-v-0d745f45>info</span></div><p class="p-2" data-v-0d745f45>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-0d745f45><div data-v-0d745f45><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-0d745f45></i><i class="fa-solid fa-share p-2 fa-lg" data-v-0d745f45></i></div><div data-v-0d745f45><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-0d745f45></i></div></div></div></div><div class="card rounded border-0" style="margin-bottom:2rem;" data-v-0d745f45><div class="card-header border-0 pb-0" data-v-0d745f45><div class="d-flex align-items-center justify-content-between" data-v-0d745f45><div class="d-flex align-items-center" data-v-0d745f45><div class="avatar avatar-story me-2" data-v-0d745f45><a href="#!" data-v-0d745f45><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-0d745f45></a></div><div data-v-0d745f45><div class="nav nav-divider" data-v-0d745f45><h6 class="nav-item card-title mb-0" data-v-0d745f45>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-0d745f45> 2hr ago</span></div></div></div></div></div><div class="card-body" data-v-0d745f45><p class="p-2" data-v-0d745f45>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="p-2" data-v-0d745f45><span class="badge text-bg-primary" style="margin-right:.5rem;" data-v-0d745f45>canada</span><span class="badge text-bg-secondary" style="margin-right:.5rem;" data-v-0d745f45>abroad</span><span class="badge text-bg-success" style="margin-right:.5rem;" data-v-0d745f45>success</span><span class="badge text-bg-info" style="margin-right:.5rem;" data-v-0d745f45>info</span></div></div><div class="card-footer" data-v-0d745f45><div class="d-flex justify-content-between" data-v-0d745f45><div data-v-0d745f45><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-0d745f45></i><i class="fa-solid fa-share p-2 fa-lg" data-v-0d745f45></i></div><div data-v-0d745f45><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-0d745f45></i></div></div></div></div><div class="card rounded" style="margin-bottom:2rem;" data-v-0d745f45><div class="card-header border-0 pb-0" data-v-0d745f45><div class="d-flex align-items-center justify-content-between" data-v-0d745f45><div class="d-flex align-items-center" data-v-0d745f45><div class="avatar avatar-story me-2" data-v-0d745f45><a href="#!" data-v-0d745f45><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-0d745f45></a></div><div data-v-0d745f45><div class="nav nav-divider" data-v-0d745f45><h6 class="nav-item card-title mb-0" data-v-0d745f45>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-0d745f45> 2hr ago</span></div></div></div></div></div><div class="card-body" data-v-0d745f45><p class="p-2" data-v-0d745f45>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="p-2" data-v-0d745f45><span class="badge text-bg-primary" style="margin-right:.5rem;" data-v-0d745f45>canada</span><span class="badge text-bg-secondary" style="margin-right:.5rem;" data-v-0d745f45>abroad</span><span class="badge text-bg-success" style="margin-right:.5rem;" data-v-0d745f45>success</span><span class="badge text-bg-info" style="margin-right:.5rem;" data-v-0d745f45>info</span></div></div><div class="card-footer" data-v-0d745f45><div class="d-flex justify-content-between" data-v-0d745f45><div data-v-0d745f45><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-0d745f45></i><i class="fa-solid fa-share p-2 fa-lg" data-v-0d745f45></i></div><div data-v-0d745f45><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-0d745f45></i></div></div></div></div>',8),la={__name:"DiscusionView",setup(d){return r([]),q(),r(""),(l,e)=>{const o=E("router-link");return b(),u("div",W,[a("div",X,[v(Q),Z]),a("div",aa,[a("div",ta,[a("div",da,[sa,v(o,{to:"/",class:"p-2"},{default:h(()=>[ea]),_:1})])])]),ia])}}},na=g(la,[["__scopeId","data-v-0d745f45"]]);export{na as default};
