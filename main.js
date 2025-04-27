
let questionsShuffled = [];
let currentQuestionIndex = 0;
let score = 0;

const questionBox = document.querySelector(".question-box");
const answerBoxes = document.querySelectorAll(".answer-box .box");
const scoreBox = document.querySelector(".score");

function shuffleQuestions() {
  questionsShuffled = [...questions].sort(() => Math.random() - 0.5);
}

function loadQuestion() {
  const currentQuestion = questionsShuffled[currentQuestionIndex];
  questionBox.innerHTML = currentQuestion.question;

  answerBoxes.forEach((box, index) => {
    box.innerHTML = currentQuestion.options[index];
    box.onclick = () => selectAnswer(box.innerHTML);
  });
}

function selectAnswer(selectedAnswer) {
  const currentQuestion = questionsShuffled[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;

  if (selectedAnswer === correctAnswer) {
    score++;
    scoreBox.innerHTML = `<b>Wynik: ${score}</b>`;
    showTemporaryMessage("✅ Dobra odpowiedź!");
  } else {
    showTemporaryMessage(`❌ Zła odpowiedź! Poprawna: ${correctAnswer}`);
  }
}

function showTemporaryMessage(message) {
  questionBox.innerHTML = message;

  answerBoxes.forEach((box) => (box.onclick = null));

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questionsShuffled.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 1000);
}

function showResult() {
  questionBox.innerHTML = `🎉 Koniec quizu! Twój wynik: ${score} / ${questionsShuffled.length}`;
  answerBoxes.forEach((box) => {
    box.style.display = "none";
  });
}

shuffleQuestions();
loadQuestion();
