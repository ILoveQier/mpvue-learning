import { RECEIVER_LIST, MOVIES_ARR } from './mutation-type'
import dataList from '../datas/list-data'
export default {
  getList({ commit }) {
    // 触发对应的mutations
    commit(RECEIVER_LIST, dataList)
  },
  getMovies({ commit }, data) {
    commit(MOVIES_ARR, data)
  }
}