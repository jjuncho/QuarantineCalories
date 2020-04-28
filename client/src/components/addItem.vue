<template>
  <b-container>
    <b-row id="addItemForm">
      <b-col sm="10">
        <h4>
          Add items that you ate today!
        </h4>
        <b-input-group size="sm" class="mb-2">
          <b-form-input 
            type="search" 
            v-model="searchTerm"
            placeholder="Search foods" 
          />
        </b-input-group>
      </b-col>
      <b-col sm="1">
        <b-button
          size="sm"
          variant="info"
          class="mb-2"
          type="submit"
          @click="onSearch"
        >
          <b-icon icon="search" aria-hidden="true" />
        </b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table 
          striped 
          hover
          thead-class="hidden_header"
          :fields="fields"
          :items="items"
        >
          <template v-slot:cell(addItem)="row">
            <b-button 
              size="sm" 
              variant="outline-info" 
              class="mb-2"
              @click="addItem(row)"  
            >
              <b-icon icon="plus" aria-hidden="true" />
            </b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";

export default {
  name: "AddItemForm",
  data() {
    return {
      searchTerm: '',
      fields: ["food", "calories", "addItem"],
      items: [
        { food:"apple", calories:"94"},
        { food:"orange", calories:"68"},
        { food:"watermelon", calories:"36"},

      ],
      selected: []
    }
  },
  methods: {
    onSearch(evt){
      evt.preventDefault();
      axios.get("ENDPOINT HERE", this.searchTerm)
        .then(res => {
          this.items = res.body
        })
        .catch(err => {
          console.log(err);
        })
        .finally(
          console.log("sent")
        )
    },

    addItem(item) {
      axios.post("ENDPOINT HERE", item);
    }

  }
}
</script>

<style scoped>
#addItemForm{
  margin-top: 2.5em;
}
</style>