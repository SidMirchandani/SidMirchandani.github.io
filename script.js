document.addEventListener("DOMContentLoaded", function () {
  /* ===== Timeline Configuration ===== */
  const timelineConfig = {
    point1: {
      imageUrl: "https://i.postimg.cc/BZ7k2XGP/image.png",
      explanation: "The Holy Roman Empire was a sprawling, decentralized patchwork of states with complex feudal allegiances that had persisted for over a millennium. Internal inefficiencies and competing local interests had long plagued the empire, making unified governance difficult. By the late 18th century, external pressures and the winds of revolutionary change set the stage for transformative upheaval."
    },
    point2: {
      imageUrl: "https://i.postimg.cc/9F4SbCW8/image.png",
      explanation: "Napoleon’s ascent to power, following the French Revolution, introduced a new era of military and political innovation that challenged old-world traditions. His campaigns spread revolutionary ideals such as meritocracy, legal equality, and centralized state power across Europe. These forces began undermining the feudal order that had long defined the Holy Roman Empire."
    },
    point3: {
      imageUrl: "https://i.postimg.cc/wBzG9NDZ/562786fb-fb31-4266-b772-2968153bdd66.webp",
      explanation: "After the decisive victory at Austerlitz, Napoleon dictated terms in the Treaty of Pressburg, dramatically redrawing the map of Central Europe. Austria was forced to cede vast territories, weakening its traditional influence within the empire. This treaty marked a turning point, signaling the beginning of the end for the old imperial order."
    },
    point4: {
      imageUrl: "https://i.postimg.cc/6qZP9f1s/08e2195b-8ae2-41a4-89f4-eb8338c62301.webp",
      explanation: "In 1806, confronted by the reorganization of German territories under French influence, Emperor Francis II officially dissolved the Holy Roman Empire. The dissolution ended a millennium-old institution and its feudal governance, clearing the way for modern nation-states. This pivotal act underscored the irreversible shift from medieval allegiances to centralized state power."
    },
    point5: {
      imageUrl: "https://i.postimg.cc/SQY37mQZ/11dbde3b-de0b-487d-aa78-32255a7f9d1c.webp",
      explanation: "Immediately following the dissolution, Napoleon established the Confederation of the Rhine, a coalition of German states aligned with French strategic interests. This new political entity replaced the decentralized framework of the Holy Roman Empire with a more unified structure. It served as both a buffer against Austrian power and a vehicle for spreading Napoleonic reforms throughout Central Europe."
    },
    point6: {
      imageUrl: "https://i.postimg.cc/9M6xNqXL/1d8471ef-6ccd-4477-b54f-84e6898163b2.webp",
      explanation: "Napoleon introduced the Napoleonic Code to the German states within the Confederation, standardizing laws and creating a more uniform administrative framework. The code abolished many archaic feudal privileges and enshrined principles of equality and rational governance. These legal reforms laid the groundwork for modern civil law systems across Europe."
    },
    point7: {
      imageUrl: "https://i.postimg.cc/3wCJw2Vv/2a3a74a2-e01d-4eac-9815-cc68bb1c4c8f.webp",
      explanation: "Napoleon’s policies led to the secularization of vast church lands, transferring power from ecclesiastical authorities to secular rulers. This process significantly weakened the Catholic Church’s long-held influence in the region. Mediatisation integrated smaller, formerly independent principalities into larger states, further eroding the old feudal order."
    },
    point8: {
      imageUrl: "https://i.postimg.cc/sXTjYsVf/db2fdc5b-f0cd-41d2-8d99-9d70358fc274.webp",
      explanation: "Following Napoleon’s defeat, European powers convened at the Congress of Vienna to restore stability and redraw national boundaries. Despite efforts to reinstate conservative monarchies, the permanent dissolution of the Holy Roman Empire was accepted as the new status quo. The reshaping of Europe at Vienna solidified many Napoleonic reforms, even as it aimed to balance power among the major states."
    },
    point9: {
      imageUrl: "https://i.postimg.cc/Rh8vYd6j/417b2315-991b-4b3f-bc46-e3786a3441bb.webp",
      explanation: "In the wake of Napoleonic reforms, a growing sense of German identity began to emerge among the formerly fragmented states. The shift from feudal divisions to centralized administrative structures inspired liberal and nationalist movements that yearned for unity and self-determination. This ideological transformation laid the ideological groundwork for future efforts toward the unification of Germany."
    },
    point10: {
      imageUrl: "https://i.postimg.cc/3x23LgKc/1786dac5-45fc-4271-9355-0d9828b75c9e.webp",
      explanation: "The transformation initiated by Napoleon’s reorganization ultimately culminated in the unification of Germany in 1871 under Prussian leadership. The gradual evolution from a fragmented collection of states to a cohesive nation was deeply rooted in the political and legal changes triggered by the abolition of the Holy Roman Empire. This unification marked the birth of modern Central European politics and underscored Napoleon’s enduring impact on the continent."
    }
  };

  /* ===== Timeline Navigation ===== */
  const timelinePoints = document.querySelectorAll(".timeline-point");
  const timelineGroups = document.querySelectorAll(".timeline-group");
  const board = document.getElementById("puzzle-board");
  const piecesContainer = document.getElementById("puzzle-pieces");
  const popup = document.getElementById("puzzle-popup");
  const popupTitle = document.getElementById("popup-title");
  const popupInfo = document.getElementById("popup-info");
  const closeBtn = popup.querySelector(".close-btn");

  let currentPuzzleExplanation = ""; // Store the current puzzle's explanation

  timelinePoints.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Hide all timeline groups
      timelineGroups.forEach((group) => (group.style.display = "none"));
      // Remove active state from all buttons
      timelinePoints.forEach((b) => b.classList.remove("active"));
      // Show the selected timeline group
      const timelineId = btn.getAttribute("data-timeline");
      document.getElementById(timelineId).style.display = "block";
      btn.classList.add("active");

      // Retrieve the configuration for the selected timeline
      const config = timelineConfig[timelineId];

      // Initialize the puzzle with the selected image
      initializePuzzle(config.imageUrl, config.explanation);
    });
  });

  /* ===== Puzzle Initialization ===== */
  function initializePuzzle(imageUrl, explanationText) {
    // Clear existing board and pieces
    board.innerHTML = "";
    piecesContainer.innerHTML = "";

    // Store the explanation for later use
    currentPuzzleExplanation = explanationText;

    // Configuration variables
    const rows = 4,
          cols = 4;
    const boardWidth = 250;
    const boardHeight = 250;
    const pieceWidth = boardWidth / cols;
    const pieceHeight = boardHeight / rows;

    // Set up the puzzle board (drop zones)
    board.style.width = boardWidth + "px";
    board.style.height = boardHeight + "px";
    board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;

    // Create drop zones for each cell
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const cell = document.createElement("div");
        cell.classList.add("drop-zone");
        cell.style.width = pieceWidth + "px";
        cell.style.height = pieceHeight + "px";
        cell.dataset.correctIndex = r * cols + c;

        cell.addEventListener("dragover", function (e) {
          e.preventDefault();
        });

        cell.addEventListener("drop", function (e) {
          e.preventDefault();
          const pieceId = e.dataTransfer.getData("text/plain");
          const piece = document.getElementById(pieceId);
          const correctIndex = cell.dataset.correctIndex;

          if (piece.dataset.index === correctIndex) {
            cell.appendChild(piece);
            piece.classList.add("locked");
            piece.setAttribute("draggable", "false");
            checkPuzzleCompletion();
          } else {
            cell.style.borderColor = "red";
            setTimeout(() => {
              cell.style.borderColor = "#ccc";
            }, 500);
          }
        });

        board.appendChild(cell);
      }
    }

    // Create puzzle pieces and store them in an array
    let piecesArray = [];
    for (let i = 0; i < rows * cols; i++) {
      const piece = document.createElement("div");
      piece.classList.add("puzzle-piece");
      piece.id = "piece-" + i;
      piece.dataset.index = i;
      piece.style.width = pieceWidth + "px";
      piece.style.height = pieceHeight + "px";
      piece.style.backgroundImage = `url(${imageUrl})`;
      piece.style.backgroundSize = `${boardWidth}px ${boardHeight}px`;

      const row = Math.floor(i / cols);
      const col = i % cols;
      piece.style.backgroundPosition = `-${col * pieceWidth}px -${row * pieceHeight}px`;
      piece.setAttribute("draggable", "true");

      piece.addEventListener("dragstart", function (e) {
        piece.classList.add("dragging");
        e.dataTransfer.setData("text/plain", piece.id);
      });

      piece.addEventListener("dragend", function () {
        piece.classList.remove("dragging");
      });

      piecesArray.push(piece);
    }

    // Shuffle the pieces randomly
    piecesArray.sort(() => Math.random() - 0.5);

    // Append shuffled pieces to the pieces container
    piecesArray.forEach((piece) => {
      piecesContainer.appendChild(piece);
    });
  }

  /* ===== Check if Puzzle is Completed ===== */
  function checkPuzzleCompletion() {
    const lockedPieces = document.querySelectorAll(".puzzle-piece.locked");
    if (lockedPieces.length === 16) { // Adjust if grid size changes
      setTimeout(() => {
        popupInfo.innerText = currentPuzzleExplanation;
        popup.classList.add("visible");
      }, 500);
    }
  }

  /* ===== Close the Puzzle Completion Popup ===== */
  closeBtn.addEventListener("click", function () {
    popup.classList.remove("visible");
  });

  // Initialize the first puzzle on page load
  initializePuzzle(timelineConfig.point1.imageUrl, timelineConfig.point1.explanation);
});

// Game Variables
let gold = 40;
let army = 30;
let morale = 1.0; // 1.0 is neutral morale.
let turn = 0;
let year = 1792;
let monthIndex = 3;

// Countries (each starts as neutral with a given starting army)
let countries = [
  { name: "Austria", strength: 50, status: "Neutral", army: 40 },
  { name: "Prussia", strength: 40, status: "Neutral", army: 30 },
  { name: "Britain", strength: 60, status: "Neutral", army: 50 },
  { name: "Spain", strength: 45, status: "Neutral", army: 35 },
  { name: "Russia", strength: 70, status: "Neutral", army: 60 },
  { name: "Portugal", strength: 30, status: "Neutral", army: 20 },
  { name: "Piedmont-Sardinia", strength: 35, status: "Neutral", army: 25 }
];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const goldPerTurn = 10;
const recruitCost = 10;
const attackCost = 0;
const enemyRecruitRate = 5;
const enemyCountryConflictChance = 0.1; // 10% chance each turn for an enemy to initiate conflict against another enemy

// Per-turn action records (using country names as keys)
let warDeclaredThisTurn = {};   // For "Declare War"
let attackUsedThisTurn = {};      // For "Attack"
let peaceOfferedThisTurn = {};    // For "Make Peace"

// UI Update: updates stats on screen and checks game status
function updateStats() {
  document.getElementById('gold').innerText = gold;
  document.getElementById('army').innerText = army;
  document.getElementById('morale').innerText = morale.toFixed(2);
  document.getElementById('turn').innerText = turn;
  document.getElementById('date').innerText = `${months[monthIndex]} ${year}`;

  let conqueredList = countries
    .filter(c => c.status === "Conquered")
    .map(c => `${c.name} (Army: ${c.army})`)
    .join(", ") || "None";
  let warList = countries
    .filter(c => c.status === "At War")
    .map(c => `${c.name} (Army: ${c.army})`)
    .join(", ") || "None";
  let remainingList = countries
    .filter(c => c.status === "Neutral")
    .map(c => `${c.name} (Army: ${c.army})`)
    .join(", ") || "None";

  document.getElementById('conquered-countries').innerText = conqueredList;
  document.getElementById('countries-at-war').innerText = warList;
  document.getElementById('remaining-countries').innerText = remainingList;

  checkGameStatus();
}

// Check Win/Loss Conditions (do not reload; just log and disable actions)
function checkGameStatus() {
  if (army <= 0) {
    logMessage("❌ Game Over! Your army has been destroyed.");
    disableAllActions();
  }
  if (countries.every(c => c.status === "Conquered")) {
    logMessage("🎉 Victory! You have conquered all nations!");
    disableAllActions();
  }
}

// Disable all actions when the game ends
function disableAllActions() {
  document.querySelectorAll("button").forEach(button => {
    button.disabled = true;
  });
}

// Clear the event log (so that only the current turn’s events are shown)
function clearLog() {
  document.getElementById("event-log").innerHTML = "";
}

// Log message: prepends new messages so the most recent appears at the top
function logMessage(message) {
  let logElement = document.getElementById("event-log");
  logElement.innerHTML = `<p>${message}</p>` + logElement.innerHTML;
}

// Recruit Soldiers
function recruitSoldiers() {
  if (gold >= recruitCost) {
    army += 5;
    gold -= recruitCost;
    logMessage("You recruited 5 soldiers! ⚔️ (-10 Gold)");
  } else {
    logMessage("Not enough gold to recruit! ❌");
  }
  updateStats();
}

// Show Declare War Menu & hide other submenus
function showDeclareWarMenu() {
  document.getElementById("attack-menu").style.visibility = "hidden";
  document.getElementById("peace-menu").style.visibility = "hidden";

  let declareWarMenu = document.getElementById("declare-war-menu");
  declareWarMenu.innerHTML = "";
  declareWarMenu.style.visibility = "visible";

  let neutralCountries = countries.filter(c => c.status === "Neutral");
  if (neutralCountries.length === 0) {
    declareWarMenu.innerHTML = "<p>No available targets.</p>";
  } else {
    neutralCountries.forEach(country => {
      let btn = document.createElement("button");
      btn.innerText = `${country.name} (Army: ${country.army})`;
      btn.onclick = () => declareWar(country.name);
      declareWarMenu.appendChild(btn);
    });
  }
}

// Declare War on a country
function declareWar(countryName) {
  if (warDeclaredThisTurn[countryName]) {
    logMessage(`You have already declared war on ${countryName} this turn.`);
    return;
  }
  let country = countries.find(c => c.name === countryName);
  if (!country) return;
  country.status = "At War";
  warDeclaredThisTurn[countryName] = true;
  logMessage(`You have declared war on ${country.name} (Army: ${country.army})! ⚔️`);
  updateStats();
}

// Show Attack Menu & hide other submenus
function showAttackMenu() {
  document.getElementById("declare-war-menu").style.visibility = "hidden";
  document.getElementById("peace-menu").style.visibility = "hidden";

  let attackMenu = document.getElementById("attack-menu");
  attackMenu.innerHTML = "";
  attackMenu.style.visibility = "visible";

  let warCountries = countries.filter(c => c.status === "At War");
  if (warCountries.length === 0) {
    attackMenu.innerHTML = "<p>No available targets.</p>";
  } else {
    warCountries.forEach(country => {
      let btn = document.createElement("button");
      btn.innerText = `${country.name} (Army: ${country.army})`;
      btn.onclick = () => attackCountry(country.name);
      attackMenu.appendChild(btn);
    });
  }
}

// Attack a country – effective enemy power is computed as the sum of armies of all enemy nations at war.
function attackCountry(countryName) {
  if (attackUsedThisTurn[countryName]) {
    logMessage(`You have already attacked ${countryName} this turn.`);
    return;
  }
  if (warDeclaredThisTurn[countryName]) {
    logMessage(`You cannot attack ${countryName} on the same turn you declared war on it.`);
    return;
  }
  let country = countries.find(c => c.name === countryName);
  if (!country) return;
  if (gold < attackCost || army <= 0) {
    logMessage("Not enough gold or troops to attack! ❌");
    return;
  }
  gold -= attackCost;
  
  // Compute total enemy army from all countries at war.
  let totalEnemyArmy = countries
    .filter(c => c.status === "At War")
    .reduce((sum, c) => sum + c.army, 0);

  // Calculate effective power with diminishing returns and randomness.
  let playerPower = (1 + morale * 0.001) * (Math.sqrt(army) * 10 + Math.random() * 30);
  let enemyPower = (Math.sqrt(totalEnemyArmy) * 10 + Math.random() * 30);

  if (playerPower > enemyPower) {
    // Victory: enemy loses 10 soldiers.
    country.army -= 10;
    gold += 20;
    morale = Math.min(morale + 0.1, 2.0);
    logMessage(`Victory in battle! ${country.name} (Army now: ${country.army}) lost 10 soldiers. (+20 Gold, Morale increased) ⚔️`);
    if (country.army <= 0) {
      country.status = "Conquered";
      gold += 40;
      logMessage(`You have fully conquered ${country.name} (Army: 0)! (+400 Gold)`);
    }
  } else {
    // Loss: you lose 10 soldiers and morale decreases.
    army -= 10;
    morale = Math.max(morale - 0.1, 0.5);
    logMessage(`Attack on ${country.name} (Army: ${country.army}) failed! You lost 10 soldiers. (Morale decreased)`);
  }
  attackUsedThisTurn[countryName] = true;
  updateStats();
}

// Show Make Peace Menu & hide other submenus
function showPeaceMenu() {
  document.getElementById("declare-war-menu").style.visibility = "hidden";
  document.getElementById("attack-menu").style.visibility = "hidden";

  let peaceMenu = document.getElementById("peace-menu");
  peaceMenu.innerHTML = "";
  peaceMenu.style.visibility = "visible";

  let warCountries = countries.filter(c => c.status === "At War");
  if (warCountries.length === 0) {
    peaceMenu.innerHTML = "<p>No ongoing wars.</p>";
  } else {
    warCountries.forEach(country => {
      let btn = document.createElement("button");
      btn.innerText = `${country.name} (Army: ${country.army})`;
      btn.onclick = () => makePeace(country.name);
      peaceMenu.appendChild(btn);
    });
  }
}

// Attempt to make peace with a country (only one attempt per country per turn)
function makePeace(countryName) {
  if (peaceOfferedThisTurn[countryName]) {
    logMessage(`You have already attempted peace with ${countryName} this turn.`);
    return;
  }
  peaceOfferedThisTurn[countryName] = true;
  let country = countries.find(c => c.name === countryName);
  if (country && country.status === "At War") {
    if (Math.random() < 1/3) {
      logMessage(`${country.name} (Army: ${country.army}) declined your peace offer!`);
    } else {
      country.status = "Neutral";
      logMessage(`Peace treaty signed with ${country.name} (Army: ${country.army}). ✌️`);
    }
  }
  updateStats();
}

// AI Enemy Actions: simulate enemy recruiting, occasional war declarations on you, enemy attacks,
// and also enemy countries attacking each other.
function simulateEnemyActions() {
  // Process each enemy country's actions against you
  countries.forEach(country => {
    if (country.status !== "Conquered") {
      // Recruitment: add a base amount with a small chance for a bonus.
      if (Math.random() < 0.05) {
        country.army += 10;
      } else {
        country.army += enemyRecruitRate;
      }
      // A neutral country may declare war on you (1 in 15 chance)
      if (country.status === "Neutral" && Math.random() < (1/15)) {
        country.status = "At War";
        logMessage(`${country.name} (Army: ${country.army}) has declared war on you! ⚔️`);
      }
      // If a country is at war, it may attack you.
      if (country.status === "At War" && Math.random() < 0.5) {
        // Compute total enemy army from all countries at war.
        let totalEnemyArmy = countries
          .filter(c => c.status === "At War")
          .reduce((sum, c) => sum + c.army, 0);
        let enemyPower = (Math.sqrt(totalEnemyArmy) * 10 + Math.random() * 30);
        let playerPower = morale * (Math.sqrt(army) * 10 + Math.random() * 30);
        if (playerPower > enemyPower) {
          // When an enemy attacks and loses, you now only gain 5 soldiers.
          country.army -= 10;
          army += 5;
          logMessage(`${country.name} attacked you but lost the battle! They lost 10 soldiers. (+5 Army) ⚔️`);
          if (country.army <= 0) {
            country.status = "Conquered";
            gold += 400;
            logMessage(`You have fully conquered ${country.name} (Army: 0)! (+400 Gold)`);
          }
        } else {
          army -= 10;
          morale = Math.max(morale - 0.1, 0.5);
          logMessage(`${country.name} (Army: ${country.army}) attacked you and won the battle. You lost 10 soldiers. (Morale decreased)`);
        }
      }
    }
  });

  // Simulate enemy countries attacking each other.
  let enemyConflictThisTurn = {};
  countries.forEach(attacker => {
    if (attacker.status !== "Conquered" && !enemyConflictThisTurn[attacker.name] && Math.random() < enemyCountryConflictChance) {
      let potentialTargets = countries.filter(target => target.name !== attacker.name && target.status !== "Conquered" && !enemyConflictThisTurn[target.name]);
      if (potentialTargets.length > 0) {
        let target = potentialTargets[Math.floor(Math.random() * potentialTargets.length)];
        let attackerPower = Math.sqrt(attacker.army) * 10 + Math.random() * 30;
        let defenderPower = Math.sqrt(target.army) * 10 + Math.random() * 30;
        if (attackerPower > defenderPower) {
          // Attacker wins the battle.
          target.army -= 10;
          logMessage(`${attacker.name} attacked ${target.name} and won! ${target.name} lost 10 soldiers.`);
          // If the target is still alive, there is a 1 in 20 chance for a takeover.
          if (target.army > 0 && Math.random() < 0.05) {
            target.status = "Conquered";
            attacker.army += 20;
            logMessage(`${attacker.name} has taken over ${target.name}! (+20 Army)`);
          } else if (target.army <= 0) {
            target.status = "Conquered";
            logMessage(`${target.name} has been conquered by ${attacker.name}!`);
          }
        } else {
          // Attacker loses the battle.
          attacker.army -= 10;
          logMessage(`${attacker.name} attacked ${target.name} but lost! ${attacker.name} lost 10 soldiers.`);
          if (attacker.army <= 0) {
            attacker.status = "Conquered";
            logMessage(`${attacker.name} has been conquered by ${target.name}!`);
          }
        }
        enemyConflictThisTurn[attacker.name] = true;
        enemyConflictThisTurn[target.name] = true;
      }
    }
  });
}

// End Turn: clear log (so that only current turn events show), simulate enemy actions, update turn info, reset per-turn records, and hide all submenus.
function endTurn() {
  clearLog();
  simulateEnemyActions();

  turn++;
  gold += goldPerTurn;
  monthIndex++;
  if (monthIndex >= 12) {
    monthIndex = 0;
    year++;
  }

  logMessage(`Turn ${turn} ended. Income received. (+${goldPerTurn} Gold)`);

  // Reset per-turn records
  warDeclaredThisTurn = {};
  attackUsedThisTurn = {};
  peaceOfferedThisTurn = {};

  // Hide all submenus
  document.getElementById("declare-war-menu").style.visibility = "hidden";
  document.getElementById("attack-menu").style.visibility = "hidden";
  document.getElementById("peace-menu").style.visibility = "hidden";

  updateStats();
}

// Initialize UI: clear the log and update stats initially.
clearLog();
updateStats();

// Conversation flows for each event, each with 10 steps
const conversationFlows = {
  "Treaty of Pressburg": [
    {
      id: 0,
      event: "In the aftermath of Austerlitz, what was Napoleon's key demand from Austria in the Treaty of Pressburg?",
      options: { "1": "A large war indemnity", "2": "Territorial concessions", "3": "A military alliance" },
      correct: "2",
      prompt: "Correct! Austria was forced to cede significant territories."
    },
    {
      id: 1,
      event: "Which region did Austria notably lose as a result of the treaty?",
      options: { "1": "Northern Italy", "2": "Bohemia", "3": "The Rhineland" },
      correct: "1",
      prompt: "Right! Northern Italy became a key acquisition for Napoleon."
    },
    {
      id: 2,
      event: "How did the treaty affect the future of the Holy Roman Empire?",
      options: { "1": "It strengthened the empire", "2": "It hastened its dissolution", "3": "It had no impact" },
      correct: "2",
      prompt: "Exactly! The treaty was one of the events that precipitated its end."
    },
    {
      id: 3,
      event: "Which of these was a long-term consequence of the treaty?",
      options: { "1": "The resurgence of feudalism", "2": "The rise of modern nation-states", "3": "The isolation of Central Europe" },
      correct: "2",
      prompt: "Correct! Modern nation-states emerged in its wake."
    },
    {
      id: 4,
      event: "Napoleon's terms were intended to weaken which power?",
      options: { "1": "Britain", "2": "Austria", "3": "Russia" },
      correct: "2",
      prompt: "Right! Austria's influence was significantly reduced."
    },
    {
      id: 5,
      event: "What economic measure was imposed on Austria by the treaty?",
      options: { "1": "Heavy war indemnities", "2": "Trade embargoes", "3": "No economic measures" },
      correct: "1",
      prompt: "Indeed! Austria had to pay substantial indemnities."
    },
    {
      id: 6,
      event: "Which military outcome directly led to the treaty?",
      options: { "1": "A naval victory", "2": "The Battle of Austerlitz", "3": "A prolonged siege" },
      correct: "2",
      prompt: "Absolutely! Austerlitz was the decisive battle."
    },
    {
      id: 7,
      event: "How did Napoleon view the Treaty of Pressburg?",
      options: { "1": "A temporary solution", "2": "A stepping stone for further expansion", "3": "A final peace accord" },
      correct: "2",
      prompt: "Correct! He saw it as a platform for more conquests."
    },
    {
      id: 8,
      event: "What did the treaty’s terms signal for the old imperial order?",
      options: { "1": "Its revival", "2": "Its complete eradication", "3": "A gradual transformation" },
      correct: "3",
      prompt: "Right! It marked a gradual shift away from the old order."
    },
    {
      id: 9,
      event: "Overall, what was the treaty’s most lasting impact?",
      options: { "1": "Strengthening traditional monarchies", "2": "Undermining the old imperial structure", "3": "Establishing a balanced European power system" },
      correct: "2",
      prompt: "Excellent! It played a key role in undermining the old regime."
    }
  ],
  "Confederation of Rhine": [
    {
      id: 0,
      event: "What was Napoleon’s primary aim in creating the Confederation of the Rhine?",
      options: { "1": "To restore the Holy Roman Empire", "2": "To consolidate French influence in German states", "3": "To promote republican ideals" },
      correct: "2",
      prompt: "Correct! It was designed to extend French control over German territories."
    },
    {
      id: 1,
      event: "How was the Confederation of the Rhine structured?",
      options: { "1": "A loose alliance of independent states", "2": "A centralized federation under French oversight", "3": "A confederation of equal partners" },
      correct: "2",
      prompt: "Right! It was a centralized structure that reduced state independence."
    },
    {
      id: 2,
      event: "What happened to the sovereignty of member states?",
      options: { "1": "They gained full autonomy", "2": "Their sovereignty was curtailed", "3": "It remained unchanged" },
      correct: "2",
      prompt: "Exactly! Their independence was significantly reduced."
    },
    {
      id: 3,
      event: "Which political force did the Confederation help suppress?",
      options: { "1": "Nationalism", "2": "Liberalism", "3": "Feudalism" },
      correct: "1",
      prompt: "Correct! It helped to dampen rising nationalist sentiments."
    },
    {
      id: 4,
      event: "What strategic benefit did the Confederation offer Napoleon?",
      options: { "1": "A buffer zone against Prussia", "2": "Stronger ties with Austria", "3": "An alliance with Britain" },
      correct: "1",
      prompt: "Right! It created a buffer zone that enhanced French security."
    },
    {
      id: 5,
      event: "The Confederation symbolized a break from which old order?",
      options: { "1": "The feudal traditions of the HRE", "2": "Modern democratic institutions", "3": "Colonial rule" },
      correct: "1",
      prompt: "Exactly! It marked the end of centuries of feudalism."
    },
    {
      id: 6,
      event: "How were member states expected to contribute militarily?",
      options: { "1": "By maintaining independent armies", "2": "By integrating into a unified force", "3": "They were exempted from military service" },
      correct: "2",
      prompt: "Correct! They had to provide troops for a unified military structure."
    },
    {
      id: 7,
      event: "What long-term impact did the Confederation have on German politics?",
      options: { "1": "It directly led to German unification", "2": "It strengthened the old imperial order", "3": "It isolated France from European affairs" },
      correct: "1",
      prompt: "Right! It set the stage for later unification movements."
    },
    {
      id: 8,
      event: "Which strategy best describes Napoleon’s approach with the Confederation?",
      options: { "1": "Divide and rule", "2": "Full integration", "3": "Complete autonomy for states" },
      correct: "1",
      prompt: "Absolutely! 'Divide and rule' was central to his policy."
    },
    {
      id: 9,
      event: "How is the Confederation of the Rhine viewed historically?",
      options: { "1": "As a fleeting experiment", "2": "As a cornerstone for future unity", "3": "As an insignificant episode" },
      correct: "2",
      prompt: "Excellent! It is recognized as a key precursor to modern unity."
    }
  ],
  "Napoleonic Reforms": [
    {
      id: 0,
      event: "What was the main aim of the Napoleonic Reforms in the former HRE territories?",
      options: { "1": "To reinstate feudal privileges", "2": "To modernize and rationalize administration", "3": "To promote religious uniformity" },
      correct: "2",
      prompt: "Correct! The reforms sought to modernize state structures."
    },
    {
      id: 1,
      event: "Which legal framework was introduced as a part of these reforms?",
      options: { "1": "The Napoleonic Code", "2": "The Code of Justinian", "3": "The Code of Chivalry" },
      correct: "1",
      prompt: "Right! The Napoleonic Code redefined the legal landscape."
    },
    {
      id: 2,
      event: "How did these reforms affect social mobility?",
      options: { "1": "They reinforced aristocratic privileges", "2": "They promoted meritocracy", "3": "They eliminated social distinctions" },
      correct: "2",
      prompt: "Exactly! Merit became more important than birthright."
    },
    {
      id: 3,
      event: "Which administrative change was most central to the reforms?",
      options: { "1": "Decentralizing power", "2": "Creating a centralized bureaucracy", "3": "Returning power to local lords" },
      correct: "2",
      prompt: "Correct! A centralized bureaucracy was key to the reforms."
    },
    {
      id: 4,
      event: "What economic measure was standardized under the reforms?",
      options: { "1": "Local barter systems", "2": "Uniform tax collection", "3": "Feudal levies" },
      correct: "2",
      prompt: "Right! Uniform tax systems helped stabilize the economy."
    },
    {
      id: 5,
      event: "How did education change as a result of these reforms?",
      options: { "1": "It was limited to the aristocracy", "2": "State-sponsored education was promoted", "3": "Education was largely ignored" },
      correct: "2",
      prompt: "Exactly! The reforms encouraged broader access to education."
    },
    {
      id: 6,
      event: "What social effect did the reforms have on career advancement?",
      options: { "1": "They diminished social mobility", "2": "They fostered merit-based advancement", "3": "They created a rigid caste system" },
      correct: "2",
      prompt: "Correct! Advancement was increasingly based on merit."
    },
    {
      id: 7,
      event: "How did the reforms impact local governance?",
      options: { "1": "By standardizing administrative practices", "2": "By abolishing local councils", "3": "By returning power to the nobility" },
      correct: "1",
      prompt: "Right! Standardization was a central goal."
    },
    {
      id: 8,
      event: "What long-term institutional change resulted from the reforms?",
      options: { "1": "The creation of modern state institutions", "2": "The restoration of feudal rights", "3": "Economic isolation" },
      correct: "1",
      prompt: "Absolutely! Modern state institutions emerged from these reforms."
    },
    {
      id: 9,
      event: "Overall, how are the Napoleonic Reforms viewed in European history?",
      options: { "1": "As minor tweaks", "2": "As groundbreaking changes", "3": "As regressive measures" },
      correct: "2",
      prompt: "Excellent! They are seen as pivotal in modernizing Europe."
    }
  ],
  "Congress of Vienna": [
    {
      id: 0,
      event: "What was the primary goal of the Congress of Vienna after Napoleon’s defeat?",
      options: { "1": "To punish France harshly", "2": "To restore a balance of power in Europe", "3": "To promote revolutionary ideals" },
      correct: "2",
      prompt: "Correct! Restoring balance was the key objective."
    },
    {
      id: 1,
      event: "Which major power was a dominant force at the Congress?",
      options: { "1": "France", "2": "Russia", "3": "Spain" },
      correct: "2",
      prompt: "Right! Russia played a leading role in the negotiations."
    },
    {
      id: 2,
      event: "How did the Congress view the defunct Holy Roman Empire?",
      options: { "1": "They sought to revive it", "2": "They accepted its dissolution", "3": "They ignored its legacy" },
      correct: "2",
      prompt: "Exactly! Its end was accepted as a new beginning."
    },
    {
      id: 3,
      event: "What principle guided the redrawing of borders at the Congress?",
      options: { "1": "Legitimacy", "2": "National self-determination", "3": "The balance of power" },
      correct: "3",
      prompt: "Correct! Ensuring a balance of power was paramount."
    },
    {
      id: 4,
      event: "Which treaty emerged from the Congress's decisions?",
      options: { "1": "Treaty of Paris", "2": "Treaty of Vienna", "3": "No formal treaty was signed" },
      correct: "2",
      prompt: "Right! The Treaty of Vienna formalized many decisions."
    },
    {
      id: 5,
      event: "How did the Congress approach Napoleon’s revolutionary changes?",
      options: { "1": "They rejected all of them", "2": "They selectively adopted some", "3": "They embraced them fully" },
      correct: "2",
      prompt: "Exactly! They integrated certain reforms while restoring conservative order."
    },
    {
      id: 6,
      event: "What long-term effect did the Congress have on Europe?",
      options: { "1": "A century of relative peace", "2": "Constant warfare", "3": "The immediate collapse of monarchies" },
      correct: "1",
      prompt: "Correct! The Concert of Europe helped maintain peace for decades."
    },
    {
      id: 7,
      event: "Which mood best characterized the deliberations at the Congress?",
      options: { "1": "Revolutionary enthusiasm", "2": "Conservative restoration", "3": "Indifference" },
      correct: "2",
      prompt: "Right! A conservative, restorative spirit prevailed."
    },
    {
      id: 8,
      event: "How were territorial disputes resolved at the Congress?",
      options: { "1": "Through unilateral decisions", "2": "By mediating compromises", "3": "They were left unresolved" },
      correct: "2",
      prompt: "Absolutely! Compromise was the key to resolving disputes."
    },
    {
      id: 9,
      event: "Overall, what legacy is the Congress of Vienna remembered for?",
      options: { "1": "Laying the foundations of modern diplomacy", "2": "Being a short-lived agreement", "3": "Having no lasting impact" },
      correct: "1",
      prompt: "Excellent! Its legacy endures in modern European diplomacy."
    }
  ],
  "German Unification": [
    {
      id: 0,
      event: "Which event linked Napoleon’s influence directly to the later unification of Germany?",
      options: { "1": "The dissolution of the HRE", "2": "The establishment of the Confederation of Rhine", "3": "The Congress of Vienna" },
      correct: "2",
      prompt: "Correct! The Confederation of Rhine set the stage for unification."
    },
    {
      id: 1,
      event: "How did Napoleon’s policies inadvertently foster German nationalism?",
      options: { "1": "By uniting disparate states", "2": "By suppressing German culture", "3": "By encouraging regional isolation" },
      correct: "1",
      prompt: "Right! His reforms brought the German states closer together."
    },
    {
      id: 2,
      event: "What role did the Napoleonic Code play in the process of unification?",
      options: { "1": "It was largely irrelevant", "2": "It provided a common legal framework", "3": "It hindered political progress" },
      correct: "2",
      prompt: "Exactly! A shared legal code helped bind the states together."
    },
    {
      id: 3,
      event: "Which state emerged as the leader in the movement towards unification?",
      options: { "1": "Austria", "2": "Prussia", "3": "Bavaria" },
      correct: "2",
      prompt: "Correct! Prussia led the unification efforts."
    },
    {
      id: 4,
      event: "How did military reforms influenced by Napoleon affect German unification?",
      options: { "1": "They weakened local forces", "2": "They modernized the armies", "3": "They were largely ignored" },
      correct: "2",
      prompt: "Right! Modernized armies played a crucial role."
    },
    {
      id: 5,
      event: "Which conflict catalyzed the final steps toward unification?",
      options: { "1": "The Austro-Prussian War", "2": "The Franco-Prussian War", "3": "World War I" },
      correct: "1",
      prompt: "Exactly! The Austro-Prussian War was a key catalyst."
    },
    {
      id: 6,
      event: "What cultural effect did Napoleon’s influence have on the German states?",
      options: { "1": "Suppression of the German language", "2": "A revival of German literature and philosophy", "3": "An adoption of French customs" },
      correct: "2",
      prompt: "Correct! A cultural revival helped spark national pride."
    },
    {
      id: 7,
      event: "How did administrative changes introduced by Napoleon impact later unification?",
      options: { "1": "They complicated governance", "2": "They laid the foundation for modern administration", "3": "They were completely rejected" },
      correct: "2",
      prompt: "Right! Modern administrative practices emerged from his reforms."
    },
    {
      id: 8,
      event: "In economic terms, what legacy did Napoleon leave that aided unification?",
      options: { "1": "Fragmented trade policies", "2": "Harmonized economic practices", "3": "Severe economic isolation" },
      correct: "2",
      prompt: "Absolutely! Economic harmonization fostered closer ties among the states."
    },
    {
      id: 9,
      event: "Overall, what is considered Napoleon’s most enduring contribution to German Unification?",
      options: { "1": "A common legal and administrative framework", "2": "His prowess as a military conqueror", "3": "His support for traditional monarchies" },
      correct: "1",
      prompt: "Excellent! His reforms provided the essential foundation for a unified Germany."
    }
  ]
};

// Global variables to track conversation state
let selectedEvent = "";
let conversationStage = 0;

// Utility: Append a bot message to the chat window with a typing transition
function addBotMessage(text, callback) {
  const chatWindow = document.getElementById("chat-window");
  const messageElem = document.createElement("div");
  messageElem.className = "bot-message";
  chatWindow.appendChild(messageElem);
  chatWindow.scrollTop = chatWindow.scrollHeight;
  
  let index = 0;
  function typeChar() {
    if (index < text.length) {
      messageElem.textContent += text.charAt(index);
      index++;
      setTimeout(typeChar, 50); // Adjust the speed (milliseconds per character) as desired
    } else {
      if (callback) callback();
    }
  }
  typeChar();
}

// Utility: Append a user message to the chat window (immediate display)
function addUserMessage(text) {
  const chatWindow = document.getElementById("chat-window");
  const messageElem = document.createElement("div");
  messageElem.className = "user-message";
  messageElem.textContent = text;
  chatWindow.appendChild(messageElem);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}

// Utility: Clear the chat window
function clearChatWindow() {
  document.getElementById("chat-window").innerHTML = "";
}

// Start the adventure: prompt the user to choose an event
function startNapoleonAdventure() {
  clearChatWindow();
  selectedEvent = "";
  conversationStage = 0;
  addBotMessage("Welcome to Napoleon's HRE Adventure!");
  addBotMessage('Choose an event to explore by typing the corresponding number:');
  addBotMessage("1: Treaty of Pressburg\n2: Confederation of Rhine\n3: Napoleonic Reforms\n4: Congress of Vienna\n5: German Unification");
  addBotMessage('Do you want to reset the conversation? Just type "Reset".');
}

// Present the current step for the selected event
function presentCurrentStep() {
  if (selectedEvent === "") return; // No event selected yet
  const flow = conversationFlows[selectedEvent];
  if (conversationStage < flow.length) {
    const currentStep = flow[conversationStage];
    let message = `Step ${conversationStage + 1}: ${currentStep.event}\n`;
    for (const [key, option] of Object.entries(currentStep.options)) {
      message += `${key}: ${option}\n`;
    }
    addBotMessage(message);
  } else {
    addBotMessage("The adventure for this event has concluded. Thank you for participating!");
  }
}

// Process user input from the chat
function processNapoleonInput(input) {
  // If the user types "reset", restart the conversation
  if (input.trim().toLowerCase() === "reset") {
    addBotMessage("Resetting conversation...");
    setTimeout(() => {
      startNapoleonAdventure();
    }, 1000);
    return;
  }
  
  // If no event is selected, interpret the input as the event choice
  if (selectedEvent === "") {
    const eventMap = {
      "1": "Treaty of Pressburg",
      "2": "Confederation of Rhine",
      "3": "Napoleonic Reforms",
      "4": "Congress of Vienna",
      "5": "German Unification"
    };
    if (eventMap.hasOwnProperty(input)) {
      selectedEvent = eventMap[input];
      addBotMessage(`You have selected: ${selectedEvent}. Let's begin!`);
      setTimeout(() => {
        presentCurrentStep();
      }, 1000);
    } else {
      addBotMessage("Please choose a valid option: 1, 2, 3, 4, or 5.");
    }
    return;
  }
  
  // Process the input for the current step of the chosen event
  const flow = conversationFlows[selectedEvent];
  if (conversationStage < flow.length) {
    const currentStep = flow[conversationStage];
    if (!currentStep.options.hasOwnProperty(input)) {
      addBotMessage("Please choose a valid option (e.g., type 1, 2, or 3).");
      return;
    }
    if (input === currentStep.correct) {
      addBotMessage(currentStep.prompt);
      conversationStage++;
      setTimeout(() => {
        presentCurrentStep();
      }, 1000);
    } else {
      addBotMessage("Incorrect answer. Please try again.");
      setTimeout(() => {
        presentCurrentStep();
      }, 1000);
    }
  } else {
    addBotMessage("The adventure has concluded. Thank you for participating!");
  }
}

// Initialize the conversation on window load and set up the input listener
window.onload = function () {
  startNapoleonAdventure();
  const inputField = document.getElementById("chat-input");
  inputField.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      const userInput = inputField.value.trim();
      if (userInput !== "") {
        addUserMessage(userInput);
        inputField.value = "";
        processNapoleonInput(userInput);
      }
    }
  });
};
