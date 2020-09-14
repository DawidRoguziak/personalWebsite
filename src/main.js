import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import './plugins/gsap';
import './plugins/veeValidate';

Vue.config.productionTip = false

import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBikiy84cgiB1ZDFUUs7HRr6-V58-lcumM",
  authDomain: "my-site-5a2d0.firebaseapp.com",
  databaseURL: "https://my-site-5a2d0.firebaseio.com",
  projectId: "my-site-5a2d0",
  storageBucket: "my-site-5a2d0.appspot.com",
  messagingSenderId: "260070785378",
  appId: "1:260070785378:web:1337e31e0b0e6636082c3b"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
