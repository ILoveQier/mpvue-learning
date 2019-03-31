import {RECEIVER_LIST} from './mutation-type'
import dataList from '../datas/list-data'
export default {
  getList({commit}) {
    // 触发对应的mutations
    commit(RECEIVER_LIST,dataList)
  }
}