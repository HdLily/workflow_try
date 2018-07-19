const expect = require('chai').expect
const { add } = require('../index')

describe('hello-npm-script', () => {
    // 方方面面都考虑进去
    describe('#add', ()=> {
        it('should return sum when param are numbers', ()=> {
            expect(add(3,2)).to.equal(5);
            expect(add(3, 0)).to.equal(3);
        })
        it('return NaN when your numbers are unlegal', () => {
            expect(isNaN(add(1, '2'))).to.equal(true);
        })
    })
})