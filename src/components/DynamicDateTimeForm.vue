<script setup lang="ts">
import type { DateTimeFormInput } from '@/types/FormInput'
import { initFlowbite } from 'flowbite'
import { onMounted, ref } from 'vue'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'vue-icons-plus/io'
import PollOptions from './PollOptions.vue'

const { defaultInputs } = defineProps<{
  defaultInputs?: DateTimeFormInput[]
}>()

const choices = ref(defaultInputs ? [...defaultInputs] : [])

const addChoice = () => {
  choices.value.push({ date: '', time: '' })
}

const removeChoice = (index: number) => {
  choices.value.splice(index, 1)
}

onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <form
    class="bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
  >
    <div class="mb-4">
      <label class="block text-sm font-bold mb-2" for="title"> Title </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        placeholder="When will you wear wigs?"
      />
    </div>

    <div class="max-h-[33vh] overflow-y-auto">
      <div v-for="(_, idx) in choices" :key="idx" class="flex gap-2.5 w-[90%] m-auto mb-4">
        <div class="flex flex-col flex-1/3">
          <label class="block text-sm font-bold mb-2" :for="`dateOption${idx}`">
            Date {{ idx + 1 }}
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                />
              </svg>
            </div>
            <input
              datepicker
              :id="`dateOption${idx}`"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Select date"
            />
          </div>
        </div>

        <div class="flex flex-col flex-1">
          <label class="block text-sm font-bold mb-2" :for="`timeOption${idx}`">
            Time {{ idx + 1 }}
          </label>
          <div class="relative">
            <div
              class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <input
              type="time"
              :id="`timeOption${idx}`"
              class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value="00:00"
              required
            />
          </div>
        </div>

        <button
          v-if="choices.length > 2"
          @click="removeChoice(idx)"
          class="cursor-pointer text-red-500 hover:text-red-700 text-sm mt-6"
          type="button"
          data-testid="remove-button"
        >
          <IoRemoveCircleOutline />
        </button>
      </div>
    </div>

    <div class="mb-8 mt-6 m-auto w-[90%]">
      <button
        @click="addChoice"
        class="cursor-pointer border-2 border-dashed border-blue-500 hover:border-blue-700 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
        data-testid="add-button"
      >
        <div class="flex justify-center gap-1"><IoAddCircleOutline /> Add option</div>
      </button>
    </div>

    <PollOptions />

    <div class="flex items-center justify-end">
      <button
        class="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Create Poll
      </button>
    </div>
  </form>
</template>
