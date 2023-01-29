"use strict";
const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", getJoke);
getJoke();

async function getJoke(params) {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  jokeEl.innerText = "Please Wait...";

  const res = await fetch("https://icanhazdadjoke.com", config);

  const data = await res.json();

  jokeEl.innerText = data.joke;
}
