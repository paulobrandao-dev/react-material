import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import preserveDirectives from 'rollup-preserve-directives';
import { defineConfig } from 'vite';
// import dts from 'vite-plugin-dts-bundle-generator';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // dts({
    //   libraries: {
    //     allowedTypesLibraries: [resolve(__dirname, 'src/lib/global.d.ts')],
    //   },
    //   fileName: 'react-material.d.ts',
    // }),
    preserveDirectives(),
  ],
  build: {
    lib: {
      entry: {
        main: resolve(__dirname, 'src/lib/main.ts'),
        utils: resolve(__dirname, 'src/lib/utils/index.ts'),
      },
      name: 'ReactMaterial',
      fileName: (format, entryName) =>
        `react-material.${entryName}.${format === 'cjs' ? 'cjs' : 'js'}`,
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
});
