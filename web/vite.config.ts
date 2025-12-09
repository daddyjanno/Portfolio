import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Minification strategy for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
      format: {
        comments: false,
      },
    } as any,
    // Chunk splitting strategy for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunk
          'vendor': [
            'react',
            'react-dom',
          ],
          // Split external dependencies
          'external': [
            'emailjs-com',
            'react-google-recaptcha',
          ],
        },
      },
    },
    // Generate source maps only for debugging
    sourcemap: false,
    // Report compressed file size
    reportCompressedSize: true,
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
  },
})
