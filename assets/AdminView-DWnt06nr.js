import{r as l,e as J,c,f as t,w as r,v as d,u as n,i,g as S,h as F,F as j,j as O,o as m,t as V}from"./index-EdoZvBGd.js";const B={class:"container mt-5 p-5"},M=t("h1",null,"Countries",-1),D={class:"mb-3"},Y=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Name",-1),R={key:0,class:"spinner-border",role:"status"},z=t("span",{class:"visually-hidden"},"Loading...",-1),H=[z],K=t("h1",null,"Tags",-1),Q={class:"mb-3"},W=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Name",-1),X=t("h1",null,"Categories",-1),Z={class:"mb-3"},$=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Name",-1),ee={key:1,class:"spinner-border",role:"status"},te=t("span",{class:"visually-hidden"},"Loading...",-1),oe=[te],ae=t("h1",null,"Article",-1),le={class:"mb-3"},ne=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Title",-1),se={class:"mb-3"},re=t("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Summary",-1),ie={class:"mb-3"},ue=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Youtube",-1),ce={class:"mb-3"},me=t("label",{for:"exampleFormControlInput1",class:"form-label"},"source",-1),de={class:"mb-3"},pe=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Country",-1),he=["value"],fe={class:"mb-3"},_e=t("label",{for:"exampleFormControlInput1",class:"form-label"},"Category",-1),ve=["value"],ye={key:0,class:"spinner-border",role:"status"},be=t("span",{class:"visually-hidden"},"Loading...",-1),ge=[be],ke={__name:"AdminView",setup(xe){let T=l(!0),k=l(!0),C=l(!0),x=l([]),I=l([]),h=l(null),f=l(null),p=l(null),_=l(null),v=l(null),u=l(null),y=l(null),b=l(null),g=l(null);J(async()=>{const a=await fetch("https://test-am3oxfhvvq-em.a.run.app/api/category",{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"}}),o=await a.json();a.ok&&x.value.push(...o);const e=await fetch("https://test-am3oxfhvvq-em.a.run.app/countries",{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"}}),s=await e.json();e.ok&&I.value.push(...s)});function E(a){return/\.(jpeg|jpg|gif|png)$/.test(a)}async function P(){if(!E(u.value)){let e=function(L){const q=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,w=L.match(q);return w&&w[2].length===11?"https://www.youtube.com/embed/"+w[2]:null};const s=u.value,A=e(s);u.value=A,console.log(A)}C.value=!1;const a=await fetch("https://test-am3oxfhvvq-em.a.run.app/api/article",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({title:_.value,summary:v.value,youtube:u.value,source:y.value,category_id:b.value,country_id:g.value})}),o=await a.json();a.ok&&(C.value=!0,alert(o.msg))}async function N(){const a=performance.now();if(k.value=!1,x.value.filter(e=>e.name!=p.value)){const e=await fetch("https://test-am3oxfhvvq-em.a.run.app/api/category",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({name:p.value})}),s=await e.json();e.ok&&(x.value.push(s),k.value=!0)}else alert("exists category");const o=performance.now();alert(`${o-a}`)}async function U(){T.value=!1;const a=await fetch("https://test-am3oxfhvvq-em.a.run.app/create/tag",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({name:h.value})}),o=await a.json();a.ok&&(T.value=!0,alert(o.message))}async function G(){const a=await fetch("https://test-am3oxfhvvq-em.a.run.app/create/country",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({name:f.value})}),o=await a.json();a.ok&&alert(o.message)}return(a,o)=>(m(),c("div",B,[M,t("div",D,[Y,r(t("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[0]||(o[0]=e=>i(f)?f.value=e:f=e)},null,512),[[d,n(f)]])]),t("button",{onClick:G,class:"mb-5"},"Add"),n(T)?S("",!0):(m(),c("div",R,H)),K,t("div",Q,[W,r(t("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[1]||(o[1]=e=>i(h)?h.value=e:h=e)},null,512),[[d,n(h)]])]),t("button",{onClick:U,class:"mb-5"},"Add"),X,t("div",Z,[$,r(t("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[2]||(o[2]=e=>i(p)?p.value=e:p=e)},null,512),[[d,n(p)]])]),t("button",{onClick:N,class:"mb-5"},"Add"),n(k)?S("",!0):(m(),c("div",ee,oe)),ae,t("div",le,[ne,r(t("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[3]||(o[3]=e=>i(_)?_.value=e:_=e)},null,512),[[d,n(_)]])]),t("div",se,[re,r(t("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3","onUpdate:modelValue":o[4]||(o[4]=e=>i(v)?v.value=e:v=e)},null,512),[[d,n(v)]])]),t("div",ie,[ue,r(t("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[5]||(o[5]=e=>i(u)?u.value=e:u=e)},null,512),[[d,n(u)]])]),t("div",ce,[me,r(t("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[6]||(o[6]=e=>i(y)?y.value=e:y=e)},null,512),[[d,n(y)]])]),t("div",de,[pe,r(t("select",{class:"form-select","onUpdate:modelValue":o[7]||(o[7]=e=>i(g)?g.value=e:g=e)},[(m(!0),c(j,null,O(n(I),(e,s)=>(m(),c("option",{value:e.id,key:s},V(e.name),9,he))),128))],512),[[F,n(g)]])]),t("div",fe,[_e,r(t("select",{class:"form-select","onUpdate:modelValue":o[8]||(o[8]=e=>i(b)?b.value=e:b=e)},[(m(!0),c(j,null,O(n(x),(e,s)=>(m(),c("option",{value:e.id,key:s},V(e.name),9,ve))),128))],512),[[F,n(b)]]),n(C)?S("",!0):(m(),c("div",ye,ge)),t("button",{onClick:P},"Add")])]))}};export{ke as default};