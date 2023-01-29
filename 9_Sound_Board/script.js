"use strict";
const sounds = ["applause", "eat", "press", "tietie", "victory"];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSongs(sounds);
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs(songs) {
  songs.forEach((song) => {
    const sound = document.getElementById(song);
    sound.pause();
    sound.currentTime = 0;
  });
}
