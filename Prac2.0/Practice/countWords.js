let str = 'Tom Hello Hello Hello Mohit Tom Tom Tom'
let strArr = str.trim().split(' ')

let map = new Map()

strArr.forEach((item, index) => {
  if (map.has(item)) {
    let value = map.get(item)
    value++
    map.set(item, value)
  } else {
    map.set(item, 1)
  }
})

console.log(map)
console.log('Max occurrence count:', Math.max(...map.values()))
console.log(
  'Max occurrence of word:',
  [...map.entries()].reduce((prev, curr) => (prev[1] > curr[1] ? prev : curr))
)

console.log([...map.entries()].sort((a, b) => b[1] - a[1]))
