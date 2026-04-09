import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Allow JSX inside .js files (legacy from CRA) and keep the src/ layout intact.
export default defineConfig({
  plugins: [
    react({
      include: /\.(js|jsx)$/,
    }),
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
