<template>
  <b-row>
    <b-col md="1" />
    <b-col>
      <b-row>
        <b-col>
          <h1>
            Keep track of your caloric intake!
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="0" md="12">
          <b-tabs content-class="mt-3">
            <b-tab title="Day" active>
              <div v-for="item in dailyFoods" :key="item.id">
                <foodItem
                  v-bind:food= "item.food"
                  v-bind:calories= "item.calories"
                />
              </div>
            </b-tab>
            <b-tab title="Week">

            </b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-col>
    <b-col>
      <AddItemForm />
    </b-col>
    <b-col md="1" />
  </b-row>
</template>

<script>
import AddItemForm from "./../components/addItem"
import foodItem from "./../components/foodInfo"

export default {
  name: "HomePage",
  components: {
    AddItemForm,
    foodItem
  },
  data(){
    return {
      dailyFoods: [
        { food: "Fries", calories: "number" },
        { food: "chicken", calories: "5" }
      ]
    }
  }
}
</script>

<style scoped>

</style>