export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
    nitro: {
        preset: 'vercel-edge',
        output: {
            dir: 'dist',
            serverDir: 'dist/server',
            publicDir: 'dist/public'
        },
        serveStatic: true,
        storage: {
            data: {
                driver: 'memory'
            }
        },
        experimental: {
            asyncContext: true
        }
    }
})
