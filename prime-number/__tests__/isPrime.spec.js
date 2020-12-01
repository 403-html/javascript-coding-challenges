const isPrime = require('../isPrime')

test.skip('0 should not be a prime', () => {
    expect(isPrime(0)).toBe(false)
})

test.skip('1 should not be a prime', () => {
    expect(isPrime(1)).toBe(false)
})

test.skip('2 should be a prime', () => {
    expect(isPrime(2)).toBe(true)
})

test.skip('3 should be a prime', () => {
    expect(isPrime(3)).toBe(true)
})

test.skip('5 should be a prime', () => {
    expect(isPrime(5)).toBe(true)
})

test.skip('6 should not be a prime', () => {
    expect(isPrime(6)).toBe(false)
})

test.skip('15 should not be a prime', () => {
    expect(isPrime(15)).toBe(false)
})

test.skip('27 should not be a prime', () => {
    expect(isPrime(27)).toBe(false)
})

test.skip('97 should be a prime', () => {
    expect(isPrime(97)).toBe(true)
})

test.skip('3125 should not be a prime', () => {
    expect(isPrime(3125)).toBe(false)
})
