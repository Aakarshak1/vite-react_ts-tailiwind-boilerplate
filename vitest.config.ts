//https://vitest.dev/config/
import { defineConfig } from 'vitest/config';

export default defineConfig({
  server: { 
    watch: { 
      ignored: ['node_modules'] 
    } 
  },
  test: {
    globals: true,
    environment: 'jsdom',
    css: false, // Do not process css files (is slow)
    setupFiles: 'setupTest.ts',
    coverage: {
      provider: 'v8', // or 'c8',  'c8' by default
      enabled: true,
      reporter: ['html'],
    },
  },
});
