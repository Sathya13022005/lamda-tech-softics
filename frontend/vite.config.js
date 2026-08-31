import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config for Lamda Tech Softics frontend.
// The dev server proxies /api calls to the PHP backend running under XAMPP
// so the React app can call fetch('/api/...') without CORS headaches in dev.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost/lamda-tech-softics/backend',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
});
