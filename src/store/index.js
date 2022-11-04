import { createStore } from 'vuex'
import getRandomInt from '@/helpers/getRandomInt'

export default createStore({
  state: {
    count: 1,
    lastMutation: 'None',
    isLoading: false,
    lastRandomInt: 0
  },
  getters: {
    squareCount( state ) {
      return state.count * state.count
    }
  },
  mutations: {
    increment( state ) {
      state.count++
      state.lastMutation = 'Increment 1' 
    },
    incrementBy( state, value ) {
      state.count += value
      state.lastMutation = 'IncrementBy ' + value
      state.lastRandomInt = value
    },
    setLoading( state, value ) {
      state.isLoading = value
      state.lastMutation = 'setLoading ' + value
    }
  },
  actions: {
    async incrementRandomInt({ commit }) {
      commit('setLoading', true)
      const randomInt = await getRandomInt()
      commit('setLoading', false)
      commit('incrementBy', randomInt)
    }
  },
  modules: {
    
  }
})
