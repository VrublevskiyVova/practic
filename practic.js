const numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');

const personalMovieDB = {
      count: numberOfFilms,
      movies: {},
      actors: {},
      genres: [],
      privat: false
};

const a = prompt('Один из поледних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из поледних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;   
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);