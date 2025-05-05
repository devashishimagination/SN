// Contact Page JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Initialize form validation
  initFormValidation();

  // Initialize FAQ accordion
  setupFaqAccordion();

  // Update status badge based on current time
  updateStatusBadge();

  // Add animations to contact cards
  animateContactCards();
});

// Function to initialize form validation
function initFormValidation() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
          e.preventDefault();

          // Simple validation
          let isValid = true;
          const requiredFields = contactForm.querySelectorAll("[required]");

          requiredFields.forEach((field) => {
              if (!field.value.trim()) {
                  isValid = false;
                  field.classList.add("error");

                  // Add error message if it doesn't exist
                  let errorMsg = field.parentElement.querySelector(".error-message");
                  if (!errorMsg) {
                      errorMsg = document.createElement("div");
                      errorMsg.className = "error-message";
                      errorMsg.textContent = "This field is required";
                      field.parentElement.appendChild(errorMsg);
                  }
              } else {
                  field.classList.remove("error");

                  // Remove error message if it exists
                  const errorMsg = field.parentElement.querySelector(".error-message");
                  if (errorMsg) {
                      errorMsg.remove();
                  }

                  // Email validation
                  if (field.type === "email" && !isValidEmail(field.value)) {
                      isValid = false;
                      field.classList.add("error");

                      let errorMsg = field.parentElement.querySelector(".error-message");
                      if (!errorMsg) {
                          errorMsg = document.createElement("div");
                          errorMsg.className = "error-message";
                          errorMsg.textContent = "Please enter a valid email address";
                          field.parentElement.appendChild(errorMsg);
                      } else {
                          errorMsg.textContent = "Please enter a valid email address";
                      }
                  }

                  // Phone number validation
                  if (field.name === "phone" && !isValidPhone(field.value)) {
                      isValid = false;
                      field.classList.add("error");

                      let errorMsg = field.parentElement.querySelector(".error-message");
                      if (!errorMsg) {
                          errorMsg = document.createElement("div");
                          errorMsg.className = "error-message";
                          errorMsg.textContent = "Please enter a valid 10-digit phone number";
                          field.parentElement.appendChild(errorMsg);
                      } else {
                          errorMsg.textContent = "Please enter a valid 10-digit phone number";
                      }
                  }
              }
          });

          if (isValid) {
              // Get form values
              const name = contactForm.querySelector('[name="name"]').value.trim();
              const email = contactForm.querySelector('[name="email"]').value.trim();
              const phone = contactForm.querySelector('[name="phone"]').value.trim();
              const course = contactForm.querySelector('[name="course"]').value.trim();
              const message = contactForm.querySelector('[name="message"]') ? 
                              contactForm.querySelector('[name="message"]').value.trim() : "";
              
              // Create WhatsApp message
              const whatsappMessage = 
                  `*New Contact Form Submission*\n\n` +
                  `*Name:* ${name}\n` +
                  `*Email:* ${email}\n` +
                  `*Phone:* ${phone}\n` +
                  `*Interested Course:* ${course}` +
                  (message ? `\n*Message:* ${message}` : "");
              
              // Send to WhatsApp
              const whatsappNumber = "919765569760"; // your WhatsApp number
              const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
              window.open(whatsappURL, "_blank");
              
              // Save to Google Form
              const googleFormUrl = "https://script.google.com/macros/s/AKfycbze8cru23RXZmBvCXqiHfH7IYnrYYjMnpxFHbqAEmbb7BevlQyNnpj81MG1Z81w-vlf/exec";
              
              const formData = new FormData();
              formData.append("name", name);
              formData.append("email", email);
              formData.append("phone", phone);
              formData.append("course", course);
              if (message) formData.append("message", message);
              
              fetch(googleFormUrl, {
                  method: "POST",
                  body: formData
              })
              .then(response => {
                  if (!response.ok) {
                      throw new Error("Network response was not ok");
                  }
                  return response.text();
              })
              .then(data => {
                  console.log("Data saved to Google Sheet:", data);
              })
              .catch(error => {
                  console.error("Error saving to Google Sheet:", error);
              });

              // Show success message
              const successMsg = document.createElement("div");
              successMsg.className = "success-message";
              successMsg.innerHTML =
                  '<i class="fas fa-check-circle"></i> Your message has been sent successfully! We\'ll get back to you soon.';

              // Insert after form
              contactForm.parentElement.insertBefore(successMsg, contactForm.nextSibling);

              // Reset form
              contactForm.reset();

              // Remove success message after 5 seconds
              setTimeout(() => {
                  successMsg.classList.add("fade-out");
                  setTimeout(() => {
                      successMsg.remove();
                  }, 500);
              }, 5000);
          }
      });

      // Add input event listeners to remove error styling when user types
      const formInputs = contactForm.querySelectorAll("input, textarea, select");
      formInputs.forEach((input) => {
          input.addEventListener("input", function () {
              this.classList.remove("error");

              // Remove error message if it exists
              const errorMsg = this.parentElement.querySelector(".error-message");
              if (errorMsg) {
                  errorMsg.remove();
              }
          });
      });
  }
}

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate phone number format
function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}

// Function to handle FAQ accordion
function setupFaqAccordion() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
      question.addEventListener("click", () => {
          const answer = question.nextElementSibling;
          const toggle = question.querySelector(".faq-toggle");

          // Toggle active class
          answer.classList.toggle("active");

          // Add animation to the toggle icon
          if (answer.classList.contains("active")) {
              toggle.style.transform = "rotate(180deg)";
          } else {
              toggle.style.transform = "rotate(0deg)";
          }
      });
  });
}

// Function to update status badge based on current time
function updateStatusBadge() {
  const statusBadge = document.querySelector(".status-badge");

  if (statusBadge) {
      const now = new Date();
      const day = now.getDay(); // 0 (Sunday) to 6 (Saturday)
      const hour = now.getHours(); // 0 to 23

      // Check if currently open (Monday-Friday 9AM-6PM, Saturday 10AM-2PM)
      let isOpen = false;

      if (day >= 1 && day <= 5 && hour >= 9 && hour < 18) {
          // Monday-Friday 9AM-6PM
          isOpen = true;
      } else if (day === 6 && hour >= 10 && hour < 14) {
          // Saturday 10AM-2PM
          isOpen = true;
      }

      if (isOpen) {
          statusBadge.classList.add("online");
          statusBadge.classList.remove("offline");
          statusBadge.innerHTML = '<i class="fas fa-circle"></i> Currently Open';
      } else {
          statusBadge.classList.add("offline");
          statusBadge.classList.remove("online");
          statusBadge.innerHTML = '<i class="fas fa-circle"></i> Currently Closed';
      }
  }
}

// Function to animate contact cards
function animateContactCards() {
  const contactCards = document.querySelectorAll(".contact-card");

  contactCards.forEach((card, index) => {
      // Add staggered animation delay
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

      // Use Intersection Observer to trigger animation when cards come into view
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      card.style.opacity = "1";
                      card.style.transform = "translateY(0)";
                      observer.unobserve(entry.target);
                  }
              });
          },
          { threshold: 0.2 },
      );

      observer.observe(card);
  });
}

// Add hover effects to form elements
const formElements = document.querySelectorAll(".form-group input, .form-group textarea, .form-group select");
formElements.forEach((element) => {
  element.addEventListener("focus", () => {
      element.parentElement.classList.add("focused");
  });

  element.addEventListener("blur", () => {
      element.parentElement.classList.remove("focused");
  });
});

// Add animation to submit button
const submitBtn = document.querySelector(".submit-btn");
if (submitBtn) {
  submitBtn.addEventListener("mouseenter", () => {
      const icon = submitBtn.querySelector("i");
      icon.classList.add("fa-beat");
  });

  submitBtn.addEventListener("mouseleave", () => {
      const icon = submitBtn.querySelector("i");
      icon.classList.remove("fa-beat");
  });
}