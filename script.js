/////////////////////
///Variables
/////////////////////

const memoryCards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let firstCard, secondCard;

/////////////////////
///Functions
/////////////////////
function flipCard() {
  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    // second click
    hasFlippedCard = false;
    secondCard = this;

    // do cards match?
    if (firstCard.dataset.image === secondCard.dataset.image) {
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    } else {
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 1000);
    }
  }
}

memoryCards.forEach((memoryCard) =>
  memoryCard.addEventListener("click", flipCard)
);
