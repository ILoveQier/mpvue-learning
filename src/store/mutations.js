import { RECEIVER_LIST, MOVIES_ARR } from './mutation-type'

export default {
  [RECEIVER_LIST](state, list_data) {
    state.listTmp = list_data
  },
  [MOVIES_ARR](state, data) {
    state.moviesArr = data
  }
}