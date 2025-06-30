import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 enables access from local network (phone)
    port: 5173, // optional: forces a specific port
  },
});
