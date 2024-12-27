import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'src': path.resolve('src'), // This will resolve relative to the current working directory
    },
  },
  server: {
    host: '0.0.0.0', // Allow access from the local network
  },
});
