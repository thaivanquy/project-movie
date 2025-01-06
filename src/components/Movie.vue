<template>
  <a href="" class="movie__item">
    <img :src="imageUrl" :alt="nameVi">
    <h3 class="movie__vi">
      {{ nameVi  }}
    </h3>
    <h3 class="movie__en">
      {{ nameEn }}
    </h3>
  </a>
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
    }
  },
  computed: {
    imageUrl() {
      return `https://ophim17.cc/_next/image?url=http%3A%2F%2Fimg.ophim1.com%2Fuploads%2Fmovies%2F${this.thumbUrl}&w=384&q=75`;
    }
  }
}
</script>

<style>
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