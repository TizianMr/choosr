<script setup lang="ts">
import DynamicForm from '@/components/DynamicPollForm.vue'
import type { FormInputWithoutLabel } from '@/types/FormInput'
import { ref, type Ref } from 'vue'

const multiChoicePollInputs: Ref<FormInputWithoutLabel[]> = ref([
  { type: 'text' },
  { type: 'text' },
])
</script>

<template>
  <DynamicForm :default-inputs="multiChoicePollInputs" />
</template>
