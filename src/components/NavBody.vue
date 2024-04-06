<template>
    <div class="container p-0" style="margin:0px;">
      <div class="card p-2 shadow border-0 m-1">
        <h4><strong>We are a community of Indians Abroad</strong></h4>
                    <p class="arvo-regular">Join us, and let’s make the world a smaller, more connected place for Indians everywhere.</p>
                    <router-link to="/profile" v-if="islogin">
                        <button type="button" class="btn btn-outline-primary" style="width: 100%">Profile</button>
                    </router-link>
                  
                    
                      <button type="button" class="btn btn-outline-secondary mt-2" style="width: 100%" @click="logout" v-if="islogin">Logout</button>
                    
                    <button type="button" class="login-with-google-btn shadow" style="width: 100%" @click="googleSignIn" v-if="!islogin">
                      Sign in with Google
                    </button>
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
                        <router-link to="/about" class="nav-link link-body-emphasis">
                          <i class="fa-solid fa-address-card me-2" style="color:#FFD23F"></i> About
                        </router-link>
                      </li>
                      <li>
                        <router-link to="/" class="nav-link link-body-emphasis">
                          <i class="fa-solid fa-address-book me-2" style="color:#5E1675"></i> Contact
                        </router-link>
                      </li>
                      
                    </ul>  
                    </div>
</template>

<script setup>
import { ref} from 'vue'
import { getAuth,GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useStore } from 'vuex'

const store = useStore()
let islogin = ref(localStorage.getItem('auth-token'))


const googleSignIn = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(),provider).then((result) =>{
    localStorage.setItem('name',result.user.displayName)
    localStorage.setItem('image',result.user.photoURL)
    localStorage.setItem('email',result.user.email)
    store.state.image = result.user.photoURL
    fetch('https://community-app-india.onrender.com/google/login',{
                method:'POST',

                Allow: ['GET', 'POST','OPTIONS'],
                headers: {
                    'Content-type': 'application/json'
                },
                body : JSON.stringify({
                        "token" : result.user.accessToken
                      }), })
    .then(response => {
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Parse the response JSON data
      return response.json();
    })
    // Handle the parsed JSON data in the next then block
    .then(data => {
      // Use the data received from the server
      if (data.state == 0 ){
                    localStorage.setItem('auth-token', data.token)
                    localStorage.setItem('role', data.role)
                    alert('Logged In')
                    islogin.value = true
      }
    })
    // Handle any errors that occur during the fetch request
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
    
  })
}

function logout() {
  localStorage.removeItem('auth-token')
  localStorage.removeItem('role')
  localStorage.removeItem('name')
  localStorage.removeItem('image')
  localStorage.removeItem('email')
  islogin.value = null
  store.state.image = null

}
</script>

<style scoped>
.login-with-google-btn {
  transition: background-color .3s, box-shadow .3s;
    
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;
  
  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
  }
  
  &:active {
    background-color: #eeeeee;
  }
  
  &:focus {
    outline: none;
    box-shadow: 
      0 -1px 0 rgba(0, 0, 0, .04),
      0 2px 4px rgba(0, 0, 0, .25),
      0 0 0 3px #c8dafc;
  }
  
  &:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
    cursor: not-allowed;
  }
}
</style>