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

function wordGuess() {
  chosenWord = answer.split("").map(letter =>
    (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join("");
  document.getElementById("unknownWord").innerHTML = chosenWord;
}

function pickLetter(chosenLetter) {
  guessed.indexOf(chosenLetter) == -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).disabled = true;
  if (answer.indexOf(chosenLetter) >= 0) {
    wordGuess();
    youWon();
  }
  else if (answer.indexOf(chosenLetter) == -1) {
    wrong++;
    document.getElementById("wrong").innerHTML = wrong;
    youLost();
  }
}

function youWon() {
  if (chosenWord == answer) {
    alert("You Won!");
  }
}

function youLost() {
  if (wrong == 6) {
    alert("You Lost...");
  }
}

function reset() {
  guessed = [];
  wrong = 0;
  document.getElementById("wrong").innerHTML = wrong;
  pickWord();
  wordGuess();
  let enable = document.getElementsByClassName("letter");
  var rep;
  for (rep = 0; rep < enable.length; rep++) {
    enable[rep].removeAttribute("disabled");
  }
}

pickWord();
wordGuess();
