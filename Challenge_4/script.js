/*
First Item in an Array
*/

const arr = ['Banana', 'GodFather', 'ShawShank', 'Pickle'];

// access first element
console.log(arr[0]);

// access element at the end of an array
console.log(arr[arr.length - 1]);

// loop over an array and its index
arr.forEach(function(item, index, array) {
    console.log(item, index)
})

// could also do it this way

for (const value of arr) {
    console.log(value);
}