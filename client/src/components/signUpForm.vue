<template >
  <div key="SignUpForm">
    <b-form @submit="onSubmit">
      <b-form-group
        id="signup-group-2"
        label="Email address:"
        label-for="signup-group-2"
      >
        <b-form-input
          id="signup-group-2"
          type="email"
          v-model="form.email"
          required
          placeholder="Enter email"
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
export default {
  name: 'SignUpForm',
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
      axios.get("ENDPOINT HERE")
        .then(res => {
          router.push("/home")
        })
        .catch(err => {
          console.log("error processing your request");
        });
    },
  },
}
</script>

<style scoped>

</style>