import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src", "components"),
      "@pages": path.resolve(__dirname, "src", "pages"),
      "@styles": path.resolve(__dirname, "src", "styles"),
      "@utils": path.resolve(__dirname, "src", "utils"),
      "@routes": path.resolve(__dirname, "src", "routes"),
      "@stores": path.resolve(__dirname, "src", "stores"),
    },
  },
});
