function initChatbot() {
    const chatBox = document.getElementById('chat-box');
    const userInput = document.getElementById('user-input');
    const sendBtn = document.getElementById('send-btn');
    const closeBtn = document.getElementById('chatbotClose');
    const backBtn = document.getElementById('chatbotBack');
    const toggleBtn = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');

    if (!chatBox || !userInput || !sendBtn || !closeBtn || !toggleBtn || !chatbotWindow) {
      console.error('One or more chatbot elements are missing.');
      return;
    }

    let history = [];

    function appendMessage(sender, response) {
        const msg = document.createElement('div');
        msg.className = sender === 'User' ? 'user' : 'Nexus';
        msg.textContent = `${sender}: ${response.reply}`; // Display the reply

        chatBox.appendChild(msg);

        // Display suggestions as clickable buttons
        if (response.suggestions && response.suggestions.length > 0) {
            const suggestionsDiv = document.createElement('div');
            suggestionsDiv.className = 'suggestions';

            response.suggestions.forEach(suggestion => {
                const suggestionBtn = document.createElement('button');
                suggestionBtn.className = 'suggestion-btn';
                suggestionBtn.textContent = suggestion;
                suggestionBtn.addEventListener('click', () => {
                    appendMessage('User', suggestion);
                    setTimeout(() => {
                        appendMessage('Nexus', botReply(suggestion));
                    }, 400);
                });
                suggestionsDiv.appendChild(suggestionBtn);
            });

            chatBox.appendChild(suggestionsDiv);
        }

        chatBox.scrollTop = chatBox.scrollHeight;
    }
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
          title: "C/C++",
          description: "Unlock the power of programming by mastering C and C++ for building efficient and robust applications.",
          image: "images/tehc.png",
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

    function botReply(userText) {
        const lower = userText.toLowerCase();

        for (let course of courses) {
            if (lower.includes(course.title.toLowerCase())) {
                return {
                    reply: `Course: ${course.title}\nDescription: ${course.description}\nDuration: ${course.duration}\nLevel: ${course.level}\nRating: ${course.rating}\nReviews: ${course.reviews}\nLast Updated: ${course.lastUpdated}`,
                    suggestions: ['Fees', 'Schedule', 'Certificate']
                };
            }
        }
    
        if (lower.includes('hello') || lower.includes('hi')) return {
            reply: "Hello! How can I assist you today?",
            suggestions: ['Courses', 'Timings', 'Fees']
        };
    
        if (lower.includes('course') || lower.includes('courses')) return {
            reply: "We offer various courses like Salesforce, Artificial Intelligence, Data Science, and more. Ask about any course to know details!",
            suggestions: ['Salesforce', 'Artificial Intelligence', 'Data Science Fundamentals','Big Data Analytics','Cloud Computing','Full Stack Web Developement','Mern Stack Developement','Mean Stack Developement','System Enginering','Advanced Java','Linux Administration','UI/UX Design','C/C++','security SpeciaCyberlist','Devops','Blockchain Development', ]
        };

        // if (lower.includes('web development')) return {
        //   reply: "The Web Development course is 10 weeks long, includes HTML, CSS, JS, and live projects.",
        //   suggestions: ['Fees', 'Schedule', 'Certificate']
        // };

        // if (lower.includes('python')) return {
        //   reply: "Our Python course covers basic to advanced levels, ideal for beginners and intermediates.",
        //   suggestions: ['Fees', 'Schedule', 'Certificate']
        // };

        // if (lower.includes('ui') || lower.includes('ux') || lower.includes('design')) return {
        //   reply: "The UI/UX course teaches Figma, design systems, and real-world prototyping.",
        //   suggestions: ['Fees', 'Schedule', 'Certificate']
        // };

        if (lower.includes('fees') || lower.includes('price') || lower.includes('cost')) return {
          reply: "Course fees range from ₹5000 to ₹15000 depending on the course and duration.",
          suggestions: ['Courses', 'Timings']
        };

        if (lower.includes('timing') || lower.includes('schedule')) return {
          reply: "Courses run on weekdays and weekends. Timings are flexible with morning & evening batches.",
          suggestions: ['Fees', 'Certificate']
        };

        if (lower.includes('certificate')) return {
          reply: "Yes, you'll get a certificate upon successful completion of any course.",
          suggestions: ['Courses', 'Schedule']
        };

        if (lower.includes('contact')) return {
          reply: "You can contact us at support@example.com or visit the Contact Us page.",
          suggestions: ['Courses', 'Location']
        };

        if (lower.includes('location') || lower.includes('where')) return {
          reply: "We're located in Mumbai but offer online courses accessible from anywhere!",
          suggestions: ['Schedule', 'Fees']
        };

        if (lower.includes('thank')) return {
          reply: "You're welcome! Let me know if you have any more questions.",
          suggestions: ['Courses', 'Timings']
        };

        if (lower.includes('bye')) return {
          reply: "Goodbye! Have a great day!",
          suggestions: []
        };

        return {
          reply: "I'm not sure I understand. Could you please rephrase your question?",
          suggestions: ['Courses', 'Fees', 'Schedule']
        };
    }

    function handleSend() {
        const userText = userInput.value.trim();
        if (!userText) return;

        appendMessage('User', { reply: userText, suggestions: [] }); // Just send the user message
        history.push(userText);
        userInput.value = '';

        setTimeout(() => {
            appendMessage('Nexus', botReply(userText)); // Append bot reply after a delay
        }, 400);
    }

    sendBtn.addEventListener('click', handleSend);
    userInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') handleSend();
    });

    toggleBtn.addEventListener('click', () => {
        chatbotWindow.classList.remove('hidden');
        toggleBtn.style.display = 'none';
    });

    closeBtn.addEventListener('click', () => {
        chatbotWindow.classList.add('hidden');
        toggleBtn.style.display = 'block';
    });

    backBtn.addEventListener('click', () => {
        if (history.length >= 2) {
            history.pop();
            const last = history.pop();
            userInput.value = last;
            handleSend();
        } else {
            appendMessage('Nexus', 'No previous input.');
        }
    });
}
