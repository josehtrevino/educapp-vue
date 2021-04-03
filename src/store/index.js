import { createStore } from 'vuex'

import teachersModule from './modules/teachers';
import messagesModule from './modules/messages';

export default createStore({
  modules: {
    teachers: teachersModule,
    messages: messagesModule
  }
})
