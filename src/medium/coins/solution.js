const coins = nums => {
    let currentTotal = nums
    let hundredCoins = 0
    let twentyFiveCoins = 0
    let tenCoins = 0
    let fiveCoins = 0
    let oneCoins = 0
    while (currentTotal > 0) {
        if (currentTotal >= 100) {
            currentTotal -= 100
            hundredCoins += 1
        } else if (currentTotal >= 25) {
            currentTotal -= 25
            twentyFiveCoins += 1
        } else if (currentTotal >= 10) {
            currentTotal -= 10
            tenCoins += 1
        } else if (currentTotal >= 5) {
            currentTotal -= 5
            fiveCoins += 1
        } else if (currentTotal > 0) {
            currentTotal -= 1
            oneCoins += 1
        }
    }

    result = `(${nums}) -->`
    if (hundredCoins > 0) {
        result += ` ${hundredCoins} * 100,`
    }
    if (twentyFiveCoins > 0) {
        result += ` ${twentyFiveCoins} * 25,`
    }
    if (tenCoins > 0) {
        result += ` ${tenCoins} * 10,`
    }
    if (fiveCoins > 0) {
        result += ` ${fiveCoins} * 5,`
    }
    if (oneCoins > 0) {
        result += ` ${oneCoins} * 1`
    }

    return result
}

console.log(coins(4326))