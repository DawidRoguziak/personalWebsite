import Vue from 'vue';
import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

Vue.prototype.$gsap = gsap;