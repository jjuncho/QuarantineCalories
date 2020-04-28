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
              <weeklyCal />
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
import axios from "axios";

import AddItemForm from "./../components/addItem"
import foodItem from "./../components/foodInfo"
import weeklyCal from "./../components/weeklyCalories"

export default {
  name: "HomePage",
  components: {
    AddItemForm,
    foodItem,
    weeklyCal
  },
  data(){
    return {
      dailyFoods: [
        { food:"Eggs", calories:"72" },
        { food:"Bacon" , calories:"162" },
        { food:"Muffin", calories:"165" },

      ]
    }
  },
  methods: {
    getDayItems() {
      axios.get("ENDPOINT HERE")
        .then(res => {
          this.dailyFoods = res.body;
        })
    }
  },
  beforeMount(){
    this.getDayItems();
  }
}
</script>

<style scoped>

</style>