import axios from "axios";
import { API_ENDPOINTS } from "../../services/api.js";

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
      const response = await axios.get(API_ENDPOINTS.recommendedMovies);
      commit("SET_RECOMMENDED_MOVIES", response.data.data.data);
      console.log(response.data.data.data);
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
      const response = await axios.get(API_ENDPOINTS.seriesMovies);
      commit("SET_SERIES_MOVIES", response.data.data.items);
      console.log(response.data.data.items);
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
      const response = await axios.get(API_ENDPOINTS.singleMovies);
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
