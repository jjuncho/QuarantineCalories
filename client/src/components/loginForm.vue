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
        type="password"
        v-model="form.password"
        label="Password:" 
        label-for="login-password-input"
      >
        <b-form-input
          id="login-password-input"
          required
          placeholder="Enter your password"
        ></b-form-input>
      </b-form-group>

      <b-button id="button1" variant="primary">login</b-button>
    </b-form>
  </div>
</template>

<script>
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
      console.log(JSON.stringify(this.form))
      // axios.get();
    },
  },
}
</script>

<style scoped>

</style>