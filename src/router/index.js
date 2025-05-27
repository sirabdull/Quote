import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/pages/Welcome.vue'

import Chat from '@/pages/Chat.vue'
import Profile from '@/pages/Profile.vue'
import login from '@/pages/login.vue'
import Getstarted from '@/pages/Getstarted.vue'
import Dm from '@/pages/Dm.vue'

const routes = [
    { path: '/', name: 'Welcome', component: Welcome }, // Default route
    { path: '/chat', name: 'Chat', component: Chat },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/login', name: 'Login', component: login },
    { path: '/get-started', name: 'Getstarted', component: Getstarted },
    { path: '/dm', name: 'Dm', component: Dm },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
