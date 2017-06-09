import * as api from '../api'
import * as types from './mutation-types'
export const getAllMessages = ({ commit }) => {
  api.getAllMessages(messages => {
    console.log(types)
    commit(types.RECEIVE_ALL, {
      messages
    })
  })
}
