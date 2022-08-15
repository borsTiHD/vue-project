<template>
    <div class="app-container text-slate-500 dark:text-slate-400 flex flex-col min-h-screen">
        <!-- Toast service -->
        <Toast position="bottom-right" group="br" />

        <!-- Header -->
        <AppNavbar />

        <!-- Content -->
        <main class="p-2 md:p-8">
            <RouterView />
        </main>

        <!-- Footer -->
        <AppFooter />
    </div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import loadSettings from '@/composables/loadSettings'
import loadTheme from '@/composables/loadTheme'
import { useDarkModeStore } from '@/stores/darkmode'

// Darkmode
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)
watch(isDarkMode, () => { document.documentElement.classList.toggle('dark', isDarkMode.value) })

loadSettings() // Load settings on startup
loadTheme() // Load CSS theme on startup
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
