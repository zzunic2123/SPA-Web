import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import DestinationDetails from '../views/DestinationDetails.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/destination/:id', name: 'DestinationDetails', component: DestinationDetails, props: true },
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
