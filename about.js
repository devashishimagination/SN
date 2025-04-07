// About Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
    // Initialize testimonials slider
    initTestimonialsSlider()
  
    // Animate timeline items
    animateTimeline()
  
    // Animate stats counters
    animateCounters()
  
    // Add hover effects to team cards
    addTeamHoverEffects()
  })
  
  // Function to initialize testimonials slider
  function initTestimonialsSlider() {
    const track = document.getElementById("testimonialsTrack")
    const prevButton = document.getElementById("prevTestimonial")
    const nextButton = document.getElementById("nextTestimonial")
  
    if (!track || !prevButton || !nextButton) return
  
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
    }
  }
  
  // Function to animate timeline items
  function animateTimeline() {
    const timelineItems = document.querySelectorAll(".timeline-item")
  
    timelineItems.forEach((item, index) => {
      // Add staggered animation delay
      item.style.opacity = "0"
      item.style.transform = "translateY(20px)"
      item.style.transition = `opacity 0.5s ease ${index * 0.2}s, transform 0.5s ease ${index * 0.2}s`
  
      // Use Intersection Observer to trigger animation when items come into view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              item.style.opacity = "1"
              item.style.transform = "translateY(0)"
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 },
      )
  
      observer.observe(item)
    })
  }
  
  // Function to animate stats counters
  function animateCounters() {
    const statNumbers = document.querySelectorAll(".about-stat-number")
  
    statNumbers.forEach((stat) => {
      // Get target number from text content
      const targetNumber = Number.parseInt(stat.textContent.replace(/\D/g, ""))
      stat.textContent = "0"
  
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
  
      observer.observe(stat.closest(".about-stat"))
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
  
      // Add plus sign for numbers that had it originally
      if (element.textContent.includes("+")) {
        element.textContent = current + "+"
      } else if (element.textContent.includes("%")) {
        element.textContent = current + "%"
      } else {
        element.textContent = current
      }
    }, stepTime)
  }
  
  // Function to add hover effects to team cards
  function addTeamHoverEffects() {
    const teamCards = document.querySelectorAll(".team-card")
  
    teamCards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        const socialIcons = card.querySelectorAll(".team-social a")
  
        // Add staggered animation to social icons
        socialIcons.forEach((icon, index) => {
          icon.style.transitionDelay = `${index * 0.1}s`
        })
      })
  
      card.addEventListener("mouseleave", () => {
        const socialIcons = card.querySelectorAll(".team-social a")
  
        // Reset transition delay
        socialIcons.forEach((icon) => {
          icon.style.transitionDelay = "0s"
        })
      })
    })
  }
  
  // Add parallax effect to the hero section
  window.addEventListener("scroll", () => {
    const heroSection = document.querySelector(".about-hero")
    if (heroSection) {
      const scrollPosition = window.scrollY
      heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px"
    }
  })
  
  // Add animation to value cards on hover
  const valueCards = document.querySelectorAll(".value-card")
  valueCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const icon = card.querySelector(".value-icon i")
      icon.classList.add("fa-beat")
    })
  
    card.addEventListener("mouseleave", () => {
      const icon = card.querySelector(".value-icon i")
      icon.classList.remove("fa-beat")
    })
  })
  
  // Add animation to mission statement icons
  const missionIcons = document.querySelectorAll(".mission-statement h3 i")
  missionIcons.forEach((icon) => {
    // Add initial animation class
    icon.classList.add("fa-beat")
  
    // Remove animation after 2 seconds
    setTimeout(() => {
      icon.classList.remove("fa-beat")
    }, 2000)
  
    // Add animation on hover
    icon.parentElement.addEventListener("mouseenter", () => {
      icon.classList.add("fa-beat")
    })
  
    icon.parentElement.addEventListener("mouseleave", () => {
      icon.classList.remove("fa-beat")
    })
  })
  
  