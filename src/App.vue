<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationHeader from "@/components/NavigationHeader.vue";
import NavigationFooter from "@/components/NavigationFooter.vue";
import WaitSpinner from "@/components/WaitSpinner.vue";
</script>

<template>
  <div class="root-container">
    <NavigationHeader class="nav-header" />

    <main class="main-content">
      <RouterView />
    </main>

    <NavigationFooter class="nav-footer" />

    <WaitSpinner class="wait-spinner" />
  </div>
</template>

<style scoped>
.root-container {
  position: relative;
  display: flex;
  flex-flow: column nowrap;

  margin: 0 auto;
  width: 40rem;

  background: var(--main-background-color);
  border: 1px var(--accent-color) solid;
}

.nav-header {
  padding: 1rem;
  border-bottom: 1px #00aaff solid;
}

.main-content {
  flex-grow: 1;
  padding: 1rem;
}

.wait-spinner {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
