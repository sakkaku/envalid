<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import AbstractDialog from './AbstractDialog.vue';

const props = defineProps({
  modelValue: String
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void,
  (e: 'finished'): void
}>();

const searchTerms = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value as string)
});

const modalValue = ref(props.modelValue);
const focus = ref<HTMLInputElement | null>(null);

function finalizeSearch(): void {
  searchTerms.value = modalValue.value;
  emit('finished');
}

function cancelSearch(): void {
  searchTerms.value = '';
  emit('finished');
}

onMounted(() => {
  focus.value?.focus();
})
</script>

<template>
  <abstract-dialog>
    <template #header>Search</template>
    <template #body>
      <form @submit.prevent="finalizeSearch" @reset.prevent="cancelSearch">
        <div class="form-row">
          <label for="search-terms">Filter</label>
          <input ref="focus" id="search-terms" type="text" v-model.trim="modalValue" />
        </div>
        <div class="form-buttons">
          <button type="reset">Cancel</button>
          <button type="submit">Search</button>
        </div>
      </form>
    </template>
  </abstract-dialog>
</template>

<style scoped>

</style>