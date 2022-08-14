<template>
    <Menubar :model="items" class="bg-zinc-100 dark:bg-zinc-700 dark:text-white">
        <template #start>
            <div class="text-2xl font-bold flex items-center gap-2 mr-4">
                <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" class="h-10">
                <span>APP</span>
            </div>
        </template>
        <template #item="{ item }">
            <RouterLink :to="item.path || '/'" custom v-slot="{ href, navigate, isActive, isExactActive }">
                <a
                    :href="href"
                    :class="[
                        'mx-1 p-menuitem-link bg-zinc-100 dark:bg-zinc-700 text-black/60 dark:text-white/60', // default
                        'hover:bg-zinc-200 hover:text-primary/80', // hover - hover:text-black/80
                        'dark:hover:bg-zinc-400 dark:hover:text-white', // hover dark
                        {
                            'active-link bg-slate-200 text-primary font-bold': isActive, // active - text-black/60
                            'active-link dark:bg-zinc-600 dark:text-white': isActive, // active dark
                            'active-link-exact': isExactActive // active-exact
                        }]"
                    @click="navigate"
                >
                    {{ item.label }}
                </a>
            </RouterLink>
        </template>
        <template #end>
            <div class="flex items-center gap-2">
                <AppCountdown />
                <AppSidebar />
            </div>
        </template>
    </Menubar>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import routes from '@/router/routes'
import AppSidebar from '@/components/layout/AppSidebar.vue'
import AppCountdown from '@/components/layout/AppCountdown.vue'
const items = ref(routes)
</script>

<style scoped>
.p-menubar {
    border: 0;
    border-radius: 0;
}
</style>
