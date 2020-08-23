<template>
    <v-app>
        <v-main>
            <SectionHello/>
        </v-main>
    </v-app>
</template>

<script>

    import SectionHello from "./sections/SectionHello";
    export default {
        name: 'App',
        components: {SectionHello},
        data: () => ({
            //
        }),
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
</style>

<style lang="scss">
    @import "src/assets/styles/main.scss";
</style>
