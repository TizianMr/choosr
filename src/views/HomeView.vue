<script setup lang="ts">
import { ROUTES } from '@/router'
import OptionsCard from '../components/OptionsCard.vue'
import { RouterLink } from 'vue-router'
import { ref, type Ref } from 'vue'

type PollOption = {
  title: string
  description: string
  route: (typeof ROUTES)[keyof typeof ROUTES]
}

const pollOptions: Ref<PollOption[]> = ref([
  {
    title: 'Binary Polls',
    description: 'Create simple polls with binary choices like Yes or No.',
    route: ROUTES.binaryPoll,
  },
  {
    title: 'Single Choice Polls',
    description: 'Create polls where users can select only one option from a list.',
    route: ROUTES.singleChoicePoll,
  },
  {
    title: 'Multiple Choice Polls',
    description: 'Create polls where users can select multiple options from a list.',
    route: ROUTES.multiChoicePoll,
  },
  {
    title: 'Appointment Polls',
    description: 'Create polls to find suitable times for meetings or events.',
    route: ROUTES.appointmentPoll,
  },
])
</script>

<template>
  <div class="flex flex-col justify-center items-center gap-4 pt-8">
    <RouterLink v-for="option in pollOptions" :key="option.title" :to="option.route">
      <OptionsCard :title="option.title" :description="option.description" />
    </RouterLink>
  </div>
</template>
