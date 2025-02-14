document.addEventListener('DOMContentLoaded', () => {
  const quizData = [
    {
      question: "Какой мой любимый цвет?",
      options: ["Синий", "Розовый", "Зелёный"],
      correct: 1,
      feedback: "Розовый - цвет любви и нежности, который тебе очень подходит!"
    },
    {
      question: "Дата нашего знакомства?",
      options: ["1 февраля", "29 января", "28 января"],
      correct: 1,
      feedback: "Этот день теперь мой самый любимый."
    },
    {
      question: "Какое время года мне нравится?",
      options: ["Зима", "Осень", "Весна"],
      correct: 0,
      feedback: "Разумеется зима, потому что, мы познакомились зимой."
    },
    {
      question: "Какое животное мне нравится больше всего?",
      options: ["Котик", "Собачка", "Панда"],
      correct: 0,
      feedback: "Котики!! Они такие же милые и грациозные, как ты!"
    },
    {
      question: "Что я предпочитаю на выходных,",
      options: ["Разговор с тобой", "Чтение книг", "Просмотр фильмов"],
      correct: 0,
      feedback: "Ну опять же, что может быть лучше, чем разговор с тобой??))"
    }
  ];

  let currentQuestion = 0;
  let canAnswer = true;

  const questionContainer = document.querySelector('.question h3');
  const optionsContainer = document.querySelector('.options');
  const feedbackContainer = document.querySelector('.feedback');
  const progressHearts = document.querySelectorAll('.progress-heart');
  const progressLine = document.querySelector('.progress-line');

  function updateProgress() {
    const progress = (currentQuestion / quizData.length) * 100;
    progressLine.style.background = `linear-gradient(to right, var(--primary-color) ${progress}%, #ddd ${progress}%)`;
    
    progressHearts.forEach((heart, index) => {
      heart.classList.remove('active');
      if (index === currentQuestion) {
        heart.classList.add('active');
      } else if (index < currentQuestion) {
        heart.classList.add('completed');
      }
    });
  }

  function showQuestion() {
    const question = quizData[currentQuestion];
    questionContainer.textContent = question.question;
    feedbackContainer.classList.remove('show', 'correct', 'incorrect');
    feedbackContainer.textContent = '';

    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
      const optionElement = document.createElement('div');
      optionElement.classList.add('option');
      optionElement.textContent = option;
      optionElement.addEventListener('click', () => checkAnswer(index));
      optionsContainer.appendChild(optionElement);
    });

    updateProgress();
    canAnswer = true;
  }

  function checkAnswer(selectedIndex) {
    if (!canAnswer) return;
    canAnswer = false;

    const question = quizData[currentQuestion];
    const options = document.querySelectorAll('.option');

    options[question.correct].classList.add('correct');
    
    if (selectedIndex !== question.correct) {
      options[selectedIndex].classList.add('incorrect');
      feedbackContainer.textContent = question.feedback;
      feedbackContainer.classList.add('show', 'incorrect');
    } else {
      feedbackContainer.textContent = 'Правильно! ♥';
      feedbackContainer.classList.add('show', 'correct');
    }

    setTimeout(() => {
      if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        showQuestion();
      } else {
        showFinalResult();
      }
    }, 5000);
  }

  function showFinalResult() {
    questionContainer.textContent = 'Спасибо за участие! ♥';
    optionsContainer.innerHTML = '';
    feedbackContainer.textContent = 'Ты замечательно справилась!';
    feedbackContainer.classList.add('show', 'correct');
  }

  // Start the quiz
  showQuestion();
});