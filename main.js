function showChatbot(chatbotId) {
    // Hide all chatbots
    const chatbots = document.querySelectorAll(".chatbot")
    chatbots.forEach((chatbot) => chatbot.classList.remove("active"))
  
    // Show the selected chatbot
    const selectedChatbot = document.getElementById(`chatbot${chatbotId}`)
    selectedChatbot.classList.add("active")
  }
  
  function sendMessage(chatbotId) {
    const inputField = document.getElementById(`input-${chatbotId}`)
    const message = inputField.value.trim()
    if (message) {
      const chatWindow = document.getElementById(`chat-window-${chatbotId}`)
  
      // Add user's message
      const userMessage = document.createElement("div")
      userMessage.classList.add("user-message")
      userMessage.textContent = message
      chatWindow.appendChild(userMessage)
  
      // Add typing indicator
      const typingIndicator = document.createElement("div")
      typingIndicator.classList.add("typing-indicator")
      chatWindow.appendChild(typingIndicator)
  
      // Scroll to the latest message
      chatWindow.scrollTop = chatWindow.scrollHeight
  
      // Simulate chatbot response with typing effect
      setTimeout(() => {
        // Remove typing indicator
        chatWindow.removeChild(typingIndicator)
  
        // Add bot's message
        const botMessage = document.createElement("div")
        botMessage.classList.add("bot-message")
        chatWindow.appendChild(botMessage)
  
        const botResponse = `Chatbot ${chatbotId}: I'm here to help!`
        typeMessage(botMessage, botResponse)
  
        // Scroll to the latest message after typing effect
        chatWindow.scrollTop = chatWindow.scrollHeight
      }, 1000) // Delay before typing starts
    }
  
    // Clear input field
    inputField.value = ""
  }
  
  // Typing effect function
  function typeMessage(element, message, delay = 50) {
    let i = 0
    const interval = setInterval(() => {
      element.textContent += message[i]
      i++
      if (i === message.length) {
        clearInterval(interval)
      }
    }, delay)
  }
  
  // Initialize by showing the first chatbot
  document.addEventListener("DOMContentLoaded", () => {
    showChatbot(1)
  })
  
  
  // Function to show the popup
  function showPopup() {
    const popup = document.getElementById("popup");
    popup.classList.add("active");
  }
  
  // Function to close the popup
  function closePopup() {
    const popup = document.getElementById("popup");
    popup.classList.remove("active");
  }
  
  // Automatically show the popup after 5 seconds
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(showPopup, 5000); // 5 seconds delay
  });
  