import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    outDir: 'docs',         //bundle into docs/ instead of dist/
    emptyOutDir: true       //clear docs/ on each build
  }
})
