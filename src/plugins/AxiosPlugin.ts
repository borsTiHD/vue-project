import axios from 'axios'
import type { App } from 'vue'

type AxiosOptions = {
    baseUrl?: string
    auth?: {
        username?: string
        password?: string
    }
}

export const AxiosPlugin = {
    install(app: App, options: AxiosOptions) {
        app.config.globalProperties.$axios = axios.create({
            baseURL: options.baseUrl,
            auth: {
                username: options?.auth?.username || '',
                password: options?.auth?.password || ''
            }
        })
    }
}
