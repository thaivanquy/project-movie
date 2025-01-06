<template>
  <div class="home__container">
    <div class="home__container-filter">
        <div class="home__container-filter-item">
          <label for="">Loại phim:</label>
          <select class="form-select">
            <option selected>- Tất cả -</option>
            <option v-for="(typeMovie, index) in typeMovies" :key="index" :value="index">{{ typeMovie }}</option>
          </select>
        </div>
        <div class="home__container-filter-item">
          <label for="">Thể loại:</label>
          <select class="form-select">
            <option selected>- Tất cả -</option>
            <option v-for="(categoryMovie, index) in categoryMovies" :key="index" :value="index">{{ categoryMovie }}</option>
          </select>
        </div>
        <div class="home__container-filter-item">
          <label for="">Quốc gia:</label>
          <select class="form-select">
            <option selected>- Tất cả -</option>
            <option v-for="(nationMovie, index) in nationMovies" :key="index" :value="index">{{ nationMovie }}</option>
          </select>
        </div>
        <div class="home__container-filter-item">
          <label for="">Năm:</label>
          <select class="form-select">
            <option selected>- Tất cả -</option>
            <option v-for="(timeMovie, index) in timeMovies" :key="index" :value="index">{{ timeMovie }}</option>
          </select>
        </div>
        <div class="home__container-filter-item">
          <label for="">Sắp xếp:</label>
          <select class="form-select">
            <option selected>Ngày phát hành</option>
            <option v-for="(arrangeMovie, index) in arrangeMovies" :key="index" :value="index">{{ arrangeMovie }}</option>
          </select>
        </div>
    </div>
    <section class="nomination__section">
      <h2 class="nomination__head">
        PHIM ĐỀ CỬ
      </h2>
      <div v-if="loading">Đang tải dữ liệu...</div>
      <div class="nomination__list" v-if="!loading">
        <MovieComponent v-for="movie in recommendedMovies" :key="movie.id" :thumbUrl="movie.thumb" :nameVi="movie.name_vi" :nameEn="movie.name_en" />
      </div>
    </section>
    <section class="newly__section">
      <div class="newly__wrapper">
        <h2 class="newly__head">
          <span>
            PHIM LẺ MỚI CẬP NHẬT
          </span>
        </h2>
        <a href="" class="newly__link">
          Xem tất cả
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg></span>
        </a>
      </div>
      <div v-if="loading">Đang tải dữ liệu...</div>
      <div class="newly__list" v-if="!loading">
        <MovieComponent v-for="movie in seriesMovies.slice(0, 10)" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name"  />
      </div>
    </section>
    <section class="newly__section">
      <div class="newly__wrapper">
        <h2 class="newly__head">
          <span>
            PHIM BỘ MỚI CẬP NHẬT
          </span>
        </h2>
        <a href="" class="newly__link">
          Xem tất cả
          <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg></span>
        </a>
      </div>
      <div class="newly__list">
        <MovieComponent v-for="movie in singleMovies.slice(0, 10)" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name"  />
      </div>
    </section>
  </div>
</template>

<script>
import MovieComponent from "../components/Movie.vue";
import { typeMovies, categoryMovies, nationMovies , timeMovies, arrangeMovies } from '../common/index.js';
export default {
  name: 'HomeView',
  components: {
    MovieComponent,
  },
  data() {
    return {
      typeMovies: typeMovies,
      categoryMovies: categoryMovies,
      nationMovies: nationMovies,
      timeMovies: timeMovies,
      arrangeMovies: arrangeMovies,
    };
  },
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    },
    recommendedMovies() {
      return this.$store.getters.recommendedMovies;
    },
    seriesMovies() {
      return this.$store.getters.seriesMovies;
    },
    singleMovies() {
      return this.$store.getters.singleMovies;
    },
  },
  watch: {

  },
  methods: {
    
  },
  created() {
    this.$store.dispatch("fetchRecommendedMovies");
    this.$store.dispatch("fetchSeriesMovies");
    this.$store.dispatch("fetchSingleMovies");
  },
}
</script>

<style>
.home__container {
  width: 100%;
  max-width: 1344px;
  margin: auto;
  padding: 24px 0 48px 0;
  box-sizing: border-box;
}

.home__container-filter {
  background-color: #091c2d;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.home__container-filter-item {
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 12px;
  box-sizing: border-box;
}

.home__container-filter-item label {
  margin-bottom: 8px;
}

.home__container-filter-item select {
  cursor: pointer;
}

.nomination__section,
.newly__section {
  margin-top: 32px;
}

.nomination__head {
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: rgb(177, 162, 30);
  line-height: 36px;
  margin-bottom: 8px;
  border-bottom: 1px solid #283949;
}

.nomination__list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.newly__wrapper {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #283949;
  margin-bottom: 8px;
}

.newly__head {
  font-family: 'Oswald', sans-serif;
  font-size: 24px;
  font-weight: 400;
  color: rgb(177, 162, 30);
  line-height: 36px;
  margin-bottom: 8px;
}
.newly__list {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.newly__link {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 400;
  color: rgb(204, 204, 204) !important;
  line-height: 30px;
}

.newly__link svg {
  width: 25px;
  height: 25px;
  fill: #fff;
}

@media (max-width: 1407px) {
  .home__container {
    padding: 48px;
  }

  .nomination__list,
  .newly__list {
    grid-template-columns: repeat(3, 2fr);
  }
}

@media (max-width: 768px) {
  .home__container-filter {
    padding: 8px;
  }

  .home__container-filter-item {
    padding-right: 8px;
  }

  .home__container {
    padding: 8px;
  }

  .home__container-filter {
    grid-template-columns: repeat(2, 3fr);
  }

  .nomination__list,
  .newly__list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>