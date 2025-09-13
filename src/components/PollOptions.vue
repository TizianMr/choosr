<script setup lang="ts">
import { initFlowbite } from 'flowbite'
import { onMounted, ref } from 'vue'

const isOpen = ref(false)
const isPasswordProtected = ref(false)
const hasExpirationDate = ref(false)

onMounted(() => {
  initFlowbite()
})
</script>

<!-- Future option: Voters can see the results - always / after the deadline / after casting their vote -->

<template>
  <h2 id="accordion-heading">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="cursor-pointer flex items-center w-full py-5 font-medium rtl:text-right text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
      :aria-expanded="isOpen"
      aria-controls="accordion-body"
    >
      <svg
        class="w-6 h-6 transition-transform duration-300 shrink-0"
        :class="isOpen ? 'rotate-360' : 'rotate-270'"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>

      <span>Options</span>
    </button>
  </h2>

  <div
    id="accordion-body"
    class="mb-6"
    :class="isOpen ? 'visible' : 'hidden'"
    aria-labelledby="accordion-heading"
  >
    <div class="px-5 flex flex-col">
      <label class="inline-flex items-center mb-5 cursor-pointer">
        <input type="checkbox" v-model="isPasswordProtected" value="" class="sr-only peer" />
        <div
          class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
        ></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Password protect poll</span
        >
      </label>

      <div :class="isPasswordProtected ? 'visible' : 'hidden'" class="relative mx-14">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M10 2a4 4 0 00-4 4v3H5a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2h-1V6a4 4 0 00-4-4zM8 9V6a2 2 0 114 0v3H8zM10 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <label for="password" class="sr-only">Password</label>
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>

      <label class="inline-flex items-center my-5 cursor-pointer">
        <input type="checkbox" v-model="hasExpirationDate" class="sr-only peer" />
        <div
          class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"
        ></div>
        <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Set expiration date</span
        >
      </label>

      <div :class="hasExpirationDate ? 'visible' : 'hidden'" class="flex mx-14 gap-4">
        <div class="relative w-full flex-1/3">
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
          <label for="date" class="sr-only">Date</label>
          <input
            datepicker
            id="date"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date"
          />
        </div>

        <div class="relative w-full flex-1">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
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
          <label for="time" class="sr-only">Time</label>
          <input
            type="time"
            id="time"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value="00:00"
            required
          />
        </div>
      </div>
    </div>
  </div>
</template>
