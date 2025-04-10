document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const closeBtn = document.querySelector('.close-btn');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatMessages = document.querySelector('.chatbot-messages');
    const typingIndicator = document.querySelector('.typing-indicator');
    
    // Toggle chatbot
    chatbotToggler.addEventListener('click', () => {
        chatbotContainer.classList.toggle('show');
    });
    
    // Close chatbot
    closeBtn.addEventListener('click', () => {
        chatbotContainer.classList.remove('show');
    });
    
    // Send message when button is clicked
    sendBtn.addEventListener('click', sendMessage);
    
    // Send message when Enter key is pressed
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
    
    function sendMessage() {
        const message = userInput.value.trim();
        if (message === '') return;
        
        // Add user message to chat
        addMessage(message, 'user');
        userInput.value = '';
        
        // Show typing indicator
        showTypingIndicator();
        
        // Simulate bot response after a delay
        setTimeout(() => {
            hideTypingIndicator();
            const botResponse = getBotResponse(message);
            addMessage(botResponse, 'bot');
        }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
    }
    
    function addMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', `${sender}-message`);
        
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        if (sender === 'bot') {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    <p>${message}</p>
                    <span class="message-time">${timeString}</span>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-content">
                    <p>${message}</p>
                    <span class="message-time">${timeString}</span>
                </div>
            `;
        }
        
        chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }
    
    function showTypingIndicator() {
        typingIndicator.style.display = 'block';
        scrollToBottom();
    }
    
    function hideTypingIndicator() {
        typingIndicator.style.display = 'none';
    }
    
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function getBotResponse(userMessage) {
        // Convert user message to lowercase for easier matching
        const message = userMessage.toLowerCase();
        
        // Simple response logic - you can expand this with more complex AI or API calls
        if (message.includes('hello') || message.includes('hi')) {
            return "Hi there! How can I assist you with your learning today?";
        } else if (message.includes('math') || message.includes('mathematics')) {
            return "Mathematics is a fascinating subject! Are you working on algebra, calculus, or geometry? I can help explain concepts or solve problems.";
        } else if (message.includes('science') || message.includes('biology') || message.includes('chemistry') || message.includes('physics')) {
            return "Science is all about understanding the world around us! What specific topic are you studying? I can provide explanations or resources.";
        } else if (message.includes('history') || message.includes('social studies')) {
            return "History helps us learn from the past. Are you studying world history, ancient civilizations, or modern events?";
        } else if (message.includes('help') || message.includes('support')) {
            return "I'm here to help with your educational needs. You can ask me about specific subjects, concepts, or request learning resources.";
        } else if (message.includes('thank') || message.includes('thanks')) {
            return "You're welcome! Happy to help with your learning journey. Is there anything else you'd like to know?";
        } else if (message.includes('bye') || message.includes('goodbye')) {
            return "Goodbye! Don't hesitate to come back if you have more questions. Happy learning!";
        } else {
            // Default response if no specific match is found
            const defaultResponses = [
                "That's an interesting question. Let me think about how best to explain this concept...",
                "I can help with that! Here's what I know about the topic...",
                "Great question! This is an important concept in education. Here's some information that might help...",
                "I'm designed to assist with educational topics. Could you clarify or ask about a specific subject area?",
                "Learning about new things is exciting! Here's some information that might be relevant to your question..."
            ];
            return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        }
    }

    
    
    // Add initial bot message if chat is empty (except for the welcome message)
    if (chatMessages.children.length <= 1) {
        addMessage("Welcome to our educational platform! I'm here to help you with any questions about your studies. What would you like to learn about today?", 'bot');
    }
});