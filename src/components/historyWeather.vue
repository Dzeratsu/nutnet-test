<template>
<div class="historyItem">
  <div class="cont">
    <router-link :to="{name:'cityMain', params: {city:city.name}}">
    <p class="timeSearch">{{timeZero}}</p>
  <p class="cityName">{{city.name}}</p>
    </router-link>
  </div><span class="degrees">{{temper}}</span>
</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  props: ['city'],
  name: "historyWeather",
  data() {
    return {
      timeZero: '',
      temper: ''
    }
  },
  methods: {
    tempRound: function () {
      if(this.city.temp > 0){
        this.temper = '+' + Math.round(this.city.temp) + '°'
      } else {
        this.temper = Math.round(this.city.temp) + '°'
      }
    }
  },
  mounted() {
    this.timeZero = this.city.time.replace(/\d+/g, function(a) {
      return parseInt(a, 10) < 10 ? "0" + a : a;
    }),
        this.tempRound()
    },
  computed:{
    ...mapGetters(['apiKey']),
  }
  }
</script>

<style scoped>
.historyItem{
  width: 331px;
  height: 71px;
  background-color: #292E44;
  border-radius: 6px;
}
.cont {
  padding: 16px 16px 16px 16px;
}
.timeSearch{
  font-size: 14px;
}
.degrees {
  position: relative;
  left: 265px;
  bottom: 45px;
  font-size: 24px;
  text-align: right;
}
.cityName {
  padding-top: 10px;
  font-size: 16px;
}
</style>