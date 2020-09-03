let arr = [3, 4, 2, 20, 9, 10]
console.log(
  arr.sort((a, b) => {
    return (a % 2) - (b % 2) || a - b
  })
)
