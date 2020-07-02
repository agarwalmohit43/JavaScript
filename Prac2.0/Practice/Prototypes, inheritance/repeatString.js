String.prototype.repeat = function (n) {
    return new Array(n+1).join(this)
}

console.log("MP".repeat(1))