
const cards = document.getElementsByClassName('card');
let openedCards = [];
let matchedCards = [];
let rounds = 0;

function setup() {

    //each value exists twice to create pair-wise cards
    let cardValues = ['bus', 'car', 'motorcycle', 'shuttle-van', 'taxi', 'truck', 'truck-monster', 'truck-pickup',
                      'bus', 'car', 'motorcycle', 'shuttle-van', 'taxi', 'truck', 'truck-monster', 'truck-pickup'];
    cardValues = shuffle(cardValues); //contains the values for each card

    //prepare the cards:
    // 1. add card values
    // 2. add an event listener for each card
    for (let i = 0; i < cards.length; ++i) {
        //add the card value
        cards[i].innerHTML = `<i class="icon fas fa-${cardValues[i]} fa-3x"></i>`;

        //add an event listener to turn the card around
        cards[i].addEventListener('click', function () {
            if (!openedCards.includes(cards[i]) && !matchedCards.includes(cards[i])) {
                openedCards.push(cards[i]);
                cards[i].classList.add('open');
            }

            if (openedCards.length === 2) {
                console.log(checkMatch());
            }
            if (openedCards.length > 2) {
                alert("Please don't open more than 2 cards at once");
                for (let i = 0; i < openedCards.length; ++i) {
                    openedCards[i].classList.remove('open');
                }
            }
        });
    }

    //initialize the status
    const rating = document.getElementById('rating')
    rating.innerHTML = `<i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>`
}


function checkMatch() {
    updateStatus();
    const [card1, card2] = openedCards;
    let isMatch = false;
    console.log(card1.innerHTML, card2.innerHTML);
    if (card1.innerHTML === card2.innerHTML) {
        isMatch = true;
        matchedCards.push(...openedCards);
    }
    setTimeout(back, 500);
    return isMatch;

}

function back() {
    const [card1, card2] = openedCards;
    card1.classList.remove('open');
    card2.classList.remove('open');
    openedCards = [];
}

function updateStatus() {
    rounds += 1;
    const num_moves = document.getElementById('num_moves');
    num_moves.innerHTML = rounds;
    if (rounds === 10) {
        const rating = document.getElementById('rating');
        rating.innerHTML = `<i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>`
    }
    if (rounds == 13) {
        const rating = document.getElementById('rating');
        rating.innerHTML = `<i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="far fa-star"></i>`
    }
    if (rounds == 15) {
        const rating = document.getElementById('rating');
        rating.innerHTML = `<i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <i class="far fa-star"></i>`
    }
    if (rounds == 18) {
        const rating = document.getElementById('rating');
        rating.innerHTML = `<i class="fas fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>`
    }
    if (rounds == 20) {
        const rating = document.getElementById('rating');
        rating.innerHTML = `<i class="fas fa-star-half-alt"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>`
    }
    if (rounds == 23) {
        const rating = document.getElementById('rating');
        rating.innerHTML = `<i class="far fa-star"></i>
                            <i class="far fa-star"></i>
                            <i class="far fa-star"></i>`
    }
}


//when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function(event)
{
    setup();
});











//-------------------------------------------------- Helper Functions --------------------------------------------------

//taken from https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(array) {
    var j, x, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = array[i];
        array[i] = array[j];
        array[j] = x;
    }
    return array;
}