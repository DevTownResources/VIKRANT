let score = 0;
localStorage.setItem("highscore", 0);
let high = localStorage.getItem("highscore");
// console.log(high, "high");

function correct() {
  score = score + 100;
  let livescore = document.getElementById("livescore");
  livescore.innerHTML = score;
  console.log("correct answer");
}

function wrong() {
  let livescore = document.getElementById("livescore");
  livescore.innerHTML = score;
  console.log("wrong answer");
}

function submit() {
  let livescore = document.getElementById("livescore");
  livescore.innerHTML = score;
  console.log("live score", score);

  if (high < livescore) {
    localStorage.setItem("highscore", score);
  }

  let highscore = document.getElementById("highscore");
  highscore.innerHTML = high;
}
