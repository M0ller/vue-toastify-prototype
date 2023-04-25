import { createApp } from 'vue'
import App from './App.vue'


import './assets/main.css'
const app = createApp(App)
/*
import Toastify from 'vue3-toastify'
app.use(Toastify, {
    autoClose: 1000,
    position: "bottom-center",
    style: {
          bottom: 20 + "%",
        }
} );
*/
app.mount('#app')
