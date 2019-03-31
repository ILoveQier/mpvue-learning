import {RECEIVER_LIST} from './mutation-type'

export default {
  [RECEIVER_LIST](state , {list_data}) {
    state.listTmp = list_data
  }
}