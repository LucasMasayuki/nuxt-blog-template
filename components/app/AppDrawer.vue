<script setup lang="ts">
    import { ref, watch } from "vue"

    const emit = defineEmits(["update:open"])
    const props = defineProps({
        open: {
            type: Boolean,
            default: false,
        },
    })

    const isOpen = ref(props.open)
    watch(
        () => props.open,
        () => {
            isOpen.value = props.open
            console.log(isOpen.value)
        }
    )

    const onClose = (): void => {
        emit("update:open")
    }
</script>

<template>
    <v-navigation-drawer :model-value="isOpen" temporary @update:model-value="onClose">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg" title="John Leider"></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
