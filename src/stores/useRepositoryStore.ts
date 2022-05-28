import { defineStore } from "pinia";
import { useWaitingStore } from "@/stores/useWaitingStore";
import { ApiConstants } from "@/api/ApiConstants";
import type { RepositoryHeader } from "@/api/RepositoryHeader";
import { getRepositoriesForUser } from "@/api/getRepositoriesForUser";

export const useRepositoryStore = defineStore({
  id: "repo-list",
  state: () => ({
    repositories: [] as RepositoryHeader[],
    isFinished: false
  }),
  actions: {
    async load(): Promise<void> {
      if (this.isFinished) return;

      let page = 0;
      const perPage = 25;
      const waitingStore = useWaitingStore();

      while (!this.isFinished) {
        page += 1;

        const newItems = await waitingStore.waitUntil(
          getRepositoriesForUser(ApiConstants.GithubUser, perPage, page)
        );

        if (newItems.length < perPage) {
          this.isFinished = true;
        }

        this.repositories.push(...newItems);
      }
    }
  }
});
