<script setup lang="ts">
import AppBar from './components/AppBar.vue'
import PageHeader from './components/PageHeader.vue'
</script>

<template>
  <header>
    <AppBar />
  </header>

  <main>
    <PageHeader />
    <RouterView />
  </main>
</template>
