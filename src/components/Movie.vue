<template>
  <a href="" class="movie__item">
    <img :src="movie.img" :alt="movie.name_vi">
    <h3 class="movie__vi">
      {{ movie.name_vi }}
    </h3>
    <h3 class="movie__en">
      {{ movie.name_en }}
    </h3>
  </a>
</template>

<script>
export default {
  name: 'MovieComponent',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
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