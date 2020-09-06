<template>
    <v-row class="full-vh about-me-section">
        <v-col cols="12">
            <v-row class="full-vh about-me-section">
                <v-col :align="'center'" cols="12">
                    <s-v-g-about-me></s-v-g-about-me>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
    import SVGAboutMe from "../components/svg/SVGAboutMe";
    export default {
        name: "AboutMeSection",
        components: {SVGAboutMe},
        mounted() {
            this.initAnimation();
        },

        methods: {
            initAnimation() {

                const leftArm = document.querySelector('.left-arm');
                const rightArm = document.querySelector('.right-arm');

                this.$gsap.set([leftArm, rightArm], {});
                const t1 = this.$gsap.timeline({defaults: {ease: 'power3.onOut'}});
                const t2 = this.$gsap.timeline({defaults: {ease: 'power3.onOut'}});

                t1
                    .fromTo(leftArm, {
                            rotate: '-=20',
                            x: '-=12',
                        },
                        {
                            rotate: '+=30',
                            x: '+=18',
                            duration: 2,
                        })
                    .to(leftArm, {
                        rotate: '-=20',
                        x: '-=12',
                        duration: 2,
                    });

                t2
                    .fromTo(rightArm, {
                            rotate: '+=30',
                            x: '+=20',
                            y: '-=7'
                        },
                        {
                            rotate: '-=30',
                            x: '-=19.5',
                            y: '+=8',
                            duration: 2,
                        })
                    .to(rightArm, {
                        rotate: '+=30',
                        x: '+=20',
                        y: '-=7',
                        duration: 2,
                    });

                t1.repeat(-1);
                t2.repeat(-1);

            }

        }
    }
</script>

<style lang="scss" scoped>
    .about-me-section {
        background: $backgroundColor;
    }
</style>