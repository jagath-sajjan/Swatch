<template>
  <div>
    <templates-simple v-if="decodedData && !error" :acc="decodedData" />
    <div v-else-if="error" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <p class="text-red-500 mb-4">Unable to load profile data</p>
      <nuxt-link to="/" class="text-blue-500 hover:underline">Return to Home</nuxt-link>
    </div>
    <div v-else class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <base-loading class="h-5 w-5" />
    </div>
  </div>
</template>
<script setup>
import { getProfileData } from "../utils/url-generator";
const route = useRoute();
const username = route.params.username;
const decodedData = ref(null);
const error = ref(false);

try {
  const profileData = getProfileData(username);
  if (profileData) {
    decodedData.value = profileData;
  } else {
    error.value = true;
  }
} catch (e) {
  console.error("Error fetching profile data:", e);
  error.value = true;
}
</script>
<style scoped></style>
