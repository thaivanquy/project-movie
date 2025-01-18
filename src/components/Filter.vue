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
      <div class="home__container-filter-item" v-if="$route.name !== 'HomeView'">
        <label for="">Hiển thị:</label>
        <div class="view__list">
          <div class="view__item" @click="handleToggleView('grid')" :class="{ active: displayMode == 'grid' }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z"></path></svg>
          </div>
          <div class="view__item" @click="handleToggleView('flex')" :class="{ active: displayMode == 'flex' }">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { typeMovies, categoryMovies, nationMovies , timeMovies, arrangeMovies } from '../common/index.js';
export default {
  name: 'FilterComponent',
  props: {
    displayMode: { 
      type: String,
      default: 'grid'
    }
  },
  data() {
    return {
      typeMovies: typeMovies,
      categoryMovies: categoryMovies,
      nationMovies: nationMovies,
      timeMovies: timeMovies,
      arrangeMovies: arrangeMovies,
      selectedType: this.$route.query.type || "",
      page: this.$route.query.page || 1,
      selectedCategory: this.getSelectedCategory(),
      selectedNation: this.getSelectedNation(),
      selectedTime: this.getSelectedTime(),
      selectedArrange: this.$route.query.sort || "",
    };
  },
  watch: {
    '$route'() {
      this.selectedCategory = this.getSelectedCategory();
      this.selectedNation = this.getSelectedNation();
      this.selectedTime = this.getSelectedTime();
    },
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
    },
    handleToggleView(viewMode) {
      this.$emit("update-display-mode", viewMode);
    },
    getSelectedCategory() {
      return this.$route.query.genre || (this.$route.params.type === "genren" ? this.$route.params.value : "") || "";
    },
    getSelectedNation() {
      return this.$route.query.country || (this.$route.params.type === "country" ? this.$route.params.value : "") || "";
    },
    getSelectedTime() {
      return this.$route.query.year || (this.$route.params.type === "year" ? this.$route.params.value : "") || "";
    },
  },
}
</script>

<style scoped>
.home__container-filter {
  background-color: #091c2d;
  display: grid;
  grid-template-columns: repeat(5, 1fr) auto;
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

.home__container-filter-item:last-child {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.view__list {
  display: flex;
}

.view__list .view__item {
  cursor: pointer;
}

.view__list .view__item svg {
  height: 31px;
  fill: #7a7a7b;
  padding: 3px;
}

.view__list .view__item:not(:last-child) {
  margin-right: 5px !important;
}

.view__item.active > svg {
  fill: #fff;
}

@media (max-width: 768px) {
  .home__container-filter {
    padding: 8px;
  }

  .home__container-filter-item {
    padding-right: 8px;
  }

  .home__container-filter {
    grid-template-columns: repeat(2, 3fr);
  }
}

</style>