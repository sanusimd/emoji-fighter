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

let isActive = true;
let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function () {
  let randomNumberOne = Math.floor(Math.random() * 17);
  let randomNumberTwo = Math.floor(Math.random() * 17);
  if (randomNumberOne === randomNumberTwo) {
    console.log("won");
  }

  // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
  stageEl.textContent =
    fighters[randomNumberOne] + " Vs " + fighters[randomNumberTwo];
});
