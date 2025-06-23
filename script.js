// Slideshow (hero background) logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    currentSlide = (currentSlide + 1) % slides.length;
    setTimeout(showSlide, 5000);
}
document.addEventListener('DOMContentLoaded', showSlide);

// Robot carousel logic
let robotIndex = 0;
const robotSlider = document.getElementById('robot-slider');
const robotCards = robotSlider.children;

function getCardsPerView() {
    // Responsive: 2 per view if screen >= 768px, otherwise 1
    return window.innerWidth >= 768 ? 2 : 1;
}

function updateSlider() {
    const cardsPerView = getCardsPerView();
    const offset = -(robotIndex * (100 / cardsPerView));
    robotSlider.style.transform = `translateX(${offset}%)`;
}

// Add event listeners
document.getElementById('next-slide').addEventListener('click', () => {
    const cardsPerView = getCardsPerView();
    const maxIndex = robotCards.length - cardsPerView;

    if (robotIndex < maxIndex) robotIndex++;
    updateSlider();
});

document.getElementById('prev-slide').addEventListener('click', () => {
    if (robotIndex > 0) robotIndex--;
    updateSlider();
});

// Recalculate on resize
window.addEventListener('resize', () => {
    robotIndex = 0;
    updateSlider();
});

// Initial call
updateSlider();
