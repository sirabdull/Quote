
<template>
    <div class="h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex flex-col">
        <!-- Logo -->
        <div class="flex justify-center mt-12 mb-8">
            <img src="@/assets/logo.png" alt="Quote Logo" class="w-24 h-24 object-contain">
        </div>

        <!-- Signup Steps -->
        <div class="px-6 flex-1">
            <!-- Step 1: Email -->
            <div v-if="currentStep === 1" class="space-y-6">
                <form @submit.prevent="handleEmailStep" class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" v-model="email" required
                            class="w-full px-4 py-3 rounded-xl border border-gray-300  focus:border-transparent"
                            placeholder="Enter your email">
                    </div>
                    <button type="submit"
                        class="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
                        Continue
                    </button>
                </form>
            </div>

            <!-- Step 2: OTP Verification -->
            <div v-if="currentStep === 2" class="space-y-6">
   
                <form @submit.prevent="handleOtpStep" class="space-y-6">
                    <div>
                        <label for="otp" class="block text-sm font-medium text-gray-700 mb-1">Enter OTP</label>
                        <div class="flex gap-2 justify-center">
                            <input type="number" v-model="otp[0]" maxlength="1" required
                                class="w-14 h-14 px-4 py-3 rounded-xl border border-gray-300 focus:ring-black focus:border-transparent text-center text-2xl tracking-wider"
                                @input="focusNext($event, 1)">
                            <input type="number" v-model="otp[1]" maxlength="1" required
                                class="w-14 h-14 px-4 py-3 rounded-xl border border-gray-300  focus:ring-black focus:border-transparent text-center text-2xl tracking-wider"
                                @input="focusNext($event, 2)">
                            <input type="number" v-model="otp[1]" maxlength="1" required
                                class="w-14 h-14 px-4 py-3 rounded-xl border border-gray-300  focus:ring-black focus:border-transparent text-center text-2xl tracking-wider"
                                @input="focusNext($event, 3)">
                            <input type="number" v-model="otp[1]" maxlength="1" required
                                class="w-14 h-14 px-4 py-3 rounded-xl border border-gray-300  focus:ring-black focus:border-transparent text-center text-2xl tracking-wider">
                        </div>
                    </div>
                    <button type="submit"
                        class="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
                        Verify
                    </button>
                </form>
            </div>

            <!-- Step 3: Complete Profile -->
            <div v-if="currentStep === 3" class="space-y-6">
                <h2 class="text-2xl font-semibold text-center mb-8">Complete Profile</h2>
                <form @submit.prevent="handleProfileStep" class="space-y-6">
                    <div>
                        <label for="username" class="block text-sm font-medium text-gray-700 mb-1">Username</label>
                        <input type="text" id="username" v-model="username" required
                            class="w-full px-4 py-3 rounded-lg border border-gray-300  focus:ring-black focus:border-transparent"
                            placeholder="Choose a username">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-1">Profile Photo</label>
                        <div class="flex flex-col items-center space-y-4">
                            <div class="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
                                <img v-if="photoPreview" :src="photoPreview" class="w-full h-full object-cover" alt="Profile preview">
                                <div v-else class="w-full h-full flex items-center justify-center">
                                    <span class="text-gray-400">No photo</span>
                                </div>
                            </div>
                            <input type="file" @change="handlePhotoUpload" accept="image/*" class="hidden" ref="fileInput">
                            <button type="button" @click="$refs.fileInput.click()"
                                class="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                                Upload Photo
                            </button>
                        </div>
                    </div>
                    <button type="submit"
                        class="w-full px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300">
                        Complete Setup
                    </button>
                </form>
            </div>
        </div>

        <!-- Additional Links -->
        <div class="p-6 mt-auto">
            <p class="text-sm text-gray-600 text-center">
                Already have an account?
                <router-link to="/login" class="text-black hover:underline">Sign In</router-link>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const currentStep = ref(1)
const email = ref('')
const otp = ref(['', '', '', ''])
const username = ref('')
const photoFile = ref(null)
const photoPreview = ref(null)

const handleEmailStep = async () => {
    try {
        // TODO: Implement email verification logic here
        console.log('Email submitted:', email.value)
        currentStep.value = 2
    } catch (error) {
        console.error('Email step failed:', error)
    }
}

const focusNext = (event, index) => {
    const input = event.target
    if (input.value.length >= 1) {
        input.value = input.value.slice(0, 1)
        if (index < 4) {
            const nextInput = input.parentElement.children[index]
            if (nextInput) {
                nextInput.focus()
            }
        }
    }
}

const handleOtpStep = async () => {
    try {
        // TODO: Implement OTP verification logic here
        const otpValue = otp.value.join('')
        console.log('OTP submitted:', otpValue)
        currentStep.value = 3
    } catch (error) {
        console.error('OTP verification failed:', error)
    }
}

const handlePhotoUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
        photoFile.value = file
        const reader = new FileReader()
        reader.onload = (e) => {
            photoPreview.value = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

const handleProfileStep = async () => {
    try {
        // TODO: Implement profile completion logic here
        console.log('Profile submitted:', {
            username: username.value,
            photoFile: photoFile.value
        })
        router.push('/dm')
    } catch (error) {
        console.error('Profile completion failed:', error)
    }
}
</script>
