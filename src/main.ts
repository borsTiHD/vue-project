import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import { PrimeVuePlugin } from '@/plugins/PrimeVue'

import EventBus from '@/plugins/EventBus'

// import '@/assets/main.css'
import '@/assets/tailwind.css'

const app = createApp(App)
app.config.globalProperties.$emitter = EventBus // Register the event bus - use the "useEmitter" helper/composable to access it
app.use(createPinia())
app.use(router)
app.use(PrimeVuePlugin)

app.mount('#app')
