class Queue {
  constructor() {
    this.arr = []
  }

  unshift(item) {
    this.arr.unshift(item)
  }

  pop() {
    return this.arr.pop()
  }

  reverse() {
    this.arr.reverse()
  }
}

let obj = new Queue()
obj.unshift(5)
obj.unshift(6)
obj.unshift(7)
console.log(obj.arr)
console.log(obj.pop())
console.log(obj.arr)
obj.reverse()
console.log(obj.arr)
