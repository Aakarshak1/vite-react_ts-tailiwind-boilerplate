import { defineConfig } from 'vite'
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
  test: {
    global: true,
    css: false, // Do not process css files (is slow)
    environment: 'jsdom',
    setupFiles: 'setupTest.ts',
  },
});
