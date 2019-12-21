import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'
import StepModule from './module'
import Product from './product'
import Reservation from './reservation'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login,
    step: StepModule,
    Product,
    Reservation
  }
})
