<template>
    <div class="container " style="margin-top: 12vh">
        
        <p v-bind:class="{'text-danger' : !success}">{{msg}}</p>
    <div class="p-4">
        
        <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <i  class="fa-brands fa-twitter"></i>
            Sign in with Twitter
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
            <i class="fa-brands fa-facebook"></i>
            Sign in with Facebook
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-success rounded-3" type="submit">
            <i class="fa-brands fa-google"></i>
            Sign in with Google
          </button>
          <hr class="my-4">
          
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" v-model='cred.email'>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" v-model='cred.password' @keyup.enter="login">
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" @click='login' @keyup.enter="login">Sign in</button>
          <small class="text-body-secondary">Click here to join our community.</small>
          
          
        </div>
    </div>
    
</template>
  
<script setup>
import router from '../router'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const cred = ref({
    email : null,
    password : null
})

let msg = ref('')
let success = ref(true)


async function login() {
    
    const res = await fetch(`https://community-app-india.onrender.com/user_login`,{
                method:'POST',
                mode: 'cors', 
                Allow: ['GET', 'POST','OPTIONS'],
                headers: {
                    'Content-type': 'application/json'
                },
                body : JSON.stringify(cred.value),
            })
            if (res.ok) {
                const data = await res.json()
                if (data.state == 0 ){
                    localStorage.setItem('auth-token', data.token)
                    localStorage.setItem('role', data.role)
                    router.go(-1)
                }else {
                    success = false
                    msg = data.msg
                }
            }

}

  
</script>