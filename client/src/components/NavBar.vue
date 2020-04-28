<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand id="title" href="#">Quarantine Calories</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item right>
          LogOut
        </b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
</style>