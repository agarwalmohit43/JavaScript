let date = new Date()

for (let i = 0; i < 5; i++) {
  date.setDate(date.getDate() + 28)
  console.log(date.toLocaleDateString())
}
