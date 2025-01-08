<template>
  <div class="overlay" v-if="isShow" @click="handleCloseModal">
    <div class="modal__trailer">
      <div class="modal__trailer-item">
        <iframe :src="trailerUrl" frameborder="0" allow="accelerometer; autoplay; muted; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <button class="close-btn" @click="handleCloseModal">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalTrailerComponent',
  data() {
    return {
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
    trailerUrl : {
      type: String,
      required: true,
    }
  },
  methods: {
    handleCloseModal() {
      this.$emit('update:isShow', false);
    }
  },
}
</script>

<style>
.overlay {
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

.modal__trailer {
  width: 100%;
  max-width: 1000px;
}

.modal__trailer-item {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
}

.modal__trailer-item iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 15px;
  background: transparent;
  color: white;
  border: none;
  font-size: 40px;
}
</style>