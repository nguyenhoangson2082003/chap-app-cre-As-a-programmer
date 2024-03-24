import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    port: 1234,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
      },
    },
  },
});
=======
})
>>>>>>> 465aa6913f087a1ebb076c4ef9600468404d0e2d
