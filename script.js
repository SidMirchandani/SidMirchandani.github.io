// Global point systems for quiz widgets
const points = {
  math: 0,
  bio: 0,
  language: 0
};

// Returns points as "⭐ X"
function getPointsString(num) {
  return `⭐ ${num}`;
}

/* ---------------------- */
/* Bio Trainer Widget: Proper MCQs (10 sample questions) */
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

/* ---------------------- */
/* Language Learning Assistant Widget: Open-Ended Translation Questions */
/* (10 sample questions per language) */
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

/* ---------------------- */
/* Widget Loading Section */
/* ---------------------- */
document.addEventListener("DOMContentLoaded", function() {
  const widgetItems = document.querySelectorAll(".widget-item");
  widgetItems.forEach(item => {
    item.addEventListener("click", function() {
      const widgetType = this.getAttribute("data-widget");
      loadWidget(widgetType);
      if (window.innerWidth < 800) {
        document.getElementById("widget-sidebar").classList.remove("visible");
      }
    });
  });
});

function toggleWidgetSidebar() {
  const sidebar = document.getElementById("widget-sidebar");
  sidebar.classList.toggle("visible");
}

function loadWidget(widgetType) {
  const widgetDisplay = document.getElementById("widget-display");
  let content = "";
  switch(widgetType) {
    case "freeprizes":
      content = freePrizesWidget();
      break;
    case "productivity":
      content = productivityWidget();
      break;
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
    case "quote":
      content = quoteWidget();
      break;
    case "language":
      content = languageWidget();
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

/* ---------------------- */
/* Free Prizes Widget (New) */
/* ---------------------- */
const freePrizes = [
  "Free Coffee Voucher",
  "Discount Coupon for an Online Store",
  "Free Ebook Download",
  "Free Trial Subscription",
  "Gift Card for a Local Restaurant"
];

function freePrizesWidget() {
  const prize = freePrizes[Math.floor(Math.random() * freePrizes.length)];
  return `<h3>Free Prizes</h3>
          <p>Congratulations! You've won:</p>
          <h2 style="text-align: center; margin-top: 20px; color: #e6ac00;">${prize}</h2>
          <button onclick="alert('You have claimed: ${prize}!')">Claim Prize</button>`;
}

/* ---------------------- */
/* Productivity Tips Widget (New) */
/* ---------------------- */
const productivityTips = [
  "Make a prioritized to-do list every morning.",
  "Use the Pomodoro Technique: 25 minutes of work, then a 5-minute break.",
  "Set clear, achievable goals for each day.",
  "Eliminate distractions by silencing non-essential notifications.",
  "Review your progress at the end of each day."
];

function productivityWidget() {
  const tip = productivityTips[Math.floor(Math.random() * productivityTips.length)];
  return `<h3>Productivity Tips</h3>
          <p style="margin-top: 20px;">${tip}</p>
          <button onclick="loadWidget('productivity')">Show Another Tip</button>`;
}

/* ---------------------- */
/* Math Trainer Widget */
/* ---------------------- */
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
  setTimeout(() => { loadWidget("math"); }, 1500);
}

/* ---------------------- */
/* Bio Trainer Widget (MCQ style) */
/* ---------------------- */
function bioWidget() {
  const q = bioMCQs[Math.floor(Math.random() * bioMCQs.length)];
  window.currentBioAnswer = q.answer.toLowerCase();
  let optionsHtml = q.options.map(option =>
    `<label><input type="radio" name="bio-option" value="${option.toLowerCase()}"> ${option}</label><br>`
  ).join("");
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
  setTimeout(() => { loadWidget("bio"); }, 1500);
}

/* ---------------------- */
/* English to Braille Translator Widget */
/* ---------------------- */
const brailleMap = {
  a: "⠁", b: "⠃", c: "⠉", d: "⠙", e: "⠑", f: "⠋", g: "⠛", h: "⠓",
  i: "⠊", j: "⠚", k: "⠅", l: "⠇", m: "⠍", n: "⠝", o: "⠕", p: "⠏",
  q: "⠟", r: "⠗", s: "⠎", t: "⠞", u: "⠥", v: "⠧", w: "⠺", x: "⠭",
  y: "⠽", z: "⠵", " ": " "
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

/* ---------------------- */
/* Mental Health Advisor Widget */
/* ---------------------- */
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

/* ---------------------- */
/* Random Quote Generator Widget */
/* ---------------------- */
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

/* ---------------------- */
/* Language Learning Assistant Widget */
/* ---------------------- */
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
  setTimeout(() => { loadWidget("language"); }, 1500);
}

/* ---------------------- */
/* Chat Functionality */
/* ---------------------- */
function sendMessage() {
  const inputField = document.getElementById("chat-input");
  const message = inputField.value.trim();
  if (!message) return;
  
  const chatWindow = document.getElementById("chat-window");
  const userMsgDiv = document.createElement("div");
  userMsgDiv.className = "user-message";
  userMsgDiv.textContent = message;
  chatWindow.appendChild(userMsgDiv);
  
  inputField.value = "";
  chatWindow.scrollTop = chatWindow.scrollHeight;
  
  const botMsgDiv = document.createElement("div");
  botMsgDiv.className = "bot-message";
  chatWindow.appendChild(botMsgDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  
  const botResponse = "Simulated response to: " + message;
  setTimeout(() => {
    typeText(botMsgDiv, botResponse, 50);
  }, 500);
}

function typeText(element, text, speed = 50, callback) {
  let i = 0;
  element.textContent = "";
  element.style.opacity = 1;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      if (callback) callback();
    }
  }
  type();
}
