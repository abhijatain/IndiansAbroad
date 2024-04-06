import{r as a,e as V,c,u as n,f as k,g as e,w as r,v as m,i,h as j,F as E,j as L,o as p,t as N}from"./index-D-Qi-kSX.js";const P={class:"container mt-5 p-5"},U={key:0,class:"spinner-border",role:"status"},G=e("span",{class:"visually-hidden"},"Loading...",-1),B=[G],D=e("h1",null,"Tags",-1),J={class:"mb-3"},M=e("label",{for:"exampleFormControlInput1",class:"form-label"},"Name",-1),Y=e("h1",null,"Categories",-1),R={class:"mb-3"},q=e("label",{for:"exampleFormControlInput1",class:"form-label"},"Name",-1),z={key:1,class:"spinner-border",role:"status"},H=e("span",{class:"visually-hidden"},"Loading...",-1),K=[H],Q=e("h1",null,"Article",-1),W={class:"mb-3"},X=e("label",{for:"exampleFormControlInput1",class:"form-label"},"Title",-1),Z={class:"mb-3"},$=e("label",{for:"exampleFormControlTextarea1",class:"form-label"},"Summary",-1),ee={class:"mb-3"},te=e("label",{for:"exampleFormControlInput1",class:"form-label"},"Youtube",-1),oe={class:"mb-3"},le=e("label",{for:"exampleFormControlInput1",class:"form-label"},"source",-1),ae={class:"mb-3"},ne=e("label",{for:"exampleFormControlInput1",class:"form-label"},"Category",-1),se=["value"],re={key:2,class:"spinner-border",role:"status"},ie=e("span",{class:"visually-hidden"},"Loading...",-1),ue=[ie],me={__name:"AdminView",setup(de){let b=a(!0),g=a(!0),x=a(!0),v=a([]),h=a(null),u=a(null),_=a(null),f=a(null),s=a(null),y=a(null),d=a(null);V(async()=>{const l=await fetch("https://community-app-india.onrender.com/api/category",{method:"GET",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"}}),o=await l.json();l.ok&&v.value.push(...o)});async function w(){if(d.value!=1){let t=function(A){const O=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,T=A.match(O);return T&&T[2].length===11?"https://www.youtube.com/embed/"+T[2]:null};const I=s.value,C=t(I);s.value=C,console.log(C)}x.value=!1;const l=await fetch("https://community-app-india.onrender.com/api/article",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({title:_.value,summary:f.value,youtube:s.value,source:y.value,category_id:d.value})}),o=await l.json();l.ok&&(x.value=!0,alert(o.msg))}async function S(){if(g.value=!1,v.value.filter(l=>l.name!=u.value)){const l=await fetch("https://community-app-india.onrender.com/api/category",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({name:u.value})}),o=await l.json();l.ok&&(v.value.push(o),g.value=!0,alert("added"))}else alert("exists category")}async function F(){b.value=!1;const l=await fetch("https://community-app-india.onrender.com/create/tag",{method:"POST",Allow:["GET","POST"],headers:{"Authentication-Token":localStorage.getItem("auth-token"),"Content-Type":"application/json"},body:JSON.stringify({name:h.value})}),o=await l.json();l.ok&&(b.value=!0,alert(o.message))}return(l,o)=>(p(),c("div",P,[n(b)?k("",!0):(p(),c("div",U,B)),D,e("div",J,[M,r(e("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[0]||(o[0]=t=>i(h)?h.value=t:h=t)},null,512),[[m,n(h)]])]),e("button",{onClick:F,class:"mb-5"},"Add"),Y,e("div",R,[q,r(e("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[1]||(o[1]=t=>i(u)?u.value=t:u=t)},null,512),[[m,n(u)]])]),e("button",{onClick:S,class:"mb-5"},"Add"),n(g)?k("",!0):(p(),c("div",z,K)),Q,e("div",W,[X,r(e("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[2]||(o[2]=t=>i(_)?_.value=t:_=t)},null,512),[[m,n(_)]])]),e("div",Z,[$,r(e("textarea",{class:"form-control",id:"exampleFormControlTextarea1",rows:"3","onUpdate:modelValue":o[3]||(o[3]=t=>i(f)?f.value=t:f=t)},null,512),[[m,n(f)]])]),e("div",ee,[te,r(e("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[4]||(o[4]=t=>i(s)?s.value=t:s=t)},null,512),[[m,n(s)]])]),e("div",oe,[le,r(e("input",{type:"text",class:"form-control",id:"exampleFormControlInput1",placeholder:"name@example.com","onUpdate:modelValue":o[5]||(o[5]=t=>i(y)?y.value=t:y=t)},null,512),[[m,n(y)]])]),e("div",ae,[ne,r(e("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":o[6]||(o[6]=t=>i(d)?d.value=t:d=t)},[(p(!0),c(E,null,L(n(v),t=>(p(),c("option",{value:t.id},N(t.name),9,se))),256))],512),[[j,n(d)]])]),n(x)?k("",!0):(p(),c("div",re,ue)),e("button",{onClick:w},"Add")]))}};export{me as default};
