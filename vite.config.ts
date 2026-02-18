import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  build: {
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'motion-vendor': ['framer-motion'],
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
})
