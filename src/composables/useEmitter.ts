import { getCurrentInstance } from 'vue'

// Helper to access the event bus '@/plugins/EventBus'
// Usage: import { useEmitter } from '@/composables/useEmitter'
export default function useEmitter() {
    const internalInstance = getCurrentInstance()
    if (!internalInstance) { throw new Error('useEmitter can only be used inside a Vue component.') }
    const emitter = internalInstance.appContext.config.globalProperties.$emitter
    return emitter
}
