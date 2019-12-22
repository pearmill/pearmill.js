export const info = (...args) => {
  console.log.apply(console.log, [`[Pearmill]`, ...args])
}

export const error = (...args) => {
  console.error.apply(console.error, [`[Pearmill]`, ...args])
}
