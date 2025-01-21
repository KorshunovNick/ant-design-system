import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    dts({
      include: ['lib'],

      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    copyPublicDir: false,
    cssCodeSplit: true,
    outDir: 'dist',
    lib: {
      fileName: 'main',
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
      name: 'antDesignSystem',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        assetFileNames: assetInfo => {
          if (assetInfo?.name?.endsWith('.css')) {
            return 'styles/index.css'; // Путь для CSS файлов
          }
          return '[name].[hash][extname]';
        },
      },
    },
  },
});
