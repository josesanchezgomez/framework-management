import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Rutas relativas: funciona tanto en local como bajo /<repo>/ en GitHub Pages.
  base: "./",
  plugins: [react(), tailwindcss()],
});
