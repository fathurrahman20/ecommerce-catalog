import { createRouter, createWebHistory } from "vue-router";
import ProductView from "../views/ProductView.vue";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/products/:id",
      name: "products",
      component: ProductView,
    },
  ],
});

export default router;
