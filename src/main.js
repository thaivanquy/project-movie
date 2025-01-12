import Vue from "vue";
import App from "./App.vue";
import "normalize.css";
import "./assets/styles/global.css";
import router from "./router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import store from "./store";
import Tabs from "element-ui";
import "element-ui/lib/theme-chalk/tabs.css";

Vue.config.productionTip = false;
Vue.use(Tabs);
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
