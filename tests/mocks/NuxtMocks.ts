import { vi } from "vitest"

interface RuntimeConfig {
    baseURL: string
}

vi.mock("#app", () => {
    return {
        useRuntimeConfig: (): RuntimeConfig => ({
            baseURL: "test.com",
        }),
    }
})

vi.mock("~~/.nuxt/imports", () => {
    return {
        definePageMeta: vi.fn(),
        useRoute: (): { path: string } => ({ path: "/" }),
    }
})
