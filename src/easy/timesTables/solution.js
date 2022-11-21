timesTables = num => {
    let result = []
    for (let i= 1; i <= 12; i++) {
        result.push( i * num)
    }
    return result
}
console.log(timesTables(5))