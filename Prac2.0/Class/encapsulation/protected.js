class coffeeMachine {

    _waterAmount = 1;

    constructor(power) {
        this._power = power;
    }

    get power() {
        return this._power;
    }

    set waterAmount(value) {
        if (value < 0) throw new Error("Negative water");
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }
}

let cM = new coffeeMachine(200);
console.log(cM.waterAmount)
// cM.waterAmount = -5; // throws error for setting negative value

