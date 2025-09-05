<script setup lang="ts">
import DynamicForm from '@/components/DynamicPollForm.vue'
import type { FormInputWithoutLabel } from '@/types/FormInput'
import { ref, type Ref } from 'vue'

const singleChoicePollInputs: Ref<FormInputWithoutLabel[]> = ref([
  { type: 'text' },
  { type: 'text' },
])
</script>

<template>
  <div class="m-auto w-[60vw] pt-8">
    <DynamicForm :default-inputs="singleChoicePollInputs" />
  </div>
</template>
