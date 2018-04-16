import * as types from '../mutaion-types'
import Constant from '../../config/Constant'
import MovieService from '../../components/MovieService'

// initial state
const state = {
  data: {}
}
// getters
const getters = {
  data: state => state.data
}

// actions
const actions = {
  
  getData ({ commit }, params) {
    return MovieService.list(params.pageNumber, params.pageSize).then((response) => {
      console.log(response)
      commit(types.GET_DATA, response.data)
    })
  }
}
// mutations
const mutations = {
  [types.GET_DATA] (state, data) {
    state.data = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
