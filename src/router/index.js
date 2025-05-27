import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/pages/Welcome.vue'

import Chat from '@/pages/Chat.vue'
import Profile from '@/pages/Profile.vue'
import login from '@/pages/login.vue'
import Getstarted from '@/pages/Getstarted.vue'
import Dashboard from '@/pages/Dashboard.vue'
import NewUserDashboard from '@/pages/NewUserDashboard.vue'

const routes = [
    { path: '/', name: 'Welcome', component: Welcome }, // Default route
    { path: '/chat', name: 'Chat', component: Chat },
    { path: '/profile', name: 'Profile', component: Profile },
    { path: '/login', name: 'Login', component: login },
    { path: '/get-started', name: 'Getstarted', component: Getstarted },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    { path: '/newuserdashboard', name: 'NewUserDashboard', component: NewUserDashboard },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
