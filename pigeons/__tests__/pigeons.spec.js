const feeding = require('../pigeons')

test.skip('0 wheat should last for 0 pigeons', () => {
    expect(feeding(0)).toBe(0)
})

test.skip('1 wheat should last for 1 pigeons', () => {
    expect(feeding(1)).toBe(1)
})

test.skip('2 wheat should last for 1 pigeons', () => {
    expect(feeding(2)).toBe(1)
})

test.skip('17 wheat should last for 10 pigeons', () => {
    expect(feeding(17)).toBe(10)
})

test.skip('100 wheat should last for 28 pigeons', () => {
    expect(feeding(100)).toBe(28)
})
