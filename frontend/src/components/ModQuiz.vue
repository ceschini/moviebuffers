<template>
  <div>
      <h1>Welcome to the MovieBuffers Quiz!</h1>
      <h4>If you correctly answer all the questions below, you will be granted Moderator access!</h4>
      <br>
      <div class="form-group">
          <p>In the movie "V for Vendetta," what is the date that masked vigilante "V" urges people to remember?</p>
            <div class="options">
                <input type="radio" id="question1_no" value="wrong1" v-model="answers[0]">
                <label for="question1_no">25th of May</label>
                <input type="radio" id="question1_no2" value="wrong2" v-model="answers[0]">
                <label for="question1_no2">1st of April</label>
                <input type="radio" id="question1_yes" value="correct" v-model="answers[0]">
                <label for="question1_yes">5th of November</label>
                <input type="radio" id="question1_no3" value="wrong3" v-model="answers[0]">
                <label for="question1_no3">18th of June</label>
                <input type="radio" id="question1_no4" value="wrong4" v-model="answers[0]">
                <label for="question1_no4">9th of March</label>
            </div>
      </div>
      <br>
      <div class="form-group">
          <p>Which of the following films was NOT directed by Quentin Tarantino?</p>
            <div class="options">
                <input type="radio" id="question2_yes" value="correct" v-model="answers[1]">
                <label for="question2_yes">Mean Streets</label>
                <input type="radio" id="question2_no" value="wrong1" v-model="answers[1]">
                <label for="question2_no">Reservoir Dogs</label>
                <input type="radio" id="question2_no2" value="wrong2" v-model="answers[1]">
                <label for="question2_no2">Grindhouse</label>
                <input type="radio" id="question2_no3" value="wrong3" v-model="answers[1]">
                <label for="question2_no3">Kill Bill</label>
                <input type="radio" id="question2_no4" value="wrong4" v-model="answers[1]">
                <label for="question2_no4">Pulp Fiction</label>
            </div>
      </div>
      <br>
      <div class="form-group">
          <p>What was the first feature-length computer-animated movie?</p>
            <div class="options">
                <input type="radio" id="question3_no" value="wrong1" v-model="answers[2]">
                <label for="question3_no">The Nightmare Before Christmas</label>
                <input type="radio" id="question3_no2" value="wrong2" v-model="answers[2]">
                <label for="question3_no2">A Bug's Life</label>
                <input type="radio" id="question3_no3" value="wrong3" v-model="answers[2]">
                <label for="question3_no3">Chicken Run</label>
                <input type="radio" id="question3_no4" value="wrong4" v-model="answers[2]">
                <label for="question3_no4">Antz</label>
                <input type="radio" id="question3_yes" value="correct" v-model="answers[2]">
                <label for="question3_yes">Toy Story</label>
            </div>
      </div>
      <br>
      <div class="form-group">
          <p>Who plays "Bruce Wayne" in the 2008 movie "The Dark Knight"?</p>
            <div class="options">
                <input type="radio" id="question4_no" value="wrong1" v-model="answers[3]">
                <label for="question4_no">George Cloney</label>
                <input type="radio" id="question4_no2" value="wrong2" v-model="answers[3]">
                <label for="question4_no2">Michael Keaton</label>
                <input type="radio" id="question4_no3" value="wrong3" v-model="answers[3]">
                <label for="question4_no3">Adam West</label>
                <input type="radio" id="question4_yes" value="correct" v-model="answers[3]">
                <label for="question4_yes">Christian Bale</label>
                <input type="radio" id="question4_no4" value="wrong4" v-model="answers[3]">
                <label for="question4_no4">Ben Affleck</label>
            </div>
      </div>
      <br>
      <div class="form-group">
          <p>What was Bruce Campbell's iconic one-liner after getting a chainsaw hand in Evil Dead 2?</p>
            <div class="options">
                <input type="radio" id="question5_no" value="wrong1" v-model="answers[4]">
                <label for="question5_no">Well Hello Mr. Fancy Pants</label>
                <input type="radio" id="question5_no2" value="wrong2" v-model="answers[4]">
                <label for="question5_no2">You're going down!</label>
                <input type="radio" id="question5_yes" value="correct" v-model="answers[4]">
                <label for="question5_yes">Groovy</label>
                <input type="radio" id="question5_no3" value="wrong3" v-model="answers[4]">
                <label for="question5_no3">Yeah, truly amazing</label>
                <input type="radio" id="question5_no4" value="wrong4" v-model="answers[4]">
                <label for="question5_no4">Who's laughing now!?</label>
            </div>
      </div>
      <br>
      <div class="form-group">
          <p>Who directed the movie "Alien"?</p>
            <div class="options">
                <input type="radio" id="question6_yes" value="correct" v-model="answers[5]">
                <label for="question6_yes">Ridley Scott</label>
                <input type="radio" id="question6_no" value="wrong1" v-model="answers[5]">
                <label for="question6_no">Quentin Tarantino</label>
                <input type="radio" id="question6_no2" value="wrong2" v-model="answers[5]">
                <label for="question6_no2">Steven Spielberg</label>
                <input type="radio" id="question6_no3" value="wrong3" v-model="answers[5]">
                <label for="question6_no3">Martin Scorcese</label>
                <input type="radio" id="question6_no4" value="wrong4" v-model="answers[5]">
                <label for="question6_no4">George Lucas</label>
            </div>
      </div>
      <br>
      <div class="form-group">
          <p>This movie contains the quote, "I love the smell of napalm in the morning!"</p>
            <div class="options">
                <input type="radio" id="question7_no" value="wrong1" v-model="answers[6]">
                <label for="question7_no">Rescue Dawn</label>
                <input type="radio" id="question7_no2" value="wrong2" v-model="answers[6]">
                <label for="question7_no2">Coming Home</label>
                <input type="radio" id="question7_yes" value="correct" v-model="answers[6]">
                <label for="question7_yes">Apocalypse Now</label>
                <input type="radio" id="question7_no3" value="wrong3" v-model="answers[6]">
                <label for="question7_no3">Platoon</label>
                <input type="radio" id="question7_no4" value="wrong4" v-model="answers[6]">
                <label for="question7_no4">Full Metal Jacket</label>
            </div>
      </div>
      <br>
      <div class="form-group">
          <p>In the movie "Blade Runner", what is the term used for human-like androids?</p>
            <div class="options">
                <input type="radio" id="question8_no" value="wrong1" v-model="answers[7]">
                <label for="question8_no">Biotics</label>
                <input type="radio" id="question8_no2" value="wrong2" v-model="answers[7]">
                <label for="question8_no2">RoboPeople</label>
                <input type="radio" id="question8_no3" value="wrong3" v-model="answers[7]">
                <label for="question8_no3">Droids</label>
                <input type="radio" id="question8_no4" value="wrong4" v-model="answers[7]">
                <label for="question8_no4">Clones</label>
                <input type="radio" id="question8_yes" value="correct" v-model="answers[7]">
                <label for="question8_yes">Replicants</label>
            </div>
      </div>
      <br>
      <div class="form-group">
          <p>Darth Vader's famous reveal to Luke is iconic. But which of these is the right one?</p>
            <div class="options">
                <input type="radio" id="question9_no" value="wrong1" v-model="answers[8]">
                <label for="question9_no">You're wrong. I am your father</label>
                <input type="radio" id="question9_no2" value="wrong2" v-model="answers[8]">
                <label for="question9_no2">Luke, I am your father</label>
                <input type="radio" id="question9_no3" value="wrong3" v-model="answers[8]">
                <label for="question9_no3">The truth is that i am your father</label>
                <input type="radio" id="question9_yes" value="correct" v-model="answers[8]">
                <label for="question9_yes">No. I am your father</label>
                <input type="radio" id="question9_no4" value="wrong4" v-model="answers[8]">
                <label for="question9_no4">Go. I am your father</label>
            </div>
      </div>
      <br>
      <div class="form-group">
          <p>In Back to the Future Part II, Marty and Dr. Emmett Brown go to which future date?</p>
            <div class="options">
                <input type="radio" id="question10_no" value="wrong1" v-model="answers[9]">
                <label for="question10_no">August 28th, 2015</label>
                <input type="radio" id="question10_no2" value="wrong2" v-model="answers[9]">
                <label for="question10_no2">January 25th, 2015</label>
                <input type="radio" id="question10_no3" value="wrong3" v-model="answers[9]">
                <label for="question10_no3">July 20th, 2015</label>
                <input type="radio" id="question10_yes" value="correct" v-model="answers[9]">
                <label for="question10_yes">October 21st, 2015</label>
                <input type="radio" id="question10_no4" value="wrong4" v-model="answers[9]">
                <label for="question10_no4">July 20th, 2015</label>
            </div>
      </div>
      <br>
      {{ message }}
      <br>
      <button class="btn bg-primary text-white" @click="finishQuiz">Submit</button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            answers: ['', '', '', '', '', '', '', '', '', ''],
            message: ''
        }
    },
    methods: {
        finishQuiz() {
            if (this.answers.every(val => val === 'correct')) {
                this.message = 'Congratulations! You passed the test and are now a moderator of MovieBuffers!'
            } else {
                this.message = 'Sorry but you didnt pass the test, try again!'
            }
        }
    },
}
</script>

<style scoped>
.options label {
    margin-right: 1em;
}
.options input {
    margin-right: 0.5em;
}

button {
    margin-bottom: 2rem;
    margin-top: 1rem;
}
</style>