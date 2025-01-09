import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/Home.vue";
import MovieDetailView from "./views/MovieDetail.vue";
import BrowseView from "./views/Browse.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/movie/:slug",
      name: "MovieDetailView",
      component: MovieDetailView,
    },
    {
      path: "/browse",
      name: "BrowseView",
      component: BrowseView,
    },
  ],
});

export default router;
