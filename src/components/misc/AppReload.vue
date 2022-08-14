<template>
    <div>
        <Knob
            v-if="running"
            v-model="value"
            :size="40"
            :max="duration"
            readonly
            class="cursor-pointer"
            :textColor="isDarkMode ? 'white' : ''"
            :valueColor="isDarkMode ? 'MediumTurquoise' : 'var(--primary-color, Black)'"
            :rangeColor="isDarkMode ? 'SlateGray' : 'var(--surface-border, LightGray)'"
            v-tooltip.bottom="'Stop Reloader'"
            @click="stopCountdown"
        />
        <Button
            v-else
            label="Start Reloader"
            class="p-button-secondary p-button-text p-button-sm"
            v-tooltip.bottom="'Start Reload Timer'"
            @click="startCountdown"
        />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useToast } from 'primevue/usetoast'
import useEmitter from '@/composables/useEmitter'
import { useDarkModeStore } from '@/stores/darkmode'
import { useAutoReloadStore } from '@/stores/autoreload'

// Darkmode
const darkModeStore = useDarkModeStore()
const isDarkMode = computed(() => darkModeStore.isDarkMode)

// AutoReload
const autoReloadStore = useAutoReloadStore()
const isAutoReload = computed(() => autoReloadStore.isAutoReload)
watch(isAutoReload, (mode) => {
    if (mode) {
        startCountdown()
    } else {
        stopCountdown()
    }
})

// AutoReload on startup if enabled
onMounted(() => {
    if (autoReloadStore.isAutoReload) { startCountdown() }
})

// Countdown values
const duration = 120 // Countdown Duration and starting value
const emitter = useEmitter() // Event Emitter
const toast = useToast() // Toast Emitter
const value = ref(duration) // Countdown Value
const running = ref(false) // Countdown Running
let interval: ReturnType<typeof setInterval> // Countdown Interval

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
            emitter.$emit('reloadtimer', 'finished') // Emit event - listen like: emitter.$on('reloadtimer', (arg: string) => { console.log('Reloadtimer emitted:', arg) })
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
