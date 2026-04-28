// @ts-check
import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import icon from 'astro-icon'

export default defineConfig({
  output: 'static',
  base: '/',
  integrations: [icon()],
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
