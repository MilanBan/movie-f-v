<template>
  <div>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Director</th>
          <th>Duration</th>
          <th>ReleaseDate</th>
          <th>Genre</th>
          <th></th>
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
    // async created(){
    //   await this.getMovies()
    // },
    components: { MovieRow },
    computed: {
        ...mapGetters(['moviesForCurrentPage', 'searchedMovies', 'searchTerm', 'currentPage'])
    },
    methods: {
        ...mapActions(['getMovies', 'prevPage', 'nextPage']),
        paginatePrev() {
          this.prevPage();
          },
        paginateNext() {
          this.nextPage();
          }
    },
    beforeRouteEnter(to, from, next) {
            next(vm => vm.getMovies());
    }
}
</script>