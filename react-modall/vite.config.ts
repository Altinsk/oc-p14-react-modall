import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import dts from 'vite-plugin-dts';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/lib/index.ts'),
      name: 'react-sweet-modal',
      fileName: (format) => `react-sweet-modal.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    cssInjectedByJsPlugin(),
  ],
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[local]_[hash:base64:2]"
    }
  }
})
