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
      title: "The Complete Works of William Shakespeare",
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
 * [NEW] Choose-Your-Own-Adventure Minigame Conversation Engine
 ***************************************/

// We will create a conversation flow for each historical persona.
// Each flow is an array of steps (with at least 10 back-and-forths).
// Each step is an object with:
//   id: step index (starting at 0)
//   prompt: the narrative text that the persona speaks, including options
//   choices: an object mapping valid user input (like "1", "2", "3") to a choice text
//   next: an object mapping the same keys to the next step id (or undefined to indicate the conversation end)



// Global flag for minigame mode (this version is exclusively minigame mode)
let isMinigameMode = true;
let conversationStage = 0; // We'll use conversationStage as (current step id + 1)
let selectedCharacter = "";
let conversationData = {};

// Start the minigame conversation immediately when the page loads
window.onload = function () {
  startMinigameConversation();
  // Attach event listener on the text input (#chat-input)
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

// Append a bot message to the chat window
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

// Begin the conversation by asking which persona to play with
function startMinigameConversation() {
  clearChatWindow();
  conversationStage = 0;
  selectedCharacter = "";
  conversationData = {};
  addBotMessage(
    "Welcome to Timeless Minigames!\nWho do you want to play with? (Type one of: Isaac Newton, Albert Einstein, Marie Curie, Leonardo da Vinci, William Shakespeare, Ludwig van Beethoven, Johannes Gutenberg, Ada Lovelace)"
  );
}

// Process user input based on current conversation stage
function processConversationInput(input) {
  // Stage 0: Choose a character
  if (conversationStage === 0) {
    let found = ["isaac newton","albert einstein","marie curie","leonardo da vinci","william shakespeare","ludwig van beethoven","johannes gutenberg","ada lovelace"].find(
      char => char === input.toLowerCase()
    );
    if (found) {
      // Capitalize simply:
      selectedCharacter = found.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      addBotMessage(`You have chosen ${selectedCharacter}. Let the adventure begin!`);
      conversationStage = 1; // Set stage to 1 (which means step id 0 is done)
      // Immediately trigger the next step:
      processConversationInput("");
    } else {
      addBotMessage(
        "I didn't recognize that name. Please type one of: Isaac Newton, Albert Einstein, Marie Curie, Leonardo da Vinci, William Shakespeare, Ludwig van Beethoven, Johannes Gutenberg, Ada Lovelace."
      );
    }
  } else {
    // Get the conversation flow for the selected character
    const flow = conversationFlows[selectedCharacter];
    if (!flow) {
      addBotMessage("Error: No conversation flow found for this character.");
      return;
    }
    // Determine the current step by matching conversationStage-1 to step id
    let currentStep = flow.find(step => step.id === conversationStage - 1);
    if (!currentStep) {
      addBotMessage("The adventure has concluded. Farewell!");
      return;
    }
    // If the current step has no choices, conversation ends.
    if (!currentStep.choices || Object.keys(currentStep.choices).length === 0) {
      addBotMessage("The conversation has ended.");
      return;
    }
    // Expect the user to type one of the valid choice keys (like "1", "2", etc.)
    if (currentStep.choices.hasOwnProperty(input)) {
      let nextId = currentStep.next[input];
      let nextStep = flow.find(step => step.id === nextId);
      if (nextStep) {
        conversationStage = nextStep.id + 1;
        addBotMessage(nextStep.prompt);
      } else {
        addBotMessage("The adventure has concluded. Farewell!");
      }
    } else {
      addBotMessage("Please choose a valid option (e.g., type 1, 2, or 3).");
    }
  }
}
