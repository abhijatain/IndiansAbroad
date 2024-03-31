<script setup>
import {ref,onMounted} from 'vue'
import { useRouter } from 'vue-router'
import { usePreferredDark } from '@vueuse/core'

const isDark = usePreferredDark()

let islogin = localStorage.getItem('auth-token')
const router = useRouter()
let content = ref('')
let darkMode = ref(false)

onMounted(() => {
  if(isDark) {
    document.getElementById("checkbox").click()
  }
})

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


function lightTheme() {  
    darkMode.value = !darkMode.value
    let bodyTag = document.querySelector('body');
    bodyTag.dataset.bsTheme = 'light'
}
function darkTheme() {  
    darkMode.value = !darkMode.value
    let bodyTag = document.querySelector('body');
    bodyTag.dataset.bsTheme = 'dark'
}

function changeTheme() {
  if (darkMode.value){
    lightTheme()
  }else{
    darkTheme()
  }
}
</script>

<template>
    <nav class="navbar shadow fixed-top p-2 border-bottom" style="background-color: #000000;">
    <div class="container-fluid  align-items-center" style="grid-template-columns: 1fr 2fr;">
        
       <div class="d-flex align-items-center">
        <router-link to="/" style="margin-right: 1rem;"> 
          <img class="avatar-img rounded-circle"  height="38px"  src="../assets/BharatGuildLogo.jpg" alt="Bharat Guild" >
        </router-link>
        <div class="flex-shrink-0 " style="margin-right: 1rem;">
            
            <div>
              <input type="checkbox" class="checkbox" id="checkbox" @click="changeTheme">
              <label for="checkbox" class="checkbox-label">
                <i class="fas fa-moon"></i>
                <i class="fas fa-sun"></i>
                <span class="ball"></span>
              </label>
            </div>
        </div>
       </div>
      
       
      <div class="d-flex align-items-center ">

            <span class="input-group-text me-3" style="padding:1px 6px">
              <router-link to="/help" class=" link-body-emphasis">
                <i class="fa-solid fa-magnifying-glass"></i>
              </router-link>
            </span>
            <span class="input-group-text me-3" style="padding:1px 6px">
              <router-link to="/notifications" class=" link-body-emphasis">
                  <i class="fa-solid fa-bell"></i>
              </router-link>
            </span>

        <button class="rounded border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation"><i class="fa-solid fa-bars" ></i></button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="width: 60vw">
                    <div class="offcanvas-header" >
                     
                    <h4 class="offcanvas-title arvo-bold" id="offcanvasNavbarLabel">Bharat Guild</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                    <p class="arvo-regular">Your Gateway to Global Opportunities: Exploring Abroad Made Simple</p>
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
                    <ul class="nav nav-pills flex-column mb-auto">
                      <li class="nav-item">
                        <router-link to="/discusion" class="nav-link link-body-emphasis">
                            <i class="fa-regular fa-comments me-2" ></i>
                            Discusions
                        </router-link>
                        
                      </li>
                      <li>
                        <router-link to="/article/all" class="nav-link link-body-emphasis">
                          <i class="fa-regular fa-newspaper me-2" ></i> News
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
                        <router-link to="/notifications" class="nav-link link-body-emphasis">
                          <i class="fa-solid fa-bell me-2"></i> Notifications
                        </router-link>
                      </li>
                    </ul>  
                    </div>
                </div>
      </div>
    </div>
</nav>

</template>

<style scoped>
.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color: #1779a0;
  width: 50px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fa-moon {color: #000000;}

.fa-sun {color: #f2f0ee;}

.checkbox-label .ball {
  background-color: #fff;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}

.arvo-regular {
  font-family: "Arvo", serif;
  font-weight: 400;
  font-style: normal;
}

.arvo-bold {
  font-family: "Arvo", serif;
  font-weight: 700;
  font-style: normal;
}
</style>