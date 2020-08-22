let map = new Map()

let testFunc = () => {}
let user = { name: 'Mp', NaN: 'nan', undefined: 'undefined' }

map.set(null, 'Null')
map.set(null, '4') //value get override in same key case
map.set(NaN, 'nan')
map.set(undefined, 'ada')
map.set(user, 'obj')
map.set(testFunc, 'func')
map.set(1, '1')

// console.log(map)
/*Map(6) {
  null => '4',
  NaN => 'nan',
  undefined => 'ada',
  { name: 'Mp' } => 'obj',
  [Function: testFunc] => 'func',
  1 => '1'
}*/
console.log(map.entries())
console.log(map.get(testFunc)) //func
console.log(user) //func
