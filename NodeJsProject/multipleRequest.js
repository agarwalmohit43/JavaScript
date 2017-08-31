function placeOrder(orderNumber) {
    console.log("Order Placed For OrderNumber: ",orderNumber);
    cookAndDeliver(function () {
       console.log("Ready for Delivery, Order Number: ",orderNumber);
    });
}

function cookAndDeliver(callback) {
    setTimeout(callback,5000);
}

placeOrder(1);
placeOrder(2);
placeOrder(3);
placeOrder(4);
placeOrder(5);