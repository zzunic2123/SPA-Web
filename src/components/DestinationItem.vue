<template>
  <div @click="goToDetails" class="destination-item">
    <h3>{{ destination.name }}</h3>
    <p>Datum: {{ destination.date }}</p>
    <p>Budžet: {{ destination.budget }} €</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  destination: Object
});

const router = useRouter();

function goToDetails() {
  router.push(`/destination/${props.destination.id}`);
}
</script>

<style scoped>
.destination-item {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.destination-item:hover {
  background-color: #f0f0f0;
}
</style>
