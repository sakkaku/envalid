import { defineStore } from "pinia";
import { getGistsForUser } from "@/api/getGistsForUser";
import type { GistHeader } from "@/api/GistHeader";
import { ApiConstants } from "@/api/ApiConstants";

export const useGistListStore = defineStore({
  id: "gist-list",
  state: () => ({
    gists: [] as GistHeader[],
    isFinished: false
  }),
  actions: {
    async load(): Promise<void> {
      if (this.isFinished) return;

      let page = 0;
      const perPage = 25;

      while (!this.isFinished) {
        page += 1;

        const newGists = await getGistsForUser(ApiConstants.GithubUser, perPage, page);

        if(newGists.length < perPage) {
          this.isFinished = true;
        }

        this.gists.push(...newGists);
      }
    }
  },
});
