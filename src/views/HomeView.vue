<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>

<template>
  <h1 class="text-3xl font-bold underline">HOME PAGE !!!</h1>
  <h2>{{ t("message.hello") }}</h2>
</template>
