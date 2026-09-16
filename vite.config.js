import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: the `server.allowedHosts` + `hmr` overrides below exist so the site
// works when served through a remote preview proxy (wss on 443).
// For normal local development you can delete them.
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
})
