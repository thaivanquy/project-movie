<template>
  <div class="silde-container">
    <VueSlickCarousel 
      :arrows="true" 
      :slidesToShow="5" 
      :slidesToScroll="5"
      :responsive="responsives"
      :infinite="false"
      :draggable="false"
      v-if="moviesByFilter?.items?.length > 0"
    >
      <div v-for="slide in moviesByFilter?.items" :key="slide._id">
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
    moviesByFilter: {
      type: [Array, Object],
      required: true
    }
  },
  computed: {

  },
  methods: {

  },
  created() {
    
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
  width: 35px;
  height: 35px;
  top: -31px;
  left: auto;
  right: 60px;
}

::v-deep .slick-next {
  width: 35px;
  height: 35px;
  top: -31px;
  right: 15px;
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
