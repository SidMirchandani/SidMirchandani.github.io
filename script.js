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
      content = environmentWidget ? environmentWidget() : "<p>Coming soon!</p>";
      break;
    case "volunteer":
      content = volunteerWidget ? volunteerWidget() : "<p>Coming soon!</p>";
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
 * Choose-Your-Own-Adventure Minigame Conversation Engine
 ***************************************/

// Global variables for the minigame conversation
let conversationStepIndex = null; // null indicates waiting for character selection
let selectedCharacter = "";
let currentFlow = null;

// Conversation flows for all 8 historical figures (10 events each, correct answer pattern: 2 → 3 → 1 → 1 → 2 → 3 → 3 → 2 → 1 → 2)
const conversationFlows = {
  "Isaac Newton": [
    { 
      event: "1665: You see an apple fall from a tree. What do you do?", 
      options: { "1": "Ignore it and continue reading.", "2": "Ponder why it fell straight down.", "3": "Eat it because you're hungry." }, 
      correct: "2" 
    },
    { 
      event: "Observing the moon’s orbit, you wonder what keeps it in motion. What is your insight?", 
      options: { "1": "It's pushed by solar winds.", "2": "It is in constant free-fall while moving sideways.", "3": "Magic holds it in place." }, 
      correct: "3" 
    },
    { 
      event: "To mathematically describe motion, what do you develop?", 
      options: { "1": "Calculus", "2": "Algebra", "3": "Geometry" }, 
      correct: "1" 
    },
    { 
      event: "Studying optics, you experiment with light. What do you discover?", 
      options: { "1": "White light is composed of various colors.", "2": "Light is purely a wave.", "3": "Light travels in spirals." }, 
      correct: "1" 
    },
    { 
      event: "You write 'Principia Mathematica.' What phenomena does it explain?", 
      options: { "1": "Chemical reactions.", "2": "Gravity and motion.", "3": "The behavior of gases." }, 
      correct: "2" 
    },
    { 
      event: "Leibniz publishes work on calculus. How do you react?", 
      options: { "1": "Praise his efforts.", "2": "Ignore his work.", "3": "Accuse him of plagiarism." }, 
      correct: "3" 
    },
    { 
      event: "Appointed as Warden of the Royal Mint, what is your priority?", 
      options: { "1": "Increase coin production.", "2": "Improve coinage security.", "3": "Implement measures against counterfeiting." }, 
      correct: "3" 
    },
    { 
      event: "Enhancing observational instruments, which design do you refine?", 
      options: { "1": "The Galilean telescope.", "2": "A reflecting telescope.", "3": "An electron microscope." }, 
      correct: "2" 
    },
    { 
      event: "While studying planetary motion, whose work inspires you the most?", 
      options: { "1": "Kepler", "2": "Aristotle", "3": "Descartes" }, 
      correct: "1" 
    },
    { 
      event: "In your later years, how do you secure your legacy?", 
      options: { "1": "Retire quietly.", "2": "Defend your theories against critics.", "3": "Write philosophical treatises." }, 
      correct: "2" 
    }
  ],
  "Albert Einstein": [
    { 
      event: "Working at a patent office, you conceive a revolutionary idea. What is it?", 
      options: { "1": "Black holes", "2": "Special Relativity", "3": "DNA structure" }, 
      correct: "2" 
    },
    { 
      event: "You propose that light has particle properties. What do you call these particles?", 
      options: { "1": "Quarks", "2": "Electrons", "3": "Photons" }, 
      correct: "3" 
    },
    { 
      event: "You derive an equation linking energy and mass. Which equation is it?", 
      options: { "1": "E=mc²", "2": "F=ma", "3": "PV=nRT" }, 
      correct: "1" 
    },
    { 
      event: "Upon receiving a Nobel Prize, what discovery is it awarded for?", 
      options: { "1": "The Photoelectric Effect", "2": "General Relativity", "3": "Nuclear fusion" }, 
      correct: "1" 
    },
    { 
      event: "Facing rising political tensions, where do you relocate?", 
      options: { "1": "England", "2": "The United States", "3": "Russia" }, 
      correct: "2" 
    },
    { 
      event: "Amid warnings about nuclear weapons, how do you respond?", 
      options: { "1": "Remain silent.", "2": "Warn the U.S. President.", "3": "Protest publicly." }, 
      correct: "3" 
    },
    { 
      event: "Offered the presidency of Israel, what do you do?", 
      options: { "1": "Accept the role.", "2": "Decline to focus on science.", "3": "Relocate to Switzerland instead." }, 
      correct: "3" 
    },
    { 
      event: "In your later years, you pursue a grand unifying theory. What is its focus?", 
      options: { "1": "Quantum Gravity", "2": "Unified Field Theory", "3": "Time Travel" }, 
      correct: "2" 
    },
    { 
      event: "Advocating for peace, what stance do you take on nuclear weapons?", 
      options: { "1": "Pacifism", "2": "Pre-emptive war", "3": "Call for complete disarmament" }, 
      correct: "1" 
    },
    { 
      event: "At the end of your life, what is your final wish?", 
      options: { "1": "To be buried in space.", "2": "To be cremated anonymously.", "3": "To be cloned for further research." }, 
      correct: "2" 
    }
  ],
  "Marie Curie": [
    { 
      event: "Upon discovering a new element, what do you name it?", 
      options: { "1": "Curium", "2": "Polonium", "3": "Radium" }, 
      correct: "2" 
    },
    { 
      event: "You coin a term for the phenomenon in your research. What is it?", 
      options: { "1": "Electromagnetism", "2": "Quantum Mechanics", "3": "Radioactivity" }, 
      correct: "3" 
    },
    { 
      event: "You win a Nobel Prize. In which field is it awarded?", 
      options: { "1": "Physics", "2": "Medicine", "3": "Astronomy" }, 
      correct: "1" 
    },
    { 
      event: "Developing new medical applications, what breakthrough do you achieve?", 
      options: { "1": "Cancer treatment", "2": "Early disease detection", "3": "Enhancing metabolism" }, 
      correct: "1" 
    },
    { 
      event: "Your research leads to technological advances. Which one emerges?", 
      options: { "1": "Advanced microscopes", "2": "X-ray machines", "3": "MRI scanners" }, 
      correct: "2" 
    },
    { 
      event: "During World War I, how do you contribute to medical care?", 
      options: { "1": "Join the battlefield as a nurse", "2": "Develop portable X-ray units", "3": "Emigrate to the United States" }, 
      correct: "3" 
    },
    { 
      event: "When offered a prestigious but non-scientific award, what do you do?", 
      options: { "1": "Embrace it for the honor", "2": "Politely decline it", "3": "Retreat into privacy" }, 
      correct: "3" 
    },
    { 
      event: "Your pioneering work paves the way for future advances. What does it inspire?", 
      options: { "1": "The development of nuclear weapons", "2": "Nuclear medicine", "3": "Modern biotechnology" }, 
      correct: "2" 
    },
    { 
      event: "Your daughter follows in your footsteps. What milestone does she achieve?", 
      options: { "1": "Winning a Nobel Prize", "2": "Becoming a renowned poet", "3": "Pursuing a political career" }, 
      correct: "1" 
    },
    { 
      event: "What is your final legacy?", 
      options: { "1": "Discovering antibiotics", "2": "Pioneering research in radioactivity", "3": "The invention of solar panels" }, 
      correct: "2" 
    }
  ],
  "Leonardo da Vinci": [
    { 
      event: "Commissioned for a portrait, what style do you choose?", 
      options: { "1": "A rigid, traditional style", "2": "A lifelike, innovative realism", "3": "An abstract, surreal approach" }, 
      correct: "2" 
    },
    { 
      event: "Observing nature, how do you capture its essence?", 
      options: { "1": "Rely solely on classical formulas", "2": "Imitate older masters", "3": "Sketch directly from observation" }, 
      correct: "3" 
    },
    { 
      event: "Designing a flying machine, what inspires your design?", 
      options: { "1": "Study of bird flight", "2": "Ancient myths", "3": "Pure invention without basis" }, 
      correct: "1" 
    },
    { 
      event: "To improve your art, how do you study human anatomy?", 
      options: { "1": "Dissect cadavers discreetly", "2": "Rely solely on texts", "3": "Use animal dissections" }, 
      correct: "1" 
    },
    { 
      event: "Working on The Last Supper, what innovative technique do you employ?", 
      options: { "1": "Traditional fresco techniques", "2": "New perspective methods", "3": "Impasto and texture experiments" }, 
      correct: "2" 
    },
    { 
      event: "A patron requests an engineering design. What do you propose?", 
      options: { "1": "A basic pulley system", "2": "A simple waterwheel", "3": "A complex system of gears and hydraulics" }, 
      correct: "3" 
    },
    { 
      event: "Facing setbacks with your inventions, how do you respond?", 
      options: { "1": "Abandon your ideas", "2": "Seek help immediately", "3": "Persist and refine your sketches" }, 
      correct: "3" 
    },
    { 
      event: "Invited to the royal court, what project do you pitch?", 
      options: { "1": "Minor decorative art", "2": "An ambitious, multi-disciplinary project", "3": "A short-lived experiment" }, 
      correct: "2" 
    },
    { 
      event: "In your later years, how do you document your ideas?", 
      options: { "1": "Keep detailed notebooks", "2": "Rely on memory", "3": "Verbal storytelling only" }, 
      correct: "1" 
    },
    { 
      event: "Your legacy is celebrated. What is your final wish?", 
      options: { "1": "To be forgotten", "2": "To inspire future generations", "3": "To remain a mysterious figure" }, 
      correct: "2" 
    }
  ],
  "William Shakespeare": [
    { 
      event: "Commissioned by the royal court, what genre do you choose for your play?", 
      options: { "1": "A historical epic", "2": "A witty comedy rich with wordplay", "3": "A mythological tragedy" }, 
      correct: "2" 
    },
    { 
      event: "During rehearsals, actors propose changes. How do you respond?", 
      options: { "1": "Ignore their suggestions", "2": "Dictate your own version", "3": "Embrace creative collaboration" }, 
      correct: "3" 
    },
    { 
      event: "Facing criticism of your writing, how do you refine your work?", 
      options: { "1": "Revise your language and structure", "2": "Overhaul your style completely", "3": "Stop writing altogether" }, 
      correct: "1" 
    },
    { 
      event: "When The Globe Theatre burns down, what is your response?", 
      options: { "1": "Organize a rebuild with your company", "2": "Abandon theatre entirely", "3": "Write a play about the fire" }, 
      correct: "1" 
    },
    { 
      event: "Receiving praise from influential patrons, how do you show gratitude?", 
      options: { "1": "Demand higher fees", "2": "Dedicate a play to them", "3": "Hold lavish celebrations" }, 
      correct: "2" 
    },
    { 
      event: "A rival challenges your methods. What do you do?", 
      options: { "1": "Ignore the challenge", "2": "Criticize them publicly", "3": "Craft a play subtly critiquing their style" }, 
      correct: "3" 
    },
    { 
      event: "Invited to perform at the royal court, what do you do?", 
      options: { "1": "Decline the invitation", "2": "Send a proxy", "3": "Attend and present your work personally" }, 
      correct: "3" 
    },
    { 
      event: "New experimental styles emerge in theatre. How do you react?", 
      options: { "1": "Stick strictly to tradition", "2": "Blend innovative ideas with classic forms", "3": "Completely reinvent your approach" }, 
      correct: "2" 
    },
    { 
      event: "In later years, how do you want your plays remembered?", 
      options: { "1": "As masterpieces of language and drama", "2": "As outdated relics", "3": "As mere entertainment" }, 
      correct: "1" 
    },
    { 
      event: "Your legacy endures. What is your final wish?", 
      options: { "1": "To be forgotten quickly", "2": "To inspire future generations of playwrights", "3": "To retire in obscurity" }, 
      correct: "2" 
    }
  ],
  "Ludwig van Beethoven": [
    { 
      event: "In your early years, what fuels your passion for music?", 
      options: { "1": "Wealth", "2": "A deep, intrinsic passion", "3": "Peer pressure" }, 
      correct: "2" 
    },
    { 
      event: "Facing progressive hearing loss, what is your determined response?", 
      options: { "1": "Stop composing altogether", "2": "Switch solely to conducting", "3": "Persevere and innovate in composition" }, 
      correct: "3" 
    },
    { 
      event: "Composing a groundbreaking symphony, what drives your creativity?", 
      options: { "1": "Expressing profound human emotion", "2": "Imitating past composers", "3": "Pursuing popular trends" }, 
      correct: "1" 
    },
    { 
      event: "During personal hardships, what keeps you composing?", 
      options: { "1": "An unyielding inner drive", "2": "Financial necessity", "3": "A quest for fame" }, 
      correct: "1" 
    },
    { 
      event: "Experimenting with musical forms, what do you create?", 
      options: { "1": "A simple melody", "2": "A complex, multi-movement symphony", "3": "A brief operatic piece" }, 
      correct: "2" 
    },
    { 
      event: "Critics challenge your innovative style. How do you respond?", 
      options: { "1": "Conform to expectations", "2": "Withdraw from public life", "3": "Stand firm and evolve your music" }, 
      correct: "3" 
    },
    { 
      event: "Invited to premiere your latest work, how do you prepare?", 
      options: { "1": "Delegate all responsibilities", "2": "Let someone else conduct", "3": "Oversee every detail personally despite your deafness" }, 
      correct: "3" 
    },
    { 
      event: "Reflecting on your legacy, what matters most to you?", 
      options: { "1": "Personal wealth and fame", "2": "The emotional impact of your music", "3": "A fleeting popular hit" }, 
      correct: "2" 
    },
    { 
      event: "In later years, how do you express your inner emotions?", 
      options: { "1": "Compose deeply personal piano sonatas", "2": "Give impassioned public speeches", "3": "Compose cheerful, lighthearted tunes" }, 
      correct: "1" 
    },
    { 
      event: "At the end of your life, what is your hope for your music?", 
      options: { "1": "To be forgotten", "2": "To inspire future generations", "3": "To be seen as mere entertainment" }, 
      correct: "2" 
    }
  ],
  "Johannes Gutenberg": [
    { 
      event: "Inspired to revolutionize printing, what is your initial idea?", 
      options: { "1": "Hand-copy texts manually", "2": "Use movable type", "3": "Engrave images by hand" }, 
      correct: "2" 
    },
    { 
      event: "Determined to spread knowledge, what is your next step?", 
      options: { "1": "Print only religious texts", "2": "Start a small press", "3": "Develop a full-scale printing press" }, 
      correct: "3" 
    },
    { 
      event: "Facing skepticism from investors, how do you proceed?", 
      options: { "1": "Persist and demonstrate your invention", "2": "Abandon your idea", "3": "Stick to traditional methods" }, 
      correct: "1" 
    },
    { 
      event: "To improve efficiency, what material do you choose for your typefaces?", 
      options: { "1": "Metal alloy", "2": "Wood", "3": "Clay" }, 
      correct: "1" 
    },
    { 
      event: "Needing funding, what is your strategy?", 
      options: { "1": "Sell your invention outright", "2": "Seek patronage from wealthy citizens", "3": "Crowdsource funds from the masses" }, 
      correct: "2" 
    },
    { 
      event: "Your press begins producing books. What do you print first?", 
      options: { "1": "Modern novels", "2": "Scientific journals", "3": "The Gutenberg Bible" }, 
      correct: "3" 
    },
    { 
      event: "Encountering technical challenges, how do you respond?", 
      options: { "1": "Wait for a natural solution", "2": "Abandon the project", "3": "Innovate and refine your design" }, 
      correct: "3" 
    },
    { 
      event: "To further disseminate knowledge, what do you establish?", 
      options: { "1": "A secret printing society", "2": "A network of printers across Europe", "3": "A government-run press" }, 
      correct: "2" 
    },
    { 
      event: "Your invention revolutionizes communication. How do you feel?", 
      options: { "1": "Proud and hopeful", "2": "Indifferent", "3": "Overwhelmed with doubt" }, 
      correct: "1" 
    },
    { 
      event: "What is your final wish for your invention?", 
      options: { "1": "To be forgotten", "2": "For your press to inspire global literacy", "3": "To monopolize the book trade" }, 
      correct: "2" 
    }
  ],
  "Ada Lovelace": [
    { 
      event: "Encountering Charles Babbage's Analytical Engine, what excites you most?", 
      options: { "1": "Its mechanical sounds", "2": "Its computational potential", "3": "Its aesthetic design" }, 
      correct: "2" 
    },
    { 
      event: "You begin writing notes on the engine. What is your focus?", 
      options: { "1": "Basic arithmetic operations", "2": "The machine’s mechanics", "3": "Developing algorithms for complex tasks" }, 
      correct: "3" 
    },
    { 
      event: "Your work results in a groundbreaking achievement. What is it?", 
      options: { "1": "The first computer program", "2": "A novel type of engine", "3": "A new mathematical theorem" }, 
      correct: "1" 
    },
    { 
      event: "Imagining a future for machines, what do you envision?", 
      options: { "1": "Devices capable of creative tasks", "2": "Simple calculators", "3": "Mere industrial tools" }, 
      correct: "1" 
    },
    { 
      event: "Debating the significance of your notes, what do you proclaim?", 
      options: { "1": "They are overhyped", "2": "They herald a new era in computing", "3": "They are irrelevant" }, 
      correct: "2" 
    },
    { 
      event: "Invited to present your ideas publicly, how do you proceed?", 
      options: { "1": "Decline to speak", "2": "Give a brief technical talk", "3": "Deliver a visionary lecture on machine intelligence" }, 
      correct: "3" 
    },
    { 
      event: "Facing skepticism from peers, how do you handle criticism?", 
      options: { "1": "Withdraw your work", "2": "Deny the criticism", "3": "Refine and expand your theories" }, 
      correct: "3" 
    },
    { 
      event: "As the engine’s potential becomes clear, what is your hope?", 
      options: { "1": "That it remains a mere curiosity", "2": "That it revolutionizes computation", "3": "That it is used only for simple tasks" }, 
      correct: "2" 
    },
    { 
      event: "In your later years, how do you document your visionary ideas?", 
      options: { "1": "In detailed, forward-thinking notebooks", "2": "Through secret correspondences", "3": "By delivering public lectures" }, 
      correct: "1" 
    },
    { 
      event: "What is your final wish for your legacy?", 
      options: { "1": "To be forgotten", "2": "To be remembered as the first computer programmer", "3": "To have your work remain hidden" }, 
      correct: "2" 
    }
  ]
};

// Helper function to display the current conversation step (event and options)
function displayCurrentStep() {
  const currentStep = currentFlow[conversationStepIndex];
  // Display the event prefixed by the character's name.
  addBotMessage(`${selectedCharacter}: ${currentStep.event}`);
  
  // Create a new div for the options, joining each option with <br> tags.
  const chatWindow = document.getElementById("chat-window");
  if (chatWindow) {
    const optionsElem = document.createElement("div");
    optionsElem.className = "bot-message";
    const optionsText = Object.entries(currentStep.options)
      .map(([key, value]) => `${key}. ${value}`)
      .join("<br>");
    optionsElem.innerHTML = optionsText;  // Use innerHTML so <br> tags are rendered.
    chatWindow.appendChild(optionsElem);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}


// Start the minigame conversation when the page loads
window.onload = function () {
  startMinigameConversation();
  const inputField = document.getElementById("chat-input");
  if (inputField) {
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
  }
}

// Append a bot message to the chat window
function addBotMessage(text) {
  const chatWindow = document.getElementById("chat-window");
  if (chatWindow) {
    const messageElem = document.createElement("div");
    messageElem.className = "bot-message";
    messageElem.textContent = text;
    chatWindow.appendChild(messageElem);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}

// Append a user message to the chat window
function addUserMessage(text) {
  const chatWindow = document.getElementById("chat-window");
  if (chatWindow) {
    const messageElem = document.createElement("div");
    messageElem.className = "user-message";
    messageElem.textContent = text;
    chatWindow.appendChild(messageElem);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}

// Clear the chat window
function clearChatWindow() {
  const chatWindow = document.getElementById("chat-window");
  if (chatWindow) {
    chatWindow.innerHTML = "";
  }
}

// Start (or reset) the conversation
function startMinigameConversation() {
  clearChatWindow();
  conversationStepIndex = null;
  selectedCharacter = "";
  currentFlow = null;
  addBotMessage("Welcome to Timeless Minigames!\nWho do you want to play with? (Type one of: Isaac Newton, Albert Einstein, Marie Curie, Leonardo da Vinci, William Shakespeare, Ludwig van Beethoven, Johannes Gutenberg, Ada Lovelace)");
}

// Process user input for the conversation
function processConversationInput(input) {
  if (input.toLowerCase() === "reset") {
    startMinigameConversation();
    return;
  }
  // If no character is selected yet, process character selection.
  if (conversationStepIndex === null) {
    const validNames = ["isaac newton", "albert einstein", "marie curie", "leonardo da vinci", "william shakespeare", "ludwig van beethoven", "johannes gutenberg", "ada lovelace"];
    if (validNames.includes(input.toLowerCase())) {
      // Properly capitalize the name.
      selectedCharacter = input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
      currentFlow = conversationFlows[selectedCharacter];
      conversationStepIndex = 0;
      displayCurrentStep();
    } else {
      addBotMessage("I didn't recognize that name. Please type one of: Isaac Newton, Albert Einstein, Marie Curie, Leonardo da Vinci, William Shakespeare, Ludwig van Beethoven, Johannes Gutenberg, Ada Lovelace.");
    }
  } else {
    // Process the current conversation step.
    let currentStep = currentFlow[conversationStepIndex];
    if (!currentStep || currentStep.correct === "") {
      addBotMessage("The conversation has ended. Type 'reset' to restart.");
      return;
    }
    if (input === currentStep.correct) {
      conversationStepIndex++;
      if (conversationStepIndex < currentFlow.length) {
        displayCurrentStep();
      } else {
        addBotMessage("The adventure has concluded. Congratulations!");
      }
    } else {
      addBotMessage("Incorrect. Type 'reset' to reset chat.");
    }
  }
}
