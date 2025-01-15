<template>
  <div id="app">
    <h1>Planer Putovanja</h1> <!-- Moved above the navigation -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  margin-top: 10px; /* Reduced top margin */
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
