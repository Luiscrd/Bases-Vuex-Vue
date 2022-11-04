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

  },
  mutations: {
    increment( state ) {
      state.count++
      state.lastMutation = 'Increment'
    },
    incrementBy( state, value ) {
      state.count += value
      state.lastMutation = 'IncrementBy ' + value
      state.lastRandomInt = value
    },
  },
  actions: {
    async incrementRandomInt( context ) {
      const randomInt = await getRandomInt()
      context.commit('incrementBy', randomInt)
    }
  },
  modules: {
    
  }
})
