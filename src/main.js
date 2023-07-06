import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// TailwindCSS
import "./style.css";

// router-vue
import router from "@router/index.js";

// Pinia
const pinia = createPinia()

const app = createApp(App)
.use(router)
.use(pinia);

app.mount("#app");