import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import History from "../views/History.vue";
import AddIncome from "../views/AddIncome.vue";
import AddOutcome from "../views/AddOutcome.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/login", component: Login },
    { path: "/", component: Home },
    {
      path: "/historial-de-transacciones",
      component: History,
    },
    {
      path: "/add-income",
      component: AddIncome,
    },
    {
      path: "/add-outcome",
      component: AddOutcome,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/login",
    },
  ],
});

router.beforeEach((to, from, next) => {
  const t = localStorage.getItem("accessToken");
  if (to.fullPath === "/") {
    if (!t) {
      next("/login");
    }
  }
  if (to.fullPath === "/login") {
    if (t) {
      next("/");
    }
  }
  next();
});

export default router;
