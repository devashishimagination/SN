// Course data
const courses = [
  {
    id: 1,
    title: "Salesforce",
    description: "Unlock the power of Salesforce with skills in CRM, Apex, Visualforce, and more to excel in cloud solutions.",
    image:  "images/slsoc.png",
    duration: "6 Months",
    rating: 4.8,
    reviews: 245,
    level: "Beginner to Advanced",
    students: 1250,
    // instructor: "Dr. Alex Johnson",
    lastUpdated: "January 2025",
    page: "course-detail-salesforce.html" // Updated page name
    
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    description: "Learn Artificial Intelligence, Machine Learning, and advanced techniques to become anArtificial Intelligence expert.",
    image: "images/okien.png",
    duration: "6 Months",
    rating: 4.7,
    reviews: 189,
    level: "Intermediate",
    students: 980,
    // instructor: "Prof. Sarah Williams",
    lastUpdated: "February 2025",
  },
  {
    id: 3,
    title: "Data Science Fundamentals",
    description: "Dive into Data Science by mastering Python, Machine Learning, Data Visualization, and learn more to uncover valuable insights.",
    image: "images/ience.png",
    duration: "6 Months",
    rating: 4.9,
    reviews: 156,
    level: "Intermediate",
    students: 875,
    // instructor: "Michael Chen",
    lastUpdated: "December 2024",
  },
  {
    id: 4,
    title: "Big Data Analytics",
    description: "Gain insights from data by mastering tools like Excel, SQL, and Power BI to drive smarter business strategies.",
    image: "images/dataAnalytics.png",
    duration: "6 Months",
    rating: 4.6,
    reviews: 132,
    level: "Advanced",
    students: 720,
    // instructor: "Jennifer Lopez",
    lastUpdated: "January 2025",
  },
  {
    id: 5,
    title: "Cloud Computing",
    description: "Empower your career by mastering cloud platforms like AWS, Azure, and Google Cloud for seamless deployment and scalability.",
    image: "images/clod.png",
    duration: "6 Months",
    rating: 4.9,
    reviews: 178,
    level: "Advanced",
    students: 650,
    // instructor: "Dr. Robert Smith",
    lastUpdated: "March 2025",
  },
  {
    id: 6,
    title: "Full Stack Web Developement",
    description: " Gain expertise in HTML, CSS, JavaScript, React, Node.js,to build dynamic web applications and become a skilled full-stack web developer.",
    image: "images/vull.png",
    duration: "6 Months",
    rating: 4.7,
    reviews: 145,
    level: "Intermediate to Advanced",
    students: 590,
    // instructor: "Emily Parker",
    lastUpdated: "February 2025",
  },
  {
    id: 7,
    title: "Mern Stack Developement",
    description: "Build dynamic and modern web applications by mastering MongoDB, Express.js, React, and Node.js with hands-on experience.",
    image: "images/exrn.png",
    duration: "6 Months",
    rating: 4.5,
    reviews: 98,
    level: "Advanced",
    students: 420,
    // instructor: "David Wilson",
    lastUpdated: "January 2025",
  },
  {
    id: 8,
    title: "Mean Stack Developement",
    description: "Create powerful and scalable web solutions by mastering MongoDB, Express.js, Angular, and Node.js with real-world projects.",
    image: "images/texa.png",
    duration: "6 Months",
    rating: 4.8,
    reviews: 167,
    level: "Beginner to Intermediate",
    students: 890,
    // instructor: "Sophia Martinez",
    lastUpdated: "March 2025",
  },
  {
    id: 9,
    title: "System Enginering",
    description: "Learn to build, optimize, and maintain robust systems to become a proficient in System Engineer.",
    image: "images/enst.png",
    duration: "6 Months",
    rating: 4.6,
    reviews: 124,
    level: "Intermediate",
    students: 560,
    // instructor: "Thomas Anderson",
    lastUpdated: "February 2025",
  },
  {
    id: 10,
    title: "Advanced Java",
    description: "Enhance your coding skills by mastering Advanced Java concepts for building powerful and scalable applications.",
    image: "images/jvaa.png",
    duration: "6 Months",
    rating: 4.7,
    reviews: 156,
    level: "Beginner to Intermediate",
    students: 1100,
    // instructor: "Jessica Brown",
    lastUpdated: "January 2025",
  },
  {
    id: 11,
    title: "Linux Administration",
    description: "Gain expertise in Linux administration to manage, configure, and secure server environments efficiently.",
    image: "images/uxli.png",
    duration: "6 Months",
    rating: 4.5,
    reviews: 112,
    level: "Intermediate",
    students: 480,
    // instructor: "Daniel Lee",
    lastUpdated: "December 2024",
  },
  {
    id: 12,
    title: "UI/UX Design",
    description: "Design engaging user experiences and intuitive interfaces by mastering UI/UX principles and valuable tools.",
    image: " images/etic.png ",
    duration: "6 Months",
    rating: 4.6,
    reviews: 134,
    level: "Advanced",
    students: 520,
    // instructor: "Dr. Amanda Clark",
    lastUpdated: "February 2025",
  },
  {
    id: 13,
    title: "C",
    description: "Unlock the power of programming by mastering C for building efficient and robust applications.",
    image: "images/clanguage.png",
    duration: "6 Months",
    rating: 4.8,
    reviews: 98,
    level: "Intermediate to Advanced",
    students: 380,
    // instructor: "Christopher White",
    lastUpdated: "March 2025",
  },
  {
    id: 14,
    title: "security SpeciaCyberlist",
    description: "Master cybersecurity techniques, ethical hacking, and network security to protect systems from threats and ensure data protection.",
    image: "images/cbrs.png",
    duration: "6 Months",
    rating: 4.9,
    reviews: 210,
    level: "Beginner to Intermediate",
    students: 1450,
    // instructor: "Olivia Taylor",
    lastUpdated: "January 2025",
  },
  {
    id: 15,
    title: "Devops",
    description: "Bridge the gap between development and operations by mastering DevOps tools and practices for automation and deployment.",
    image: "images/odeeg.png ",
    duration: "6 Months",
    rating: 4.7,
    reviews: 145,
    level: "Intermediate",
    students: 780,
    // instructor: "James Miller",
    lastUpdated: "February 2025",
  },
  {
    id: 16,
    title: " Blockchain Development ",
    description: "Explore blockchain technology to create secure, transparent, and decentralized solutions.",
    image: "images/dced.png",
    duration: "6 Months",
    rating: 4.8,
    reviews: 87,
    level: "Advanced",
    students: 290,
    // instructor: "Dr. Elizabeth Harris",
    lastUpdated: "March 2025",
  },
]

// Function to generate star rating HTML
function generateStarRating(rating) {
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  let starsHTML = ""

  // Add full stars
  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>'
  }

  // Add half star if needed
  if (halfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>'
  }

  // Add empty stars
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>'
  }

  return starsHTML
}

// Function to render course cards
function renderCourses() {
  const coursesGrid = document.getElementById("courses-grid");

  if (!coursesGrid) return; // Exit if element doesn't exist

  // Mapping course titles to actual filenames
  const coursePageMap = {
    "Salesforce": "course-detail-salesforce.html",
    "Artificial Intelligence": "courses-detailsAIML.html",
    "Data Science Fundamentals": "course-detail-datasci.html",
    "Big Data Analytics":"course-detail-dataanalytics.html",
    "Cloud Computing": "course-detail-cloudcom.html",
    "Full Stack Web Developement": "course-detail-fullstack.html",
    "Mern Stack Developement":"course-detail-mernstack.html",
    "Mean Stack Developement": "course-detail-meanstack.html",
    "System Enginering": "course-detail-enge.html",
    "Advanced Java":"course-detail-java.html",
    "Linux Administration":"course-detail-linux.html",
    "UI/UX Design":"course-detail-ui.html",
    "C":"course-detail-c.html",
    "security SpeciaCyberlist":"course-detail-cyber.html",
    "Devops":"course-detail-devops.html",
    "Blockchain Development": "courses-detailsBlockchain.html",
  };

  courses.forEach((course) => {
    const courseCard = document.createElement("div");
    courseCard.className = "course-card";

    // Get the correct page filename from the map
    let coursePage = coursePageMap[course.title.trim()] || "course-detail.html"; // Default fallback

    courseCard.innerHTML = `
            <div class="course-image">
              <img src="${course.image}" alt="${course.title}" class="course-thumbnail">
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <p class="course-description">${course.description}</p>
                
                <div class="course-details">
                    <div class="course-details-item">
                        <i class="fas fa-signal"></i>
                        <span>Level: ${course.level}</span>
                    </div>
                    <div class="course-details-item">
                        <i class="fas fa-users"></i>
                        <span>${course.students} students enrolled</span>
                    </div>
                    
                    <div class="course-details-item">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Last updated: ${course.lastUpdated}</span>
                    </div>
                </div>
                
                <div class="course-meta">
                    <div class="course-duration">
                        <i class="far fa-clock"></i> ${course.duration}
                    </div>
                    <div class="course-rating">
                        <div class="stars">${generateStarRating(course.rating)}</div>
                        <span>${course.rating} (${course.reviews})</span>
                    </div>
                </div>
                <div class="course-actions">
                    <a href="${coursePage}" class=" btn-primary">View Details</a>
                    
                </div>
            </div>
        `;

    coursesGrid.appendChild(courseCard);
  });
}


// Function to handle module accordion
function setupModuleAccordion() {
  const moduleHeaders = document.querySelectorAll(".module-header")

  if (moduleHeaders.length === 0) return // Exit if not on course detail page

  moduleHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling
      const toggle = header.querySelector(".module-toggle")

      // Toggle active class
      content.classList.toggle("active")
      header.classList.toggle("active")
      toggle.classList.toggle("active")
    })
  })
}

// Function to handle FAQ accordion
function setupFaqAccordion() {
  const faqQuestions = document.querySelectorAll(".faq-question")

  if (faqQuestions.length === 0) return // Exit if not on course detail page

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling
      const toggle = question.querySelector(".faq-toggle")

      // Toggle active class
      answer.classList.toggle("active")
      toggle.classList.toggle("active")
    })
  })
}

// Function to get URL parameters (for course detail page)
function getUrlParameter(name) {
  name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]")
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)")
  const results = regex.exec(location.search)
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "))
}

// Function to load course detail
function loadCourseDetail() {
  const courseId = Number.parseInt(getUrlParameter("id"))

  if (!courseId) return // Exit if not on course detail page or no ID

  const course = courses.find((c) => c.id === courseId)

  if (!course) {
    // Handle course not found
    document.body.innerHTML = `
      <div class="container" style="padding: 100px 20px; text-align: center;">
        <h1>Course not found</h1>
        <p>The course you're looking for doesn't exist.</p>
        <a href="index.html" class="btn btn-primary">Back to Courses</a>
      </div>
    `
    return
  }

  // Update page title
  document.title = `${course.title} - Saturnx Nexus `

  // Update course header
  const courseHeaderInfo = document.querySelector(".course-header-info")
  if (courseHeaderInfo) {
    courseHeaderInfo.querySelector("h1").textContent = course.title
    courseHeaderInfo.querySelector(".course-header-description").textContent = course.description

    // Update meta information
    const metaItems = courseHeaderInfo.querySelectorAll(".course-header-meta-item span")
    metaItems[0].textContent = course.duration
    metaItems[1].textContent = course.level
    metaItems[2].textContent = `${course.students} students`
    metaItems[3].textContent = `Last updated: ${course.lastUpdated}`
  }

  // Update course icon
  const courseHeaderIcon = document.querySelector(".course-header-image i")
  if (courseHeaderIcon) {
     courseHeaderImage.src = `images/${course.id}.jpg`
    courseHeaderImage.alt = `${course.title}`
  }

  // Update sidebar rating
  const sidebarRating = document.querySelector(".course-sidebar-rating")
  if (sidebarRating) {
    sidebarRating.innerHTML = `
      <div class="stars">${generateStarRating(course.rating)}</div>
      <span>${course.rating} (${course.reviews} reviews)</span>
    `
  }

  // Update instructor
  const instructorName = document.querySelector(".instructor-name")
  if (instructorName) {
    instructorName.textContent = course.instructor
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  renderCourses()
  setupModuleAccordion()
  setupFaqAccordion()
  loadCourseDetail()
})
