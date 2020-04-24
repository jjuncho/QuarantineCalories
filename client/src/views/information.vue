<template>
  <b-row>
    <b-col md="2"/>
    <b-col>
      <b-row>
        <b-col>
          <h1>
            Welcome to quarantine calories!
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <p>
            Some paragraph here explaining what is going on.
          </p>
        </b-col>
      </b-row>
      <b-row>
      </b-row>
    </b-col>
    <b-col md="4">
      <h2>
        {{ this.form }}!
      </h2>
      <button v-on:click="onClickSignup">
        Sign up!
      </button>
      <button v-on:click="onClickLogin">
        Log in!
      </button>
      <br />
      <br />
      <LoginForm v-if="form === 'login'"/>
      <SignUpForm v-else />
    </b-col>
    <b-col md="1" />
  </b-row>
</template>

<script>
import LoginForm from "./../components/loginForm"
import SignUpForm from "./../components/signUpForm"

var form = "signup";

var onClickLogin = () => {
  form = "login";
}

var onClickSignup = () => {
  form = "signup";
}

export default {
  name: 'homeNoUser',
  components: {
    LoginForm,
    SignUpForm
  },
  data () {
    return {
      form,
      onClickSignup,
      onClickLogin
    }
  }
}
</script>

<style scoped>

</style>