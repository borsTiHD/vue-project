<template>
    <footer class="bg-gray-100 dark:bg-black flex flex-col flex-grow px-8 pt-8">
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
                <h2 class="text-gray-600 dark:text-gray-300 md:text-center lg:text-right mb-2 px-1 sm:px-2">Erstellung & Support durch <a class="hover:text-primary" :href="`mailto:${authorEmail}`">{{author}}</a></h2>
                <div class="flex flex-wrap items-center md:justify-center gap-4"><a class="hover:text-primary" :href="privacyNoticeLink">Datenschutzhinweise</a></div>
                <div class="flex flex-wrap items-center md:justify-center gap-4">Version {{ version }}</div>
            </section>
        </div>

        <!-- Copyright -->
        <Divider />
        <section class="m-4 text-gray-600 dark:text-gray-300 flex justify-center gap-4">
            <span class="text-center">© {{ appName }}</span>
        </section>
    </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import routes from '@/router/routes'
import config from '@/composables/exportEnv'

const appName = config.APP_NAME
const version = config.APP_VERSION
const author = config.APP_AUTHOR
const authorEmail = config.APP_AUTHOR_EMAIL
const privacyNoticeLink = 'url'
</script>

<style scoped>
</style>
