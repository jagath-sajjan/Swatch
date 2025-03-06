export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
    nitro: {
        preset: "vercel",
        nodeVersion: "16.10.0" // You can switch between 14.16.0, 16.10.0, or 17.0.0
    }
});
