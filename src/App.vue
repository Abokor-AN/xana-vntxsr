<template>
  <h1>💖 Hello World!</h1>
  <p>Welcome to your Electron application.</p>
  <br />
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/calendar">Go to Calendar</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
console.log('👋 This message is being logged by "App.vue", included via Vite');
</script>
