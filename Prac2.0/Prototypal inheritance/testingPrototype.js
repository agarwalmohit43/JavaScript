function Person(fn, ln) {
  this.firstName = fn
  this.lastName = ln
}

Person.prototype.getFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`)
}

let mohit = new Person('Mohit', 'Kumar')
mohit.getFullName()

console.log(Person.prototype)

let mp = Object.create(Person.prototype, {})
console.log(mp.prototype)
