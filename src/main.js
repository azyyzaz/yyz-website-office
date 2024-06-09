import { createSSRApp } from "vue";
import App from "./App.vue";
import { createSSRRouter } from "./router";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { ID_INJECTION_KEY } from "element-plus";
import "normalize.css";
// createApp(App).use(router).mount("#app");

export function createApp() {
	const app = createSSRApp(App);
	const router = createSSRRouter();

	app.provide(ID_INJECTION_KEY, {
		prefix: 1024,
		current: 0,
	});
	app.use(ElementPlus);
	app.use(router);
	return { app, router };
}
