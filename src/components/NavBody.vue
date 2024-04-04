<template>
    <div class="container p-0" style="margin:0px;">
      <div class="card p-2 border-success border-4 m-1">
        <h4><strong>We are a community of Indians Abroad</strong></h4>
                    <p class="arvo-regular">We're a place where coders share, stay up-to-date and grow their careers.</p>
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
                    </router-link>
                  </div><hr>
                    <ul class="nav nav-pills flex-column mb-auto">
                      <li>
                        <router-link to="/" class="nav-link link-body-emphasis">
                          <i class="fa-regular fa-newspaper me-2" style="color:#337357" ></i> News
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/discusion" class="nav-link link-body-emphasis">
                            <i class="fa-regular fa-comments me-2" style="color:#EE4266"></i>
                            Discusions
                        </router-link>
                        
                      </li>
                      
                      <li>
                        <router-link to="/saved" class="nav-link link-body-emphasis" v-if="islogin">
                            <i class="fa-solid fa-bookmark me-2" style="color:#FFD23F" ></i> Saved
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/help" class="nav-link link-body-emphasis">
                            <i class="fa-solid fa-handshake-angle me-2" style="color:#337357"></i> Help
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/article/all" class="nav-link link-body-emphasis">
                          <i class="fa-solid fa-address-card me-2" style="color:#FFD23F"></i> About
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/article/all" class="nav-link link-body-emphasis">
                          <i class="fa-solid fa-address-book me-2" style="color:#5E1675"></i> Contact
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