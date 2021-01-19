const submitBtn = document.querySelector(".btn");
const inputs = document.querySelectorAll("input");
const ageElement = document.querySelector("#inputAge");
const nameElement = document.querySelector("#inputName");
const surnameElement = document.querySelector("#inputSurname");
const emailElement = document.querySelector("#inputEmail1");
const emailConfirmationElement = document.querySelector("#inputEmail2");
const passwordElement = document.querySelector("#inputPassword1");
const passwordConfirmationElement = document.querySelector("#inputPassword2");
const cgvElement = document.querySelector("#acceptCGV");
const cgvElement2 = document.querySelector("#refuseCGV");

let allValid = false;

submitBtn.disabled = true;

nameElement.addEventListener("change", nameIsCorrect);
surnameElement.addEventListener("change", surnameIsCorrect);
ageElement.addEventListener("change", ageIsCorrect);
emailElement.addEventListener("change", () => {
  emailIsCorrect();
  emailIsMatching();
});
emailConfirmationElement.addEventListener("change", emailIsMatching);
passwordElement.addEventListener("change", () => {
  passwordIsCorrect();
  passwordIsMatching();
});
passwordConfirmationElement.addEventListener("change", passwordIsMatching);
cgvElement.addEventListener("change", CGVisChecked);
cgvElement2.addEventListener("change", CGVisChecked);
inputs.forEach(input => {
  input.addEventListener("change", disableSubmitBtn)
})

// submitBtn.addEventListener("click", redirectTo);
document.querySelector("form").addEventListener("change", disableSubmitBtn);


function nameIsCorrect() {
  if (nameElement.value.length < 1) {
    elementIsIncorrect(nameElement);
  } else {
    elementIsCorrect(nameElement);
    return true;
  }
}

function surnameIsCorrect() {
  if (surnameElement.value.length < 3) {
    elementIsIncorrect(surnameElement);
  } else {
    elementIsCorrect(surnameElement);
    return true;
  }
}

function ageIsCorrect() {
  if (ageElement.value.split("").filter(Number).join("") > 18) {
    elementIsCorrect(ageElement);
    return true;
  } else {
    elementIsIncorrect(ageElement);
  }
}

function emailIsCorrect() {
  if (emailElement.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/)) {
    elementIsCorrect(emailElement);
    return true;
  } else {
    elementIsIncorrect(emailElement);
  }
}

function emailIsMatching() {
  if (emailElement.value != emailConfirmationElement.value) {
    elementIsIncorrect(emailConfirmationElement);
  } else {
    elementIsCorrect(emailConfirmationElement);
    return true;
  }
}

function passwordIsCorrect() {
  if (passwordElement.value.length < 6) {
    elementIsIncorrect(passwordElement);
  } else {
    elementIsCorrect(passwordElement);
    return true;
  }
}

function passwordIsMatching() {
  if (passwordElement.value != passwordConfirmationElement.value) {
    elementIsIncorrect(passwordConfirmationElement);
  } else {
    elementIsCorrect(passwordConfirmationElement);
    return true;
  }
}

function disableSubmitBtn() {
  if (
    nameIsCorrect() &&
    surnameIsCorrect() &&
    ageIsCorrect() &&
    emailIsCorrect() &&
    emailIsMatching() &&
    passwordIsCorrect() &&
    passwordIsMatching() &&
    CGVisChecked()
  ) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function CGVisChecked() {
  if (cgvElement.checked == true) {
    cgvElement.previousElementSibling.classList.add("invisible");
    return true;
  } else {
    cgvElement.previousElementSibling.classList.remove("invisible");
    return false;
  }
}

function elementIsCorrect(element) {
  element.nextElementSibling.classList.add("invisible");
  element.classList.add("border-success");
  element.classList.remove("border-danger");
  allValid = true;
}

function elementIsIncorrect(element) {
  element.nextElementSibling.classList.remove("invisible");
  element.classList.remove("border-success");
  element.classList.add("border-danger");
  allValid = false;
}

function redirectTo() {
  window.location.href = "confirmation.html";
}
