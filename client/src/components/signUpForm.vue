<template >
  <div key="SignUpForm">
    <b-form>
      <b-form-group
        id="signup-group-1"
        label="Your name:"
        label-for="input-1"
      >
        <b-form-input
          id="signup-group-1"
          type="name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="signup-group-2"
        label="Email address:"
        label-for="input-2"
      >
        <b-form-input
          id="signup-group-2"
          type="email"
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
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button variant="primary">Create account</b-button>
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