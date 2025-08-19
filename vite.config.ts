import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { vercel } from 'vite-plugin-vercel'; // Add Vercel plugin

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: '::', // IPv6 for local development
    port: 8080, // Custom port for local testing
  },
  plugins: [
    react(),
    vercel(), // Enable Vercel support for API routes
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Alias for src/ imports
    },
  },
  build: {
    outDir: 'dist', // Output directory for build artifacts
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'), // Entry point for the app
        api: path.resolve(__dirname, 'api/sendConsultationEmail.ts'), // Include API file
      },
    },
  },
  // Ensure ES module output for Vercel
  esbuild: {
    platform: 'node', // Target Node.js for API
  },
}));