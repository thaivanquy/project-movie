<template>
  <div class="new-container">
    <FilterComponent/>
    <LoadingComponent />
    <div class="new-list" v-if="!loading">
      <MovieComponent v-for="movie in moviesByFilter.items" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name" :slug="movie.slug" />
    </div>
    <PaginationComponent :totalPage="Math.floor(moviesByFilter.params.pagination.totalItems / moviesByFilter.params.pagination.totalItemsPerPage)" :currentPage="currentPage" v-show="!loading" @page-changed="onPageChanged" />
  </div>
</template>

<script>
import FilterComponent from "../components/Filter.vue";
import MovieComponent from "../components/Movie.vue";
import LoadingComponent from "../components/Loading.vue";
import PaginationComponent from "../components/Pagination.vue";
export default {
  name: 'NewView',
  components: {
    FilterComponent,
    LoadingComponent,
    MovieComponent,
    PaginationComponent
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

<style>
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
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

@media (max-width: 1407px) {
  .new-container {
    padding: 48px;
  }

  .new-list {
    grid-template-columns: repeat(3, 2fr);
  }
}

@media (max-width: 768px) {
  .new-container {
    padding: 8px;
  }

  .new-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>