// main.js

let currentQuestionIndex = 0;
let score = 0;

// Pobieramy elementy
const questionBox = document.querySelector(".question-box");
const answerBoxes = document.querySelectorAll(".answer-box .box");

// Funkcja do załadowania pytania
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionBox.innerHTML = currentQuestion.question;

  answerBoxes.forEach((box, index) => {
    box.innerHTML = currentQuestion.options[index];
    box.onclick = () => selectAnswer(box.innerHTML);
  });
}

// Funkcja do sprawdzania odpowiedzi
function selectAnswer(selectedAnswer) {
  const correctAnswer = questions[currentQuestionIndex].correctAnswer;

  if (selectedAnswer === correctAnswer) {
    score++;
    alert("✅ Dobra odpowiedź!");
  } else {
    alert(`❌ Zła odpowiedź! Prawidłowa to: ${correctAnswer}`);
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// Funkcja na koniec quizu
function showResult() {
  questionBox.innerHTML = `Koniec quizu! Twój wynik: ${score} / ${questions.length}`;
  answerBoxes.forEach((box) => {
    box.style.display = "none";
  });
}

// Start gry
loadQuestion();
