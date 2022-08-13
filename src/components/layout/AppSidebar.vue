<template>
    <div>
        <Button class="p-button-secondary p-button-rounded p-button-text" icon="pi pi-bars" v-tooltip="'Einstellungen'" @click="showSidebar = true"/>
        <Sidebar v-model:visible="showSidebar" position="right" class="bg-zinc-100 dark:bg-zinc-700 dark:text-white">
            <div class="grid justify-items-center">
                <p class="text-xl font-semibold">Einstellungen</p>
                <Divider />
                <ul class="flex-col space-y-4 list-none">
                    <li class="flex items-center" v-tooltip.left="`Change to ${isDarkMode ? 'Light' : 'Dark'}`">
                        <p class="">Team:</p>
                        <Dropdown class="ml-2" v-model="team" :options="teams" @change="changeTeam" />
                    </li>
                    <li class="flex items-center" v-tooltip.left="`Change to ${isDarkMode ? 'Light' : 'Dark'}`">
                        <p class="">Darkmode:</p>
                        <InputSwitch class="mx-2" v-model="isDarkMode" @change="updateDarkmode" />
                        <i class="pi" :class="isDarkMode ? 'pi-moon' : 'pi-sun'"></i>
                    </li>
                </ul>
            </div>
        </Sidebar>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDarkModeStore } from '@/stores/darkmode'

// Open sidebar
const showSidebar = ref(false)

// Store
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)

// Darkmode Toggle
const updateDarkmode = () => { darkModeStore.setDarkMode(!isDarkMode.value) }

// Teams
const teams = ['Team 1', 'Team 2', 'Team 3']
const team = ref('Team 1')
const changeTeam = (event: object) => {
    console.log('Change Team:', event?.value)
}
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
