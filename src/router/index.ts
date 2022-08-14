import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'
import routes from '@/router/routes'

// Router
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// Changing title after route change
router.afterEach((to) => {
    const appStore = useAppStore()
    let pageTitle // Page title, defaults to app name
    if (to.meta.title) { pageTitle = `${to.meta.title} - ${appStore.getTitle}` }
    document.title = pageTitle || appStore.getTitle
})

export default router
