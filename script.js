// --- QUIZ ---
const quizData = [
  {
    question: "Which one is used for styling?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "Which is used for interactivity?",
    options: ["HTML", "SQL", "JavaScript", "Photoshop"],
    answer: "JavaScript"
  }
];

let current = 0;
function loadQuiz() {
  const q = quizData[current];
  document.getElementById('question').innerText = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}
function checkAnswer(selected) {
  const correct = quizData[current].answer;
  alert(selected === correct ? "✅ Correct!" : `❌ Nope! It's ${correct}`);
}
function nextQuestion() {
  current++;
  if (current < quizData.length) {
    loadQuiz();
  } else {
    document.getElementById("quiz").innerHTML = "<p>🎉 Quiz Finished!</p>";
  }
}
loadQuiz();

// --- JOKE API ---
async function getJoke() {
  const res = await fetch('https://official-joke-api.appspot.com/random_joke');
  const data = await res.json();
  document.getElementById('jokeText').innerText = `${data.setup} 🤔\n${data.punchline} 😂`;
}
