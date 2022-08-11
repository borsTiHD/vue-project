<template>
    <Menubar :model="items" class="bg-zinc-100 dark:bg-zinc-700 dark:text-white">
        <template #start>
            <div class="text-2xl font-bold flex items-center gap-2 mr-4">
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="h-10">
                APP
            </div>
        </template>
        <template #item="{ item }">
            <RouterLink :to="item.to" custom v-slot="{ href, navigate, isActive, isExactActive }">
                <a
                    :href="href"
                    @click="navigate"
                    class="p-menuitem-link text-black/60 dark:text-white/60 hover:bg-zinc-500 hover:text-white dark:hover:bg-zinc-100 dark:hover:text-black"
                    :class="[{
                        'active-link bg-zinc-600 text-white/100 font-bold': isActive,
                        'active-link-exact': isExactActive
                    }]">
                    {{ item.label }}
                </a>
            </RouterLink>
        </template>
        <template #end>
            <div class="flex-col">
                <span>Dark: {{ isDarkMode }}</span>
                <InputSwitch v-model="isDarkMode" @change="updateDarkmode" />
            </div>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useDarkModeStore } from '../../stores/darkmode'
const items = ref([
    {
        label:'Home',
        to: '/'
    },
    {
        label:'About',
        to: '/about'
    }
])

// Store
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)

// Darkmode Watcher
watch(isDarkMode, () => {
    document.body.classList.toggle('dark', darkModeStore.isDarkMode)
})

// Darkmode Toggle
const updateDarkmode = () => {
    darkModeStore.setDarkMode(!isDarkMode.value)
}
</script>

<style scoped>
.p-menubar {
    border: 0;
    border-radius: 0;
}
</style>
