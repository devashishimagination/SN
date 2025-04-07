// FAQ Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Initialize FAQ accordion
  initFaqAccordion()

  // Initialize FAQ category navigation
  initFaqCategories()

  // Initialize FAQ search
  initFaqSearch()
})

// Function to initialize FAQ accordion
function initFaqAccordion() {
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling
      const toggle = this.querySelector(".faq-toggle")

      // Toggle active class
      this.classList.toggle("active")

      // Toggle answer visibility
      if (answer.classList.contains("active")) {
        answer.classList.remove("active")
        toggle.style.transform = "rotate(0deg)"
      } else {
        answer.classList.add("active")
        toggle.style.transform = "rotate(180deg)"
      }
    })
  })
}

// Function to initialize FAQ category navigation
function initFaqCategories() {
  const categoryLinks = document.querySelectorAll(".faq-categories li a")

  categoryLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all links
      categoryLinks.forEach((l) => l.parentElement.classList.remove("active"))

      // Add active class to clicked link
      this.parentElement.classList.add("active")

      // Get target category ID
      const targetId = this.getAttribute("href").substring(1)
      const targetCategory = document.getElementById(targetId)

      // Scroll to target category
      if (targetCategory) {
        window.scrollTo({
          top: targetCategory.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })
}

// Function to initialize FAQ search
function initFaqSearch() {
  const searchInput = document.getElementById("faqSearch")

  if (!searchInput) return

  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase()
    const faqItems = document.querySelectorAll(".faq-item")

    faqItems.forEach((item) => {
      const question = item.querySelector(".faq-question span").textContent.toLowerCase()
      const answer = item.querySelector(".faq-answer p").textContent.toLowerCase()

      if (question.includes(searchTerm) || answer.includes(searchTerm)) {
        item.style.display = "block"
      } else {
        item.style.display = "none"
      }
    })

    // Show/hide category headings based on visible items
    const categories = document.querySelectorAll(".faq-category")

    categories.forEach((category) => {
      const visibleItems = category.querySelectorAll(".faq-item[style='display: block']").length
      const hiddenItems = category.querySelectorAll(".faq-item[style='display: none']").length
      const totalItems = visibleItems + hiddenItems

      if (visibleItems === 0 && totalItems > 0) {
        category.style.display = "none"
      } else {
        category.style.display = "block"
      }
    })
  })

  // Add search button functionality
  const searchButton = searchInput.nextElementSibling

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      // Trigger the input event to perform search
      const event = new Event("input")
      searchInput.dispatchEvent(event)
    })
  }
}

