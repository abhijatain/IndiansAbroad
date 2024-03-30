import{r,c as f,u,a as y,b as e,t as _,n as h,w as c,v as m,d as w,e as k,o as b}from"./index-B9SI4aN1.js";const x={class:"container",style:{"margin-top":"12vh"}},S={key:0,class:"text-center"},P=e("div",{class:"spinner-border",role:"status"},[e("span",{class:"visually-hidden"},"Loading...")],-1),V=[P],U={class:"p-4"},B=k('<button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit"><i class="fa-brands fa-twitter"></i> Sign up with Twitter </button><button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit"><i class="fa-brands fa-facebook"></i> Sign up with Facebook </button><button class="w-100 py-2 mb-2 btn btn-outline-success rounded-3" type="submit"><i class="fa-brands fa-google"></i> Sign up with Google </button><hr class="my-4">',4),C={class:"form-floating mb-3"},E=e("label",{for:"floatingInput"},"Username",-1),N={class:"form-floating mb-3"},z=e("label",{for:"floatingInput"},"Email address",-1),I={class:"form-floating mb-3"},T=e("label",{for:"floatingPassword"},"Password",-1),j=e("small",{class:"text-body-secondary"},"By clicking Sign up, you agree to the terms of use.",-1),F={__name:"RegisterView",setup(A){const s=r({email:null,password:null,username:null});let i=r(""),a=r(!0),o=r(!1),d=r(!1);async function p(){if(!g())o.value=!0,a.value=!1,i.value="Wrong Email Format";else if(!v())o.value=!0,a.value=!1,i.value="Password length must be 8 or more";else{d.value=!0;const n=await fetch("https://community-app-india.onrender.com/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(s.value)}),t=await n.json();n.ok&&(d.value=!1),t.state==0?(o.value=!0,a.value=!1):(o=!1,a=!0),i.value=t.msg}}function g(){var n=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return n.test(s.value.email)}function v(){return s.value.password.length>7}return(n,t)=>(b(),f("div",x,[u(d)?(b(),f("div",S,V)):y("",!0),e("p",{class:h({"text-danger":u(o),"text-success":u(a)})},_(u(i)),3),e("form",U,[B,e("div",C,[c(e("input",{type:"text",class:"form-control rounded-3",id:"floatingUsername",placeholder:"username","onUpdate:modelValue":t[0]||(t[0]=l=>s.value.username=l)},null,512),[[m,s.value.username]]),E]),e("div",N,[c(e("input",{type:"email",class:"form-control rounded-3",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":t[1]||(t[1]=l=>s.value.email=l)},null,512),[[m,s.value.email]]),z]),e("div",I,[c(e("input",{type:"password",class:"form-control rounded-3",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=l=>s.value.password=l)},null,512),[[m,s.value.password]]),T]),e("button",{class:"w-100 mb-2 btn btn-lg rounded-3 btn-primary",onClick:p,onKeyup:w(p,["enter"])},"Sign up",32),j])]))}};export{F as default};