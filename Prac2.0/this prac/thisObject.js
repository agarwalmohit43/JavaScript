let user = {
  name: 'MP',
  displayName: function () {
    console.log(`Name: ${this.name}`)
  },
}

let mp = user
mp.displayName()
