import { defineStore } from 'pinia'

export const useAutoReloadStore = defineStore({
    id: 'autoreload-store',
    state: () => ({
        autoreload: true
    }),
    actions: {
        setAutoReload(value: boolean) {
            this.autoreload = value
            localStorage.autoreload = value
        }
    },
    getters: {
        isAutoReload: (state) => state.autoreload
    }
})
