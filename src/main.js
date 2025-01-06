import Vue from "vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/styles/global.css";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
