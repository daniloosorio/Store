import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '192.168.18.93', // Aquí puedes especificar la dirección IP deseada
    port: 8080,
  },
  plugins: [react()],
})
