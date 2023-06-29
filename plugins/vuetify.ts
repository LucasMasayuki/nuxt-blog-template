// plugins/vuetify.js
import { defineNuxtPlugin } from "nuxt/app"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        components,
        directives,
        theme: {
            themes: {
                light: {
                    dark: false,
                    colors: {
                        primary: "#1E88E5",
                        background: "#F9F9FF",
                        surface: "#FFF",
                        success: "#4CAF50",
                    },
                },
                dark: {
                    dark: true,
                    colors: {
                        primary: "#1E88E5",
                        background: "#262A2E",
                        surface: "#161819",
                        success: "#4CAF50",
                    },
                },
            },
        },
    })

    nuxtApp.vueApp.use(vuetify)
})
