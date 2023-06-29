<script lang="ts" setup>
    import { ref } from "vue"
    import PostCard from "~/components/post/PostCard.vue"
    import WelcomeBanner from "~/components/home/WelcomeBanner.vue"
    const isLoading = ref(true)
</script>

<template>
    <NuxtLayout>
        <WelcomeBanner></WelcomeBanner>
        <v-row>
            <v-col cols="8" xs="12">
                <ContentList
                    path="/"
                    :query="{
                        only: ['title', 'description', 'tags', '_path', 'img'],
                        $sensitivity: 'base',
                    }"
                >
                    <template #default="{ list }">
                        <PostCard v-for="post in list" :key="post.name" :post="post"></PostCard>
                    </template>
                    <template #not-found>
                        <p>No articles found.</p>
                    </template>
                </ContentList>
            </v-col>
            <v-col cols="4" xs="12"> </v-col>
        </v-row>
    </NuxtLayout>
</template>
