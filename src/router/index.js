import Vue from "vue";
import Router from "vue-router";
import HomeView from "../views/Home.vue";
import MovieDetailView from "../views/MovieDetail.vue";
import BrowseView from "../views/Browse.vue";
import SeriesView from "../views/Series.vue";
import SingleView from "../views/Single.vue";
import NewView from "../views/New.vue";
import SearchView from "../views/Search.vue";
import FaqView from "../views/Faq.vue";
import TopView from "../views/Top.vue";
import WatchView from "../views/Watch.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
      meta: {
        title: "Xem phim online chất lượng cao",
      },
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
      meta: {
        title: "Phim bộ | Phim bộ hay tuyển chọn",
      },
    },
    {
      path: "/single",
      name: "SingleView",
      component: SingleView,
      meta: {
        title: "Phim lẻ | Phim lẻ hay tuyển chọn",
      },
    },
    {
      path: "/new",
      name: "NewView",
      component: NewView,
      meta: {
        title: "Phim mới | Phim mới hay tuyển chọn",
      },
    },
    {
      path: "/seach",
      name: "SearchView",
      component: SearchView,
      meta: {
        title: "Tìm kiếm phim",
      },
    },
    {
      path: "/faqs",
      name: "FaqView",
      component: FaqView,
      meta: {
        title: "Câu hỏi thường gặp - FAQ",
      },
    },
    {
      path: "/top",
      name: "TopView",
      component: TopView,
      meta: {
        title: "Phim hot, Top phim xem nhiều nhất",
      },
    },
    {
      path: "/watch/:slug",
      name: "WatchView",
      component: WatchView,
    },
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "Xem phim online chất lượng cao";
  }
  next();
});

export default router;
