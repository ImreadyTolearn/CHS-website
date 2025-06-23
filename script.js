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
// Robot slider logic
let robotIndex = 0;
const robotSlider = document.getElementById('robot-slider');
const robotCards = robotSlider.children;
const maxIndex = robotCards.length - 2; // show 2 at a time

document.getElementById('next-slide').addEventListener('click', () => {
    if (robotIndex < maxIndex) robotIndex++;
    updateSlider();
});

document.getElementById('prev-slide').addEventListener('click', () => {
    if (robotIndex > 0) robotIndex--;
    updateSlider();
});

function updateSlider() {
    const offset = -(robotIndex * 50); // 50% per slide
    robotSlider.style.transform = `translateX(${offset}%)`;
}
