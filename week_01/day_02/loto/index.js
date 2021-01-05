
document.querySelector('#submit').addEventListener("click", (event) => {
  event.preventDefault();
  surnameIsPresent();
  nameIsPresent();
  emailIsPresent();
  emailIsCorrect();
  formIscomplete() ? isWinning() : null
});


function surnameIsPresent() {
  console.log("Hello checkSurname")
  let surname = document.querySelector("#surname").value
  let surnameMessage = document.querySelector("#no_surname")

  if (!surname.length) {
    surnameMessage.style.display = "block";
    return false;
  }
  else {
    surnameMessage.style.display = "none";
    return true;
  }
}

function nameIsPresent() {
  console.log("Hello checkName")
  let name = document.querySelector("#name").value
  let nameMessage = document.querySelector("#no_name")

  if (!name.length) {
    nameMessage.style.display = "block";
    return false;
  }
  else {
    nameMessage.style.display = "none";
    return true;
  }
}

function emailIsPresent() {
  console.log("Hello checkName")
  let email = document.querySelector("#email").value
  let noEmailMessage = document.querySelector("#no_email")

  if (!email.length) {
    noEmailMessage.style.display = "block";
    return false;
  }
  else {
    noEmailMessage.style.display = "none";
    return true;
  }
}

function emailIsCorrect() {
  console.log("Hello checkEmail")
  let email = document.querySelector("#email").value
  let emailIncorrectMessage = document.querySelector("#email_incorrect")

  if ( email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/) && email.length > 8 && email.length < 30 ) {
    emailIncorrectMessage.style.display = "none";
    return true
  }
  else {
    emailIncorrectMessage.style.display = "block";
    return false;
  }
}

function formIscomplete() {
  if ( nameIsPresent() && surnameIsPresent() && emailIsPresent() && emailIsCorrect() && numbersAreCorrect() ) {
    console.log("TOUT EST OK");
    return true;
  }
  else {
    hidePreviousResults();
    return false;
  }
}

function numbersAreCorrect() {
  let submittedNumbers = document
    .querySelector("#loto_numbers")
    .value.split("")
    .map((number) => Number(number))
    .filter(number =>  !Number.isNaN(number));

    if (submittedNumbers.length == 6) {
      document.querySelector("#numbers_incorrect").style.display = "none"
      return true
    }
    else {
      document.querySelector("#numbers_incorrect").style.display = "block"
      return false
    }
}

function isWinning() {
  console.log("Hello checkNumber");
  let submittedNumbers = document
    .querySelector("#loto_numbers")
    .value.split("")
    .map((number) => Number(number));


  let randomNumbers = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
  ];

  let isLostMessage = document.querySelector("#is_lost");
  let isWonMessage = document.querySelector("#is_won");
  let winnerNumbers = document.querySelector("#winner_numbers")

  if (
    JSON.stringify(submittedNumbers.sort()) ===
    JSON.stringify(randomNumbers.sort())
  ) {
    isWonMessage.style.display = "block";
    isLostMessage.style.display = "none";
    return true;
  } else {
    isLostMessage.style.display = "block";
    isWonMessage.style.display = "none";
    winnerNumbers.innerHTML = randomNumbers
    winnerNumbers.style.display = "block"
    return false;
  }
}

function hidePreviousResults() {
  document.querySelector("#is_lost").style.display = "none";
  document.querySelector("#is_won").style.display = "none";
  document.querySelector("#winner_numbers").style.display = "none";
}
