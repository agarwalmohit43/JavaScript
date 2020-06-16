let ladder = {
    step : 0,

    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep(){
        console.log(this.step)
        return this;
    }
}
//
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().down().showStep();

// make chain call

let testUser = {
    name: 'MP',
    display(){
        console.log(`Inside Display function of testUser ${this.name}`);
        return this;
    },

    changeName() {
        this.name = 'PM'
        return this;
    }
}

testUser.changeName().display()