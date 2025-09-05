<script setup lang="ts">
import DynamicDateTimeForm from '@/components/DynamicDateTimeForm.vue'
import type { DateTimeFormInput } from '@/types/FormInput'
import { ref, type Ref } from 'vue'

const dateTimeInputs: Ref<DateTimeFormInput[]> = ref([
  { date: '', time: '' },
  { date: '', time: '' },
])
</script>

<template>
  <div class="m-auto w-[60vw] pt-8">
    <DynamicDateTimeForm :default-inputs="dateTimeInputs" />
  </div>
</template>
