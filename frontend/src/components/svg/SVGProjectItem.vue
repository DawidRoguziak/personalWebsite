<template>
    <a :href="getAProps.link" :id="elemId" :target="getAProps.target" :style="svgStyle" style="display: block">
        <svg ref="svgElem" class="relative" viewBox="0 0 282 262" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path :style="rotateSVG" ref="hex" id="project-item-hex"
                  d="M276 119.273L207.446 238.465L69.9464 238.692L1.00019 119.727L69.5538 0.534994L207.054 0.30834L276 119.273Z"
                  fill="url(#paint0_linear)"/>
            <path :style="rotateSVG" @mouseover="toHex" @mouseout="toEllipse" ref="ellipse"
                  d="M279 130.914C291.5 213.5 264 226 183 258.5C97.5 276.586 0.5 212.376 0.5 130.914C0.5 49.4523 2.11972 0.5 88 0.5C173.88 0.5 246.5 42.5 279 130.914Z"
                  fill="black">
            </path>
            <text @mouseover="toHex" @mouseout="toEllipse" ref="title" fill="white" x="50%" y="40%"
                  alignment-baseline="middle" font-size="28" stroke-width="0"
                  stroke="#fff" text-anchor="middle"> {{ title }}
            </text>
            <text @mouseover="toHex" @mouseout="toEllipse" ref="subText" fill="white" x="50%" y="50%"
                  alignment-baseline="middle" font-size="14" stroke-width="0"
                  stroke="#fff" text-anchor="middle"> {{ subText }}
            </text>
            <defs>
                <linearGradient id="paint0_linear" x1="265" y1="27" x2="23.5" y2="223.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.524095" stop-color="#161523"/>
                    <stop offset="0.936264" stop-color="#6C63FF"/>
                </linearGradient>
            </defs>
        </svg>
    </a>
</template>

<script>
    export default {
        name: "SVGProjectItem",

        data() {
            return {
                timeline: null,
            }
        },

        computed: {
            getAProps() {
                if (this.link.length === 0) {
                    return {
                        target: '',
                        link: 'javascript:void(0)'
                    }
                }

                return {
                    target: '_blank',
                    link: this.link
                };
            }
        },

        props: {
            timelineProps: {
                type: Object,
                default: () => ({
                    defaults: {ease: 'power3.onOut'}
                })
            },

            startProps: {
                type: Object,
                default: () => ({})
            },

            title: {
                type: String,
                default: ''
            },

            subText: {
                type: String,
                default: ''
            },

            svgStyle: {
                type: String,
                default: ''
            },

            link: {
                type: String,
                default: ''
            },

            elemId: {
                type: String,
                default: ''
            }

        },

        mounted() {
            this.initGsap();
        },

        methods: {
            initGsap() {
                this.$gsap.set([this.$refs.hex], this.startProps);
                this.timeline = this.$gsap.timeline(this.timelineProps);
            },

            toHex() {
                if (this.timeline.isActive()) {
                    this.timeline.clear();
                }

                this.timeline
                    .to(this.$refs.ellipse, {
                        duration: 1,
                        visibility: 'visible',
                        morphSVG: this.$refs.hex
                    });
            },

            toEllipse() {
                if (this.timeline.isActive()) {
                    this.timeline.clear();
                }

                this.timeline
                    .to(this.$refs.ellipse, {
                        duration: 1,
                        morphSVG: this.$refs.ellipse
                    });
            },

            rotateSVG() {
                return `transform: rotate(${this.getRandomInt(0, 120)}deg)`;
            },

            getRandomInt(min, max) {
                min = Math.ceil(min);
                max = Math.floor(max);
                return Math.floor(Math.random() * (max - min)) + min;
            }
        }
    }
</script>

<style scoped lang="scss">
    #project-item-hex {
        visibility: hidden;
    }
</style>