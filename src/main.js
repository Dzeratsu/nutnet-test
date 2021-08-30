import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import axios from "axios"
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from './router/index'
import store from './store/index'

Vue.use(VueRouter, VueAxios, axios, Vuex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
