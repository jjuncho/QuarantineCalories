<template>
  <b-row>
    <b-col id="six-ago">
      <h3>
        {{ this.days[0].day }}
      </h3>
      <p>
        {{ this.days[0].cal }}
      </p>
    </b-col>
    <b-col id="five-ago">
      <h3>
        {{ this.days[0].day }}
      </h3>
      <p>
        {{ this.days[0].cal }}
      </p>
    </b-col>
    <b-col id="four-ago">
      <h3>
        {{ this.days[0].day }}
      </h3>
      <p>
        {{ this.days[0].cal }}
      </p>
    </b-col>
    <b-col id="three-ago">
      <h3>
        {{ this.days[0].day }}
      </h3>
      <p>
        {{ this.days[0].cal }}
      </p>
    </b-col>
    <b-col id="two-ago">
      <h3>
        {{ this.days[0].day }}
      </h3>
      <p>
        {{ this.days[0].cal }}
      </p>
    </b-col>
    <b-col id="one-ago">
      <h3>
        {{ this.days[0].day }}
      </h3>
      <p>
        {{ this.days[0].cal }}
      </p>
    </b-col>
    <b-col id="Today">
      <h3>
        {{ this.days[0].day }}
      </h3>
      <p>
        {{ this.days[0].cal }}
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
      days: [

      ],
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
    this.getData();
    this.cleanData;
  }
}
</script>

<style scoped>

</style>