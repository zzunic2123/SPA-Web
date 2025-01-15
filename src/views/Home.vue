<template>
  <div>
    <DestinationForm />
    
    <h2>Moje destinacije:</h2>
    <div v-if="store.destinations.length === 0">Nema unesenih destinacija.</div>
    
    <div v-for="destination in store.destinations" :key="destination.id">
      <DestinationItem :destination="destination" />
    </div>
  </div>
</template>

<script setup>
import { useTravelStore } from '../stores/travelStore';
import DestinationForm from '../components/DestinationForm.vue';
import DestinationItem from '../components/DestinationItem.vue';

const store = useTravelStore();
</script>
