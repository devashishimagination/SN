// Common JavaScript for all pages

document.addEventListener("DOMContentLoaded", () => {
  // Load header and footer
  loadComponent("header", ".header-container")
  loadComponent("footer", ".footer-container")

  // Initialize header functionality after a short delay to ensure DOM is loaded
  setTimeout(initHeader, 100)

  // Initialize enquiry popup
  initEnquiryPopup()
})

// Function to load HTML components
function loadComponent(component, targetSelector) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  // Adjust path for fetching components based on directory depth
  let pathPrefix = window.location.pathname.includes("/course-details/") ? "../" : "./";

  fetch(`${pathPrefix}${component}.html`)
    .then((response) => response.text())
    .then((html) => {
      target.innerHTML = html;

      // Initialize header functionality if header was loaded
      if (component === "header") {
        initHeader();
      }
    })
    .catch((error) => {
      console.error(`Error loading ${component}:`, error);
    });
}

// Load header when the page loads
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("header", ".header-container");
});


// Function to initialize header functionality
function initHeader() {
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById("mobileMenuToggle")
  const mainNav = document.querySelector(".main-nav")

  if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener("click", function () {
      this.classList.toggle("active")
      mainNav.classList.toggle("active")

      // Prevent scrolling when menu is open
      if (mainNav.classList.contains("active")) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = ""
      }
    })
  }

  // Dropdown toggles for mobile
  const navItems = document.querySelectorAll(".nav-item.dropdown")

  navItems.forEach((item) => {
    const link = item.querySelector(".nav-link")

    if (link) {
      link.addEventListener("click", (e) => {
        // Only prevent default and toggle dropdown on mobile
        if (window.innerWidth < 992) {
          e.preventDefault()
          item.classList.toggle("active")

          // Close other dropdowns
          navItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.classList.remove("active")
            }
          })
        }
      })
    }
  })

  // Quick Enquiry button
  const quickEnquiryBtn = document.getElementById("quickEnquiryBtn")
  if (quickEnquiryBtn) {
    quickEnquiryBtn.addEventListener("click", (e) => {
      e.preventDefault()
      openEnquiryPopup()
    })
  }

  // Add active class to current page in navigation
  const currentPage = window.location.pathname.split("/").pop()
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (
      href === currentPage ||
      (currentPage === "" && href === "index.html") ||
      (currentPage === "/" && href === "index.html")
    ) {
      link.parentElement.classList.add("active")
    }
  })
}

// Function to initialize enquiry popup
function initEnquiryPopup() {
  const enquiryPopup = document.getElementById("enquiryPopup")
  const enquiryClose = document.getElementById("enquiryClose")
  const enquiryForm = document.getElementById("enquiryForm")

  // If elements don't exist yet (because footer is not loaded), try again later
  if (!enquiryPopup || !enquiryClose || !enquiryForm) {
    setTimeout(initEnquiryPopup, 100)
    return
  }

  // Close popup when close button is clicked
  enquiryClose.addEventListener("click", () => {
    closeEnquiryPopup()
  })

  // Close popup when clicking outside the content
  enquiryPopup.addEventListener("click", (e) => {
    if (e.target === enquiryPopup) {
      closeEnquiryPopup()
    }
  })

  // Handle form submission
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
        closeEnquiryPopup()

        // Reset form after popup is closed
        setTimeout(() => {
          initEnquiryPopup() // Reinitialize the form
        }, 500)
      }, 3000)
    }
  })
}

// Function to open enquiry popup
function openEnquiryPopup() {
  const enquiryPopup = document.getElementById("enquiryPopup")
  if (enquiryPopup) {
    enquiryPopup.classList.add("active")
    document.body.style.overflow = "hidden" // Prevent scrolling
  }
}

// Function to close enquiry popup
function closeEnquiryPopup() {
  const enquiryPopup = document.getElementById("enquiryPopup")
  if (enquiryPopup) {
    enquiryPopup.classList.remove("active")
    document.body.style.overflow = "" // Enable scrolling
  }
}

