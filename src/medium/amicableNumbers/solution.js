const sumOfProperDivisors = (num) => {
    let totals = 0
    for ( let i = 1; i < num; i++ ) { 
        if (num % i === 0) {
            totals = totals + i
         }
    }
    return totals
}

const allAmicableNumbers = (num) => {
    // let results = ``
    let resultArray = []
    for (let i = 1; i <= num; i++) {
        let firstNumber = sumOfProperDivisors(i)
        let secondNumber = sumOfProperDivisors(sumOfProperDivisors(i))

        if (secondNumber === i && firstNumber !== i) {

        // Changed this step away from the variables, which seemed to make the code work a little bit faster. Harder to read for humans though.
        
        // if (sumOfProperDivisors(sumOfProperDivisors(i)) === i && sumOfProperDivisors(i) !== i) {
            
            // results = results + ` ${sumOfProperDivisors(i)} and ${sumOfProperDivisors(sumOfProperDivisors(i))} are amicable pairs.`

            // Changed the results to be in an array, for easier reading, and possibly performance.
            resultArray.push(`${firstNumber} and ${secondNumber} are amicable pairs.`)
        }
    }
    // return results
    // returning resultArray instead of results string.
    return resultArray
}

// console.log('i= 6, first number =', sumOfProperDivisors(6))
// console.log('i = firstnumber (284), second number =', sumOfProperDivisors(284))
// console.log(sumOfProperDivisors(sumOfProperDivisors(100)))

console.log(allAmicableNumbers(100000))

