import Vue from "vue";

const emailService = {
     sendEmail(postData = {}) {
          return Vue.prototype.$axios.post("/api/email", postData);
     },
};

Vue.prototype.$emailService = emailService;
