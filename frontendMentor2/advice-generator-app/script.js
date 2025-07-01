let title = document.querySelector(".js-title");
let adviceText = document.querySelector(".js-advice-text");
let button = document.querySelector(".js-submit-button");

button.addEventListener("click", () => {
  getAdvice();
});

let url = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  try {
    title.textContent = "Loading...";
    const response = await fetch(url);
    const result = await response.json();

    if (result.slip) {
      title.innerHTML = `Advice #${result.slip.id}`;
      adviceText.innerHTML = `"${result.slip.advice}"`;
    }
  } catch (error) {
    title.textContent = "Oops!";
    adviceText.textContent = "Could not fetch advice. Try again.";
  }
};
