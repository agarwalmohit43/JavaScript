let today = new Date()
today.setDate(today.getDate() - 28)
console.log(today.toLocaleDateString())

today = new Date(2020, 8, 23)
today.setDate(today.getDate() + 9)
console.log(today.toLocaleDateString())

console.log(
  new Date(new Date().setDate(new Date().getDate() + 4)).toLocaleDateString()
)
