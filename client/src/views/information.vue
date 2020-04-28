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

export default {
  name: 'homeNoUser',
  components: {
    LoginForm,
    SignUpForm
  },
}
</script>

<style scoped>
h1 {
  color: darkorange;
}
p {
  color: navy;
}

</style>