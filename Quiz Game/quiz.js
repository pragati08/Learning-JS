const questionObj = [
  {
    correctAnswer: "Letucce",
    options: ["Tomato", "Potato", "Letucce", "Onion"],
    question: "What veggie is Dudu's favourite in any burger?",
  },
  {
    correctAnswer: "Mac cheese chicken",
    options: [
      "Mac maharaja veg",
      "Mac cheese chicken",
      "Crispy Chicken",
      "Mac aloo tikki",
    ],
    question: "Which Dudu's fvourite mac Burger?",
  },
  {
    correctAnswer: "Mac meal",
    options: ["Mac meal", "Burger", "Burger and Fries", "Burger and Coke"],
    question: "What does Dudu prefer to have while ordering?",
  },
  {
    correctAnswer: "Punam chambers",
    options: [
      "Pune MacDonald's",
      "Goa MacDonald's",
      "Trillium Mall",
      "Punam chambers",
    ],
    question: "Where did Dudu enjoy his first Mac meal?",
  },
  {
    correctAnswer: "American mud pie",
    options: ["Coke", "Berry Fresher", "American mud pie", "Coffee"],
    question: "What is Dudu's favourite drink from MacDonald's?",
  },
];

let currentQuestion = 0;

const questionEl = document.querySelector("#question");
const optionEl = document.querySelector("#options");
const scoreEl = document.querySelector("#score");
const nextBtn = document.querySelector("#next");
let score = 0;
showNextQuestion();
function showNextQuestion() {
  const { correctAnswer, options, question } = questionObj[currentQuestion];

  questionEl.textContent = question;
  const shuffledOpts = shuffleOptions(options);
  shuffledOpts.forEach((opt) => {
    const optionBtn = document.createElement("button");

    optionBtn.textContent = opt;
    optionEl.appendChild(optionBtn);
    optionBtn.addEventListener("click", () => {
      if (opt === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      nextQuestion();
    });
  });
}

nextBtn.addEventListener("click", () => {
  nextQuestion();
});

function nextQuestion() {
  currentQuestion++;
  scoreEl.textContent = `Score : ${score} / ${questionObj.length}`;
  optionEl.textContent = "";

  if (currentQuestion >= questionObj.length) {
    questionEl.textContent = "Quiz Completed !!!!!";
    nextBtn.remove();
  } else {
    showNextQuestion();
  }
}

function shuffleOptions(options) {
  for (let i = 0; i < 4; i++) {
    let j = Math.floor(Math.random() * 4);
    [options[i], options[j]] = [options[j], options[i]];

    return options;
  }
}
