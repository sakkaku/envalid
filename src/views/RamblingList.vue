<script setup lang="ts">
import { useGistStore } from "@/stores/useGistStore";
import { computed, onMounted } from "vue";

const gistStore = useGistStore();

onMounted(async () => {
  await gistStore.load();
});

const gists = computed(() => gistStore.gists);
</script>

<template>
  <teleport to="h1">Ramblings</teleport>

  <div class="rambling-list">
    <template v-for="item in gists" :key="item.id">
      <div class="ramble">
        {{item.description}}
      </div>
    </template>
  </div>
</template>

<style scoped>
</style>