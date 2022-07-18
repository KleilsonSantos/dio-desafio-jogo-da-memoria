const cards = document.querySelectorAll('.card');
let hasFlipperCard = false;
let firstCard, secondyCard;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    this.classList.add('flip');
    if (!(hasFlipperCard)) {
        hasFlipperCard = true;
        firstCard = this;
        return;
    }
    secondyCard = this;
    hasFlipperCard = false;
    checkForMatch();
}

function checkForMatch() {
    if (firstCard.dataset.card === secondyCard.dataset.card) {
        disableCard();
        return;
    }
    unFlipCard();
}
function disableCard() {
    firstCard.removeEventListener('click', flipCard);
    secondyCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unFlipCard() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondyCard.classList.remove('flip');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlipperCard, lockBoard] = [false, false];
    [firstCard, secondyCard] = [null, null];
}

(function cardsRandom() {
    cards.forEach(element => {
        let newPositions = Math.floor((Math.random() * 12) + 1);
        element.style.order = newPositions;
        console.log(element)
    })
})();

cards.forEach((element) => {
    element.addEventListener('click', flipCard);
});