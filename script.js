// Toggle Sidebars
function toggleSidebar() {
  const leftSidebar = document.getElementById("left-sidebar");
  const rightSidebar = document.getElementById("right-sidebar");
  leftSidebar.classList.toggle("active");
  rightSidebar.classList.toggle("active");
}

// Show Chatbot
function showChatbot(botId) {
  const chatbots = document.querySelectorAll(".chatbot");
  chatbots.forEach((chatbot) => chatbot.classList.remove("active"));
  document.getElementById(botId).classList.add("active");
}

// Send Message
function sendMessage(botId) {
  const inputField = document.getElementById(`input-${botId}`);
  const chatWindow = document.getElementById(`chat-window-${botId}`);
  const message = inputField.value.trim();

  if (message) {
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = `${message}`;
    chatWindow.appendChild(userMessage);

    const typingIndicator = document.createElement("div");
    typingIndicator.classList.add("typing-indicator");
    chatWindow.appendChild(typingIndicator);

    setTimeout(() => {
      chatWindow.removeChild(typingIndicator);
      const botMessage = document.createElement("div");
      botMessage.classList.add("bot-message");
      botMessage.textContent = `That’s an interesting thought!`;
      chatWindow.appendChild(botMessage);
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1000);

    inputField.value = "";
  }
}

// Gamified Learning
function startGame(figure) {
  alert(`Starting ${figure}'s game!`);
}

// Collaborative Features
function startGroupChat() {
  alert("Starting a group chat with historical figures!");
}

function joinChallenge() {
  alert("Joining a community challenge!");
}

// Educational Tools
function showTimeline(figure) {
  alert(`Showing ${figure}'s timeline!`);
}

// Advanced AI Features
function detectTone() {
  alert("Detecting your tone...");
}

function personalizeRecommendations() {
  alert("Generating personalized recommendations...");
}

// Helper Function
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  showChatbot("gandhi");
});

// Add to JS
// Sidebar Toggles
function toggleLeftSidebar() {
  const sidebar = document.getElementById("left-sidebar");
  sidebar.classList.toggle("active");
}

function toggleRightSidebar() {
  const sidebar = document.getElementById("right-sidebar");
  sidebar.classList.toggle("active");
}

// Switch sidebar screens
function showSidebarScreen(screenId) {
  document.querySelectorAll('.sidebar-content').forEach(el => {
    el.classList.remove('active');
  });
  document.getElementById(screenId).classList.add('active');
}
