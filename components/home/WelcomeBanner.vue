<template>
    <div class="welcome-banner rounded elevation-20 pa-4">
        <v-parallax
            class="welcome-banner__parallax rounded"
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDZ8fHdhbGxwYXBlcnxlbnwwfHx8fDE2NzE2MDMyNjM&ixlib=rb-4.0.3&q=80&w=2000"
        >
            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                <h1 class="text-h4 font-weight-thin mb-4">Welcome</h1>
                <h4 class="subheading">Build your application today!</h4>
            </div>
        </v-parallax>
    </div>
</template>

<style lang="scss" scoped>
    .welcome-banner {
        height: 400px;
        margin-bottom: 2.5em;
        margin-top: 2.5em;
    }
</style>
