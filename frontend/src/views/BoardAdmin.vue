<template>
  <div class="container">
      <header class="jumbotron">
          <h1>Wellcome, Admin</h1>
          <h4>Only you have the power to erase <strong>all Movies</strong>.</h4>
      </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
    name: 'Admin',
    data() {
        return {
            content: ''
        };
    },
    mounted() {
        UserService.getAdminBoard().then(
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