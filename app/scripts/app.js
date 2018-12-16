function setup() {
    const cards = document.getElementsByClassName('card')
    for (let i = 0; i < cards.length; ++i) {
        console.log(cards[i].innerHTML);
        cards[i].addEventListener('click', function () {
            console.log(cards[i].innerHTML);
            cards[i].classList.add('open')
        });
    }
}

setup()