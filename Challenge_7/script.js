/*
Finding the Minimum & Maximum using for loops
*/

const array = [5, 2, 8, 8, 7, 3, 13];

/*
function findMin(numbers) {
    return Math.min(...array);
}

function findMax(numbers) {
    return Math.max(...array);
}
*/


function findMin(numbers) {
    let minimum = numbers[0]; // initialized min to be the first index value 

    // loop through array
    for (let i = 0; i < numbers.length; i++) {
        // check if the current index value is lesser than current min value
        if (numbers[i] < minimum) {
            // if so set the as our new min value
            minimum = numbers[i]
        }
    }
    // return that min value to user
    return minimum
}

function findMax(numbers) {
    let maximum = numbers[0] // initialized max to be the first index value

    // loop through array
    for (let i = 0; i < numbers.length; i++) {
        // check if the current index value is greater than current max value
        if (numbers[i] > maximum) {
            // if so set the as our new max value
            maximum = numbers[i]
        }
    }
    // return that max value to user
    return maximum
}



console.log("Minimum value is: ", findMin(array)); // return 3
console.log("Maximum value is: ", findMax(array)); // return 13