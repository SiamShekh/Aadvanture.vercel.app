import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Project pages are served from /<repo>/, so production builds set GITHUB_PAGES=true.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === "true" ? "/Aadvanture.vercel.app/" : "/",
});
