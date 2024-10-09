/// <reference types="vitest/config" />

import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    preserveDirectives(),
    dts({
      rollupTypes: true,
      tsconfigPath: resolve(__dirname, 'tsconfig.app.json'),
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/lib/index.ts'),
        utils: resolve(__dirname, 'src/lib/utils/index.ts'),
      },
      name: 'ReactMaterial',
      fileName: (format, entryName) =>
        `react-material${entryName === 'utils' ? '.utils' : ''}.${format === 'cjs' ? 'cjs' : 'js'}`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    environment: 'happy-dom',
    setupFiles: ['tests/setupTest.ts'],
    coverage: {
      provider: 'istanbul',
      include: ['src/lib/**'],
      reporter: ['text', 'html', 'clover', 'json', 'json-summary'],
    },
  },
});
