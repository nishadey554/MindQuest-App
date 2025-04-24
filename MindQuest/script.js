const configContainer = document.querySelector(".config-container");
const quizContainer = document.querySelector(".quiz-container");
const answerOptions = document.querySelector(".answer-options");
const nextQuestionBtn = document.querySelector(".next-question-btn");
const questionStatus = document.querySelector(".question-status");
const timerDisplay = document.querySelector(".time-duration");
const resultContainer = document.querySelector(".result-container");

//Quiz state variables
const QUIZ_TIME_LIMIT = 10;
let currentTime = QUIZ_TIME_LIMIT;
let timer = null;
let quizCategory ="Programming";
let numberOfQuestions = 5;
let currentQuestion= null;
const questionIndexHistory = [];
let correctAnswerCount = 0;

//display the quiz result and hide the quiz container
const showQuizResult = () =>{
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

let message ="";
const resultEmoji = document.querySelector(".result-emoji");

if (correctAnswerCount === 0) {
  resultEmoji.textContent = "😢";  // Sad face
  message = `Oops! You got <b>0</b> out of <b>${numberOfQuestions}</b> questions.<br>Keep practicing! 💪`;
} else if (correctAnswerCount === numberOfQuestions) {
  resultEmoji.textContent = "👑";  // Crown emoji
  message = `You got all <b>${numberOfQuestions}</b> questions right!<br>You’re a quiz master! 🧠`;
} else if (correctAnswerCount >= numberOfQuestions / 2) {
  resultEmoji.textContent = "👍";  // Thumbs up
  message = `Nice! You answered <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions correctly!`;
} else {
  resultEmoji.textContent = "🙂";  // Neutral face
  message = `You got <b>${correctAnswerCount}</b> out of <b>${numberOfQuestions}</b> questions right.<br>Keep trying!`;
}
document.querySelector(".result-message").innerHTML = message;


  //update scoreboard percentage
  const scorepercent = Math.round((correctAnswerCount/ numberOfQuestions) * 100);
  document.querySelector(".score-percentage").textContent = `Score: ${scorepercent}%`;
}

//clear and reset the timer
const resetTimer = () => {
    clearInterval(timer);
    currentTime = QUIZ_TIME_LIMIT;
    timerDisplay.textContent = `${currentTime}s`;
}

//initialize and start the timer for the  current question
const startTimer = () =>{
timer = setInterval(() => {
    currentTime--;
     timerDisplay.textContent = `${currentTime}s`;

    if(currentTime <= 0){
        clearInterval(timer);
        highlightCorrectAnswer();
        nextQuestionBtn.style.visibility ="visible";

    // Disable all answer options after one is selected
    answerOptions.querySelectorAll(".answer-option").forEach(options => options.style.pointerEvents= "none");

    }
},1000);
}

//Fetch a random question from based on the selected category
const getRandomQuestion = () => {
  const categoryQuestions = questions.find (cat => cat.category.toLowerCase() === quizCategory.toLowerCase()).questions || [];

  //Show the result if all questions have been used
  if(questionIndexHistory.length >= Math.min(categoryQuestions.length, numberOfQuestions)) {
    return showQuizResult();
  }

  const availableQuestion = categoryQuestions.filter((_, index) => !questionIndexHistory.includes(index) );
  const randomQuestion = availableQuestion[Math.floor(Math.random() * availableQuestion.length)];

  questionIndexHistory.push(categoryQuestions.indexOf(randomQuestion));
   return randomQuestion;
}

//Highlight the correct answer option and  add icon
const highlightCorrectAnswer = () => {
    const correctOption = answerOptions.querySelectorAll(".answer-option")[currentQuestion.correctAnswer];
   correctOption.classList.add("correct");
    const iconHTML = `<span class ="material-symbols-rounded">check_circle</span>`;
    correctOption.insertAdjacentHTML("beforeend", iconHTML);
}

//Handle the user's answer selection
const handleAnswer = (option, answerIndex) => {
    clearInterval(timer);

    const isCorrect = currentQuestion.correctAnswer === answerIndex;
    option.classList.add(isCorrect ? 'correct' : 'incorrect');
    !isCorrect ? highlightCorrectAnswer () : correctAnswerCount++;


//Insert icon based on correctness
const iconHTML = `<span class="material-symbols-rounded">${isCorrect ? 'check_circle' : 'cancel' }</span>`;
option.insertAdjacentHTML("beforeend", iconHTML);

// Disable all answer options after one is selected
 answerOptions.querySelectorAll(".answer-option").forEach(options => options.style.pointerEvents= "none");
 nextQuestionBtn.style.visibility ="visible";
}

//render the current question and its options in the quiz
const renderQuestion = () => 
{
    currentQuestion = getRandomQuestion();
    if(!currentQuestion)return;
    
    resetTimer();
    startTimer();

    //Update the UI
    answerOptions.innerHTML = "";
    nextQuestionBtn.style.visibility ="hidden";
    document.querySelector(".question-text").textContent = currentQuestion.question;
    questionStatus.innerHTML = `<b>${questionIndexHistory.length}</b> of <b>${numberOfQuestions}</b> Questions`;

    //Create option <li> elements and append them, and add click event listeners
    currentQuestion.options.forEach((option, index) => {
        const li =document.createElement("li");
        li.classList.add("answer-option");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () =>handleAnswer(li, index));
    });
}

//start the quiz and render the random question
const startQuiz = () =>{
    configContainer.style.display = "none";
    quizContainer.style.display = "block";

    //update the quiz category and no of question
 quizCategory = configContainer.querySelector(".category-option.active").textContent;
  numberOfQuestions = parseInt(configContainer.querySelector(".question-option.active").textContent);

    renderQuestion();
}

//Highlight the selected option on click category or no. of question
document.querySelectorAll(".category-option, .question-option").forEach(option =>{
    option.addEventListener("click", () =>{
    option.parentNode.querySelector(".active").classList.remove("active");
    option.classList.add("active");
    });
});
//Reset the quiz and return the configuration container
const resetQuiz = () =>{
    resetTimer();
    correctAnswerCount = 0;
    questionIndexHistory.length= 0;
    configContainer.style.display = "block";
    resultContainer.style.display = "none";
}

nextQuestionBtn.addEventListener("click", renderQuestion);
document.querySelector(".try-again-btn").addEventListener("click", resetQuiz);
document.querySelector(".start-quiz-btn").addEventListener("click", startQuiz);