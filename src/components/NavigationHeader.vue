<script setup lang="ts">
import { useTitleStore } from "@/stores/useTitleStore";

const titleStore = useTitleStore();
</script>

<template>
  <header>
    <h1>{{ titleStore.title }}</h1>
    <div id="header-controls"></div>
    <nav id="header-links"></nav>
  </header>
</template>

<style>
header {
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
}

header > h1 {
  flex-grow: 1;
}

#header-links {
  text-align: right;
  height: 1.25rem;
}

#header-links > *, #header-controls > *  {
  margin-left: 1rem;
}

header h1 {
  font-size: 1.25rem;
}
</style>
