<script setup lang="ts">
import StaticPollForm from '@/components/StaticPollForm.vue'
import type { FormInput } from '@/types/FormInput'
import { ref, type Ref } from 'vue'

const binaryPollInputs: Ref<FormInput[]> = ref([
  { label: 'Option A', type: 'text', placeholder: 'Yes' },
  { label: 'Option B', type: 'text', placeholder: 'No' },
])
</script>

<template>
  <div class="m-auto w-[60vw] pt-8">
    <StaticPollForm :inputs="binaryPollInputs" />
  </div>
</template>
