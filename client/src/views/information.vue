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
      <b-tabs content-class="mt-3" fill>
        <b-tab title="signup" active>
          <SignUpForm />
        </b-tab>
        <b-tab title="login">
          <LoginForm />
        </b-tab>
      </b-tabs>
      <br />
      <br />
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

</style>