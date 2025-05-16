import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({ registerType: 'autoUpdate' }), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src', // Ensure this alias is set
    },
  },
  server: {
    host: true, // allows access from local network
    port: 5173, // or any port you’re using
  }
})
