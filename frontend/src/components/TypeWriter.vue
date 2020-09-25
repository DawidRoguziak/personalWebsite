<template>
     <span
          class="type-writer"
          :class="{ 'type-writer-current': active }"
          v-html="text"
     />
</template>

<script>
export default {
     name: "TypeWriter",

     props: {
          word: {
               type: String,
               default: "",
          },
          wait: {
               type: Number,
               default: 0,
          },
          typeSpeed: {
               type: Number,
               default: 300,
          },
          infinity: {
               type: Boolean,
               default: false,
          },
          lettersToWrap: {
               type: Array,
               default: function () {
                    return [];
               },
          },
     },

     data() {
          return {
               text: "",
               wordIndex: 0,
               typeInterval: null,
               active: false,
          };
     },

     computed: {
          wordLength() {
               return this.word.length;
          },
     },

     methods: {
          start() {
               setTimeout(() => {
                    this.active = true;
                    this.typeInterval = setInterval(this.type, this.typeSpeed);
               }, this.wait);
          },

          type() {
               if (this.wordIndex === this.wordLength) {
                    clearInterval(this.typeInterval);
                    this.active = this.infinity;
                    return;
               }

               if (this.lettersToWrap.indexOf(this.wordIndex) !== -1) {
                    this.text += `<span class="type-writer-first-letter">${
                         this.word[this.wordIndex]
                    }</span>`;
               } else {
                    this.text += this.word[this.wordIndex];
               }

               ++this.wordIndex;
          },
     },

     mounted() {
          this.start();
     },
};
</script>

<style scoped lang="scss">
.type-writer-current {
     overflow: hidden;
     border-right: 0.15em solid $mainColor;
     white-space: nowrap;
     margin: 0 auto;
     letter-spacing: 0.1em;
     animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
     from {
          width: 0;
     }
     to {
          width: 100%;
     }
}

@keyframes blink-caret {
     from,
     to {
          border-color: transparent;
     }
     50% {
          border-color: $mainColor;
     }
}
</style>

<style lang="scss">
.type-writer-first-letter {
     color: $mainColor;
}
</style>
