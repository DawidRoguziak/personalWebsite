<template>
        <svg width="200" viewBox="0 0 282 262" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path ref="hex" id="project-item-hex"
                  d="M276 119.273L207.446 238.465L69.9464 238.692L1.00019 119.727L69.5538 0.534994L207.054 0.30834L276 119.273Z"
                  fill="url(#paint0_linear)"/>
            <path ref="ellipse"
                  d="M279 130.914C291.5 213.5 264 226 183 258.5C97.5 276.586 0.5 212.376 0.5 130.914C0.5 49.4523 2.11972 0.5 88 0.5C173.88 0.5 246.5 42.5 279 130.914Z"
                  fill="black"/>
            <defs>
                <linearGradient id="paint0_linear" x1="265" y1="27" x2="23.5" y2="223.5" gradientUnits="userSpaceOnUse">
                    <stop offset="0.524095" stop-color="#161523"/>
                    <stop offset="0.936264" stop-color="#6C63FF"/>
                </linearGradient>
            </defs>
        </svg>
</template>

<script>
    export default {
        name: "SVGProjectItem",

        data() {
            return {
                timeline: null,
            }
        },

        props: {
            timelineProps: {
                type: Object,
                default: () => ({})
            },

            startProps: {
                type: Object,
                default: () => ({})
            }
        },

        mounted() {
            this.initGsap();
            console.log('weszłó', this.$refs.svgElem)
            window.addEventListener('mouseenter', this.$refs.svgElem, this.toHex);
            window.addEventListener('mouseleave', this.$refs.svgElem, this.toEllipse);
        },

        destroyed() {
            window.removeEventListener('mouseenter', this.$refs.svgElem, this.toHex)
            window.removeEventListener('mouseleave', this.$refs.svgElem, this.toEllipse);
        },

        methods: {
            initGsap() {
                this.$gsap.set([this.$refs.hex], this.startProps);
                this.timeline = this.$gsap.timeline(this.timelineProps);
            },

            toHex() {
                console.log('test')
                this.timeline.to(this.$refs.ellipse, {duration: 1, visibility: 'visible', morphSVG: this.$refs.hex});
            },

            toEllipse() {
                // this.timeline.to(this.$refs.ellipse, {duration:1, morphSVG: this.$refs.hex});
                // this.timeline.to(this.$refs.hex, {duration: 1, visibility: 'visible', morphSVG: this.$refs.ellipse});

            },
        }
    }
</script>

<style scoped lang="scss">
    #project-item-hex {
        visibility: hidden;
    }
</style>