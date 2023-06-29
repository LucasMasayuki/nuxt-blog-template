<script lang="ts">
    export default {
        props: {
            post: {
                type: Object,
                required: true,
            },
        },
    }
</script>

<template>
    <v-card class="post-card">
        <v-row no-gutters>
            <v-col cols="4" class="post-card-container-img">
                <v-img :src="post.img" height="100%" class="post-card-img"></v-img>
            </v-col>
            <v-col cols="8" class="post-card-container-info">
                <div class="post-card-box-chip">
                    <v-chip v-for="tag in post.tags" :key="tag" outlined class="post-card-chip">
                        {{ tag }}
                    </v-chip>
                </div>
                <v-card-title class="post-card-text-title">{{ post.title }}</v-card-title>
                <v-card-text class="post-card-text-description">{{ post.description }}</v-card-text>
                <div class="post-card__box--extra"></div>
            </v-col>
        </v-row>
    </v-card>
</template>

<style lang="scss" scoped>
    .post-card {
        cursor: pointer;
        padding: 2rem;
        box-shadow: 0 10px 10px rgba(0 0 0 / 20%);
        margin-bottom: 3rem;
        transition: transform 0.3s ease;
        will-change: transform;

        .post-card-container-img {
            aspect-ratio: 1/1;
            width: 272px;
            margin-right: 2rem;
        }

        .post-card-img {
            border-radius: 8px;
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.3s ease;
            transform-origin: center;
            will-change: transform;
        }

        .post-card-container-info {
            flex: 1 1 300px;

            .post-card-text-title {
                font-size: 2rem;
                text-decoration: underline;
                text-decoration-color: transparent;
                text-decoration-thickness: 2px;
                text-underline-offset: 3px;
            }

            .post-card-text-description {
                margin-bottom: 1.25rem;
                line-height: 1.8;
                height: auto;
                overflow: hidden;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
            }

            .post-card-box-chip {
                margin-bottom: 4px;
                display: flex;
                flex-wrap: wrap;

                .post-card-chip {
                    font-size: 0.875rem;
                    line-height: 1.5;
                    margin: 0 8px 12px 0;
                    display: flex;
                    align-items: center;
                    height: 32px;
                    padding: 0 12px;
                    border-radius: 20px;
                    position: relative;
                }
            }

            .post-card-box-extra {
                font-size: 0.875rem;
                display: flex;
                line-height: 1.6;
            }
        }
    }
</style>
