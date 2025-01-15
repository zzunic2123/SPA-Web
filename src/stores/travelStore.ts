import { defineStore } from 'pinia';

interface Destination {
  id: number;
  name: string;
  date: string;
  budget: number;
  notes: string;
}

export const useTravelStore = defineStore('travel', {
  state: () => ({
    destinations: [] as Destination[],
  }),
  actions: {
    addDestination(destination: Destination) {
      this.destinations.push(destination);
    },
  },
});
