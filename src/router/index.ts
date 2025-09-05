import { createWebHistory, createRouter, type RouteRecordRaw } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BinaryPollView from '@/views/BinaryPollView.vue'
import SingleChoicePollView from '@/views/SingleChoicePollView.vue'
import AppointmentPollView from '@/views/AppointmentPollView.vue'
import MultiChoicePollView from '@/views/MultiChoicePollView.vue'

declare module 'vue-router' {
  interface RouteMeta {
    title: string
    subtitle: string
  }
}

export const ROUTES = {
  home: '/',
  binaryPoll: '/binary',
  singleChoicePoll: '/single',
  multiChoicePoll: '/multi',
  appointmentPoll: '/appointment',
} as const

const routes: RouteRecordRaw[] = [
  {
    path: ROUTES.home,
    component: HomeView,
    meta: { title: 'Create your own poll!', subtitle: 'Choose your option' },
  },
  {
    path: ROUTES.binaryPoll,
    component: BinaryPollView,
    meta: {
      title: 'Binary poll',
      subtitle:
        'Binary polls are a great option if you want to ask for an opinion between two topics, compare preferences, or get a clear yes/no answer without confusion',
    },
  },
  {
    path: ROUTES.singleChoicePoll,
    component: SingleChoicePollView,
    meta: {
      title: 'Single Choice poll',
      subtitle:
        'Single-choice polls are ideal when you want participants to select one option from multiple possibilities, helping you identify the most popular choice or preference',
    },
  },
  {
    path: ROUTES.multiChoicePoll,
    component: MultiChoicePollView,
    meta: {
      title: 'Multi Choice poll',
      subtitle:
        'Multi-choice polls are a great option when you want participants to select several answers at once, making them perfect for capturing a wider range of opinions or preferences',
    },
  },
  {
    path: ROUTES.appointmentPoll,
    component: AppointmentPollView,
    meta: {
      title: 'Appointment poll',
      subtitle:
        'Appointment polls are a great option when you need to find the best time that works for everyone by letting participants vote on their availability',
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
