<template >
  <div key="SignUpForm">
    <p> Signup </p>
    <b-form>
      <b-form-group
        id="signup-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="signup-group-1"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="signup-group-2" 
        label="Your Name:" 
        label-for="input-2"
      >
        <b-form-input
          id="signup-group-2"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-button variant="primary">Submit</b-button>
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

<script>
export default {
  
}
</script>

<style scoped>

</style>