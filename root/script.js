const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const validityCheck = (validity, str) => {
  if (!validity){
    results.innerHTML = `Invalid US number: ${str}`;
  } else {
    results.innerHTML = `Valid US number: ${str}`;
  }
}

checkButton.addEventListener("click", () => {
  const entry = userInput.value;
  if (entry === "") {
    alert("Please provide a phone number");
    return;
  }
  const regEx = /()+-?/gi;
  const digits = /[^0-9]/gi;
  const entryDigitsOnly = entry.replace(digits, '');
  console.log(entryDigitsOnly.length);
  console.log(entryDigitsOnly);
  if (entryDigitsOnly.length === 10 || (entryDigitsOnly.length === 11 && entryDigitsOnly[0] === '1')) {
    const regExParenthesesThreeDigits = /\(\d{3}\)/g;
    const regExParenthesesContainingInvalid = /\(.*[^\d]\)/g;
    const regExDashContainingInvalid = /\-\d{2}\-/g;
    console.log(entry.match(regExParenthesesThreeDigits));
    if (entry[0] === '-' || 
    ((entry.includes(")") || entry.includes("(")) && !entry.match(regExParenthesesThreeDigits)) ||
    entry.match(regExParenthesesContainingInvalid) ||
    entry.match(regExDashContainingInvalid)) {
      validityCheck(false, entry);
    } else {
      validityCheck(true, entry);
    }
  } else {
    validityCheck(false, entry);
  }
})

clearButton.addEventListener("click", () => {
  results.innerHTML = "";
})