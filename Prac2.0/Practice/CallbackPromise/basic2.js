async function test() {
  let response = await setTimeout(() => 10, 2000)

  return response
}

test().then(console.log)
/*
* Timeout {
  _idleTimeout: 20000,
  _idlePrev: [TimersList],
  _idleNext: [TimersList],
  _idleStart: 47,
  _onTimeout: [Function (anonymous)],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(asyncId)]: 2,
  [Symbol(triggerId)]: 1
}*/
