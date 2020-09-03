class test {
    t = 1;
    constructor(name){
        this.name = name
    }

    testMethod(){
    console.log(this.name)
    }

    test2 = ()=>{}
}

const p = new test()

//prototype me testMethod