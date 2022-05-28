import { defineStore } from "pinia";

export const useMetaStore = defineStore({
  id: "title",
  state: () => ({
    title: ""
  }),
  actions: {
    setTitle(newTitle: string | undefined): void {
      const isHome = newTitle === "Home";
      if (isHome) {
        this.title = "Envalid";
        document.title = "Home - Envalid";
      } else {
        this.title = newTitle ?? "";
        document.title = (this.title != "" ? (this.title + " - ") : "") + "Envalid";
      }
    },
    setDescription(newDescription: string | undefined): void {
      document.querySelector("meta[name=\"description\"]")?.setAttribute("content", newDescription ?? "");
    }
  }
});
