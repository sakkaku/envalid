<script setup lang="ts">
import { computed } from "vue";
import router from "@/router";

const isNotHome = computed(() => router.currentRoute.value.name != "home");
</script>

<template>
  <footer>
    <nav id="footer-links">
      <RouterLink v-if="isNotHome" :to="{ name: 'home' }">Back</RouterLink>
    </nav>
  </footer>
</template>

<style>
#footer-links > *:only-child {
  flex-grow: 1;
  text-align: center;
}
</style>

<style scoped>
#footer-links {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 1rem;
}

#footer-links:empty {
  padding: 0;
}
</style>
