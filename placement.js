// Placement Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Initialize circular progress bars
  initCircularProgress()

  // Initialize counters
  initCounters()

  // Initialize FAQ accordion
  setupFaqAccordion()

  // Add live icon to new placements
  addLiveIcons()
})

// Function to initialize circular progress bars
function initCircularProgress() {
  const statCards = document.querySelectorAll(".stat-card")

  statCards.forEach((card) => {
    const circle = card.querySelector(".stat-circle-progress")
    const percentage = card.querySelector(".stat-percentage")
    const value = card.getAttribute("data-value")

    if (circle && percentage && value) {
      // Calculate the circumference of the circle
      const radius = circle.getAttribute("r")
      const circumference = 2 * Math.PI * radius

      // Set the initial dashoffset
      circle.style.strokeDasharray = circumference
      circle.style.strokeDashoffset = circumference

      // Animate the progress bar when it comes into view
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animate percentage text
              animatePercentage(percentage, 0, value)

              // Animate circle
              setTimeout(() => {
                const offset = circumference - (value / 100) * circumference
                circle.style.strokeDashoffset = offset
              }, 200)

              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 },
      )

      observer.observe(card)
    }
  })
}

// Function to animate percentage text
function animatePercentage(element, start, end) {
  let current = start
  const increment = end > 1000 ? 100 : end > 100 ? 5 : 1
  const duration = 2000 // 2 seconds
  const steps = Math.ceil((end - start) / increment)
  const stepTime = duration / steps

  const timer = setInterval(() => {
    current += increment
    if (current > end) {
      current = end
      clearInterval(timer)
    }
    element.textContent = current + (end > 100 ? "+" : "%")
  }, stepTime)
}

// Function to initialize counters
function initCounters() {
  const counters = document.querySelectorAll(".counter")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.closest(".stat-card").getAttribute("data-value"))

    // Animate counter when it comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animatePercentage(counter, 0, target)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    observer.observe(counter.closest(".stat-card"))
  })
}

// Function to handle FAQ accordion
function setupFaqAccordion() {
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling
      const toggle = question.querySelector(".faq-toggle")

      // Toggle active class
      answer.classList.toggle("active")
      toggle.classList.toggle("active")

      // Add animation to the toggle icon
      if (toggle.classList.contains("active")) {
        toggle.style.transform = "rotate(180deg)"
      } else {
        toggle.style.transform = "rotate(0deg)"
      }
    })
  })
}

// Function to add live icons to new placements
function addLiveIcons() {
  // Get all story cards that are less than 30 days old (would be dynamic in a real app)
  const recentStories = document.querySelectorAll(".story-card:nth-child(1), .story-card:nth-child(3)")

  recentStories.forEach((story) => {
    const name = story.querySelector(".story-name")
    const liveIcon = document.createElement("span")
    liveIcon.className = "live-icon"
    liveIcon.setAttribute("title", "Recent placement")

    // Add "NEW" text next to the icon
    const newText = document.createElement("span")
    newText.textContent = " NEW"
    newText.style.fontSize = "0.7rem"
    newText.style.color = "#e74c3c"
    newText.style.fontWeight = "bold"

    name.appendChild(liveIcon)
    name.appendChild(newText)
  })
}

// Add parallax effect to the hero section
window.addEventListener("scroll", () => {
  const heroSection = document.querySelector(".placement-hero")
  if (heroSection) {
    const scrollPosition = window.scrollY
    heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px"
  }
})

// Add hover effect to timeline items
const timelineItems = document.querySelectorAll(".timeline-item")
timelineItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const icon = item.querySelector(".timeline-icon i")
    icon.classList.add("fa-beat")
  })

  item.addEventListener("mouseleave", () => {
    const icon = item.querySelector(".timeline-icon i")
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

