import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    counter: 10,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    reset() {
      this.counter = 0;
    },
  },
});
