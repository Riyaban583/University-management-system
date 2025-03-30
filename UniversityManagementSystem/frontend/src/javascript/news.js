const newsCards = document.querySelectorAll('.news-card');
let index = 0;

function showNextNews() {
    newsCards[index].style.display = 'none';
    index = (index + 1) % newsCards.length;
    newsCards[index].style.display = 'block';
}

setInterval(showNextNews, 5000); // Change news every 5 seconds
