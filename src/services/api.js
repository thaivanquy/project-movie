import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getMovies() {
    return apiClient.get('movies');
  },
  getMovieDetails(id) {
    return apiClient.get(`movie/${id}`);
  },
};