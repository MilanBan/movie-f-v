import Vue from 'vue'
import Vuex from 'vuex'
import moviesService from '../services/moviesService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    searchTerm: "",
    currentPage: 1,
    selected: [],
  },

  getters: {
    movies: state => state.movies,
    searchTerm: state => state.searchTerm,
    currentPage: state => state.currentPage,
    selected: state => state.selected,
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
    },
    nextPage(state) {
      if (state.currentPage < (state.movies.length / 5))
        state.currentPage++
    },
    prevPage(state) {
      if (state.currentPage > 1)
        state.currentPage--
    },
    setSelectedMovie(state, movieToSelect){
      if(state.selected.indexOf(movieToSelect) === -1)
        state.selected.push(movieToSelect)
    },
    setSelectedAllMovies(state) {
      state.selected = state.movies
    },
    setDeselectedAllMovies(state) {
      state.selected = []
    }

  },
  actions: {
    async getMovies({ commit }) {
      const movies = await moviesService.getAll()
      commit('SET_MOVIES', movies)
    },
    setSearchTerm({ commit }, searchTerm) {
      commit('setSearchTerm', searchTerm)
    },
    nextPage({ commit }) {
      commit('nextPage')
    },
    prevPage({ commit }) {
      commit('prevPage')
    },
    setSelectedMovie({ commit }, movieToSelect){
      commit('setSelectedMovie', movieToSelect)
    },
    setSelectedAllMovies({commit}) {
      commit('setSelectedAllMovies')
    },
    setDeselectedAllMovies({commit}) {
      commit('setDeselectedAllMovies')
    }
  }
})