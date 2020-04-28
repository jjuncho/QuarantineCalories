<template>
  <b-row>
    <b-col id="six-ago">
      <h6>
        Monday
      </h6>
      <p>
        1903 cal
      </p>
    </b-col>
    <b-col id="five-ago">
      <h6>
        Tuesday
      </h6>
      <p>
        2500 cal
      </p>
    </b-col>
    <b-col id="four-ago">
      <h6>
        Wednesday
      </h6>
      <p>
        1826 cal
      </p>
    </b-col>
    <b-col id="three-ago">
      <h6>
        Thursday
      </h6>
      <p>
        2045 cal
      </p>
    </b-col>
    <b-col id="two-ago">
      <h6>
        Friday
      </h6>
      <p>
        1845 cal
      </p>
    </b-col>
    <b-col id="one-ago">
      <h6>
        Saturday
      </h6>
      <p>
        1452 cal
      </p>
    </b-col>
    <b-col id="Today">
      <h6>
        Sunday
      </h6>
      <p>
        1953 cal
      </p>
    </b-col>
  </b-row>
</template>

<script>
import axios from "axios";

export default {
  name: "weekCal",
  data () {
    return {
      days: [],
      rawData: {}
    }
  },
  methods: {
    getData() {
      axios.get("URL HERE")
        .then( res => {
          this.rawData = res.body;
        })
    },
    cleanData(data) {
      //Here the data from body will be cleaned and placed in days
      console.log(data);
    }
  },
  beforeMount() {
    // this.getData();
    // this.cleanData;
  }
}
</script>

<style scoped>

</style>