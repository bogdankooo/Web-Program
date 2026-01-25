let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

  while (numberOfFilms == "" || isNaN(numberOfFilms) || numberOfFilms == null) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("error");
      i--;
    }
  }
}

rememberMyFilms();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(
      "Ваш любимый жанр под номером: " + i + ".",
    );
  }
}

writeYourGenres();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

detectPersonalLevel();

function showMyDB() {
  if (personalMovieDB.privat) {
  } else {
    console.log(personalMovieDB);
  }
}

showMyDB();

// let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// while (numberOfFilms === 0 || isNaN(numberOfFilms)) {
//   numberOfFilms = +prompt("Введите число больше 0:", "");
// }

// if (numberOfFilms < 10) {
//   alert("Просмотрено довольно мало фильмов.");
// }

// if (numberOfFilms >= 10 && numberOfFilms < 30) {
//   alert("Вы классический зритель.");
// }

// if (numberOfFilms > 30) {
//   alert("Да вы киноман!");
// }

// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// for (let i = 0; i < 2; i++) {
//   let a, b;

//   while (!a || a.length === 0 || a.length >= 50) {
//     a = prompt("Назовите один из последних просмотренных фильмов.", "");

//     if (a === null) {
//       alert("Нельзя отменить ответ!");
//       a = "";
//     }

//     if (a.length >= 50) {
//       alert("Слишком длинное название фильма!");
//     }
//   }

//   while (b === 0 || isNaN(b)) {
//     b = +prompt("На сколько оцените его?", "");

//     if (b === 0 || isNaN(b)) {
//       alert("Введите корректную оценку!");
//     }
//   }

//   personalMovieDB.movies[a] = b;
// }

// console.log(personalMovieDB);
