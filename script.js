window.onload = () => {
  getOriginals();
  getTrendingNow();
  getTopRated();
};

function showMovies(movies, element_selector, path_type) {
  var moviesEl = document.querySelector(element_selector);
  for (var movie of movies.results) {
    var image = `
          <img src="https://image.tmdb.org/t/p/original${movie[path_type]}"></img>
      `;
    moviesEl.innerHTML += image;
  }
}

function fetchMovies(url, element_selector, path_type) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      showMovies(data, element_selector, path_type);
    });
}

// function addMovies(movies) {}
// function showTrend(movies) {
//   var trendingEl = document.querySelector("#trending");

//   for (var movie of movies.results) {
//     var image = `<img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}"></img>`;
//     trendingEl.innerHTML += image;
//   }
// }

// function showRated(movies) {
//   var ratedEl = document.querySelector("#rated");

//   for (var movie of movies.results) {
//     var image = `<img src="https://image.tmdb.org/t/p/original${movie.backdrop_path}"></img>`;
//     ratedEl.innerHTML += image;
//   }
// }
function getOriginals() {
  var url =
    "https://api.themoviedb.org/3/discover/tv?api_key=19f84e11932abbc79e6d83f82d6d1045&with_networks=213";
  fetchMovies(url, ".original__movies", "poster_path");
}

function getTrendingNow() {
  var url =
    "https://api.themoviedb.org/3/trending/movie/week?api_key=19f84e11932abbc79e6d83f82d6d1045";
  fetchMovies(url, "#trending", "backdrop_path");
}

function getTopRated() {
  var url =
    "https://api.themoviedb.org/3/movie/top_rated?api_key=19f84e11932abbc79e6d83f82d6d1045&language=en-US&page=1";
  fetchMovies(url, "#rated", "backdrop_path");
}
