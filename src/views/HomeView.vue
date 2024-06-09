<script setup lang="ts">
import { ref, onMounted } from "vue";

const nodeVersion = ref("");
const chromeVersion = ref("");
const electronVersion = ref("");

const nodeActionResult = ref<string>("");

onMounted(() => {
  if (
    window.versions &&
    typeof window.versions.node === "function" &&
    typeof window.versions.chrome === "function" &&
    typeof window.versions.electron === "function"
  ) {
    nodeVersion.value = window.versions.node();
    chromeVersion.value = window.versions.chrome();
    electronVersion.value = window.versions.electron();
  }
});
</script>
<template>
  <p>Node version : {{ nodeVersion }}</p>
  <p>Chrome version : {{ chromeVersion }}</p>
  <p>Electron version : {{ electronVersion }}</p>
</template>
