const isDividiedBy = (num, multiplier) => {
    if (num % multiplier == 0) {
        return true
    }
}
const fizzbuzz = (n) => {
    return new Array(n).fill('').map((val, index) => {
        if (isDividiedBy(index + 1, 3) && isDividiedBy(index + 1, 5)) {
            return 'FizzBuzz'
        } else if (isDividiedBy(index + 1, 3) || isDividiedBy(index + 1, 5)) {
            if (isDividiedBy(index + 1, 3)) return 'Fizz'
            if (isDividiedBy(index + 1, 5)) return 'Buzz'
        }
        return index + 1
    })
}

console.log(fizzbuzz(15))
