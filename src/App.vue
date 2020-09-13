<template>
    <v-app>
        <v-main>
            <HelloSection/>
            <AboutMeSection/>
            <ProjectSection/>
            <ContactSection/>
        </v-main>
    </v-app>
</template>

<script>
    import HelloSection from "./sections/HelloSection";
    import AboutMeSection from "./sections/AboutMeSection";
    import ProjectSection from "./sections/ProjectSection";
    import ContactSection from "./sections/ContactSection";
    export default {
        name: 'App',
        components: {ContactSection, ProjectSection, AboutMeSection, HelloSection},
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Raleway&display=swap');
</style>

<style lang="scss">
    @import "src/assets/styles/main.scss";
</style>
