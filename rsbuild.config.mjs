import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  output: {
    assetPrefix: "/proit_schedule/",
  },
  html: {
    title: "ProIT Fest | Расписание",
  },
});
