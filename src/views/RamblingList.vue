<script setup lang="ts">
import { useGistListStore } from "@/stores/useGistListStore";
import { computed, ref } from "vue";
import { formatDate } from "../helpers/formatDate";
import SearchTermDialog from "@/components/SearchTermDialog.vue";

const gistStore = useGistListStore();
const searchTerms = ref('');
const showSearch = ref(false);

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
const isEmpty = computed(() => matches.value.length <= 0);

function openSearch(): void {
  showSearch.value = true;
}

function closeSearch(): void {
  showSearch.value = false;
}
</script>

<template>
  <teleport to="#header-links"><router-link :to="{ name: 'home' }">Home</router-link></teleport>
  <teleport to="#header-links"><a @click="openSearch">Search</a></teleport>

  <div v-if="isEmpty" class="empty">
    <template v-if="searchTerms">Nothing was found for the search filter '{{ searchTerms }}'.</template>
    <template v-else>Nothing to display (yet).</template>
  </div>
  <div v-else class="rambling-list">
    <template v-for="item in matches" :key="item.id">
      <router-link :to="{ name: 'rambling', params: { id: item.id } }" :title="item.description" class="ramble">
          <h3>{{item.description}}</h3>
          <div class="other-info">
            <span>{{ formatDate(item.created_at) }}</span>
            <span>{{ item.comments }} Comments</span>
          </div>
      </router-link>
    </template>
  </div>

  <SearchTermDialog v-if="showSearch" v-model="searchTerms" @finished="closeSearch" />
</template>

<style scoped>
.rambling-list {
  display: flex;
  flex-flow: column nowrap;
}

.ramble {
  padding: 1rem;
  border: 1px var(--main-text-color) solid;
  box-shadow: var(--box-shadow-secondary);
}

.ramble:not(:last-child) {
  margin-bottom: 2rem;
}

.ramble:hover {
  border-color: transparent;
}

h3 {
  width: 100%;
  margin-bottom: 0.3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.other-info {
  padding-top: 0.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  font-size: 0.8rem;
}
</style>
