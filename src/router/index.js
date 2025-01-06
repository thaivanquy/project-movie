import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/Home.vue";

Vue.use(Router);

const routes = [{ path: "/", name: "HomeView", component: HomeView }];

const router = new Router({
  mode: "history",
  routes,
});

export default router;
