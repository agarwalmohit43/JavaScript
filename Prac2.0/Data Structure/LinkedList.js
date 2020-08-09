class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  //Insert first node
  insertFirst(data) {
    this.head = new Node(data, this.head)
    this.size++
  }

  //Insert last node
  insertLastNode(data) {
    let node = new Node(data)
    let current
    if (!this.head) {
      this.head = node
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }

    this.size++
  }

  //Insert at index
  insertAt(data, index) {
    //if index is less than 0 or out of range
    if (index > 0 && index >= this.size) {
      return
    }
    //if index is at first
    if (index === 0) {
      this.head = new Node(data, this.head)
    } else {
      const node = new Node(data)
      let current, previous
      let count = 0
      current = this.head
      while (count < index) {
        previous = current //Node before index
        count++
        current = current.next //Node after index
      }
      previous.next = node
      node.next = current
    }

    this.size++
  }

  //Get at index
  getAt(index) {
    let current = this.head
    let count = 0
    while (current) {
      if (count === index) {
        console.log(`Value at ${index} is ${current.data}`)
      }
      count++
      current = current.next
    }
    return null
  }

  //Remove at index
  remove(index) {
    //if index is less than 0 or out of range
    if (index > 0 && index >= this.size) {
      return null
    }
    let current, previous
    current = this.head
    let count = 0
    if (index === 0) {
      this.head = current.next
    } else {
      while (count < index) {
        count++
        previous = current
        current = current.next
      }
      previous.next = current.next
    }

    this.size--

    return null
  }

  //Clear list
  clearList() {
    this.head = null
    this.size = 0
  }

  //Print list data
  printData() {
    let current = this.head
    while (current) {
      console.log(current.data)
      current = current.next
    }
  }

  //searchRecursive
  search(item, head = this.head) {
    if (head === null) {
      console.log('Not found')
      return
    }

    if (head.data === item) {
      console.log('Element Found: ', item)
    } else {
      this.search(item, head.next)
    }
  }

  //detect loop
  detectLoop() {
    let set = new Set()
    let current = this.head
    while (current) {
      if (set.has(current)) return true

      set.add(current)
      current = current.next
    }
    return false
  }

  //reverse a list
  reverse() {
    let current = this.head
    let prev = null
    let next = null
    while (current) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    this.head = prev
  }
}
const ll = new LinkedList()
// ll.insertFirst(5)
// ll.insertFirst(6)
// ll.insertAt(7, 1)
// ll.insertAt(71, 2)
// ll.insertLastNode(82)
// ll.insertLastNode(88)
// ll.getAt(0)
// ll.remove(0)
// ll.printData()
// ll.search(99)
// console.log('Size:', ll.size)

//detectLoop
ll.insertFirst(1)
ll.insertFirst(2)
ll.insertFirst(3)
ll.insertFirst(4)
// ll.head.next.next.next.next = ll.head
// ll.detectLoop()
//   ? console.log('Loop Detected')
//   : console.log('Loop Not Detected')

// ll.printData()
ll.reverse()
ll.printData()
