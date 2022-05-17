import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        title: "Home",
      }
    },
    {
      path: "/ramblings",
      name: "ramblings",
      component: () => import("../views/RamblingList.vue"),
      meta: {
        title: "Ramblings",
      },
    },
    {
      path: "/:catchAll(.*)",
      name: "404",
      component: () => import("../views/NotFound.vue"),
      meta: {
        title: "Not Found",
      },
    }
  ],
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);
  const title = nearestWithTitle?.meta.title;
  document.title = title === undefined ? "Envalid" : "Envalid - " + title;
  next();
});

export default router;
