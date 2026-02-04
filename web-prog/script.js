let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (
      personalMovieDB.count == "" ||
      isNaN(personalMovieDB.count) ||
      personalMovieDB.count == null
    ) {
      personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },
  rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "").trim(),
        b = prompt("На сколько оцените его?", "");

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
    } else {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      let genres = prompt("Ваш любимый жанр под номером: " + i + ".");

      if (genres === "" || genres === null) {
        console.log("Вы ввели некорректные данные или не ввели вообще");
        i--;
      } else {
        personalMovieDB.genres[i - 1] = genres;
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
};

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
