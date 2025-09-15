import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { intlayerPlugin } from "vite-intlayer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), intlayerPlugin()],
});
