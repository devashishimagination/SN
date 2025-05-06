import { NeuralNetwork } from './neuralNetwork.js'; // Hypothetical module

class FuturisticHeader {
    constructor() {
        this.initCanvas();
        this.initVoiceSearch();
        this.initAIRecommendations();
        this.initNeuroToggle();
        this.init3DLogo();
    }

    initCanvas() {
        const canvas = document.getElementById('headerCanvas');
        const ctx = canvas.getContext('2d');
        
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = document.querySelector('.header').offsetHeight;
        }
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        // Draw cyberpunk grid
        function drawGrid() {
            ctx.strokeStyle = 'rgba(0, 240, 255, 0.1)';
            ctx.lineWidth = 0.5;
            
            // Vertical lines
            for (let x = 0; x < canvas.width; x += 30) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            
            // Horizontal lines
            for (let y = 0; y < canvas.height; y += 30) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
            
            // Animate diagonal scan line
            let scanY = 0;
            function animateScan() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawGrid();
                
                // Draw scan line
                ctx.strokeStyle = 'rgba(0, 240, 255, 0.5)';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(0, scanY);
                ctx.lineTo(canvas.width, scanY);
                ctx.stroke();
                
                scanY = (scanY + 1) % canvas.height;
                requestAnimationFrame(animateScan);
            }
            
            animateScan();
        }
        
        drawGrid();
    }

    initVoiceSearch() {
        const voiceBtn = document.getElementById('voiceSearchBtn');
        const voiceWave = voiceBtn.querySelector('.voice-wave');
        
        voiceBtn.addEventListener('click', async () => {
            try {
                voiceBtn.classList.add('active');
                const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
                recognition.lang = 'en-US';
                
                recognition.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    // Process voice command
                    console.log('Voice command:', transcript);
                };
                
                recognition.onend = () => {
                    voiceBtn.classList.remove('active');
                };
                
                recognition.start();
            } catch (error) {
                console.error('Voice recognition failed:', error);
                voiceBtn.classList.remove('active');
            }
        });
    }

    async initAIRecommendations() {
        const aiPanel = document.querySelector('.ai-recommendation .mega-menu-grid');
        const loadingAnim = document.querySelector('.ai-loading lottie-player');
        
        // Simulate AI processing
        setTimeout(() => {
            loadingAnim.style.display = 'none';
            
            // Generate recommended courses (in real app, this would come from ML model)
            const recommendedCourses = [
                { name: "Quantum ML", icon: "https://assets5.lottiefiles.com/packages/lf20_5mpls05l.json" },
                { name: "Neuro UX", icon: "https://assets1.lottiefiles.com/packages/lf20_5tkzkblw.json" },
                { name: "Blockchain AI", icon: "https://assets1.lottiefiles.com/packages/lf20_1pxqjq0d.json" }
            ];
            
            aiPanel.innerHTML = recommendedCourses.map(course => `
                <div class="course-card">
                    <div class="course-icon">
                        <lottie-player src="${course.icon}" background="transparent" speed="1" style="width: 80px; height: 80px" hover></lottie-player>
                    </div>
                    <div class="course-name">${course.name}</div>
                    <div class="ai-badge">AI Pick</div>
                </div>
            `).join('');
            
            // Initialize Lottie interactivity
            LottieInteractivity.create({
                player: document.querySelectorAll('lottie-player'),
                mode: "cursor",
                actions: [
                    {
                        position: { x: [0, 1], y: [0, 1] },
                        type: "seek",
                        frames: [0, 60]
                    }
                ]
            });
        }, 2000);
    }

    initNeuroToggle() {
        const toggle = document.getElementById('neuroToggle');
        let isActive = false;
        
        toggle.addEventListener('click', () => {
            isActive = !isActive;
            document.body.classList.toggle('neuro-mode');
            
            // Animate dots
            const dots = toggle.querySelectorAll('.neuro-dot');
            dots.forEach((dot, i) => {
                dot.style.transform = isActive 
                    ? `translateY(${(i % 2 === 0 ? -5 : 5) * (i + 1)}px) scale(1.5)` 
                    : '';
                dot.style.background = isActive 
                    ? (i % 2 === 0 ? 'var(--accent)' : 'var(--accent-secondary)') 
                    : 'var(--accent)';
            });
        });
    }

    init3DLogo() {
        const logo = document.getElementById('logo3d');
        
        logo.addEventListener('mousemove', (e) => {
            const rect = logo.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleY = (x - centerX) / 20;
            const angleX = (centerY - y) / 20;
            
            logo.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        });
        
        logo.addEventListener('mouseleave', () => {
            logo.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
        });
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new FuturisticHeader();
});
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
  // Handle form submission
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      let isValid = true;
      const requiredFields = enquiryForm.querySelectorAll("[required]");
  
      // Validate required fields
      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          isValid = false;
          field.classList.add("error");
        } else {
          field.classList.remove("error");
        }
      });
  
      if (isValid) {
        // ✅ STEP 1: Get form values - ensure we're getting the correct elements
        const nameVal = enquiryForm.querySelector("#name").value.trim();
        const emailVal = enquiryForm.querySelector("#email").value.trim();
        const phoneVal = enquiryForm.querySelector("#phone").value.trim();
        const courseVal = enquiryForm.querySelector("#course").value.trim();
        const msgVal = enquiryForm.querySelector("#message").value.trim() || "N/A";
  
        // Debug: Log values to console to verify they're captured
        console.log("Form values:", {
          name: nameVal,
          email: emailVal,
          phone: phoneVal,
          course: courseVal,
          message: msgVal
        });
  
        const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phoneVal)) {
      alert("Please enter a valid 10-digit phone number.");
      return; // Stop the form submission
    }
  
    // ✅ STEP 3: Validate Email (basic format check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailVal)) {
      alert("Please enter a valid email address.");
      return; // Stop the form submission
    }
  
        // ✅ STEP 2: Build WhatsApp message - ensure all values are included
        const whatsappMessage =
          `*New Enquiry Received*\n\n` +
          `*Name:* ${nameVal || "Not provided"}\n` +
          `*Email:* ${emailVal || "Not provided"}\n` +
          `*Phone:* ${phoneVal || "Not provided"}\n` +
          `*Interested Course:* ${courseVal || "Not specified"}\n` +
          `*Message:* ${msgVal}`;
  
        console.log("WhatsApp message:", whatsappMessage);
  
        // ✅ STEP 3: Send message to WhatsApp
        const whatsappNumber = "919371072629"; // Replace with your number
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Rest of your code...
        window.open(whatsappURL, "_blank");
        
        
  const formData = new URLSearchParams();
  formData.append("name", nameVal);
  formData.append("email", emailVal);
  formData.append("phone", phoneVal);
  formData.append("course", courseVal);
  formData.append("message", msgVal);
  
  fetch("https://script.google.com/macros/s/AKfycbze8cru23RXZmBvCXqiHfH7IYnrYYjMnpxFHbqAEmbb7BevlQyNnpj81MG1Z81w-vlf/exec", {
    method: "POST",
    body: formData
  })
  .then(response => response.text())
  .then(result => {
    console.log("Google Sheet submission:", result);
    alert("Enquiry submitted successfully!");
  })
  .catch(err => {
    console.error("Submission error:", err);
    alert("There was an error submitting your enquiry.");
  });
  
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
                <button type="submit" class="btn btn-primary btn-block">
                  <span>Submit Enquiry</span>
                  <i class="fas fa-arrow-right"></i>
                </button>
              `
              initEnquiryPopup(); // Re-attach event listener
            }, 500);
          }, 3000);
        }
      });
    }
  }
  