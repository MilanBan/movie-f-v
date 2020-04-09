<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="/">Movies</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Add Movie</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/movies">Link</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <movie-search />
    </form>
  </div>
</nav>
</template>

<script>
import MovieSearch from './MovieSearch'
export default {
    name: 'NavBar',
    components: {
      MovieSearch
    }
}
</script>

<style>

</style>