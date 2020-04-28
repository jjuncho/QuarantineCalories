<template>
  <b-container>
    <b-row>
      <b-col sm="10">
        <b-input-group size="sm" class="mb-2">
          <b-form-input type="search" placeholder="Search foods"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col sm="1">
        <b-button
          size="sm"
          variant="info"
          class="mb-2"
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
              @click="newItem(row)"  
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
export default {
  name: "AddItemForm",
  data() {
    return {
      fields: ["food", "calories", "addItem"],
      //This is a placeholder for now
      items: [
        { food: "Fries", calories: "number" },
        { food: "chicken", calories: "5" }
      ],
      selected: []
    }
  },
  methods: {
    onRowSelected(items) {
      this.selected = items;
    },
  }
}
</script>

<style scoped>
.hidden_header {
  display: none;
}
</style>