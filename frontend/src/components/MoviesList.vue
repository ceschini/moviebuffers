<template>
  <div class="list row">
      <div class="col-md-8">
          <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Search by title" v-model="title" />
              <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button" @click="searchTitle">Search</button>
              </div>
          </div>
      </div>
      <div class="col-md-6">
          <h4>Movies List</h4>
          <ul class="list-group">
                <li 
                    class="list-group-item"
                    :class="{ active: index == currentIndex }"
                    v-for="(movie, index) in movies"
                    :key="index"
                    @click="setActiveMovie(movie, index)"
                >
                    {{ movie.title }}
                </li>
          </ul>

          <button v-if="showAdminBoard" class="m-3 btn btn-sm btn-danger" @click="removeAllMovies">Remove All</button>
      </div>
      <div class="col-md-6">
          <div v-if="currentMovie">
              <div v-if="(!currentMovie.published && !showModeratorBoard)">
                  <p>Work in Progress</p>
              </div>
              <div v-else>
                  <h4>Movie Review</h4>
                  <div>
                      <label><strong>Title:</strong></label> {{ currentMovie.title }}
                  </div>
                  <div>
                      <label><strong>Review:</strong></label> {{ currentMovie.description }}
                  </div>
                  <div>
                      <label><strong>Status:</strong></label> {{ currentMovie.published ? "Published" : "Pending" }}
                  </div >
                  <br>
              </div>
              <div v-if="showModeratorBoard">
                  <a class="btn bg-warning" :href="'/movies/' + currentMovie.id">Edit</a>
                </div>
          </div>
          <div v-else>
              <br />
              <p>Please select a Movie</p>
          </div>
      </div>
  </div>
</template>

<script>
import MovieDataService from "../services/MovieDataService";

export default {
    name: "movies-list",
    data() {
        return {
            movies: [],
            currentMovie: null,
            currentIndex: -1,
            title: ""
        };
    },
    methods: {
        retrieveMovies() {
            MovieDataService.getAll()
                .then(response => {
                    this.movies = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },

        refreshList() {
            this.retrieveMovies();
            this.currentMovie = null;
            this.currentIndex = -1;
        },

        setActiveMovie(movie, index) {
            this.currentMovie = movie;
            this.currentIndex = index;
        },

        removeAllMovies() {
            MovieDataService.deleteAll()
                .then(response => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch(e => {
                    console.log(e);
                });
        },
        searchTitle() {
            MovieDataService.findByTitle(this.title)
                .then(response => {
                    this.movies = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        editMovie(id) {
            console.log(id);
        }
    },
    beforeMount() {
        this.retrieveMovies();
    },
    computed: {
        currentUser() {
          return this.$store.state.auth.user;
        },
        showAdminBoard() {
          if (this.currentUser && this.currentUser.roles) {
              return this.currentUser.roles.includes('ROLE_ADMIN');
          }

          return false;
        },
        showModeratorBoard() {
          if (this.currentUser && this.currentUser.roles) {
              return this.currentUser.roles.includes('ROLE_MODERATOR');
          }
          return false;
        }
    }
}
</script>

<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>