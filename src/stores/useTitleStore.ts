import { defineStore } from "pinia";

export const useTitleStore = defineStore({
  id: "title",
  state: () => ({
    title: ""
  }),
  actions: {
    set(newTitle: string | undefined): void {
      const isHome = newTitle === "Home";
      if (isHome) {
        this.title = "Envalid";
        document.title = "Home - Envalid";
      } else {
        this.title = newTitle ?? "";
        document.title = (this.title != "" ? (this.title + " - ") : "") + "Envalid";
      }
    },
    reset(): void {
      this.set("");
    }
  }
});

