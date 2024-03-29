import{r,c as b,a as e,t as g,u,n as v,w as d,v as c,b as w,d as y,o as h}from"./index-D0ym4pZZ.js";const _={class:"container",style:{"margin-top":"12vh"}},S={class:"p-4"},x=y('<button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit"><i class="fa-brands fa-twitter"></i> Sign up with Twitter </button><button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit"><i class="fa-brands fa-facebook"></i> Sign up with Facebook </button><button class="w-100 py-2 mb-2 btn btn-outline-success rounded-3" type="submit"><i class="fa-brands fa-google"></i> Sign up with Google </button><hr class="my-4">',4),P={class:"form-floating mb-3"},k=e("label",{for:"floatingInput"},"Username",-1),V={class:"form-floating mb-3"},U=e("label",{for:"floatingInput"},"Email address",-1),B={class:"form-floating mb-3"},E=e("label",{for:"floatingPassword"},"Password",-1),z=e("small",{class:"text-body-secondary"},"By clicking Sign up, you agree to the terms of use.",-1),N={__name:"RegisterView",setup(C){const t=r({email:null,password:null,username:null});let l=r(""),a=r(!0),o=r(!1);async function m(){if(!p())o.value=!0,a.value=!1,l.value="Wrong Email Format";else if(!f())o.value=!0,a.value=!1,l.value="Password length must be 8 or more";else{const s=await(await fetch("https://community-app-india.onrender.com/register",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t.value)})).json();s.state==0?(o.value=!0,a.value=!1):(o=!1,a=!0),l.value=s.msg}}function p(){var i=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return i.test(t.value.email)}function f(){return t.value.password.length>7}return(i,s)=>(h(),b("div",_,[e("p",{class:v({"text-danger":u(o),"text-success":u(a)})},g(u(l)),3),e("form",S,[x,e("div",P,[d(e("input",{type:"text",class:"form-control rounded-3",id:"floatingUsername",placeholder:"username","onUpdate:modelValue":s[0]||(s[0]=n=>t.value.username=n)},null,512),[[c,t.value.username]]),k]),e("div",V,[d(e("input",{type:"email",class:"form-control rounded-3",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":s[1]||(s[1]=n=>t.value.email=n)},null,512),[[c,t.value.email]]),U]),e("div",B,[d(e("input",{type:"password",class:"form-control rounded-3",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":s[2]||(s[2]=n=>t.value.password=n)},null,512),[[c,t.value.password]]),E]),e("button",{class:"w-100 mb-2 btn btn-lg rounded-3 btn-primary",onClick:m,onKeyup:w(m,["enter"])},"Sign up",32),z])]))}};export{N as default};