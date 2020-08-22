let map = new Map()
map.set(1, 'numeric1')
console.log(map.set('1', 'string1'))
map.set(2, 'deleteCheck')
console.log(map.size)
console.log(map.get(1))
console.log(map.get('1'))
console.log('Delete: ' + map.delete(2))
console.log(map.has(1))
console.log(map)

for (let entry of map) {
  console.log(entry)
}

//forEach map
console.log('forEach')
map.forEach((val, key, map) => {
  console.log(`Key: ${key}, Value: ${val}`)
})

console.log('creating a map from plain object')
let user = {
  1: 'test',
  name: 'Mohit',
  age: 25,
}
console.log('entries: ' + Object.entries(user))
console.log('Keys: ' + Object.keys(user))
let userMap = new Map(Object.entries(user))
console.log(userMap)

let objFromUserMap = Object.fromEntries(userMap.entries()) //
console.log(objFromUserMap)
// for (let prop in objFromUserMap) {
//     console.log(prop)
// }

//double the value of the map key/value
let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
}
console.log('Array of prices: ' + Object.entries(prices))
let doublePrice = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
)
console.log('DoublePrice of orange: ' + doublePrice.orange)

let mobilePrice = {
  samsungS10: 74000,
  iPhoneXSMax: 80000,
}

let discountedPrice = Object.fromEntries(
  Object.entries(mobilePrice).map(([key, value]) => [key, value * 0.85])
)
console.log('15% sale on mobiles: ' + discountedPrice)
