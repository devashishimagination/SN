// Home Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Initialize navbar scroll effect
  // initNavbar()

  // Initialize dropdown toggles for mobile
  initDropdowns()

  // Initialize mobile menu toggle
  initMobileMenu()

  // Initialize success stories slider
  initSuccessStoriesSlider()

  // Initialize testimonials slider
  initTestimonialsSlider()

  // Initialize enquiry popup
  initEnquiryPopup()

  // Animate stats counters
  animateCounters()

  // Add hover effects to feature cards
  addFeatureHoverEffects()
})


// Function to initialize navbar scroll effect
// function initNavbar() {
//   const navbar = document.querySelector(".navbar")

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       navbar.classList.add("scrolled")
//     } else {
//       navbar.classList.remove("scrolled")
//     }
//   })

//   // Trigger scroll event on page load to set initial state
//   // window.dispatchEvent(new Event("scroll"))
// }

// Function to initialize dropdown toggles for mobile
function initDropdowns() {
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle")

  dropdownToggles.forEach((toggle) => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault()

      // Check if in mobile view
      if (window.innerWidth < 992) {
        this.classList.toggle("active")
      }
    })
  })
}


// Function to initialize mobile menu toggle
function initMobileMenu() {
  const navbarToggler = document.getElementById("navbarToggler")
  const navbarMenu = document.getElementById("navbarMenu")

  if (navbarToggler && navbarMenu) {
    navbarToggler.addEventListener("click", () => {
      navbarToggler.classList.toggle("active")
      navbarMenu.classList.toggle("active")

      // Prevent scrolling when menu is open
      if (navbarMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    })
  }
}

// Function to initialize success stories slider
function initSuccessStoriesSlider() {
  const track = document.getElementById("successStoriesTrack")
  const prevButton = document.getElementById("prevStory")
  const nextButton = document.getElementById("nextStory")
  const dots = document.querySelectorAll("#storyDots .dot")

  if (!track || !prevButton || !nextButton || dots.length === 0) return

  let currentSlide = 0
  const slides = track.children
  const slideCount = slides.length

  // Set initial position
  updateSliderPosition()

  // Add event listeners to buttons
  prevButton.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount
    updateSliderPosition()
  })

  nextButton.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slideCount
    updateSliderPosition()
  })

  // Add event listeners to dots
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index
      updateSliderPosition()
    })
  })

  // Auto-advance slides every 5 seconds
  let slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slideCount
    updateSliderPosition()
  }, 5000)

  // Pause auto-advance on hover
  track.addEventListener("mouseenter", () => {
    clearInterval(slideInterval)
  })

  track.addEventListener("mouseleave", () => {
    slideInterval = setInterval(() => {
      currentSlide = (currentSlide + 1) % slideCount
      updateSliderPosition()
    }, 5000)
  })

  // Function to update slider position
  function updateSliderPosition() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`

    // Update active dot
    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("active")
      } else {
        dot.classList.remove("active")
      }
    })
  }
}

// Function to initialize testimonials slider
function initTestimonialsSlider() {
  const testimonials = document.querySelectorAll("#testimonialsWrapper .testimonial")
  const prevButton = document.getElementById("prevTestimonial")
  const nextButton = document.getElementById("nextTestimonial")

  if (testimonials.length === 0 || !prevButton || !nextButton) return

  let currentTestimonial = 0

  // Set initial state
  testimonials[currentTestimonial].classList.add("active")

  // Add event listeners to buttons
  prevButton.addEventListener("click", () => {
    testimonials[currentTestimonial].classList.remove("active")
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length
    testimonials[currentTestimonial].classList.add("active")
  })

  nextButton.addEventListener("click", () => {
    testimonials[currentTestimonial].classList.remove("active")
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    testimonials[currentTestimonial].classList.add("active")
  })

  // Auto-advance testimonials every 5 seconds
  let testimonialInterval = setInterval(() => {
    testimonials[currentTestimonial].classList.remove("active")
    currentTestimonial = (currentTestimonial + 1) % testimonials.length
    testimonials[currentTestimonial].classList.add("active")
  }, 5000)

  // Pause auto-advance on hover
  testimonials.forEach((testimonial) => {
    testimonial.addEventListener("mouseenter", () => {
      clearInterval(testimonialInterval)
    })

    testimonial.addEventListener("mouseleave", () => {
      testimonialInterval = setInterval(() => {
        testimonials[currentTestimonial].classList.remove("active")
        currentTestimonial = (currentTestimonial + 1) % testimonials.length
        testimonials[currentTestimonial].classList.add("active")
      }, 5000)
    })
  })
}

// Function to initialize enquiry popup
function initEnquiryPopup() {
  const enquiryPopup = document.getElementById("enquiryPopup");
  const enquiryClose = document.getElementById("enquiryClose");
  const heroEnquiryBtn = document.getElementById("heroEnquiryBtn");
  const ctaEnquiryBtn = document.getElementById("ctaEnquiryBtn");
  const enquiryForm = document.getElementById("enquiryForm");

  if (!enquiryPopup || !enquiryClose) return;

  // Show popup after 5 seconds
  setTimeout(() => {
    enquiryPopup.classList.add("active");
  }, 3000);

  // Close handlers
  enquiryClose.addEventListener("click", () => {
    enquiryPopup.classList.remove("active");
  });

  enquiryPopup.addEventListener("click", (e) => {
    if (e.target === enquiryPopup) {
      enquiryPopup.classList.remove("active");
    }
  });

  // Open handlers
  if (heroEnquiryBtn) {
    heroEnquiryBtn.addEventListener("click", (e) => {
      e.preventDefault();
      enquiryPopup.classList.add("active");
    });
  }

  if (ctaEnquiryBtn) {
    ctaEnquiryBtn.addEventListener("click", (e) => {
      e.preventDefault();
      enquiryPopup.classList.add("active");
    });
  }

  // Form submission
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Validate form
      let isValid = true;
      const requiredFields = enquiryForm.querySelectorAll("[required]");

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("error");
        } else {
          field.classList.remove("error");
        }
      });

      if (!isValid) return;

      // Get form values (MESSAGE FIELD REMOVED)
      const formData = {
        name: enquiryForm.querySelector("#name").value.trim(),
        email: enquiryForm.querySelector("#email").value.trim(),
        phone: enquiryForm.querySelector("#phone").value.trim(),
        course: enquiryForm.querySelector("#course").value.trim()
        // Message field removed entirely
      };

      // Additional validation
      const phonePattern = /^\d{10}$/;
      if (!phonePattern.test(formData.phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(formData.email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Build WhatsApp message (MESSAGE FIELD REMOVED)
      const whatsappMessage = `*New Enquiry Received*%0A%0A` +
        `*Name:* ${encodeURIComponent(formData.name)}%0A` +
        `*Email:* ${encodeURIComponent(formData.email)}%0A` +
        `*Phone:* ${encodeURIComponent(formData.phone)}%0A` +
        `*Course:* ${encodeURIComponent(formData.course)}`;

      const whatsappNumber = "919371072629";
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

      // Try to send to WhatsApp
      try {
        const whatsappWindow = window.open(whatsappURL, "_blank");
        if (!whatsappWindow || whatsappWindow.closed) {
          throw new Error("Popup blocked");
        }
      } catch (err) {
        const manualMessage = 
          `Couldn't open WhatsApp automatically. Please send this message manually:\n\n` +
          `To: ${whatsappNumber}\n\n` +
          `*New Enquiry Received*\n\n` +
          `*Name:* ${formData.name}\n` +
          `*Email:* ${formData.email}\n` +
          `*Phone:* ${formData.phone}\n` +
          `*Course:* ${formData.course}`;
        
        alert(manualMessage);
      }

      // Submit to Google Sheets (MESSAGE FIELD REMOVED)
      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbze8cru23RXZmBvCXqiHfH7IYnrYYjMnpxFHbqAEmbb7BevlQyNnpj81MG1Z81w-vlf/exec", {
          method: "POST",
          body: new URLSearchParams(formData)
        });
        console.log("Google Sheets response:", await response.text());
      } catch (err) {
        console.error("Google Sheets error:", err);
      }

      // Show success UI
      const successMsg = document.createElement("div");
      successMsg.className = "success-message";
      successMsg.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <h3>Thank you!</h3>
        <p>We've received your enquiry and will contact you shortly.</p>
      `;

      enquiryForm.innerHTML = "";
      enquiryForm.appendChild(successMsg);

      // Reset form after delay
      setTimeout(() => {
        enquiryPopup.classList.remove("active");
        setTimeout(() => {
          enquiryForm.innerHTML = `
            <div class="form-group">
              <label for="name">Full Name <span class="required">*</span></label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email <span class="required">*</span></label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone Number <span class="required">*</span></label>
              <input type="tel" id="phone" name="phone" required>
            </div>
            <div class="form-group">
              <label for="course">Interested Course <span class="required">*</span></label>
              <select id="course" name="course" required>
                <option value="">Select a course</option>
                <option value="Salesforce">Salesforce</option>
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <!-- Other course options -->
              </select>
            </div>
            <button type="submit" class="btn btn-primary btn-block">
              <span>Submit Enquiry</span>
              <i class="fas fa-arrow-right"></i>
            </button>
          `;
          initEnquiryPopup();
        }, 500);
      }, 3000);
    });
  }
}

document.addEventListener("DOMContentLoaded", initEnquiryPopup);

// Function to animate stats counters
function animateCounters() {
  const statNumbers = document.querySelectorAll(".hero-stat-number, .story-stat-value")

  statNumbers.forEach((stat) => {
    // Get target number from text content
    const targetNumber = Number.parseInt(stat.textContent.replace(/\D/g, ""))
    stat.textContent = "0" + (stat.textContent.includes("%") ? "%" : "+")

    // Use Intersection Observer to trigger animation when stats come into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateNumber(stat, 0, targetNumber)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(stat.closest(".hero-stat") || stat.closest(".story-stat"))
  })
}

// Function to animate number counting
function animateNumber(element, start, end) {
  let current = start
  const increment = end > 1000 ? 50 : end > 100 ? 5 : 1
  const duration = 2000 // 2 seconds
  const steps = Math.ceil((end - start) / increment)
  const stepTime = duration / steps

  const timer = setInterval(() => {
    current += increment
    if (current > end) {
      current = end
      clearInterval(timer)
    }

    // Add plus sign or percentage for numbers that had it originally
    if (element.textContent.includes("%")) {
      element.textContent = current + "%"
    } else {
      element.textContent = current + "+"
    }
  }, stepTime)
}

// Function to add hover effects to feature cards
function addFeatureHoverEffects() {
  const featureCards = document.querySelectorAll(".feature-card")

  featureCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const icon = card.querySelector(".feature-icon i")
      icon.classList.add("fa-beat")
    })

    card.addEventListener("mouseleave", () => {
      const icon = card.querySelector(".feature-icon i")
      icon.classList.remove("fa-beat")
    })
  })
}

// Add parallax effect to the hero section
window.addEventListener("scroll", () => {
  const heroSection = document.querySelector(".hero-section")
  if (heroSection) {
    const scrollPosition = window.scrollY
    const heroShape = document.querySelector(".hero-shape")
    if (heroShape) {
      heroShape.style.transform = `translateY(${scrollPosition * 0.1}px)`
    }
  }
})

// Add animation to batch cards on hover
const batchCards = document.querySelectorAll(".batch-card")
batchCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    const icon = card.querySelector(".batch-icon i")
    icon.classList.add("fa-beat")
  })

  card.addEventListener("mouseleave", () => {
    const icon = card.querySelector(".batch-icon i")
    icon.classList.remove("fa-beat")
  })
})

// Add animation to partner logos on hover
const partnerLogos = document.querySelectorAll(".partner-logo")
partnerLogos.forEach((logo) => {
  logo.addEventListener("mouseenter", () => {
    logo.style.transform = "scale(1.1)"
    logo.style.zIndex = "10"
  })

  logo.addEventListener("mouseleave", () => {
    logo.style.transform = "scale(1)"
    logo.style.zIndex = "1"
  })
})

 // Basic carousel functionality
 document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.program-slide');
  const dots = document.querySelectorAll('.nav-dot');
  let currentIndex = 0;
  const slideCount = slides.length;
  
  // Auto-rotate every 8 seconds
  const interval = 8000;
  let slideInterval = setInterval(nextSlide, interval);
  
  function showSlide(index) {
      // Update slides
      slides.forEach((slide, i) => {
          slide.classList.remove('active', 'prev', 'next');
          if (i === index) {
              slide.classList.add('active');
          } else if (i < index) {
              slide.classList.add('prev');
          } else {
              slide.classList.add('next');
          }
      });
      
      // Update dots
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
      
      currentIndex = index;
      
      // Reset timer
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, interval);
  }
  
  function nextSlide() {
      const newIndex = (currentIndex + 1) % slideCount;
      showSlide(newIndex);
  }
  
  function prevSlide() {
      const newIndex = (currentIndex - 1 + slideCount) % slideCount;
      showSlide(newIndex);
  }
  
  // Dot navigation
  dots.forEach(dot => {
      dot.addEventListener('click', function() {
          const index = parseInt(this.getAttribute('data-index'));
          showSlide(index);
      });
  });
  
  // Pause on hover
  const carousel = document.querySelector('.carousel-container');
  carousel.addEventListener('mouseenter', () => clearInterval(slideInterval));
  carousel.addEventListener('mouseleave', () => {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, interval);
  });
});
