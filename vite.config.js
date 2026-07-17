import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 相対パスにすることで、GitHub Pagesのリポジトリ名に依存せず配信できます。
  base: "./",
});
