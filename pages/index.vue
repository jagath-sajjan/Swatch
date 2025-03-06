<template>
  <div class="h-screen grid grid-cols-3 divide-x">
    <div class="col-span-2 h-screen flex flex-col bg-slate-100 transition-all duration-500 ease-in-out">
      <div class="flex-1 overflow-y-auto p-8 animate-fade-in">
        <app-form-profile
          v-model:name="data.n"
          v-model:desc="data.d"
          v-model:image="data.i"
          class="transform transition-all duration-300 hover:translate-y-[-2px]"
        />
        <app-form-hr class="transform transition-opacity duration-300" />
        <app-form-social-links
          v-model:facebook="data.f"
          v-model:twitter="data.t"
          v-model:instagram="data.ig"
          v-model:github="data.gh"
          v-model:telegram="data.tg"
          v-model:linkedin="data.l"
          v-model:email="data.e"
          v-model:whatsapp="data.w"
          v-model:youtube="data.y"
          class="transform transition-all duration-300 hover:translate-y-[-2px]"
        />
        <app-form-hr class="transform transition-opacity duration-300" />
        <app-form-links v-model="data.ls" class="transform transition-all duration-300 hover:translate-y-[-2px]" />
      </div>
      <div class="border-t bg-white flex items-center transition-all duration-300 hover:shadow-lg">
        <button
          @click="publish"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700 transition-all duration-300 hover:bg-indigo-500 hover:text-white"
        >
          <span>Publish</span>
          <icon name="ph:paper-plane-tilt-bold" class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
        <a
          href="https://github.com/jagath-sajjan/Swatch"
          target="_blank"
          class="h-12 flex items-center space-x-2 px-4 border-r text-xs font-medium bg-white text-slate-700 transition-all duration-300 hover:bg-gray-50"
        >
          <span>Swatch!</span>
          <icon name="mdi:github" class="h-4 w-4 transition-transform duration-300 hover:rotate-12" />
        </a>
      </div>
    </div>
    <app-form-preview :data="data" />
    <div class="absolute bottom-0 right-0 bg-white rounded-tl-lg shadow px-4 py-1 font-medium text-sm text-gray-500 transition-all duration-300 hover:shadow-md">
      <a href="https://github.com/jagath-sajjan" target="_blank" class="hover:text-indigo-600 transition-colors duration-300">Made with Swatch!</a>
    </div>
  </div>
</template>

<script setup>
import { generateUrl } from "../utils/url-generator";
const data = ref({
  n: "",
  d: "",
  i: "",
  f: "",
  t: "",
  ig: "",
  gh: "",
  tg: "",
  l: "",
  e: "",
  w: "",
  y: "",
  ls: [],
});

const publish = () => {
  const url = generateUrl(data.value, window.location.origin);
  navigator.clipboard.writeText(url).then(() => {
    alert("Link copied to clipboard");
  });
};
</script>

<style>
.animate-fade-in {
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
