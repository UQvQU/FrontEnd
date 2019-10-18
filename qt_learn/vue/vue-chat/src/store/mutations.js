import Vue from 'vue'
export default {
  receiveAll (state, messages) {
    let lastMessage
    console.log(messages)
    messages.forEach(message => {
      if (!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName)
      }
      // 最新消息
      if (!lastMessage || message.timestamp > lastMessage.timestamp) {
        lastMessage = message
      }
      addMessage(state, message)
    })
    setCurrentThread(state, lastMessage.threadID)
  }
}
// 添加threads
function createThread (state, id, name) {
  Vue.set(state.threads, id, {
    id,
    name,
    messages: [],
    lastMessage: null
  })
}
// 添加消息messages
function addMessage (state, message) {
  message.isRead = message.threads === state.currentThreadID
  const thread = state.threads[message.threadID]
  // 判断该消息是否已添加
  if (!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id)
    thread.lastMessage = message
  }
  Vue.set(state.messages, message.id, message)
}
function setCurrentThread (state, id) {
  state.currentThreadID = id
  state.threads[id].lastMessage.isRead = true
}
