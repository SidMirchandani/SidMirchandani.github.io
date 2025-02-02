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

const conversationFlows = {
  "Isaac Newton": [
    {
      id: 0,
      prompt: "Newton: Greetings, I am Isaac Newton. Today, I invite you on a journey of discovery. Would you like to join me in:\n(1) Observing a falling apple\n(2) Calculating planetary motion\n(3) Reflecting on nature",
      choices: { "1": "Observe a falling apple", "2": "Calculate planetary motion", "3": "Reflect on nature" },
      next: { "1": 1, "2": 2, "3": 3 }
    },
    {
      id: 1,
      prompt: "Newton: As we watch the apple fall, tell me, what is the acceleration due to gravity on Earth?\n(1) 9.8 m/s²\n(2) 10 m/s²\n(3) 8 m/s²",
      choices: { "1": "9.8 m/s²", "2": "10 m/s²", "3": "8 m/s²" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 2,
      prompt: "Newton: Calculating planetary motion! Do you believe that the same forces govern celestial bodies?\n(1) Absolutely\n(2) Not really\n(3) I'm not sure",
      choices: { "1": "Absolutely", "2": "Not really", "3": "I'm not sure" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 3,
      prompt: "Newton: Reflecting on nature is profound. Do you think nature is governed by hidden laws?\n(1) Yes\n(2) No\n(3) Maybe",
      choices: { "1": "Yes", "2": "No", "3": "Maybe" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 4,
      prompt: "Newton: Your insight pleases me. Now, shall we discuss the invention of calculus?\n(1) Yes\n(2) No\n(3) Perhaps later",
      choices: { "1": "Yes", "2": "No", "3": "Perhaps later" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 5,
      prompt: "Newton: I see. Nonetheless, the laws of motion reveal themselves to the observant. Would you explore these laws further?\n(1) Yes\n(2) No\n(3) I'm curious",
      choices: { "1": "Yes", "2": "No", "3": "I'm curious" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 6,
      prompt: "Newton: Imagine a world where every force has its cause. Do you believe mathematics explains the universe?\n(1) Absolutely\n(2) Partially\n(3) Not at all",
      choices: { "1": "Absolutely", "2": "Partially", "3": "Not at all" },
      next: { "1": 7, "2": 7, "3": 7 }
    },
    {
      id: 7,
      prompt: "Newton: As we delve deeper, do you feel that understanding nature increases our wisdom?\n(1) Yes\n(2) No\n(3) Uncertain",
      choices: { "1": "Yes", "2": "No", "3": "Uncertain" },
      next: { "1": 8, "2": 8, "3": 8 }
    },
    {
      id: 8,
      prompt: "Newton: Almost at the end—do you agree that every discovery is a step toward greater truth?\n(1) Certainly\n(2) Possibly\n(3) I doubt it",
      choices: { "1": "Certainly", "2": "Possibly", "3": "I doubt it" },
      next: { "1": 9, "2": 9, "3": 9 }
    },
    {
      id: 9,
      prompt: "Newton: Thank you for this enlightening adventure. May your curiosity forever light your way. Farewell.",
      choices: {},
      next: {}
    }
  ],
  "Albert Einstein": [
    {
      id: 0,
      prompt: "Einstein: Greetings, I am Albert Einstein. Would you like to discuss:\n(1) Relativity\n(2) Quantum mysteries\n(3) The nature of light",
      choices: { "1": "Relativity", "2": "Quantum mysteries", "3": "The nature of light" },
      next: { "1": 1, "2": 2, "3": 3 }
    },
    {
      id: 1,
      prompt: "Einstein: Relativity is revolutionary. Do you believe that time is:\n(1) Relative\n(2) Absolute\n(3) Uncertain",
      choices: { "1": "Relative", "2": "Absolute", "3": "Uncertain" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 2,
      prompt: "Einstein: Quantum mysteries challenge our understanding. Do you think particles behave like:\n(1) Waves\n(2) Particles\n(3) Both",
      choices: { "1": "Waves", "2": "Particles", "3": "Both" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 3,
      prompt: "Einstein: Light is a curious phenomenon. Would you agree that light can be:\n(1) Both a particle and a wave\n(2) Only a wave\n(3) Only a particle",
      choices: { "1": "Both", "2": "Only a wave", "3": "Only a particle" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 4,
      prompt: "Einstein: Splendid. Shall we now explore whether the universe is deterministic?\n(1) Yes\n(2) No\n(3) Uncertain",
      choices: { "1": "Yes", "2": "No", "3": "Uncertain" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 5,
      prompt: "Einstein: Intriguing. Do you believe scientific inquiry can reveal all cosmic secrets?\n(1) Definitely\n(2) Not entirely\n(3) I doubt it",
      choices: { "1": "Definitely", "2": "Not entirely", "3": "I doubt it" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 6,
      prompt: "Einstein: Imagine a realm where imagination drives discovery. Do you think that:\n(1) Imagination is key\n(2) Logic alone suffices\n(3) A blend of both is needed",
      choices: { "1": "Imagination", "2": "Logic", "3": "Both" },
      next: { "1": 7, "2": 7, "3": 7 }
    },
    {
      id: 7,
      prompt: "Einstein: Our dialogue inspires me. Do you feel that art and science are:\n(1) Inseparable\n(2) Separate\n(3) Occasionally intertwined",
      choices: { "1": "Inseparable", "2": "Separate", "3": "Occasionally intertwined" },
      next: { "1": 8, "2": 8, "3": 8 }
    },
    {
      id: 8,
      prompt: "Einstein: One final question: does knowledge bring joy?\n(1) Yes\n(2) No\n(3) It depends",
      choices: { "1": "Yes", "2": "No", "3": "It depends" },
      next: { "1": 9, "2": 9, "3": 9 }
    },
    {
      id: 9,
      prompt: "Einstein: Thank you for this journey of thought. May your mind forever wander among the stars. Farewell.",
      choices: {},
      next: {}
    }
  ],
  "Marie Curie": [
    {
      id: 0,
      prompt: "Curie: Greetings, I am Marie Curie. Would you prefer to discuss:\n(1) Radioactivity\n(2) Scientific research\n(3) The ethics of science",
      choices: { "1": "Radioactivity", "2": "Scientific research", "3": "The ethics of science" },
      next: { "1": 1, "2": 2, "3": 3 }
    },
    {
      id: 1,
      prompt: "Curie: Radioactivity is a potent force. Which element is most associated with my work?\n(1) Radium\n(2) Polonium\n(3) Uranium",
      choices: { "1": "Radium", "2": "Polonium", "3": "Uranium" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 2,
      prompt: "Curie: Research drives progress. Do you believe science can change the world?\n(1) Yes\n(2) No\n(3) Sometimes",
      choices: { "1": "Yes", "2": "No", "3": "Sometimes" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 3,
      prompt: "Curie: Ethics in science are vital. Should discoveries be shared freely?\n(1) Always\n(2) With caution\n(3) Not always",
      choices: { "1": "Always", "2": "With caution", "3": "Not always" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 4,
      prompt: "Curie: Your perspective is enlightening. Shall we now discuss the challenges of working with radioactive materials?\n(1) Yes\n(2) No\n(3) Perhaps later",
      choices: { "1": "Yes", "2": "No", "3": "Perhaps later" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 5,
      prompt: "Curie: I understand. Nonetheless, understanding risks leads to safety. Do you value scientific safety?\n(1) Highly\n(2) Moderately\n(3) Not much",
      choices: { "1": "Highly", "2": "Moderately", "3": "Not much" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 6,
      prompt: "Curie: Let us ponder: does passion drive discovery?\n(1) Absolutely\n(2) Sometimes\n(3) Rarely",
      choices: { "1": "Absolutely", "2": "Sometimes", "3": "Rarely" },
      next: { "1": 7, "2": 7, "3": 7 }
    },
    {
      id: 7,
      prompt: "Curie: Your insights are most valuable. Is scientific research a noble pursuit?\n(1) Yes\n(2) No\n(3) It depends",
      choices: { "1": "Yes", "2": "No", "3": "It depends" },
      next: { "1": 8, "2": 8, "3": 8 }
    },
    {
      id: 8,
      prompt: "Curie: Almost at the end—should discoveries benefit all humanity?\n(1) Yes\n(2) No\n(3) With conditions",
      choices: { "1": "Yes", "2": "No", "3": "With conditions" },
      next: { "1": 9, "2": 9, "3": 9 }
    },
    {
      id: 9,
      prompt: "Curie: Thank you for this heartfelt conversation. May your curiosity lead to great discoveries. Farewell.",
      choices: {},
      next: {}
    }
  ],
  "Leonardo da Vinci": [
    {
      id: 0,
      prompt: "Da Vinci: Salutations, I am Leonardo da Vinci. Shall we explore:\n(1) Art\n(2) Invention\n(3) The mysteries of anatomy",
      choices: { "1": "Art", "2": "Invention", "3": "Anatomy" },
      next: { "1": 1, "2": 2, "3": 3 }
    },
    {
      id: 1,
      prompt: "Da Vinci: Art inspires the soul. What is the name of my most famous painting?\n(1) The Last Supper\n(2) Mona Lisa\n(3) Vitruvian Man",
      choices: { "1": "The Last Supper", "2": "Mona Lisa", "3": "Vitruvian Man" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 2,
      prompt: "Da Vinci: Invention fuels progress. Would you rather design a flying machine or a diving suit?\n(1) Flying machine\n(2) Diving suit\n(3) Both",
      choices: { "1": "Flying machine", "2": "Diving suit", "3": "Both" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 3,
      prompt: "Da Vinci: Anatomy reveals life's secrets. Do you believe studying human anatomy is essential for art?\n(1) Yes\n(2) No\n(3) Sometimes",
      choices: { "1": "Yes", "2": "No", "3": "Sometimes" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 4,
      prompt: "Da Vinci: Splendid. Shall we now discuss the harmony of art and science?\n(1) Yes\n(2) No\n(3) Perhaps later",
      choices: { "1": "Yes", "2": "No", "3": "Perhaps later" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 5,
      prompt: "Da Vinci: I understand. Yet, the pursuit of knowledge is ceaseless. Do you believe creativity can change the world?\n(1) Absolutely\n(2) Not really\n(3) Maybe",
      choices: { "1": "Absolutely", "2": "Not really", "3": "Maybe" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 6,
      prompt: "Da Vinci: Imagine a future where art and invention merge. Would you join such a renaissance?\n(1) Certainly\n(2) Uncertain\n(3) No",
      choices: { "1": "Certainly", "2": "Uncertain", "3": "No" },
      next: { "1": 7, "2": 7, "3": 7 }
    },
    {
      id: 7,
      prompt: "Da Vinci: Our dialogue is inspiring. Do you think the secrets of nature are revealed through art?\n(1) Yes\n(2) No\n(3) In part",
      choices: { "1": "Yes", "2": "No", "3": "In part" },
      next: { "1": 8, "2": 8, "3": 8 }
    },
    {
      id: 8,
      prompt: "Da Vinci: As our journey nears its end, does the pursuit of beauty give meaning to life?\n(1) Yes\n(2) No\n(3) Sometimes",
      choices: { "1": "Yes", "2": "No", "3": "Sometimes" },
      next: { "1": 9, "2": 9, "3": 9 }
    },
    {
      id: 9,
      prompt: "Da Vinci: Thank you for this wondrous journey. May you forever seek beauty and knowledge. Farewell.",
      choices: {},
      next: {}
    }
  ],
  "William Shakespeare": [
    {
      id: 0,
      prompt: "Shakespeare: Hark! I am William Shakespeare. Wouldst thou prefer to discuss:\n(1) Tragedy\n(2) Comedy\n(3) Sonnet",
      choices: { "1": "Tragedy", "2": "Comedy", "3": "Sonnet" },
      next: { "1": 1, "2": 2, "3": 3 }
    },
    {
      id: 1,
      prompt: "Shakespeare: Tragedy doth stir the soul. Name one of my tragedies:\n(1) Hamlet\n(2) Macbeth\n(3) Othello",
      choices: { "1": "Hamlet", "2": "Macbeth", "3": "Othello" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 2,
      prompt: "Shakespeare: Comedy brings mirth. Wouldst thou favor witty repartee or joyful chaos?\n(1) Wit\n(2) Chaos\n(3) Both",
      choices: { "1": "Wit", "2": "Chaos", "3": "Both" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 3,
      prompt: "Shakespeare: A sonnet, then. Which of mine begins with 'Shall I compare thee to a summer's day?'\n(1) Sonnet 18\n(2) Sonnet 116\n(3) Sonnet 130",
      choices: { "1": "Sonnet 18", "2": "Sonnet 116", "3": "Sonnet 130" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 4,
      prompt: "Shakespeare: Thy choice is admirable. Now, wouldst thou enjoy a discourse on the nature of love?\n(1) Indeed\n(2) Nay\n(3) Perchance",
      choices: { "1": "Indeed", "2": "Nay", "3": "Perchance" },
      next: { "1": 5, "2": 5, "3": 5 }
    },
    {
      id: 5,
      prompt: "Shakespeare: Love, that most perplexing emotion! Doth love conquer all?\n(1) Aye\n(2) Nay\n(3) 'Tis uncertain",
      choices: { "1": "Aye", "2": "Nay", "3": "'Tis uncertain" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 6,
      prompt: "Shakespeare: As our play unfolds, art and tragedy entwine. Dost thou agree that tragedy and comedy are but two sides of the same coin?\n(1) Truly\n(2) Not at all\n(3) Perhaps",
      choices: { "1": "Truly", "2": "Not at all", "3": "Perhaps" },
      next: { "1": 7, "2": 7, "3": 7 }
    },
    {
      id: 7,
      prompt: "Shakespeare: Our dialogue echoes with beauty. Dost thou find solace in the written word?\n(1) Verily\n(2) Not really\n(3) Sometimes",
      choices: { "1": "Verily", "2": "Not really", "3": "Sometimes" },
      next: { "1": 8, "2": 8, "3": 8 }
    },
    {
      id: 8,
      prompt: "Shakespeare: Before we part, answer me this: is life but a stage, where all the world’s a performance?\n(1) Indeed\n(2) Nay\n(3) 'Tis ambiguous",
      choices: { "1": "Indeed", "2": "Nay", "3": "'Tis ambiguous" },
      next: { "1": 9, "2": 9, "3": 9 }
    },
    {
      id: 9,
      prompt: "Shakespeare: I thank thee for this stirring exchange. May thy days be filled with poetic wonder. Farewell.",
      choices: {},
      next: {}
    }
  ],
  "Ludwig van Beethoven": [
    {
      id: 0,
      prompt: "Beethoven: Greetings, I am Ludwig van Beethoven. Shall we converse about:\n(1) Music\n(2) Composition\n(3) Overcoming adversity",
      choices: { "1": "Music", "2": "Composition", "3": "Overcoming adversity" },
      next: { "1": 1, "2": 2, "3": 3 }
    },
    {
      id: 1,
      prompt: "Beethoven: Music is the language of the soul. How many symphonies did I compose?\n(1) 9\n(2) 7\n(3) 10",
      choices: { "1": "9", "2": "7", "3": "10" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 2,
      prompt: "Beethoven: Composition is an art. Which is more important: (1) Melody, (2) Harmony, or (3) Both equally?",
      choices: { "1": "Melody", "2": "Harmony", "3": "Both equally" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 3,
      prompt: "Beethoven: Overcoming adversity defines character. Did my deafness strengthen my resolve?\n(1) Yes\n(2) No\n(3) Perhaps",
      choices: { "1": "Yes", "2": "No", "3": "Perhaps" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 4,
      prompt: "Beethoven: Your perspective inspires me. Shall we discuss the healing power of music?\n(1) Yes\n(2) No\n(3) I'm curious",
      choices: { "1": "Yes", "2": "No", "3": "I'm curious" },
      next: { "1": 5, "2": 5, "3": 5 }
    },
    {
      id: 5,
      prompt: "Beethoven: Imagine a world without music. Would it be (1) Darker, (2) Lighter, or (3) Unchanged?",
      choices: { "1": "Darker", "2": "Lighter", "3": "Unchanged" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 6,
      prompt: "Beethoven: As I compose, I pour my soul into each note. Do you believe personal struggle fuels art?\n(1) Absolutely\n(2) Sometimes\n(3) Not at all",
      choices: { "1": "Absolutely", "2": "Sometimes", "3": "Not at all" },
      next: { "1": 7, "2": 7, "3": 7 }
    },
    {
      id: 7,
      prompt: "Beethoven: Our conversation resounds like a symphony. Do you think music can unite humanity?\n(1) Yes\n(2) No\n(3) In some ways",
      choices: { "1": "Yes", "2": "No", "3": "In some ways" },
      next: { "1": 8, "2": 8, "3": 8 }
    },
    {
      id: 8,
      prompt: "Beethoven: One final thought: does the passion in music mirror the passion in life?\n(1) Indeed\n(2) Not quite\n(3) It's complicated",
      choices: { "1": "Indeed", "2": "Not quite", "3": "It's complicated" },
      next: { "1": 9, "2": 9, "3": 9 }
    },
    {
      id: 9,
      prompt: "Beethoven: Thank you for this inspiring dialogue. May your life be as moving as a timeless symphony. Farewell.",
      choices: {},
      next: {}
    }
  ],
  "Johannes Gutenberg": [
    {
      id: 0,
      prompt: "Gutenberg: Greetings, I am Johannes Gutenberg. Shall we discuss:\n(1) Printing\n(2) The spread of knowledge\n(3) The power of the written word",
      choices: { "1": "Printing", "2": "The spread of knowledge", "3": "The power of the written word" },
      next: { "1": 1, "2": 2, "3": 3 }
    },
    {
      id: 1,
      prompt: "Gutenberg: Printing revolutionized the world. What invention am I famous for?\n(1) The printing press\n(2) Movable type\n(3) Paper production",
      choices: { "1": "The printing press", "2": "Movable type", "3": "Paper production" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 2,
      prompt: "Gutenberg: Knowledge spreads swiftly. Do you think printed books changed society?\n(1) Yes\n(2) No\n(3) Uncertain",
      choices: { "1": "Yes", "2": "No", "3": "Uncertain" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 3,
      prompt: "Gutenberg: The written word holds immense power. Should literature be accessible to all?\n(1) Yes\n(2) With restrictions\n(3) No",
      choices: { "1": "Yes", "2": "With restrictions", "3": "No" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 4,
      prompt: "Gutenberg: Splendid. Would you say that printing ushered in a new age of enlightenment?\n(1) Absolutely\n(2) Somewhat\n(3) Not really",
      choices: { "1": "Absolutely", "2": "Somewhat", "3": "Not really" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 5,
      prompt: "Gutenberg: I see. Yet, preserving knowledge is vital. Do you value knowledge?\n(1) Highly\n(2) Moderately\n(3) Not much",
      choices: { "1": "Highly", "2": "Moderately", "3": "Not much" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 6,
      prompt: "Gutenberg: Imagine a world without books. Would it be:\n(1) A darker place\n(2) About the same\n(3) Brighter",
      choices: { "1": "A darker place", "2": "About the same", "3": "Brighter" },
      next: { "1": 7, "2": 7, "3": 7 }
    },
    {
      id: 7,
      prompt: "Gutenberg: Our dialogue is enriching. Do you believe the written word empowers society?\n(1) Yes\n(2) No\n(3) In part",
      choices: { "1": "Yes", "2": "No", "3": "In part" },
      next: { "1": 8, "2": 8, "3": 8 }
    },
    {
      id: 8,
      prompt: "Gutenberg: As we conclude, should knowledge be shared freely?\n(1) Yes\n(2) No\n(3) With conditions",
      choices: { "1": "Yes", "2": "No", "3": "With conditions" },
      next: { "1": 9, "2": 9, "3": 9 }
    },
    {
      id: 9,
      prompt: "Gutenberg: Thank you for this enlightening discussion. May the written word continue to illuminate the world. Farewell.",
      choices: {},
      next: {}
    }
  ],
  "Ada Lovelace": [
    {
      id: 0,
      prompt: "Lovelace: Greetings, I am Ada Lovelace. Would you like to explore:\n(1) Computing\n(2) Programming\n(3) The future of technology",
      choices: { "1": "Computing", "2": "Programming", "3": "The future of technology" },
      next: { "1": 1, "2": 2, "3": 3 }
    },
    {
      id: 1,
      prompt: "Lovelace: Computing is wondrous. Which machine did I work on?\n(1) The Analytical Engine\n(2) The Difference Engine\n(3) The Turing Machine",
      choices: { "1": "The Analytical Engine", "2": "The Difference Engine", "3": "The Turing Machine" },
      next: { "1": 4, "2": 4, "3": 4 }
    },
    {
      id: 2,
      prompt: "Lovelace: Programming is an art. Do you believe that algorithms can solve every problem?\n(1) Yes\n(2) No\n(3) Only some",
      choices: { "1": "Yes", "2": "No", "3": "Only some" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 3,
      prompt: "Lovelace: The future of technology is bright. Should technology be accessible to all?\n(1) Yes\n(2) No\n(3) With restrictions",
      choices: { "1": "Yes", "2": "No", "3": "With restrictions" },
      next: { "1": 4, "2": 5, "3": 5 }
    },
    {
      id: 4,
      prompt: "Lovelace: Excellent. Do you believe innovation is driven by creativity?\n(1) Absolutely\n(2) Somewhat\n(3) Not really",
      choices: { "1": "Absolutely", "2": "Somewhat", "3": "Not really" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 5,
      prompt: "Lovelace: I see. Yet, without innovation, progress stalls. Do you think collaboration enhances technological advancement?\n(1) Yes\n(2) No\n(3) Occasionally",
      choices: { "1": "Yes", "2": "No", "3": "Occasionally" },
      next: { "1": 6, "2": 6, "3": 6 }
    },
    {
      id: 6,
      prompt: "Lovelace: Imagine a world where technology solves all problems. Is that a desirable future?\n(1) Yes\n(2) No\n(3) I'm unsure",
      choices: { "1": "Yes", "2": "No", "3": "I'm unsure" },
      next: { "1": 7, "2": 7, "3": 7 }
    },
    {
      id: 7,
      prompt: "Lovelace: Our dialogue has been fascinating. Do you believe programming will shape the future of work?\n(1) Yes\n(2) No\n(3) It already has",
      choices: { "1": "Yes", "2": "No", "3": "It already has" },
      next: { "1": 8, "2": 8, "3": 8 }
    },
    {
      id: 8,
      prompt: "Lovelace: One final query: does the pursuit of knowledge lead to a better society?\n(1) Yes\n(2) No\n(3) Sometimes",
      choices: { "1": "Yes", "2": "No", "3": "Sometimes" },
      next: { "1": 9, "2": 9, "3": 9 }
    },
    {
      id: 9,
      prompt: "Lovelace: Thank you for this captivating conversation. May your future be as innovative as your spirit. Farewell.",
      choices: {},
      next: {}
    }
  ]
};

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
