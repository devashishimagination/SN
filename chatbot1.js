
let lastQuestionHadChildren = false;
const chatBox = document.getElementById('chat-box');
const suggestionsBox = document.getElementById('suggestions-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const backButtonContainer = document.getElementById('back-button-container');
const backButton = document.getElementById('back-button');



// Define parent questions
const parentQuestions = ["Tell me about the Courses", "Tell me about your Placement", "Tell me about Saturn Nexus", "How can I contact you ?","certification will you provide"];

const chatData = {
  "Tell me about the Courses": {
    answer: "So, we offer a 15+ Professional IT courses let me know which course you want to know.",
    children: ["Salesforce","artificial intelligence","Cloud Computing","Full Stack Development", "Data Science", "Data Analyst","Devops","Mern Stack", "Mean Stack", "C/C++", "Block Chain","Linux Administration", "UI/UX", "System Engineering","Advance Java","Cyber Security"]
  },
  "Salesforce": {
    answer: "Our Salesforce course includes CRM fundamentals, Apex, Visualforce, Lightning, and hands-on projects with admin and dev tracks, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Cloud Computing": {
    answer: "Absolutely! We provide training on AWS, Google Cloud, and Azure platforms with certification preparation, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Advance Java": {
    answer: "Our Java course includes Core & Advanced Java, JDBC, Spring Boot, REST APIs, and hands-on projects to build real-world applications., includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Linux Administration": {
    answer: "The Linux course includes command-line basics, shell scripting, system administration, and real-time server configuration tasks, includes hands-on projects, and is taught by experienced instructors",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "UI/UX": {
    answer: "Yes! Our UI/UX course focuses on user research, wireframing, Figma, Adobe XD, and real-time project experience, includes hands-on projects, and is taught by experienced instructors",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "artificial intelligence": {
    answer: "Absolutely! Our Artificial Intelligence covers both foundational and advanced concepts, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Full Stack Development": {
    answer: "This course covers both frontend (HTML, CSS, JS, React) and backend (Node.js, MongoDB, Express) with Git and deployment, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Data Science": {
    answer: "The Data Science course includes Python, Machine Learning, Statistics, Data Visualization, Pandas, NumPy, and real-time projects, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Data Analyst": {
    answer: "Absolutely! Our Data Analytics covers both foundational and advanced concepts, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Mern Stack": {
    answer: "The MERN Stack course includes MongoDB, Express.js, React.js, and Node.js with project-based learning and deployment., includes hands-on projects, and is taught by experienced instructors..",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Mean Stack": {
    answer: "Our MEAN Stack course includes MongoDB, Express, Angular, and Node.js, with REST API integration and real-time applications, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "System Engineering": {
    answer: "System Engineering covers OS concepts, networking, hardware & software configuration, and enterprise systems handling, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Devops": {
    answer: "Our DevOps training includes CI/CD, Jenkins, Docker, Kubernetes, Git, Maven, Ansible, and cloud integration with real-world projects, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Cyber Security": {
    answer: "The Cyber Security course covers ethical hacking, network security, threat analysis, and cybersecurity tools with live labs., includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "C/C++": {
    answer: "This course covers both frontend (HTML, CSS, JS, React) and backend (Node.js, MongoDB, Express) with Git and deployment, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "Block Chain": {
    answer: "Block Chain covers both foundational and advanced concepts, includes hands-on projects, and is taught by experienced instructors.",
    children: ["tell me the syllabus","tell me fee structure","certification will you provide","Tell me Course duration"]
  },
  "tell me the syllabus": {
    answer: "I'm sorry, but I don't have specific details about the Salesforce syllabus. However, you can explore the Salesforce course and other offerings at Saturnx Nexus by visiting their website or by inquiring directly through the  option. If you have any other questions related to the courses or the organization, feel free to ask!",
    children: []
  },
  "tell me fee structure": {
    answer: "I don't have information regarding the fee structure for the courses at Saturnx Nexus. For details on fees, I recommend you please contact on this number: 222225555555",
    children: []
  },
  "certification will you provide": {
    answer: "Saturnx Nexus offers recognized certifications that validate your skills upon course completion. These certifications can help boost your employability in the tech industry. If you have more specific questions about the certifications for a particular course, please let me know!",
    children: []
  },
  "Tell me Course duration": {
    answer: "Here are the course durations for the featured courses at Saturnx Nexus 6 To 7 months for all courses.",
    children: []
  },
  "Tell me about your Placement":{
    answer:"Yes! We offer a dedicated placement program to help our students land their dream jobs. Our team provides Resume Building,Group Discussion, interview preparation, and connects you with top recruiters. Let me know if you'd like more details!",
    children:[]
  },
  "Tell me about Saturn Nexus": {
    answer: "Saturnx Nexus is an IT training and placement company founded in 2023. We offer high-quality, industry-focused courses designed to prepare you for real-world tech careers. Our training programs are led by experts and include placement support to help you land your dream job in IT.",
    children: []
  },
  "How can I contact you ?": {
    answer: "Sure! You can reach out to us anytime. Please share your name, email, and message, and fill the Enquiry form and we’ll get back to you in few hours.",
    children: []
  },

};

function addMessage(text, sender = 'bot') {
  const msg = document.createElement('div');
  msg.className = `message ${sender}`;
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function showTypingIndicator() {
  const typing = document.createElement('div');
  typing.className = 'message bot typing';
  typing.id = 'typing-indicator';
  typing.textContent = "EduBot is typing...";
  chatBox.appendChild(typing);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeTypingIndicator() {
  const typing = document.getElementById('typing-indicator');
  if (typing) typing.remove();
}

function clearSuggestions() {
  suggestionsBox.innerHTML = '';
  suggestionsBox.classList.add('hidden');
}

// function showSuggestions(questions) {
//   clearSuggestions();
//   questions.forEach(question => {
//     const btn = document.createElement('button');
//     btn.textContent = question;
//     btn.onclick = () => handleQuestionClick(question);
//     suggestionsBox.appendChild(btn);
//   });
//   suggestionsBox.classList.remove('hidden');
// }
function showSuggestions(questions) {
  clearSuggestions();
  questions.forEach(question => {
    const btn = document.createElement('button');
    btn.textContent = question;
    btn.onclick = () => handleQuestionClick(question);
    suggestionsBox.appendChild(btn);
  });
  suggestionsBox.classList.remove('hidden');

  // Show back button only if we’re not showing parent questions
  if (questions !== parentQuestions) {
    backButtonContainer.classList.remove('hidden');
  } else {
    backButtonContainer.classList.add('hidden');
  }
}

backButton.addEventListener('click', () => {
  clearSuggestions();
  addMessage("🔙 Going back to main questions...", 'bot');
  showSuggestions(parentQuestions);
});


function handleQuestionClick(question) {
    clearSuggestions();
    addMessage(question, 'user');
    userInput.value = '';
  
    const data = chatData[question];
    if (!data) {
      addMessage("Hello, Please Send us an email at saturnx@gmail.com or call us at 800000000 or fill the Enquiry Form for solving your query we will get back you soon.", 'bot');
      return;
    }
  
    showTypingIndicator();
  
    setTimeout(() => {
      removeTypingIndicator();
      addMessage(data.answer, 'bot');
  
      // If children exist, show them
      if (data.children.length > 0) {
        showSuggestions(data.children);
        lastQuestionHadChildren = true;
      } else {
        // If no children, set flag so parent suggestions return on next input click
        lastQuestionHadChildren = false;
      }
    }, 800);
}
  

// Input handlers
sendBtn.addEventListener('click', () => {
  const input = userInput.value.trim();
  if (input) handleQuestionClick(input);
});

userInput.addEventListener('focus', () => {
    if (!lastQuestionHadChildren) {
      showSuggestions(parentQuestions);
    }
});
  

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});

// On page load
window.onload = () => {
  addMessage("👋 Hi! I'm Nexus. Select a topic to begin.", 'bot');
  showSuggestions(parentQuestions);
};
function toggleChatbot() {
  const container = document.getElementById("chatbot-container");
  const launcher = document.getElementById("chatbot-launcher");

  if (container.style.display === "block") {
    container.style.display = "none";
    launcher.style.display = "block";
  } else {
    container.style.display = "block";
    launcher.style.display = "none";
  }
}


// Close chatbot only when close button is clicked
const chatbotClose = document.getElementById("chatbotClose");
chatbotClose.addEventListener("click", function(event) {
  event.stopPropagation(); // Prevents the click from bubbling up to the parent
  document.getElementById("chatbot-container").style.display = "none";
  document.getElementById("chatbot-launcher").style.display = "block";
});

// Prevent closing the chatbot when clicking anywhere else
document.getElementById("chatbot-container").addEventListener("click", function(event) {
  event.stopPropagation(); // Prevents click inside the chatbot from closing it
});

// Close chatbot when clicking outside the launcher
document.addEventListener("click", function(event) {
  const chatbot = document.getElementById("chatbot-container");
  const launcher = document.getElementById("chatbot-launcher");

  // Only hide the chatbot if it's open and the click is not on the launcher
  if (chatbot.style.display === "block" && !chatbot.contains(event.target) && !launcher.contains(event.target)) {
    // Keep the chatbot open by preventing closing when clicked outside
  }
});