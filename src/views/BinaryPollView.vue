<template>
  <div class="m-auto w-[60vw] pt-8">
    <form
      class="bg-white dark:bg-gray-800 text-gray-700 dark:text-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div class="mb-4">
        <label class="block text-sm font-bold mb-2" for="title"> Title </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="Is cereal just cold soup?"
        />
      </div>

      <div class="w-fullflex items-center flex-col">
        <div class="mb-4 m-auto w-[90%]">
          <label class="block text-sm font-bold mb-2" for="optionA"> Option A </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="optionA"
            type="text"
            placeholder="Yes"
          />
        </div>

        <div class="mb-8 m-auto w-[90%]">
          <label class="block text-sm font-bold mb-2" for="optionB"> Option B </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 bg-white dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="optionB"
            type="text"
            placeholder="No"
          />
        </div>
      </div>

      <div class="flex items-center justify-end">
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Create Poll
        </button>
      </div>
    </form>
  </div>
</template>
