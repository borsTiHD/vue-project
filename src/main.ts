import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { PrimeVuePlugin } from '@/plugins/PrimeVue'
import { AxiosPlugin } from '@/plugins/AxiosPlugin'
import { EventBus } from '@/plugins/EventBus'

// import '@/assets/main.css'
import '@/assets/tailwind.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(PrimeVuePlugin)
app.use(EventBus) // Use "useEmitter" helper/composable to access the event bus
app.use(AxiosPlugin, {
    baseUrl: 'https://www.primefaces.org/'
    // auth: {
    //     username: 'prime',
    //     password: 'prime'
    // }
}) // Use "useAxios" helper/composable to access it

app.mount('#app')
