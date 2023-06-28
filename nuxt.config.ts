import { defineNuxtConfig } from "nuxt/config"
import { fileURLToPath, URL } from "url"

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],

    app: {
        head: {
            charset: "UTF-8",
            viewport: "width=device-width, initial-scale=1",
            title: "{{REPLACE}}",
            meta: [
                { name: "description", content: "{{REPLACE}}" },
                { name: "theme-color", content: "{{REPLACE}}" },
            ],
            link: [
                { rel: "manifest", href: "_nuxt/assets/jsons/manifest.json" },
                { rel: "icon", type: "image/x-icon", href: "_nuxt/assets/images/favicon.ico" },
                { rel: "apple-touch-icon", type: "image/x-icon", href: "_nuxt/assets/images/{{REPLACE}}", sizes: "152x152" },
                { rel: "apple-touch-icon", type: "image/x-icon", href: "_nuxt/assets/images/{{REPLACE}}", sizes: "167x167" },
                { rel: "apple-touch-icon", type: "image/x-icon", href: "_nuxt/assets/images/{{REPLACE}}", sizes: "180x180" },
            ],
        },
    },
    build: {
        transpile: ["vuetify"],
    },

    css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
    ignore: ["**/*.test.*", "**/*.spec.*"],

    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL,
        },
    },

    typescript: {
        strict: true,
    },

    vite: {
        define: {
            "process.env.DEBUG": false,
        },
        resolve: {
            alias: {
                "@": fileURLToPath(new URL("./", import.meta.url)),
            },
        },
    },
})
