export default ({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    colorMode: {
        classSuffix: '',
    },
    nitro: {
        preset: 'vercel',
        output: {
            dir: '.output'
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
