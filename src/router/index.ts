import {
  createMemoryHistory,
  createRouter as _createRouter,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
import { routerPaths } from "./routes";

const routes: Array<RouteRecordRaw> = [
  {
    path: routerPaths.base,
    name: "Base",
    component: () => import("../components/layout/AppBaseLayout.vue"),
  },
  {
    path: routerPaths.about,
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

export function createRouter() {
  return _createRouter({
    // use appropriate history implementation for server/client
    // import.meta.env.SSR is injected by Vite.
    history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
    routes,
  });
}
