import Vue from "vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/styles/global.css";
import router from "./router/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import store from "./store";
import Tabs from "element-ui";
import "element-ui/lib/theme-chalk/tabs.css";
import "video.js/dist/video-js.css";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;
Vue.use(Tabs);
Vue.use(VueMeta);
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
