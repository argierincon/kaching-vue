import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: Login },
    { path: "/", component: Home },
    {
      path: "/historial-de-transacciones",
      component: import("../components/app/transactionHistory/Index.vue"),
    },
    // {
    //   path: "*",
    //   redirect: "/login",
    // },
  ],
});

export default router;
