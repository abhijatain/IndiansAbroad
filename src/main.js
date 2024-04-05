import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { initializeApp } from 'firebase/app'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDDvzYMAuIceDytcmOZ6Bf28MtjrEFcOjk",
    authDomain: "bharat-guild-f02d0.firebaseapp.com",
    projectId: "bharat-guild-f02d0",
    storageBucket: "bharat-guild-f02d0.appspot.com",
    messagingSenderId: "724548591779",
    appId: "1:724548591779:web:da77bee042632d34f71f16",
    measurementId: "G-H9XNY6PEY3"
  };

initializeApp(firebaseConfig)



const app = createApp(App)

app.use(store)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
