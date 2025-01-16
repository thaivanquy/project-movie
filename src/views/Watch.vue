<template>
  <div class="watch__container">
    <VideoComponent :videoPlaying="videoPlaying"/>
    <p class="watch__container-question">
      <router-link :to="{ name: 'FaqView' }">
        Phim bị giật hình / mất tiếng nhân vật?
      </router-link>
    </p>
    <section class="watch__section">
      <div class="watch__wrapper">
        <div class="watch__info">
          <div class="watch__coloumn">
            <h1 class="watch__coloumn-head">
              {{ movie.name }}
            </h1>
            <h2 class="watch__coloumn-subhead">
              {{ movie.origin_name }} (<router-link :to="{ name: 'BrowseView', query: { year: movie.year } }" class="watch__coloumn-link">{{ movie.year }}</router-link>)
            </h2>
            <div class="watch__button">
              <div class="watch__button-fb">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"></path></svg>
                <span>Chia sẻ</span>
              </div>
              <div class="watch__button-add">
                <button type="button" class="btn btn-outline-primary btn-add">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M368 224H224V80c0-8.84-7.16-16-16-16h-32c-8.84 0-16 7.16-16 16v144H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h144v144c0 8.84 7.16 16 16 16h32c8.84 0 16-7.16 16-16V288h144c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"></path></svg>
                  <span>Bộ sưu tập</span>
                </button>
              </div>
              <div class="watch__button-similar">
                <button type="button" class="btn btn-outline-success btn-similar" @click="handleOpenModalSimilar" v-if="moviesByFilter?.items?.length > 0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 224c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V284c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v120zm0-176c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12V108c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v120zm96 144c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path></svg>
                  <span>Phim tương tự</span>
                </button>
              </div>
            </div>
          </div>
          <div class="watch__coloumn">
            <div class="watch__back">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M11.093 251.65l175.998 184C211.81 461.494 256 444.239 256 408v-87.84c154.425 1.812 219.063 16.728 181.19 151.091-8.341 29.518 25.447 52.232 49.68 34.51C520.16 481.421 576 426.17 576 331.19c0-171.087-154.548-201.035-320-203.02V40.016c0-36.27-44.216-53.466-68.91-27.65L11.093 196.35c-14.791 15.47-14.791 39.83 0 55.3zm23.127-33.18l176-184C215.149 29.31 224 32.738 224 40v120c157.114 0 320 11.18 320 171.19 0 74.4-40 122.17-76.02 148.51C519.313 297.707 395.396 288 224 288v120c0 7.26-8.847 10.69-13.78 5.53l-176-184a7.978 7.978 0 0 1 0-11.06z"></path></svg>
              <router-link :to="{ name: 'MovieDetailView', params: { slug: movie.slug } }" class="btn-back">Về trang giới thiệu phim</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="watch__episodes" v-if="movie && movie?.episodes && movie?.episodes?.length > 0">
        <div class="watch__episodes-item" :class="{ disabled: episode.slug === currentVideo }" v-for="episode in movie.episodes[0].server_data" :key="episode.slug" @click="handleSelectEpisode(episode)">Tập {{ episode.name }}</div>
      </div>
    </section>
    <ModalMovieSimilarComponent :isShowModalSimilar="isShowModalSimilar" @update:isShowModalSimilar="isShowModalSimilar = $event" :moviesByFilter="moviesByFilter" />
  </div>
</template>

<script>
import VideoComponent from '../components/Video.vue';
import ModalMovieSimilarComponent from '../components/ModalMovieSimilar.vue';

export default {
  name: 'WatchView',
  data() {
    return {
      videoPlaying: '',
      currentVideo: '',
      isShowModalSimilar: false,
    };
  },
  components: {
    VideoComponent,
    ModalMovieSimilarComponent
  },
  computed: {
    isSeries() {
      return this.movie.type === 'series';
    },
    slug() {
      return this.$route.params.slug;
    },
    movie() {
      return this.$store.getters.getMovie;
    },
    filterMovies() {
      return {
        slugType: this.isSeries ? 'phim-bo' : 'phim-le',
        page: 1,
        sortField: '',
        category: this.movie?.category[0]?.slug,
        country: this.movie?.country[0]?.slug,
        year: this.movie?.year,
        type: this.movie?.type
      }
    },
    moviesByFilter() {
      return this.$store.getters.getMoviesByFilter;
    }
  },
  async created() {
    await this.fetchMovieDetail();
    await this.fetchMoviesByFilter();
  },
  mounted() {
    this.setDefaultVideo(this.movie);
  },
  watch: {
    movie(newMovie) {
      this.setDefaultVideo(newMovie);
    },
    isShowModalSimilar(isShow) {
      if (isShow) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';  
      }
    }
  },
  metaInfo() {
    return {
      title: this.movie.name,
    };
  },
  methods: {
    handleSelectEpisode(episode) {
      this.videoPlaying = episode.link_embed;
      this.currentVideo = episode.slug
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    setDefaultVideo(movie) {
      if (movie && movie?.episodes && movie?.episodes?.length > 0) {
        if (this.videoPlaying === '') {
          this.videoPlaying = movie.episodes[0].server_data[0].link_embed;
        }
        if (this.currentVideo === '') {
          this.currentVideo = movie.episodes[0].server_data[0].slug;
        }
      }
    },
    handleOpenModalSimilar() {
      this.isShowModalSimilar = true;
    },
    async fetchMovieDetail() {
      await this.$store.dispatch("getMovie", this.slug);
    },
    async fetchMoviesByFilter() {
      await this.$store.dispatch("getMoviesByFilter", this.filterMovies);
    }
  }
};
</script>

<style scoped>
.watch__container-question {
  padding: 12px 0 16px 0;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  line-height: 23px;
  color: rgb(66, 139, 202) !important;
}

.watch__section {
  width: 100%;
  padding: 48px;
}

.watch__wrapper {
  margin: 0 40px;
}

.watch__info {
  display: flex;
  justify-content: space-between;
}

.watch__coloumn {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
}

.watch__coloumn:last-child {
  padding: 12px;
}

.watch__coloumn-head {
  font-size: 32px;
  font-weight: 500;
  line-height: 36px;
  color: rgb(255, 255, 255);
  margin-bottom: 24px;
}

.watch__coloumn-subhead {
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  color: rgb(181, 181, 181);
  margin: 19px 0;
}

.watch__coloumn-link {
  color: #428bca !important;
}

.watch__coloumn-link:hover {
  color: rgb(220, 248, 54) !important;
}

.watch__button {
  display: flex;
  gap: 15px;
  margin: 35px 0;
  flex-wrap: wrap;
}

.watch__button-fb {
  font-size: 16ppx;
  font-weight: 400;
  line-height: 24px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 16px;
  border: 1px solid #0000;
  background-color: #485fc7;
  border-radius: 4px;
  cursor: pointer;
}

.watch__button-fb svg {
  width: 16px;
  height: 21px;
  fill: #fff;
  margin-right: 8px;
}

.watch__button-add svg {
  width: 16px;
  height: 21px;
  fill: #fff;
  margin-right: 8px;
}

.btn-add {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-similar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-similar svg {
  width: 16px;
  height: 21px;
  fill: #fff;
  margin-right: 8px;
}

.watch__back {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #428bca;
  display: flex;
  justify-content: center;
  align-items: center;
  float:right;
}

.watch__back a:hover {
  color: rgb(220, 248, 54) !important;
}

.watch__back svg {
  width: 21px;
  height: 19px;
  fill: #fff;
  margin-right: 8px;
}

.watch__episodes {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  margin: 0 40px;
}

.watch__episodes-item {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(255, 255, 255);
  background-color: #48c78e;
  border-color: #0000;
  color: #fff;
  padding: 6px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin: 0 8px 8px 0;
}

.watch__episodes-item.disabled {
  cursor: not-allowed;
  opacity: .5;
}

@media (max-width: 768px) {
  .watch__container-question a {
    font-size: 12px;
  }

  .watch__section {
    padding: 48px 12px !important;
  }

  .watch__wrapper,
  .watch__episodes {
    margin: 0 !important;
  }

  .watch__info {
    flex-direction: column;
    margin-bottom: 12px;
  }
}
</style>
