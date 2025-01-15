<template>
  <div @click="goToDetails" class="destination-item">
    <h3>{{ destination.name }}</h3>
    <p>Datum: {{ destination.date }}</p>
    <p>Budžet: {{ destination.budget }} €</p>
    <button @click.stop="emitDelete">Obriši</button> 
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
  destination: Object
});

const emit = defineEmits(['delete']); 

const router = useRouter();

function goToDetails() {
  router.push(`/destination/${props.destination.id}`);
}

function emitDelete() {
  emit('delete', props.destination.id);
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

button {
  margin-top: 10px;
  padding: 5px 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #c0392b;
}
</style>
