import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import { compression } from "vite-plugin-compression2";

// eslint-disable-next-line  @typescript-eslint/ban-ts-comment
// @ts-ignore
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ["**/*.{js,jsx,ts,tsx}"], // Проверяемые файлы
    }),
    compression({
      algorithm: "gzip",
      deleteOriginalAssets: false,
    }),
    compression({
      algorithm: "brotliCompress",
      deleteOriginalAssets: false,
    }),
    VitePWA({
      registerType: "autoUpdate",
      base: "/",
      devOptions: {
        enabled: true,
        type: "module",
      },
      srcDir: "src",
      filename: "sw.ts",
      workbox: {
        swDest: "client/sw.js",
      },
      strategies: "injectManifest",
      manifest: {
        name: "zenFit",
        short_name: "zenFit",
        icons: [
          {
            src: "/assets/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#ffffff",
        background_color: "#ffffff",
        start_url: "/",
        display: "standalone",
      },
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
});
