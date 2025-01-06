import axios from "axios";

const state = {
  recommendedMovies: [],
  seriesMovies: [],
  singleMovies: [],
  loading: false,
  error: null,
};

const mutations = {
  SET_RECOMMENDED_MOVIES(state, movies) {
    state.recommendedMovies = movies;
  },
  SET_SERIES_MOVIES(state, movies) {
    state.seriesMovies = movies;
  },
  SET_SINGLE_MOVIES(state, movies) {
    state.singleMovies = movies;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
};

const actions = {
  async fetchRecommendedMovies({ commit }) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);

    try {
      const response = await axios.get(
        `https://api.newmoviesz.online/api/movies?limit=5`
      );
      commit("SET_RECOMMENDED_MOVIES", response.data.data.data);
    } catch (error) {
      commit("SET_ERROR", error.message || "Đã xảy ra lỗi khi tải dữ liệu");
    } finally {
      commit("SET_LOADING", false);
    }
  },

  async fetchSeriesMovies({ commit }) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);

    try {
      const response = await axios.get(
        `https://ophim1.com/v1/api/danh-sach/phim-bo?sort_field=modified.time`
      );
      commit("SET_SERIES_MOVIES", response.data.data.items);
    } catch (error) {
      commit("SET_ERROR", error.message || "Đã xảy ra lỗi khi tải dữ liệu");
    } finally {
      commit("SET_LOADING", false);
    }
  },

  async fetchSingleMovies({ commit }) {
    commit("SET_LOADING", true);
    commit("SET_ERROR", null);

    try {
      const response = await axios.get(
        `https://ophim1.com/v1/api/danh-sach/phim-le?sort_field=modified.time`
      );
      commit("SET_SINGLE_MOVIES", response.data.data.items);
    } catch (error) {
      commit("SET_ERROR", error.message || "Đã xảy ra lỗi khi tải dữ liệu");
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

const getters = {
  recommendedMovies: (state) => state.recommendedMovies,
  seriesMovies: (state) => state.seriesMovies,
  singleMovies: (state) => state.singleMovies,
  isLoading: (state) => state.loading,
  hasError: (state) => state.error,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
