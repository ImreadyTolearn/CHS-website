<script>
  // Slideshow functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlide() {
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentSlide);
    });
    currentSlide = (currentSlide + 1) % slides.length;
    setTimeout(showSlide, 5000); // Change slide every 5 seconds
  }

  showSlide();

  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
      mobileMenu.classList.add('hidden');
    });
  });

  // Robot Slider Logic (THIS IS THE FIXED PART)
  window.addEventListener('DOMContentLoaded', () => {
    const robotSlider = document.getElementById('robot-slider');
    const robotCards = robotSlider.children;
    let robotIndex = 0;

    function getCardsPerView() {
      return window.innerWidth >= 768 ? 2 : 1;
    }

    function updateSlider() {
      const cardWidth = robotCards[0].offsetWidth + 32; // px-4 = 16px margin each side
      robotSlider.style.transform = `translateX(-${robotIndex * cardWidth}px)`;
    }

    document.getElementById('next-slide').addEventListener('click', () => {
      const maxIndex = robotCards.length - getCardsPerView();
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

    window.addEventListener('resize', updateSlider);

    updateSlider();
  });
</script>
