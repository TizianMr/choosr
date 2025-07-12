<script setup lang="ts">
import OptionsCard from '../components/OptionsCard.vue'
</script>

<template>
  <h1>Create your own poll!</h1>
  <h2>Choose your option</h2>

  <div class="flex flex-col justify-center items-center gap-4 pt-8">
    <OptionsCard title="Test" description="Lorem ipsum" />
    <!-- <OptionsCard />
    <OptionsCard />
    <OptionsCard /> -->
  </div>
</template>

<style scoped>
h1,
h2 {
  text-align: center;
}

h1 {
  font-weight: 800;
  font-size: 3rem;
  padding-top: 5rem;
}

h2 {
  font-weight: 800;
  font-size: 1.5rem;
}
</style>
