import { createStore } from 'vuex'
import { JobsModule  } from './modules/JobsListModule'

export default createStore({

  modules: {
    Jobs:JobsModule 
  }

})
