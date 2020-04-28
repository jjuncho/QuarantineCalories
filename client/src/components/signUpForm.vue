<template >
  <div key="SignUpForm">
    <b-form @submit="onSubmit">
      <b-form-group
        id="signup-group-1"
        label="Your name:"
        label-for="input-1"
      >
        <b-form-input
          id="signup-group-1"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="signup-group-2"
        label="Username:"
        label-for="signup-group-2"
      >
        <b-form-input
          id="signup-group-2"
          v-model="form.username"
          required
          placeholder="Enter username"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="signup-group-3" 
        label="Your Password:"
        label-for="input-3"
      >
        <b-form-input
          id="signup-group-3"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Create account</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import router from "./../router";

export default {
  name: 'SignUpForm',
  data() {
    return {
      form: {
        name: '',
        username: '',
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
        })
        .catch(err => {
          console.log("error processing your request");
          console.log(err);
        })
        .finally(
          router.push("/home")
        );
    },
  },
}
</script>

<style scoped>

</style>