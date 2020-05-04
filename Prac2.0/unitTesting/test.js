describe("pow", function() {
    it("raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
        assert.equal(pow(3,4),81);
    });

    it("raises 25 to power 2", function() {
        assert.equal(pow(25, 2), 625);
    });

    /**
     * isNan
     */
    it("for negative n the result is NaN", function() {
       assert.isNaN(pow(2,-1));
    });

    it("for non-integer n the result is NaN", function() {
        assert.isNaN(pow(2, 1.5));
    });


    /**
     * assert.isTrue(value) – checks that value === true
     * assert.isFalse(value) – checks that value === false
     */
    it('return true for x being boolean -> true', function () {
        assert.isTrue(booleanTest(true));
    });

    it('return true for x being boolean -> false', function () {
        assert.isFalse(booleanTest(false));
    });

    describe("raises x to power 3", function() {
        let makeTest = x => {
            let expected = x * x * x;
            
            it(`${x} to the power of 3 results ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        };

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }
    });
});

describe("sum", function() {
    it("adds two number", function() {
        assert.equal(sum(2, 3), 5);
        assert.equal(sum(3,4),7);
    });

    it("addition on string and number datatype", function() {
        assert.equal(sum("25", 2), 27);
    });
});

/**
 * before/after
 * beforeEach/afterEach
 */
describe("test", function() {
    before(() => console.log("Testing started, before all tests"));
    after(() => console.log("Testing finished, after all tests"));

    beforeEach(() => console.log("Before a test, enter a test"));
    afterEach(() => console.log("After a test, exit a test"));

    it('test 1', () => console.log(1));
    it('test 2', () => console.log(2));
});