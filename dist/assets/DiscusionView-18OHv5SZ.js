import{_ as m,r,o as g,c as h,a,w as F,v as S,u as v,i as f,l,m as y,F as q,d as b,q as _,s as x,j as E,k as T}from"./index-BPHioeKD.js";import{s as C}from"./editor.esm-IN1BreCl.js";const c=e=>(_("data-v-876a0627"),e=e(),x(),e),$=c(()=>a("button",{class:"btn btn-outline-success",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasExample","aria-controls":"offcanvasExample"},[a("i",{class:"fa-solid fa-pen-to-square",style:{color:"#337357"}})],-1)),D={class:"offcanvas offcanvas-start",tabindex:"-1",id:"offcanvasExample","aria-labelledby":"offcanvasExampleLabel",style:{width:"100%",height:"100%"}},L=c(()=>a("div",{class:"offcanvas-header"},[a("button",{type:"button",class:"btn-close","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1)),P={class:"offcanvas-body"},A={class:"mb-3"},B=b('<div class="mb-5" data-v-876a0627><form class="row gy-2 gx-3 align-items-center" data-v-876a0627><div class="col-auto" data-v-876a0627><select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color:#FFAF45;width:25vw;" data-v-876a0627><option selected data-v-876a0627>Country</option><option value="1" data-v-876a0627>One</option><option value="2" data-v-876a0627>Two</option><option value="3" data-v-876a0627>Three</option></select></div><div class="col-auto" data-v-876a0627><label class="visually-hidden" for="autoSizingSelect" data-v-876a0627>Preference</label><select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color:#FB6D48;width:25vw;" data-v-876a0627><option selected data-v-876a0627>Tag2</option><option value="1" data-v-876a0627>One</option><option value="2" data-v-876a0627>Two</option><option value="3" data-v-876a0627>Three</option></select></div><div class="col-auto" data-v-876a0627><label class="visually-hidden" for="autoSizingSelect" data-v-876a0627>Preference</label><select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color:#D74B76;width:25vw;" data-v-876a0627><option selected data-v-876a0627>Tag3</option><option value="1" data-v-876a0627>One</option><option value="2" data-v-876a0627>Two</option><option value="3" data-v-876a0627>Three</option></select></div><div class="col-auto" data-v-876a0627><label class="visually-hidden" for="autoSizingSelect" data-v-876a0627>Preference</label><select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color:#673F69;width:25vw;" data-v-876a0627><option selected data-v-876a0627>Tag4</option><option value="1" data-v-876a0627>One</option><option value="2" data-v-876a0627>Two</option><option value="3" data-v-876a0627>Three</option></select></div></form></div>',1),O={class:"mb-3"},V=c(()=>a("span",{class:"ql-formats"},[a("select",{class:"ql-font"}),a("select",{class:"ql-size"})],-1)),z=c(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-bold"}),a("button",{class:"ql-italic"}),a("button",{class:"ql-underline"}),a("button",{class:"ql-strike"})],-1)),N=c(()=>a("span",{class:"ql-formats"},[a("select",{class:"ql-color"}),a("select",{class:"ql-background"})],-1)),G=c(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-list",value:"ordered"}),a("button",{class:"ql-list",value:"bullet"}),a("button",{class:"ql-indent",value:"-1"}),a("button",{class:"ql-indent",value:"+1"})],-1)),R=c(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-direction",value:"rtl"}),a("select",{class:"ql-align"})],-1)),U=c(()=>a("button",{class:"ql-video"},null,-1)),Y=c(()=>a("button",{class:"ql-link"},null,-1)),J=c(()=>a("i",{class:"fa-solid fa-image"},null,-1)),M=[J],H=c(()=>a("span",{class:"ql-formats"},[a("button",{class:"ql-clean"})],-1)),K=c(()=>a("button",{type:"button",class:"btn btn-secondary m-1"},"Preview",-1)),Q={__name:"AddDiscusion",setup(e){let s=r(""),d=r("Type Your Content here"),o=r(null);async function u(){const i=await(await fetch("https://community-app-india.onrender.com/api/discusion",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({title:s.value,data:d.value})})).json();console.log(i)}function k(){document.getElementById("formFile").click()}async function j(){let n=new FormData;if(n.append("image",o.value.files[0]),o.value.files[0]){const t=await fetch("https://community-app-india.onrender.com/upload/image",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token")},body:n}),I=await t.json();t.ok&&(d.value+=`<img src=${I.url} referrerpolicy="no-referrer">`)}}return(n,i)=>(g(),h(q,null,[$,a("div",D,[L,a("div",P,[a("div",A,[a("h1",null,[F(a("textarea",{type:"text",role:"textbox",placeholder:"Your Post Title",class:"border-0 w-100 arvo-bold p-2","onUpdate:modelValue":i[0]||(i[0]=t=>f(s)?s.value=t:s=t),style:{height:"auto"}},null,512),[[S,v(s)]])])]),B,a("div",O,[l(v(C),{modelValue:v(d),"onUpdate:modelValue":i[1]||(i[1]=t=>f(d)?d.value=t:d=t),editorStyle:"height: 60vh;"},{toolbar:y(()=>[V,z,N,G,R,a("span",{class:"ql-formats"},[U,Y,a("button",{onClick:k},M)]),H]),_:1},8,["modelValue"]),a("input",{ref_key:"fileInput",ref:o,type:"file",id:"formFile",accept:"image/*",hidden:"",onChange:j},null,544)]),a("div",{class:"offcanvas-body"},[a("div",{class:"fixed-bottom p-2 bg-dark"},[a("button",{type:"button",class:"btn btn-primary m-1",onClick:u},"Publish"),K,a("button",{type:"button",class:"btn btn-secondary m-1",onClick:u},"Edit")])])])])],64))}},W=m(Q,[["__scopeId","data-v-876a0627"]]),X={},Z={class:"card border-0","aria-hidden":"true"},aa=b('<div class="card-body"><h5 class="card-title placeholder-glow"><span class="placeholder col-6"></span></h5><p class="card-text placeholder-glow"><span class="placeholder col-7"></span><span class="placeholder col-4"></span><span class="placeholder col-4"></span><span class="placeholder col-6"></span><span class="placeholder col-8"></span></p></div>',1),ca=[aa];function ea(e,s){return g(),h("div",Z,ca)}const p=m(X,[["render",ea]]),w=e=>(_("data-v-cc8ebcb6"),e=e(),x(),e),ta={class:"container",style:{"margin-top":"4rem"}},sa={class:"d-flex align-items-center justify-content-between p-2"},da=w(()=>a("div",{class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},[a("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""}),a("label",{class:"btn btn-outline-secondary",for:"btnradio1"},"Latest"),a("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off"}),a("label",{class:"btn btn-outline-secondary",for:"btnradio2"},"Popular")],-1)),ia={class:"card border border-3 shadow p-2",style:{"margin-bottom":"1rem","margin-top":"1rem"}},la={class:"card border border-3 shadow p-2",style:{"margin-bottom":"1rem","margin-top":"1rem"}},oa={class:"card border border-3 shadow p-2",style:{"margin-bottom":"1rem","margin-top":"1rem"}},ra={class:"card border border-3 shadow",style:{"margin-bottom":"1rem","margin-top":"1rem"}},na={class:"card-body"},ba={class:"col d-flex flex-column position-static"},va=b('<div class="d-flex align-items-center justify-content-between" data-v-cc8ebcb6><div class="d-flex align-items-center mb-2" data-v-cc8ebcb6><div class="avatar avatar-story me-2" data-v-cc8ebcb6><a href="#!" data-v-cc8ebcb6><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-cc8ebcb6></a></div><div data-v-cc8ebcb6><div class="" data-v-cc8ebcb6><h6 class="card-title mb-0" data-v-cc8ebcb6>Lori Ferguson</h6><span class="nav-item small" data-v-cc8ebcb6> 2hr ago</span></div></div></div></div><div class="p-2" data-v-cc8ebcb6><span class="badge" style="margin-right:.5rem;background-color:#0C0C0C;" data-v-cc8ebcb6>canada</span><span class="badge" style="margin-right:.5rem;background-color:#481E14;" data-v-cc8ebcb6>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#9B3922;" data-v-cc8ebcb6>success</span><span class="badge" style="margin-right:.5rem;background-color:#F2613F;" data-v-cc8ebcb6>info</span></div>',2),pa=w(()=>a("p",null," I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll. ",-1)),ma=b('<div class="card border border-3 shadow" style="margin-bottom:1rem;margin-top:1rem;" data-v-cc8ebcb6><div class="card-body" data-v-cc8ebcb6><div class="col d-flex flex-column position-static" data-v-cc8ebcb6><div class="d-flex align-items-center justify-content-between" data-v-cc8ebcb6><div class="d-flex align-items-center mb-2" data-v-cc8ebcb6><div class="avatar avatar-story me-2" data-v-cc8ebcb6><a href="#!" data-v-cc8ebcb6><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-cc8ebcb6></a></div><div data-v-cc8ebcb6><div class="" data-v-cc8ebcb6><h6 class="card-title mb-0" data-v-cc8ebcb6>Lori Ferguson</h6><span class="nav-item small" data-v-cc8ebcb6> 2hr ago</span></div></div></div></div><div class="p-2" data-v-cc8ebcb6><span class="badge" style="margin-right:.5rem;background-color:#5E1675;" data-v-cc8ebcb6>canada</span><span class="badge" style="margin-right:.5rem;background-color:#EE4266;" data-v-cc8ebcb6>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#e1b216;" data-v-cc8ebcb6>success</span><span class="badge" style="margin-right:.5rem;background-color:#337357;" data-v-cc8ebcb6>info</span></div><p class="p-2" data-v-cc8ebcb6>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p></div></div></div><div class="card border border-3 shadow" style="margin-bottom:1rem;margin-top:1rem;" data-v-cc8ebcb6><div class="card-body" data-v-cc8ebcb6><div class="col d-flex flex-column position-static" data-v-cc8ebcb6><div class="d-flex align-items-center justify-content-between" data-v-cc8ebcb6><div class="d-flex align-items-center mb-2" data-v-cc8ebcb6><div class="avatar avatar-story me-2" data-v-cc8ebcb6><a href="#!" data-v-cc8ebcb6><img class="avatar-img rounded-circle" height="42px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-cc8ebcb6></a></div><div data-v-cc8ebcb6><div class="" data-v-cc8ebcb6><h6 class="card-title mb-0" data-v-cc8ebcb6>Lori Ferguson</h6><span class="nav-item small" data-v-cc8ebcb6> 2hr ago</span></div></div></div></div><div class="p-2" data-v-cc8ebcb6><span class="badge" style="margin-right:.5rem;background-color:#FF204E;" data-v-cc8ebcb6>canada</span><span class="badge" style="margin-right:.5rem;background-color:#A0153E;" data-v-cc8ebcb6>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#5D0E41;" data-v-cc8ebcb6>success</span><span class="badge" style="margin-right:.5rem;background-color:#00224D;" data-v-cc8ebcb6>info</span></div><p class="p-2" data-v-cc8ebcb6>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-cc8ebcb6><div data-v-cc8ebcb6><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-cc8ebcb6></i><i class="fa-solid fa-share p-2 fa-lg" data-v-cc8ebcb6></i></div><div data-v-cc8ebcb6><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-cc8ebcb6></i></div></div></div></div></div><div class="card border border-3 border-info-subtle shadow" style="margin-bottom:1rem;" data-v-cc8ebcb6><div class="card-body" data-v-cc8ebcb6><div class="d-flex align-items-center justify-content-between" data-v-cc8ebcb6><div class="d-flex align-items-center mb-2" data-v-cc8ebcb6><div class="avatar avatar-story me-2" data-v-cc8ebcb6><a href="#!" data-v-cc8ebcb6><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-cc8ebcb6></a></div><div data-v-cc8ebcb6><div class="nav nav-divider" data-v-cc8ebcb6><h6 class="nav-item card-title mb-0" data-v-cc8ebcb6>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-cc8ebcb6> 2hr ago</span></div></div></div></div><div class="p-2" data-v-cc8ebcb6><span style="margin-right:.5rem;" data-v-cc8ebcb6><span class="text-success" data-v-cc8ebcb6>#</span>canada</span><span style="margin-right:.5rem;" data-v-cc8ebcb6><span class="text-primary" data-v-cc8ebcb6>#</span>abroad</span><span style="margin-right:.5rem;" data-v-cc8ebcb6><span class="text-warning" data-v-cc8ebcb6>#</span>success</span><span style="margin-right:.5rem;" data-v-cc8ebcb6><span class="text-secondary" data-v-cc8ebcb6>#</span>info</span></div><p class="p-2" data-v-cc8ebcb6>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-cc8ebcb6><div data-v-cc8ebcb6><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-cc8ebcb6></i><i class="fa-solid fa-share p-2 fa-lg" data-v-cc8ebcb6></i></div><div data-v-cc8ebcb6><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-cc8ebcb6></i></div></div></div></div><div class="card border border-3 border-success-subtle shadow" style="margin-bottom:1rem;" data-v-cc8ebcb6><div class="card-body" data-v-cc8ebcb6><div class="d-flex align-items-center justify-content-between" data-v-cc8ebcb6><div class="d-flex align-items-center" data-v-cc8ebcb6><div class="avatar avatar-story me-2" data-v-cc8ebcb6><a href="#!" data-v-cc8ebcb6><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-cc8ebcb6></a></div><div data-v-cc8ebcb6><div class="nav nav-divider" data-v-cc8ebcb6><h6 class="nav-item card-title mb-0" data-v-cc8ebcb6>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-cc8ebcb6> 2hr ago</span></div></div></div></div><div class="p-2" data-v-cc8ebcb6><span class="badge" style="margin-right:.5rem;background-color:#0C0C0C;" data-v-cc8ebcb6>canada</span><span class="badge" style="margin-right:.5rem;background-color:#481E14;" data-v-cc8ebcb6>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#9B3922;" data-v-cc8ebcb6>success</span><span class="badge" style="margin-right:.5rem;background-color:#F2613F;" data-v-cc8ebcb6>info</span></div><p class="p-2" data-v-cc8ebcb6>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-cc8ebcb6><div data-v-cc8ebcb6><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-cc8ebcb6></i><i class="fa-solid fa-share p-2 fa-lg" data-v-cc8ebcb6></i></div><div data-v-cc8ebcb6><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-cc8ebcb6></i></div></div></div></div><div class="card border border-3 border-warning-subtle shadow" style="margin-bottom:1rem;" data-v-cc8ebcb6><div class="card-body" data-v-cc8ebcb6><div class="d-flex align-items-center justify-content-between" data-v-cc8ebcb6><div class="d-flex align-items-center" data-v-cc8ebcb6><div class="avatar avatar-story me-2" data-v-cc8ebcb6><a href="#!" data-v-cc8ebcb6><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-cc8ebcb6></a></div><div data-v-cc8ebcb6><div class="nav nav-divider" data-v-cc8ebcb6><h6 class="nav-item card-title mb-0" data-v-cc8ebcb6>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-cc8ebcb6> 2hr ago</span></div></div></div></div><div class="p-2" data-v-cc8ebcb6><span class="badge" style="margin-right:.5rem;background-color:#5E1675;" data-v-cc8ebcb6>canada</span><span class="badge" style="margin-right:.5rem;background-color:#EE4266;" data-v-cc8ebcb6>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#e1b216;" data-v-cc8ebcb6>success</span><span class="badge" style="margin-right:.5rem;background-color:#337357;" data-v-cc8ebcb6>info</span></div><p class="p-2" data-v-cc8ebcb6>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-cc8ebcb6><div data-v-cc8ebcb6><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-cc8ebcb6></i><i class="fa-solid fa-share p-2 fa-lg" data-v-cc8ebcb6></i></div><div data-v-cc8ebcb6><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-cc8ebcb6></i></div></div></div></div><div class="card border border-3 border-danger-subtle shadow" style="margin-bottom:2rem;" data-v-cc8ebcb6><div class="card-body" data-v-cc8ebcb6><div class="d-flex align-items-center justify-content-between" data-v-cc8ebcb6><div class="d-flex align-items-center" data-v-cc8ebcb6><div class="avatar avatar-story me-2" data-v-cc8ebcb6><a href="#!" data-v-cc8ebcb6><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-cc8ebcb6></a></div><div data-v-cc8ebcb6><div class="nav nav-divider" data-v-cc8ebcb6><h6 class="nav-item card-title mb-0" data-v-cc8ebcb6>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-cc8ebcb6> 2hr ago</span></div></div></div></div><div class="p-2" data-v-cc8ebcb6><span class="badge" style="margin-right:.5rem;background-color:#FF204E;" data-v-cc8ebcb6>canada</span><span class="badge" style="margin-right:.5rem;background-color:#A0153E;" data-v-cc8ebcb6>abroad</span><span class="badge" style="margin-right:.5rem;background-color:#5D0E41;" data-v-cc8ebcb6>success</span><span class="badge" style="margin-right:.5rem;background-color:#00224D;" data-v-cc8ebcb6>info</span></div><p class="p-2" data-v-cc8ebcb6>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="d-flex justify-content-between" data-v-cc8ebcb6><div data-v-cc8ebcb6><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-cc8ebcb6></i><i class="fa-solid fa-share p-2 fa-lg" data-v-cc8ebcb6></i></div><div data-v-cc8ebcb6><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-cc8ebcb6></i></div></div></div></div><div class="card rounded border-0" style="margin-bottom:2rem;" data-v-cc8ebcb6><div class="card-header border-0 pb-0" data-v-cc8ebcb6><div class="d-flex align-items-center justify-content-between" data-v-cc8ebcb6><div class="d-flex align-items-center" data-v-cc8ebcb6><div class="avatar avatar-story me-2" data-v-cc8ebcb6><a href="#!" data-v-cc8ebcb6><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-cc8ebcb6></a></div><div data-v-cc8ebcb6><div class="nav nav-divider" data-v-cc8ebcb6><h6 class="nav-item card-title mb-0" data-v-cc8ebcb6>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-cc8ebcb6> 2hr ago</span></div></div></div></div></div><div class="card-body" data-v-cc8ebcb6><p class="p-2" data-v-cc8ebcb6>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="p-2" data-v-cc8ebcb6><span class="badge text-bg-primary" style="margin-right:.5rem;" data-v-cc8ebcb6>canada</span><span class="badge text-bg-secondary" style="margin-right:.5rem;" data-v-cc8ebcb6>abroad</span><span class="badge text-bg-success" style="margin-right:.5rem;" data-v-cc8ebcb6>success</span><span class="badge text-bg-info" style="margin-right:.5rem;" data-v-cc8ebcb6>info</span></div></div><div class="card-footer" data-v-cc8ebcb6><div class="d-flex justify-content-between" data-v-cc8ebcb6><div data-v-cc8ebcb6><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-cc8ebcb6></i><i class="fa-solid fa-share p-2 fa-lg" data-v-cc8ebcb6></i></div><div data-v-cc8ebcb6><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-cc8ebcb6></i></div></div></div></div><div class="card rounded" style="margin-bottom:2rem;" data-v-cc8ebcb6><div class="card-header border-0 pb-0" data-v-cc8ebcb6><div class="d-flex align-items-center justify-content-between" data-v-cc8ebcb6><div class="d-flex align-items-center" data-v-cc8ebcb6><div class="avatar avatar-story me-2" data-v-cc8ebcb6><a href="#!" data-v-cc8ebcb6><img class="avatar-img rounded-circle" height="32px" src="https://randomuser.me/api/portraits/men/86.jpg" alt="" data-v-cc8ebcb6></a></div><div data-v-cc8ebcb6><div class="nav nav-divider" data-v-cc8ebcb6><h6 class="nav-item card-title mb-0" data-v-cc8ebcb6>Lori Ferguson</h6><span class="nav-item small" style="margin-left:1rem;" data-v-cc8ebcb6> 2hr ago</span></div></div></div></div></div><div class="card-body" data-v-cc8ebcb6><p class="p-2" data-v-cc8ebcb6>I&#39;m thrilled to share that I&#39;ve completed a graduate certificate course in project management with the president&#39;s honor roll.</p><div class="p-2" data-v-cc8ebcb6><span class="badge text-bg-primary" style="margin-right:.5rem;" data-v-cc8ebcb6>canada</span><span class="badge text-bg-secondary" style="margin-right:.5rem;" data-v-cc8ebcb6>abroad</span><span class="badge text-bg-success" style="margin-right:.5rem;" data-v-cc8ebcb6>success</span><span class="badge text-bg-info" style="margin-right:.5rem;" data-v-cc8ebcb6>info</span></div></div><div class="card-footer" data-v-cc8ebcb6><div class="d-flex justify-content-between" data-v-cc8ebcb6><div data-v-cc8ebcb6><i class="fa-solid fa-heart p-2 fa-lg" style="color:red;" data-v-cc8ebcb6></i><i class="fa-solid fa-share p-2 fa-lg" data-v-cc8ebcb6></i></div><div data-v-cc8ebcb6><i class="fa-solid fa-bookmark p-2 fa-lg" data-v-cc8ebcb6></i></div></div></div></div>',8),ga={__name:"DiscusionView",setup(e){return r([]),E(),r(""),(s,d)=>{const o=T("router-link");return g(),h("div",ta,[a("div",sa,[l(W),da]),a("div",ia,[l(p)]),a("div",la,[l(p)]),a("div",oa,[l(p)]),a("div",ra,[a("div",na,[a("div",ba,[va,l(o,{to:"/",class:"p-2"},{default:y(()=>[pa]),_:1})])])]),ma])}}},fa=m(ga,[["__scopeId","data-v-cc8ebcb6"]]);export{fa as default};