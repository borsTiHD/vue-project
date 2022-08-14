import { defineStore } from 'pinia'

export const useAppStore = defineStore({
    id: 'app-store',
    state: () => ({
        headTitle: 'APP-NAME'
    }),
    getters: {
        getTitle: (state) => state.headTitle
    }
})
