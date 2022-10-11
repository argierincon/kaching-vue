import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/public/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/historial-de-transacciones",
      component: import("../components/app/transactionHistory/Index.vue"),
    },
  ],
});

export default router;
