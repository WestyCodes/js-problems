const fibonacciTime = num => {
    fibonacciArray = [1, 1]
    let num1 = 1
    let num2 = 1
    let result = 0
    for( let i = 0; i < num; i++ ) {
        result = num1 + num2
        fibonacciArray.push(result)
        num1 = num2
        num2 = result
    }
    return fibonacciArray
}

// console.log(fibonacciTime(100))

// function listFibonacci(n) {
//     // declare the array starting with the first 2 values of the fibonacci sequence
//     // starting at array index 1, and push current index + previous index to the array
//     for (var fibonacci = [0, 1], i = 1; i < n; i++) 
//       fibonacci.push(fibonacci[i] + fibonacci[i - 1])
  
//     return fibonacci
//   }

// console.log(listFibonacci(100))