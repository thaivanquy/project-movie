<template>
  <div class="modal__overlay" v-show="isShowModalSimilar" @click="handleCloseModalSimilar">
    <div class="modal__container">
      <div class="modal__head">
        <h1>Phim tương tự</h1>
        <div class="btn-close-modal" @click="handleCloseModalSimilar">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
        </div>
      </div>
      <div class="modal__content">
        <MovieComponent v-for="movie in moviesByFilter.items" :key="movie._id" :thumbUrl="movie.thumb_url" :nameVi="movie.name" :nameEn="movie.origin_name" :slug="movie.slug"/>
      </div>
    </div>
  </div>
</template>

<script>
import MovieComponent from '../components/Movie.vue';
export default {
  name: 'ModalMovieSimilarComponent',
  components: {
    MovieComponent
  },
  props: {
    isShowModalSimilar: {
      type: Boolean,
      required: true,
    },
    moviesByFilter: {
      type: [Object, Array],
      required: true,
    }
  },
  methods: {
    handleCloseModalSimilar() {
      this.$emit('update:isShowModalSimilar', false);
    }
  }
}
</script>

<style scope>
.modal__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal__container {
  margin: 16px;
  background-color: #0b1e2f;
  width: 100%;
  height: 90%;
  max-width: 1344px;
  color: #fff;
  overflow: hidden;
}

.modal__head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid #273a4b;
}

.modal__head h1 {
  font-size: 24px !important;
  line-height: 36px;
  font-weight: 700;
  color: rgb(255, 255, 255);
}

.modal__content {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: auto;
  padding: 16px 24px;
  max-height: calc(100% - 64px);
  box-sizing: border-box; 
}

.btn-close-modal {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 17px !important;
  height: 17px !important;
  color: #fff;
}

.btn-close-modal svg {
  fill: currentColor !important;
}

@media (max-width: 768px) {
  .modal__content {
    padding: 0;
  }
}

</style>