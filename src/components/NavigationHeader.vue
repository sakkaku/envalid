<script setup lang="ts">
import { useTitleStore } from "@/stores/useTitleStore";

const titleStore = useTitleStore();
</script>

<template>
  <header>
    <h1>{{ titleStore.title }}</h1>
    <nav id="header-links"></nav>
  </header>
</template>

<style>
#header-links > * {
  margin-left: 1rem;
}
</style>

<style scoped>
header {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}

header > h1 {
  flex-grow: 1;
  font-size: 1.25rem;
}

#header-links {
  text-align: right;
  height: 1.25rem;
}
</style>
