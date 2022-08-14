import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { PrimeVuePlugin } from '@/plugins/PrimeVue'
import { AxiosPlugin } from '@/plugins/AxiosPlugin'
import EventBus from '@/plugins/EventBus'

// import '@/assets/main.css'
import '@/assets/tailwind.css'

const app = createApp(App)
app.config.globalProperties.$emitter = EventBus // Register the event bus - use the "useEmitter" helper/composable to access it
app.use(createPinia())
app.use(router)
app.use(PrimeVuePlugin)
app.use(AxiosPlugin, {
    baseUrl: 'https://www.primefaces.org/'
    // auth: {
    //     username: 'prime',
    //     password: 'prime'
    // }
}) // Use the "useAxios" helper/composable to access it

app.mount('#app')
