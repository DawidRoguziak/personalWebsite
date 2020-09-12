<template>
    <section id="projects">
        <v-row class="full-vh about-me-section">
            <v-col class="padding-0" cols="12">
                <div class="projects-grid-container full-vh padding-0 relative">
                    <div class="project-text">
                        <s-v-g-ellipse class="center-item" :id="'section-title-background'"></s-v-g-ellipse>
                        <s-v-g-projects class="center-item" :id="'section-title'"/>
                    </div>

                    <s-v-g-project-item :svg-style="getStyleForSvg('center')"
                                        :title="'DKRHexLoader'"
                                        :sub-text="'Simple script to add hex loader to page'"
                                        :link="'https://github.com/DawidRoguziak/DKRHexLoader'"></s-v-g-project-item>
                    <s-v-g-project-item :svg-style="getStyleForSvg('flex-end') + 'cursor: not-allowed;'"
                                        :title="'SolScrapper'"
                                        :sub-text="'Work in progres'"></s-v-g-project-item>
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
        components: {SVGProjectItem, SVGEllipse, SVGProjects},

        methods: {
            getStyleForSvg(alignSelf) {
                return `
                width: 300px;
                align-self: ${alignSelf};
                `
            },
        }
    }
</script>

<style scoped lang="scss">
    #projects > div {
        background-image: $backgroundGradient;
    }

    .projects-grid-container {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around;

        & > :nth-child(n) {
            order: n+1;
        }
    }

    #section-title, #section-title-background {
        width: 15rem;
    }

    #section-title {
        width: 13rem;
    }

    .project-text {
        position: relative;
        flex-grow: 1;
    }

    @media (min-width: 1200px) {
        .project-text {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }


    @media (max-width: 1200px) {
        .projects-grid-container {
            flex-direction: column-reverse;
            justify-content: unset;

            & > :nth-child(n) {
                align-self: center !important;
            }
        }

        .project-text {
            order: 1;
        }
    }

</style>