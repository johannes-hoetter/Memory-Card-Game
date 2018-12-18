//when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function(event) {
    const rating = document.getElementById('rating');
    if (sessionStorage.getItem('rating') != null) {
        //if the rating has been set (-> a game has been played)
        rating.innerHTML = sessionStorage.getItem('rating');
    } else {
        //if no game has been played
        rating.innerHTML = `<i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>`
    }


    const resetButton = document.getElementById('play_again');
    resetButton.addEventListener('click', function() {
        const appUrl = window.location.href.split('endscreen.html')[0] + 'app.html';
        window.location.href = appUrl;
    })
});