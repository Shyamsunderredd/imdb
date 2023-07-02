const apikey = "99af917cb764dd115e55b4b74bdf7c2e";
const apiBaseurl = "https://api.themoviedb.org/3";
const imageBaseUrl = "https://image.tmdb.org/t/p/w300";
const MoviesGrid = document.getElementById("movies-grid");
const SearchInput = document.getElementById("search-input");
const SearchForm = document.getElementById("search-form");
const categoryTitle = document.getElementById("category-title");

async function fetchMoviesNowPlaying() {
  const response = await fetch(
    `${apiBaseurl}/movie/now_playing?api_key=${apikey}`
  );
  const jsonResponse = await response.json();
  const movies = jsonResponse.results;
  console.log(movies);
  displayMovies(movies);
}
async function SearchMovies(query) {
  const response = await fetch(
    `${apiBaseurl}/search/movie?api_key=${apikey}&query="${query}"`
  );
  const jsonResponse = await response.json();
  const movies = jsonResponse.results;
  console.log(movies);
  displayMovies(movies);
}

function displayMovies(movies) {
  MoviesGrid.innerHTML = movies
    .map(
      (movie) =>
        `<div class="movie-card">
	            <img src="${imageBaseUrl}${movie.poster_path}"/>
	            <p>⭐${movie.vote_average}</p>
	            <h1>${movie.title}</h1>
	        </div>`
    )
    .join("");
}
function handleFormsubmit(event) {
  categoryTitle.innerHTML = "Search Results";
  event.preventDefault();
  const searchquery = SearchInput.value;
  SearchMovies(searchquery);
}
SearchForm.addEventListener("submit", handleFormsubmit);
fetchMoviesNowPlaying();
//SearchMovies("Batman");
