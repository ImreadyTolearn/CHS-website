<script>
  // Hero Slideshow Logic
  document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide() {
      slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
      });

      currentSlide = (currentSlide + 1) % slides.length;
      setTimeout(showSlide, 5000);
    }

    showSlide();
  });

  // Robot Slider Logic
  document.addEventListener('DOMContentLoaded', () => {
    const robotSlider = document.getElementById('robot-slider');
    const robotCards = robotSlider.children;
    let robotIndex = 0;

    function getCardsPerView() {
      return window.innerWidth >= 768 ? 2 : 1;
    }

    function updateSlider() {
      const cardsPerView = getCardsPerView();
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
      robotIndex = 0;
      updateSlider();
    });

    updateSlider();
  });
</script>
