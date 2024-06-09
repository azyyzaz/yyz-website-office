import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vitejs.dev/config/
export default defineConfig({
	// base: import.meta.env.DEV ? "/" : "/yyz-website-office/",
	plugins: [vue()],
	base: "/yyz-website-office/",
	server: {
		port: 5173,
	},
	css: {
		preprocessorOptions: {
			less: {},
		},
	},
});
