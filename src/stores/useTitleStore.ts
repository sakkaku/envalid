import { defineStore } from "pinia";

export const useTitleStore = defineStore({
  id: "title",
  state: () => ({
    title: ''
  }),
  actions: {
    set (newTitle: string | undefined): void {
      const isHome = newTitle === "Home";
      if(isHome) {
        document.title = "Envalid - Home";
        this.title = "Envalid";
      } else {
        this.title = newTitle ?? "";
        document.title = this.title == "" ? "Envalid" : "Envalid - " + this.title;
      }
    },
    reset(): void {
      this.set('');
    },
  },
});

