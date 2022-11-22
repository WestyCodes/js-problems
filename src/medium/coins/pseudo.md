# Pseudo Code Solution

Create function coins which takes 1 argument nums
    let currentTotal equal nums
    let 100s equal 0
    let 25s equal 0
    let 10s equal 0
    let 5s equal 0
    let 1s equal 0
    while currentTotal does not equal 0 loop.
        if currentTotal is greater than 100,
            currentTotal equals currentTotal - 100
            100s equals 100s plus 1.
        else if currentTotal is greater than 25,
            currentTotal equals currentTotal -25
            25s equals 25s plus 1.
        else if currentTotal is greater than 10,
            currentTotal equals currentTotal - 10
            10s equals 10s plus 1.
        else if currentTotal is greater than 5,
            currentTotal equals currentTotal - 5
            5s equals 5s plus 1.
        else if currentTotal is greater than 1,
            currentTotal equals currentTotal - 1
            1s equals 1s plus 1.
    result = `(${nums}) -->`
    if 100s greater than 0
        result equals result + `${100s} * 100,`
    if 25s greater than 0
        result equals result + `${25s} * 25,`
    if 10s greater than 0
        result equals result + `${10s} * 10,`
    if 5s greater than 0
        result equals result + `${5s} * 5,`
    if 1s greater than 0
        result equals result + `${1s} * 1`
    return result
