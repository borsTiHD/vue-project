import { getCurrentInstance } from 'vue'

// Helper to access axios instance '@/plugins/AxiosPlugin'
// Usage: import { useAxios } from '@/composables/useAxios'
export default function useAxios() {
    const internalInstance = getCurrentInstance()
    if (!internalInstance) { throw new Error('useAxios can only be used inside a Vue component.') }
    const axios = internalInstance.appContext.config.globalProperties.$axios
    return axios
}
