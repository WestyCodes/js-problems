const largestProduct = nums => {
    const numsArray = nums.toString().split('')
    console.log(numsArray)
    let largestSum = 0
    let newLargeSum = 0
    for (let i = 0; i < numsArray.length - 13; i++) {
        
        let sumOfArray = []
        
        for (let j = i; j < i + 13; j++) {
            
            sumOfArray.push(numsArray[j])
        }

        newLargeSum = sumOfArray.reduce((a,b) => a*b, 1)
        
        if(newLargeSum > largestSum) {
            largestSum = newLargeSum
        }
        // console.log(sumOfArray)
    }
    return largestSum
}

console.log(largestProduct(87120387123871238712387123))
