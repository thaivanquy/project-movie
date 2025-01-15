<template>
  <router-link :to="{ name: 'MovieDetailView', params: { slug: slug } }" class="movie__item">
    <div class="movie__item-cover">
      <img :src="imageUrl" :alt="nameVi">
    </div>
    <h3 class="movie__vi">
      {{ nameVi  }}
    </h3>
    <h3 class="movie__en">
      {{ nameEn }}
    </h3>
  </router-link>
</template>

<script>
export default {
  name: 'MovieComponent',
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
.movie__item {
  width: 20%;
  padding: 12px 8px;
}

.movie__item-cover {
  width: 100%;
  overflow: hidden;
  transition: opacity .15s ease-in-out;
}

.movie__item img {
  width: 100%;
  height: 384px;
  transition: transform 0.3s ease;
}

.movie__item-cover:hover img {
  transform: scale(1.05);
}

.movie__vi {
  font-size: 16px;
  font-weight: 400;
  color: rgb(219, 219, 219);
  line-height: 18px;
  margin-top: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.movie__en {
  font-size: 16px;
  font-weight: 400;
  color: rgb(122, 122, 122);
  line-height: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 1407px) {
  .movie__item {
    width: 25%;
  }
}

@media (max-width: 1215px) {
  .movie__item {
    width: 33.3333%;
  }
}

@media (max-width: 768px) {
  .movie__item {
    width: 50%;
  }
}

@media (max-width: 480px) {
  .movie__item img {
    height: 290px;
  }
}

</style>