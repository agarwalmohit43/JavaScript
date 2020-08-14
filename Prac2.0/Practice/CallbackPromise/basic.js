// new Promise((resolve, reject) => {
//   return reject(new Error('Whoo'))
// })
//   .then(console.log)
//   .catch((err) => console.log(err.message))
//   .finally(console.log('finally'))

// let promise2 = new Promise((resolve, reject) => {
//   return reject('Mine')
// })
//   .then(console.log)
//   .catch(console.log)
//
// setTimeout(() => console.log(promise2), 2000)
//
// //promise2 is undefined, since we already handled the promise at catch block so it return undefined

let promise3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve('done'), 1000)
)
let promise4 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error('Error')), 2000)
)
let promise5 = new Promise((resolve, reject) =>
  setTimeout(() => resolve('done'), 2000)
)

Promise.all([promise3, promise4, promise5]).then(console.log).catch(console.log)
/*
* Error: Error
    at Timeout._onTimeout (C:\Users\MOHIT AGARWAL\WebstormProjects\Prac2.0\Practice\CallbackPromise\basic.js:22:27)
    at listOnTimeout (internal/timers.js:549:17)
    at processTimers (internal/timers.js:492:7)*/

// let p = Promise.allSettled([promise3, promise4, promise5])
//   .then(console.log)
//   .catch(console.log)
/*
* [
  { status: 'fulfilled', value: 'done' },
  {
    status: 'rejected',
    reason: Error: Error
        at Timeout._onTimeout (C:\Users\MOHIT AGARWAL\WebstormProjects\Prac2.0\Practice\CallbackPromise\basic.js:22:27)
        at listOnTimeout (internal/timers.js:549:17)
        at processTimers (internal/timers.js:492:7)
  },
  { status: 'fulfilled', value: 'done' }
]*/

Promise.race([promise3, promise4, promise5])
  .then(console.log)
  .catch(console.log)
