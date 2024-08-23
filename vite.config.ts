import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'

export default defineConfig({
  base: '/github-globe/',
  plugins: [
    vue({
      // Other config
      ...templateCompilerOptions
    }),
  ]
})
