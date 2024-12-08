import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { compression } from "vite-plugin-compression2";
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true, // Loại bỏ các lệnh console.log trong quá trình nén
      },
    },
  },
  plugins: [react(), compression()],
});
