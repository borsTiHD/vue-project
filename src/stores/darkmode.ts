import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore({
    id: 'darkmode-store',
    state: () => ({
        darkMode: true
    }),
    actions: {
        setDarkMode(value: boolean) {
            this.darkMode = value
            localStorage.theme = value ? 'dark' : 'light'
        }
    },
    getters: {
        isDarkMode: (state) => state.darkMode
    }
})
