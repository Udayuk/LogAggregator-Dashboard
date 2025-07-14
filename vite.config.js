import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components"),
      hooks: path.resolve(__dirname, "src/hooks"),
      services: path.resolve(__dirname, "src/services"),
      utils: path.resolve(__dirname, "src/utils"),
      pages: path.resolve(__dirname, "src/pages"),
    },
  },
});
