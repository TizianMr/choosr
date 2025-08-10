import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BinaryPollView from '@/views/BinaryPollView.vue'
import SingleChoicePollView from '@/views/SingleChoicePollView.vue'
import AppointmentPollView from '@/views/AppointmentPollView.vue'
import MultiChoicePollView from '@/views/MultiChoicePollView.vue'

export const ROUTES = {
  home: '/',
  binaryPoll: '/binary',
  singleChoicePoll: '/single',
  multiChoicePoll: '/multi',
  appointmentPoll: '/appointment',
} as const

const routes = [
  { path: ROUTES.home, component: HomeView },
  { path: ROUTES.binaryPoll, component: BinaryPollView },
  { path: ROUTES.singleChoicePoll, component: SingleChoicePollView },
  { path: ROUTES.multiChoicePoll, component: MultiChoicePollView },
  { path: ROUTES.appointmentPoll, component: AppointmentPollView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
