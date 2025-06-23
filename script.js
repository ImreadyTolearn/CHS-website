<script>
  // Hero Slideshow Logic
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });

    currentSlide = (currentSlide + 1) % slides.length;
    setTimeout(showSlide, 5000);
  }

  // Start slideshow immediately
  if (slides.length > 0) {
    showSlide();
  }

  // Robot Slider Logic
  window.addEventListener('DOMContentLoaded', () => {
    const robotSlider = document.getElementById('robot-slider');
    const robotCards = robotSlider.children;
    let robotIndex = 0;

    function getCardsPerView() {
      return window.innerWidth >= 768 ? 2 : 1;
    }

    function updateSlider() {
      const cardsPerView = getCardsPerView();
      const maxIndex = robotCards.length - cardsPerView;
      if (robotIndex > maxIndex) robotIndex = maxIndex;
      const offset = (100 / cardsPerView) * robotIndex;
      robotSlider.style.transform = `translateX(-${offset}%)`;
    }

    document.getElementById('next-slide').addEventListener('click', () => {
      const cardsPerView = getCardsPerView();
      const maxIndex = robotCards.length - cardsPerView;
      if (robotIndex < maxIndex) {
        robotIndex++;
        updateSlider();
      }
    });

    document.getElementById('prev-slide').addEventListener('click', () => {
      if (robotIndex > 0) {
        robotIndex--;
        updateSlider();
      }
    });

    window.addEventListener('resize', () => {
      updateSlider();
    });

    updateSlider();
  });
</script>
