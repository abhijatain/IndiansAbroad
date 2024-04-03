<template>
    <div class="container" style="margin:0px;">
                    <p class="arvo-regular">Your Gateway to Global Opportunities: Exploring Abroad Made Simple</p>
                    <router-link to="/profile" v-if="islogin">
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
                    <ul class="nav nav-pills flex-column mb-auto">
                      <li>
                        <router-link to="/" class="nav-link link-body-emphasis">
                          <i class="fa-regular fa-newspaper me-2" ></i> News
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/discusion" class="nav-link link-body-emphasis">
                            <i class="fa-regular fa-comments me-2" ></i>
                            Discusions
                        </router-link>
                        
                      </li>
                      
                      <li>
                        <router-link to="/saved" class="nav-link link-body-emphasis" v-if="islogin">
                            <i class="fa-solid fa-bookmark me-2" ></i> Saved
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/help" class="nav-link link-body-emphasis">
                            <i class="fa-solid fa-handshake-angle me-2" ></i> Help
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/article/all" class="nav-link link-body-emphasis">
                          <i class="fa-solid fa-address-card me-2"></i> About Us
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/article/all" class="nav-link link-body-emphasis">
                          <i class="fa-solid fa-address-book me-2"></i> Contact Us
                        </router-link>
                      </li>
                      
                    </ul>  
                    </div>
</template>

<script setup>
let islogin = localStorage.getItem('auth-token')

function logout() {
  localStorage.removeItem('auth-token')
  localStorage.removeItem('role')
}
</script>