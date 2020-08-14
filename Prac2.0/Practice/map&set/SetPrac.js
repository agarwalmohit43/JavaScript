let set = new Set()
let funcTest = () => {}
let user = { name: 'Mp' }
set.add(funcTest)
set.add(NaN)
set.add(user)
set.add(undefined)
set.add(null)
set.add(1)
set.add('1')

console.log(...set) //[Function: funcTest] NaN { name: 'Mp' } undefined null 1 1
