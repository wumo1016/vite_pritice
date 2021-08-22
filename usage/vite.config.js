import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
const path = require('path')

export default defineConfig({
  plugins: [vuePlugin()],
  resolve:{
    alias:{
      '@': path.resolve(__dirname, 'src')
    }
  }
})
