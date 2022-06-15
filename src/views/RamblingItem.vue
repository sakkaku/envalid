<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { GistDetailFile } from "@/api/GistDetails";
import { formatDate } from "@/helpers/formatDate";
import { marked } from "marked";
import { useGistEntryStore } from "@/stores/useGistEntryStore";
import highlight from "highlight.js";

const gistEntryStore = useGistEntryStore();
const gist = ref(gistEntryStore.gist);
const commentCount = computed(() => gist.value?.comments);

function isMarkdown(file: GistDetailFile) {
  return file.type === "text/markdown";
}

function renderMarkdown(file: GistDetailFile) {
  return marked.parse(file.content);
}

onMounted(() => {
  highlight.highlightAll();
});
</script>

<template>
  <teleport to="#header-links"><router-link :to="{ name: 'home' }">Home</router-link></teleport>
  <teleport to="#footer-links"><a :href="gist?.html_url + '#comments'">{{ commentCount }} Comments</a></teleport>

  <div class="ramble-info">
    <div :title="gist?.created_at">Created On: {{ formatDate(gist?.created_at) }}</div>
    <div :title="gist?.updated_at">Updated On: {{ formatDate(gist?.updated_at) }}</div>
  </div>

  <template v-for="file in gist?.files" :key="file.filename">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <section v-if="isMarkdown(file)" class="ramble-item-section" v-html="renderMarkdown(file)" />
    <pre v-else class="ramble-item-code"><code>{{ file.content }}</code></pre>
  </template>
</template>

<style>
.ramble-item-section > *:not(:last-child) {
  margin-bottom: 1rem;
}

.ramble-item-section ul > li {
  list-style: square outside;
}

.ramble-item-section ol > li {
  list-style: decimal-leading-zero outside;
}

.ramble-item-section li > ul, .ramble-item-section li > ol {
  padding-left: 1.25rem;
}
</style>

<style scoped>
.ramble-info {
  margin-top: -1rem;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  font-size: 0.8rem;
}

.ramble-item-section, .ramble-item-code {
  margin-top: 1rem;
  font-size: 0.9rem;
  user-select: text;
  overflow: auto;
}
</style>
