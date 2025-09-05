<script setup lang="ts">
import type { FormInputWithoutLabel } from '@/types/FormInput'
import { ref } from 'vue'
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'vue-icons-plus/io'

const { defaultInputs } = defineProps<{
  defaultInputs?: FormInputWithoutLabel[]
}>()

const placeholders = [
  'Pizza 🍕',
  'Sushi 🍣',
  'Burgers 🍔',
  'Salad 🥗',
  'Ice Cream 🍦',
  'Chocolate 🍫',
]

const getRandomPlaceholder = () => {
  const randomIndex = Math.floor(Math.random() * placeholders.length)
  return placeholders[randomIndex]
}

const choices = ref(
  [
    defaultInputs?.map((input) => ({
      ...input,
      placeholder: input.placeholder ?? getRandomPlaceholder(),
    })) ?? [],
  ].flat(),
)

const addChoice = () => {
  choices.value.push({ value: '', placeholder: getRandomPlaceholder(), type: 'text' })
}

const removeChoice = (index: number) => {
  choices.value.splice(index, 1)
}
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
        placeholder="What’s the superior snack?"
      />
    </div>

    <div class="w-fullflex items-center flex-col">
      <div v-for="(input, idx) in choices" :key="idx" class="mb-4 m-auto w-[90%]">
        <label class="block text-sm font-bold mb-2" :for="`option${idx}`">
          Option {{ idx + 1 }}
        </label>
        <div class="flex gap-1.5">
          <input
            v-model="input.value"
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            :id="`option${idx}`"
            :type="input.type"
            :placeholder="input.placeholder"
          />
          <button
            v-if="choices.length > 2"
            @click="removeChoice(idx)"
            class="cursor-pointer text-red-500 hover:text-red-700 mt-1 text-sm"
            type="button"
            data-testid="remove-button"
          >
            <IoRemoveCircleOutline />
          </button>
        </div>
      </div>

      <div class="mb-8 m-auto w-[90%]">
        <button
          @click="addChoice"
          class="cursor-pointer border-2 border-dashed border-blue-500 hover:border-blue-700 hover:bg-blue-700 w-full text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          <div class="flex justify-center gap-1"><IoAddCircleOutline /> Add option</div>
        </button>
      </div>
    </div>

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
