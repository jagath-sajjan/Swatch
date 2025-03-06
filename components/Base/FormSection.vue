<template>
  <div class="mb-8 transform transition-all duration-300 hover:scale-[1.01]">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0 sticky top-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900 transition-colors duration-300">{{ title }}</h3>
          <p class="mt-1 text-sm text-gray-600 transition-colors duration-300">{{ description }}</p>
          <slot name="helpertext" />
        </div>
      </div>
      <div class="mt-5 md:col-span-2 md:mt-0">
        <div class="bg-white/70 backdrop-blur-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl p-1">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
});
</script>
