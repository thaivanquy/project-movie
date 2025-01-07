<template>
  <div v-if="loading" class="loading">Loading...</div>
</template>

<script>
export default {
  name: 'LoadingComponent',
  computed: {
    loading() {
      return this.$store.getters.isLoading;
    },
  },
}
</script>

<style>
.loading {
  font-size: 16px;
  color: #fff;
  font-weight: 400;
}
</style>