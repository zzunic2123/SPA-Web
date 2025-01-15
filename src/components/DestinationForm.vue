<template>
  <form @submit.prevent="addDestination" class="form">
    <input v-model="name" placeholder="Destinacija" required />
    <input type="date" v-model="date" required />
    <input type="number" v-model="budget" placeholder="Budžet (€)" required />
    <textarea v-model="notes" placeholder="Bilješke"></textarea>
    <button type="submit">Dodaj</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useTravelStore } from '../stores/travelStore';

const store = useTravelStore();
const name = ref('');
const date = ref('');
const budget = ref(0);
const notes = ref('');

function addDestination() {
  store.addDestination({
    id: Date.now(),
    name: name.value,
    date: date.value,
    budget: budget.value,
    notes: notes.value,
  });

  name.value = '';
  date.value = '';
  budget.value = 0;
  notes.value = '';
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 300px;
  margin: 0 auto;
}

input, textarea {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  padding: 8px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #368a6e;
}
</style>
