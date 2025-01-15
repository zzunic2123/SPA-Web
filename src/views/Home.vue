<template>
  <div>
    <DestinationForm />

    <h2>Moje destinacije:</h2>
    <div v-if="loading">Učitavanje podataka...</div>
    <div v-else-if="store.destinations.length === 0">Nema unesenih destinacija.</div>

    <div v-for="destination in store.destinations" :key="destination.id">
      <DestinationItem :destination="destination" @delete="deleteDestination" />
    </div>

    <h3 v-if="store.destinations.length > 0">
      Ukupni budžet: {{ totalBudget }} €
    </h3>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useTravelStore } from '../stores/travelStore';
import DestinationForm from '../components/DestinationForm.vue';
import DestinationItem from '../components/DestinationItem.vue';

const store = useTravelStore();
const loading = ref(true);

function deleteDestination(id) {
  store.deleteDestination(id);
}

onMounted(() => {
  store.loadDestinations();
  loading.value = false;
});

const totalBudget = computed(() =>
  store.destinations.reduce((sum, destination) => sum + destination.budget, 0)
);
</script>

<style scoped>
h3 {
  margin-top: 20px;
  color: #42b983;
  text-align: center;
}
</style>
