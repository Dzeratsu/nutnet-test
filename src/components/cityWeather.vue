<template>
<div>
  <router-link :to="{name:'cityMain', params: {city:dataApi.name}}">
  <div class="weatherItem">
    <p class="cityName">{{dataApi.name}}</p>
    <p class="degrees"> {{temp}}</p>
<!--    <p class="description">доделать загрузку картки по полученному this.dataApi[0].description</p>-->
  </div>
  </router-link>
</div>

</template>

<script>
import axios from "axios";

export default {
  components: {
  },
  name: "cityWeather",
  props: ['city', 'apiKey'],
  data() {
    return{
      dataApi: '',
      temp: []
    }
  },
  created() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric&lang=ru`)
        .then(response => (this.dataApi = response.data)).then(this.tempRound)
  },
  methods: {
    tempRound: function () {
      if(this.dataApi.main.temp > 0){
        this.temp = '+' + Math.round(this.dataApi.main.temp) + '°'
      } else {
        this.temp = Math.round(this.dataApi.main.temp) + '°'
      }
    }
  }
}
</script>

<style scoped>
.weatherItem{
  border-radius: 4px;
  width: 270px;
  height: 190px;
  background-color: #292E44;
}
.cityName{
  padding-top: 23px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  text-align: center;
}
.degrees {
  padding-top: 12px;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: center;
}
</style>