import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/authentication-demo/",
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        notFound: "404.html",
      },
    },
  },
});
