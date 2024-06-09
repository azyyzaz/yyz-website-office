import {
	createMemoryHistory,
	createRouter,
	createWebHistory,
} from "vue-router";

import Layouts from "../layouts/index.vue";
import Home from "../views/home.vue";

const routes = [
	{
		path: "/",
		component: Layouts,

		redirect: "/",
		children: [
			{
				name: "home",
				path: "/",
				component: Home,
			},
			{
				name: "serviceItems",
				path: "/serviceItems",
				component: () => import("../views/serviceItems.vue"),
			},
			{
				name: "law",
				path: "/law",
				component: () => import("../views/law.vue"),
			},
			{
				name: "q&a",
				path: "/q&a",
				component: () => import("../views/law.vue"),
			},
			{
				name: "about",
				path: "/about",
				component: () => import("../views/about.vue"),
			},
			{
				name: "contact",
				path: "/contact",
				component: () => import("../views/contact.vue"),
			},
		],
	},
];

const router = createRouter({
	history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
	routes,
});
export default router;

export function createSSRRouter() {
	return createRouter({
		history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
		routes,
	});
}
