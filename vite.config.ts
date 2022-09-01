import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src'),
      '~': resolve(__dirname, '/app')
    }
  },
  plugins: [
    vue(),
    dts({
      include: './src'
    }),
    UnoCSS()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VueCmdkPalette',
      fileName: 'vue-cmdk-palette'
    },
    outDir: 'lib',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
