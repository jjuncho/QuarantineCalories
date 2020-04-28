<template>
  <b-row>
    <b-col>
      {{ food }}
    </b-col>
    <b-col>
      {{ calories }}
    </b-col>
    <b-col>
      <!-- <b-button size="sm" variant="outline-info">
        <b-icon icon="x" aria-hidden="true"/>
      </b-button> -->
    </b-col>
  </b-row>  
</template>

<script>
export default {
  name: "foodInfo",
  props: {
    food: String,
    calories: String
  }
}
</script>

<style scoped>

</style>