const data = require('./mock-data')
const LATENCY = 1600
export const getAllMessages = (cb) => {
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}
