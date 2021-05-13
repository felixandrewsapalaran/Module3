/*
Sort by the biggest numbers
*/

const num = [5, 8, 2, 9, 3, 10];

// Sort from less to greatest
function sortNumbers1(a, b) {
    return a - b;
}

// Sort from less to greatest
function sortNumbers2(a, b) {
    return b - a;
}

console.log("smallest to biggest", num.sort(sortNumbers1));
console.log("biggest to smallest", num.sort(sortNumbers2));
