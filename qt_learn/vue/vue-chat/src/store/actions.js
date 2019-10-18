import * as api from '../api/index'

export const getAllMessages = ({commit}) => {
  api.getAllMessages(message => {
    commit('receiveAll', message)
  })
}

export const sendMessage = ({commit}, payload) => {

}

export const switchThread = ({commit}, payload) => {
  setCurrentThread(payload)
}
function setCurrentThread (state, id) {
  state.currentThreadID = id
  state.threads[id].lastMessage.isRead = true
}
