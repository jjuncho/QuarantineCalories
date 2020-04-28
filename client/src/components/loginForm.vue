<template >
  <div key="LogInForm">
    <b-form>
      <b-form-group
        id="login-group-1"
        label="Email address:"
        label-for="login-email-input"
      >
        <b-form-input
          id="login-email-input"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="login-group-2"
        label="Password:" 
        label-for="login-password-input"
      >
        <b-form-input
          id="login-password-input"
          type="password"
         v-model="form.password"
          required
          placeholder="Enter your password"
        ></b-form-input>
      </b-form-group>

      <b-button id="button1" variant="primary">login</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import router from "./../router";

export default {
  name: "LoginForm",
  data() {
    return{
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      axios
      .post("ENDPOINT HERE", this.form)
        .then(res => {
          console.log(res);
          router.push("/home")
        })
        .catch(err => {
          console.log("error processing your request");
          console.log(err);
        });
    },
  },
}
</script>

<style scoped>

</style>