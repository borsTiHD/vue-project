import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'
import HomeView from '@/views/HomeView.vue'

// Router
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
            // meta: { title: 'Home' } // Default title if not set
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue'),
            meta: { title: 'About' } // Set the page title
        }
    ]
})

// Changing title after route change
router.afterEach((to) => {
    const appStore = useAppStore()
    let pageTitle // Page title, defaults to app name
    if (to.meta.title) { pageTitle = `${to.meta.title} - ${appStore.getTitle}` }
    document.title = pageTitle || appStore.getTitle
})

export default router
