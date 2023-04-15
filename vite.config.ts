/// <reference types="vitest" />
import { resolve } from "path"
import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"
import svgrPlugin from "vite-plugin-svgr"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(), svgrPlugin()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "react-ui",
      name: "PerxReactUI",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "framer-motion",
        "lucide-react",
        "prop-types",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "framer-motion": "FramerMotion",
          "lucide-react": "LucideReact",
          "prop-types": "PropTypes",
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/setup.ts",
    include: ["**/*.test.{ts,tsx}"],
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
