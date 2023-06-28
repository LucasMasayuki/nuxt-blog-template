<script setup lang="ts">
    import { storeToRefs } from "pinia"
    import { ref } from "vue"
    import useThemeStore from "~~/stores/useThemeStore"
    import AppDrawer from "~~/components/app/AppDrawer.vue"

    const storeTheme = useThemeStore()
    const { theme } = storeToRefs(storeTheme)
    const isOpen = ref(false)

    const onClick = (): void => {
        storeTheme.toggle()
    }

    const onClickOpenDrawer = (): void => {
        console.log("ue")
        isOpen.value = true
    }

    const onCloseDrawer = (): void => {
        console.log("ue2")
        isOpen.value = false
    }
</script>

<template>
    <AppDrawer :open="isOpen" @update:open="onCloseDrawer" />
    <v-app-bar color="primary">
        <template #prepend>
            <v-app-bar-nav-icon @click="onClickOpenDrawer" />
        </template>

        <v-app-bar-title>REPLACE</v-app-bar-title>

        <template #append>
            <v-btn :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="onClick">Toggle Theme</v-btn>
        </template>
    </v-app-bar>
</template>
