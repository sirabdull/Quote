<template>
    <div class="h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex flex-col">
        <!-- Logo -->
        <div class="flex justify-center mt-12 mb-8">
            <img src="@/assets/logo.png" alt="Quote Logo" class="w-24 h-24 object-contain">
        </div>

        <!-- Login Form -->
        <div class="px-6 flex-1">
            <form @submit.prevent="handleLogin" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" id="email" v-model="email" required
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Enter your email">
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input type="password" id="password" v-model="password" required
                        class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent"
                        placeholder="Enter your password">
                </div>

                <button type="submit"
                    class="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
                    Sign In
                </button>
            </form>
        </div>

        <!-- Additional Links -->
        <div class="p-6 mt-auto">
            <p class="text-sm text-gray-600 text-center">
                Don't have an account?
                <router-link to="/get-started" class="text-black hover:underline">Get Started</router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
    try {
        // TODO: Implement authentication logic here
        console.log('Login attempt:', { email: email.value, password: password.value })
        // On successful login, redirect to the main app
        router.push('/dashboard')
    } catch (error) {
        console.error('Login failed:', error)
    }
}
</script>
