import { acceptHMRUpdate, defineStore } from "pinia"

export enum Theme {
    Light = "light",
    Dark = "dark",
}

type State = {
    theme: Theme
}

const useTheme = defineStore({
    id: "theme",
    state: () =>
        <State>{
            theme: Theme.Light,
        },

    actions: {
        toggle() {
            this.$patch((state) => {
                state.theme = state.theme === Theme.Light ? Theme.Dark : Theme.Light
            })
        },
    },

    persist: true,
})

export default useTheme

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useTheme, import.meta.hot))
}
