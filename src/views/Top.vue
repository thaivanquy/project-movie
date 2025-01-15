<template>
  <div class="top__container">
    <h1 class="top__head">
      Top phim được xem nhiều nhất
    </h1>
    <el-tabs v-model="activeTab">
      <el-tab-pane label="PHIM BỘ" name="first">
        <div class="top__list">
          <MovieComponent v-for="movie in seriesTop.items" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name" :slug="movie.slug" />
        </div>
      </el-tab-pane>
      <el-tab-pane label="PHIM LẺ" name="second">
        <div class="top__list">
          <MovieComponent v-for="movie in singleTop.items" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name" :slug="movie.slug" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MovieComponent from "../components/Movie.vue";
export default {
  name: 'TopView',
  components: {
    MovieComponent,
  },
  data() {
    return {
      activeTab: 'first',
      slugTypeSeries: 'phim-bo',
      slugTypeSingle: 'phim-le',
      sortField: 'view',
      year: '2024',
      isTop: true
    };
  },
  computed: {
    seriesTop() {
      return this.$store.getters.seriesMovies;
    },
    singleTop() {
      return this.$store.getters.singleMovies;
    }
  },
  methods: {
    fetchMovies(slugType) {
      const filterData = {
        slugType,
        page: this.$route.query.page ?? 1,
        sortField: this.sortField,
        category: this.$route.query.genre || "",
        country: this.$route.query.country || "",
        year: this.year,
        isTop: this.isTop
      };
      this.$store.dispatch("getMoviesByTop", filterData);
    },
  },
  created() {
    this.fetchMovies(this.slugTypeSeries);
    this.fetchMovies(this.slugTypeSingle);
  },
}
</script>

<style>
.top__container {
  width: 100%;
  max-width: 1344px;
  margin: auto;
  padding: 24px 0 48px 0;
  box-sizing: border-box;
}

.top__head {
  font-size: 32px;
  font-weight: 500;
  line-height: 36px;
  color: rgb(255, 255, 255);
  text-align: center;
  margin-bottom: 24px;
}

.el-tabs__nav-wrap::after {
  background-color: transparent !important;
}

.el-tabs__nav-scroll {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0b1e2f !important;
  height: 48px !important;
}

.el-tabs__item {
  width: 160px !important;
  font-size: 17px !important;
  font-weight: 500 !important;
  line-height: 20px !important;
  color: #fff !important;
  padding: 7px 16px !important;
  text-align: center;
}

.el-tabs__item.is-active {
  color: rgb(25, 118, 210) !important;
}

.top__list {
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 1407px) {
  .top__container {
    padding: 48px;
  }
}

@media (max-width: 768px) {
  .top__container {
    padding: 8px;
  }
}
</style>