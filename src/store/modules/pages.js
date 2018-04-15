import * as types from '../mutaion-types'
import Constant from '../../config/Constant'
import MovieService from '../../components/MovieService'

// initial state
const state = {
  info: {}
}
// getters
const getters = {
  info: state => state.info
}

// actions
const actions = {
  
  getMovies ({ commit }, page) {
    return MovieService.get(page, Constant.numberPerPage).then((response) => {
      let result = response.data.data
      result.totalPage = Math.ceil(result.movie_count / Constant.numberPerPage)
      commit(types.GET_MOVIES, result)
    })
  }
}
// mutations
const mutations = {
  [types.GET_MOVIES] (state, data) {
    state.info = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
