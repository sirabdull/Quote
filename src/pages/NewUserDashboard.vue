<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200">
    <!-- Header -->
    <header class="p-6">
      <h1 class="text-2xl font-bold text-gray-800">Welcome to Quote</h1>
      <p class="text-gray-600">Your anonymous space for authentic conversations</p>
    </header>

    <!-- Main Content -->
    <main class="p-6">
      <!-- Empty State -->
      <div class="text-center py-12">
        <img src="@/assets/logo.png" alt="Quote Logo" class="w-24 h-24 object-contain mx-auto mb-6">
        <h2 class="text-xl font-semibold text-gray-700 mb-3">Get Started with Quote</h2>
        <p class="text-gray-600 mb-8">Join or create private groups for anonymous conversations</p>
      </div>

      <!-- Floating Action Button -->
      <div class="fixed bottom-6 right-6">
        <div class="relative">
          <!-- Main Plus Button -->
          <button
            @click="toggleMenu"
            class="w-14 h-14 bg-black text-white rounded-full shadow-lg flex items-center justify-center transition-transform duration-300 hover:bg-gray-800"
            :class="{ 'rotate-45': isMenuOpen }"
          >
            <span class="text-2xl">+</span>
          </button>

          <!-- Expandable Options -->
          <transition name="fade">
            <div
              v-if="isMenuOpen"
              class="absolute bottom-16 right-0 space-y-3 transition-opacity duration-300"
            >
              <!-- Create Group Button -->
              <button class="w-48 px-4 py-3 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300">
                <span class="mr-2">👥</span>
                New Group
              </button>

              <!-- Create Space Button -->
              <button class="w-48 px-4 py-3 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300">
                <span class="mr-2">🌟</span>
                New Space
              </button>

              <!-- Join via Invite Button -->
              <button class="w-48 px-4 py-3 bg-black text-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-800 transition-all duration-300">
                <span class="mr-2">🔗</span>
                Join via Invite
              </button>
            </div>
          </transition>
        </div>
      </div>

      <!-- Recent Activity Section -->
      <section class="mt-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Recent Activity</h3>
        <div class="bg-white rounded-xl p-6 shadow-sm">
          <p class="text-gray-600 text-center">No recent activity yet</p>
        </div>
      </section>

      <!-- Quick Tips Section -->
      <section class="mt-8">
        <h3 class="text-lg font-semibold text-gray-700 mb-4">Quick Tips</h3>
        <div class="grid gap-4 md:grid-cols-2">
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h4 class="font-medium text-gray-800 mb-2">Create a Group</h4>
            <p class="text-gray-600">Start your own private community for anonymous discussions</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h4 class="font-medium text-gray-800 mb-2">Join Conversations</h4>
            <p class="text-gray-600">Use invite links to join existing groups and spaces</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
