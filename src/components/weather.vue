<template>
<div class="weather">
  <cityWeather
      v-for="city in basicCity" :key="city"
      v-bind:city="city"
      v-bind:apiKey="apiKey"/>
</div>

</template>

<script>
import {mapGetters} from 'vuex'
import cityWeather from "./cityWeather"
export default {
  name: "weather",
  components: {
    cityWeather,
  },
  computed: mapGetters(['basicCity','apiKey'])
}
</script>

<style scoped>
.weather{
  padding-top: 55px;
  width: 880px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 35px;
  justify-content: space-evenly;
}
</style>