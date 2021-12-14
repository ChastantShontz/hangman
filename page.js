var words = [
  "bat",
  "cat",
  "fat",
  "hat",
  "mat",
  "pat",
  "rat",
  "sat",
  "vat"
];

let answer = "";
let guesses = [];
let wrong = 0;
let maxWrong = 6;

function pickWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

function createKeyboard() {
  let buttons = "abcdefghijklmnopqrstuvwxyz".split("").map(letter =>
    `
      <button
        id="letter"
        onClick="handleGuess("letter")"
      >
        ` + letter + `
      </button>
    `).join("");
  document.getElementById("keyboard").innerHTML = buttons;
}

pickWord();
createKeyboard();
