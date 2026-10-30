import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ['last 2 versions']
        })
      ]
    }
  },
  build: {
    minify: 'esbuild'
  }
})
