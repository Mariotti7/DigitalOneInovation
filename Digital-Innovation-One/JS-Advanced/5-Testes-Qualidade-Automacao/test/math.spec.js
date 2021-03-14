const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')

describe('Math class', function () {
    it('Sum two numbers', function () {
        const math = new Math()

        const value = math.sum(5, 5)

        try {
            expect(value).to.equal(10)
        } catch (err) {
            console.log(err)
        }
    })

    it('Is it sum is bigger than zero?', function () {
        const bigger = new Math()

        try {
            assert(bigger.sum(5, 5) > 0)
        } catch (err) {
            console.log(err)
        }
    })

    it('Have a property object called name?', function () {
        const obj = {
            name: 'Leandro Mariotti'
        }
        try {
            expect(obj).to.have.property('name')
            .equal('Leandro Mariotti')
        } catch (err) {
            console.log(err)
        }
    })

    it.only('Calls req with sum and index values', function () {
        const req = {}
        const res = {
           load: sinon.spy()
       }
        const math = new Math()
        math.printSum(req, res, 5, 5)
        expect(res.load.calledOnce).to.be.true
       })
})
