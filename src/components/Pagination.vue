<template>
  <div class="pagination-container">
    <paginate
    :page-count="totalPage"
    :current-page="currentPage"
    :page-range="3"
    :margin-pages="2"
    :click-handler="clickCallback"
    :prev-text="'Trang trước'"
    :next-text="'Trang kế'"
    :container-class="'pagination'"
    :page-class="'page-item'">
    </paginate>
  </div>
</template>

<script>
import Paginate from 'vuejs-paginate'
export default {
  name: "PaginationComponent",
  components: { Paginate },
  props: {
    totalPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
  },
  methods: {
    clickCallback(pageNum) {
      const queryChanged = {
        slugType: this.$route.query.type || "",
        page: pageNum,
        sortField: this.$route.query.sort || "",
        category: this.$route.query.genre || "",
        country: this.$route.query.country || "",
        year: this.$route.query.year || "",
      }
      this.$emit("page-changed", queryChanged);
    }
  }
}
</script>

<style>
.pagination-container {
  width: 100%;
  color: #fff;
}

.pagination-container .pagination {
  --bs-pagination-bg: #06121e !important;
  --bs-pagination-active-bg: #06121e !important;
  --bs-pagination-active-border-color: #fff !important;
  --bs-pagination-hover-bg: #06121e !important;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  gap: 5px;
  justify-content: flex-start;
  list-style: none;
  order: 1;
  padding-left: 0;
  width: 100%;
  margin: 16px 0 !important;
}

.pagination-container .pagination li a {
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  color: #dbdbdb;
  display: flex;
  font-size: 16px;
  justify-content: center;
  min-width: 40px;
  padding: 7px 12px;
  text-align: center;
}

.pagination-container .pagination li.active a {
  border-color: #428bca !important;
}

.page-item.active > a {
  background: #428bca !important;
  color: white;
}

.pagination-container .pagination li a:hover {
  color: #b1a21e !important;
}

.pagination-container .pagination li:first-of-type {
  margin-left: auto;
  order: 2;
}

.pagination-container .pagination li:last-of-type {
  order: 3;
}

@media (max-width: 1024px) {
  .pagination-container .pagination li:first-of-type {
    margin-left: 0;
  }

  .pagination-container .pagination {
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>