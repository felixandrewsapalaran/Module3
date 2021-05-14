/*
Sort by the biggest numbers to smallest and vice versa
*/

const num = [5, 8, 2, 9, 3, 10];

// Sort from smallest to biggest
function sortNumbers1(a, b) {
    return a - b;
}

// Sort from biggest to smallest
function sortNumbers2(a, b) {
    return b - a;
}

console.log("smallest to biggest", num.sort(sortNumbers1));
console.log("biggest to smallest", num.sort(sortNumbers2));
