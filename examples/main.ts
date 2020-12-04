import { createApp } from 'vue'
import App from './App'
import UI from '../components/index'
import './assets/styles/index.scss'
const app = createApp(App)
app.use(UI) 
app.mount('#app')