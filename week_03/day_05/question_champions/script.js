
let questionsList
let answers

const generateQuestions = () => {
  const quantity = document.querySelector("#quantity").value
  const difficulty = document.querySelector("#difficulty").value
  const url = `https://opentdb.com/api.php?amount=${quantity}&difficulty=${difficulty}`

  fetch(url)
  .then((response) => response.json())
  .then((data) => questionsList = data.results)
  .catch((error) => console.error(`error: ${error}`))
}

const askQuestion = async (questionObj) => {
  let answers = [...questionObj.incorrect_answers]
  answers.push(questionObj.correct_answer)
  answers = shuffleAnswers(answers)

  await displayCard(questionObj.question, questionObj.category, answers);

  let answerElements = document.querySelectorAll(".answer")

  answerElements.forEach(answer => {
    answer.addEventListener("click", (event) => {
      event.target.classList.add("border-success");
      answerElements.forEach(el => {
        if (el != event.target) {
          el.classList.add("invisible")
        }
      })
      questionObj["userAnswer"] = event.target.innerHTML
      nextQuestion();
    })
  })
}

const nextQuestion = (question) => {
  console.log("next question starting")
  const previous_card = document.querySelector("#questions").firstElementChild
  previous_card.classList.add("not-visible")
}

const displayCard = (question, category, answers) => {
  let answersDisplay = ''
  for (let i = 0; i < answers.length; i++) {
    answersDisplay += `<a href="#" class="card-link answer">${answers[i]}</a>`;
  }

  document.querySelector("#questions").innerHTML += `
  <div class="card col-5">
    <div class="card-body">
      <h5 class="card-title">${question}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${category}</h6>
      ${answersDisplay}
    </div>
  </div>
`
}

const shuffleAnswers = (answers) => {
  var currentIndex = answers.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = answers[currentIndex];
    answers[currentIndex] = answers[randomIndex];
    answers[randomIndex] = temporaryValue;
  }

  return answers;
}
