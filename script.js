window.onload = () => {
  fetchMovies();
  trendingMovies();
};

function fetchMovies() {
  fetch(
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213"
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addMovies(data);
    });
}
function trendingMovies() {
  fetch(
    "https://api.themoviedb.org/3/trending/all/week?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213"
  )
    .then((response) => {
      // return response.json();
      return console.log(response.json());
    })
    .then((data) => {
      addMovies(data);
    });
}

function addMovies(movies) {
  var moviesEl = document.querySelector(".original__movies");

  for (var movie of movies.results) {
    var image = `<img src="https://image.tmdb.org/t/p/original${movie.poster_path}"></img>`;
    moviesEl.innerHTML += image;
  }
}
// function trending(movies) {
//   var trendingEl = document.querySelector(".movies__container");

//   for (var movie of movies.results) {
//     var image = `<img src="https://image.tmdb.org/t/p/trending/all/week${movie.poster_path}"></img>`;
//     trendingEl.innerHTML += image;
//   }
// }
