<template>
  <div class="movie__list">
    <div class="movie__item">
      <router-link :to="{ name: 'MovieDetailView', params: { slug: slug } }" class="movie__item-left">
        <img :src="imageUrl" alt="">
      </router-link>
      <div class="movie__item-content">
        <div class="movie__content-item">
          <div class="movie__content-name">
            <h3 class="name__vi">
              <router-link :to="{ name: 'MovieDetailView', params: { slug: slug } }">{{ nameVi }}</router-link>
            </h3>
            <h3 class="name__en">
              <router-link :to="{ name: 'MovieDetailView', params: { slug: slug } }">{{ nameEn }}</router-link>
              <router-link :to="{ name: 'BrowseFlexView', params: { type: 'year', value: year } }"><span class="movie__content-year">(</span>{{ year }}<span class="movie__content-year">)</span></router-link>
            </h3>
          </div>
          <div class="movie__content-meta">
            <p>
              {{ time }}
            </p>
            <p v-if="country.length > 0">
              <router-link :to="{ name: 'BrowseFlexView', params: { type: 'country', value: country[0]?.slug } }">
                {{ country[0]?.name }}
              </router-link>
            </p>
          </div>
        </div>
        <!-- <div class="movie__content-item">
          <p class="movie__content-des">{{ des }}</p>
        </div> -->
        <div class="movie__content-item">
          <div class="movie__content-genres" v-if="category.length > 0">
            <router-link :to="{ name: 'BrowseFlexView', params: { type: 'genren', value: c?.slug } }" v-for="c in category" :key="c.slug">
              {{ c?.name }}
            </router-link>
          </div>
          <div class="movie__content-rating">
            <span class="movie__content-rating-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M44 13H4c-2.2 0-4 1.8-4 4v16c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17c0-2.2-1.8-4-4-4z" fill="#ffc107"></path><path d="M28.102 18h-3.704v13.102h3.704c2 0 2.796-.403 3.296-.704.602-.398.903-1.097.903-1.796v-7.903c0-.898-.403-1.699-.903-2-.796-.5-1.097-.699-3.296-.699zm.699 10.3c0 .598-.7.598-1.301.598V20c.602 0 1.3 0 1.3.602zM33.8 18v13.3h2.802s.199-.902.398-.698c.398 0 1.5.597 2.2.597.698 0 1.1 0 1.5-.199.6-.398.698-.7.698-1.3v-7.802c0-1.097-1.097-1.796-2-1.796-.898 0-1.796.597-2.199.898v-3zm3.598 4.2c0-.4 0-.598.403-.598.199 0 .398.199.398.597v6.602c0 .398 0 .597-.398.597-.2 0-.403-.199-.403-.597zM22.7 31.3V18h-4.4l-.8 6.3-1.102-6.3h-4v13.3h2.903v-7.402l1.3 7.403h2l1.297-7.403v7.403zM7.602 18h3.097v13.3H7.602z" fill="#263238"></path></svg>
            </span>
            {{ rate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieFlexComponent',
  props: {
    thumbUrl: {
      type: String,
      required: true
    },
    nameVi: {
      type: String,
      required: true
    },
    nameEn: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    country: {
      type: Array,
      required: true,
    },
    category: {
      type: Array,
      required: true,
    },
    rate: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    }
  },
  computed: {
    imageUrl() {
      return `https://img.ophim.live/uploads/movies/${this.thumbUrl}`;
    }
  }
}
</script>

<style scoped>
.name__vi a:hover,
.name__en a:hover,
.movie__content-meta a:hover {
  text-decoration: underline !important;
}

.movie__item {
  display: flex;
}

.movie__item-left {
  width: 100%;
  max-width: 150px;
  margin-right: 32px;
  /* flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0; */
}

.movie__item-left img {
  width: 100%;
}

.movie__item-content {
  width: 100%;
  padding: 8px;
  flex: 2;
}

.movie__content-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.movie__list:not(:first-child) {
  border-top: 1px solid #dbdbdb80 !important;
  margin-top: 16px !important;
  padding-top: 16px !important;
}

.name__vi {
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  color: rgb(219, 219, 219);
  margin: 0 !important;
}

.name__en {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(122, 122, 122) !important;
}

.name__en a {
  margin-right: 5px;
}

.movie__content-year {
  color: #fff;
}

.movie__content-meta p:first-child {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(181, 181, 181);
}

.movie__content-meta p:last-child {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: rgb(219, 219, 219) !important;
}

.movie__content-genres a {
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: rgb(255, 255, 255) !important;
  background-color: #363636;
  padding: 5px 10px;
  border-radius: 8px; 
  margin-right: 8px;
}

.movie__content-rating {
  display: flex;
  align-items: center;
  display: inline-block;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: rgb(181, 181, 181);
}

.movie__content-rating-icon svg {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

.movie__content-des {
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: rgb(181, 181, 181);
}

@media (max-width: 768px) {
  .movie__content-item {
    width: 100%;
    display: block;
  }
  
  .movie__content-meta {
    text-align: right;
  }

  .movie__content-rating {
    display: flex;
    justify-content: flex-end;
  }

  .movie__content-des {
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .movie__content-genres {
    display: flex;
    flex-wrap: wrap;
  }

  .movie__content-genres a {
    font-size: 10px;
    margin-bottom: 8px !important;
  }
}

@media (max-width: 480px) {
  .movie__content-des {
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>