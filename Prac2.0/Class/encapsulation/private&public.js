class CoffeeMachine {
    #waterAmount = 200;
    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) throw new Error("Negative water");
        this.#waterAmount = value;
    }
}
let machine = new CoffeeMachine();
machine.waterAmount = 100;
console.log(machine.waterAmount);