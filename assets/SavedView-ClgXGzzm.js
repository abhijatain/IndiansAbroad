import{_,r as h,e as m,l as b,c as i,F as f,j as k,u as g,o as l,g as t,t as d,n as v,p as y,q as w,s as S,x as T}from"./index-D-Qi-kSX.js";const p=a=>(w("data-v-6071d818"),a=a(),S(),a),x={class:"container",style:{"margin-top":"5rem"}},C=p(()=>t("div",{class:"btn-group",role:"group","aria-label":"Basic radio toggle button group"},[t("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio1",autocomplete:"off",checked:""}),t("label",{class:"btn btn-outline-warning",for:"btnradio1"},"News"),t("input",{type:"radio",class:"btn-check",name:"btnradio",id:"btnradio2",autocomplete:"off"}),t("label",{class:"btn btn-outline-warning",for:"btnradio2"},"Discusions")],-1)),I={class:"card-body"},V={class:"text-section"},N={class:"card-title fw-bold"},j={class:"card-text"},A={class:"cta-section"},B=p(()=>t("div",null,null,-1)),E=["onClick"],O={__name:"SavedView",setup(a){let n=h([]);m(async()=>{const s=localStorage.getItem("auth-token"),e=await fetch("https://community-app-india.onrender.com/get/save",{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":s,"Content-Type":"application/json"}}),o=await e.json();e.ok&&(n.value.push(...o),console.log(n))});async function u(s,e){const o=localStorage.getItem("auth-token");await fetch("https://community-app-india.onrender.com/save",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":o,"Content-type":"application/json"},body:JSON.stringify({id:s.id})}),n.value.splice(e,1)}return(s,e)=>{const o=b("router-link");return l(),i("div",x,[C,(l(!0),i(f,null,k(g(n),(c,r)=>(l(),i("div",{class:"card mt-3",key:r},[t("div",I,[t("div",V,[t("h5",N,d(c.category),1),t("p",j,d(c.title),1),v(o,{to:c.link},{default:y(()=>[T("View Post")]),_:2},1032,["to"])]),t("div",A,[B,t("i",{class:"fa-solid fa-bookmark p-2",onClick:P=>u(c,r)},null,8,E)])])]))),128))])}}},D=_(O,[["__scopeId","data-v-6071d818"]]);export{D as default};
