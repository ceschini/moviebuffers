<template>
  <div class="submit-form">
      <div v-if="!submitted">
          <div class="form-group">
              <label for="title">Title</label>
              <input 
              type="text"
              class="form-control"
              id="title"
              required
              v-model="movie.title"
              name="title"
              />
          </div>
          <div class="form-group">
              <label for="description">Review</label>
              <textarea
                type="text"
                class="form-control"
                id="description"
                required
                v-model="movie.description"
                name="description"
                rows="4"
              />
          </div>
        <br>
          <div class="button-group">
              <button class="btn btn-success" @click="saveMovie">Save</button>
              <a class="btn bg-secondary text-white" :href="'/movies/'">Go Back</a>
          </div>
      </div>
      <div v-else>
          <h4>You saved a movie successfully!</h4>
         <div class="button-group">
              <button class="btn btn-success" @click="newMovie">Add</button>
              <a class="btn bg-secondary text-white" :href="'/movies/'">Go Back</a>
         </div>
      </div>
  </div>
</template>

<script>
import MovieDataService from "../services/MovieDataService";
export default {
    name: "add-movie",
    data() {
        return {
            movie: {
                id: null,
                title: "",
                description: "",
                published: false
            },
            submitted: false
        };
    },
    methods: {
        saveMovie() {
            var data = {
                title: this.movie.title,
                description: this.movie.description
            };

            MovieDataService.create(data)
                .then(response => {
                    this.movie.id = response.data.id;
                    console.log(response.data);
                    this.submitted = true;
                })
                .catch(e => {
                    console.log(e);
                });
        },
        newMovie() {
            this.submitted = false;
            this.movie = {};
        }
    }
};
</script>

<style scoped>
h4 {
    margin-top:1rem;
}
.submit-form {
    max-width: 300px;
    margin: auto;
}

.button-group {
    display: flex;
    justify-content: space-between;
}
</style>