let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

while (numberOfFilms === 0 || isNaN(numberOfFilms)) {
  numberOfFilms = +prompt("Введите число больше 0:", "");
}

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let a, b;

  while (!a || a.length === 0 || a.length >= 50) {
    a = prompt("Назовите один из последних просмотренных фильмов.", "");

    if (a === null) {
      alert("Нельзя отменить ответ!");
      a = "";
    }

    if (a.length >= 50) {
      alert("Слишком длинное название фильма!");
    }
  }

  while (b === 0 || isNaN(b)) {
    b = +prompt("На сколько оцените его?", "");

    if (b === 0 || isNaN(b)) {
      alert("Введите корректную оценку!");
    }
  }

  personalMovieDB.movies[a] = b;
}

console.log(personalMovieDB);
