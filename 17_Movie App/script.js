"use strict";
const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=80d178efbf12a707def980207c9b0844&page=1";
const API_KEY = "80d178efbf12a707def980207c9b0844";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=80d178efbf12a707def980207c9b0844&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.results);
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
