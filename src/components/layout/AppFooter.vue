<template>
    <footer class="bg-gray-200 dark:bg-black flex flex-col flex-grow px-8 pt-8">
        <!-- Container -->
        <div class="text-gray-900 dark:text-white container xl:max-w-screen-xl lg:flex justify-between mx-auto mt-2 lg:mt-8 mb-8">
            <!-- Page links -->
            <section class="flex flex-row flex-wrap md:justify-center lg:flex-col divide-none md:divide-solid divide-y divide-gray-900 dark:divide-gray-400 mb-8 lg:mb-0 gap-2">
                <RouterLink
                    v-for="(item, index) in routes"
                    :key="index"
                    :to="item.path"
                    class="p-1 sm:p-2 m-4 sm:m-0 sm:mx-4 hover:text-primary"
                >
                    {{ item.label }}
                </RouterLink>
            </section>

            <!-- Daten -->
            <section class="py-0 lg:px-8 flex flex-col md:justify-center">
                <h2 class="text-gray-600 dark:text-gray-300 md:text-center lg:text-right mb-2 px-1 sm:px-2">{{ authorText }}</h2>
                <div class="flex flex-wrap items-center md:justify-center gap-4">{{ privacyNotice }}</div>
                <div class="flex flex-wrap items-center md:justify-center gap-4">{{ version }}</div>
            </section>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import routes from '@/router/routes'

const authorText = 'Erstellung und Support durch XXX'
const privacyNotice = 'Datenschutzhinweise'
const version = 'Version x.x.x'
</script>

<style scoped>
</style>
