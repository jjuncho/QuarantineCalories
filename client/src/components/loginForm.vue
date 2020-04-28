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
  name: 'LoginForm',
}
</script>

<style scoped>

</style>