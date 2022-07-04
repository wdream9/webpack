import {defineConfig} from 'vite'
// vite.config.js
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [
    createVuePlugin(/* options */)
  ],
})