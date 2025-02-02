/***************************
 * Global Variables & Utils
 ***************************/
const points = {
  math: 0,
  bio: 0,
  language: 0
};

function getPointsString(num) {
  return `⭐ ${num}`;
}

/***************************
 * Bio Trainer Widget Data
 ***************************/
const bioMCQs = [
  {
    question: "What is commonly known as the powerhouse of the cell?",
    options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
    answer: "mitochondria"
  },
  {
    question: "Which molecule carries genetic information?",
    options: ["RNA", "DNA", "Protein", "Carbohydrate"],
    answer: "dna"
  },
  {
    question: "Which process converts sunlight into chemical energy in plants?",
    options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
    answer: "photosynthesis"
  },
  {
    question: "What pigment gives plants their green color?",
    options: ["Carotene", "Chlorophyll", "Melanin", "Hemoglobin"],
    answer: "chlorophyll"
  },
  {
    question: "Which organ produces insulin in the human body?",
    options: ["Liver", "Pancreas", "Kidney", "Spleen"],
    answer: "pancreas"
  },
  {
    question: "What is the largest organ in the human body?",
    options: ["Heart", "Liver", "Skin", "Lung"],
    answer: "skin"
  },
  {
    question: "Which type of blood cell helps fight infections?",
    options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
    answer: "white blood cells"
  },
  {
    question: "What process do cells use to divide in somatic tissues?",
    options: ["Meiosis", "Mitosis", "Binary Fission", "Budding"],
    answer: "mitosis"
  },
  {
    question: "What is the basic unit of life?",
    options: ["Atom", "Molecule", "Cell", "Organ"],
    answer: "cell"
  },
  {
    question: "Which structure in plant cells is responsible for photosynthesis?",
    options: ["Mitochondria", "Chloroplast", "Nucleus", "Golgi apparatus"],
    answer: "chloroplast"
  }
];

/***************************************
 * Language Learning Assistant Data
 ***************************************/
const languageQuestions = {
  spanish: [
    { question: "Translate 'Hello, how are you?' into Spanish.", answer: "hola, ¿cómo estás?" },
    { question: "Translate 'Good morning' into Spanish.", answer: "buenos días" },
    { question: "Translate 'Thank you very much' into Spanish.", answer: "muchas gracias" },
    { question: "Translate 'I would like a cup of coffee' into Spanish.", answer: "me gustaría una taza de café" },
    { question: "Translate 'Where is the bathroom?' into Spanish.", answer: "¿dónde está el baño?" },
    { question: "Translate 'I love you' into Spanish.", answer: "te quiero" },
    { question: "Translate 'What time is it?' into Spanish.", answer: "¿qué hora es?" },
    { question: "Translate 'See you later' into Spanish.", answer: "hasta luego" },
    { question: "Translate 'How much does it cost?' into Spanish.", answer: "¿cuánto cuesta?" },
    { question: "Translate 'Can you help me?' into Spanish.", answer: "¿puedes ayudarme?" }
  ],
  french: [
    { question: "Translate 'Hello, how are you?' into French.", answer: "bonjour, comment ça va?" },
    { question: "Translate 'Good morning' into French.", answer: "bonjour" },
    { question: "Translate 'Thank you very much' into French.", answer: "merci beaucoup" },
    { question: "Translate 'I would like a cup of tea' into French.", answer: "je voudrais une tasse de thé" },
    { question: "Translate 'Where is the nearest restaurant?' into French.", answer: "où est le restaurant le plus proche?" },
    { question: "Translate 'I love you' into French.", answer: "je t'aime" },
    { question: "Translate 'What time is it?' into French.", answer: "quelle heure est-il?" },
    { question: "Translate 'See you later' into French.", answer: "à plus tard" },
    { question: "Translate 'How much does it cost?' into French.", answer: "combien ça coûte?" },
    { question: "Translate 'Can you help me?' into French.", answer: "peux-tu m'aider?" }
  ],
  german: [
    { question: "Translate 'Hello, how are you?' into German.", answer: "hallo, wie geht es dir?" },
    { question: "Translate 'Good morning' into German.", answer: "guten Morgen" },
    { question: "Translate 'Thank you very much' into German.", answer: "vielen Dank" },
    { question: "Translate 'I would like a cup of coffee' into German.", answer: "ich möchte eine Tasse Kaffee" },
    { question: "Translate 'Where is the nearest supermarket?' into German.", answer: "wo ist der nächste Supermarkt?" },
    { question: "Translate 'I love you' into German.", answer: "ich liebe dich" },
    { question: "Translate 'What time is it?' into German.", answer: "wie spät ist es?" },
    { question: "Translate 'See you later' into German.", answer: "bis später" },
    { question: "Translate 'How much does it cost?' into German.", answer: "wie viel kostet das?" },
    { question: "Translate 'Can you help me?' into German.", answer: "kannst du mir helfen?" }
  ]
};

/***************************************
 * DOMContentLoaded - Widget Listeners
 ***************************************/
document.addEventListener("DOMContentLoaded", function () {
  const widgetItems = document.querySelectorAll(".widget-item");
  widgetItems.forEach((item) => {
    item.addEventListener("click", function () {
      const widgetType = this.getAttribute("data-widget");
      loadWidget(widgetType);
      if (window.innerWidth < 800) {
        document.getElementById("widget-sidebar").classList.remove("visible");
      }
    });
  });
});

/***************************************
 * Sidebar & Widget Loader Functions
 ***************************************/
function toggleWidgetSidebar() {
  const sidebar = document.getElementById("widget-sidebar");
  sidebar.classList.toggle("visible");
}

function loadWidget(widgetType) {
  const widgetDisplay = document.getElementById("widget-display");
  let content = "";
  switch (widgetType) {
    case "math":
      content = mathWidget();
      break;
    case "bio":
      content = bioWidget();
      break;
    case "braille":
      content = brailleWidget();
      break;
    case "mental":
      content = mentalWidget();
      break;
    case "forum":
      content = forumWidget();
      break;
    case "jobs":
      content = jobsWidget();
      break;
    case "quote":
      content = quoteWidget();
      break;
    case "language":
      content = languageWidget();
      break;
    case "environment":
      content = environmentWidget();
      break;
    case "volunteer":
      content = volunteerWidget();
      break;
    case "library":
      content = libraryWidget();
      break;
    case "freeprizes":
      content = freePrizesWidget();
      break;
    case "learnonline":
      content = learnOnlineWidget();
      break;
    default:
      content = `<p>Widget not found.</p>`;
  }
  widgetDisplay.innerHTML = content;
  widgetDisplay.style.opacity = 0;
  setTimeout(() => {
    widgetDisplay.style.transition = "opacity 0.5s ease-in-out";
    widgetDisplay.style.opacity = 1;
  }, 50);
}

/***************************************
 * Free Prizes Widget
 ***************************************/
function openGutenbergPrize() {
  const randomNum = Math.floor(Math.random() * 7500) + 1;
  const url = `https://www.gutenberg.org/cache/epub/${randomNum}/pg${randomNum}-images.html`;
  window.open(url, "_blank");
}

function freePrizesWidget() {
  const prizes = [
    {
      title: "72% off NordVPN",
      description: "+ 30 days free!",
      link: "https://nordvpn.com/"
    },
    {
      title: "50% off NordPass",
      description: "+ 30 days free!",
      link: "https://nordpass.com/"
    },
    {
      title: ".xyz Domains",
      description: "Use TAI25 for the first year free!",
      link: "https://gen.xyz/"
    },
    {
      title: "Project Gutenberg Book",
      description: "Discover a random, free book!",
      dynamic: true
    }
  ];

  let prizesHtml = `<div class="prizes-container"><div class="prizes-grid">`;
  prizes.forEach((prize) => {
    const icon = prize.dynamic ? "📚" : "🎁";
    const buttonOnClick = prize.dynamic
      ? `openGutenbergPrize()`
      : `window.open('${prize.link}', '_blank')`;
    prizesHtml += `
      <div class="prize-item">
        <div class="prize-icon">${icon}</div>
        <div class="prize-details">
          <h4>${prize.title}</h4>
          <p>${prize.description}</p>
          <button onclick="${buttonOnClick}">Claim Prize</button>
        </div>
      </div>
    `;
  });
  prizesHtml += `</div></div>`;

  return `<h3>Free Prizes</h3>
          <p>Check out these exclusive free prizes:</p>
          ${prizesHtml}`;
}

/***************************************
 * Math Trainer Widget
 ***************************************/
function mathWidget() {
  if (!window.currentMathSubject) window.currentMathSubject = "arithmetic";
  let subjectSelector = `<select id="math-subject" onchange="changeMathSubject()">
    <option value="arithmetic" ${window.currentMathSubject === "arithmetic" ? "selected" : ""}>Arithmetic</option>
    <option value="algebra" ${window.currentMathSubject === "algebra" ? "selected" : ""}>Algebra</option>
  </select>`;
  let question, answer;
  if (window.currentMathSubject === "arithmetic") {
    let maxNumber = points.math < 5 ? 10 : points.math < 10 ? 50 : 100;
    const num1 = Math.floor(Math.random() * maxNumber) + 1;
    const num2 = Math.floor(Math.random() * maxNumber) + 1;
    const operator = Math.random() < 0.5 ? "+" : "*";
    answer = operator === "+" ? num1 + num2 : num1 * num2;
    question = `Solve: ${num1} ${operator} ${num2} = ?`;
  } else if (window.currentMathSubject === "algebra") {
    let a = Math.floor(Math.random() * 9) + 1;
    let x = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10);
    let c = a * x + b;
    answer = x;
    question = `Solve for x: ${a}x + ${b} = ${c}`;
  }
  window.currentMathAnswer = answer;
  return `<h3>Math Trainer</h3>
          ${subjectSelector}
          <p>${question}</p>
          <input type="number" class="widget-input" id="math-input" placeholder="Your answer">
          <button onclick="checkMathAnswer()">Submit Answer</button>
          <p id="math-feedback"></p>
          <p>Your Points: ${getPointsString(points.math)}</p>`;
}

function changeMathSubject() {
  window.currentMathSubject = document.getElementById("math-subject").value;
  loadWidget("math");
}

function checkMathAnswer() {
  const input = document.getElementById("math-input").value;
  const feedback = document.getElementById("math-feedback");
  if (parseFloat(input) === window.currentMathAnswer) {
    feedback.textContent = "Correct!";
    points.math++;
  } else {
    feedback.textContent = "Incorrect. Try again!";
  }
  setTimeout(() => {
    loadWidget("math");
  }, 1500);
}

/***************************************
 * Bio Trainer Widget (MCQ)
 ***************************************/
function bioWidget() {
  const q = bioMCQs[Math.floor(Math.random() * bioMCQs.length)];
  window.currentBioAnswer = q.answer.toLowerCase();
  let optionsHtml = q.options
    .map(
      (option) =>
        `<label><input type="radio" name="bio-option" value="${option.toLowerCase()}"> ${option}</label><br>`
    )
    .join("");
  return `<h3>Bio Trainer</h3>
          <p>${q.question}</p>
          ${optionsHtml}
          <button onclick="checkBioMCQAnswer()">Submit Answer</button>
          <p id="bio-feedback"></p>
          <p>Your Points: ${getPointsString(points.bio || 0)}</p>`;
}

function checkBioMCQAnswer() {
  const radios = document.getElementsByName("bio-option");
  let selected;
  for (let radio of radios) {
    if (radio.checked) {
      selected = radio.value;
      break;
    }
  }
  const feedback = document.getElementById("bio-feedback");
  if (selected === window.currentBioAnswer) {
    feedback.textContent = "Correct!";
    points.bio = (points.bio || 0) + 1;
  } else {
    feedback.textContent = "Incorrect. Try again!";
  }
  setTimeout(() => {
    loadWidget("bio");
  }, 1500);
}

/***************************************
 * English to Braille Translator Widget
 ***************************************/
const brailleMap = {
  a: "⠁", b: "⠃", c: "⠉", d: "⠙", e: "⠑", f: "⠋", g: "⠛",
  h: "⠓", i: "⠊", j: "⠚", k: "⠅", l: "⠇", m: "⠍", n: "⠝",
  o: "⠕", p: "⠏", q: "⠟", r: "⠗", s: "⠎", t: "⠞", u: "⠥",
  v: "⠧", w: "⠺", x: "⠭", y: "⠽", z: "⠵", " ": " "
};

function brailleWidget() {
  return `<h3>English to Braille Translator</h3>
          <p>Enter text below to translate into Braille.</p>
          <textarea id="braille-input" class="widget-input" placeholder="Enter text here..."></textarea>
          <button onclick="translateBraille()">Translate</button>
          <p id="braille-output"></p>`;
}

function translateBraille() {
  const text = document.getElementById("braille-input").value.toLowerCase();
  let translated = "";
  for (let char of text) {
    translated += brailleMap[char] || char;
  }
  document.getElementById("braille-output").textContent = translated;
}

/***************************************
 * Library Widget
 ***************************************/
function libraryWidget() {
  const libraryPDFs = [
    {
      title: "Romeo & Juliet",
      url: "https://www.gutenberg.org/cache/epub/1513/pg1513-images.html"
    },
    {
      title: "Shakespeare's Works",
      url: "https://www.gutenberg.org/cache/epub/100/pg100-images.html"
    },
    {
      title: "Hamlet",
      url: "https://www.gutenberg.org/cache/epub/27761/pg27761-images.html"
    },
    {
      title: "Macbeth",
      url: "https://www.gutenberg.org/cache/epub/1533/pg1533-images.html"
    },
    {
      title: "A Midsommer Nights Dream",
      url: "https://www.gutenberg.org/cache/epub/1514/pg1514-images.html"
    },
    {
      title: "The Tempest",
      url: "https://www.gutenberg.org/cache/epub/23042/pg23042-images.html"
    },
    {
      title: "The Taming of the Shrew",
      url: "https://www.gutenberg.org/cache/epub/1508/pg1508-images.html"
    },
    {
      title: "Othello, the Moor of Venice",
      url: "https://www.gutenberg.org/cache/epub/1531/pg1531-images.html"
    },
    {
      title: "The Merchant of Venice",
      url: "https://www.gutenberg.org/cache/epub/1515/pg1515-images.html"
    }
  ];

  let linksHtml = `<div class="library-container"><div class="pdf-grid">`;
  libraryPDFs.forEach((pdf) => {
    linksHtml += `
      <div class="pdf-item">
        <div class="pdf-icon">📄</div>
        <div class="pdf-title">
          <a href="${pdf.url}" target="_blank">${pdf.title}</a>
        </div>
      </div>`;
  });
  linksHtml += `</div></div>`;

  return `<h3>Library</h3>
          <p>Select a PDF to read:</p>
          ${linksHtml}`;
}

/***************************************
 * Mental Health Advisor Widget
 ***************************************/
const mentalHealthTips = [
  "Take deep breaths and relax.",
  "Try to get at least 7-8 hours of sleep.",
  "Remember to take breaks during work.",
  "Talk to someone you trust about your feelings."
];

function mentalWidget() {
  const tip = mentalHealthTips[Math.floor(Math.random() * mentalHealthTips.length)];
  return `<h3>Mental Health Advisor</h3>
          <p>Tip: ${tip}</p>
          <button onclick="loadWidget('mental')">Get Another Tip</button>`;
}

/***************************************
 * Community Forum Widget
 ***************************************/
let forumPosts = [];

function forumWidget() {
  let postsHtml = forumPosts.map((post) => `<p>• ${post}</p>`).join("");
  return `<h3>Community Forum</h3>
          <p>Share your thoughts:</p>
          <textarea id="forum-input" class="widget-input" placeholder="Type your post..."></textarea>
          <button onclick="submitForumPost()">Post</button>
          <div id="forum-posts">${postsHtml || "<p>No posts yet.</p>"}</div>`;
}

function submitForumPost() {
  const text = document.getElementById("forum-input").value.trim();
  if (text) {
    forumPosts.push(text);
    loadWidget("forum");
  }
}

/***************************************
 * Job Board Widget
 ***************************************/
const jobListings = [
  "Software Engineer at TechCorp",
  "Graphic Designer at Creative Studio",
  "Data Analyst at DataWorks"
];

function jobsWidget() {
  let jobsHtml = jobListings
    .map(
      (job) =>
        `<li>${job} <button onclick="alert('Applied for: ${job}')">Apply</button></li>`
    )
    .join("");
  return `<h3>Job Board</h3>
          <ul>${jobsHtml}</ul>`;
}

/***************************************
 * Random Quote Generator Widget
 ***************************************/
const quotes = [
  "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",
  "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
  "Do not wait to strike till the iron is hot; but make it hot by striking. – William Butler Yeats"
];

function quoteWidget() {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  return `<h3>Random Quote Generator</h3>
          <p>${quote}</p>
          <button onclick="loadWidget('quote')">New Quote</button>`;
}

/***************************************
 * Language Learning Assistant Widget
 ***************************************/
function languageWidget() {
  if (!window.currentLanguage) window.currentLanguage = "spanish";
  let langOptions = "";
  for (let lang in languageQuestions) {
    langOptions += `<option value="${lang}" ${window.currentLanguage === lang ? "selected" : ""}>${lang.charAt(0).toUpperCase() + lang.slice(1)}</option>`;
  }
  let languageSelector = `<select id="language-select" onchange="changeLanguage()">${langOptions}</select>`;
  const questions = languageQuestions[window.currentLanguage];
  const q = questions[Math.floor(Math.random() * questions.length)];
  window.currentLanguageAnswer = q.answer.toLowerCase();
  return `<h3>Language Learning Assistant</h3>
          ${languageSelector}
          <p>${q.question}</p>
          <input type="text" class="widget-input" id="language-input" placeholder="Your answer">
          <button onclick="checkLanguageAnswer()">Submit Answer</button>
          <p id="language-feedback"></p>
          <p>Your Points: ${getPointsString(points.language)}</p>`;
}

function changeLanguage() {
  window.currentLanguage = document.getElementById("language-select").value;
  loadWidget("language");
}

function checkLanguageAnswer() {
  const input = document.getElementById("language-input").value.toLowerCase().trim();
  const feedback = document.getElementById("language-feedback");
  if (input === window.currentLanguageAnswer) {
    feedback.textContent = "Correct!";
    points.language++;
  } else {
    feedback.textContent = "Incorrect. Try again!";
  }
  setTimeout(() => {
    loadWidget("language");
  }, 1500);
}

/***************************************
 * Environmental Tracker Widget
 ***************************************/
function environmentWidget() {
  const aqi = Math.floor(Math.random() * 100) + 1;
  const temp = Math.floor(Math.random() * 15) + 15;
  const humidity = Math.floor(Math.random() * 50) + 30;
  return `<h3>Environmental Tracker</h3>
          <p>Air Quality Index: ${aqi}</p>
          <p>Temperature: ${temp}°C</p>
          <p>Humidity: ${humidity}%</p>
          <button onclick="loadWidget('environment')">Refresh Data</button>`;
}

/***************************************
 * Volunteer Opportunities Widget
 ***************************************/
const volunteerOpportunities = [
  "Community Clean-Up on Saturday",
  "Food Bank Volunteer Needed",
  "Tutoring for Underprivileged Children"
];

function volunteerWidget() {
  let oppsHtml = volunteerOpportunities
    .map(
      (opp) =>
        `<p>• ${opp} <button onclick="alert('Sign up for: ${opp}')">Sign Up</button></p>`
    )
    .join("");
  return `<h3>Volunteer Opportunities</h3>
          ${oppsHtml}`;
}

/***************************************
 * [NEW] Choose-Your-Own-Adventure Conversation Engine
 * Extended to at least 7-8 back-and-forths.
 ***************************************/

// Global state for the adventure
let conversationStage = 0; // Stage within the current adventure
let selectedCharacter = "";
let conversationData = {}; // For storing temporary choices

// When the page loads, start the adventure conversation
window.onload = function () {
  // Start our captivating "choose your own adventure" story immediately
  startMinigameConversation();
  // Attach event listener to the chat input field
  const inputField = document.getElementById("chat-input");
  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userInput = inputField.value.trim();
      if (userInput !== "") {
        addUserMessage(userInput);
        inputField.value = "";
        processConversationInput(userInput);
      }
    }
  });
};

// Append a bot (system) message to the chat window
function addBotMessage(text) {
  const chatWindow = document.getElementById("chat-window");
  const messageElem = document.createElement("div");
  messageElem.className = "bot-message";
  messageElem.textContent = text;
  chatWindow.appendChild(messageElem);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Append a user message to the chat window
function addUserMessage(text) {
  const chatWindow = document.getElementById("chat-window");
  const messageElem = document.createElement("div");
  messageElem.className = "user-message";
  messageElem.textContent = text;
  chatWindow.appendChild(messageElem);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Clear the chat window
function clearChatWindow() {
  document.getElementById("chat-window").innerHTML = "";
}

// Start the adventure by asking which historical figure to join
function startMinigameConversation() {
  clearChatWindow();
  conversationStage = 1;
  selectedCharacter = "";
  conversationData = {};
  addBotMessage(
    "Welcome to Timeless Adventures!\nChoose a historical figure to join on your quest:\n(Isaac Newton, Albert Einstein, Marie Curie, Leonardo da Vinci, William Shakespeare, Ludwig van Beethoven, Johannes Gutenberg, Ada Lovelace)"
  );
}

// Process input based on the current stage
function processConversationInput(input) {
  // Stage 1: Choose your character
  if (conversationStage === 1) {
    const valid = ["isaac newton", "albert einstein", "marie curie", "leonardo da vinci", "william shakespeare", "ludwig van beethoven", "johannes gutenberg", "ada lovelace"];
    const choice = input.toLowerCase();
    if (valid.includes(choice)) {
      selectedCharacter = choice.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      addBotMessage(`You have chosen ${selectedCharacter}. Let your adventure begin!`);
      conversationStage = 2;
      processConversationInput(""); // Trigger next prompt
    } else {
      addBotMessage("I didn't recognize that name. Please type one of the valid names.");
    }
  } else {
    // Dispatch to the appropriate adventure function based on selected character
    switch (selectedCharacter) {
      case "Isaac Newton":
        processNewtonAdventure(input);
        break;
      case "Albert Einstein":
        processEinsteinAdventure(input);
        break;
      case "Marie Curie":
        processCurieAdventure(input);
        break;
      case "Leonardo Da Vinci":
        processDaVinciAdventure(input);
        break;
      case "William Shakespeare":
        processShakespeareAdventure(input);
        break;
      case "Ludwig Van Beethoven":
        processBeethovenAdventure(input);
        break;
      case "Johannes Gutenberg":
        processGutenbergAdventure(input);
        break;
      case "Ada Lovelace":
        processLovelaceAdventure(input);
        break;
      default:
        addBotMessage("Unexpected error.");
    }
  }
}

/* --- Extended Adventure Flows for Each Character --- */

// Isaac Newton Adventure (8 stages)
function processNewtonAdventure(input) {
  if (conversationStage === 2) {
    addBotMessage("Isaac Newton: It is the year 1666. As you stroll beneath an apple tree, an apple suddenly falls. Do you (A) pick it up or (B) observe from afar? (Type A or B)");
    conversationStage = 3;
  } else if (conversationStage === 3) {
    if (input.toUpperCase() === "A") {
      conversationData.choice = "pick";
      addBotMessage("Isaac Newton: You pick up the apple. Do you (A) examine its texture and weight, or (B) simply admire its fall? (Type A or B)");
      conversationStage = 4;
    } else if (input.toUpperCase() === "B") {
      conversationData.choice = "observe";
      addBotMessage("Isaac Newton: You watch the apple fall. Do you (A) quickly jot down your observations, or (B) let the moment sink into your mind? (Type A or B)");
      conversationStage = 4;
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
  } else if (conversationStage === 4) {
    if (conversationData.choice === "pick") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Isaac Newton: Your close examination reveals its physical properties. Fascinating!");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Isaac Newton: Even without detailed study, your curiosity grows.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    } else if (conversationData.choice === "observe") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Isaac Newton: Your notes capture the essence of nature’s rhythm.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Isaac Newton: The experience etches itself into your memory.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    }
    addBotMessage("Isaac Newton: Do you now choose to (A) conduct an experiment to measure the apple's acceleration, or (B) reflect on the mystery of gravity? (Type A or B)");
    conversationStage = 5;
  } else if (conversationStage === 5) {
    if (input.toUpperCase() === "A") {
      addBotMessage("Isaac Newton: Your experiment confirms an acceleration of approximately 9.8 m/s². A groundbreaking discovery!");
    } else if (input.toUpperCase() === "B") {
      addBotMessage("Isaac Newton: Your reflections spark ideas of an unseen force pulling all things toward Earth.");
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
    addBotMessage("Isaac Newton: Do you (A) share your findings with your peers, or (B) continue your studies in solitude? (Type A or B)");
    conversationStage = 6;
  } else if (conversationStage === 6) {
    if (input.toUpperCase() === "A") {
      addBotMessage("Isaac Newton: Sharing your discovery ignites curiosity and debate among scholars.");
    } else if (input.toUpperCase() === "B") {
      addBotMessage("Isaac Newton: Solitude allows you to delve deeper into nature's secrets.");
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
    addBotMessage("Isaac Newton: Do you foresee challenges in having your ideas accepted? (Type yes or no)");
    conversationStage = 7;
  } else if (conversationStage === 7) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Isaac Newton: Skepticism is common when pioneering new ideas.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Isaac Newton: Optimism is admirable, though resistance often follows innovation.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Isaac Newton: Finally, do you plan to document your theories for future generations? (Type yes or no)");
    conversationStage = 8;
  } else if (conversationStage === 8) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Isaac Newton: Your manuscript will inspire countless minds.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Isaac Newton: Sometimes, the pursuit of knowledge is its own reward.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Isaac Newton: Thank you for joining me on this journey of discovery. Farewell!");
    conversationStage = 9;
  }
}

// Albert Einstein Adventure (8 stages)
function processEinsteinAdventure(input) {
  if (conversationStage === 2) {
    addBotMessage("Albert Einstein: Imagine early 20th century Germany. Do you wish to explore (A) the nature of space-time, or (B) the mysteries of quantum phenomena? (Type A or B)");
    conversationStage = 3;
  } else if (conversationStage === 3) {
    if (input.toUpperCase() === "A") {
      conversationData.topic = "relativity";
      addBotMessage("Albert Einstein: Do you believe time is (A) absolute or (B) relative? (Type A or B)");
      conversationStage = 4;
    } else if (input.toUpperCase() === "B") {
      conversationData.topic = "quantum";
      addBotMessage("Albert Einstein: Do you lean towards (A) determinism or (B) probability in the quantum realm? (Type A or B)");
      conversationStage = 4;
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
  } else if (conversationStage === 4) {
    if (conversationData.topic === "relativity") {
      if (input.toUpperCase() === "B") {
        addBotMessage("Albert Einstein: Correct! Time is indeed relative.");
      } else if (input.toUpperCase() === "A") {
        addBotMessage("Albert Einstein: In reality, time bends with space.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    } else if (conversationData.topic === "quantum") {
      if (input.toUpperCase() === "B") {
        addBotMessage("Albert Einstein: Although I had reservations, quantum theory supports probabilistic outcomes.");
      } else if (input.toUpperCase() === "A") {
        addBotMessage("Albert Einstein: Determinism is appealing, but nature reveals uncertainty.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    }
    addBotMessage("Albert Einstein: Do you find the universe's mysteries exhilarating? (Type yes or no)");
    conversationStage = 5;
  } else if (conversationStage === 5) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Albert Einstein: Splendid! Curiosity fuels discovery.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Albert Einstein: Even in doubt, the cosmos speaks to us.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Albert Einstein: Do you believe understanding these mysteries can transform our world? (Type yes or no)");
    conversationStage = 6;
  } else if (conversationStage === 6) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Albert Einstein: Knowledge indeed paves the way for progress.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Albert Einstein: A skeptical mind is the beginning of inquiry.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Albert Einstein: Would you continue researching despite challenges? (Type yes or no)");
    conversationStage = 7;
  } else if (conversationStage === 7) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Albert Einstein: Persistence is the heart of scientific endeavor.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Albert Einstein: Without persistence, breakthroughs remain elusive.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Albert Einstein: Lastly, are you ready to share your insights with the world? (Type yes or no)");
    conversationStage = 8;
  } else if (conversationStage === 8) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Albert Einstein: Excellent! Your contributions can light the path to the future.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Albert Einstein: Sometimes the journey itself is its own reward.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Albert Einstein: Thank you for this enlightening conversation. Farewell!");
    conversationStage = 9;
  }
}

// Marie Curie Adventure (8 stages)
function processCurieAdventure(input) {
  if (conversationStage === 2) {
    addBotMessage("Marie Curie: You enter my laboratory. A mysterious glow emanates from a vial. Do you (A) approach boldly or (B) record your observations first? (Type A or B)");
    conversationStage = 3;
  } else if (conversationStage === 3) {
    if (input.toUpperCase() === "A") {
      conversationData.topic = "investigate";
      addBotMessage("Marie Curie: Do you (A) analyze its radioactive properties or (B) determine its chemical makeup? (Type A or B)");
      conversationStage = 4;
    } else if (input.toUpperCase() === "B") {
      conversationData.topic = "record";
      addBotMessage("Marie Curie: Do you (A) perform experiments on the samples or (B) consult with a colleague? (Type A or B)");
      conversationStage = 4;
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
  } else if (conversationStage === 4) {
    if (conversationData.topic === "investigate") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Marie Curie: Your analysis reveals striking radioactive properties.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Marie Curie: The chemical composition is unexpectedly complex.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    } else if (conversationData.topic === "record") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Marie Curie: Your experiments lead to intriguing observations.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Marie Curie: Collaboration brings fresh perspectives.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    }
    addBotMessage("Marie Curie: Do you believe scientific discovery can change the world? (Type yes or no)");
    conversationStage = 5;
  } else if (conversationStage === 5) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Marie Curie: I share your belief—knowledge is transformative.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Marie Curie: Even if you doubt, the pursuit of science is rewarding.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Marie Curie: Would you publicize your findings or keep them confidential for further study? (Type A for public, B for confidential)");
    conversationStage = 6;
  } else if (conversationStage === 6) {
    if (input.toUpperCase() === "A") {
      addBotMessage("Marie Curie: Sharing your work can inspire and mobilize change.");
    } else if (input.toUpperCase() === "B") {
      addBotMessage("Marie Curie: Confidentiality may allow deeper investigation.");
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
    addBotMessage("Marie Curie: Do you anticipate challenges from skeptics? (Type yes or no)");
    conversationStage = 7;
  } else if (conversationStage === 7) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Marie Curie: Skepticism is common, yet perseverance prevails.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Marie Curie: Optimism is a powerful motivator in science.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Marie Curie: Thank you for embarking on this scientific adventure with me. Farewell!");
    conversationStage = 8;
  }
}

// Leonardo da Vinci Adventure (8 stages)
function processDaVinciAdventure(input) {
  if (conversationStage === 2) {
    addBotMessage("Leonardo da Vinci: Salutations! In my workshop, do you wish to (A) design a fantastical flying machine or (B) explore the secrets of art? (Type A or B)");
    conversationStage = 3;
  } else if (conversationStage === 3) {
    if (input.toUpperCase() === "A") {
      conversationData.topic = "flying";
      addBotMessage("Leonardo da Vinci: Do you (A) meticulously sketch its design or (B) attempt to construct a small prototype? (Type A or B)");
      conversationStage = 4;
    } else if (input.toUpperCase() === "B") {
      conversationData.topic = "art";
      addBotMessage("Leonardo da Vinci: Do you (A) try to replicate a classic masterpiece or (B) create an entirely new work of art? (Type A or B)");
      conversationStage = 4;
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
  } else if (conversationStage === 4) {
    if (conversationData.topic === "flying") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Leonardo da Vinci: Your detailed sketches capture the essence of flight.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Leonardo da Vinci: Building a prototype is a bold step toward innovation.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    } else if (conversationData.topic === "art") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Leonardo da Vinci: Replicating a masterpiece is a challenging tribute.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Leonardo da Vinci: Creating something new may redefine beauty.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    }
    addBotMessage("Leonardo da Vinci: Do you believe creativity unlocks human potential? (Type yes or no)");
    conversationStage = 5;
  } else if (conversationStage === 5) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Leonardo da Vinci: I agree—imagination is the seed of invention.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Leonardo da Vinci: A modest view, yet every mind harbors a spark.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Leonardo da Vinci: Would you refine your design or art further? (Type A to refine, B to move on)");
    conversationStage = 6;
  } else if (conversationStage === 6) {
    if (input.toUpperCase() === "A") {
      addBotMessage("Leonardo da Vinci: Refinement is the pathway to perfection.");
    } else if (input.toUpperCase() === "B") {
      addBotMessage("Leonardo da Vinci: Sometimes a bold leap is needed.");
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
    addBotMessage("Leonardo da Vinci: Are you ready to present your work to others? (Type yes or no)");
    conversationStage = 7;
  } else if (conversationStage === 7) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Leonardo da Vinci: Your courage to share inspires many.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Leonardo da Vinci: The masterpiece may yet remain a personal treasure.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Leonardo da Vinci: Thank you for journeying through art and invention with me. Farewell!");
    conversationStage = 8;
  }
}

// William Shakespeare Adventure (7 stages)
function processShakespeareAdventure(input) {
  if (conversationStage === 2) {
    addBotMessage("William Shakespeare: Hark! Do you wish to (A) compose a sonnet or (B) witness the unfolding of a tragic play? (Type A or B)");
    conversationStage = 3;
  } else if (conversationStage === 3) {
    if (input.toUpperCase() === "A") {
      conversationData.topic = "sonnet";
      addBotMessage("William Shakespeare: Do you choose to write about (A) nature's fleeting beauty or (B) the depths of passionate love? (Type A or B)");
      conversationStage = 4;
    } else if (input.toUpperCase() === "B") {
      conversationData.topic = "tragedy";
      addBotMessage("William Shakespeare: Do you (A) empathize with the doomed hero or (B) focus on fate's cruel twists? (Type A or B)");
      conversationStage = 4;
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
  } else if (conversationStage === 4) {
    if (conversationData.topic === "sonnet") {
      if (input.toUpperCase() === "A") {
        addBotMessage("William Shakespeare: Nature's beauty, though transient, inspires the soul.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("William Shakespeare: Love's passion burns eternal.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    } else if (conversationData.topic === "tragedy") {
      if (input.toUpperCase() === "A") {
        addBotMessage("William Shakespeare: The hero's plight moves the heart deeply.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("William Shakespeare: Fate's cruelty reveals life's harsh truths.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    }
    addBotMessage("William Shakespeare: Do you believe art mirrors life? (Type yes or no)");
    conversationStage = 5;
  } else if (conversationStage === 5) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("William Shakespeare: Indeed, art and life are intertwined.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("William Shakespeare: A provocative stance, though many disagree.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("William Shakespeare: Would you pen your own verses inspired by life? (Type yes or no)");
    conversationStage = 6;
  } else if (conversationStage === 6) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("William Shakespeare: Your poetic spirit shall shine through your words.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("William Shakespeare: Not every soul is moved to verse.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("William Shakespeare: Thank you for this poetic journey. Farewell!");
    conversationStage = 7;
  }
}

// Ludwig van Beethoven Adventure (7 stages)
function processBeethovenAdventure(input) {
  if (conversationStage === 2) {
    addBotMessage("Ludwig van Beethoven: Greetings! Do you wish to (A) compose a grand symphony or (B) craft a soulful piano piece? (Type A or B)");
    conversationStage = 3;
  } else if (conversationStage === 3) {
    if (input.toUpperCase() === "A") {
      conversationData.topic = "symphony";
      addBotMessage("Ludwig van Beethoven: Do you focus on a (A) powerful orchestral movement or (B) incorporate a gentle, reflective passage? (Type A or B)");
      conversationStage = 4;
    } else if (input.toUpperCase() === "B") {
      conversationData.topic = "piano";
      addBotMessage("Ludwig van Beethoven: Do you (A) pour out deep passion or (B) evoke a bittersweet melancholy? (Type A or B)");
      conversationStage = 4;
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
  } else if (conversationStage === 4) {
    if (conversationData.topic === "symphony") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Ludwig van Beethoven: Your symphonic vision resounds with power.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Ludwig van Beethoven: The gentle passage adds an emotive contrast.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    } else if (conversationData.topic === "piano") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Ludwig van Beethoven: Passion flows like a mighty river.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Ludwig van Beethoven: Melancholy speaks in subtle, profound tones.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    }
    addBotMessage("Ludwig van Beethoven: Do you believe music can change the world? (Type yes or no)");
    conversationStage = 5;
  } else if (conversationStage === 5) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Ludwig van Beethoven: I firmly believe so; music touches the soul.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Ludwig van Beethoven: Even so, music remains a universal language.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Ludwig van Beethoven: Would you share your composition with the world? (Type yes or no)");
    conversationStage = 6;
  } else if (conversationStage === 6) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Ludwig van Beethoven: Your music could inspire generations.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Ludwig van Beethoven: Sometimes, the most personal pieces remain unshared.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Ludwig van Beethoven: Thank you for sharing this musical journey with me. Farewell!");
    conversationStage = 7;
  }
}

// Johannes Gutenberg Adventure (7 stages)
function processGutenbergAdventure(input) {
  if (conversationStage === 2) {
    addBotMessage("Johannes Gutenberg: Greetings! In my workshop, do you choose to (A) experiment with a revolutionary printing technique or (B) distribute printed works to the masses? (Type A or B)");
    conversationStage = 3;
  } else if (conversationStage === 3) {
    if (input.toUpperCase() === "A") {
      conversationData.topic = "experiment";
      addBotMessage("Johannes Gutenberg: Do you (A) refine your printing method meticulously or (B) document your breakthrough for posterity? (Type A or B)");
      conversationStage = 4;
    } else if (input.toUpperCase() === "B") {
      conversationData.topic = "distribute";
      addBotMessage("Johannes Gutenberg: Do you (A) organize public readings or (B) deliver copies directly to local schools? (Type A or B)");
      conversationStage = 4;
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
  } else if (conversationStage === 4) {
    if (conversationData.topic === "experiment") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Johannes Gutenberg: Your refined technique produces clear, accessible texts.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Johannes Gutenberg: Documenting your process ensures your innovation endures.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    } else if (conversationData.topic === "distribute") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Johannes Gutenberg: Public readings can inspire a community of learners.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Johannes Gutenberg: Direct delivery brings knowledge straight to eager minds.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    }
    addBotMessage("Johannes Gutenberg: Do you believe that spreading knowledge can reshape society? (Type yes or no)");
    conversationStage = 5;
  } else if (conversationStage === 5) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Johannes Gutenberg: I share your vision—knowledge empowers the people.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Johannes Gutenberg: Even one book can open a new world.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Johannes Gutenberg: Would you overcome skepticism to promote your innovation? (Type yes or no)");
    conversationStage = 6;
  } else if (conversationStage === 6) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Johannes Gutenberg: Boldness is essential for revolutionary ideas.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Johannes Gutenberg: Caution is wise, yet progress demands risk.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Johannes Gutenberg: Thank you for this enlightening adventure. Farewell!");
    conversationStage = 7;
  }
}

// Ada Lovelace Adventure (7 stages)
function processLovelaceAdventure(input) {
  if (conversationStage === 2) {
    addBotMessage("Ada Lovelace: Greetings! Do you wish to (A) write a program for a mechanical computer or (B) imagine how machines might create art? (Type A or B)");
    conversationStage = 3;
  } else if (conversationStage === 3) {
    if (input.toUpperCase() === "A") {
      conversationData.topic = "programming";
      addBotMessage("Ada Lovelace: Do you (A) develop an algorithm for complex calculations or (B) design a program that simulates a simple game? (Type A or B)");
      conversationStage = 4;
    } else if (input.toUpperCase() === "B") {
      conversationData.topic = "art";
      addBotMessage("Ada Lovelace: Do you (A) compose a digital sonnet or (B) create an abstract algorithm that generates visuals? (Type A or B)");
      conversationStage = 4;
    } else {
      addBotMessage("Please type A or B.");
      return;
    }
  } else if (conversationStage === 4) {
    if (conversationData.topic === "programming") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Ada Lovelace: Your algorithm handles intricate computations with elegance.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Ada Lovelace: A playful simulation can reveal deeper computational truths.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    } else if (conversationData.topic === "art") {
      if (input.toUpperCase() === "A") {
        addBotMessage("Ada Lovelace: A digital sonnet—where logic meets lyricism.");
      } else if (input.toUpperCase() === "B") {
        addBotMessage("Ada Lovelace: An abstract algorithm unveils patterns of unexpected beauty.");
      } else {
        addBotMessage("Please type A or B.");
        return;
      }
    }
    addBotMessage("Ada Lovelace: Do you believe technology will redefine creativity? (Type yes or no)");
    conversationStage = 5;
  } else if (conversationStage === 5) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Ada Lovelace: I am optimistic—the fusion of art and science is limitless.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Ada Lovelace: A cautious view, yet innovation often surprises us.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Ada Lovelace: Would you share your innovative ideas with the world? (Type yes or no)");
    conversationStage = 6;
  } else if (conversationStage === 6) {
    if (input.toLowerCase().includes("yes")) {
      addBotMessage("Ada Lovelace: Your vision can bridge the gap between art and technology.");
    } else if (input.toLowerCase().includes("no")) {
      addBotMessage("Ada Lovelace: Sometimes, the most revolutionary ideas remain private.");
    } else {
      addBotMessage("Please answer with yes or no.");
      return;
    }
    addBotMessage("Ada Lovelace: Thank you for venturing into the digital frontier with me. Farewell!");
    conversationStage = 7;
  }
}

/***************************************
 * Learn Online Widget
 ***************************************/
function learnOnlineWidget() {
  const courses = [
    {
      title: "ReadJAMS",
      description: "An online library for JAMS.",
      buttonText: "Join ReadJAMS!",
      buttonUrl: "https://readjams.vercel.app",
      imageUrl: "https://i.ibb.co/61pC5Px/Read-JAMS.png"
    },
    {
      title: "MathJAMS",
      description: "An online math trainer for JAMS.",
      buttonText: "Join MathJAMS!",
      buttonUrl: "https://mathjams.vercel.app",
      imageUrl: "https://i.postimg.cc/2jv9GmfM/Read-JAMS-1.png"
    },
    {
      title: "CodeJAMS",
      description: "An online code trainer for JAMS.",
      buttonText: "Join CodeJAMS!",
      buttonUrl: "https://codejams.vercel.app/",
      imageUrl: "https://i.postimg.cc/cCV9cxx1/Code-JAMS.png"
    },
    {
      title: "MathDash",
      description: "An online math trainer for all!",
      buttonText: "Join MathDash!",
      buttonUrl: "https://playmathdash.vercel.app",
      imageUrl: "https://i.postimg.cc/B6H7jhyX/MATH.png"
    }
  ];

  let coursesHtml = `<div class="learnonline-container"><div class="learnonline-grid">`;
  courses.forEach(course => {
    let buttonClass = "learnonline-button";
    if (course.title === "MathDash") {
      buttonClass += " mathdash-button";
    }
    coursesHtml += `
      <div class="learnonline-item">
        <div class="learnonline-image-wrapper">
          <img src="${course.imageUrl}" alt="${course.title}" class="learnonline-image">
        </div>
        <div class="learnonline-details">
          <p>${course.description}</p>
          <button onclick="window.open('${course.buttonUrl}', '_blank')" class="${buttonClass}">${course.buttonText}</button>
        </div>
      </div>
    `;
  });
  coursesHtml += `</div></div>`;
  return `<h3>Learn Online!</h3>
          <p>Explore our online communities and sessions:</p>
          ${coursesHtml}`;
}
