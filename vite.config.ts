/// <reference types="vitest" />
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgrPlugin from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgrPlugin()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    include: ["**/__tests__/**/*.{ts,tsx}"],
    coverage: {
      reporter: ["text", "html"],
      exclude: ["node_modules/", "test/setup.ts"],
    },
  },
  define: {
    "process.env": process.env,
  },
  server: {
    port: 3000,
  },
})
