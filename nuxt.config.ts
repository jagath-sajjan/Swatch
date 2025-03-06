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
