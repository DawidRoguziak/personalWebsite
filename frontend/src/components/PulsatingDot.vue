<template>
    <div class="relative ring-container" @click="iconClicked">
        <div ref="ring" class="ring"></div>
        <div class="circle"></div>
        <svg class="center-item" width="12" style="left: 52%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"/></svg>
    </div>
</template>

<script>
    export default {
        name: "PulsatingDot",

        data() {
            return {
                timeline: null
            }
        },

        mounted() {
            this.initGsap();
        },

        methods: {
            iconClicked() {
                this.$emit('iconClicked');
                setTimeout(() => {
                    this.timeline.clear();
                },2000);
            },

            initGsap() {
                this.timeline =  this.$gsap.timeline({ defaults: {ease: "sine.out",  duration: 0.2} })
                    .to(this.$refs.ring, {scaleX: 1.2, scaleY: 1.2, opacity: 0.5})
                    .to(this.$refs.ring, {scaleX: 1.4, scaleY: 1.4, opacity: 0.75})
                    .to(this.$refs.ring, {scaleX: 1.6, scaleY: 1.6, opacity: 1})
                    .to(this.$refs.ring, {scaleX: 1.8, scaleY: 1.8, opacity: 0.75})
                    .to(this.$refs.ring, {scaleX: 2, scaleY: 2, opacity: 0.5})
                    .to(this.$refs.ring, {scaleX: 2.2, scaleY: 2.2, opacity: 0})
                    .repeat(-1);
            }
        }
    }
</script>

<style scoped lang="scss">
    $circleSize: 50;
    .ring-container {
        width: 50px;
        height: 50px;
        cursor: pointer;
    }

    .circle {
        position: absolute;
        width: $circleSize * 1px;
        height: $circleSize * 1px;
        background-color: $mainColor;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .ring {
        position: absolute;
        height: $circleSize + 20 * 1px;
        width: $circleSize + 20 * 1px;
        border: 3px solid $mainColor;
        border-radius: $circleSize + 20 * 1px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0
    }
</style>