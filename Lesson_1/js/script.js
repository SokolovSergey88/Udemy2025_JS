let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let question1 = prompt("Один из последних просмотренных фильмов?", ""),
    question2 = prompt("На сколько оцените его?", ""),
    question3 = prompt("Один из последних просмотренных фильмов?", ""),
    question4 = prompt("На сколько оцените его?", "");

    personalMovieDB.movies[question1] = question2;
    personalMovieDB.movies[question3] = question4;

console.log(personalMovieDB);
