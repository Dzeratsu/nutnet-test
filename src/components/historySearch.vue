<template>
<div class="history">
  <historyWeather v-for="city in city" :key="city.name"
                  v-bind:city="city"/>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
import historyWeather from "./historyWeather"
export default {
  name: "historySearch",
  components: {
    historyWeather
  },
  computed: mapGetters(['apiKey', 'city'])
}
</script>

<style scoped>
.history{
  padding-top: 81px;
  width: 1083px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  justify-content: space-evenly;
}
</style>