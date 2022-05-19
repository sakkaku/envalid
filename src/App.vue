<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationHeader from "@/components/NavigationHeader.vue";
import NavigationFooter from "@/components/NavigationFooter.vue";
import WaitSpinner from "@/components/WaitSpinner.vue";
import { useWaitingStore } from "@/stores/useWaitingStore";
import { onMounted, onUnmounted, ref } from "vue";

const waitingStore = useWaitingStore();

function convertRemToPixels(rem: number): number {
  return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

function windowResized() {
  document.body.classList.remove('small-screen');

  if (document.documentElement.clientWidth < convertRemToPixels(45)) {
    document.body.classList.add('small-screen');
  }
}

onMounted(() => {
  windowResized();
  window.addEventListener('resize', windowResized);
});

onUnmounted(() => {
  window.removeEventListener('resize', windowResized);
});
</script>

<template>
  <div class="root-container" :aria-busy="waitingStore.isWaiting">
    <navigation-header class="nav-header" />

    <main class="main-content">
      <router-view />
    </main>

    <navigation-footer class="nav-footer" />

    <wait-spinner class="wait-spinner" />
  </div>
</template>

<style scoped>
.root-container {
  position: relative;
  display: flex;
  flex-flow: column nowrap;

  width: 45rem;
  margin: 0 auto;

  min-width: 15rem;
  min-height: 15rem;
}

.small-screen .root-container {
  width: 100%;
  margin: unset;
}

@media screen {
  .root-container {
    background: var(--main-background-color);
    box-shadow: var(--box-shadow-primary);
  }
}

.nav-header {
  padding: 1rem;
}

@media screen {
  .nav-header {
    border-bottom: 1px var(--accent-color) solid;
  }
}

.main-content {
  flex-grow: 1;
  padding: 2rem;
}

.wait-spinner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
