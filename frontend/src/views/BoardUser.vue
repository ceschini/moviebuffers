<template>
  <div class="container">
        <div v-if="quiz">
            <mod-quiz />
        </div>
      <header v-else class="jumbotron">
        <h1>Welcome to MovieBuffers!</h1>
        <h4>Feel free to explore movie reviews by our Buffer's Moderators...</h4>
        <br>
        <p>Do you consider yourself a movie know-it-all, and want to write some sweet reviews to our site?</p>
        <p>Well, then try your luck in our quiz, if you nail it, you will become a Movie Buffer!</p>
        <button class="btn bg-primary text-white" @click="quiz = true">Try Quiz</button>
      </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';
import ModQuiz from '../components/ModQuiz.vue';

export default {
    components: { ModQuiz },
    name: 'User',
    data() {
        return {
            content: '',
            quiz: false
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