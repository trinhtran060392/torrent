import * as types from '../mutaion-types'
import Constant from '../../config/Constant'
import MovieService from '../../components/MovieService'

// initial state
const state = {
  data: {},
  movie: {}
}
// getters
const getters = {
  data: state => state.data,
  movie: state => state.movie
}

// actions
const actions = {
  
  getData ({ commit }, params) {
    return MovieService.list(params.pageNumber, params.pageSize).then((response) => {
      commit(types.GET_DATA, response.data)
    })
  },
  getMovie ({ commit }, title) {
    return MovieService.get(title).then((response) => {
      commit(types.MOVIE, response.data[0])
    })
  }
}
// mutations
const mutations = {
  [types.GET_DATA] (state, data) {
    state.data = data
  },
  [types.MOVIE] (state, data) {
    state.movie = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
