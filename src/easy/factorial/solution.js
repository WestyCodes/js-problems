
// let givenNumber = 6
// for (let i = 1; i <= givenNumber; i++) {
//     result = result * i
// }
// console.log(result)

factorial = num => {
    let result = 1
    for (let i = 1; i <= num; i++) {
        result = result * i
    }
    return result
}

console.log(factorial(5))