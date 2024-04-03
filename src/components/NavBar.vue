<script setup>
import {ref,onMounted} from 'vue'
import { useRouter } from 'vue-router'
import { usePreferredDark } from '@vueuse/core'
import { useWindowSize } from '@vueuse/core'
import NavBody from './NavBody.vue'

const { width, height } = useWindowSize()

const isDark = usePreferredDark()


const router = useRouter()
let content = ref('')
let darkMode = ref(false)

//onMounted(() => {
//  if(isDark) {
//   document.getElementById("checkbox").click()
//  }
//})

function logout() {
  localStorage.removeItem('auth-token')
  localStorage.removeItem('role')
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
    <div class="container  align-items-center" style="grid-template-columns: 1fr 2fr;">
        
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
       <h3 class="text-white p-0 m-0">Bharat Guild</h3>
       
      <div class="d-flex align-items-center ">

            <span class="input-group-text me-3" style="padding:1px 6px">
              <router-link to="/search" class=" link-body-emphasis">
                <i class="fa-solid fa-magnifying-glass"></i>
              </router-link>
            </span>
            
            <span class="input-group-text me-3" style="padding:1px 6px">
              <router-link to="/notifications" class=" link-body-emphasis">
                  <i class="fa-solid fa-bell"></i>
              </router-link>
            </span>

        <button class="rounded border-0" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" v-if="width <850"><i class="fa-solid fa-bars" ></i></button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style="width: 60vw">
                    <div class="offcanvas-header" >
                     
                    <h4 class="offcanvas-title arvo-bold" id="offcanvasNavbarLabel">Bharat Guild</h4>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                      <NavBody />
                    </div>
                </div>
      </div>
    </div>
</nav>

</template>

<style scoped>
.container {
  max-width: 1250px; /* Set the maximum width as per your requirement */
  /* You can adjust the value (1200px) according to your design needs */
  margin: 0px auto
}
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