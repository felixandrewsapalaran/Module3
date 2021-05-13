/*
Label Good Movies and Bad Movies

Good movie rating is 7 or greater
Bad movie rating is 6 or lesser
*/

// Fixed issue:
let movie_result;

function badOrGoodMovies(movieRating) {
    if (movieRating >= 7) {
        // Problem: this will console.log undefine below the value
        //return  console.log("Good Movie");

        // Fixed problem
       movie_result = "Good Movie";

    }else {
        // Problem: this will console.log undefine below the value
        //return console.log("Bad Movie");

         // Fixed problem
        movie_result = "Bad Movie";
    }

    return movie_result;
}

console.log(badOrGoodMovies(7)); // Good
console.log(badOrGoodMovies(6)); // Bad
console.log(badOrGoodMovies(10)); // Good
console.log(badOrGoodMovies(2)); // Bad
console.log(badOrGoodMovies(9.2)); // Good
console.log(badOrGoodMovies(0)); // Bad