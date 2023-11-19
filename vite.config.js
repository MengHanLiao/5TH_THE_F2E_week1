import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  if (command === 'build') {
    return {
      base: '/5TH_THE_F2E_week1/',
      plugins: [svelte()],
    }
  } else {
    return {
      plugins: [svelte()]
    }
  }
})
