import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue({ template: { transformAssetUrls: { includeAbsolute: false } } })],
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 900
  }
})
