<template>
    <section id="projects">
        <v-row class="full-vh about-me-section">
            <v-col cols="12">
                <div class="projects-grid-container full-vh">
                    <s-v-g-ellipse :id="'section-title-background'" ></s-v-g-ellipse>
                    <s-v-g-projects :id="'section-title'"/>

                    <s-v-g-project-item></s-v-g-project-item>
                </div>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    import SVGProjects from "../components/svg/SVGProjects";
    import SVGEllipse from "../components/svg/SVGEllipse";
    import SVGProjectItem from "../components/svg/SVGProjectItem";

    export default {
        name: "ProjectSection",
        components: {SVGProjectItem, SVGEllipse, SVGProjects}
    }
</script>

<style scoped lang="scss">
    #projects {
        background-image: $backgroundGradient;
    }

    .projects-grid-container {
        display: grid;
        grid-template-columns: 30% 40% 30%;
        grid-template-rows: 50% 50%;
    }

    #section-title, #section-title-background {
        grid-column: 2;
        grid-row: 1;
        justify-self: center;
        align-self: center;
        width: 15rem;
    }

    #section-title {
        width: 13rem;
    }

</style>