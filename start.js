const avatar = document.querySelector(".avatar");

function startRedirect() {
  setTimeout((e) => {
    location.href = "index.html";
  }, 3000);
}

avatar.addEventListener("click", startRedirect);
