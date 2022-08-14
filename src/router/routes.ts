import HomeView from '@/views/HomeView.vue'

// Routes
export default [
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
        component: () => import('@/views/AboutView.vue'),
        meta: { title: 'About' } // Set the page title
    },
    {
        path: '/supervision',
        name: 'supervision',
        component: () => import('@/views/SupervisionView.vue'),
        meta: { title: 'Supervision' } // Set the page title
    }
]
