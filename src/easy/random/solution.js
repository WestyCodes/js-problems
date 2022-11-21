randomNumberGenerator = (min, max) => {
    const result = Math.floor(Math.random() * (max - min) + min)
    return result
}

console.log(randomNumberGenerator(1,10))
console.log(randomNumberGenerator(1,100))
