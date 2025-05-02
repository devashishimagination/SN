// // chatbot-loader.js

// // Select the container div
// const chatbotContainer = document.querySelector(".chatbot-container");

// if (chatbotContainer) {
//   // Load chatbot HTML into the container
//   fetch("chatbot1.html")
//     .then(res => res.text())
//     .then(html => {
//       chatbotContainer.innerHTML = html;

//       // Load chatbot CSS
//       const link = document.createElement("link");
//       link.rel = "stylesheet";
//       link.href = "chatbot1.css";
//       document.head.appendChild(link);

//       // Load chatbot logic script
//       const script = document.createElement("script");
//       script.src = "chatbot1.js";
//       script.defer = true;
//       document.body.appendChild(script);
//     })
//     .catch(err => {
//       console.error("Failed to load chatbot:", err);
//     });
// }
const chatbotContainer = document.querySelector(".chatbot-container");

if (chatbotContainer) {
  const iframe = document.createElement("iframe");
  iframe.src = "chatbot1.html";
  iframe.style.position = "fixed";
  iframe.style.bottom = "20px";
  iframe.style.right = "20px";
  iframe.style.width = "400px";
  iframe.style.height = "500px";
  iframe.style.border = "none";
  iframe.style.borderRadius = "12px";
  iframe.style.boxShadow = "0 0 10px rgba(102, 95, 95, 0)";
  iframe.style.zIndex = "9999"; // ensure it stays on top

  chatbotContainer.appendChild(iframe);
}
