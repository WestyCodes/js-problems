let totalSum = 0
for( let i = 1; i <= 1000; i++ ) {
    if ( i % 3 === 0 ) {
        totalSum = totalSum + i
    }else if ( i % 5 === 0 ) {
        totalSum = totalSum + i
    }
}
console.log(totalSum)
return totalSum
