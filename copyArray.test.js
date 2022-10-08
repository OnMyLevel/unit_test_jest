const copyArray = require('./copyArray')

describe('test copyArray', () => {
    const array = [1,2,3];

    it('clone array worst', () => {
        expect(copyArray(array)).not.toBe(array); // memory addresse
    });

    it('clone array good', () => {
        expect(copyArray(array)).toEqual(array);
    });
})