import { createApp } from 'vue';
import app from './components/App.vue';
import router from './router';
import "../css/app.css";

createApp(app).use(router).mount('#app');