let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let finishFilmName = prompt(
    "Назовите один из последних просмотренных фильмов.",
  );
  let finishFilmGrade = prompt("На сколько оцените его?");

  personalMovieDB.movies[finishFilmName] = finishFilmGrade;
}

console.log(personalMovieDB)


