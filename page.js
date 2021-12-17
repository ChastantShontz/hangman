var words = [
  "bat",
  "man"
];

let answer = "";
let guessed = [];
let wrong = 0;

function pickWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

function pickLetter(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute('disabled', true);
  if (answer.indexOf(chosenLetter) >= 0) {
    wordGuess();
    checkIfGameWon();
  }
  else if (answer.indexOf(chosenLetter) === -1) {
    wrong++;
  }
}

function wordGuess() {
  chosenWord = answer.split("").map(letter =>
    (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  document.getElementById('unknownWord').innerHTML = chosenWord;
}

pickWord();
wordGuess();
