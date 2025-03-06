<template>
  <base-form-section
    title="Profile"
    description="Some public information about you"
  >
    <div class="overflow-hidden rounded-xl transition-all duration-300 hover:shadow-lg">
      <div class="space-y-6 bg-white/80 backdrop-blur-sm px-4 py-5 sm:p-6 transition-all duration-300">
        <div class="col-span-6 sm:col-span-3">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Name</label
          >
          <input
            type="text"
            name="name"
            id="name"
            autocomplete="given-name"
            :value="name"
            @input="$emit('update:name', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-300 hover:bg-white/90 backdrop-blur-sm"
          />
        </div>
        <div class="col-span-6 sm:col-span-3">
          <label for="image" class="block text-sm font-medium text-gray-700"
            >Photo URL</label
          >
          <input
            type="url"
            name="image"
            id="image"
            :value="image"
            @input="$emit('update:image', $event.target.value)"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm transition-all duration-300 hover:bg-white/90 backdrop-blur-sm"
            placeholder="https://example.com/your-photo.jpg"
          />
        </div>
        <div>
          <label for="about" class="block text-sm font-medium text-gray-700"
            >About yourself</label
          >
          <div class="mt-1">
            <textarea
              id="about"
              name="about"
              rows="3"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm placeholder-slate-400 transition-all duration-300 hover:bg-white/90 backdrop-blur-sm"
              placeholder="I am an astronaut"
              maxlength="100"
              :value="desc"
              @input="$emit('update:desc', $event.target.value)"
            />
          </div>
        </div>
      </div>
    </div>
  </base-form-section>
</template>

<script setup>
const props = defineProps(["name", "desc", "image"]);
</script>
