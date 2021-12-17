let words = [
  "ali-boolani",
  "aunt-peggy",
  "beth",
  "big-boi-ben",
  "buddy-the-elf",
  "celia",
  "chaz",
  "chestnut",
  "daft-pika",
  "dantes-inferno",
  "david-moody",
  "easton",
  "girly",
  "he-ryan",
  "jasper-henderson",
  "kalen",
  "marc-on-the-water",
  "mcspeeds",
  "megglie",
  "nolan-hamboerger",
  "not-cindy",
  "pete-supreme",
  "sarnum",
  "she-ryan",
  "squidney",
  "tlapa-sandwich",
  "tom-robins-son",
  "yung-grady"
];

let answer = "";
let guessed = [];
let wrong = 0;

function pickWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

function wordGuess() {
  chosenWord = answer.split("").map(letter =>
    (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join("").replace(/-/g, "&nbsp;");
  document.getElementById("unknownWord").innerHTML = chosenWord;
}

function pickLetter(chosenLetter) {
  guessed.indexOf(chosenLetter) == -1 ? guessed.push(chosenLetter) : null;
  document.getElementById("guessed").innerHTML = guessed.join(", ");
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
  document.getElementById("hangman").src = "img/hangman" + wrong + ".png"
}

function youWon() {
  let finalWord = chosenWord.replace(/&nbsp;/g, "-");
  if (finalWord == answer) {
    alert("You won!");
    let disable = document.getElementsByClassName("letter");
    var rep;
    for (rep = 0; rep < disable.length; rep++) {
      disable[rep].disabled = true;
    }
  }
}

function youLost() {
  if (wrong == 6) {
    alert("You lost...the answer was " + answer + ".");
    let disable = document.getElementsByClassName("letter");
    var rep;
    for (rep = 0; rep < disable.length; rep++) {
      disable[rep].disabled = true;
    }
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
  document.getElementById("hangman").src = "img/hangman0.png"
}

pickWord();
wordGuess();
