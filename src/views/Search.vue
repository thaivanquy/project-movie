<template>
  <div class="seach__container" >
    <div class="search__wrapper">
      <input type="text" class="search__input" placeholder="Nhập tên phim..." @keyup="handleKeyup">
    </div>
    <div class="search__list" v-if="!loading">
      <MovieComponent v-for="movie in searchMovies.items" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name" :slug="movie.slug" />
    </div>
  </div>
</template>

<script>
import MovieComponent from "../components/Movie.vue";
export default {
  name: "SearchView",
  components: {
    MovieComponent,
  },
  methods: {
    handleKeyup(event) {
      if (event.target.value.trim() == '') {
        this.$store.dispatch("searchMovies");
      } else {
        this.$store.dispatch("searchMovies", event.target.value);
      }
    }
  },
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    },
    searchMovies() {
      return this.$store.getters.searchMovies;
    }
  }
}
</script>

<style>
.seach__container {
  width: 100%;
  max-width: 1344px;
  margin: auto;
  padding: 24px 0 48px 0;
  box-sizing: border-box;
}

.search__wrapper {
  padding: 8px;
}

.search__input {
  background-color: #fff;
  border-color: #dbdbdb;
  border-radius: 4px;
  box-shadow: inset 0 .0625em .125em #0a0a0a0d;
  color: #363636;
  max-width: 100%;
  min-height: 50px;
  padding: 9px 14px;
  width: 100%;
}

.search__list {
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

@media (max-width: 1407px) {
  .seach__container {
    padding: 48px;
  }
}

@media (max-width: 768px) {
  .seach__container {
    padding: 8px;
  }
}
</style>