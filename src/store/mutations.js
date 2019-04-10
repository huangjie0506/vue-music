import * as types from './types'
const mutations = {
  [types.SET_SINGER](state, data) {
    state.singer = data
  }
}
export default mutations