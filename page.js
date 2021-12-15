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
let guessed = [];
let wrong = 0;

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

function wordGuess() {
  wordGuess = answer.split("").map(letter =>
    (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  document.getElementById('unknownWord').innerHTML = wordGuess;
}

pickWord();
createKeyboard();
wordGuess();
