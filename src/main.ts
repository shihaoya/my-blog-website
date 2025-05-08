import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {router} from './router'
import 'uno.css'
import '@unocss/reset/normalize.css'
const app = createApp(App)

app.use(router)

function run () {
    app.mount('#app')
}

setTimeout(run, 1000)