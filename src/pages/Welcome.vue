<template>
    <div
        class="min-h-[99vh] overflow-y-hidden bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center relative">
        <div class="w-full max-w-xl mx-auto px-4 flex flex-col h-full">
            <!-- Illustration -->
            <div class="flex-1 flex items-center justify-center flex-col gap-8">
                <img src="@/assets/logo.png" alt="Anonymous sharing" class="w-64 h-64 object-contain -mt-32">
                <!-- Action Buttons -->
                <div class="fixed bottom-6 left-0 right-0 flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto px-4">
                    <router-link to="/get-started"
                        class="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2">
                        Get started
                    </router-link>
                    <router-link to="/login"
                        class="px-6 py-3 bg-white text-black rounded-full hover:bg-slate-50 transition-all duration-300 border border-black flex items-center justify-center gap-2">
                        login
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>
