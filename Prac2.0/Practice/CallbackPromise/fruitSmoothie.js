let getFruit = async (name) => {
  const fruit = { p: 'pineapple', a: 'apple' }
  return fruit[name]
}

getFruit('a').then(console.log)

let getSmoothie = async () => {
  const a = getFruit('a')
  const p = getFruit('p')
  const smoothie = await Promise.all([a, p])

  return smoothie
}

getSmoothie().then(console.log)

let getSmoothie2 = () => {
  let a
  return getFruit('a')
    .then((v) => {
      console.log('a', v) //a apple
      a = v
      return getFruit('p')
    })
    .then((v) => {
      console.log('p', v) //p pineapple
      console.log([v, a]) //[ 'pineapple', 'apple' ]
      return [v, a]
    })
}

// getSmoothie2().then(console.log)
