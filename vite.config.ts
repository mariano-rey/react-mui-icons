import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts()],
  resolve: { alias: [{ find: '~', replacement: path.resolve(__dirname, './src') }] },
  build: {
    copyPublicDir: false,
    sourcemap: true,
    emptyOutDir: true,
    lib: { entry: path.resolve(__dirname, 'src/main.ts'), fileName: 'main', formats: ['es'] },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material'],
      output: {
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          '@mui/material': '@mui/material',
        },
      },
    },
  },
})
