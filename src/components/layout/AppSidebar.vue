<template>
    <div>
        <Button class="p-button-rounded p-button-text" icon="pi pi-bars" v-tooltip.bottom="'Einstellungen'" @click="showSidebar = true"/>
        <Sidebar v-model:visible="showSidebar" :baseZIndex="10000" position="right" class="bg-zinc-100 dark:bg-zinc-700 dark:text-white">
            <div class="flex items-center" v-tooltip.bottom="`Change to ${isDarkMode ? 'Light' : 'Dark'}`">
                <i class="pi mr-2" :class="isDarkMode ? 'pi-moon' : 'pi-sun'"></i>
                <InputSwitch v-model="isDarkMode" @change="updateDarkmode" />
            </div>
        </Sidebar>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useDarkModeStore } from '../../stores/darkmode'

// Open sidebar
const showSidebar = ref(false)

// Store
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)

// Darkmode Toggle
const updateDarkmode = () => { darkModeStore.setDarkMode(!isDarkMode.value) }
</script>

<style>
.p-sidebar {
    z-index: 10000;
}
.p-sidebar-mask {
    z-index: 9000;
}
</style>
