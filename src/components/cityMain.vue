<template>
<div class="back">
  <div class="container">
   <div class="city">{{dataApi.name}}</div>
   <div class="description">{{description}}</div>
    <div class="FLex">
      <div><p class="temp">{{temp}}</p></div>
      <div><img :src="require('../assets/temp_img.png')"></div>
<!--      сделать загрузку картки в зависимости от полученного description-->
    </div>
    <div class="levelFLex" v-if="grndLvl">
      <div><img :src="require('../assets/barometer.png')"></div>
      <div class="level">{{dataApi.main.grnd_level}} мм рт.ст</div>
<!--      ошибка из за того что не на все города приходит информация о grnd_level - нужно сделать проверку-->
    </div>
    <div class="sunset">Закат {{sunset}}</div>
    <br>
  </div>
</div>
</template>

<script>
import axios from "axios";
import {mapGetters} from "vuex";

export default {
  name: "cityMain",
  data() {
    return {
      dataApi: '',
      temp: '',
      description: '',
      sunset: '1',
    }
  },
  created() {
    this.cityName = this.$route.params.city,
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${this.apiKey}&units=metric&lang=ru`)
            .then(response => (this.dataApi = response.data)).then(this.tempRound).then(this.descrip).then(this.sun)
  },
  methods: {
    tempRound: function () {
      if (this.dataApi.main.temp > 0) {
        this.temp = '+' + Math.round(this.dataApi.main.temp) + '°'
      } else {
        this.temp = Math.round(this.dataApi.main.temp) + '°'
      }
    },
    descrip: function (){
      this.description = this.dataApi.weather[0].description.charAt(0).toUpperCase() + this.dataApi.weather[0].description.slice(1);
    },
    sun: function (){
      const time = this.dataApi.sys.sunset + this.dataApi.timezone
      let h = new Date(time * 1000).getUTCHours()
      let m = new Date(time * 1000).getUTCMinutes()
      this.sunset =  h + ":" + m
     },
  },
  computed: {
    ...mapGetters(['apiKey']),
    grndLvl: function () {
     return this.dataApi.main.grnd_level !== undefined
    },
  }
}
</script>

<style scoped>
body {

}
.back {
  position: relative;
  background: radial-gradient(80.36% 80.36% at 50% 0%, #5A607C 0%, #161B30 100%);
  height: 700px;
  width: 100%;
  border-radius: 0px;
  text-align: center;
}
.city{
  padding-top: 76px;
  margin: 0 auto;
  font-size: 56px;
}
.description {
  padding-top: 16px;
  font-size: 16px;
}

.levelFLex{
  padding-top: 60px;
  display: flex;
  justify-content: center;
}
.FLex{
  padding-top: 60px;
  display: flex;
  justify-content: center;
}
.level{
  font-size: 16px;
  padding-top: 5px;
  padding-left: 10px;
}
.temp {
  padding-top: 35px;
  background: linear-gradient(180deg, #FFFFFF 11.65%, rgba(255, 255, 255, 0) 139.47%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 129px;
}
.sunset {
  padding-top: 32px;
  color: #8A91AB;
  font-size: 16px;
}
</style>