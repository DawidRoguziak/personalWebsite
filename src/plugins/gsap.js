import Vue from 'vue';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {MorphSVGPlugin} from "gsap/MorphSVGPlugin";

gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

Vue.prototype.$gsap = gsap;