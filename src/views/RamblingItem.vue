<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import router from "@/router";
import { useWaitingStore } from "@/stores/useWaitingStore";
import type { GistDetailFile, GistDetails } from "@/api/GistDetails";
import { getGistDetails } from "@/api/getGistDetails";
import { ApiConstants } from "@/api/ApiConstants";
import { useRoute } from "vue-router";
import { formatDate } from "@/helpers/formatDate";
import { marked } from 'marked';
import { useTitleStore } from "@/stores/useTitleStore";

const waitingStore = useWaitingStore();
const route = useRoute();

const gist = ref<GistDetails | undefined>(undefined);
const commentCount = computed(() => gist.value?.comments);

async function loadGist() {
  const id = route.params.id as string;
  const retrieved = id ? await getGistDetails(id) : undefined;
  if(retrieved == undefined || retrieved.owner.login != ApiConstants.GithubUser) {
    router.push({ name: '404' });
    return;
  }
  gist.value = retrieved;
  useTitleStore().set(retrieved?.description)
}

function isMarkdown(file: GistDetailFile) {
  return file.type === "text/markdown";
}

onMounted(async () => {
  await waitingStore.waitUntil(loadGist());
})
</script>

<template>
  <teleport to="#header-links"><router-link :to="{ name: 'home' }">Home</router-link></teleport>
  <teleport to="#footer-links"><a :href="gist?.html_url + '#comments'">{{ commentCount }} Comments</a></teleport>

  <div class="ramble-info">
    <span>Created On: {{ formatDate(gist?.created_at) }}</span>
    <span>Updated On: {{ formatDate(gist?.updated_at) }}</span>
  </div>

  <template v-for="file in gist?.files" :key="file.filename">
    <div class="ramble-file">
      <div v-if="isMarkdown(file)" v-html="marked.parse(file.content)" />
      <pre v-else>{{ file.content }}</pre>
    </div>
  </template>
</template>

<style>
p {
  margin-bottom: 1rem;
}

ul > li {
  list-style: square outside;
}

ol > li {
  list-style: decimal-leading-zero outside;
}

li > ul, li > ol {
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

.ramble-file {
  margin-top: 1rem;
  font-size: 0.9rem;
}
</style>