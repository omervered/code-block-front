import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite config for run build
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../server/public",
    emptyOutDir: true,
  },
});
