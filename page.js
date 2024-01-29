let words = [
  "ali",
  "aspen",
  "ben",
  "beth",
  "buddy",
  "celia",
  "charlie",
  "chastant",
  "dante",
  "david",
  "grady"
  "kalen",
  "liam",
  "lindsey",
  "marc",
  "megan",
  "nadia",
  "nolan",
  "peggy",
  "pete",
  "ryan",
  "sarah",
  "sydney",
  "tom",
  "tommy",
  "weston",
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
  document.getElementById("guessedLetters").innerHTML = guessed.join(", ").replace(/-/g, "space");
  document.getElementById(chosenLetter).disabled = true;
  document.getElementById(chosenLetter).style.opacity = "50%";
  document.getElementById(chosenLetter).style.cursor = "default";
  document.getElementById(chosenLetter).classList.remove("letterHover");
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
    let disable = document.getElementsByClassName("letter");
    var rep;
    for (rep = 0; rep < disable.length; rep++) {
      disable[rep].disabled = true;
    }
    let transparent = document.getElementsByClassName("letter");
    var rep;
    for (rep = 0; rep < transparent.length; rep++) {
      transparent[rep].style.opacity = "50%";
    }
    let cursor = document.getElementsByClassName("letter");
    var rep;
    for (rep = 0; rep < cursor.length; rep++) {
      cursor[rep].style.cursor = "default";
    }
    let press = document.getElementsByClassName("letter");
    var rep;
    for (rep = 0; rep < press.length; rep++) {
      press[rep].classList.remove("letterHover");
    }
    document.getElementById("coverCont").style.display = "flex";
    document.getElementById("message").innerHTML = "You won!!!";
  }
}

function youLost() {
  if (wrong == 6) {
    let disable = document.getElementsByClassName("letter");
    var rep;
    for (rep = 0; rep < disable.length; rep++) {
      disable[rep].disabled = true;
    }
    let transparent = document.getElementsByClassName("letter");
    var rep;
    for (rep = 0; rep < transparent.length; rep++) {
      transparent[rep].style.opacity = "50%";
    }
    let cursor = document.getElementsByClassName("letter");
    var rep;
    for (rep = 0; rep < cursor.length; rep++) {
      cursor[rep].style.cursor = "default";
    }
    let press = document.getElementsByClassName("letter");
    var rep;
    for (rep = 0; rep < press.length; rep++) {
      press[rep].classList.remove("letterHover");
    }
    document.getElementById("coverCont").style.display = "flex";
    document.getElementById("message").innerHTML = "You lost...the answer was '" + answer.replace(/-/g, "&nbsp;") + "'";
  }
}

function reset() {
  guessed = [];
  document.getElementById("guessedLetters").innerHTML = guessed;
  wrong = 0;
  document.getElementById("wrong").innerHTML = wrong;
  pickWord();
  wordGuess();
  let enable = document.getElementsByClassName("letter");
  var rep;
  for (rep = 0; rep < enable.length; rep++) {
    enable[rep].removeAttribute("disabled");
  }
  let transparent = document.getElementsByClassName("letter");
  var rep;
  for (rep = 0; rep < transparent.length; rep++) {
    transparent[rep].style.opacity = "100%";
  }
  let cursor = document.getElementsByClassName("letter");
  var rep;
  for (rep = 0; rep < cursor.length; rep++) {
    cursor[rep].style.cursor = "pointer";
  }
  let press = document.getElementsByClassName("letter");
  var rep;
  for (rep = 0; rep < press.length; rep++) {
    press[rep].classList.add("letterHover");
  }
  document.getElementById("hangman").src = "img/hangman0.png"
  document.getElementById("coverCont").style.display = "none";
}

function hide() {
  document.getElementById("coverCont").style.display = "none";
}

pickWord();
wordGuess();
