<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationHeader from "@/components/NavigationHeader.vue";
import NavigationFooter from "@/components/NavigationFooter.vue";
import WaitSpinner from "@/components/WaitSpinner.vue";
import { useWaitingStore } from "@/stores/useWaitingStore";
const waitingStore = useWaitingStore();
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

  width: 100%;
  min-height: 15rem;
}

@media screen {
  .root-container {
    background: var(--main-background-color);
    box-shadow: 0rem 0rem 0.25rem 0 var(--accent-color);
  }
}

@media screen and (min-width: 40rem) {
  .root-container {
    width: 40rem;
    margin: 0 auto;
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
