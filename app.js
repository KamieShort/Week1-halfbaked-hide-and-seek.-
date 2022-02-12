const shedButton = document.getElementById("shed-button");
const treeButton = document.getElementById("tree-button");
const boulderButton = document.getElementById("boulder-button");

const shedContainer = document.getElementById("shed-container");
const treeContainer = document.getElementById("tree-container");
const boulderContainer = document.getElementById("boulder-container");

const totalEl = document.getElementById("total");
const lossesEl = document.getElementById("losses");
const winsEl = document.getElementById("wins");

// initialize state
const hidingPlaces = ["tree", "shed", "boulder"];

let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener("click", () => {
  const hidingSpot = Math.floor(Math.random() * 3);
  const answer = hidingPlaces[hidingSpot];
  handleGuess(answer, "shed");

  if (userGuess === 1) {
    shedContainer.classList.add("face");
  } else if (userGuess === 2) {
    boulderContainer.classList.add("face");
  } else {
    treeContainer.classList.add("face");
  }
  totalGuesses++;
});

treeButton.addEventListener("click", () => {
  const hidingSpot = Math.floor(Math.random() * 3);
  const answer = hidingPlaces[hidingSpot];
  handleGuess(answer, "tree");

  if (userGuess === 1) {
    boulderContainer.classList.add("face");
  } else if (userGuess === 3) {
    treeContainer.classList.add("face");
  } else {
    shedContainer.classList.add("face");
  }
  correctGuesses++;
});

boulderButton.addEventListener("click", () => {
  const hidingSpot = Math.floor(Math.random() * 3);
  const answer = hidingPlaces[hidingSpot];
  handleGuess(answer, "boulder");

  if (userGuess === 1) {
    shedContainer.classList.add("face");
  } else if (userGuess === 2) {
    treeContainer.classList.add("face");
  } else {
    boulderContainer.classList.add("face");
  }
  correctGuesses++;
});
function handleGuess(userGuess, correctSpot) {
  // reset the styles
  shedContainer.classList.remove("face");
  boulderContainer.classList.remove("face");
  treeContainer.classList.remove("face");
  // then increment the guesses
  totalGuesses++;
  const correctHidingPlaceEl = document.getElementById(
    `${correctSpot}-container`
  );

  if (userGuess === correctSpot) {
    correctGuesses++;
    correctHidingPlaceEl.classList.add("face");
  } else if (userGuess === 2) {
    treeContainer.classList.add("face");
    // totalGuesses++;
  } else {
    shedContainer.classList.add("face");

    // totalGuesses++;
    // correctHidingPlaceEl.classList.add("face");
  }
  winsEl.textContent = correctGuesses;
  totalEl.textContent = totalGuesses;
  lossesEl.textContent = totalGuesses - correctGuesses;
}
