/////////////////////
///Variables
/////////////////////

const memoryCards = document.querySelectorAll(".memory-card");

/////////////////////
///Functions
/////////////////////
function flipCard() {
  this.classList.toggle("flip");
}

memoryCards.forEach((memoryCard) =>
  memoryCard.addEventListener("click", flipCard)
);
