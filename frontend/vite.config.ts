import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
   rollupOptions: {
      input: {
         index: 'index.html',
         login: 'pages/login.html',
         book: 'pages/book_card.html'
      },
      output: {
         dir: './dist'
      }
   }
  }
})

