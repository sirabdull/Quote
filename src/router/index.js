import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/pages/Welcome.vue'
import Home from '@/pages/Home.vue'
import Chat from '@/pages/Chat.vue'
import Profile from '@/pages/Profile.vue'

const routes = [
    { path: '/', name: 'Welcome', component: Welcome }, // Default route
    { path: '/home', name: 'Home', component: Home },
    { path: '/chat', name: 'Chat', component: Chat },
    { path: '/profile', name: 'Profile', component: Profile },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
