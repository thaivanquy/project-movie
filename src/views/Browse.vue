<template>
  <div class="browse-container">
    <FilterComponent @filter-changed="onFilterChanged" @update-display-mode="handleDisplayMode"/>
    <LoadingComponent />
    <div class="movies-list" v-if="!loading && this.displayMode == 'grid'">
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
  name: 'BrowseView',
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
    onFilterChanged(query) {
      this.$store.dispatch("getMoviesByFilter", query);
    },
    onPageChanged(query) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.$store.dispatch("getMoviesByFilter", query);
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
      slugType: this.$route.query.type || "",
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
.browse-container {
  width: 100%;
  max-width: 1344px;
  margin: auto;
  padding: 24px 0 48px 0;
  box-sizing: border-box;
}

.movies-list {
  margin-top: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

@media (max-width: 1407px) {
  .browse-container {
    padding: 48px;
  }

  .movies-list {
    grid-template-columns: repeat(3, 2fr);
  }
}

@media (max-width: 768px) {
  .browse-container {
    padding: 8px;
  }

  .movies-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>