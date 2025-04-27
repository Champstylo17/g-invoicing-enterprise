import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
+import tailwindcss from 'tailwindcss'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
+  // ← Add this section so Vite will run Tailwind as a PostCSS plugin
+  css: {
+    postcss: {
+      plugins: [tailwindcss],
+    },
+  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})
