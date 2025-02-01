// Global point systems for quiz widgets
const points = {
  math: 0,
  bio: 0,
  language: 0
};

// Returns points as "⭐ X" (for example, "⭐ 1")
function getPointsString(num) {
  return `⭐ ${num}`;
}

/* ---------------------- */
/* Bio Trainer Widget: Proper MCQs */
/* (10 sample questions are provided; add more as needed) */
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
/* Language Learning Assistant Widget */
/* Open-Ended Translation Questions */
/* (10 sample questions per language are provided; expand as needed) */
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
    case "library": // New case for the library widget
      content = libraryWidget();
      break;
    case "freeprizes": // Add this case for free prizes widget
      content = freePrizesWidget();
      break;
    case "learnonline": // New Learn Online widget case
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

/* ---------------------- */
/* Math Trainer Widget */
/* ---------------------- */

function freePrizesWidget() {
  // An array of free prize objects (update with your own content as needed)
  const prizes = [
    { title: "Free E-Book", description: "Get a free e-book on web development." },
    { title: "Discount Coupon", description: "Receive a 20% discount coupon on our services." },
    { title: "Free Trial Subscription", description: "Enjoy a 30-day free trial of premium features." }
  ];

  // Build a responsive grid of prize cards
  let prizesHtml = `<div class="prizes-container"><div class="prizes-grid">`;
  prizes.forEach(prize => {
    prizesHtml += `
      <div class="prize-item">
        <div class="prize-icon">🎁</div>
        <div class="prize-details">
          <h4>${prize.title}</h4>
          <p>${prize.description}</p>
        </div>
      </div>
    `;
  });
  prizesHtml += `</div></div>`;

  return `<h3>Free Prizes</h3>
          <p>Check out these exclusive free prizes:</p>
          ${prizesHtml}`;
}

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

function libraryWidget() {
  // Create an array with 21 PDF link objects
  const libraryPDFs = [
    { title: "Romeo & Juliet", url: "https://www.gutenberg.org/cache/epub/1513/pg1513-images.html" },
    { title: "The Complete Works of William Shakespeare", url: "https://www.gutenberg.org/cache/epub/100/pg100-images.html" },
    { title: "Hamlet", url: "https://www.gutenberg.org/cache/epub/27761/pg27761-images.html" },
    { title: "Macbeth", url: "https://www.gutenberg.org/cache/epub/1533/pg1533-images.html" },
    { title: "A Midsommer Nights Dream", url: "https://www.gutenberg.org/cache/epub/1514/pg1514-images.html" },
    { title: "The Tempest", url: "https://www.gutenberg.org/cache/epub/23042/pg23042-images.html" },
    { title: "The Taming of the Shrew", url: "https://www.gutenberg.org/cache/epub/1508/pg1508-images.html" },
    { title: "Othello, the Moor of Venice", url: "https://www.gutenberg.org/cache/epub/1531/pg1531-images.html" },
    { title: "The Merchant of Venice", url: "https://www.gutenberg.org/cache/epub/1515/pg1515-images.html" }
  ];

  // Build a responsive grid of PDF "cards"
  let linksHtml = `<div class="library-container"><div class="pdf-grid">`;
  libraryPDFs.forEach(pdf => {
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
/* Community Forum Widget */
/* ---------------------- */
let forumPosts = [];

function forumWidget() {
  let postsHtml = forumPosts.map(post => `<p>• ${post}</p>`).join("");
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

/* ---------------------- */
/* Job Board Widget */
/* ---------------------- */
const jobListings = [
  "Software Engineer at TechCorp",
  "Graphic Designer at Creative Studio",
  "Data Analyst at DataWorks"
];

function jobsWidget() {
  let jobsHtml = jobListings.map(job => `<li>${job} <button onclick="alert('Applied for: ${job}')">Apply</button></li>`).join("");
  return `<h3>Job Board</h3>
          <ul>${jobsHtml}</ul>`;
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
/* (Open-ended translation questions; proper questions provided) */
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
/* Environmental Tracker Widget */
/* ---------------------- */
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

/* ---------------------- */
/* Volunteer Opportunities Widget */
/* ---------------------- */
const volunteerOpportunities = [
  "Community Clean-Up on Saturday",
  "Food Bank Volunteer Needed",
  "Tutoring for Underprivileged Children"
];

function volunteerWidget() {
  let oppsHtml = volunteerOpportunities.map(opp => `<p>• ${opp} <button onclick="alert('Sign up for: ${opp}')">Sign Up</button></p>`).join("");
  return `<h3>Volunteer Opportunities</h3>
          ${oppsHtml}`;
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

function learnOnlineWidget() {
  // Define an array with three online items using the specified names, images, and buttons.
  const courses = [
    {
      title: "ReadJAMS",
      description: "Join live reading sessions and engaging discussions.",
      buttonText: "Join ReadJAMS!",
      buttonUrl: "https://readjams.vercel.app", // Replace with the desired URL when available
      imageUrl: "https://i.ibb.co/61pC5Px/Read-JAMS.png"
    },
    {
      title: "MathJAMS",
      description: "Participate in interactive math sessions and challenges.",
      buttonText: "Join MathJAMS!",
      buttonUrl: "https://mathjams.vercel.app", // Replace with the desired URL when available
      imageUrl: "https://i.postimg.cc/2jv9GmfM/Read-JAMS-1.png"
    },
    {
      title: "ReadJAMS",
      description: "An online library for JAMS",
      buttonText: "Join ReadJAMS!",
      buttonUrl: "https://readjams.vercel.app/", // Replace with the desired URL when available
      imageUrl: "https://i.ibb.co/61pC5Px/Read-JAMS.png"
    },
    {
      title: "MathDash",
      description: "Boost your math skills with dynamic problem-solving.",
      buttonText: "Join MathDash!",
      buttonUrl: "https://playmathdash.vercel.app", // Replace with the desired URL when available
      imageUrl: "https://i.postimg.cc/B6H7jhyX/MATH.png"
    }
  ];

  // Build a responsive grid of course cards.
  let coursesHtml = `<div class="learnonline-container"><div class="learnonline-grid">`;
  courses.forEach(course => {
    // For MathDash, add an extra class for custom styling.
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

