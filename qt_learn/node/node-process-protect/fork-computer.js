const forkComputer = () => {
  let sum = 0
  for (let i = 0; i < 1000000; i++) {
    sum += i
  }
  return sum
}
process.on('message', message => {
  console.log(message)
  const sum = forkComputer()
  process.send(sum)
})