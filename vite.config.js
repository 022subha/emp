import svgr from '@svgr/rollup'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  preview: { port: 5173 },
  server: {
    host: '0.0.0.0',
    port: 4173
  },

  plugins: [svgr(), react()]
})

