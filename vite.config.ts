import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // You can define aliases for convenience.
      "@": "/src",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".svg"],
  },
});
