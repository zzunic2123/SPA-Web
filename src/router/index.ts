import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue') 
  },
  {
    path: '/destination/:id',
    name: 'DestinationDetails',
    component: () => import('../views/DestinationDetails.vue') 
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue') 
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
