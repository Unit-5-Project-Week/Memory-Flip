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

  if (!hasFlippedCard){
    // first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    // second click 
    hasFlippedCard = false;
    secondCard = this;

    // do cards match?
    console.log(firstCard.dataset.image);
    console.log(secondCard.dataset.image);
  }
}

memoryCards.forEach((memoryCard) =>
  memoryCard.addEventListener("click", flipCard)
);
