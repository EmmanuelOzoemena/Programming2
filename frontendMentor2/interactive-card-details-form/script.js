let notFilled = false;
let isInvalid = false;

const today = new Date();
const currentYear = today.getFullYear();

function cardHolderName() {
  const inputField = document.querySelector(".js-name-input");
  const cardHolderName = inputField.value;
  let errorMsg = document.querySelector(".js-name-error");

  if (cardHolderName === "") {
    errorMsg.innerHTML = "Can't be blank";
    inputField.classList.add("error-input");
    notFilled = true;
  } else {
    errorMsg.innerHTML = "";
    inputField.classList.remove("error-input");
  }
}

function cardNumber() {
  const inputField = document.querySelector(".js-card-input");
  let errorMsg = document.querySelector(".js-card-error");
  let cardNumber = inputField.value.replace(/\s/g, ""); // Remove existing spaces

  // Remove non-digit characters
  cardNumber = cardNumber.replace(/\D/g, "");

  // Add space after every 4 digits
  const formattedNumber = cardNumber.match(/.{1,4}/g)?.join(" ") || "";

  inputField.value = formattedNumber;
  // console.log(formattedNumber);

  // Validation
  if (cardNumber === "") {
    errorMsg.innerHTML = "Can't be blank";
    inputField.classList.add("error-input");
    notFilled = true;
  } else if (cardNumber.length !== 16) {
    errorMsg.innerHTML = "Card number must be 16 digits";
    inputField.classList.add("error-input");
    isInvalid = true;
  } else {
    errorMsg.innerHTML = "";
    inputField.classList.remove("error-input");
  }
}

function expiringMonth() {
  const inputField = document.querySelector(".js-month-input");
  const expiringMonth = inputField.value;
  let errorMsg = document.querySelector(".js-month-error");

  // Validation
  if (expiringMonth === "") {
    errorMsg.innerHTML = "Can't be blank";
    inputField.classList.add("error-input");
    notFilled = true;
  } else if (expiringMonth < 1 || expiringMonth > 12) {
    errorMsg.innerHTML = "Insert a correct month";
    inputField.classList.add("error-input");
    isInvalid = true;
  } else {
    errorMsg.innerHTML = "";
    inputField.classList.remove("error-input");
  }
}

function expiringYear() {
  const inputField = document.querySelector(".js-year-input");
  const expiringYear = inputField.value;
  let errorMsg = document.querySelector(".js-year-error");

  // Validation
  if (expiringYear === "") {
    errorMsg.innerHTML = "Can't be blank";
    inputField.classList.add("error-input");
    notFilled = true;
  } else if (expiringYear <= 25) {
    errorMsg.innerHTML = `Must be higher than ${currentYear}`;
    inputField.classList.add("error-input");
    isInvalid = true;
  } else {
    errorMsg.innerHTML = "";
    inputField.classList.remove("error-input");
  }
}

function cvcNumber() {
  const inputField = document.querySelector(".js-cvc-input");
  const cvcNumber = inputField.value;
  let errorMsg = document.querySelector(".js-cvc-error");

  // Validation
  if (cvcNumber === "") {
    errorMsg.innerHTML = "Can't be blank";
    inputField.classList.add("error-input");
    notFilled = true;
  } else if (cvcNumber.length !== 3) {
    errorMsg.innerHTML = "Must be 3 digits";
    inputField.classList.add("error-input");
    isInvalid = true;
  } else {
    errorMsg.innerHTML = "";
    inputField.classList.remove("error-input");
  }
}

function allInputValues() {
  notFilled = false;
  isInvalid = false;

  cardHolderName();
  cardNumber();
  expiringMonth();
  expiringYear();
  cvcNumber();
}

function successful() {
  allInputValues();

  const successful = document.querySelector(".successful-reg");
  const formLayout = document.querySelector(".js-form");

  if (!notFilled && !isInvalid) {
    successful.style.display = "block";
    formLayout.classList.add("remove-layout");

    setTimeout(function () {
      successful.style.display = "none";
      formLayout.classList.remove("remove-layout");

      document.forms[0].reset(); // refresh the form
    }, 3000);
  }
}

function submitForm() {
  document
    .querySelector(".js-confirm-button")
    .addEventListener("click", (event) => {
      event.preventDefault();
      successful();
    });
}

submitForm();
