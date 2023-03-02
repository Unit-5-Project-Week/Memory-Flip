const avatar = document.querySelector(".avatar");

function startRedirect() {
  setTimeout((e) => {
    location.href = "game.html";
  }, 4500);
}

avatar.addEventListener("click", startRedirect);
