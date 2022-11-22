# Pseudo Code Solution
create function taking a single argument nums
    numsArray = nums individually turned into array
    largestSum = 0
    for loop where i is 0, and we keep doing until loop index = array.length -13 increment by 1
        sumOfArray = []
        for loop where j = i, and we keep going until j = i+13 J++
            push each number into sumOfArray
        reduce sumOfArray with multiplication into newLargeSum
        if newLargeSum is larger than largestSum
            largestSum = newLargeSum
    return largestSum
