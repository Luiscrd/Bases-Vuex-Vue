import { createStore } from 'vuex'
import counterStore from './counter/index'

export default createStore({
  
  modules: {
    counter: counterStore
  }

})
