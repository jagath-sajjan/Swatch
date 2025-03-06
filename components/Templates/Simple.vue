<template>
  <main class="p-4 bg-gradient-to-br from-slate-900 to-slate-800 h-full w-full space-y-8 pt-12 max-w-lg mx-auto backdrop-blur-lg text-slate-100">
    <div class="text-center backdrop-blur-md bg-slate-800/30 p-6 rounded-2xl shadow-xl border border-slate-700/50">
      <div
        v-if="acc.i"
        class="h-20 w-20 rounded-full overflow-hidden ring-2 ring-[#FFA7A6]/50 mx-auto shadow-lg"
      >
        <img :src="acc.i" alt="name" class="h-full w-full object-cover" />
      </div>
      <h1 v-if="acc.n" class="text-2xl font-bold mt-4 text-slate-100 glow">
        {{ acc.n }}
      </h1>
      <p v-if="acc.d" class="text-sm mt-2 text-slate-300">
        {{ acc.d }}
      </p>
    </div>
    <div
      v-if="!allSocialLinksAreEmpty"
      class="flex items-center justify-center flex-wrap gap-2 p-4 backdrop-blur-md bg-slate-800/30 rounded-xl shadow-lg border border-slate-700/50"
    >
      <span v-if="acc.f" class="p-1">
        <a :href="acc.f" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:facebook-logo-duotone" class="h-6 w-6 text-[#FFA7A6] hover:text-[#FF8584] transition-colors duration-300" />
        </a>
      </span>
      <span v-if="acc.t" class="p-1">
        <a :href="acc.t" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:twitter-logo-duotone" class="h-6 w-6 text-[#FFA7A6] hover:text-[#FF8584] transition-colors duration-300" />
        </a>
      </span>
      <span v-if="acc.ig" class="p-1">
        <a :href="acc.ig" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:instagram-logo-duotone" class="h-6 w-6 text-[#FFA7A6] hover:text-[#FF8584] transition-colors duration-300" />
        </a>
      </span>
      <span v-if="acc.m" class="p-1">
        <a :href="acc.m" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:envelope-duotone" class="h-6 w-6 text-[#FFA7A6] hover:text-[#FF8584] transition-colors duration-300" />
        </a>
      </span>
      <span v-if="acc.tg" class="p-1">
        <a :href="acc.tg" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:telegram-logo-duotone" class="h-6 w-6 text-[#FFA7A6] hover:text-[#FF8584] transition-colors duration-300" />
        </a>
      </span>
      <span v-if="acc.w" class="p-1">
        <a :href="`https://wa.me/${acc.w}`" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:whatsapp-logo-duotone" class="h-6 w-6 text-[#FFA7A6] hover:text-[#FF8584] transition-colors duration-300" />
        </a>
      </span>
      <span v-if="acc.y" class="p-1">
        <a :href="acc.y" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:youtube-logo-duotone" class="h-6 w-6 text-[#FFA7A6] hover:text-[#FF8584] transition-colors duration-300" />
        </a>
      </span>
      <span v-if="acc.e" class="p-1">
        <a :href="`mailto:${acc.e}`" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:envelope-duotone" class="h-6 w-6 text-[#FFA7A6] hover:text-[#FF8584] transition-colors duration-300" />
        </a>
      </span>
      <span v-if="acc.gh" class="p-1">
        <a :href="acc.gh" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:github-logo-duotone" class="h-6 w-6 text-[#FFA7A6] hover:text-[#FF8584] transition-colors duration-300" />
        </a>
      </span>
      <span v-if="acc.l" class="p-1">
        <a :href="acc.l" target="_blank" rel="noopener | noreferrer">
          <icon name="ph:linkedin-logo-duotone" class="h-6 w-6 text-[#FFA7A6] hover:text-[#FF8584] transition-colors duration-300" />
        </a>
      </span>
    </div>
    <ul class="space-y-3 px-2">
      <ExternalLink
        v-for="(link, id) in acc.ls"
        :label="link.l"
        :icon="link.i"
        :url="link.u"
        :key="id"
      />
    </ul>
<div class="text-center text-sm text-slate-400 mt-8 backdrop-blur-md bg-slate-800/30 p-4 rounded-xl border border-slate-700/50">
      <p>Created with <a href="https://github.com/jagath-sajjan/Swatch" target="_blank" class="text-[#FFA7A6] hover:text-[#FF8584] font-medium">Swatch!</a></p>
      <p class="mt-1">© 2025. All rights reserved.</p>
    </div>
  </main>
</template>
<script setup>
const props = defineProps({
  acc: {
    type: Object,
    required: true,
  },
});

const allSocialLinksAreEmpty = computed(() => {
  return (
    !props.acc.f &&
    !props.acc.t &&
    !props.acc.ig &&
    !props.acc.m &&
    !props.acc.tg &&
    !props.acc.w &&
    !props.acc.y &&
    !props.acc.e &&
    !props.acc.gh &&
    !props.acc.l
  );
});
</script>
<style scoped>
.glow {
  text-shadow: 0 0 15px rgba(255, 167, 166, 0.5);
}
</style>
