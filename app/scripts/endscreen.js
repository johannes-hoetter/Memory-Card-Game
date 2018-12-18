//when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function(event) {
    const rating = document.getElementById('rating');
    const num_moves = document.getElementById('num_moves');
    const time_needed  = document.getElementById('time_needed');
    if (sessionStorage.getItem('rating') != null) {
        //if the rating has been set (-> a game has been played)
        rating.innerHTML = sessionStorage.getItem('rating');
        num_moves.innerHTML = sessionStorage.getItem('num_moves');
        time_needed.innerHTML = sessionStorage.getItem('time_needed');
        time_needed.innerHTML = Math.round(time_needed.innerHTML / 1000);
    } else {
        //if no game has been played
        rating.innerHTML = `<i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>`;
        num_moves.innerHTML = 0;
        time_needed.innerHTML = 0;
    }


    const resetButton = document.getElementById('play_again');
    resetButton.addEventListener('click', function() {
        const appUrl = window.location.href.split('endscreen.html')[0] + 'app.html';
        window.location.href = appUrl;
    })
});