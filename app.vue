<script setup lang="ts">
    import { storeToRefs } from "pinia"
    import useThemeStore from "./stores/useThemeStore"

    const themeStore = useThemeStore()
    const { theme } = storeToRefs(themeStore)
</script>

<template>
    <v-app :theme="theme">
        <NuxtPage />
    </v-app>
</template>
