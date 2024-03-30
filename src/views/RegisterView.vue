<template>
    <div class="container " style="margin-top: 12vh">
        <div class="text-center" v-if="clicked">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
        <p v-bind:class="{'text-danger' : danger,'text-success' : success}">{{msg}}</p>
    <form class="p-4">
        
        <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <i  class="fa-brands fa-twitter"></i>
            Sign up with Twitter
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
            <i class="fa-brands fa-facebook"></i>
            Sign up with Facebook
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-success rounded-3" type="submit">
            <i class="fa-brands fa-google"></i>
            Sign up with Google
          </button>
          <hr class="my-4">
          <div class="form-floating mb-3">
            <input type="text" class="form-control rounded-3" id="floatingUsername" placeholder="username" v-model='cred.username'>
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com" v-model='cred.email'>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password" v-model='cred.password'>
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" @click='register' @keyup.enter="register">Sign up</button>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
          
          
        </form>
    </div>
    
</template>
  
<script setup>
import { ref } from 'vue'

const cred = ref({
    email : null,
    password : null,
    username : null
})

let msg = ref('')
let success = ref(true)
let danger = ref(false)
let clicked = ref(false)

async function register() {
    if (!validEmail()) {
                danger.value = true
                success.value = false
                msg.value = 'Wrong Email Format'
    }else if (!validPassword()){
                danger.value = true
                success.value = false
                msg.value = 'Password length must be 8 or more'
    }else {
        clicked.value = true
                const res = await fetch('https://community-app-india.onrender.com/register',{
                    method:'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body : JSON.stringify(cred.value),
                })
                
                const data = await res.json()
                if (res.ok){
                    clicked.value = false
                }
                if (data.state == 0) {
                    
                    danger.value = true
                    success.value = false
                }else {
                    
                    danger = false
                    success = true
                }
                
                msg.value = data.msg 
            }
}

function validEmail(){
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(cred.value.email);
}

function validPassword(){
    if (cred.value.password.length > 7) {
        return true
    }
    return false
}
</script>
  