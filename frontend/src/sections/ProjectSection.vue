<template>
     <section id="projects">
          <v-row class="relative full-vh about-me-section">
               <div ref="projectSectionMask" class="project-section-mask">
                    <div class="center-item">
                         <pulsating-dot
                              @iconClicked="showProjects"
                         ></pulsating-dot>
                    </div>
               </div>
               <v-col cols="12">
                    <div
                         class="projects-grid-container full-vh padding-0 relative"
                    >
                         <div ref="projectText" class="project-text">
                              <s-v-g-ellipse
                                   class="center-item"
                                   :id="'section-title-background'"
                              ></s-v-g-ellipse>
                              <s-v-g-projects
                                   class="center-item"
                                   :id="'section-title'"
                              />
                         </div>

                         <s-v-g-project-item
                              elem-id="dkrHexLoader"
                              :svg-style="getStyleForSvg('center')"
                              :title="'DKRHexLoader'"
                              :sub-text="'Simple script to add hex loader to page'"
                              :link="'https://github.com/DawidRoguziak/DKRHexLoader'"
                         ></s-v-g-project-item>

                         <s-v-g-project-item
                              elem-id="solScrapper"
                              :svg-style="
                                   getStyleForSvg('flex-end') +
                                   'cursor: not-allowed;'
                              "
                              :title="'SolScrapper'"
                              :sub-text="'Work in progres'"
                         ></s-v-g-project-item>
                    </div>
               </v-col>
          </v-row>
     </section>
</template>

<script>
import SVGProjects from "../components/svg/SVGProjects";
import SVGEllipse from "../components/svg/SVGEllipse";
import SVGProjectItem from "../components/svg/SVGProjectItem";
import PulsatingDot from "../components/PulsatingDot";

export default {
     name: "ProjectSection",
     components: { PulsatingDot, SVGProjectItem, SVGEllipse, SVGProjects },

     data() {
          return {
               timeline: null,
               dkrHexLoader: null,
               solScrapper: null,
               projectTextRect: null,
               dkrHexLoaderRect: null,
               solScrapperRect: null,
          };
     },

     mounted() {
          this.initGsap();
     },

     methods: {
          initGsap() {
               this.timeline = this.$gsap.timeline({
                    defaults: { ease: "power4.inOut" },
               });
               this.dkrHexLoader = document.querySelector("#dkrHexLoader");
               this.solScrapper = document.querySelector("#solScrapper");
               this.projectTextRect = this.$refs.projectText.getBoundingClientRect();
               this.dkrHexLoaderRect = this.dkrHexLoader.getBoundingClientRect();
               this.solScrapperRect = this.solScrapper.getBoundingClientRect();
          },

          showProjects() {
               this.timeline
                    .to(this.$refs.projectSectionMask, {
                         opacity: 0,
                         duration: 1.5,
                         display: "none",
                    })
                    .to(this.$refs.projectText, { opacity: 1, duration: 0.5 })
                    .to(this.dkrHexLoader, {
                         opacity: 1,
                         duration: 1,
                    })
                    .to(this.solScrapper, {
                         opacity: 1,
                         duration: 1,
                    });
          },

          getStyleForSvg(alignSelf) {
               return `
                width: 250px;
                opacity: 0;
                align-self: ${alignSelf};
                `;
          },
     },
};
</script>

<style scoped lang="scss">
#projects > div {
     background-image: $backgroundGradient;
}

.project-section-mask {
     background: $backgroundColor;
     position: absolute;
     width: 100%;
     height: 100%;
     z-index: 1000;
}

.projects-grid-container {
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     justify-content: space-around;
}

#section-title,
#section-title-background {
     width: 18rem;
}

#section-title {
     width: 15rem;
}

.project-text {
     position: relative;
     flex-grow: 1;
     opacity: 0;
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
