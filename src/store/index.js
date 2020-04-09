import Vue from 'vue'
import Vuex from 'vuex'
import moviesService from '../services/moviesService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: []
  },
  getters: {
      movies: state => state.movies
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    }
  },
  actions: {
    async getMovies({ commit }) {
      const movies = await moviesService.getAll();
      commit('SET_MOVIES', movies);
    }
  }
})