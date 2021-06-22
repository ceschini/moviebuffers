<template>
  <div class="container">
      <header class="jumbotron">
        <h1>Welcome to MovieBuffers!</h1>
        <h4>Feel free to explore movie reviews by our Buffer's Moderators...</h4>
      </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
    name: 'User',
    data() {
        return {
            content: ''
        };
    },
    mounted() {
        UserService.getUserBoard().then(
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