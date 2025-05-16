<template>
    <div class="h-screen bg-slate-800 flex items-center justify-center relative overflow-y-hidden">
        <div class="w-full max-w-xl mx-auto px-4 flex flex-col h-full">
            <!-- Quote Caption -->
            <div class="absolute top-8 left-4 md:left-12">
                <p class="text-xl md:text-2xl font-serif italic text-white/90">"Speak your truth freely,<br>your secret
                    is safe here"</p>
            </div>
            <!-- Illustration -->
            <div class="flex-1 flex items-center justify-center">
                <img src="@/assets/anonym.svg" alt="Anonymous sharing" class="w-64 h-64 object-contain">
            </div>

            <!-- CTA Buttons -->
            <div class="space-y-3 mb-8">
                <button
                    class="w-full bg-white text-slate-800 rounded-xl py-3 text-base font-medium hover:bg-slate-100 transition-colors"
                    @click="$router.push('/home')">
                    Sign In
                </button>
                <button
                    class="w-full bg-transparent text-white rounded-xl py-3 text-base font-medium border-2 border-white hover:bg-white/10 transition-colors"
                    @click="$router.push('/chat')">
                    Join with Invite
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>
