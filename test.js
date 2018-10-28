const assert = require('assert');
const { sumOfOther, make, sum, recursion} = require('./src/index');

describe('sumOfOther', () => {
        it('1', () => {
            const count = sumOfOther([2, 3, 4, 1]);
            assert.deepEqual(count, [8, 7, 6, 9]);
        })
    });

describe('recursion', () => {
    it('1', () => {
        const tree = recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}});
        assert.deepEqual(tree, [[100], [90, 120], [70,99,110,130]]);

    })
});

describe('make', () => {
    it('1', () => {
        const tempArray = make(15)(34, 21, 666)(41)(sum);
        assert.equal(tempArray, 777);
    })
});