createRange = (array) => {
    let max = 0
    let min = 999
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max ) {
            max = array[i]
        }
         if (array[i] < min){
            min = array[i]
        }  
    }
    return max - min
}

console.log(createRange([ 1, 2, 6, 8, 10, 12, 35]))