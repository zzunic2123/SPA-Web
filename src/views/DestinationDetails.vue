<template>
  <div v-if="destination">
    <h2>{{ destination.name }}</h2>
    <p>Datum: {{ destination.date }}</p>
    <p>Budžet: {{ destination.budget }} €</p>
    <p>Bilješke: {{ destination.notes }}</p>
  </div>
  <div v-else>
    <p>Destinacija nije pronađena.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { useTravelStore } from '../stores/travelStore';

const route = useRoute();
const store = useTravelStore();

const destination = store.destinations.find(d => d.id === Number(route.params.id));
</script>
