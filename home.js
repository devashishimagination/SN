// Home Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Initialize navbar scroll effect
  initNavbar()

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
function initNavbar() {
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
  })

  // Trigger scroll event on page load to set initial state
  window.dispatchEvent(new Event("scroll"))
}

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
  }, 5000);

  // Close popup when clicking the close button
  enquiryClose.addEventListener("click", () => {
    enquiryPopup.classList.remove("active");
  });

  // Close popup when clicking outside the content
  enquiryPopup.addEventListener("click", (e) => {
    if (e.target === enquiryPopup) {
      enquiryPopup.classList.remove("active");
    }
  });

  // Open popup on button click
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

  // Handle form submission
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();

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

      if (isValid) {
        // ✅ STEP 1: Get form values
        const nameVal = document.getElementById("name").value.trim();
        const emailVal = document.getElementById("email").value.trim();
        const phoneVal = document.getElementById("phone").value.trim();
        const courseVal = document.getElementById("course").value.trim();
        const msgVal = document.getElementById("message").value.trim() || "N/A";

        // ✅ STEP 2: Build WhatsApp message
        const whatsappMessage =
          `*New Enquiry Received*\n\n` +
          `*Name:* ${nameVal}\n` +
          `*Email:* ${emailVal}\n` +
          `*Phone:* ${phoneVal}\n` +
          `*Interested Course:* ${courseVal}\n` +
          `*Message:* ${msgVal}`;

        // ✅ STEP 3: Send message to WhatsApp
        const whatsappNumber = "919765569760"; // Replace with your number
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappURL, "_blank");
    
         // ✅ STEP 4: Send to backend for saving into file
  // ✅ Send to Google Sheet
fetch("https://script.google.com/macros/s/AKfycbXYZ12345/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: nameVal,
    email: emailVal,
    phone: phoneVal,
    course: courseVal,
    message: msgVal,
  }),
})
.then(res => res.json())
.then(data => console.log("Saved to Google Sheets:", data))
.catch(err => console.error("Error saving to Google Sheets:", err));

        // ✅ STEP 4: Show success message
        const successMsg = document.createElement("div");
        successMsg.className = "success-message";
        successMsg.innerHTML =
          '<i class="fas fa-check-circle"></i> Your enquiry has been submitted successfully! We\'ll get back to you soon.';

        enquiryForm.innerHTML = "";
        enquiryForm.appendChild(successMsg);

        // ✅ STEP 5: Hide popup after success
        setTimeout(() => {
          enquiryPopup.classList.remove("active");

          // Reinitialize the form
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
                  <option value="Data Science Fundamentals">Data Science Fundamentals</option>
                  <option value="Big Data Analytics">Big Data Analytics</option>
                  <option value="Cloud Computing">Cloud Computing</option>
                  <option value="Full Stack Web Development">Full Stack Web Development</option>
                  <option value="Mern Stack Development">Mern Stack Development</option>
                  <option value="Mean Stack Development">Mean Stack Development</option>
                  <option value="System Engineering">System Engineering</option>
                  <option value="Advanced Java">Advanced Java</option>
                  <option value="Linux Administration">Linux Administration</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="C/C++">C/C++</option>
                  <option value="Security Specialist">Security Specialist</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Blockchain Development">Blockchain Development</option>
                </select>
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary btn-block">
                <span>Submit Enquiry</span>
                <i class="fas fa-arrow-right"></i>
              </button>
            `;
            initEnquiryPopup(); // Re-attach event listener
          }, 500);
        }, 3000);
      }
    });
  }
}

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

