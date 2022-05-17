import { defineStore } from "pinia";
import { useWaitingStore } from "@/stores/useWaitingStore";
import { getGistsForUser } from "@/api/getGistsForUser";
import type { GistHeader } from "@/api/GistHeader";
import { ApiConstants } from "@/api/ApiConstants";

export const useGistStore = defineStore({
  id: "gist",
  state: () => ({
    gists: [] as GistHeader[],
    page: 1,
    isFinished: false
  }),
  actions: {
    async load(): Promise<void> {
      if (this.isFinished) return;
      const perPage = 25;
      const waitingStore = useWaitingStore();
      const newGists = await waitingStore.waitUntil(
        getGistsForUser(ApiConstants.GithubUser, perPage, this.page)
      );
      this.page += 1;

      if(newGists.length < perPage) {
        this.isFinished = true;
      }

      this.gists.push(...newGists);
    }
  },
});