<template>
  <div class="new-container">
    <FilterComponent @update-display-mode="handleDisplayMode" :displayMode="displayMode"/>
    <LoadingComponent />
    <div class="new-list" v-if="!loading && this.displayMode == 'grid'">
      <MovieComponent v-for="movie in moviesByFilter.items" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name" :slug="movie.slug" />
    </div>
    <div v-if="!loading && this.displayMode == 'flex'">
      <MovieFlexComponent v-for="movie in moviesByFilter.items" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name" :slug="movie.slug" :time="movie.time" :country="movie?.country" :category="movie?.category" :rate="movie.tmdb?.vote_average" :year="movie?.year"/>
    </div>
    <PaginationComponent :totalPage="Math.floor(moviesByFilter?.params?.pagination?.totalItems / moviesByFilter?.params?.pagination?.totalItemsPerPage)" :currentPage="currentPage" v-show="!loading" @page-changed="onPageChanged" />
  </div>
</template>

<script>
import FilterComponent from "../components/Filter.vue";
import MovieComponent from "../components/Movie.vue";
import LoadingComponent from "../components/Loading.vue";
import PaginationComponent from "../components/Pagination.vue";
import MovieFlexComponent from "../components/MovieFlex.vue";
export default {
  name: 'NewView',
  data() {
    return {
      displayMode: 'grid',
    };
  },
  components: {
    FilterComponent,
    LoadingComponent,
    MovieComponent,
    PaginationComponent,
    MovieFlexComponent
  },
  methods: {
    onPageChanged(query) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      const updatedQuery = {
        ...query,
        slugType: "phim-moi"
      };
      this.$store.dispatch("getMoviesByFilter", updatedQuery);
    },
    handleDisplayMode(view) {
      this.displayMode = view;
    },
  },
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    },
    moviesByFilter() {
      return this.$store.getters.getMoviesByFilter;
    },
    currentPage() {
      return this.moviesByFilter?.params?.pagination?.currentPage || 1;
    }
  },
  created() {
    const filterData = {
      slugType: this.$route.query.type || "phim-moi",
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

<style scoped>
.new-container {
  width: 100%;
  max-width: 1344px;
  margin: auto;
  padding: 24px 0 48px 0;
  box-sizing: border-box;
}

.new-list {
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 1407px) {
  .new-container {
    padding: 48px;
  }
}

@media (max-width: 768px) {
  .new-container {
    padding: 8px;
  }
}
</style>