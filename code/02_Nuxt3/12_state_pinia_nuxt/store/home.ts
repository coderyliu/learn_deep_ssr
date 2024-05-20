import { defineStore } from "pinia";

export type HomeState = {
  count: number;
};

export const useHomeStore = defineStore("home", {
  state: (): HomeState => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++;
    }
  }
});
