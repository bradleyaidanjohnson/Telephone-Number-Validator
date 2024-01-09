const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

checkButton.addEventListener("click", () => {
  if (userInput.value === "") {
    alert("Please provide a phone number");
    return;
  }
  const
})

clearButton.addEventListener("click", () => {
  results.innerHTML = "";
})