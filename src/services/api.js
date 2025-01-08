export const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;
export const API_RECOMMENDED_MOVIES =
  process.env.VUE_APP_API_RECOMMENDED_MOVIES;

export const API_ENDPOINTS = {
  seriesMovies: `${API_BASE_URL}/danh-sach/phim-bo?sort_field=modified.time`,
  singleMovies: `${API_BASE_URL}/danh-sach/phim-le?sort_field=modified.time`,
  recommendedMovies: `${API_RECOMMENDED_MOVIES}/movies?limit=5`,
  getMovie: `${API_BASE_URL}/phim`,
  getSeriesMoviesByFilter: (
    category = "",
    country = "",
    year = "",
    sortField = ""
  ) =>
    `${API_BASE_URL}/danh-sach/phim-bo?page=1&sort_field=${sortField}&category=${category}&country=${country}&year=${year}`,
  getSingleMoviesByFilter: (
    category = "",
    country = "",
    year = "",
    sortField = ""
  ) =>
    `${API_BASE_URL}/danh-sach/phim-le?page=1&sort_field=${sortField}&category=${category}&country=${country}&year=${year}`,
};
