const subtract = require('./subtract')

describe('test subtract', () => {

    it('should add to be 2-1=1', () => {
        expect(subtract (2,1)).toBe(1);
    });
})