import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enables external access (use your system's IP)
    port: 5173, // Default Vite port; you can change it if needed
    strictPort: true, // Ensures Vite runs only on the specified port
  },
});
