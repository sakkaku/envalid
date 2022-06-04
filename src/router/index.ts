import { createRouter, createWebHistory } from "vue-router";
import { useMetaStore } from "@/stores/useMetaStore";
import { useGistEntryStore } from "@/stores/useGistEntryStore";
import { useGistListStore } from "@/stores/useGistListStore";
import { useRepositoryStore } from "@/stores/useRepositoryStore";

declare module "vue-router" {
  interface RouteMeta {
    title?: string,
    description?: string
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
      meta: {
        title: "Home",
        description: "Benevolent Dictator of the Multiverse"
      }
    },
    {
      path: "/ramblings",
      name: "ramblings",
      component: () => import("../views/RamblingList.vue"),
      meta: {
        title: "Ramblings",
        description: "Random ramblings and findings"
      },
      async beforeEnter(_to, _from, next) {
        const store = useGistListStore();
        await store.load();
        next();
      }
    },
    {
      path: "/rambling/:id",
      name: "rambling",
      component: () => import("../views/RamblingItem.vue"),
      async beforeEnter(to, _from, next) {
        const id = to.params.id as string;
        const store = useGistEntryStore();
        const entry = await store.load(id);

        if (entry != undefined) {
          to.meta.title = entry.description;
          to.meta.description = entry.description;
          next();
        } else {
          next({ name: "404" });
        }
      }
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/ProjectList.vue"),
      meta: {
        title: "Projects",
        description: "Random projects and crimes against humanity"
      },
      async beforeEnter(_to, _from, next) {
        const store = useRepositoryStore();
        await store.load();
        next();
      }
    },
    {
      path: "/404",
      name: "404",
      component: () => import("../views/NotFound.vue"),
      meta: {
        title: "Not Found",
        description: "The specified page does not exist"
      }
    },
    {
      path: "/:catchAll(.*)",
      name: "404-catch-all",
      redirect: { name: "404" }
    }
  ],
});

router.afterEach((to) => {
  const store = useMetaStore();
  store.setTitle(to.meta?.title);
  store.setDescription(to.meta?.description);
});

export default router;
