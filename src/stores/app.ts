import { defineStore } from 'pinia'
import config from '@/composables/exportEnv'

export const useAppStore = defineStore({
    id: 'app-store',
    state: () => ({
        headTitle: config.APP_NAME
    }),
    getters: {
        getTitle: (state) => state.headTitle
    }
})
