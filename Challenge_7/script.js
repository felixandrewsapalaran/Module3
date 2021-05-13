/*
Finding the Minimum
*/

const array = [5, 8, 9, 8, 7, 3];

function findMin(numbers) {
    return Math.min(...array);
}

function findMax(numbers) {
    return Math.max(...array);
}



console.log("Minimum value is: ", findMin(array)); // return 3
console.log("Maximum value is: ", findMax(array)); // return 9