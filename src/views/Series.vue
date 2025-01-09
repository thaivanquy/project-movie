<template>
  <div class="series-container">
    <FilterComponent/>
    <LoadingComponent />
    <div class="series-list" v-if="!loading">
      <MovieComponent v-for="movie in moviesByFilter" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name" :slug="movie.slug" />
    </div>
  </div>
</template>

<script>
import FilterComponent from "../components/Filter.vue";
import MovieComponent from "../components/Movie.vue";
import LoadingComponent from "../components/Loading.vue";
export default {
  name: 'SeriesView',
  components: {
    FilterComponent,
    LoadingComponent,
    MovieComponent
  },
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    },
    moviesByFilter() {
      return this.$store.getters.getMoviesByFilter;
    }
  },
  created() {
    const filterData = {
      slugType: this.$route.query.type || "phim-bo",
      page: this.$route.query.page ?? 1,
      sortField: this.$route.query.sort || "",
      category: this.$route.query.genre || "",
      country: this.$route.query.country || "",
      year: this.$route.query.year || "",
    };

    this.$store.dispatch("getMoviesByFilter", filterData);
  },
}
</script>

<style>
.series-container {
  width: 100%;
  max-width: 1344px;
  margin: auto;
  padding: 24px 0 48px 0;
  box-sizing: border-box;
}

.series-list {
  margin-top: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}
</style>