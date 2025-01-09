<template>
  <div class="home__container-filter">
      <div class="home__container-filter-item">
        <label for="">Loại phim:</label>
        <select class="form-select" v-model="selectedType" @change="handleFilter">
          <option value="" selected>- Tất cả -</option>
          <option v-for="(typeMovie, index) in typeMovies" :key="index" :value="index">{{ typeMovie }}</option>
        </select>
      </div>
      <div class="home__container-filter-item">
        <label for="">Thể loại:</label>
        <select class="form-select" v-model="selectedCategory" @change="handleFilter">
          <option value="" selected>- Tất cả -</option>
          <option v-for="(categoryMovie, index) in categoryMovies" :key="index" :value="index">{{ categoryMovie }}</option>
        </select>
      </div>
      <div class="home__container-filter-item">
        <label for="">Quốc gia:</label>
        <select class="form-select" v-model="selectedNation" @change="handleFilter">
          <option value="" selected>- Tất cả -</option>
          <option v-for="(nationMovie, index) in nationMovies" :key="index" :value="index">{{ nationMovie }}</option>
        </select>
      </div>
      <div class="home__container-filter-item">
        <label for="">Năm:</label>
        <select class="form-select" v-model="selectedTime" @change="handleFilter">
          <option value="" selected>- Tất cả -</option>
          <option v-for="(timeMovie, index) in timeMovies" :key="index" :value="index">{{ timeMovie }}</option>
        </select>
      </div>
      <div class="home__container-filter-item">
        <label for="">Sắp xếp:</label>
        <select class="form-select" v-model="selectedArrange" @change="handleFilter">
          <option value="" selected>Ngày phát hành</option>
          <option v-for="(arrangeMovie, index) in arrangeMovies" :key="index" :value="index">{{ arrangeMovie }}</option>
        </select>
      </div>
  </div>
</template>

<script>
import { typeMovies, categoryMovies, nationMovies , timeMovies, arrangeMovies } from '../common/index.js';
export default {
  name: 'FilterComponent',
  data() {
    return {
      typeMovies: typeMovies,
      categoryMovies: categoryMovies,
      nationMovies: nationMovies,
      timeMovies: timeMovies,
      arrangeMovies: arrangeMovies,
      selectedType: this.$route.query.type || "",
      page: this.$route.query.page || 1,
      selectedCategory: this.$route.query.genre || "",
      selectedNation: this.$route.query.country || "",
      selectedTime: this.$route.query.year || "",
      selectedArrange: this.$route.query.sort || "",
    };
  },
  methods: {
    handleFilter() {
      const query = { ...this.$route.query };

      if (this.selectedType === "") {
        delete query.type;
      } else {
        query.type = this.selectedType;
      }

      if (this.selectedCategory === "") {
        delete query.genre;
      } else {
        query.genre = this.selectedCategory;
      }

      if (this.selectedNation === "") {
        delete query.country;
      } else {
        query.country = this.selectedNation;
      }

      if (this.selectedTime === "") {
        delete query.year;
      } else {
        query.year = this.selectedTime;
      }

      if (this.selectedArrange === "") {
        delete query.sort;
      } else {
        query.sort = this.selectedArrange;
      }

      this.$router.push(
      {   
        name: 'BrowseView', 
        query: query  
      });

      const queryChanged = {
        slugType: this.selectedType,
        page: this.$route.query.page || 1,
        sortField: this.selectedArrange,
        category: this.selectedCategory,
        country: this.selectedNation,
        year: this.selectedTime,
      }

      this.$emit("filter-changed", queryChanged);
    }
  },
}
</script>

<style>
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

</style>