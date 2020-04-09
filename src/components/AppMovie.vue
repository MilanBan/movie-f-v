<template>
  <div>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>
            Title
            <a @click="sort({type: 'title', isAsc: true})">
              <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z"/>
              </svg>
            </a>
            <a @click="sort({type: 'title', isAsc: false})">
              <svg class="bi bi-caret-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 00.753-1.659l-4.796-5.48a1 1 0 00-1.506 0z"/>
              </svg>
            </a>
          </th>
          <th>Director</th>
          <th>
            Duration
            <a @click="sort({type: 'duration', isAsc: true})">
              <svg class="bi bi-caret-down-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 01.753 1.659l-4.796 5.48a1 1 0 01-1.506 0z"/>
              </svg>
            </a>
            <a @click="sort({type: 'duration', isAsc: false})">
              <svg class="bi bi-caret-up-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 00.753-1.659l-4.796-5.48a1 1 0 00-1.506 0z"/>
              </svg>
          </a>  
          </th>
          <th>ReleaseDate</th>
          <th>Genre</th>
          <th>
            Selected {{ selected.length }} | 
            <a @click="selectAllMovies">
              <svg class="bi bi-check-all" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M12.354 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L5 10.293l6.646-6.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                <path d="M6.25 8.043l-.896-.897a.5.5 0 10-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 00.708 0l7-7a.5.5 0 00-.708-.708L8.5 10.293l-.543-.543-.707.707z"/>
              </svg>
            </a> | 
            <a @click="deselectAllMovies">
              <svg class="bi bi-x-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                <path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clip-rule="evenodd"/>
              </svg>
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <movie-row v-for="MovieRow in moviesForCurrentPage" :key="MovieRow.id" :movie="MovieRow" />
      </tbody>
    </table>
    <div v-if="!searchedMovies(searchTerm).length" class="container">
      <div class="alert alert-danger" role="alert">
       <h4>No search resault for: {{ searchTerm }}</h4>
      </div>
    </div>
    <ul class="pagination">
      <li class="page-item">
        <button @click="paginatePrev" class="page-link">Previous</button>
      </li>
      <li class="page-item active">
        <p class="page-link" >{{currentPage}}</p>
      </li>
      <li class="page-item">
        <button @click="paginateNext" class="page-link">Next</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import MovieRow from './MovieRow'
export default {
    name: 'AppMovie',
    components: { MovieRow },
    computed: {
        ...mapGetters(['moviesForCurrentPage', 'searchedMovies', 'searchTerm', 'currentPage', 'selected'])
    },
    methods: {
        ...mapActions(['getMovies', 'prevPage', 'nextPage', 'setSelectedAllMovies', 'setDeselectedAllMovies','sortMovies']),
        paginatePrev() {
          this.prevPage();
        },
        paginateNext() {
          this.nextPage();
        },
        selectAllMovies(){
          this.setSelectedAllMovies()
        },
        deselectAllMovies(){
          this.setDeselectedAllMovies()
        },
        sort(sortConfig){
          this.sortMovies(sortConfig)
        },
    },
    beforeRouteEnter(to, from, next) {
            next(vm => vm.getMovies());
    }
}
</script>