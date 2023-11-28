let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

let num = 1;
let isActive = false;
let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");
let paraEl = document.getElementById("para-el");

function startGame() {}

fightButton.addEventListener("click", function () {
  // isActive = true;
  // countDown();
  renderGame();
});

function renderGame() {
  let randomNumberOne = Math.floor(Math.random() * 17);
  let randomNumberTwo = Math.floor(Math.random() * 17);
  if (randomNumberOne === randomNumberTwo) {
    console.log("won");
    paraEl.textContent = "You won" + " " + num;
    num++;
    console.log(num);
  }
  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  stageEl.textContent =
    fighters[randomNumberOne] + " Vs " + fighters[randomNumberTwo];
}

// Timer
function countDown() {
  let count = 60;
  const timer = setInterval(function () {
    count--;
    console.log(count);
    if (count === 0) {
      clearInterval(timer);
      console.log("Time's up!");
    }
  }, 1000);
}
