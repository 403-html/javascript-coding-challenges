const genSum = require('../randsum')

test('Providing "0" as argument should give an array that\'s empty', () => {
    const arrayLength = 0
    const randomArray = new genSum(arrayLength)

    expect(randomArray.array.length).toBe(arrayLength)
    expect(randomArray.sumArray()).toEqual([])
})

test('Providing "1" as argument should give an array that contains "0"', () => {
    const arrayLength = 1
    const randomArray = new genSum(arrayLength)

    expect(randomArray.array.length).toBe(arrayLength)
    expect(randomArray.sumArray()).toEqual(0)
})

test('Array should have length 4, and values should sum to 0', () => {
    const arrayLength = 4
    const randomArray = new genSum(arrayLength)

    expect(randomArray.array.length).toBe(arrayLength)
    expect(randomArray.sumArray()).toEqual(0)
})

test('Array should have length 17, and values should sum to 0', () => {
    const arrayLength = 17
    const randomArray = new genSum(arrayLength)

    expect(randomArray.array.length).toBe(arrayLength)
    expect(randomArray.sumArray()).toEqual(0)
})
