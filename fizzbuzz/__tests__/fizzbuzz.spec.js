const fs = require('fs')

const fizzbuzz = require('../fizzbuzz')
const fixtures = JSON.parse(fs.readFileSync(__dirname + '/fixtures.json'))

test('0 fizzbuzz should answer empty array', () => {
    expect(fizzbuzz(0)).toStrictEqual(fixtures.a0)
})

test('2 fizzbuzz should answer proper array', () => {
    expect(fizzbuzz(2)).toStrictEqual(fixtures.a2)
})

test('3 fizzbuzz should answer proper array', () => {
    expect(fizzbuzz(3)).toStrictEqual(fixtures.a3)
})

test('5 fizzbuzz should answer proper array', () => {
    expect(fizzbuzz(5)).toStrictEqual(fixtures.a5)
})

test('17 fizzbuzz should answer proper array', () => {
    expect(fizzbuzz(17)).toStrictEqual(fixtures.a17)
})
