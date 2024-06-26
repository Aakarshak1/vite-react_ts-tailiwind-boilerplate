/* eslint-disable consistent-return */
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    eslint({
      failOnWarning: false,
      failOnError: false,
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: '[name]-[hash].js',
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
});
