// Loader functionality
document.addEventListener('DOMContentLoaded', function() {
  // Hide loader when page is loaded
  window.addEventListener('load', function() {
      const loader = document.getElementById('pageLoader');
      setTimeout(() => {
          loader.style.opacity = '0';
          setTimeout(() => {
              loader.style.display = 'none';
          }, 500);
      }, 1000);
  });

  // Carousel functionality
  const carousel = document.getElementById('carousel');
  if (carousel) {
      const slider = document.getElementById('slider');
      const slides = document.querySelectorAll('.slide');
      const prevBtn = document.querySelector('.prev');
      const nextBtn = document.querySelector('.next');
      const dotsContainer = document.querySelector('.carousel-dots');
      
      let currentIndex = 0;
      const slideCount = slides.length;
      
      // Create dots
      slides.forEach((_, index) => {
          const dot = document.createElement('div');
          dot.classList.add('dot');
          if (index === 0) dot.classList.add('active');
          dot.addEventListener('click', () => goToSlide(index));
          dotsContainer.appendChild(dot);
      });
      
      const dots = document.querySelectorAll('.dot');
      
      // Update carousel position
      function updateCarousel() {
          slider.style.transform = `translateX(-${currentIndex * 100}%)`;
          
          // Update active dot
          dots.forEach((dot, index) => {
              dot.classList.toggle('active', index === currentIndex);
          });
      }
      
      // Go to specific slide
      function goToSlide(index) {
          currentIndex = index;
          updateCarousel();
      }
      
      // Next slide
      function nextSlide() {
          currentIndex = (currentIndex + 1) % slideCount;
          updateCarousel();
      }
      
      // Previous slide
      function prevSlide() {
          currentIndex = (currentIndex - 1 + slideCount) % slideCount;
          updateCarousel();
      }
      
      // Event listeners
      nextBtn.addEventListener('click', nextSlide);
      prevBtn.addEventListener('click', prevSlide);
      
      // Auto-advance slides
      let slideInterval = setInterval(nextSlide, 5000);
      
      // Pause on hover
      carousel.addEventListener('mouseenter', () => {
          clearInterval(slideInterval);
      });
      
      carousel.addEventListener('mouseleave', () => {
          slideInterval = setInterval(nextSlide, 5000);
      });
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowRight') nextSlide();
          if (e.key === 'ArrowLeft') prevSlide();
      });
      
      // Touch events for mobile
      let touchStartX = 0;
      let touchEndX = 0;
      
      slider.addEventListener('touchstart', (e) => {
          touchStartX = e.changedTouches[0].screenX;
      }, {passive: true});
      
      slider.addEventListener('touchend', (e) => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
      }, {passive: true});
      
      function handleSwipe() {
          if (touchEndX < touchStartX - 50) nextSlide();
          if (touchEndX > touchStartX + 50) prevSlide();
      }
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Header scroll effect
  const header = document.querySelector('.header-container');
  if (header) {
      window.addEventListener('scroll', function() {
          if (window.scrollY > 100) {
              header.classList.add('scrolled');
          } else {
              header.classList.remove('scrolled');
          }
      });
  }

  // Animation on scroll initialization
  if (typeof AOS !== 'undefined') {
      AOS.init({
          duration: 800,
          easing: 'ease-in-out',
          once: true,
          offset: 100
      });
  }
});

// Function to load header and footer
function loadHeaderFooter() {
  // Load header
  fetch('header.html')
      .then(response => response.text())
      .then(data => {
          document.querySelector('.header-container').innerHTML = data;
          // Initialize any header-specific JS here
      });

  // Load footer
  fetch('footer.html')
      .then(response => response.text())
      .then(data => {
          document.querySelector('.footer-container').innerHTML = data;
          // Initialize any footer-specific JS here
      });
}

// Call the function when DOM is loaded
document.addEventListener('DOMContentLoaded', loadHeaderFooter);