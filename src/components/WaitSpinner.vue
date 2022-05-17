<script setup lang="ts">
import { useWaitingStore } from "@/stores/waitingStore";
const waitingStore = useWaitingStore();
</script>

<template>
  <div v-show="waitingStore.isWaiting" class="spinner-container"></div>
</template>

<style scoped>
.spinner-container {
  cursor: wait;
}
</style>
