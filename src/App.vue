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
import loadSettings from '@/composables/loadSettings'
import useEmitter from '@/composables/useEmitter'
import { useDarkModeStore } from '@/stores/darkmode'

// Darkmode
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)
watch(isDarkMode, () => { document.documentElement.classList.toggle('dark', darkModeStore.isDarkMode) })

// Reload emitter Test
const emitter = useEmitter()
emitter.$on('reloadtimer', (arg: string) => { console.log('Reloadtimer emitted:', arg) })

// Load settings on startup
loadSettings()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
