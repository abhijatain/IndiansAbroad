import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-light-green/theme.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    });
  }

const app = createApp(App)

app.use(store)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
