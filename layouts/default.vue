<script setup lang="ts">
    import AppBar from "@/components/app/AppBar.vue"
    import AppFooter from "@/components/app/AppFooter.vue"
</script>

<template>
    <div>
        <AppBar />
        <v-main>
            <v-container>
                <slot></slot>
            </v-container>
        </v-main>
        <AppFooter />
    </div>
</template>
