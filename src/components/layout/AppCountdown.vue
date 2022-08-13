<template>
    <div>
        <Knob v-if="running" v-model="value" :size="40" :max="60" readonly class="cursor-pointer" v-tooltip.bottom="'Stop Reloader'" @click="stopCountdown" />
        <Button v-else label="Start Reloader" class="p-button-secondary p-button-text p-button-sm" @click="startCountdown" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from 'primevue/usetoast'
import useEmitter from '@/composables/useEmitter'

const emitter = useEmitter() // Event Emitter
const toast = useToast() // Toast Emitter
const value = ref(60) // Countdown Value
const running = ref(false) // Countdown Running
let interval: ReturnType<typeof setInterval> // Countdown Interval
const duration = 30 // Countdown Duration and starting value

// Start Countdown
const startCountdown = () => {
    value.value = duration
    running.value = true
    if (interval) { clearInterval(interval) }
    interval = setInterval(() => {
        value.value--
        if (value.value <= 0) {
            value.value = duration // Reset value - timer begins again
            toast.add({ severity:'info', summary: 'Info Message', detail:'Reload Timer finished', group: 'br', life: 3000 })
            emitter.$emit('reloadtimer', 'FINISHED') // Emit event - listen like: emitter.$on('reloadtimer', (arg: string) => { console.log('Reloadtimer emitted:', arg) })
        }
    }, 1000)
}

// Stop Countdown
const stopCountdown = () => {
    running.value = false
    if (interval) { clearInterval(interval) }
}
</script>

<style scoped>
</style>
