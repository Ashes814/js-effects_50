"use strict";
const insert = document.getElementById("insert");
window.addEventListener("keydown", (event) => {
  console.log(event);
  insert.innerHTML = `
  <div class="key">
  <small>Event Key</small>
    ${event.key === " " ? "Space" : event.key}

  </div>

  <div class="key">
  <small>Key Code</small>
    ${event.keyCode}

  </div>
  <div class="key">
  <small>Code</small>
    ${event.code}

  </div>
  `;
});
