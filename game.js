/////////////////////
///Variables
/////////////////////

const memoryCards = document.querySelectorAll(".memory-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let cardsCounted = 0;

/////////////////////
///Functions
/////////////////////

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;

  matchCheck();
}

function matchCheck() {
  let matched = firstCard.dataset.image === secondCard.dataset.image;
  matched ? cardDisabling() : cardUnflipping();
  if (matched === true){
    cardsCounted++
  }
  cardCount();
}

function cardDisabling() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  boardReset();
}

function cardUnflipping() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    boardReset();
  }, 1000);
}

function boardReset() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() {
  memoryCards.forEach((card) => {
    let rand = Math.floor(Math.random() * 12);
    card.style.order = rand;
  });
})();

function resetGame() {
  location.reload();
}

function cardCount(){
  if (cardsCounted === 6){
    alert("You win the game! Press reset to try again!")
  }
}

resetButton.addEventListener("click", resetGame);

memoryCards.forEach((memoryCard) =>
  memoryCard.addEventListener("click", flipCard)
);

