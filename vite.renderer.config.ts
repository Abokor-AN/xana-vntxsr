import path from "path";
import type { ConfigEnv, UserConfig } from "vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { pluginExposeRenderer } from "./vite.base.config";

import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<"renderer">;
  const { root, mode, forgeConfigSelf } = forgeEnv;
  const name = forgeConfigSelf.name ?? "";

  return {
    root,
    mode,
    base: "./",
    build: {
      outDir: `.vite/renderer/${name}`,
    },
    css: {
      postcss: {
        plugins: [tailwind(), autoprefixer()],
      },
    },
    plugins: [pluginExposeRenderer(name), vue()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      preserveSymlinks: true,
    },
    clearScreen: false,
  } as UserConfig;
});
