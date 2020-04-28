<template >
  <div key="LogInForm">
    <p>Login</p>
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

      <b-button id="button1" variant="primary">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
}
</script>

<style scoped>
p{
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color:darkorange;
}
#login-group-1 {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color:darkorange;
}
#login-group-2 {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color:darkorange;
}
#login-email-input {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color:darkorange;
}
#login-password-input {
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  color:navy;
}
#button1 {
  color:white;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}
</style>