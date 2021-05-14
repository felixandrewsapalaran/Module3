/*
How to use HELPER Functions
*/

// Before
function findMaxHelper(numbers, start) {
    // findMax([5, 2, 9, 8, 7, 13]) -> 13
    // findMax([5, 2, 9, 8, 7, 3]) -> 9

    // set max value as the value of the first index
    let maximum = numbers[start];
    for (let i = start; i < numbers.length; i++) {
        // check if the current index value in the loop
        // is greater than what we set on maximum
        if (numbers[i] > maximum) {
            // if so set that as our new max value
            maximum = numbers[i]
            max_location = i
        }
    }
    return {
        max_number: maximum,
        max_index: max_location,
    }
}

// Passing: (array, starting point index value)
console.log(findMaxHelper([5, 2, 9, 8, 7, 1], 4));