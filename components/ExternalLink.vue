<template>
  <li>
    <a :href="url" target="_blank" rel="noopener noreferrer" v-if="label && url">
      <div
        class="flex items-center space-x-2 p-1 -m-1 rounded-xl hover:bg-[#FFA7A6] hover:scale-[1.02] bg-[#FFD8D7]/30 backdrop-blur-sm shadow-sm transition-all duration-300 ease-in-out"
      >
        <div
          class="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-lg text-slate-500"
        >
          <icon v-if="icon" :name="icon" class="h-5 w-5" />
          <icon v-else name="ph:link-simple" class="h-5 w-5" />
        </div>
        <div class="w-full flex-grow min-w-0">
          <p class="font-medium text-sm leading-6 text-gray-900">
            {{ label }}
          </p>
        </div>
      </div>
    </a>
  </li>
</template>
<script setup>
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    default: "ph:link-simple",
  },
});
</script>
