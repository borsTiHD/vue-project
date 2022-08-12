import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { PrimeVuePlugin } from '@/plugins/PrimeVue'

// import '@/assets/main.css'
import '@/assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVuePlugin)

app.mount('#app')
