sumOfNumbers = (num1, num2) => {
    let result = 0
    for(let i = num1; i <= num2; i++) {
        result += i
    }
    return result
}
console.log( sumOfNumbers(1, 100))