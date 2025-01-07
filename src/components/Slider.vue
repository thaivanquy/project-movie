<template>
  <div class="silde-container">
    <VueSlickCarousel 
      :arrows="true" 
      :slidesToShow="5" 
      :slidesToScroll="5"
      :responsive="responsives"
    >
      <div v-for="slide in slides" :key="slide.id">
        <div class="slide-content">
          <a href="">
            <img :src="slide.url" class="slide-image" />
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
      slides: [
        {
          id: 1,
          url: 'https://img.ophim.live/uploads/movies/solo-leveling-phan-2-vung-len-tu-bong-toi-tbc-thumb.jpg',
          name: 'Solo Leveling Phần 2 - Vươn Lên Từ Bóng Tối (TBC)'
        },
        {
          id: 2,
          url: 'https://img.ophim.live/uploads/movies/solo-leveling-phan-2-vung-len-tu-bong-toi-tbc-thumb.jpg',
          name: 'Solo Leveling Phần 2 - Vươn Lên Từ Bóng Tối (TBC)'
        },
        {
          id: 3,
          url: 'https://img.ophim.live/uploads/movies/solo-leveling-phan-2-vung-len-tu-bong-toi-tbc-thumb.jpg',
          name: 'Solo Leveling Phần 2 - Vươn Lên Từ Bóng Tối (TBC)'
        },
        {
          id: 4,
          url: 'https://img.ophim.live/uploads/movies/solo-leveling-phan-2-vung-len-tu-bong-toi-tbc-thumb.jpg',
          name: 'Solo Leveling Phần 2 - Vươn Lên Từ Bóng Tối (TBC)'
        },
        {
          id: 5,
          url: 'https://img.ophim.live/uploads/movies/solo-leveling-phan-2-vung-len-tu-bong-toi-tbc-thumb.jpg',
          name: 'Solo Leveling Phần 2 - Vươn Lên Từ Bóng Tối (TBC)'
        },
        {
          id: 6,
          url: 'https://img.ophim.live/uploads/movies/solo-leveling-phan-2-vung-len-tu-bong-toi-tbc-thumb.jpg',
          name: 'Solo Leveling Phần 2 - Vươn Lên Từ Bóng Tối (TBC)'
        },
        {
          id: 7,
          url: 'https://img.ophim.live/uploads/movies/solo-leveling-phan-2-vung-len-tu-bong-toi-tbc-thumb.jpg',
          name: 'Solo Leveling Phần 2 - Vươn Lên Từ Bóng Tối (TBC)'
        },
        {
          id: 8,
          url: 'https://img.ophim.live/uploads/movies/solo-leveling-phan-2-vung-len-tu-bong-toi-tbc-thumb.jpg',
          name: 'Solo Leveling Phần 2 - Vươn Lên Từ Bóng Tối (TBC)'
        },
        {
          id: 9,
          url: 'https://img.ophim.live/uploads/movies/solo-leveling-phan-2-vung-len-tu-bong-toi-tbc-thumb.jpg',
          name: 'Solo Leveling Phần 2 - Vươn Lên Từ Bóng Tối (TBC)'
        },
        {
          id: 10,
          url: 'https://img.ophim.live/uploads/movies/solo-leveling-phan-2-vung-len-tu-bong-toi-tbc-thumb.jpg',
          name: 'Solo Leveling Phần 2 - Vươn Lên Từ Bóng Tối (TBC)'
        },
      ],
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
