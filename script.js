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