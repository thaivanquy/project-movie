<template>
  <router-link :to="{ name: 'MovieDetailView', params: { slug: slug } }" class="movie__item">
    <img :src="imageUrl" :alt="nameVi">
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
.movie__item img {
  width: 100%;
}

.movie__vi {
  font-size: 16px;
  font-weight: 400;
  color: rgb(219, 219, 219);
  line-height: 18px;
  margin-top: 8px;
}

.movie__en {
  font-size: 16px;
  font-weight: 400;
  color: rgb(122, 122, 122);
  line-height: 18px;
}

</style>