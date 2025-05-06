const movies = [
  {
    title: "The Matrix",
    director: "Wachowski Brothers",
    year: 1999,
    rating: 8.7,
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
  },
  { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
];

// 1. احصل على عنوان أول فيلم تم إصداره بعد عام 2000.
let firstMovieAfter2000 = movies.find((e) => e.year > 2000);

console.log(firstMovieAfter2000);

// 2. احصل على عنوان أول فيلم تقييمه أعلى من 9.
let firstMovieRateMore9 = movies.find((e) => e.rating > 9);

console.log(firstMovieRateMore9);

// 3. احصل على الأفلام التي أخرجها "Christopher Nolan" فقط.

let moviesDirNolan = movies.filter((e) => e.director == "Christopher Nolan");

console.log(moviesDirNolan);
