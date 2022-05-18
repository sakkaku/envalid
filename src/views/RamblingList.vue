<script setup lang="ts">
import { useGistStore } from "@/stores/useGistStore";
import { computed, onMounted, ref } from "vue";
import { formatDate } from "../helpers/formatDate";

const gistStore = useGistStore();
const searchTerms = ref('');
const matches = computed(() => {
  if (searchTerms.value) {
    const filter = searchTerms.value.toLowerCase().split(' ');
    return gistStore.gists.filter(x => {
        const normalizedDescription = x.description.toLowerCase();
        return filter.every(f => normalizedDescription.includes(f) || x.created_at.includes(f))
      }
    );
  }

  return gistStore.gists;
});

onMounted(async () => {
  await gistStore.load();
});
</script>

<template>
  <teleport to="h1">Ramblings</teleport>
  <teleport to="#header-controls"><input type="text" placeholder="search..." v-model.trim="searchTerms" /></teleport>
  <teleport to="#header-links"><router-link :to="{ name: 'home' }">Home</router-link></teleport>

  <div class="rambling-list">
    <template v-for="item in matches" :key="item.id">
      <router-link :to="{ name: 'rambling', params: { id: item.id } }" class="ramble">
          <h3>{{item.description}}</h3>
          <div class="other-info">
            <span>{{ formatDate(item.created_at) }}</span>
            <span>{{ item.comments }} Comments</span>
          </div>
      </router-link>
    </template>
  </div>
</template>

<style scoped>

.rambling-list {
  display: flex;
  flex-flow: column nowrap;
}

.ramble {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px var(--main-text-color) solid;
  border-radius: 0.1rem;
}

.ramble:hover {
  border-color: transparent;
}

h3 {
  width: 100%;
  margin-bottom: 0.3rem;
}

.other-info {
  padding-top: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-size: 0.8rem;
}

</style>