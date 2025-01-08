<template>
  <div class="silde-container">
    <VueSlickCarousel 
      :arrows="true" 
      :slidesToShow="5" 
      :slidesToScroll="5"
      :responsive="responsives"
      :infinite="false"
      :draggable="false"
      v-if="filteredMovies.length > 0"
    >
      <div v-for="slide in filteredMovies" :key="slide._id">
        <div class="slide-content">
          <a :href="'/movie/' + slide.slug">
            <img :src="'https://img.ophim.live/uploads/movies/' + slide.thumb_url" class="slide-image" />
            <p class="slide-name">{{ slide.name }}</p>
          </a>
        </div>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
  name: 'SliderComponent',
  components: { VueSlickCarousel },
  data() {
    return {
      responsives: [
        {
          "breakpoint": 1024,
          "settings": {
            "slidesToShow": 4,
            "slidesToScroll": 4,
          }
        },
        {
          "breakpoint": 800,
          "settings": {
            "slidesToShow": 3,
            "slidesToScroll": 3,
          }
        },
        {
          "breakpoint": 600,
          "settings": {
            "slidesToShow": 2,
            "slidesToScroll": 2
          }
        },
        {
          "breakpoint": 480,
          "settings": {
            "slidesToShow": 1,
            "slidesToScroll": 1
          }
        }
      ]
    };
  },
  props: {
    category: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    year: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    }
  },
  computed: {
    filteredMovies() {
      return this.isSeries ? this.seriesMoviesByFilter : this.singleMoviesByFilter;
    },
    seriesMoviesByFilter() {
      return this.$store.getters.getSeriesMoviesByFilter;
    },
    singleMoviesByFilter() {
      return this.$store.getters.getSingleMoviesByFilter;
    },
    isSeries() {
      return this.type === 'series';
    },
  },
  methods: {
    fetchMovies() {
      const action = this.isSeries
        ? 'getSeriesMoviesByFilter'
        : 'getSingleMoviesByFilter';
      const filterData = {
        category: this.category,
        country: this.country,
        year: this.year
      };

      const filteredMovies = this.isSeries ? this.seriesMoviesByFilter : this.singleMoviesByFilter;

      if (!filteredMovies || filteredMovies.length === 0) {
        this.$store.dispatch(action, filterData);
      }
    }
  },
  created() {
    this.fetchMovies();
  }
};
</script>

<style scoped>
.silde-container {
  width: 100%;
}

.slide-content {
  width: 100%;
  padding-right: 20px;
  box-sizing: border-box;
}

.slide-image {
  width: 100%;
  height: auto;
}

.slide-name {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: #fff;
}

::v-deep .slick-prev {
  top: -36px;
  left: auto;
  right: 75px;
}

::v-deep .slick-next {
  top: -36px;
  right: 31px;
}

::v-deep .slick-arrow::before {
  font-size: 35px !important;
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
</style>
