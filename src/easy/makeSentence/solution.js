function betterSenstence(string) {
    const stringIndex = string.length

    if(string[stringIndex - 1] === `.` || string[stringIndex - 1] === `?` || string[stringIndex - 1] === `!`) {
        return string[0].toUpperCase() + string.slice(1,stringIndex)
    } else {
        return string[0].toUpperCase() + string.slice(1,stringIndex) + `.`
    }
}
console.log(betterSenstence('hello'))
console.log(betterSenstence('hello with a fullstop.'))
console.log(betterSenstence('hello with a question mark?'))
console.log(betterSenstence('hello with a exclamation mark!'))