
const cards = document.getElementsByClassName('card');

function setup() {

    //each value exists twice to create pair-wise cards
    let cardValues = ['bus', 'car', 'motorcycle', 'shuttle_van', 'taxi', 'truck', 'truck-monster', 'truck-pickup',
                      'bus', 'car', 'motorcycle', 'shuttle_van', 'taxi', 'truck', 'truck-monster', 'truck-pickup'];
    cardValues = shuffle(cardValues); //contains the values for each card

    //prepare the cards:
    // 1. add card values
    // 2. add an event listener for each card
    for (let i = 0; i < cards.length; ++i) {
        //add the card value
        cards[i].innerHTML = cardValues[i];

        //add an event listener to turn the card around
        cards[i].addEventListener('click', function () {
            cards[i].classList.add('open')
        });
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