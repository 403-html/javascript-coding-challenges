const isPrime = require('../isPrime')

test('0 should not be a prime', () => {
    expect(isPrime(0)).toBe(false)
})

test('1 should not be a prime', () => {
    expect(isPrime(1)).toBe(false)
})

test('2 should be a prime', () => {
    expect(isPrime(2)).toBe(true)
})

test('3 should be a prime', () => {
    expect(isPrime(3)).toBe(true)
})

test('5 should be a prime', () => {
    expect(isPrime(5)).toBe(true)
})

test('6 should not be a prime', () => {
    expect(isPrime(6)).toBe(false)
})

test('15 should not be a prime', () => {
    expect(isPrime(15)).toBe(false)
})

test('27 should not be a prime', () => {
    expect(isPrime(27)).toBe(false)
})

test('97 should be a prime', () => {
    expect(isPrime(97)).toBe(true)
})

test('3125 should not be a prime', () => {
    expect(isPrime(3125)).toBe(false)
})
