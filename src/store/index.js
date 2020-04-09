import Vue from 'vue'
import Vuex from 'vuex'
import moviesService from '../services/moviesService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    searchTerm: "",
    currentPage: 1
  },
  getters: {
      movies: state => state.movies,
      searchTerm: state => state.searchTerm,
      searchedMovies: state => {
        const movies = state.movies
        return (searchParam) => {
          return movies.filter(movie => movie.title.toLowerCase().includes(searchParam.toLowerCase()))
        }
      },
      moviesForCurrentPage: (state, {searchedMovies}) => {
        const movies = searchedMovies(state.searchTerm)
        const startIndex = (state.currentPage - 1) * 5
        const endIndex = startIndex + 5
        return movies.slice(startIndex, endIndex)
    }
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies
    },
    setSearchTerm(state, searchTerm){
      state.searchTerm = searchTerm
    }

  },
  actions: {
    async getMovies({ commit }) {
      const movies = await moviesService.getAll()
      commit('SET_MOVIES', movies)
    },
    setSearchTerm({commit}, searchTerm) {
      commit('setSearchTerm', searchTerm)
  }
  }
})