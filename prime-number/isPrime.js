const isPrime = (n) => {
    for (let i = 2; i < n; i++) if (n % i === 0) return false
    return n !== 1
}

console.log(isPrime(12))
console.log(isPrime(13))
console.log(isPrime(11))
