<template>
    <v-app>
        <v-main>
            <SectionHello/>
            <AboutMeSection/>
        </v-main>
    </v-app>
</template>

<script>

    import SectionHello from "./sections/SectionHello";
    import AboutMeSection from "./sections/AboutMeSection";
    export default {
        name: 'App',
        components: {AboutMeSection, SectionHello},
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
