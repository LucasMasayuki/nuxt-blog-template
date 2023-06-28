import { setActivePinia, createPinia } from "pinia"
import { describe, expect, it } from "vitest"
import useThemeStore, { Theme } from "./useThemeStore"

describe.concurrent("use theme store", () => {
    setActivePinia(createPinia())
    const store = useThemeStore()

    describe("theme state", () => {
        it("should have the default value in the beginning", async () => {
            expect(store.theme).toBe(Theme.Light)
        })

        it("should toggle theme, when call toggle", () => {
            store.toggle()

            expect(store.theme).toBe(Theme.Dark)
        })
    })
})
