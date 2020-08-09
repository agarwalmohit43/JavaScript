class Stack {
  constructor() {
    this.arr = []
  }

  push(item) {
    this.arr.push(item)
  }

  pop() {
    return this.arr.pop()
  }

  reverse() {
    this.arr.reverse()
  }
}

let obj = new Stack()
obj.push(5)
obj.push(6)
obj.push(7)
console.log(obj.pop())
console.log(obj.arr)
obj.reverse()
console.log(obj.arr)
