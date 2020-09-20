<template>
    <section id="about-me">
        <v-row class="full-vh about-me-section">

            <v-col :align="'center'" cols="12" sm="12" md="6" xl="6" class="relative">
                <s-v-g-about-me :class="'left-side'"></s-v-g-about-me>
            </v-col>
            <v-col :align="'center'" cols="12" sm="12" md="6" xl="6" class="relative">
                <div class="right-side">
                    <p class="first-text">
                        I'm David frontend developer from Lublin, Poland.
                    </p>

                    <p class="second-text">
                        What do I do? I create web applications with VueJs.<br/>
                        What I like? I like use new technologies.<br/>
                        What I hate? I hate wordpress.
                    </p>

                    <p class="third-text">
                        Sometimes I like break my terminal or make some vector graphics.
                    </p>
                </div>
            </v-col>
        </v-row>
    </section>
</template>

<script>
    import SVGAboutMe from "../components/svg/SVGAboutMe";

    export default {
        name: "AboutMeSection",
        components: {SVGAboutMe},
        data() {
            return {
                textAnimationSettingsFrom: {
                    opacity: 0,
                    y: '-=50',
                },
                textAnimationSettingsTo: {
                    opacity: 1,
                    duration: 0.5,
                    y: '+=50',
                }
            }
        },

        mounted() {
            this.initAnimation();
        },

        methods: {
            initAnimation() {
                this.textAnimation();
                this.armsAnimation();
            },

            textAnimation() {
                const firstText = document.querySelector('.first-text');
                const secondText = document.querySelector('.second-text');
                const thirdText = document.querySelector('.third-text');
                const svg = document.querySelector('.am-wrapper');

                this.$gsap.set([firstText, secondText, thirdText, svg], {});

                const t1 = this.$gsap.timeline({
                    scrollTrigger: {
                        start: 'top 20%',
                        trigger: '.am-wrapper',
                    },
                    defaults: {ease: 'power3.onOut'}
                });

                t1
                    .fromTo(svg, this.textAnimationSettingsFrom, this.textAnimationSettingsTo)
                    .fromTo(firstText, this.textAnimationSettingsFrom, this.textAnimationSettingsTo)
                    .fromTo(secondText, this.textAnimationSettingsFrom, this.textAnimationSettingsTo)
                    .fromTo(thirdText, this.textAnimationSettingsFrom, this.textAnimationSettingsTo);

            },

            armsAnimation() {
                const leftArm = document.querySelector('.left-arm');
                const rightArm = document.querySelector('.right-arm');

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
        padding-top: 50px;

        p {
            color: #fff;
            font-size: 20px;
        }

        @media (max-width: 780px) {
            .first-text, .second-text, .third-text {
                margin-top: 50px;
            }

        }
    }

    @media (min-width: 1441px) {
        .first-text, .second-text, .third-text {
            margin-top: 100px;
        }

        .left-side, .right-side {
            margin-top: 150px;
        }

        .about-me-section {

        }
    }
</style>