// ============================
//  PLACEMENT PRO – script.js
// ============================

const ALL_QUESTIONS = [
  // ── APTITUDE (8 questions) ──
  {
    subject: "Aptitude",
    question: "A train travels 360 km in 4 hours. What is its speed in m/s?",
    options: ["25 m/s", "22.5 m/s", "30 m/s", "20 m/s"],
    answer: 0
  },
  {
    subject: "Aptitude",
    question: "If 6 men can do a piece of work in 12 days, how many days will 9 men take to do the same work?",
    options: ["8 days", "10 days", "6 days", "9 days"],
    answer: 0
  },
  {
    subject: "Aptitude",
    question: "A shopkeeper buys an item for ₹800 and sells it for ₹1000. What is the profit percentage?",
    options: ["20%", "25%", "30%", "15%"],
    answer: 1
  },
  {
    subject: "Aptitude",
    question: "The compound interest on ₹10,000 for 2 years at 10% per annum is:",
    options: ["₹2100", "₹2000", "₹1900", "₹2200"],
    answer: 0
  },
  {
    subject: "Aptitude",
    question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. Both open together, the tank fills in:",
    options: ["10 min", "12 min", "15 min", "8 min"],
    answer: 1
  },
  {
    subject: "Aptitude",
    question: "A car travels from A to B at 60 km/h and returns at 40 km/h. What is the average speed for the round trip?",
    options: ["50 km/h", "48 km/h", "52 km/h", "46 km/h"],
    answer: 1
  },
  {
    subject: "Aptitude",
    question: "What is 15% of 80% of 500?",
    options: ["60", "48", "72", "55"],
    answer: 0
  },
  {
    subject: "Aptitude",
    question: "If the ratio of boys to girls in a class is 3:2 and there are 40 students, how many boys are there?",
    options: ["20", "24", "18", "22"],
    answer: 1
  },

  // ── REASONING (8 questions) ──
  {
    subject: "Reasoning",
    question: "Find the odd one out: 2, 3, 5, 7, 9, 11",
    options: ["9", "7", "11", "5"],
    answer: 0
  },
  {
    subject: "Reasoning",
    question: "If CLOCK is coded as KCOLC, how is LIGHT coded?",
    options: ["THGIL", "LHGIT", "TGHIL", "THGIL"],
    answer: 0
  },
  {
    subject: "Reasoning",
    question: "A is B's sister. B is C's brother. C is D's father. How is A related to D?",
    options: ["Aunt", "Mother", "Sister", "Cousin"],
    answer: 0
  },
  {
    subject: "Reasoning",
    question: "Complete the series: 2, 6, 12, 20, 30, __",
    options: ["42", "40", "44", "38"],
    answer: 0
  },
  {
    subject: "Reasoning",
    question: "If all Roses are Flowers and some Flowers are Red, which conclusion is definitely true?",
    options: ["Some Roses are Red", "All Roses are Red", "No Roses are Red", "None of the above"],
    answer: 3
  },
  {
    subject: "Reasoning",
    question: "In a certain code, COMPUTER is written as RFUVQNPC. What does MEDICINE stand for?",
    options: ["MFEJDJOF", "EOJDEJFM", "MFEJDNJE", "NFEJDJOF"],
    answer: 3
  },
  {
    subject: "Reasoning",
    question: "How many triangles are in a triangle divided by all three medians?",
    options: ["6", "4", "8", "3"],
    answer: 0
  },
  {
    subject: "Reasoning",
    question: "A clock shows 3:15. What is the angle between the hour and minute hands?",
    options: ["7.5°", "0°", "15°", "22.5°"],
    answer: 0
  },

  // ── OPERATING SYSTEMS (8 questions) ──
  {
    subject: "OS",
    question: "Which page replacement algorithm suffers from Belady's anomaly?",
    options: ["FIFO", "LRU", "OPT", "LFU"],
    answer: 0
  },
  {
    subject: "OS",
    question: "A process is in the WAITING state when it is:",
    options: ["Waiting for I/O or an event", "Ready to execute", "Currently executing", "Terminated"],
    answer: 0
  },
  {
    subject: "OS",
    question: "Which scheduling algorithm can cause starvation?",
    options: ["Priority Scheduling", "Round Robin", "FCFS", "SRTF"],
    answer: 0
  },
  {
    subject: "OS",
    question: "In Banker's Algorithm, the system is in a safe state when:",
    options: ["There exists a safe sequence", "All processes are blocked", "No deadlock exists currently", "Resources are unlimited"],
    answer: 0
  },
  {
    subject: "OS",
    question: "Which of the following is NOT a condition for deadlock?",
    options: ["Preemption", "Mutual Exclusion", "Hold and Wait", "Circular Wait"],
    answer: 0
  },
  {
    subject: "OS",
    question: "The process of loading an OS kernel into memory is called:",
    options: ["Bootstrapping", "Spooling", "Thrashing", "Paging"],
    answer: 0
  },
  {
    subject: "OS",
    question: "Thrashing in an OS occurs when:",
    options: ["CPU spends more time in paging than executing", "Too many processes are idle", "Memory is underutilized", "CPU scheduling fails"],
    answer: 0
  },
  {
    subject: "OS",
    question: "Which IPC mechanism is fastest?",
    options: ["Shared Memory", "Message Passing", "Pipes", "Sockets"],
    answer: 0
  },

  // ── CNS / COMPUTER NETWORKS (8 questions) ──
  {
    subject: "CNS",
    question: "Which layer of OSI model is responsible for end-to-end delivery?",
    options: ["Transport Layer", "Network Layer", "Session Layer", "Data Link Layer"],
    answer: 0
  },
  {
    subject: "CNS",
    question: "TCP is preferred over UDP when:",
    options: ["Reliable ordered delivery is needed", "Speed is more critical than reliability", "Broadcasting is required", "Connectionless communication is needed"],
    answer: 0
  },
  {
    subject: "CNS",
    question: "Which protocol is used to map IP address to MAC address?",
    options: ["ARP", "RARP", "DNS", "DHCP"],
    answer: 0
  },
  {
    subject: "CNS",
    question: "What is the maximum size of an IPv4 header (in bytes)?",
    options: ["60 bytes", "20 bytes", "40 bytes", "32 bytes"],
    answer: 0
  },
  {
    subject: "CNS",
    question: "Which protocol works at the application layer and resolves domain names?",
    options: ["DNS", "ARP", "ICMP", "RIP"],
    answer: 0
  },
  {
    subject: "CNS",
    question: "In which topology is a central hub/switch required?",
    options: ["Star", "Bus", "Ring", "Mesh"],
    answer: 0
  },
  {
    subject: "CNS",
    question: "The sliding window protocol is used for:",
    options: ["Flow control", "Error detection", "Routing", "Encryption"],
    answer: 0
  },
  {
    subject: "CNS",
    question: "Which of the following is a private IP address?",
    options: ["192.168.1.10", "8.8.8.8", "172.32.0.1", "200.100.50.10"],
    answer: 0
  },

  // ── SQL / DBMS (8 questions) ──
  {
    subject: "SQL",
    question: "Which SQL clause filters rows AFTER grouping?",
    options: ["HAVING", "WHERE", "GROUP BY", "ORDER BY"],
    answer: 0
  },
  {
    subject: "SQL",
    question: "A foreign key constraint ensures:",
    options: ["Referential integrity", "Unique values", "Non-null values", "Primary key uniqueness"],
    answer: 0
  },
  {
    subject: "SQL",
    question: "Which normal form eliminates transitive dependencies?",
    options: ["3NF", "1NF", "2NF", "BCNF"],
    answer: 0
  },
  {
    subject: "SQL",
    question: "What does `SELECT DISTINCT` do?",
    options: ["Removes duplicate rows from results", "Selects the first row only", "Sorts the result", "Filters NULL values"],
    answer: 0
  },
  {
    subject: "SQL",
    question: "Which JOIN returns only matching rows from both tables?",
    options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"],
    answer: 0
  },
  {
    subject: "SQL",
    question: "What is the output of: SELECT COUNT(*) FROM employees WHERE salary > 50000; if 5 rows match?",
    options: ["5", "50000", "NULL", "Error"],
    answer: 0
  },
  {
    subject: "SQL",
    question: "Which command is used to permanently save a transaction?",
    options: ["COMMIT", "ROLLBACK", "SAVEPOINT", "BEGIN"],
    answer: 0
  },
  {
    subject: "SQL",
    question: "Which SQL function returns the number of characters in a string?",
    options: ["LEN() / LENGTH()", "SIZE()", "COUNT()", "CHAR()"],
    answer: 0
  },

  // ── PROGRAMMING – Python & Java (10 questions) ──
  {
    subject: "Programming",
    question: "What is the output of: print(type([]))?",
    options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'array'>"],
    answer: 0
  },
  {
    subject: "Programming",
    question: "Which keyword is used to handle exceptions in Python?",
    options: ["except", "catch", "error", "handle"],
    answer: 0
  },
  {
    subject: "Programming",
    question: "In Java, which access modifier makes a member accessible only within the same class?",
    options: ["private", "protected", "default", "public"],
    answer: 0
  },
  {
    subject: "Programming",
    question: "What is the time complexity of binary search?",
    options: ["O(log n)", "O(n)", "O(n²)", "O(1)"],
    answer: 0
  },
  {
    subject: "Programming",
    question: "Which Python data structure is immutable?",
    options: ["Tuple", "List", "Dictionary", "Set"],
    answer: 0
  },
  {
    subject: "Programming",
    question: "In Java, the `final` keyword on a class means:",
    options: ["Class cannot be inherited", "Class is abstract", "Class has no constructor", "Class is serializable"],
    answer: 0
  },
  {
    subject: "Programming",
    question: "What does the Python keyword `yield` do?",
    options: ["Returns a generator value without terminating", "Exits the function", "Skips an iteration", "Imports a module"],
    answer: 0
  },
  {
    subject: "Programming",
    question: "Which sorting algorithm has the best average-case time complexity?",
    options: ["Merge Sort – O(n log n)", "Bubble Sort – O(n²)", "Insertion Sort – O(n²)", "Selection Sort – O(n²)"],
    answer: 0
  },
  {
    subject: "Programming",
    question: "In Java, which collection does NOT allow duplicate elements?",
    options: ["HashSet", "ArrayList", "LinkedList", "Vector"],
    answer: 0
  },
  {
    subject: "Programming",
    question: "What is the output of: x = [1,2,3]; print(x[-1])?",
    options: ["3", "1", "-1", "Error"],
    answer: 0
  },

  // ── CLOUD COMPUTING (6 questions) ──
  {
    subject: "Cloud",
    question: "Which cloud service model gives the user most control over the infrastructure?",
    options: ["IaaS", "PaaS", "SaaS", "FaaS"],
    answer: 0
  },
  {
    subject: "Cloud",
    question: "AWS S3 is an example of:",
    options: ["Object Storage", "Block Storage", "File Storage", "Cache Storage"],
    answer: 0
  },
  {
    subject: "Cloud",
    question: "Which AWS service is used for auto-scaling web applications?",
    options: ["EC2 Auto Scaling", "AWS Lambda", "Amazon RDS", "AWS CloudFront"],
    answer: 0
  },
  {
    subject: "Cloud",
    question: "Containerisation is best represented by:",
    options: ["Docker & Kubernetes", "VMware vSphere", "AWS EC2", "Azure AD"],
    answer: 0
  },
  {
    subject: "Cloud",
    question: "Which cloud deployment model is exclusively for one organisation?",
    options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Community Cloud"],
    answer: 0
  },
  {
    subject: "Cloud",
    question: "Serverless computing means:",
    options: ["No server management by developer; auto-scales", "No servers exist", "On-premise servers only", "Dedicated servers for each user"],
    answer: 0
  }
];

// ── State ──
let questions = [];
let current = 0;
let answers = [];
let timerInterval = null;
let timeLeft = 60;
let studentName = "";

const CIRCUMFERENCE = 2 * Math.PI * 24; // ~150.8

// ── Fisher-Yates shuffle ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Start ──
function startQuiz() {
  const input = document.getElementById("student-name").value.trim();
  if (!input) {
    const el = document.getElementById("student-name");
    el.style.borderColor = "#ff6584";
    el.focus();
    el.setAttribute("placeholder", "Please enter your name first!");
    setTimeout(() => {
      el.style.borderColor = "";
      el.setAttribute("placeholder", "e.g. Ravi Kumar");
    }, 2000);
    return;
  }
  studentName = input;
  document.getElementById("qh-name").textContent = "👤 " + studentName;

  // Shuffle questions but keep all 50
  questions = shuffle(ALL_QUESTIONS);
  answers = new Array(questions.length).fill(null);

  showPage("quiz-page");
  renderQuestion();
}

function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// ── Render ──
function renderQuestion() {
  const q = questions[current];

  // Meta
  document.getElementById("q-subject").textContent = q.subject;
  document.getElementById("q-num").textContent = `Q${current + 1}`;
  document.getElementById("q-text").textContent = q.question;

  // Progress
  const pct = ((current + 1) / questions.length) * 100;
  document.getElementById("progress-fill").style.width = pct + "%";
  document.getElementById("progress-label").textContent = `${current + 1} / ${questions.length}`;

  // Options
  const letters = ["A", "B", "C", "D"];
  const grid = document.getElementById("options-grid");
  grid.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn" + (answers[current] === i ? " selected" : "");
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span>${opt}</span>`;
    btn.onclick = () => selectOption(i);
    grid.appendChild(btn);
  });

  // Card animation
  const card = document.getElementById("question-card");
  card.style.animation = "none";
  void card.offsetWidth;
  card.style.animation = "slideIn 0.3s ease both";

  // Timer
  resetTimer();
}

function selectOption(idx) {
  answers[current] = idx;
  document.querySelectorAll(".option-btn").forEach((btn, i) => {
    btn.classList.toggle("selected", i === idx);
  });
}

// ── Navigation ──
function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    renderQuestion();
  }
}

// ── Timer ──
function resetTimer() {
  clearInterval(timerInterval);
  timeLeft = 60;
  updateTimerUI();
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      if (current < questions.length - 1) {
        current++;
        renderQuestion();
      } else {
        submitQuiz();
      }
    }
  }, 1000);
}

function updateTimerUI() {
  const el = document.getElementById("timer-text");
  const circle = document.getElementById("timer-circle");

  el.textContent = timeLeft;

  const ratio = timeLeft / 60;
  const offset = CIRCUMFERENCE * (1 - ratio);
  circle.style.strokeDashoffset = offset;

  // Color change
  if (timeLeft <= 10) {
    circle.style.stroke = "#ff4757";
    el.style.color = "#ff4757";
  } else if (timeLeft <= 20) {
    circle.style.stroke = "#ffc107";
    el.style.color = "#ffc107";
  } else {
    circle.style.stroke = "#6c63ff";
    el.style.color = "#f0f0ff";
  }
}

// ── Submit ──
function submitQuiz() {
  clearInterval(timerInterval);

  let correct = 0;
  let wrong = 0;
  let skipped = 0;

  answers.forEach((ans, i) => {
    if (ans === null) { skipped++; }
    else if (ans === questions[i].answer) { correct++; }
    else { wrong++; }
  });

  const total = questions.length;
  const pct = Math.round((correct / total) * 100);

  // Populate result page
  document.getElementById("result-name").textContent = "Great effort, " + studentName + "!";
  document.getElementById("score-frac").textContent = `${correct}/${total}`;
  document.getElementById("rc-correct").textContent = correct;
  document.getElementById("rc-wrong").textContent = wrong;
  document.getElementById("rc-skip").textContent = skipped;

  // Message
  let msg = "";
  let icon = "";
  if (pct >= 80) { icon = "🏆"; msg = "Outstanding! You're placement-ready. Top companies are looking for candidates like you!"; }
  else if (pct >= 60) { icon = "🎯"; msg = "Great score! A bit more practice on weak areas and you'll ace any placement test."; }
  else if (pct >= 40) { icon = "📚"; msg = "Good attempt! Focus on revising subjects where you dropped marks. You'll get there!"; }
  else { icon = "💪"; msg = "Keep practising! Every attempt makes you stronger. Review each topic and retake the test."; }

  document.getElementById("result-icon").textContent = icon;
  document.getElementById("result-msg").textContent = msg;

  showPage("result-page");

  // Animate score after short delay
  setTimeout(() => {
    // Score arc
    const arc = document.getElementById("score-arc");
    const arcCircumference = 2 * Math.PI * 80; // 502.65
    const arcOffset = arcCircumference * (1 - pct / 100);
    arc.style.strokeDashoffset = arcOffset;
    if (pct >= 80) arc.style.stroke = "#43e97b";
    else if (pct >= 60) arc.style.stroke = "#6c63ff";
    else if (pct >= 40) arc.style.stroke = "#ffc107";
    else arc.style.stroke = "#ff6584";

    // Animate percentage text
    let counter = 0;
    const pctEl = document.getElementById("score-pct");
    const step = setInterval(() => {
      counter++;
      pctEl.textContent = counter + "%";
      if (counter >= pct) clearInterval(step);
    }, 20);
  }, 300);
}

// ── Restart ──
function restartQuiz() {
  current = 0;
  answers = [];
  questions = [];
  document.getElementById("student-name").value = "";
  // Reset arc
  document.getElementById("score-arc").style.strokeDashoffset = "502.65";
  showPage("landing-page");
}

// ── Enter key support ──
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("student-name").addEventListener("keypress", (e) => {
    if (e.key === "Enter") startQuiz();
  });
});
