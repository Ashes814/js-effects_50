"use strict";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=80d178efbf12a707def980207c9b0844&page=1";
const API_KEY = "80d178efbf12a707def980207c9b0844";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=80d178efbf12a707def980207c9b0844&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  // console.log(movies);
  main.innerHTML = "";

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
    

      <img src="${IMG_PATH + poster_path}" alt="${title}" />
      <div class="movie-info">
        <h3>${title}</h3>
        <span class=${
          vote_average >= 8 ? "green" : vote_average >= 5 ? "orange" : "red"
        }>${vote_average}</span>
      </div>
      <div class="overview">
        <h3>overview</h3>
        ${overview}
      </div>
    `;
    console.log(movie);

    main.appendChild(movieEl);
  });
}

getMovies(API_URL);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm && searchTerm !== "") {
    getMovies(SEARCH_URL + searchTerm);
    search.value = "";
  } else {
    window.location.reload();
  }
});
