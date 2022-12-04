import {toExport as movies} from "./data.js";


// YOUR CODE COMES HERE

// Find the dramas - First solution:on:

let newArrayWithTheTitles = [];

// movies.forEach(movie => {
// 	if (movie.genres.includes("Drama")) {
// 		newArrayWithTheTitles.push(movie.title);
// 	}
// });
// // console.log(newArrayWithTheTitles);

// Find the dramas - Second solution:
console.log("-----------------------Find the dramas----------------------------------");

function dramas(array, genre) {
	array
		.filter(movie => movie.genres.includes(genre))
		.forEach(movie => {
			return newArrayWithTheTitles.push(movie.title);
		});
	console.log(newArrayWithTheTitles);
}
dramas(movies, "Drama");

// Find movies by genre
console.log("-----------------------Find movies by genre----------------------------------");

function findByGenre(array, genre) {
	let newArray = [];
	array
		.filter(movie => movie.genres.includes(genre))
		.forEach(movie => {
			return newArray.push(movie.title);
		});
	console.log(newArray);
}
findByGenre(movies, "Comedy");

// // Find the longest movie
console.log("-----------------------Find the longest movie----------------------------------");


function longestMovie(array) {
	let longestMovieObj = movies[0];

	function hasLongestRuntime(movie) {
		if (movie.runtime > longestMovieObj.runtime) {
			longestMovieObj = movie;
		}
	}
	array.forEach(movie => hasLongestRuntime(movie));
	console.log(longestMovieObj.title);
}
longestMovie(movies);

// Find the longest movie by genre
console.log("-----------------------Find the longest movie----------------------------------");

function longestMovieByGenre(genre, array) {
	let largestRunTimeElement = array[0];
	array.forEach(element => {
		if (element.genres.includes(genre)) {
			if (largestRunTimeElement.runtime <= element.runtime) {
				largestRunTimeElement = element
			}
		}
		return largestRunTimeElement;
	});
	console.log(largestRunTimeElement);
}
longestMovieByGenre("Adventure", movies)

// Rearrange the anonymous functions
console.log("-----------------------Rearrange the anonymous functions----------------------------------");




// DO NOT MODIFY THE CODE BELOW THIS LINE

let toExport;

try {
	toExport = [
		{name: "dramas", content: dramas, type: "function"},
		{name: "findByGenre", content: findByGenre, type: "function"},
		{name: "longestMovie", content: longestMovie, type: "function"},
		{name: "longestMovieByGenre", content: longestMovieByGenre, type: "function"}
	]
} catch (error) {
	toExport = {error: error.message}
}

export {toExport}
