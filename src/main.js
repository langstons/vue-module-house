import { createApp } from 'vue'
import App from './App.vue';
import router from './router';

// Import styles
import './assets/scss/main.scss'

// Import components
import svgSprite from '@/components/UI/svg-sprite';

const app =createApp(App)

app.component('svg-sprite', svgSprite)
app.use(router)
app.mount('#app')
