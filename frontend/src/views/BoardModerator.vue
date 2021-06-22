<template>
  <div class="container">
      <header class="jumbotron">
          <h1>Welcome, Buffer!</h1>
          <h4>You are a moderator, feel free to add, edit or remove Movie Reviews.</h4>
      </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
    name: 'Moderator',
    data() {
        return {
            content: ''
        };
    },
    mounted() {
        UserService.getModeratorBoard().then(
            response => {
                this.content = response.data;
            },
            error => {
                this.content =
                    (error.response && error.response.data) ||
                    error.message ||
                    error.toString();
            }
        );
    }
};
</script>

<style>

</style>