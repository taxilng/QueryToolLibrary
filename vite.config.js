import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8899,
    open: true,
    host: true,
    proxy: {
      '/xywlapi': {
        target: 'https://api.xywlapi.cc/',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/xywlapi/, '')
      },
      '/api': {
        target: 'https://i.lzyumi.top/',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/api/, '')
      },
      '/ape': {
        target: 'https://air.m3zz.com/',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/ape/, '')
      },
      '/bspapp': {
        target:
          'https://2955b122-0e37-42a7-a4ee-4ddd503fe6b6.bspapp.com/http/user-center/',
        changeOrigin: true,
        rewrite: p => p.replace(/^\/bspapp/, '')
      }
    }
  }
})
