<template>
    <Button class="p-button-secondary p-button-rounded p-button-text" icon="pi pi-bars" v-tooltip="'Einstellungen'" @click="showSidebar = true"/>
    <Sidebar v-model:visible="showSidebar" position="right" class="bg-zinc-100 dark:bg-zinc-700 dark:text-white">
        <div class="grid justify-items-center">
            <p class="text-xl font-semibold">Einstellungen</p>
            <Divider />
            <ul class="flex-col space-y-4 list-none">
                <li class="flex items-center" v-tooltip.left="'Team Auswahl'">
                    <p class="">Team:</p>
                    <ChangeTeam />
                </li>
                <li class="flex items-center" v-tooltip.left="'Startet Reloader automatisch'">
                    <p class="">Auto Reload:</p>
                    <InputSwitch class="ml-2" v-model="isAutoReload" @change="updateAutoReload" />
                </li>
                <li class="flex items-center" v-tooltip.left="`Change to ${isDarkMode ? 'Light' : 'Dark'}`">
                    <p class="">Darkmode:</p>
                    <InputSwitch class="mx-2" v-model="isDarkMode" @change="updateDarkmode" />
                    <i class="pi" :class="isDarkMode ? 'pi-moon' : 'pi-sun'"></i>
                </li>
            </ul>
        </div>
    </Sidebar>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDarkModeStore } from '@/stores/darkmode'
import { useAutoReloadStore } from '@/stores/autoreload'
import ChangeTeam from '@/components/misc/ChangeTeam.vue'
import loadTheme from '@/composables/loadTheme'

// Open sidebar
const showSidebar = ref(false)

// DarkMode
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)
const updateDarkmode = () => {
    darkModeStore.setDarkMode(!isDarkMode.value)
    loadTheme() // Load CSS theme
}

// AutoReload
const autoReloadStore = useAutoReloadStore()
const isAutoReload = computed(() => autoReloadStore.isAutoReload)
const updateAutoReload = () => { autoReloadStore.setAutoReload(!isAutoReload.value) }
</script>

<style>
/* Z-Index fixes */
.p-sidebar {
    z-index: 10000;
}
.p-sidebar-mask {
    z-index: 9000;
}
.p-tooltip {
    z-index: 10001;
}
.p-dropdown-panel {
    z-index: 10001;
}
</style>
