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

function showTemporaryMessage(message, isCorrect) {
  questionBox.innerHTML = message;
  answerBoxes.forEach((box) => (box.onclick = null));

  setTimeout(
    () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questionsShuffled.length) {
        loadQuestion();
      } else {
        showResult();
      }
    },
    isCorrect ? 1000 : 2500
  );
}

function selectAnswer(selectedAnswer) {
  const currentQuestion = questionsShuffled[currentQuestionIndex];
  const correctAnswer = currentQuestion.correctAnswer;
  let foo = 0;

  if (selectedAnswer === correctAnswer) {
    foo++;
    score++;
    scoreBox.innerHTML = `<b>Wynik: ${score} / ${questions.length} Pozostało : ${questions.length - foo}</b>`;
    showTemporaryMessage("✅ Dobra odpowiedź!", true);
  } else {
    showTemporaryMessage(`❌ Zła odpowiedź! Poprawna: ${correctAnswer}`, false);
  }
}

function showResult() {
  const percentage = (score / questionsShuffled.length) * 100;
  questionBox.innerHTML = `🎉 Koniec quizu! Twój wynik: ${score} / ${
    questionsShuffled.length
  } (${percentage.toFixed(2)}%)`;
  answerBoxes.forEach((box) => {
    box.style.display = "none";
  });
}

shuffleQuestions();
loadQuestion();
