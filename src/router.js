import Vue from "vue";
import Router from "vue-router";
import HomeView from "./views/Home.vue";
import MovieDetailView from "./views/MovieDetail.vue";
import BrowseView from "./views/Browse.vue";
import SeriesView from "./views/Series.vue";
import SingleView from "./views/Single.vue";
import NewView from "./views/New.vue";
import SearchView from "./views/Search.vue";
import FaqView from "./views/Faq.vue";
import TopView from "./views/Top.vue";

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
    {
      path: "/series",
      name: "SeriesView",
      component: SeriesView,
    },
    {
      path: "/single",
      name: "SingleView",
      component: SingleView,
    },
    {
      path: "/new",
      name: "NewView",
      component: NewView,
    },
    {
      path: "/seach",
      name: "SearchView",
      component: SearchView,
    },
    {
      path: "/faqs",
      name: "FaqView",
      component: FaqView,
    },
    {
      path: "/top",
      name: "TopView",
      component: TopView,
    },
  ],
});

export default router;
