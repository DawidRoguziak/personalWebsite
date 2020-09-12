<template>
    <section id="hello">
    <v-row :align="'center'" :justify="'center'" class="full-vh welcome-section">
        <v-col class="padding-0" :align="'right'" cols="12" sm="12" md="12" xl="6">
            <img :src="image" class="full-vh display-xs-none face-img">
        </v-col>

        <v-col class="padding-0" cols="12" sm="12" md="12" xl="6" >
            <div class="who-i-am right-side">
                <div>
                    <type-writer :letters-to-wrap="[0]"
                                 :word="rightText.hello"
                                 :type-speed="typeSpeed"/>
                </div>
                <div>
                    <type-writer :letters-to-wrap="[0]"
                                 :word="rightText.name"
                                 :type-speed="typeSpeed"
                                 :wait="rightTextNameWait"/>
                </div>
                <div>
                    <type-writer :letters-to-wrap="[0,1,2,3,4]"
                                 :word="rightText.dev"
                                 :type-speed="typeSpeed"
                                 :wait="rightTextDevWait"
                                 :infinity="true"/>
                </div>
            </div>
        </v-col>
    </v-row>
    </section>
</template>

<script>
    import TypeWriter from "../components/TypeWriter";

    export default {
        name: "HelloSection",
        components: {TypeWriter},
        data() {
            return {
                typeSpeed: 180,
                rightText: {
                    hello: 'Hey.',
                    name: 'I am David.',
                    dev: 'Frontend Developer.'
                },
                image: require('./../assets/img/section-face.webp')
            }
        },

        mounted() {
            this.initAnimations();
        },

        methods: {
            initAnimations() {
                const faceImg = document.querySelector('.face-img');
                this.$gsap.set([faceImg], {autoAlpha: 0});

                const  t1 = this.$gsap.timeline({defaults: {ease: 'power3.onOut'}});
                t1.fromTo(faceImg, {x: '-=300'}, {x: '+=300', duration: 1, autoAlpha: 1});
            }
        },

        computed: {
            rightTextNameWait() {
                return this.rightText.hello.length * this.typeSpeed;
            },

            rightTextDevWait() {
                return this.rightTextNameWait + (this.rightText.name.length * this.typeSpeed)
            },

            isMobileComputed() {
                return this.isMobile()
            }
        },

    }
</script>

<style lang="scss" scoped>
    .welcome-section {
        background-image: $backgroundGradient;
        color: $fontColorLight;

        .right-side {
            color: #111;
        }

        .who-i-am {
            margin: 0 0 0 5px;
            letter-spacing: .10em;
            font-weight: 700;
            font-size: 28px;
            min-width: 315px;
        }
    }
</style>