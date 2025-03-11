import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      "react-router-dom": "react-router-dom",
    },
    root: '.',
  },
  build: {
    rollupOptions: {
      external: ["react-router-dom"]
    }
  }
});
