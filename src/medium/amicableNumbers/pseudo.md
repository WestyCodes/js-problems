# Pseudo Code Solution

Create the first of two functions which takes a single argument a number.
    Create flex variable named totals equal to zero
    For Loop where i equals 1, and itterate up until i is less than argument number.
        if argument number modulo i has no remainder, then add i to the total variable which creates a sum of all i's we want to keep.
    return totals.

Create the second function which takes a single argument, a number.
    create an empty results array.
    For loop, where i equals 1, and continues until i equals num.
        if the total of the first function[i] does not equal i
        AND the sum of the first function(firstfunction(i)) equals i
        Push the result into the results array.
    return results array.

Lines 12-14 explained further:
if the total of the first function(i) does not equal i
AND the sum of the first function(firstfunction(i)) equals i

The first function will find the sum of ALL numbers which can cleanly divide its argument number with no remainder.

We want to find two instances (pairs), whose sum of divisble numbers equal one another.

So if the loop index number = 284, the sum of its divisible parts is 220.
The secondNumber = 220, and the sum of its divisible parts is 284. So they are amicable pairs, and thats what we are looking for.

SO.... if the loop index number EQUALS the SUM of the secondNumber, then they are the same. Which would be written as firstFunction(firstFunction(i)) === i.

But we don't want it if they are the same number... 0 and 0 are not amicable numbers.
if the firstNumber (firstFunction(i)) DOES NOT EQUAL i (in other words itself)

If both those statements are true, then we push the result.
