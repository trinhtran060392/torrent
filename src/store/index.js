import Vue from 'vue'
import Vuex from 'vuex'

import pages from './modules/pages'
import data from './modules/data'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    modules: {
      pages,
      data
    }
  })
}
