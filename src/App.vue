<template>
  <div id="app">
    <h1>Planer Putovanja</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    
    <keep-alive include="Home">
      <router-view v-slot="{ Component, route }">
        <component :is="Component" :key="route.fullPath" />
      </router-view>
    </keep-alive>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 10px;
  font-size: 32px;
  color: #42b983;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
