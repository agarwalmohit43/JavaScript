//method-> Object
//function-> global(window)

let user = {
  name: 'MP',
  showName() {
    console.log(this.name)
  },
  tag: [1, 2, 3, 4, 5],
  showTag() {
    this.tag.forEach(function (tag) {
      console.log(this.name, tag)
    }, this)
  },
}

user.showName()
user.showTag()

/*
(item) => {
      console.log(this.name, item)
    }
    since arrow function has no this in them, refers to lexical scope variable
    */

let camera = {
  price: 600,
  showCam: (Obj) => {
    console.log(`Price of camera: ${Obj.price}`)
  },
  showCamFunc() {
    console.log(`Price of camera: ${this.price}`)
  },
}

// camera.showCam(camera)
camera.showCamFunc()
