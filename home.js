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
  const enquiryPopup = document.getElementById("enquiryPopup")
  const enquiryClose = document.getElementById("enquiryClose")
  const heroEnquiryBtn = document.getElementById("heroEnquiryBtn")
  const ctaEnquiryBtn = document.getElementById("ctaEnquiryBtn")
  const enquiryForm = document.getElementById("enquiryForm")

  if (!enquiryPopup || !enquiryClose) return

  // Show popup on page load after 5 seconds
  setTimeout(() => {
    enquiryPopup.classList.add("active")
  }, 5000)

  // Close popup when close button is clicked
  enquiryClose.addEventListener("click", () => {
    enquiryPopup.classList.remove("active")
  })

  // Close popup when clicking outside the content
  enquiryPopup.addEventListener("click", (e) => {
    if (e.target === enquiryPopup) {
      enquiryPopup.classList.remove("active")
    }
  })

  // Show popup when enquiry buttons are clicked
  if (heroEnquiryBtn) {
    heroEnquiryBtn.addEventListener("click", (e) => {
      e.preventDefault()
      enquiryPopup.classList.add("active")
    })
  }

  if (ctaEnquiryBtn) {
    ctaEnquiryBtn.addEventListener("click", (e) => {
      e.preventDefault()
      enquiryPopup.classList.add("active")
    })
  }

  // Handle form submission
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simple validation
      let isValid = true
      const requiredFields = enquiryForm.querySelectorAll("[required]")

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false
          field.classList.add("error")
        } else {
          field.classList.remove("error")
        }
      })

      if (isValid) {
        // Show success message
        const successMsg = document.createElement("div")
        successMsg.className = "success-message"
        successMsg.innerHTML =
          '<i class="fas fa-check-circle"></i> Your enquiry has been submitted successfully! We\'ll get back to you soon.'

        // Replace form with success message
        enquiryForm.innerHTML = ""
        enquiryForm.appendChild(successMsg)

        // Close popup after 3 seconds
        setTimeout(() => {
          enquiryPopup.classList.remove("active")

          // Reset form after popup is closed
          setTimeout(() => {
            enquiryForm.innerHTML = enquiryForm.innerHTML
            initEnquiryPopup() // Reinitialize the form
          }, 500)
        }, 3000)

        // In a real application, you would submit the form data to a server here
        console.log("Form submitted successfully")
      }
    })
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

