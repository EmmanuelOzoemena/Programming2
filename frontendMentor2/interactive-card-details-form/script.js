function inputValues() {
  const cardHolderName = document.querySelector(".js-name-input").value;

  const cardNumber = document.querySelector(".js-card-input").value;

  const expiringMonth = document.querySelector(".js-month-input").value;

  const expiringYear = document.querySelector(".js-year-input").value;

  const cvcNumber = document.querySelector(".js-cvc-input").value;

  console.log(cardHolderName);
  console.log(cardNumber);
  console.log(expiringMonth);
  console.log(expiringYear);
  console.log(cvcNumber);
}

function submitForm() {
  document
    .querySelector(".js-confirm-button")
    .addEventListener("click", (event) => {
      event.preventDefault();
      inputValues();
    });
}

submitForm();
