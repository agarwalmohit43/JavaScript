let arrayItems = []
function addToCart(obj) {
  let indexOfObj = arrayItems.findIndex((item) => item.id === obj.id)
  if (indexOfObj === -1) {
    arrayItems.push(obj)
  } else {
    // let presentObj = arrayItems[indexOfObj]
    // presentObj.qty += obj.qty
    // arrayItems.splice(indexOfObj, 1, presentObj)
    arrayItems[indexOfObj].qty = arrayItems[indexOfObj].qty + obj.qty
  }
}
addToCart({ id: 1, qty: 5 })
addToCart({ id: 2, qty: 5 })
addToCart({ id: 1, qty: 5 })
addToCart({ id: 10, qty: 5 })
addToCart({ id: 1, qty: 5 })
console.log(arrayItems)

// <div id="a" class="a">
//     <div id="b" class="b"></div>
// </div>
//
// #a #b {} -> ans
// .a #b {}
// #a .b{}
// #b {}
