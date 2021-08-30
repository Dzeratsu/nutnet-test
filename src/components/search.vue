<template>
<div class="search">
  <input class="search-city" placeholder="Укажите город" v-model="searchCity" v-on:keyup.enter="go">
  <ul v-for="currentcity in search" :key="currentcity" >
    <li v-if="testthree">{{currentcity}}</li>
<!--    доделать при клике, значение передавать в Input-->
  </ul>
  {{dataApi}}
</div>
</template>

<script>
import axios from "axios";
import {mapGetters} from 'vuex'
import { mapActions } from 'vuex'
export default {
  name: "search",
  data() {
    return {
      searchCity: '',
      currentCity: '',
      history: [],
      timeSearch: new Date(),
      dataApi: '',
      obj: {
        name: '',
        time: '',
        temp: ''
      }
    }
  },
  computed: {
    ...mapGetters(["apiKey"]),
      search: function () {
      return this.basicCity.filter(elem => {
        return elem.toLowerCase().includes(this.searchCity.toLowerCase())
      })
    },
    testthree: function (){
      return this.searchCity.length > 2 ? true : false
    },
    basicCity() {
        return this.$store.getters.basicCity
    }
  },
  methods: {
    go() {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.searchCity}&appid=${this.apiKey}&units=metric&lang=ru`)
      .then(response => this.dataApi = response.data)
      .then(response => {
        if(response){
        this.obj.name = this.searchCity.charAt(0).toUpperCase() + this.searchCity.slice(1);
        this.obj.time = this.timeSearch.getHours() + ":" + this.timeSearch.getMinutes()
          this.obj.temp = this.dataApi.main.temp
        this.history.push(Object.assign({},this.obj))
        localStorage.setItem('History', JSON.stringify(this.history))
          this.$store.dispatch('parseJSON')
          this.$router.push({name:'cityMain', params: {city:this.searchCity}})
        }
      })
      .catch(error => {
        if (error.response){
          this.searchCity = ''
        }
      })
      },
    ...mapActions('parseJSON')
    },
  mounted() {
    if(localStorage.History == null){
      return
    }else {
    this.history = JSON.parse(localStorage.History)
    }
  }
}

</script>

<style scoped>
.search {
  padding-top: 145px;
  text-align: center;
}
.search-city {
  padding: 0 20px;
  box-sizing: border-box;
  margin: 0 auto;
  border: 0px;
  width: 510px;
  height: 56px;
  background: #2A2F45;
  border-radius: 2px;
}
.search-city:hover {
  border: 2px solid;
}
.search-city::selection {
  box-sizing: border-box;
  border: 1px solid red;
}
input{

}
</style>


