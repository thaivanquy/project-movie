<template>
  <div class="browse-container">
    <FilterComponent @filter-changed="onFilterChanged" @update-display-mode="handleDisplayMode" :displayMode="displayMode"/>
    <LoadingComponent />
    <div class="movies-list" v-if="!loading && this.displayMode !== 'flex'">
      <MovieComponent v-for="movie in moviesByFilter.items" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name" :slug="movie.slug" />
    </div>
    <div v-if="!loading && this.displayMode !== 'grid'">
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
  name: 'BrowseFlex',
  data() {
    return {
      displayMode: 'flex',
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
    buildFilterData(page = 1) {
      const type = this.$route.params.type;
      const value = this.$route.params.value;

      const filterData = {
        slugType: "",
        page,
        sortField: "",
        category: type == "genren" ? value : "",
        country: type == "country" ? value : "",
        year: type == "year" ? value : "",
      };

      return filterData;
    },
    fetchApi() {
      const filterData = this.buildFilterData();
      this.$store.dispatch("getMoviesByFilter", filterData);
    },
    onFilterChanged(query) {
      this.$store.dispatch("getMoviesByFilter", query);
    },
    onPageChanged(query) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      this.$store.dispatch("getMoviesByFilter", this.buildFilterData(query.page));
    },
    handleDisplayMode(view) {
      this.displayMode = view;
			console.log(this.displayMode);
    },
  },
	watch: {
    '$route.params': 'fetchApi',
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
		this.fetchApi();
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
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 1407px) {
  .browse-container {
    padding: 48px;
  }
}

@media (max-width: 768px) {
  .browse-container {
    padding: 8px;
  }
}
</style>