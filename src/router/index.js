import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("@/views/pages/Menu.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
