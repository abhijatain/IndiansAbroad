import{_ as j,z as $,r as g,o as e,c as t,b as a,w as C,v as L,u as l,i as I,p as r,q as x,F as k,e as f,s as F,x as T,A as D,l as z,h as A,m as B,a as u,k as q,t as E}from"./index-3XYUXlnR.js";import{s as O}from"./editor.esm-C0st1Esh.js";const i=o=>(F("data-v-9b59ba95"),o=o(),T(),o),P=i(()=>a("button",{class:"btn btn-outline-success",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample"},[a("i",{class:"fa-solid fa-pen-to-square",style:{color:"#337357"}})],-1)),V={class:"offcanvas offcanvas-start",tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel",style:{width:"100%",height:"100%"}},N=i(()=>a("div",{class:"offcanvas-header"},[a("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),M={class:"offcanvas-body"},Y={class:"mb-3"},U=f('<div class="mb-5" data-v-9b59ba95><form class="row gy-2 gx-3 align-items-center" data-v-9b59ba95><div class="col-auto" data-v-9b59ba95><select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color:#FFAF45;width:25vw;" data-v-9b59ba95><option selected data-v-9b59ba95>Country</option><option value="1" data-v-9b59ba95>One</option><option value="2" data-v-9b59ba95>Two</option><option value="3" data-v-9b59ba95>Three</option></select></div><div class="col-auto" data-v-9b59ba95><label class="visually-hidden" for="autoSizingSelect" data-v-9b59ba95>Preference</label><select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color:#FB6D48;width:25vw;" data-v-9b59ba95><option selected data-v-9b59ba95>Tag2</option><option value="1" data-v-9b59ba95>One</option><option value="2" data-v-9b59ba95>Two</option><option value="3" data-v-9b59ba95>Three</option></select></div><div class="col-auto" data-v-9b59ba95><label class="visually-hidden" for="autoSizingSelect" data-v-9b59ba95>Preference</label><select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color:#D74B76;width:25vw;" data-v-9b59ba95><option selected data-v-9b59ba95>Tag3</option><option value="1" data-v-9b59ba95>One</option><option value="2" data-v-9b59ba95>Two</option><option value="3" data-v-9b59ba95>Three</option></select></div><div class="col-auto" data-v-9b59ba95><label class="visually-hidden" for="autoSizingSelect" data-v-9b59ba95>Preference</label><select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color:#673F69;width:25vw;" data-v-9b59ba95><option selected data-v-9b59ba95>Tag4</option><option value="1" data-v-9b59ba95>One</option><option value="2" data-v-9b59ba95>Two</option><option value="3" data-v-9b59ba95>Three</option></select></div></form></div>',1),G={class:"mb-3"},R=i(()=>a("span",{class:"ql-formats"},[a("select",{class:"ql-font"}),a("select",{class:"ql-size"})],-1)),W=i(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-bold"}),a("button",{class:"ql-italic"}),a("button",{class:"ql-underline"}),a("button",{class:"ql-strike"})],-1)),H=i(()=>a("span",{class:"ql-formats"},[a("select",{class:"ql-color"}),a("select",{class:"ql-background"})],-1)),K=i(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-list",value:"ordered"}),a("button",{class:"ql-list",value:"bullet"}),a("button",{class:"ql-indent",value:"-1"}),a("button",{class:"ql-indent",value:"+1"})],-1)),J=i(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-direction",value:"rtl"}),a("select",{class:"ql-align"})],-1)),Q=i(()=>a("button",{class:"ql-video"},null,-1)),X=i(()=>a("button",{class:"ql-link"},null,-1)),Z=i(()=>a("i",{class:"fa-solid fa-image"},null,-1)),aa=[Z],ea=i(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-clean"})],-1)),ta=i(()=>a("button",{type:"button",class:"btn btn-secondary m-1"},"Preview",-1)),sa={__name:"AddDiscusion",setup(o){const{textarea:p,input:w}=$();let s=g(""),d=g("Type Your Content here"),m=g(null);async function h(){const b=await(await fetch("https://community-app-india.onrender.com/api/discusion",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({title:s.value,data:d.value})})).json();console.log(b)}function c(){document.getElementById("formFile").click()}async function v(){d.value,d.value+="<br><h2>Uploading...., Wait for image to show and then type</h2>";let _=new FormData;if(_.append("image",m.value.files[0]),m.value.files[0]){const n=await fetch("https://community-app-india.onrender.com/upload/image",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token")},body:_}),S=await n.json();n.ok&&(d.value=S.value,d.value+=`<img src=${S.url} referrerpolicy="no-referrer">`)}}return(_,b)=>(e(),t(k,null,[P,a("div",V,[N,a("div",M,[a("div",Y,[a("h1",null,[C(a("textarea",{ref_key:"textarea",ref:p,"onUpdate:modelValue":b[0]||(b[0]=n=>I(s)?s.value=n:s=n),class:"resize-none border-0 arvo-bold p-2",placeholder:"Your Post Title",style:{width:"90vw"}},null,512),[[L,l(s)]])])]),U,a("div",G,[r(l(O),{modelValue:l(d),"onUpdate:modelValue":b[1]||(b[1]=n=>I(d)?d.value=n:d=n),editorStyle:"height: 60vh;"},{toolbar:x(()=>[R,W,H,K,J,a("span",{class:"ql-formats"},[Q,X,a("button",{onClick:c},aa)]),ea]),_:1},8,["modelValue"]),a("input",{ref_key:"fileInput",ref:m,type:"file",id:"formFile",accept:"image/*",hidden:"",onChange:v},null,544)]),a("div",{class:"offcanvas-body"},[a("div",{class:"fixed-bottom p-2 bg-dark"},[a("button",{type:"button",class:"btn btn-primary m-1",onClick:h},"Publish"),ta,a("button",{type:"button",class:"btn btn-secondary m-1",onClick:h},"Edit")])])])])],64))}},da=j(sa,[["__scopeId","data-v-9b59ba95"]]),ia={},oa={class:"card border-0","aria-hidden":"true"},la=f('<div class="card-body"><h5 class="card-title placeholder-glow"><span class="placeholder col-6"></span></h5><p class="card-text placeholder-glow"><span class="placeholder col-7"></span><span class="placeholder col-4"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span><span class="placeholder col-8"></span></p></div>',1),ra=[la];function na(o,p){return e(),t("div",oa,ra)}const y=j(ia,[["render",na]]),ca=o=>(F("data-v-f4b8e239"),o=o(),T(),o),va={class:"container",style:{"margin-top":"4rem",padding:"0px 6px"}},ba={class:"d-flex align-items-center justify-content-between p-2"},fa=ca(()=>a("div",{class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},[a("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""}),a("label",{class:"btn btn-outline-secondary",for:"btnradio1"},"Latest"),a("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off"}),a("label",{class:"btn btn-outline-secondary",for:"btnradio2"},"Popular")],-1)),pa={key:0,class:"card border border-3 shadow p-2",style:{"margin-bottom":"1rem","margin-top":"1rem"}},ma={key:1,class:"card border border-3 shadow p-2",style:{"margin-bottom":"1rem","margin-top":"1rem"}},ga={key:2,class:"card border border-3 shadow p-2",style:{"margin-bottom":"1rem","margin-top":"1rem"}},ha={key:3,class:"card border border-3 shadow p-2",style:{"margin-bottom":"1rem","margin-top":"1rem"}},ua={key:4,class:"card border border-3 shadow p-2",style:{"margin-bottom":"1rem","margin-top":"1rem"}},ya={class:"card-body",style:{padding:"12px"}},_a={class:"d-flex flex-row justify-content-between align-items-center"},wa={class:"col d-flex flex-column position-static"},xa=f('<div class="d-flex align-items-center justify-content-between" data-v-f4b8e239><div class="d-flex align-items-center mb-2" data-v-f4b8e239><div class="avatar avatar-story me-2" data-v-f4b8e239><a href="#!" data-v-f4b8e239><img class="avatar-img rounded-circle" height="36px" src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=3759e09a5b9fbe53088b23c615b6312e" alt="" data-v-f4b8e239></a></div><div data-v-f4b8e239><div class="" data-v-f4b8e239><h6 class="card-title mb-0" data-v-f4b8e239>Abhijeet Singh</h6><span class="nav-item small text-body-secondary" data-v-f4b8e239> 28 March 2024</span></div></div></div></div>',1),ka={class:"barlow-semibold"},ja={class:""},Sa={key:0,src:"https://miro.medium.com/v2/resize:fill:200:200/1*TYNsHKGvELRsgalw4UwIdg.png",height:"100",width:"100"},Ia={key:1,src:"https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q",height:"100",width:"100"},qa=f('<div class="d-flex justify-content-between" data-v-f4b8e239><div data-v-f4b8e239><div class="p-2" data-v-f4b8e239><span class="badge" style="margin-right:.5rem;background-color:#5E1675;" data-v-f4b8e239>canada</span><span class="badge" style="margin-right:.5rem;background-color:#EE4266;" data-v-f4b8e239>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#e1b216;" data-v-f4b8e239>success</span><span class="badge" style="margin-right:.5rem;background-color:#337357;" data-v-f4b8e239>religion</span></div></div><div class="p-2" data-v-f4b8e239><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-f4b8e239></i></div></div>',1),Ea={class:"list-group list-group-flush",style:{"margin-top":"1rem"}},Fa={class:"d-flex flex-row justify-content-between align-items-center"},Ta={class:"col d-flex flex-column position-static"},$a=f('<div class="d-flex align-items-center justify-content-between" data-v-f4b8e239><div class="d-flex align-items-center mb-2" data-v-f4b8e239><div class="avatar avatar-story me-2" data-v-f4b8e239><a href="#!" data-v-f4b8e239><img class="avatar-img rounded-circle" height="36px" src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=faces&amp;fit=crop&amp;h=200&amp;w=200&amp;s=3759e09a5b9fbe53088b23c615b6312e" alt="" data-v-f4b8e239></a></div><div data-v-f4b8e239><div class="" data-v-f4b8e239><h6 class="card-title mb-0" data-v-f4b8e239>Abhijeet Singh</h6><span class="nav-item small" data-v-f4b8e239> 28 March 2024</span></div></div></div></div>',1),Ca={class:"barlow-semibold"},La={class:""},Da={key:0,src:"https://miro.medium.com/v2/resize:fill:200:200/1*TYNsHKGvELRsgalw4UwIdg.png",height:"100",width:"100"},za={key:1,src:"https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q",height:"100",width:"100"},Aa=f('<div class="d-flex justify-content-between" data-v-f4b8e239><div data-v-f4b8e239><div class="p-2" data-v-f4b8e239><span class="badge" style="margin-right:.5rem;background-color:#5E1675;" data-v-f4b8e239>canada</span><span class="badge" style="margin-right:.5rem;background-color:#EE4266;" data-v-f4b8e239>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#e1b216;" data-v-f4b8e239>success</span><span class="badge" style="margin-right:.5rem;background-color:#337357;" data-v-f4b8e239>religion</span></div></div><div class="p-2" data-v-f4b8e239><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-f4b8e239></i></div></div>',1),Ba=f('<div class="card border border-3 shadow rounded" style="margin-bottom:1rem;margin-top:1rem;" data-v-f4b8e239><div class="card-body" data-v-f4b8e239><div class="col d-flex flex-column position-static" data-v-f4b8e239><div class="d-flex align-items-center justify-content-between" data-v-f4b8e239><div class="d-flex align-items-center mb-2" data-v-f4b8e239><div class="avatar avatar-story me-2" data-v-f4b8e239><a href="#!" data-v-f4b8e239><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-f4b8e239></a></div><div data-v-f4b8e239><div class="" data-v-f4b8e239><h6 class="card-title mb-0" data-v-f4b8e239>Lori Ferguson</h6><span class="nav-item small" data-v-f4b8e239> 2hr ago</span></div></div></div></div><div class="p-2" data-v-f4b8e239><span class="badge" style="margin-right:.5rem;background-color:#0C0C0C;" data-v-f4b8e239>canada</span><span class="badge" style="margin-right:.5rem;background-color:#481E14;" data-v-f4b8e239>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#9B3922;" data-v-f4b8e239>success</span><span class="badge" style="margin-right:.5rem;background-color:#F2613F;" data-v-f4b8e239>info</span></div><p class="p-2" data-v-f4b8e239>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p></div></div></div><div class="card border border-3 shadow" style="margin-bottom:1rem;margin-top:1rem;" data-v-f4b8e239><div class="card-body" data-v-f4b8e239><div class="col d-flex flex-column position-static" data-v-f4b8e239><div class="d-flex align-items-center justify-content-between" data-v-f4b8e239><div class="d-flex align-items-center mb-2" data-v-f4b8e239><div class="avatar avatar-story me-2" data-v-f4b8e239><a href="#!" data-v-f4b8e239><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-f4b8e239></a></div><div data-v-f4b8e239><div class="" data-v-f4b8e239><h6 class="card-title mb-0" data-v-f4b8e239>Lori Ferguson</h6><span class="nav-item small" data-v-f4b8e239> 2hr ago</span></div></div></div></div><div class="p-2" data-v-f4b8e239><span class="badge" style="margin-right:.5rem;background-color:#FF204E;" data-v-f4b8e239>canada</span><span class="badge" style="margin-right:.5rem;background-color:#A0153E;" data-v-f4b8e239>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#5D0E41;" data-v-f4b8e239>success</span><span class="badge" style="margin-right:.5rem;background-color:#00224D;" data-v-f4b8e239>info</span></div><p class="p-2" data-v-f4b8e239>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-f4b8e239><div data-v-f4b8e239><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-f4b8e239></i><i class="fa-solid fa-share p-2 fa-lg" data-v-f4b8e239></i></div><div data-v-f4b8e239><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-f4b8e239></i></div></div></div></div></div><div class="card border border-3 border-info-subtle shadow" style="margin-bottom:1rem;" data-v-f4b8e239><div class="card-body" data-v-f4b8e239><div class="d-flex align-items-center justify-content-between" data-v-f4b8e239><div class="d-flex align-items-center mb-2" data-v-f4b8e239><div class="avatar avatar-story me-2" data-v-f4b8e239><a href="#!" data-v-f4b8e239><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-f4b8e239></a></div><div data-v-f4b8e239><div class="nav nav-divider" data-v-f4b8e239><h6 class="nav-item card-title mb-0" data-v-f4b8e239>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-f4b8e239> 2hr ago</span></div></div></div></div><div class="p-2" data-v-f4b8e239><span style="margin-right:.5rem;" data-v-f4b8e239><span class="text-success" data-v-f4b8e239>#</span>canada</span><span style="margin-right:.5rem;" data-v-f4b8e239><span class="text-primary" data-v-f4b8e239>#</span>abroad</span><span style="margin-right:.5rem;" data-v-f4b8e239><span class="text-warning" data-v-f4b8e239>#</span>success</span><span style="margin-right:.5rem;" data-v-f4b8e239><span class="text-secondary" data-v-f4b8e239>#</span>info</span></div><p class="p-2" data-v-f4b8e239>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-f4b8e239><div data-v-f4b8e239><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-f4b8e239></i><i class="fa-solid fa-share p-2 fa-lg" data-v-f4b8e239></i></div><div data-v-f4b8e239><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-f4b8e239></i></div></div></div></div><div class="card border border-3 border-success-subtle shadow" style="margin-bottom:1rem;" data-v-f4b8e239><div class="card-body" data-v-f4b8e239><div class="d-flex align-items-center justify-content-between" data-v-f4b8e239><div class="d-flex align-items-center" data-v-f4b8e239><div class="avatar avatar-story me-2" data-v-f4b8e239><a href="#!" data-v-f4b8e239><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-f4b8e239></a></div><div data-v-f4b8e239><div class="nav nav-divider" data-v-f4b8e239><h6 class="nav-item card-title mb-0" data-v-f4b8e239>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-f4b8e239> 2hr ago</span></div></div></div></div><div class="p-2" data-v-f4b8e239><span class="badge" style="margin-right:.5rem;background-color:#0C0C0C;" data-v-f4b8e239>canada</span><span class="badge" style="margin-right:.5rem;background-color:#481E14;" data-v-f4b8e239>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#9B3922;" data-v-f4b8e239>success</span><span class="badge" style="margin-right:.5rem;background-color:#F2613F;" data-v-f4b8e239>info</span></div><p class="p-2" data-v-f4b8e239>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-f4b8e239><div data-v-f4b8e239><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-f4b8e239></i><i class="fa-solid fa-share p-2 fa-lg" data-v-f4b8e239></i></div><div data-v-f4b8e239><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-f4b8e239></i></div></div></div></div><div class="card border border-3 border-warning-subtle shadow" style="margin-bottom:1rem;" data-v-f4b8e239><div class="card-body" data-v-f4b8e239><div class="d-flex align-items-center justify-content-between" data-v-f4b8e239><div class="d-flex align-items-center" data-v-f4b8e239><div class="avatar avatar-story me-2" data-v-f4b8e239><a href="#!" data-v-f4b8e239><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-f4b8e239></a></div><div data-v-f4b8e239><div class="nav nav-divider" data-v-f4b8e239><h6 class="nav-item card-title mb-0" data-v-f4b8e239>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-f4b8e239> 2hr ago</span></div></div></div></div><div class="p-2" data-v-f4b8e239><span class="badge" style="margin-right:.5rem;background-color:#5E1675;" data-v-f4b8e239>canada</span><span class="badge" style="margin-right:.5rem;background-color:#EE4266;" data-v-f4b8e239>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#e1b216;" data-v-f4b8e239>success</span><span class="badge" style="margin-right:.5rem;background-color:#337357;" data-v-f4b8e239>info</span></div><p class="p-2" data-v-f4b8e239>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-f4b8e239><div data-v-f4b8e239><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-f4b8e239></i><i class="fa-solid fa-share p-2 fa-lg" data-v-f4b8e239></i></div><div data-v-f4b8e239><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-f4b8e239></i></div></div></div></div><div class="card border border-3 border-danger-subtle shadow" style="margin-bottom:2rem;" data-v-f4b8e239><div class="card-body" data-v-f4b8e239><div class="d-flex align-items-center justify-content-between" data-v-f4b8e239><div class="d-flex align-items-center" data-v-f4b8e239><div class="avatar avatar-story me-2" data-v-f4b8e239><a href="#!" data-v-f4b8e239><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-f4b8e239></a></div><div data-v-f4b8e239><div class="nav nav-divider" data-v-f4b8e239><h6 class="nav-item card-title mb-0" data-v-f4b8e239>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-f4b8e239> 2hr ago</span></div></div></div></div><div class="p-2" data-v-f4b8e239><span class="badge" style="margin-right:.5rem;background-color:#FF204E;" data-v-f4b8e239>canada</span><span class="badge" style="margin-right:.5rem;background-color:#A0153E;" data-v-f4b8e239>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#5D0E41;" data-v-f4b8e239>success</span><span class="badge" style="margin-right:.5rem;background-color:#00224D;" data-v-f4b8e239>info</span></div><p class="p-2" data-v-f4b8e239>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-f4b8e239><div data-v-f4b8e239><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-f4b8e239></i><i class="fa-solid fa-share p-2 fa-lg" data-v-f4b8e239></i></div><div data-v-f4b8e239><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-f4b8e239></i></div></div></div></div><div class="card rounded border-0" style="margin-bottom:2rem;" data-v-f4b8e239><div class="card-header border-0 pb-0" data-v-f4b8e239><div class="d-flex align-items-center justify-content-between" data-v-f4b8e239><div class="d-flex align-items-center" data-v-f4b8e239><div class="avatar avatar-story me-2" data-v-f4b8e239><a href="#!" data-v-f4b8e239><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-f4b8e239></a></div><div data-v-f4b8e239><div class="nav nav-divider" data-v-f4b8e239><h6 class="nav-item card-title mb-0" data-v-f4b8e239>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-f4b8e239> 2hr ago</span></div></div></div></div></div><div class="card-body" data-v-f4b8e239><p class="p-2" data-v-f4b8e239>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="p-2" data-v-f4b8e239><span class="badge text-bg-primary" style="margin-right:.5rem;" data-v-f4b8e239>canada</span><span class="badge text-bg-secondary" style="margin-right:.5rem;" data-v-f4b8e239>abroad</span><span class="badge text-bg-success" style="margin-right:.5rem;" data-v-f4b8e239>success</span><span class="badge text-bg-info" style="margin-right:.5rem;" data-v-f4b8e239>info</span></div></div><div class="card-footer" data-v-f4b8e239><div class="d-flex justify-content-between" data-v-f4b8e239><div data-v-f4b8e239><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-f4b8e239></i><i class="fa-solid fa-share p-2 fa-lg" data-v-f4b8e239></i></div><div data-v-f4b8e239><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-f4b8e239></i></div></div></div></div><div class="card rounded" style="margin-bottom:2rem;" data-v-f4b8e239><div class="card-header border-0 pb-0" data-v-f4b8e239><div class="d-flex align-items-center justify-content-between" data-v-f4b8e239><div class="d-flex align-items-center" data-v-f4b8e239><div class="avatar avatar-story me-2" data-v-f4b8e239><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-f4b8e239></div><div data-v-f4b8e239><div class="nav nav-divider" data-v-f4b8e239><h6 class="nav-item card-title mb-0" data-v-f4b8e239>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-f4b8e239> 2hr ago</span></div></div></div></div></div><div class="card-body" data-v-f4b8e239><p class="p-2" data-v-f4b8e239>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="p-2" data-v-f4b8e239><span class="badge text-bg-primary" style="margin-right:.5rem;" data-v-f4b8e239>canada</span><span class="badge text-bg-secondary" style="margin-right:.5rem;" data-v-f4b8e239>abroad</span><span class="badge text-bg-success" style="margin-right:.5rem;" data-v-f4b8e239>success</span><span class="badge text-bg-info" style="margin-right:.5rem;" data-v-f4b8e239>info</span></div></div><div class="card-footer" data-v-f4b8e239><div class="d-flex justify-content-between" data-v-f4b8e239><div data-v-f4b8e239><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-f4b8e239></i><i class="fa-solid fa-share p-2 fa-lg" data-v-f4b8e239></i></div><div data-v-f4b8e239><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-f4b8e239></i></div></div></div></div>',8),Oa={__name:"DiscusionView",setup(o){let p=g([]);const w=D();z(),g("");let s=g(!1);return A(async()=>{function d(){w.state.isDiscusionLoaded&&(p.value.push(...w.state.discusions),clearInterval(m),s.value=!0)}const m=setInterval(d,1e3)}),(d,m)=>{const h=B("router-link");return e(),t("div",va,[a("div",ba,[r(da),fa]),l(s)?u("",!0):(e(),t("div",pa,[r(y)])),l(s)?u("",!0):(e(),t("div",ma,[r(y)])),l(s)?u("",!0):(e(),t("div",ga,[r(y)])),l(s)?u("",!0):(e(),t("div",ha,[r(y)])),l(s)?u("",!0):(e(),t("div",ua,[r(y)])),(e(!0),t(k,null,q(l(p),(c,v)=>(e(),t("div",{class:"card border-0 shadow-lg rounded",style:{"margin-bottom":"1rem","margin-top":"1rem"},key:v},[a("div",ya,[a("div",_a,[a("div",null,[a("div",wa,[xa,r(h,{to:`/discusion/${c.id}`,class:"p-2"},{default:x(()=>[a("h5",ka,E(c.title),1)]),_:2},1032,["to"])])]),a("div",ja,[v%2!=0?(e(),t("img",Sa)):(e(),t("img",Ia))])]),qa])]))),128)),a("ul",Ea,[(e(!0),t(k,null,q(l(p),(c,v)=>(e(),t("li",{class:"list-group-item",key:v,style:{"margin-bottom":"1rem",padding:"12px 4px"}},[a("div",Fa,[a("div",null,[a("div",Ta,[$a,r(h,{to:`/discusion/${c.id}`,class:"p-2"},{default:x(()=>[a("h5",Ca,E(c.title),1)]),_:2},1032,["to"])])]),a("div",La,[v%2!=0?(e(),t("img",Da)):(e(),t("img",za))])]),Aa]))),128))]),Ba])}}},Na=j(Oa,[["__scopeId","data-v-f4b8e239"]]);export{Na as default};
