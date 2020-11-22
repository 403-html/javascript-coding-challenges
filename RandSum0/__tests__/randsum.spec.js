const genSum = require('../index')

const sumArrElems = (arr) => arr.reduce((a, b) => a + b)

// Have to be fixed in algorithm
// test("Should give an array that's empty", () => {
//     const arrayLength = 0
//     const randomArray = new genSum(arrayLength).array

//     expect(randomArray.length).toBe(arrayLength)
//     expect(randomArray).toBe([])
// })

test('Array should have length 1, and value of that element should be 0', () => {
    const arrayLength = 1
    const randomArray = new genSum(arrayLength).array

    expect(randomArray.length).toBe(arrayLength)
    expect(randomArray[0]).toBe(0)
})

test('Array should have length 4, and values should sum to 0', () => {
    const arrayLength = 4
    const randomArray = new genSum(arrayLength).array

    expect(randomArray.length).toBe(arrayLength)
    expect(sumArrElems(randomArray)).toBe(0)
})

test('Array should have length 17, and values should sum to 0', () => {
    const arrayLength = 17
    const randomArray = new genSum(arrayLength).array

    expect(randomArray.length).toBe(arrayLength)
    expect(sumArrElems(randomArray)).toBe(0)
})
