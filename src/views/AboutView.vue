<template>
    <main>
        <Dialog header="Header" v-model:visible="display" >
            <Button class="p-button-info p-button-sm" label="Close" @click="display = !display"/>
        </Dialog>

        <Card class="my-2 bg-white dark:bg-zinc-800 rounded-lg ring-1 ring-slate-900/5 shadow-xl dark:shadow-md dark:text-zinc-400">
            <template #title>
                This is an about page
            </template>
            <template #content>
                <div class="flex-col">
                    <p>Default Test Text</p>
                    <p class="text-sky-500 dark:text-sky-400">Test Text</p>
                </div>
            </template>
            <template #footer>
                <div class="flex gap-2">
                    <Button label="Open Dialog" class="bg-primary hover:bg-primary-light border-primary-dark" @click="display = !display"/>
                    <Button label="Open Dialog" class="bg-red-500 hover:bg-red-300 border-red-700" @click="display = !display"/>
                    <Button label="Open Dialog" class="p-button-secondary" @click="display = !display"/>
                </div>
            </template>
        </Card>
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const display = ref(false)
</script>
