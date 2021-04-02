import { createStore } from 'vuex'

import teachersModule from './modules/teachers';

export default createStore({
  modules: {
    teachers: teachersModule
  }
})
