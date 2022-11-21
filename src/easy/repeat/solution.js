repeat = string => {
    let result = ''
    for (let i = 0; i < string.length; i++) {
        result = result + string[i]
        result = result + string[i]
    }
    return result
}

console.log(repeat('Hello Manoj'))