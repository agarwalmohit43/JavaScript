// import {say} from './say.js'
// export {say} from './say.js'

console.log('Test');
(async function() {
    let {say:s} = await import('./say.js');
    let {hi,bye,default:obj} = await import('./say2.js');
    s()
    hi()
    bye()
    obj();
})()
