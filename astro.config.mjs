// @ts-check
import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',
  base: '/',
  vite: {
    plugins: [
      tailwindcss()
    ],
    build: {
      sourcemap: false
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      }
    }
  }
});
