let today = new Date()
let lastWeekTuesday = new Date(2020, 8, 23)

let diff = Math.abs(today - lastWeekTuesday)
console.log(diff) //657249946

let diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24))
console.log('Difference including the both the dates days', diffDays)
