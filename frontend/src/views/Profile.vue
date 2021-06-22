<template>
  <div class="container">
      <header class="jumbotron">
          <h3>
              Welcome, <strong>{{ currentUser.username}}</strong>
          </h3>
      </header>
      <p>
          <strong>Your Token:</strong>
          {{ currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
      </p>
      <p>
          <strong>Your Id:</strong>
          {{ currentUser.id }}
      </p>
      <p>
          <strong>Email:</strong>
          {{ currentUser.email }}
      </p>
      <strong>Your access:</strong>
      <ul>
          <li v-for="(role,index) in currentUser.roles" :key="index">{{ role }}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'Profile',
    computed: {
        currentUser() {
            return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
            this.$router.push('/login');
        }
    }
}
</script>

<style>

</style>