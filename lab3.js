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

// 4. احصل على الأفلام التي تم إصدارها قبل عام 2010.

let moviesBefore2010 = movies.filter((e) => e.year < 2010);

console.log(moviesBefore2010);

// 5. احصل على مصفوفة تحتوي فقط عناوين الأفلام.

let moviesTitle = movies.map((e) => e.title);

console.log(moviesTitle);

// 6. احصل على متوسط تقييم جميع الأفلام.

let avgRate = movies.reduce((sum, e) => sum + e.rating, 0) / movies.length;
console.log(avgRate);

// 7. قم بترتيب الأفلام حسب السنة (الأقدم إلى الأحدث).
let sortByYear = movies.slice().sort((a, b) => a.year - b.year);

console.log(sortByYear);

// 8. قم بترتيب الأفلام حسب التقييم (من الأعلى إلى الأقل).

let sortByRate = movies.slice().sort((a, b) => b.rating - a.rating);

console.log(sortByRate);

// 9. هل جميع الأفلام تقييمها أعلى من 8؟

let moviesUp9Rate = movies.every((e) => e.rating < 8);

console.log(moviesUp9Rate);

// 10. هل يوجد فيلم واحد على الأقل تم إصداره في عام 1999؟

let oneMovieBefore1999 = movies.some((e) => e.year == 1999);

console.log(oneMovieBefore1999);

// 11. هل جميع الأفلام أخرجها نفس المخرج؟
let isMoviesSameDir = movies.every((e) => e.director == "rancis Ford Coppola");

console.log(isMoviesSameDir);

// 12. هل يوجد فيلم واحد على الأقل تقييمه أقل من 8.5؟
let oneMovieRate = movies.some((e) => e.rating < 8.5);

console.log(oneMovieRate);
