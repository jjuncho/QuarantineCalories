<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand id="title" href="#">Quarantine Calories</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" @click="onClick">
        <b-nav-item right>
          LogOut
        </b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import axios from "axios";
import router from "./../router";

export default {
  name: "NavBar",
  methods: {
    // Logout call
    onClick() {
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
          router.push("/")
        );
    }
  }
}
</script>

<style scoped>
</style>