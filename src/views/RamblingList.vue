<script setup lang="ts">
import { useGistStore } from "@/stores/useGistStore";
import { onMounted } from "vue";
import { formatDate } from "../helpers/formatDate";

const gistStore = useGistStore();

onMounted(async () => {
  await gistStore.load();
});
</script>

<template>
  <teleport to="h1">Ramblings</teleport>

  <div class="rambling-list">
    <template v-for="item in gistStore.gists" :key="item.id">
      <div class="ramble">
        <h3><router-link :to="{ name: 'rambling', params: { id: item.id } }">{{item.description}}</router-link></h3>
        <div class="other-info">
          <span>{{ formatDate(item.created_at) }}</span>
          <span>{{ item.comments }} Comments</span>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

.rambling-list {
  display: flex;
  flex-flow: column nowrap;
}

.ramble {
  margin-bottom: 2rem;
}

h3 {
  width: 100%;
  margin-bottom: 0.3rem;
}

.other-info {
  padding-top: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-size: 0.8rem;
  border-top: 1px var(--accent-color) solid;
}

</style>