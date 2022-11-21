let totalSum = 0
sumOf3or5 = num => {
    for( let i = 1; i <= num; i++ ) {
        if ( i % 3 === 0 ) {
            totalSum = totalSum + i
        }else if ( i % 5 === 0 ) {
            totalSum = totalSum + i
        }
    }
    return totalSum
}

console.log(sumOf3or5(1000))