import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Auto Clicker',
        short_name: 'AClicker',
        start_url: './',
        display: 'standalone',
        "icons": [
          {
            "src": "icons/512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ]
      }
    })

  ],
  base: './',
})
