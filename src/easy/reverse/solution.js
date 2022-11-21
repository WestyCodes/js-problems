reverse = string => {
    let result = []
    for (let i = 0; i < string.length; i++) {
        result.unshift(string[i])
    }
    return result.join('')
}

console.log(reverse('Mr Owl ate my metal worm'))