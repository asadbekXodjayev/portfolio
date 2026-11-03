import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// Serves api/telegram.js during `vite` (Vercel serves it in production). The TELEGRAM_* values
// are read from .env / .env.local and stay on the server side.
const devApi = () => ({
  name: 'dev-api',
  configureServer(server) {
    const env = loadEnv('development', process.cwd(), '');
    Object.keys(env).filter((k) => k.startsWith('TELEGRAM_')).forEach((k) => { process.env[k] = env[k]; });
    server.middlewares.use('/api/telegram', async (req, res) => {
      let raw = '';
      for await (const chunk of req) raw += chunk;
      try { req.body = raw ? JSON.parse(raw) : {}; } catch { req.body = {}; }
      res.status = (code) => { res.statusCode = code; return res; };
      res.json = (obj) => { res.setHeader('Content-Type', 'application/json'); res.end(JSON.stringify(obj)); };
      try {
        const mod = await server.ssrLoadModule('/api/telegram.js');
        await mod.default(req, res);
      } catch (e) {
        res.statusCode = 500;
        res.end('{"ok":false}');
      }
    });
  },
});

// Allow JSX inside .js files (legacy from CRA) and keep the src/ layout intact.
export default defineConfig({
  plugins: [
    devApi(),
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
