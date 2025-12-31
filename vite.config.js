import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      // This tells Vite: "If you see a request starting with /api, 
      // send it to the Vercel dev server instead of React Router."
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})