import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia';
const pinia = createPinia();
// import store from './store/store'
const app = createApp(App)
// app.use(store)
app.use(pinia);
app.use(router)
app.mount('#app')