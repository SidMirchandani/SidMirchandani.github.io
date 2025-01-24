/************************************
 * Toggle Sidebar
 ************************************/
function toggleSidebar() {
  const sidebar = document.getElementById("left-sidebar");
  const chatRegion = document.getElementById("chat-region");

  // Safeguard checks
  if (!sidebar || !chatRegion) {
    console.error("Sidebar or chat region not found in the DOM.");
    return;
  }

  // Toggle classes
  sidebar.classList.toggle("active");
  chatRegion.classList.toggle("sidebar-hidden");
}

/************************************
 * Show Chatbot
 ************************************/
function showChatbot(botId) {
  // Hide all chatbots
  const chatbots = document.querySelectorAll(".chatbot");
  chatbots.forEach((chatbot) => {
    chatbot.classList.remove("active");
  });

  // Show the selected chatbot
  const selectedChatbot = document.getElementById(botId);
  if (selectedChatbot) {
    selectedChatbot.classList.add("active");
  } else {
    console.error(`Chatbot with id '${botId}' not found.`);
  }
}

/************************************
 * Send a Message with Typing Effect
 ************************************/
function sendMessage(botId) {
  const inputField = document.getElementById(`input-${botId}`);
  const chatWindow = document.getElementById(`chat-window-${botId}`);

  if (!inputField || !chatWindow) {
    console.error(`Input field or chat window not found for bot: ${botId}`);
    return;
  }

  const message = inputField.value.trim();
  if (message) {
    // Add user's message
    const userMessage = document.createElement("div");
    userMessage.classList.add("user-message");
    userMessage.textContent = message;
    chatWindow.appendChild(userMessage);

    // Scroll to bottom
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Simulate chatbot response
    const typingIndicator = document.createElement("div");
    typingIndicator.classList.add("typing-indicator");
    chatWindow.appendChild(typingIndicator);

    setTimeout(() => {
      // Remove typing indicator
      chatWindow.removeChild(typingIndicator);

      // Add bot's message with typing effect
      const botMessage = document.createElement("div");
      botMessage.classList.add("bot-message");
      chatWindow.appendChild(botMessage);

      const botResponse = `${capitalize(botId)}: That’s an interesting thought!`;
      typeMessage(botMessage, botResponse);

      // Scroll again after bot responds
      chatWindow.scrollTop = chatWindow.scrollHeight;

      // Add summary to previous chats
      addToPreviousChats(botId, message);
    }, 1000); // 1-second delay before the bot starts typing

    // Clear user input
    inputField.value = "";
  }
}

/************************************
 * Typing Effect Function
 ************************************/
function typeMessage(element, message, delay = 50) {
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += message[i];
    i++;
    if (i === message.length) {
      clearInterval(interval); // Stop the typing effect once complete
    }
  }, delay);
}

/************************************
 * Add Chat Summary to Sidebar
 ************************************/
function addToPreviousChats(botId, lastUserMessage) {
  const chatList = document.getElementById("chat-list");
  if (!chatList) return;

  // Create chat entry
  const chatEntry = document.createElement("div");
  chatEntry.classList.add("chat-entry");

  // Bot image
  const botImage = document.createElement("img");
  botImage.src = `${botId}.jpg`; // Replace with correct path if needed
  botImage.alt = botId;

  // Chat title
  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = `${capitalize(botId)}: ${lastUserMessage}`;

  chatEntry.appendChild(botImage);
  chatEntry.appendChild(title);
  chatList.appendChild(chatEntry);
}

/************************************
 * Popup Show/Close
 ************************************/
function showPopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.add("active");
  }
}

function closePopup() {
  const popup = document.getElementById("popup");
  if (popup) {
    popup.classList.remove("active");
  }
}

/************************************
 * Helper Functions
 ************************************/
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/************************************
 * Initialize - DOM Loaded
 ************************************/
document.addEventListener("DOMContentLoaded", () => {
  // Automatically show the popup after 5 seconds
  setTimeout(showPopup, 5000);

  // Show Gandhi chatbot by default
  showChatbot("gandhi");
});
