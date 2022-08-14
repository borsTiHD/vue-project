<template>
    <div class="app-container text-slate-500 dark:text-slate-400">
        <!-- Toast service -->
        <Toast position="bottom-right" group="br" />

        <!-- Header -->
        <AppNavbar />

        <!-- Content -->
        <div class="container mx-auto md:p-8">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import useEmitter from '@/composables/useEmitter'
import { useDarkModeStore } from '@/stores/darkmode'
import { useAutoReloadStore } from '@/stores/autoreload'

// Darkmode
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)
watch(isDarkMode, () => { document.documentElement.classList.toggle('dark', darkModeStore.isDarkMode) })

// Reload emitter Test
const emitter = useEmitter()
emitter.$on('reloadtimer', (arg: string) => { console.log('Reloadtimer emitted:', arg) })

// Checks settings on startup
const checkSettingsOnStartup = () => {
    console.log('[App] -> Load Settings on Startup')
    // Check if darkmode is enabled by os or localstorage
    const darkmode = (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? true : false
    document.documentElement.classList.toggle('dark', darkmode)
    darkModeStore.setDarkMode(darkmode)

    // Checks autoreload from localstorage
    const autoReloadStore = useAutoReloadStore()
    if (localStorage.autoreload) {
        autoReloadStore.setAutoReload(localStorage.autoreload === 'true' ? true : false)
    } else {
        // Set default autoreload
        autoReloadStore.setAutoReload(true)
    }
}
checkSettingsOnStartup()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
