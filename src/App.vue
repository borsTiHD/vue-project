<template>
    <div class="app-container text-slate-500 dark:text-slate-400">
        <!-- Header -->
        <AppNavbar />

        <!-- Content -->
        <div class="container mx-auto md:p-8">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed, watch } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from './components/layout/AppNavbar.vue'
import { useDarkModeStore } from './stores/darkmode'

// Store
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)

// Darkmode Watcher
watch(isDarkMode, () => { document.documentElement.classList.toggle('dark', darkModeStore.isDarkMode) })

// Checks Darkmode on startup
onMounted(() => {
    // Check if darkmode is enabled by os or localstorage
    const mode = (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) ? true : false
    document.documentElement.classList.toggle('dark', mode)
    darkModeStore.setDarkMode(mode)
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
