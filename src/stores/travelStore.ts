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
    dataLoaded: false,  
  }),

  actions: {
    addDestination(destination: Destination) {
      this.destinations.push(destination);
      localStorage.setItem('destinations', JSON.stringify(this.destinations));
    },

    deleteDestination(id: number) {
      this.destinations = this.destinations.filter(dest => dest.id !== id);
      localStorage.setItem('destinations', JSON.stringify(this.destinations));
    },

    loadDestinations() {
      if (this.dataLoaded) return; 

      const savedDestinations = JSON.parse(localStorage.getItem('destinations') || '[]');

      if (savedDestinations.length > 0) {
        this.destinations = savedDestinations;
      } else {
        setTimeout(() => {
          this.destinations = [
            { id: 1, name: 'Pariz', date: '2024-05-10', budget: 500, notes: 'Eiffelov toranj' },
            { id: 2, name: 'Rim', date: '2024-06-15', budget: 400, notes: 'Koloseum' }
          ];
          localStorage.setItem('destinations', JSON.stringify(this.destinations));
        }, 2000);
      }

      this.dataLoaded = true;
    }
  }
});
