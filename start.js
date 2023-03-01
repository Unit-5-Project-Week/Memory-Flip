const avatar = document.querySelector(".avatar");

function startRedirect() {
  setTimeout((e) => {
    location.href = "index.html";
  }, 4500);
}

avatar.addEventListener("click", startRedirect);
