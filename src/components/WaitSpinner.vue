<script setup lang="ts">
import { useWaitingStore } from "@/stores/useWaitingStore";
const waitingStore = useWaitingStore();
</script>

<template>
  <Transition name="loading-fade">
    <div v-show="waitingStore.isWaiting" class="spinner-container">
      <p class="instructions">Please Wait...</p>
    </div>
  </Transition>
</template>

<style scoped>
.spinner-container {
  margin: -0.5rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  font-weight: 900;
  letter-spacing: 0.8rem;
  cursor: wait;
  background-image: repeating-linear-gradient(45deg, var(--loading-color-1), var(--loading-color-1) 1rem, var(--loading-color-2) 1rem, var(--loading-color-2) 2rem);
}

.instructions {
  padding: 1rem 2rem;
  background: black;
}

.loading-fade-enter-active {
  transition: none;
}

.loading-fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}
</style>
