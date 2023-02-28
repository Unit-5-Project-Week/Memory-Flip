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
    hasFlippedCard = true;
    firstCard = this;
    return;
  } 
  hasFlippedCard = false;
  secondCard = this;

  matchCheck();
}

function matchCheck(){
  let matched = (firstCard.dataset.image === secondCard.dataset.image)
  matched ? cardDisabling() : cardUnflipping();
}

function cardDisabling(){
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function cardUnflipping(){
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1000);
}

memoryCards.forEach((memoryCard) =>
  memoryCard.addEventListener("click", flipCard)
);
