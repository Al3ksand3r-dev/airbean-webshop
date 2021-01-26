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
  {
    path: "/order-status",
    name: "OrderStatus",
    component: () => import("@/views/pages/OrderStatus.vue"),
    meta: { hasOrder: true },
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("@/views/pages/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const order = localStorage.getItem("order_info");
  if (to.matched.some((route) => route.meta.hasOrder && !order)) {
    next({ name: "Menu" });
  } else {
    next();
  }
});

export default router;
