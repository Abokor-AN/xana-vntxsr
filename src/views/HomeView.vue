<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { t } = useI18n();

import { useEditor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";

const editor = useEditor({
  content: "<p>I’m running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
});
</script>

<template>
  <h1 class="text-3xl font-bold underline">HOME PAGE !!!</h1>
  <h2>{{ t("message.hello") }}</h2>
  <br />
  <br />
  <editor-content :editor="editor" />
</template>
