import { defineConfig } from 'vite'
import vuePlugin from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
const path = require('path')

export default defineConfig({
  plugins: [vuePlugin(), viteMockServe({})],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
})
