import { defineStore } from "pinia";
import { getGistDetails } from "@/api/getGistDetails";
import { ApiConstants } from "@/api/ApiConstants";
import type { GistDetails } from "@/api/GistDetails";

export const useGistEntryStore = defineStore({
  id: "gist-entry",
  state: () => ({
    gist: undefined as GistDetails | undefined
  }),
  actions: {
    async load(id: string): Promise<GistDetails | undefined> {
      if(this.gist?.id === id) {
        return this.gist;
      }

      const retrieved = id ? await getGistDetails(id) : undefined;

      if (retrieved == undefined || retrieved.owner.login != ApiConstants.GithubUser) {
        return undefined;
      }

      this.gist = retrieved;
      return retrieved;
    }
  },
});
