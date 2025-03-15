import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Ensures correct asset paths
  build: {
    rollupOptions: {
      input: {
        main: "index.html",      // Home Page
        about: "about.html",     // About Page
        mywork: "MyWork.html",   // My Work Page
        projects: "projects.html", // Projects Page
        contact: "contact.html"  // Contact Me Page
      },
    },
  },
});
