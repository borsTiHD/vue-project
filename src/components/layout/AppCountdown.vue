<template>
    <div>
        <Button v-if="value === 60" label="Start Reloader" class="p-button-secondary p-button-text p-button-sm" @click="startCountdown" />
        <Knob v-else v-model="value" :size="40" :max="60" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const value = ref(60)

const startCountdown = () => {
    value.value = 10
    const interval = setInterval(() => {
        value.value--
        if (value.value <= 0) {
            value.value = 60
            toast.add({ severity:'info', summary: 'Info Message', detail:'Reload Timer finished', group: 'br', life: 3000 })
            clearInterval(interval)
        }
    }, 1000)
}
</script>

<style scoped>
</style>
