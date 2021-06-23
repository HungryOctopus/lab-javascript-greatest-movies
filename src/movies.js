// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

//Here we want to pass an array of movies and give back an array of directors
function getAllDirectors(movies) {
  const allMovieDirectors = movies.map((movie) => {
    return movie.director;
  });
  return allMovieDirectors;
}

// Bonus: no duplicates: with filter method
// if this item is alredy there in the array, we won't include it
const filteredDirectors = allMovieDirectors.filter(
  (value, index, originalArray) => {
    return originalArray.indexOf(value) === index;
    // with indexOf (check if the value is the same as the index)
  }
);
return filteredDirectors;
//you could chained it to the function getAllDirectors

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(movies) {
  const dramaMoviesDirectedBySpielberg = movies.filter((movie) => {
    // return movie.director === 'Steven Spielberg' && movie.genre.includes 'Drama'
    const spielbergMovies = movie.director === 'Steven Spielberg';
    // const isMovieDrama
  });
}
//to round to 2 decimals after the comma
const round = (value, digits) =>
  Math.round(value * 10 ** digits) / 10 ** digits;

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {
  // reduce
  const sumOfScores = movies.reduce((accumulator, movie) => {
    return accumulator + movie.score;
  }, 0);
  const averageScore = sumOfScores / movies.length;
  return round(averageScore, 2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear() {}
// use .sort but clone the array before so the array won't be mutated
//for alphabetical order: use localeCompare


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}
// first 20 movies with slice

// map them and only extract the titles

// sort the array alphabetically & use localeCompare



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}
