<script lang="ts" setup>
import { useRepositoryStore } from "@/stores/useRepositoryStore";

const repositoryStore = useRepositoryStore();

function humanize(input: string) {
  return input.substring(0, 1).toUpperCase() + input.substring(1);
}
</script>

<template>
  <teleport to="#header-links">
    <router-link :to="{ name: 'home' }">Home</router-link>
  </teleport>

  <div class="project-list">
    <template v-for="item in repositoryStore.repositories" :key="item.id">
      <div class="project">
        <div class="name">
          <a :href="item.html_url" :title="item.name">{{ humanize(item.name) }}</a>
        </div>
        <div class="more-info">
          <div class="description">
            {{ item.description }}
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>

.project-list {
  display: flex;
  flex-flow: column nowrap;
}

.project:not(:last-child) {
  margin-bottom: 2rem;
}

.project {
  display: flex;
  flex-flow: row nowrap;
}

.name {
  width: 10rem;
}

.more-info {
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
}

.description {
  font-size: 0.9rem;
}

</style>
