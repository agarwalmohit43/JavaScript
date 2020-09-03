function StopWatch() {
  this.duration = 0
  let start = false
  let stop = false
  let timer = 0
  this.start = function () {
    if (start) {
      throw new Error('Already started')
    } else {
      start = true
      stop = false
      timer = setInterval(() => this.duration++, 1000)
    }
  }

  this.stop = function () {
    if (stop) {
      throw new Error('Already stopped')
    } else {
      stop = true
      start = false
      clearInterval(timer)
    }
  }

  this.reset = function () {
    this.duration = 0
  }
}
