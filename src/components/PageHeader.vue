<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const title = computed(() => route.meta.title || 'Default Title')
const subtitle = computed(() => route.meta.subtitle || 'Default Subtitle')
</script>

<template>
  <div class="text-center">
    <h1 class="font-extrabold text-5xl pt-20">{{ title }}</h1>
    <h2 class="font-bold text-xl mt-4">{{ subtitle }}</h2>
  </div>
</template>
