/*
Check if a string is empty
*/

function isEmptyString(some_string) {
    // Checks string empty, null, undefined
    return (!some_string || some_string.length === 0);
}

console.log(isEmptyString(""))
console.log(isEmptyString("Hello"))
console.log(isEmptyString(2))