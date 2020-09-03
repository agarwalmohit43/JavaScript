import _ from 'lodash'

let arr1 = [1, 2, 3, 4]
let arr2 = [1, 2, 3, 4]

function compareArr(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  if (JSON.stringify(arr1) === JSON.stringify(arr2)) return true

  return false
}

console.log('Comparison of two array:', compareArr(arr1, arr2))

let user = {
  name: ['P', 'M'],
  display() {
    this.name.map((item) => console.log(this))
  },
  test: { name: 'test2' },
}

let obj1 = {
  name: 'MP',
  age: 25,
  todoList: { name: 'todo', obj: user },
}
let obj2 = {
  name: 'MP',
  age: 25,
  todoList: { name: 'todo', obj: user },
}

function compareTwoObjects(obj1, obj2) {
  if (JSON.stringify(obj1) === JSON.stringify(obj2)) return true
  return false
}

function deepEqual(Obj1, Obj2) {
  const key1 = Object.keys(Obj1)
  const key2 = Object.keys(Obj2)

  if (key1.length !== key2.length) return false

  for (let key of key1) {
    const val1 = Obj1[key]
    const val2 = Obj2[key]
    const areObjects = isObject(val1) && isObject(val2)

    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false
    }
  }
  return true
}

console.log(isObject({}))
function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

console.log('Comparison of two object using deepEqual:', deepEqual(obj1, obj2))
console.log(
  'Comparison of two object using compareTwoObjects:',
  compareTwoObjects(obj1, obj2)
)
console.log('Comparison of two object using lodash:', _.isEqual(obj1, obj2))
