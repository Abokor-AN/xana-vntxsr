<script setup lang="ts">
import { ref } from "vue";

const chartOptions = ref({
  chart: {
    height: 350,
    type: "radar",
  },
  title: {
    text: "Basic Radar Chart",
  },
  yaxis: {
    stepSize: 20,
  },
  xaxis: {
    categories: ["January", "February", "March", "April", "May", "June"],
  },
});

const series = ref([
  {
    name: "Series 1",
    data: [80, 50, 30, 40, 100, 20],
  },
]);
</script>

<template>
  <h1 class="text-3xl font-bold underline">ABOUT PAGE !!!</h1>
  <br />
  <br />
  <div id="chart">
    <apexchart
      type="radar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
