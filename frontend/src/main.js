import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import "./plugins/gsap";
import "./plugins/veeValidate";
import "./plugins/axios";
import "./api/emailService";
import "./plugins/notifications"

Vue.config.productionTip = false;

Vue.prototype.$reCaptcha = {
     publicKey: '6Le3fNAZAAAAANgQHGbcvJ84uIm6_r5rCkfAAWNM'
}

new Vue({
     vuetify,
     render: (h) => h(App),
}).$mount("#app");
