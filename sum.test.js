const sum = require('./sum')
/*
beforeEach(()=>{
    console.log("beforeEach");
})

beforeAll(()=>{
    console.log("beforeAll");
})

afterEach(()=>{
    console.log("afterEach");
})

afterAll(()=>{
    console.log("afterAll");
})*/

describe('test sum', () => {

    it('should add to be 1+2=3', () => {
        expect(sum(1,2)).toBe(3);
    });
})