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
        <movie-row v-for="MovieRow in movies" :key="MovieRow.id" :movie="MovieRow" />
      </tbody>
    </table>
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
        ...mapGetters(['movies'])
    },
    methods: {
        ...mapActions(['getMovies'])
    },
    beforeRouteEnter(to, from, next) {
            next(vm => vm.getMovies());
    }
}
</script>