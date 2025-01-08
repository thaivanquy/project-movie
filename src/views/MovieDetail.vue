<template>
  <div>
    <LoadingComponent />
    <div class="movie__container" v-if="!loading">
      <div class="movie__poster" :style="{
          backgroundImage: 'url(' + posterUrl + ')'
        }"></div>
      <div class="movie__info">
        <div class="movie__info-img">
          <img :src="imageUrl" :alt="this.slug">
          <a href="" class="btn btn-danger btn-watch"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>XEM PHIM</a>
        </div>
        <div class="movie__info-detail">
          <h1 class="movie__info-title">
            {{ movie.origin_name }}
          </h1>
          <h2 class="movie__info-sub">
            {{ movie.name }}
            <a href="" class="movie__info-sub-link">({{ movie.year }})</a>
          </h2>
          <div class="movie__info-episode-list">
            <span class="movie__info-episode-duration">
              {{ movie.time }}
            </span>
            <span class="movie__info-episode-completed"  v-if="isSeries">
              {{ movie.episode_current }} / {{ movie.episode_total }}
            </span>
            <span class="movie__info-episode-completed" v-if="!isSeries">
              {{ movie.episode_current }} {{ movie.quality }}
            </span>
          </div>
          <div class="movie__info-rate-list">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z" fill="#ffc107"></path><path d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z" fill="#263238"></path></svg>
            <span class="movie__info-rate-text">
              {{ movie.tmdb?.vote_average }}
            </span>
          </div>
          <div class="movie__info-button-wrapper">
            <div class="movie__info-action-list">
              <button class="btn btn-sm btn-share-facbook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg>
                <span>Chia sẻ</span>
              </button>
              <button class="btn btn-sm btn-outline-primary btn-add-collection">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                <span>Bộ sưu tập</span>
              </button>
            </div>
            <div class="movie__info-category-list">
              <a href="" class="border border-white rounded-pill btn-category" v-for="category in movie.category" :key="category.id">{{ category.name }}</a>
            </div>
          </div>
          <div class="movie__info-horizontal">
            <div class="movie__info-horizontal-list">
              <div class="movie__info-horizontal-item">
                <span class="movie__info-horizontal-title">ĐẠO DIỄN</span>
                <span v-for="(director, index) in movie.director" :key="director.id">
                  <a href="" class="movie__info-horizontal-text">{{ director }}<span v-if="index !== movie.director.length - 1">, </span></a>
                </span>
                <span v-if="movie.director ==''" class="movie__info-horizontal-text-no">Đang cập nhật...</span>
              </div>
              <div class="movie__info-horizontal-item">
                <span class="movie__info-horizontal-title">QUỐC GIA</span>
                <span v-for="(country, index) in movie.country" :key="country.id">
                  <a href="" class="movie__info-horizontal-text">{{ country.name }}<span v-if="index !== movie.country.length - 1">, </span></a>
                </span>
                <span v-if="movie.country ==''" class="movie__info-horizontal-text-no">Đang cập nhật...</span>
              </div>
              <div class="movie__info-horizontal-item">
                <span class="movie__info-horizontal-title">DIỄN VIÊN</span>
                <span v-for="(actor, index) in movie.actor" :key="actor.id">
                  <a v-if="actor.name !== ''" href="" class="movie__info-horizontal-text">{{ actor }}<span v-if="index !== movie.actor.length - 1">, </span></a>
                </span>
                <span v-if="movie.actor ==''" class="movie__info-horizontal-text-no">Đang cập nhật...</span>
              </div>
            </div>
          </div>
          <div class="movie__info-des">
            <p v-html="movie.content">
            </p>
          </div>
          <h3 class="movie__info-trailer-head">
            Trailer
          </h3>
          <div class="movie__info-trailer" @click="handleOpenModal">
            <img :src="thumbnailUrl" alt="" v-if="movie.trailer_url">
            <div class="movie__info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
            </div>
          </div>
          <ModalTrailerComponent :isShow="isShow" @update:isShow="isShow = $event" :trailerUrl="trailerUrl"/>
          <h3 class="movie__info-similar-head">
            Phim tương tự
          </h3>
          <SliderComponent :category="filterMovies.category" :country="filterMovies.country" :year="filterMovies.year" :type="filterMovies.type" :slugType="filterMovies.slugType"/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import SliderComponent from '../components/Slider.vue';
import { getYouTubeThumbnail, getTrailerURL } from '../utils/common.js';
import ModalTrailerComponent from '../components/ModalTrailer.vue';
import LoadingComponent from "../components/Loading.vue";

export default {
  name: "MovieDetailView",
  components: {
    SliderComponent,
    ModalTrailerComponent,
    LoadingComponent,
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handleOpenModal() {
      this.isShow = true;
    }
  },
  computed: {
    isSeries() {
      return this.movie.type === 'series';
    },
    loading() {
      return this.$store.getters.isLoading;
    },
    slug() {
      return this.$route.params.slug;
    },
    posterUrl() {
      return `https://img.ophim.live/uploads/movies/${this.slug}-poster.jpg`;
    },
    imageUrl() {
      return `https://img.ophim.live/uploads/movies/${this.slug}-thumb.jpg`;
    },
    movie() {
      return this.$store.getters.getMovie;
    },
    thumbnailUrl() {
      return this.movie.trailer_url ? getYouTubeThumbnail(this.movie.trailer_url) : '';
    },
    trailerUrl() {
      return this.movie.trailer_url ? getTrailerURL(this.movie.trailer_url) : '';
    },
    filterMovies() {
      return {
        slugType: this.isSeries ? 'phim-bo' : 'phim-le',
        category: this.movie?.category[0]?.slug,
        country: this.movie?.country[0]?.slug,
        year: this.movie?.year,
        type: this.movie?.type
      }
    }
  },
  mounted() {
  },
  created() {
    this.$store.dispatch("getMovie", this.slug);
  },
}
</script>

<style>
.movie__poster {
  position: relative;
  width: 100%;
  height: 600px;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  transform: translateY(-13%);
}
.movie__poster::before {
  position: absolute;
  content: "";
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: rgba(2, 13, 24, .75);
}

.movie__info {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 1344px;
  box-sizing: border-box;
  margin: auto;
  margin-top: -400px;
}

.movie__info-img {
  display: flex;
  flex-direction: column;
  padding: 12px 32px 12px 32px;
  width: 100%;
  max-width: 288px;
}

.movie__info-img img {
  width: 100%;
}

.movie__info-img a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 20px;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: rgb(255, 255, 255) !important;
  margin-top: 30px;
}

.movie__info-img a svg {
  width: 20px;
  height: 20px;
  margin-right: 20px;
  fill: rgb(255, 255, 255);
}

.movie__info-detail {
  width: 100%;
  flex: 2;
  padding: 40px 32px 12px 32px;
  overflow: hidden;
  box-sizing: border-box;
}

.movie__info-title {
  font-family: 'Merriweather, serif';
  font-size: 40px;
  font-weight: 400;
  line-height: 45px;
  color: rgb(255, 255, 255);
  margin-bottom: 18px;
}

.movie__info-sub {
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  color: rgb(181, 181, 181);
  margin-bottom: 36px;
}

.movie__info-sub-link {
  color: #428bca !important;
}

.movie__info-sub-link:hover {
  color: rgb(220, 248, 54) !important;
}

.movie__info-episode-list {
  margin-bottom: 15px;
}

.movie__info-episode-duration {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(255, 255, 255);
  margin-right: 18px;
}

.movie__info-episode-completed {
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: rgb(255, 255, 255);
  background-color: #363636;
  padding: 5px 10px;
  border-radius: 8px;
}

.movie__info-rate-list {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.movie__info-rate-list svg {
  width: 40px;
  height: 40px;
}

.movie__info-rate-text {
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: rgb(255, 255, 255);
}

.btn-share-facbook {
  display: flex !important;
  align-items: center;
  background-color: #485ecb !important;
  border-radius: none !important;
}

.btn-share-facbook svg {
  width: 12px;
  height: 12px;
  fill: #fff;
  margin-right: 8px;
}

.btn-share-facbook span {
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
}

.movie__info-button-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 56px;
}

.movie__info-action-list {
  display: flex;
  gap: 10px;
}

.btn-add-collection:hover {
  background-color: #3e8ed0 !important;
}

.btn-add-collection:hover > span {
  color: #fff;
}

.btn-add-collection svg {
  width: 12px;
  height: 12px;
  fill: #fff;
  margin-right: 8px;
}

.btn-add-collection span {
  color: #428bca;
  font-size: 12px;
  font-weight: 400;
  line-height: 28px;
}

.btn-category {
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #fff !important;
  padding: 5px 10px;
}

.btn-category:hover {
  background-color: #fff;
  color: #485fc7 !important;
}

.btn-category:not(:last-child) {
  margin-right: 5px;
}

.movie__info-horizontal {
  margin-bottom: 20px;
}

.movie__info-horizontal-item:not(:last-child) {
  margin-bottom: 5px;
}

.movie__info-horizontal-title {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(122, 122, 122);
  margin-right: 50px;
}

.movie__info-horizontal-text {
  font-size: 16px !important;
  font-weight: 700 !important;
  line-height: 24px !important;
  color: rgb(255, 255, 255) !important;
}

.movie__info-horizontal-text-no {
  font-size: 16px !important;
  font-weight: 400 !important;
  line-height: 24px !important;
  color: rgb(255, 255, 255) !important;
}

.movie__info-horizontal-text:not(:last-child) {
  margin-right: 10px !important;
}

.movie__info-horizontal-text:hover {
  text-decoration: underline !important;
}

.movie__info-des {
  margin-bottom: 20px;
}

.movie__info-des p {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(181, 181, 181);
}

.movie__info-trailer {
  position: relative;
  width: 248px;
  display: inline-block;
  margin-bottom: 24px;
}

.movie__info-trailer-head,
.movie__info-similar-head {
  font-size: 24px;
  font-weight: 600;
  line-height: 27px;
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
}

.movie__info-trailer img {
  width: 100%;
  cursor: pointer;
}

.movie__info-icon {
  width: 32px;
  height: 32px;
  fill: #fff;
  position: absolute;
  top: 41%;
  left: 44%;
  display: none;
  cursor: pointer;
}

.movie__info-trailer:hover {
  box-shadow: 0 0 0 2px #cc7b19;
}

.movie__info-trailer:hover .movie__info-icon {
  display: block;
}

@media (max-width: 1407px) {
  .movie__info {
    max-width: 1152px;
  }
}

@media (max-width: 1024px) {
  .movie__info-img {
    width: 25%;
    padding-left: 8px;
    padding-right: 32px;
  }

  .btn-watch {
    font-size: 16px !important;
  }

  .btn-watch svg {
    width: 16px !important;
    height: 16px !important;
  }
}

@media (max-width: 768px) {
  .movie__info {
    flex-direction: column;
  }

  .movie__info-img {
    width: 100%;
    max-width: 100%;
    padding: 32px 10px;
  }
  
  .movie__info-img img {
    width: 100%;
    max-width: 342px;;
    margin: auto;
  }
  
  .movie__info-button-wrapper {
    flex-direction: column;
    gap: 30px;
    align-items: flex-start;
  }

  .movie__info-detail {
    padding: 32px 10px;
  }
}
</style>