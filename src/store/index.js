import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    lose: state => state.result = 0,
    win: state => state.result = 1,
    draw: state => state.result = 2,
  },
  actions: {
  },
  modules: {
    result:state => {return state.result}
  }
})
