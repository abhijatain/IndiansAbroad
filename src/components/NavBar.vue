<script setup>
import {ref} from 'vue'
import { useRouter } from 'vue-router'

let islogin = localStorage.getItem('auth-token')
const router = useRouter()
let content = ref('')

function logout() {
  localStorage.removeItem('auth-token')
  localStorage.removeItem('role')
}

function search() {
  if (content.value.length > 0 ) {
    router.push(`/search/${content.value}`)
  }else{
    alert('To search add content')
  }
}
</script>

<template>
    <nav class="navbar bg-dark-subtle fixed-top p-2">
    <div class="container-fluid d-grid gap-3 align-items-center" style="grid-template-columns: 1fr 2fr;">
      <div >
        <div class="flex-shrink-0 ">
          <a href="#" class="d-block link-body-emphasis text-decoration-none " >
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
          </a>
        </div>
       
      </div>

      <div class="d-flex align-items-center">
        <form class="w-100 me-3" role="search">
            <div class="input-group">
                <span class="input-group-text" id="basic-addon1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16" @click="search">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>
                    </svg>
                </span>
                <input v-model="content" type="text" class="form-control" placeholder="search" aria-label="Input group example" aria-describedby="basic-addon1">
              </div>
        </form>

        <i class="fa-solid fa-bars" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"></i>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="width: 60vw">
                    <div class="offcanvas-header">
                      
                    <h6 class="offcanvas-title" id="offcanvasNavbarLabel">Voyage Community</h6>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    <p>Your Gateway to Global Opportunities: Exploring Abroad Made Simple</p>
                    <router-link to="/" v-if="islogin">
                        <button type="button" class="btn btn-outline-primary" style="width: 100%">Profile</button>
                    </router-link>
                    <router-link to="/login" v-if="islogin">
                        <button type="button" class="btn btn-outline-secondary mt-2" style="width: 100%" @click="logout">Logout</button>
                    </router-link>
                    <router-link to="/register" v-if="!islogin">
                        <button type="button" class="btn btn-outline-primary" style="width: 100%">Create Account</button>
                    </router-link>
                    <router-link to="/login" v-if="!islogin">
                        <button type="button" class="btn btn-outline-secondary mt-2" style="width: 100%">Login</button>
                    </router-link><hr>
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 mt-2">
                      <li class="nav-item">
                            <router-link to="/discusion" class="nav-link active" ><i class="fa-regular fa-comments" style="color: #006d8f;"></i> Discusions</router-link>
                        </li>
                        <li class="nav-item">
                        <router-link to="/article/all" class="nav-link active" aria-current="page" ><i class="fa-regular fa-newspaper" style="color: #006d8f;"></i> News</router-link>
                        </li>
                        
                        <li class="nav-item" v-if="islogin">
                            <router-link to="/saved" class="nav-link active" href="#"><i class="fa-solid fa-bookmark" style="color: #006d8f;"></i> Saved</router-link>
                        </li>
                        <li class="nav-item" v-if="!islogin">
                            <a to="/saved" class="nav-link disabled" href="#"><i class="fa-solid fa-bookmark" style="color: #006d8f;"></i> Saved</a>
                        </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="#"><i class="fa-solid fa-handshake-angle" style="color: #006d8f;"></i> Help</a>
                    </li>
                    </ul>
                    
                    </div>
                </div>
      </div>
    </div>
</nav>

</template>

