const cards = document.querySelectorAll('.card');
let currentCard = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('active');
        } else {
            card.classList.remove('active');
        }
    });
}

function autoSlide() {
    setInterval(() => {
        currentCard = (currentCard + 1) % cards.length;
        showCard(currentCard);
    }, 2000); // Change slide every 3 seconds (adjust as needed)
}

// Initially show the first card
showCard(currentCard);

// Start autoSlide after a brief delay
setTimeout(autoSlide, 2000); // Start autoSlide after 2 seconds (adjust as needed)
