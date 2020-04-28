<template>
  <b-row>
    <b-col md="2"/>
    <b-col>
      <b-row>
        <b-col>
          <h1>
            Welcome to Quarantine Calories!
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>
            Sign up with Quarantine Calories to keep track of the meals and calories you are consuming each day.
        
          </p>
          <p>
            Our app will allow you to select the items from a food list and will automatically calculate the calories and save the data under your profile!
          </p>  
        </b-col>
      </b-row>
      <b-row>
      </b-row>
    </b-col>
    <b-col md="4">
      <button v-on:click="onClickSignup">
        Sign up!
      </button>
      <button v-on:click="onClickLogin">
        Log in!
      </button>
      <br />
      <br />
      <LoginForm v-if="this.form === 'login'"/>
      <SignUpForm v-else />
    </b-col>
    <b-col md="1" />
  </b-row>
</template>

<script>
import LoginForm from "./../components/loginForm"
import SignUpForm from "./../components/signUpForm"

var form = "login";

export default {
  name: 'homeNoUser',
  components: {
    LoginForm,
    SignUpForm
  },
  data () {
    return {
      form
    }
  },
  methods: {
    onClickSignup() {
      console.log("Changed to signup!")
      this.form = "signup";
    },
    onClickLogin() {
      console.log("Changed to login!")
      this.form = "login";
    }
  }
}
</script>

<style scoped>
h1 {color: darkorange;
    font-family: "Comic Sans MS", "Comic Sans", cursive, bold;}
p {color: navy;
    font-family: "Comic Sans MS", "Comic Sans", cursive}

</style>