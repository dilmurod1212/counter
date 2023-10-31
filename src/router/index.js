import { createRouter, createWebHistory,  } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/brazil",
      name: "brazil",
      component: () => import("../views/Brazil.vue"),
    },
    {
      path: "/hawaii",
      name: "hawaii",
      component: () => import("../views/Hawaii.vue"),
    },
    {
      path: "/jamaica",
      name: "jamaica",
      component: () => import("../views/Jamaica.vue"),
    },
    {
      path: "/panama",
      name: "panama",
      component: () => import("../views/Panama.vue"),
    },
    {
      path: "/destination/:id",
      component: () => import("../views/DestinationShow.vue"),
    },
  ],
});

export default router;
