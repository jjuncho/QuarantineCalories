<template id='appMobile'>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    </head>
    <body>
      <NavBar />
      <b-container fluid id="main">
        <router-view/>
      </b-container>
    </body>
  </html>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

h1 {
  color: teal;
}

#main {
  margin-top: 3em;
}

#appMobile {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-family: 'Roboto', sans-serif;
  color: #404040;
}
</style>
