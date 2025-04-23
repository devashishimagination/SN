// chatbot-loader.js

// Select the container div
const chatbotContainer = document.querySelector(".chatbot-container");

if (chatbotContainer) {
  // Load chatbot HTML into the container
  fetch("chatbot1.html")
    .then(res => res.text())
    .then(html => {
      chatbotContainer.innerHTML = html;

      // Load chatbot CSS
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "chatbot1.css";
      document.head.appendChild(link);

      // Load chatbot logic script
      const script = document.createElement("script");
      script.src = "chatbot1.js";
      script.defer = true;
      document.body.appendChild(script);
    })
    .catch(err => {
      console.error("Failed to load chatbot:", err);
    });
}
