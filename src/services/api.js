export const API_BASE_URL = process.env.VUE_APP_API_BASE_URL;

export const API_ENDPOINTS = {
  seriesMovies: `${API_BASE_URL}/danh-sach/phim-bo?sort_field=modified.time&limit=10`,
  singleMovies: `${API_BASE_URL}/danh-sach/phim-le?sort_field=modified.time&limit=10`,
  recommendedMovies: `${API_BASE_URL}/danh-sach/phim-le?sort_field=modified.time&country=viet-nam&limit=10`,
  getMovie: `${API_BASE_URL}/phim`,
  getMoviesByFilter: (slugType, page, sortField, category, country, year) =>
    `${API_BASE_URL}/danh-sach/${slugType}?page=${page}&sort_field=${sortField}&category=${category}&country=${country}&year=${year}`,
  searchMovies: (keyword) =>
    `${API_BASE_URL}/tim-kiem?keyword=${keyword}&page=1`,
};
