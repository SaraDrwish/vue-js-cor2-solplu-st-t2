import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/////
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
///
////
// import "bootstrap";
// import "bootstrap/dist/css/bootstrap.main.css";
////
/////
import "normalize.css";
import "./assets/scss/main.scss";
///

import "./filters/shorten";

Vue.config.productionTip = false;

////

Vue.use(BootstrapVue);
///

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
